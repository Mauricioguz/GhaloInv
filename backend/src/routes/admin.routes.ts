import { Router } from 'express';
import { PrismaClient } from '../generated/client';

const router = Router();
const prisma = new PrismaClient();

// Delete all inventory transactions and balances
router.post('/clear-data', async (req, res) => {
  try {
    const { keepCatalog } = req.body;
    console.log(`[ADMIN] Clearing data. keepCatalog: ${keepCatalog}`);

    await prisma.$transaction(async (tx) => {
      // 1. Delete transactions
      await tx.inventoryLedger.deleteMany({});
      await tx.inventoryDocumentLine.deleteMany({});
      await tx.inventoryDocument.deleteMany({});
      await tx.inventoryBalance.deleteMany({});
      await tx.auditLog.deleteMany({});
      
      // 2. Delete catalog tables if keepCatalog is false
      if (!keepCatalog) {
        await tx.seller.deleteMany({});
        await tx.warehouse.deleteMany({});
        await tx.product.deleteMany({});
      }
    });

    res.json({ message: 'Data cleared successfully' });
  } catch (error: any) {
    console.error('[ADMIN] Clear data error:', error);
    res.status(500).json({ error: error.message || 'Error clearing data' });
  }
});

export default router;
