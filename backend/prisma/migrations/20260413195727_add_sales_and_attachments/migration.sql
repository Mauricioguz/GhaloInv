-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InventoryDocument" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "doc_type" TEXT NOT NULL,
    "document_number" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "warehouse_from_id" INTEGER,
    "warehouse_to_id" INTEGER,
    "third_party_id" INTEGER,
    "date" DATETIME NOT NULL,
    "notes" TEXT,
    "created_by" INTEGER NOT NULL,
    "approved_by" INTEGER,
    "attachment_url" TEXT,
    CONSTRAINT "InventoryDocument_warehouse_from_id_fkey" FOREIGN KEY ("warehouse_from_id") REFERENCES "Warehouse" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "InventoryDocument_warehouse_to_id_fkey" FOREIGN KEY ("warehouse_to_id") REFERENCES "Warehouse" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_InventoryDocument" ("approved_by", "created_by", "date", "doc_type", "document_number", "id", "notes", "status", "third_party_id", "warehouse_from_id", "warehouse_to_id") SELECT "approved_by", "created_by", "date", "doc_type", "document_number", "id", "notes", "status", "third_party_id", "warehouse_from_id", "warehouse_to_id" FROM "InventoryDocument";
DROP TABLE "InventoryDocument";
ALTER TABLE "new_InventoryDocument" RENAME TO "InventoryDocument";
CREATE UNIQUE INDEX "InventoryDocument_document_number_key" ON "InventoryDocument"("document_number");
CREATE TABLE "new_InventoryDocumentLine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "document_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "qty" REAL NOT NULL,
    "unit_cost" REAL,
    "total_cost" REAL,
    "unit_sale" REAL,
    "total_sale" REAL,
    "lot" TEXT,
    CONSTRAINT "InventoryDocumentLine_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "InventoryDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InventoryDocumentLine_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InventoryDocumentLine" ("document_id", "id", "lot", "product_id", "qty", "total_cost", "unit_cost") SELECT "document_id", "id", "lot", "product_id", "qty", "total_cost", "unit_cost" FROM "InventoryDocumentLine";
DROP TABLE "InventoryDocumentLine";
ALTER TABLE "new_InventoryDocumentLine" RENAME TO "InventoryDocumentLine";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
