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
    const { name, code, warehouse_id } = req.body;
    const seller = await prisma.seller.create({
      data: {
        name,
        code,
        warehouse_id: Number(warehouse_id),
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
    const { name, code, warehouse_id, active } = req.body;
    const seller = await prisma.seller.update({
      where: { id },
      data: {
        name,
        code,
        warehouse_id: warehouse_id ? Number(warehouse_id) : undefined,
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

export default router;
