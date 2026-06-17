-- CreateTable
CREATE TABLE "Seller" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "warehouse_id" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Seller_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "Warehouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "seller_id" INTEGER,
    "date" DATETIME NOT NULL,
    "notes" TEXT,
    "created_by" INTEGER NOT NULL,
    "approved_by" INTEGER,
    "attachment_url" TEXT,
    CONSTRAINT "InventoryDocument_warehouse_from_id_fkey" FOREIGN KEY ("warehouse_from_id") REFERENCES "Warehouse" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "InventoryDocument_warehouse_to_id_fkey" FOREIGN KEY ("warehouse_to_id") REFERENCES "Warehouse" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "InventoryDocument_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Seller" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_InventoryDocument" ("approved_by", "attachment_url", "created_by", "date", "doc_type", "document_number", "id", "notes", "status", "third_party_id", "warehouse_from_id", "warehouse_to_id") SELECT "approved_by", "attachment_url", "created_by", "date", "doc_type", "document_number", "id", "notes", "status", "third_party_id", "warehouse_from_id", "warehouse_to_id" FROM "InventoryDocument";
DROP TABLE "InventoryDocument";
ALTER TABLE "new_InventoryDocument" RENAME TO "InventoryDocument";
CREATE UNIQUE INDEX "InventoryDocument_document_number_key" ON "InventoryDocument"("document_number");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Seller_code_key" ON "Seller"("code");
