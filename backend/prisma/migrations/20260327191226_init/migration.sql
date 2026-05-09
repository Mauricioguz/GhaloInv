-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "presentation_g" INTEGER NOT NULL,
    "packaging_unit" TEXT NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'g',
    "category" TEXT,
    "brand" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "cost_standard" REAL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "manager_id" INTEGER,
    "type" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "InventoryBalance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "warehouse_id" INTEGER NOT NULL,
    "qty_on_hand" REAL NOT NULL DEFAULT 0,
    "avg_cost" REAL NOT NULL DEFAULT 0,
    "value_total" REAL NOT NULL DEFAULT 0,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "InventoryBalance_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InventoryBalance_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "Warehouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InventoryDocument" (
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
    "approved_by" INTEGER
);

-- CreateTable
CREATE TABLE "InventoryDocumentLine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "document_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "qty" REAL NOT NULL,
    "unit_cost" REAL,
    "total_cost" REAL,
    "lot_id" INTEGER,
    CONSTRAINT "InventoryDocumentLine_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "InventoryDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InventoryLedger" (
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
    "created_by" INTEGER NOT NULL,
    CONSTRAINT "InventoryLedger_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entity" TEXT NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "old_value" TEXT,
    "new_value" TEXT,
    "user_id" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryBalance_product_id_warehouse_id_key" ON "InventoryBalance"("product_id", "warehouse_id");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryDocument_document_number_key" ON "InventoryDocument"("document_number");
