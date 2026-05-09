import { Router } from 'express';
import { PrismaClient } from '../generated/client';

const router = Router();
const prisma = new PrismaClient();

// List all warehouses
router.get('/', async (req, res) => {
  try {
    const warehouses = await prisma.warehouse.findMany({
      include: {
        balances: true
      }
    });
    res.json(warehouses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching warehouses' });
  }
});

// Create warehouse
router.post('/', async (req, res) => {
  console.log(`[BACKEND] Creating warehouse with body:`, req.body);
  try {
    const data = { ...req.body };
    delete data.balances; // Cannot create balances directly here
    
    // Ensure active is boolean if provided
    if (data.active !== undefined) data.active = String(data.active) === 'true';

    const warehouse = await prisma.warehouse.create({
      data: data
    });
    res.status(201).json(warehouse);
  } catch (error) {
    console.error('[BACKEND] Create warehouse error:', error);
    res.status(400).json({ error: 'Error creating warehouse' });
  }
});

// Update warehouse
router.put('/:id', async (req, res) => {
  console.log(`[BACKEND] Updating warehouse ${req.params.id} with body:`, req.body);
  try {
    const { id, balances, ...updateData } = req.body;
    
    // Ensure active is boolean if provided
    if (updateData.active !== undefined) updateData.active = String(updateData.active) === 'true';

    const warehouse = await prisma.warehouse.update({
      where: { id: parseInt(req.params.id) },
      data: updateData
    });
    res.json(warehouse);
  } catch (error) {
    console.error('[BACKEND] Update warehouse error:', error);
    res.status(400).json({ error: 'Error updating warehouse' });
  }
});

// Delete (Soft) warehouse
router.delete('/:id', async (req, res) => {
  try {
    const warehouse = await prisma.warehouse.update({
      where: { id: parseInt(req.params.id) },
      data: { active: false }
    });
    res.json({ message: 'Warehouse marked as inactive', warehouse });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting warehouse' });
  }
});

export default router;
