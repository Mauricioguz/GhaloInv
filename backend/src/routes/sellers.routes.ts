import { Router } from 'express';
import { PrismaClient } from '../generated/client';

const router = Router();
const prisma = new PrismaClient();

// List all sellers
router.get('/', async (req, res) => {
  try {
    const sellers = await prisma.seller.findMany({
      include: {
        warehouse: true
      }
    });
    res.json(sellers);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Error fetching sellers' });
  }
});

// List sellers by warehouse
router.get('/warehouse/:warehouseId', async (req, res) => {
  try {
    const warehouseId = parseInt(req.params.warehouseId);
    const sellers = await prisma.seller.findMany({
      where: {
        warehouse_id: warehouseId,
        active: true
      }
    });
    res.json(sellers);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Error fetching sellers for warehouse' });
  }
});

// Create seller
router.post('/', async (req, res) => {
  try {
    const { name, code, warehouse_id, commission_pct } = req.body;
    const seller = await prisma.seller.create({
      data: {
        name,
        code,
        warehouse_id: Number(warehouse_id),
        commission_pct: commission_pct !== undefined ? parseFloat(commission_pct) : 0,
        active: true
      }
    });
    res.status(201).json(seller);
  } catch (error: any) {
    console.error('Error creating seller:', error);
    res.status(400).json({ error: error.message || 'Error creating seller' });
  }
});

// Update seller
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, code, warehouse_id, commission_pct, active } = req.body;
    const seller = await prisma.seller.update({
      where: { id },
      data: {
        name,
        code,
        warehouse_id: warehouse_id ? Number(warehouse_id) : undefined,
        commission_pct: commission_pct !== undefined ? parseFloat(commission_pct) : undefined,
        active: active !== undefined ? active : undefined
      }
    });
    res.json(seller);
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Error updating seller' });
  }
});

// Delete (Soft) seller
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const seller = await prisma.seller.update({
      where: { id },
      data: { active: false }
    });
    res.json({ message: 'Seller marked as inactive', seller });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Error deleting seller' });
  }
});

// Get all payouts
router.get('/payouts/all', async (req, res) => {
  try {
    const payouts = await prisma.commissionPayout.findMany({
      include: { seller: true },
      orderBy: { date: 'desc' }
    });
    res.json(payouts);
  } catch (error: any) {
    console.error('Error fetching all payouts:', error);
    res.status(500).json({ error: error.message || 'Error fetching payouts' });
  }
});

// Create a payout for a seller
router.post('/:id/payouts', async (req, res) => {
  try {
    const sellerId = parseInt(req.params.id);
    const { amount, date, notes, month, year } = req.body;
    const payout = await prisma.commissionPayout.create({
      data: {
        seller_id: sellerId,
        amount: parseFloat(amount),
        date: new Date(date),
        notes,
        month: parseInt(month),
        year: parseInt(year)
      }
    });
    res.status(201).json(payout);
  } catch (error: any) {
    console.error('Error creating payout:', error);
    res.status(400).json({ error: error.message || 'Error creating payout' });
  }
});

