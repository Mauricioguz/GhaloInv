import { PrismaClient } from './src/generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding GHALOCAFE Data...');

  // 1. Create Warehouses
  const w1 = await prisma.warehouse.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Bodega Principal - Tostadora',
      location: 'Candelaria, Bogotá',
      type: 'PRODUCTION'
    }
  });

  const w2 = await prisma.warehouse.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Tienda Centro',
      location: 'Calle 10 # 5-20',
      type: 'STORE'
    }
  });

  // 2. Create Products
  const p1 = await prisma.product.upsert({
    where: { sku: 'COF-ESP-250' },
    update: {},
    create: {
      sku: 'COF-ESP-250',
      name: 'Café Especial Tostado (Grano)',
      type: 'BEAN',
      presentation_g: 250,
      packaging_unit: 'Bolsa',
      category: 'Premium'
    }
  });

  const p2 = await prisma.product.upsert({
    where: { sku: 'COF-MOL-500' },
    update: {},
    create: {
      sku: 'COF-MOL-500',
      name: 'Café Gourmet Molido',
      type: 'GROUND',
      presentation_g: 500,
      packaging_unit: 'Bolsa',
      category: 'Gourmet'
    }
  });

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
