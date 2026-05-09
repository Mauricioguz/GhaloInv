import { Router } from 'express';
import { PrismaClient } from '../generated/client';

const router = Router();
const prisma = new PrismaClient();

// List all products
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        balances: {
            include: { warehouse: true }
        }
      }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Create product
router.post('/', async (req, res) => {
  console.log(`[BACKEND] Creating product with body:`, req.body);
  try {
    const data = { ...req.body };
    
    // Sanitize numeric fields
    if (data.presentation_g !== undefined) data.presentation_g = parseInt(data.presentation_g);
    if (data.cost_standard !== undefined) data.cost_standard = parseFloat(data.cost_standard) || 0;
    
    // Remove related fields that shouldn't be in create
    delete data.balances;
    delete data.ledger;

    const product = await prisma.product.create({
      data: data
    });
    res.status(201).json(product);
  } catch (error) {
    console.error('[BACKEND] Create product error:', error);
    res.status(400).json({ error: 'Error creating product' });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        balances: {
          include: { warehouse: true }
        },
        ledger: {
          orderBy: { timestamp: 'desc' },
          take: 50
        }
      }
    });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  console.log(`[BACKEND] Updating product ${req.params.id} with body:`, req.body);
  try {
    const { id, balances, ledger, created_at, ...updateData } = req.body;
    
    // Sanitize numeric fields
    if (updateData.presentation_g !== undefined) updateData.presentation_g = parseInt(updateData.presentation_g);
    if (updateData.cost_standard !== undefined) updateData.cost_standard = parseFloat(updateData.cost_standard);

    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: updateData
    });
    res.json(product);
  } catch (error) {
    console.error('[BACKEND] Update error:', error);
    res.status(400).json({ error: 'Error updating product' });
  }
});

export default router;