// Get commissions and payouts report grouped by seller, year, and month
// Get commissions and payouts report grouped by seller, year, and month
router.get('/commissions/report', async (req, res) => {
  try {
    // Auto-migrate sellers with 0% commission to 100% to guarantee correct calculation
    await prisma.seller.updateMany({
      where: { commission_pct: 0 },
      data: { commission_pct: 100 }
    });

    const sellers = await prisma.seller.findMany();
    const documents = await prisma.inventoryDocument.findMany({
      where: {
        doc_type: 'OUT',
        status: 'APPLIED',
        seller_id: { not: null }
      },
      include: {
        lines: true
      }
    });

    const payouts = await prisma.commissionPayout.findMany();
    
    // Group monthly sales data by seller
    const sellerPeriods: { [key: number]: any[] } = {};

    for (const doc of documents) {
      const seller = sellers.find(s => s.id === doc.seller_id);
      if (!seller) continue;

      const date = new Date(doc.date);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth() + 1;

      const docSales = doc.lines.reduce((sum, line) => sum + (line.total_sale || 0), 0);
      const docCost = doc.lines.reduce((sum, line) => sum + (line.total_cost || 0), 0);

      if (!sellerPeriods[seller.id]) {
        sellerPeriods[seller.id] = [];
      }

      let period = sellerPeriods[seller.id].find(p => p.year === year && p.month === month);
      if (!period) {
        period = {
          seller_id: seller.id,
          seller_name: seller.name,
          seller_code: seller.code,
          commission_pct: seller.commission_pct,
          year,
          month,
          sales_total: 0,
          cost_total: 0,
          commission_earned: 0,
          payouts_total: 0,
          balance: 0
        };
        sellerPeriods[seller.id].push(period);
      }
      period.sales_total += docSales;
      period.cost_total += docCost;
    }

    // Calculate commission_earned based on consolidated net utility per period and sort chronologically
    Object.keys(sellerPeriods).forEach(sId => {
      sellerPeriods[Number(sId)].forEach(period => {
        const netUtility = period.sales_total - period.cost_total;
        period.commission_earned = netUtility > 0 ? netUtility * (period.commission_pct / 100) : 0;
      });
      sellerPeriods[Number(sId)].sort((a, b) => a.year !== b.year ? a.year - b.year : a.month - b.month);
    });

    const resultList: any[] = [];

    for (const seller of sellers) {
      const sId = seller.id;
      const sPeriods = sellerPeriods[sId] || [];
      const sPayouts = payouts.filter(p => p.seller_id === sId);
      const totalPaid = sPayouts.reduce((sum, p) => sum + p.amount, 0);

      // Scenario A: payouts exist but no documents registered for the seller
      if (sPeriods.length === 0 && sPayouts.length > 0) {
        const payMap: { [key: string]: any } = {};
        for (const pay of sPayouts) {
          const key = `${pay.year}-${pay.month}`;
          if (!payMap[key]) {
            payMap[key] = {
              seller_id: seller.id,
              seller_name: seller.name,
              seller_code: seller.code,
              commission_pct: seller.commission_pct,
              year: pay.year,
              month: pay.month,
              sales_total: 0,
              cost_total: 0,
              commission_earned: 0,
              payouts_total: 0,
              balance: 0
            };
          }
          payMap[key].payouts_total += pay.amount;
          payMap[key].balance -= pay.amount;
        }
        resultList.push(...Object.values(payMap));
        continue;
      }

      // Scenario B: both exist, allocate chronologically
      let remainingPaid = totalPaid;
      for (let i = 0; i < sPeriods.length; i++) {
        const period = sPeriods[i];
        const isLast = i === sPeriods.length - 1;
        if (isLast) {
          period.payouts_total = remainingPaid;
          period.balance = period.commission_earned - remainingPaid;
        } else {
          const toAllocate = Math.min(remainingPaid, period.commission_earned);
          period.payouts_total = toAllocate;
          period.balance = period.commission_earned - toAllocate;
          remainingPaid -= toAllocate;
        }
      }
      resultList.push(...sPeriods);
    }

    resultList.sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      if (b.month !== a.month) return b.month - a.month;
      return a.seller_name.localeCompare(b.seller_name);
    });

    res.json(resultList);
  } catch (error: any) {
    console.error('Error generating commission report:', error);
    res.status(500).json({ error: error.message || 'Error generating report' });
  }
});

// Get detailed commission list sorted by date/document
router.get('/commissions/details', async (req, res) => {
  try {
    // Auto-migrate sellers with 0% commission to 100% to guarantee correct calculation
    await prisma.seller.updateMany({
      where: { commission_pct: 0 },
      data: { commission_pct: 100 }
    });

    const documents = await prisma.inventoryDocument.findMany({
      where: {
        doc_type: 'OUT',
        status: 'APPLIED',
        seller_id: { not: null }
      },
      include: {
        lines: true,
        seller: true
      },
      orderBy: { date: 'desc' }
    });

    const result = documents.map(doc => {
      const seller = doc.seller;
      if (!seller) return null;

      const sales_total = doc.lines.reduce((sum, line) => sum + (line.total_sale || 0), 0);
      const cost_total = doc.lines.reduce((sum, line) => sum + (line.total_cost || 0), 0);
      const utility = sales_total - cost_total;
      const commission_earned = utility * (seller.commission_pct / 100);

      return {
        document_id: doc.id,
        document_number: doc.document_number,
        date: doc.date,
        seller_id: seller.id,
        seller_name: seller.name,
        seller_code: seller.code,
        commission_pct: seller.commission_pct,
        sales_total,
        cost_total,
        utility,
        commission_earned
      };
    }).filter(Boolean);

    res.json(result);
  } catch (error: any) {
    console.error('Error generating detailed commission report:', error);
    res.status(500).json({ error: error.message || 'Error generating detailed report' });
  }
});

export default router;

