/*
  Warnings:

  - You are about to drop the column `lot_id` on the `InventoryDocumentLine` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InventoryBalance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "warehouse_id" INTEGER NOT NULL,
    "lot" TEXT NOT NULL DEFAULT 'SIN-LOTE',
    "qty_on_hand" REAL NOT NULL DEFAULT 0,
    "avg_cost" REAL NOT NULL DEFAULT 0,
    "value_total" REAL NOT NULL DEFAULT 0,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "InventoryBalance_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InventoryBalance_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "Warehouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InventoryBalance" ("avg_cost", "id", "product_id", "qty_on_hand", "updated_at", "value_total", "warehouse_id") SELECT "avg_cost", "id", "product_id", "qty_on_hand", "updated_at", "value_total", "warehouse_id" FROM "InventoryBalance";
DROP TABLE "InventoryBalance";
ALTER TABLE "new_InventoryBalance" RENAME TO "InventoryBalance";
CREATE UNIQUE INDEX "InventoryBalance_product_id_warehouse_id_lot_key" ON "InventoryBalance"("product_id", "warehouse_id", "lot");
CREATE TABLE "new_InventoryDocumentLine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "document_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "qty" REAL NOT NULL,
    "unit_cost" REAL,
    "total_cost" REAL,
    "lot" TEXT,
    CONSTRAINT "InventoryDocumentLine_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "InventoryDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InventoryDocumentLine" ("document_id", "id", "product_id", "qty", "total_cost", "unit_cost") SELECT "document_id", "id", "product_id", "qty", "total_cost", "unit_cost" FROM "InventoryDocumentLine";
DROP TABLE "InventoryDocumentLine";
ALTER TABLE "new_InventoryDocumentLine" RENAME TO "InventoryDocumentLine";
CREATE TABLE "new_InventoryLedger" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_id" INTEGER NOT NULL,
    "warehouse_id" INTEGER NOT NULL,
    "movement_type" TEXT NOT NULL,
    "doc_id" INTEGER NOT NULL,
    "qty_in" REAL NOT NULL DEFAULT 0,
    "qty_out" REAL NOT NULL DEFAULT 0,
    "balance_qty" REAL NOT NULL,
    "unit_cost" REAL NOT NULL,
    "avg_cost_after" REAL NOT NULL,
    "value_after" REAL NOT NULL,
    "lot" TEXT NOT NULL DEFAULT 'SIN-LOTE',
    "created_by" INTEGER NOT NULL,
    CONSTRAINT "InventoryLedger_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InventoryLedger" ("avg_cost_after", "balance_qty", "created_by", "doc_id", "id", "movement_type", "product_id", "qty_in", "qty_out", "timestamp", "unit_cost", "value_after", "warehouse_id") SELECT "avg_cost_after", "balance_qty", "created_by", "doc_id", "id", "movement_type", "product_id", "qty_in", "qty_out", "timestamp", "unit_cost", "value_after", "warehouse_id" FROM "InventoryLedger";
DROP TABLE "InventoryLedger";
ALTER TABLE "new_InventoryLedger" RENAME TO "InventoryLedger";
CREATE TABLE "new_Warehouse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "manager_id" INTEGER,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "color" TEXT NOT NULL DEFAULT '#c6a052'
);
INSERT INTO "new_Warehouse" ("active", "id", "location", "manager_id", "name", "type") SELECT "active", "id", "location", "manager_id", "name", "type" FROM "Warehouse";
DROP TABLE "Warehouse";
ALTER TABLE "new_Warehouse" RENAME TO "Warehouse";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
