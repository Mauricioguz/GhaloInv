import { Router } from 'express';
import { InventoryService } from '../services/inventory.service';
import { PrismaClient } from '../generated/client';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = Router();
const inventoryService = new InventoryService();
const prisma = new PrismaClient();

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// File Upload Endpoint
router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

// List all documents
router.get('/', async (req, res) => {
  try {
    const documents = await prisma.inventoryDocument.findMany({
      include: {
        lines: {
          include: {
            // product: true // Not in schema lines relation yet, but good to have
          }
        }
      },
      orderBy: { date: 'desc' }
    });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Get next document number
router.get('/next-number/:type', async (req, res) => {
  try {
    const nextNumber = await inventoryService.generateNextNumber(req.params.type);
    res.json({ nextNumber });
  } catch (error) {
    res.status(500).json({ error: 'Error generating number' });
  }
});

// Process a new transaction (Movements)
router.post('/process', async (req, res) => {
  try {
    const result = await inventoryService.processDocument(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    console.error('Process error:', error);
    res.status(400).json({ error: error.message || 'Error processing transaction' });
  }
});

// Void/Cancel a document
router.delete('/:id', async (req, res) => {
  try {
    const result = await inventoryService.voidDocument(parseInt(req.params.id));
    res.json(result);
  } catch (error: any) {
    console.error('Void error:', error);
    res.status(400).json({ error: error.message || 'Error voiding document' });
  }
});

// Reports: Output Detailed List
router.get('/report/outputs', async (req, res) => {
  try {
    const outputs = await prisma.inventoryDocument.findMany({
      where: {
        doc_type: 'OUT',
        status: 'APPLIED',
      },
      include: {
        warehouse_from: true,
        lines: {
          include: {
            product: true
          }
        }
      },
      orderBy: { date: 'desc' }
    });
    
    // Flatten the data for easier consumption if needed, 
    // but the nested structure is fine for now as we'll handle it in frontend.
    res.json(outputs);
  } catch (error) {
    console.error('Report error:', error);
    res.status(500).json({ error: 'Error fetching report data' });
  }
});

export default router;
