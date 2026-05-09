
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  name: 'name'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  sku: 'sku',
  name: 'name',
  type: 'type',
  presentation_g: 'presentation_g',
  packaging_unit: 'packaging_unit',
  unit: 'unit',
  category: 'category',
  brand: 'brand',
  active: 'active',
  cost_standard: 'cost_standard',
  created_at: 'created_at'
};

exports.Prisma.WarehouseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  location: 'location',
  manager_id: 'manager_id',
  type: 'type',
  active: 'active',
  color: 'color'
};

exports.Prisma.InventoryBalanceScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  warehouse_id: 'warehouse_id',
  lot: 'lot',
  qty_on_hand: 'qty_on_hand',
  avg_cost: 'avg_cost',
  value_total: 'value_total',
  updated_at: 'updated_at'
};

exports.Prisma.InventoryDocumentScalarFieldEnum = {
  id: 'id',
  doc_type: 'doc_type',
  document_number: 'document_number',
  status: 'status',
  warehouse_from_id: 'warehouse_from_id',
  warehouse_to_id: 'warehouse_to_id',
  third_party_id: 'third_party_id',
  date: 'date',
  notes: 'notes',
  created_by: 'created_by',
  approved_by: 'approved_by',
  attachment_url: 'attachment_url'
};

exports.Prisma.InventoryDocumentLineScalarFieldEnum = {
  id: 'id',
  document_id: 'document_id',
  product_id: 'product_id',
  qty: 'qty',
  unit_cost: 'unit_cost',
  total_cost: 'total_cost',
  unit_sale: 'unit_sale',
  total_sale: 'total_sale',
  lot: 'lot'
};

exports.Prisma.InventoryLedgerScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  product_id: 'product_id',
  warehouse_id: 'warehouse_id',
  movement_type: 'movement_type',
  doc_id: 'doc_id',
  qty_in: 'qty_in',
  qty_out: 'qty_out',
  balance_qty: 'balance_qty',
  unit_cost: 'unit_cost',
  avg_cost_after: 'avg_cost_after',
  value_after: 'value_after',
  lot: 'lot',
  created_by: 'created_by'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  entity: 'entity',
  entity_id: 'entity_id',
  action: 'action',
  old_value: 'old_value',
  new_value: 'new_value',
  user_id: 'user_id',
  timestamp: 'timestamp',
  ip: 'ip'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Product: 'Product',
  Warehouse: 'Warehouse',
  InventoryBalance: 'InventoryBalance',
  InventoryDocument: 'InventoryDocument',
  InventoryDocumentLine: 'InventoryDocumentLine',
  InventoryLedger: 'InventoryLedger',
  AuditLog: 'AuditLog'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
