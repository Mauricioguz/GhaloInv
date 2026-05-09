
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model InventoryBalance
 * 
 */
export type InventoryBalance = $Result.DefaultSelection<Prisma.$InventoryBalancePayload>
/**
 * Model InventoryDocument
 * 
 */
export type InventoryDocument = $Result.DefaultSelection<Prisma.$InventoryDocumentPayload>
/**
 * Model InventoryDocumentLine
 * 
 */
export type InventoryDocumentLine = $Result.DefaultSelection<Prisma.$InventoryDocumentLinePayload>
/**
 * Model InventoryLedger
 * 
 */
export type InventoryLedger = $Result.DefaultSelection<Prisma.$InventoryLedgerPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs>;

  /**
   * `prisma.inventoryBalance`: Exposes CRUD operations for the **InventoryBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryBalances
    * const inventoryBalances = await prisma.inventoryBalance.findMany()
    * ```
    */
  get inventoryBalance(): Prisma.InventoryBalanceDelegate<ExtArgs>;

  /**
   * `prisma.inventoryDocument`: Exposes CRUD operations for the **InventoryDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryDocuments
    * const inventoryDocuments = await prisma.inventoryDocument.findMany()
    * ```
    */
  get inventoryDocument(): Prisma.InventoryDocumentDelegate<ExtArgs>;

  /**
   * `prisma.inventoryDocumentLine`: Exposes CRUD operations for the **InventoryDocumentLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryDocumentLines
    * const inventoryDocumentLines = await prisma.inventoryDocumentLine.findMany()
    * ```
    */
  get inventoryDocumentLine(): Prisma.InventoryDocumentLineDelegate<ExtArgs>;

  /**
   * `prisma.inventoryLedger`: Exposes CRUD operations for the **InventoryLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryLedgers
    * const inventoryLedgers = await prisma.inventoryLedger.findMany()
    * ```
    */
  get inventoryLedger(): Prisma.InventoryLedgerDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    Warehouse: 'Warehouse',
    InventoryBalance: 'InventoryBalance',
    InventoryDocument: 'InventoryDocument',
    InventoryDocumentLine: 'InventoryDocumentLine',
    InventoryLedger: 'InventoryLedger',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "product" | "warehouse" | "inventoryBalance" | "inventoryDocument" | "inventoryDocumentLine" | "inventoryLedger" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      InventoryBalance: {
        payload: Prisma.$InventoryBalancePayload<ExtArgs>
        fields: Prisma.InventoryBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload>
          }
          findFirst: {
            args: Prisma.InventoryBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload>
          }
          findMany: {
            args: Prisma.InventoryBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload>[]
          }
          create: {
            args: Prisma.InventoryBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload>
          }
          createMany: {
            args: Prisma.InventoryBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload>[]
          }
          delete: {
            args: Prisma.InventoryBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload>
          }
          update: {
            args: Prisma.InventoryBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload>
          }
          deleteMany: {
            args: Prisma.InventoryBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBalancePayload>
          }
          aggregate: {
            args: Prisma.InventoryBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryBalance>
          }
          groupBy: {
            args: Prisma.InventoryBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryBalanceCountAggregateOutputType> | number
          }
        }
      }
      InventoryDocument: {
        payload: Prisma.$InventoryDocumentPayload<ExtArgs>
        fields: Prisma.InventoryDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload>
          }
          findFirst: {
            args: Prisma.InventoryDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload>
          }
          findMany: {
            args: Prisma.InventoryDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload>[]
          }
          create: {
            args: Prisma.InventoryDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload>
          }
          createMany: {
            args: Prisma.InventoryDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload>[]
          }
          delete: {
            args: Prisma.InventoryDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload>
          }
          update: {
            args: Prisma.InventoryDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentPayload>
          }
          aggregate: {
            args: Prisma.InventoryDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryDocument>
          }
          groupBy: {
            args: Prisma.InventoryDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryDocumentCountAggregateOutputType> | number
          }
        }
      }
      InventoryDocumentLine: {
        payload: Prisma.$InventoryDocumentLinePayload<ExtArgs>
        fields: Prisma.InventoryDocumentLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryDocumentLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryDocumentLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload>
          }
          findFirst: {
            args: Prisma.InventoryDocumentLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryDocumentLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload>
          }
          findMany: {
            args: Prisma.InventoryDocumentLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload>[]
          }
          create: {
            args: Prisma.InventoryDocumentLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload>
          }
          createMany: {
            args: Prisma.InventoryDocumentLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryDocumentLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload>[]
          }
          delete: {
            args: Prisma.InventoryDocumentLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload>
          }
          update: {
            args: Prisma.InventoryDocumentLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload>
          }
          deleteMany: {
            args: Prisma.InventoryDocumentLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryDocumentLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryDocumentLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryDocumentLinePayload>
          }
          aggregate: {
            args: Prisma.InventoryDocumentLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryDocumentLine>
          }
          groupBy: {
            args: Prisma.InventoryDocumentLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryDocumentLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryDocumentLineCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryDocumentLineCountAggregateOutputType> | number
          }
        }
      }
      InventoryLedger: {
        payload: Prisma.$InventoryLedgerPayload<ExtArgs>
        fields: Prisma.InventoryLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload>
          }
          findFirst: {
            args: Prisma.InventoryLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload>
          }
          findMany: {
            args: Prisma.InventoryLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload>[]
          }
          create: {
            args: Prisma.InventoryLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload>
          }
          createMany: {
            args: Prisma.InventoryLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryLedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload>[]
          }
          delete: {
            args: Prisma.InventoryLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload>
          }
          update: {
            args: Prisma.InventoryLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload>
          }
          deleteMany: {
            args: Prisma.InventoryLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLedgerPayload>
          }
          aggregate: {
            args: Prisma.InventoryLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryLedger>
          }
          groupBy: {
            args: Prisma.InventoryLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryLedgerCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    balances: number
    ledger: number
    doc_lines: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | ProductCountOutputTypeCountBalancesArgs
    ledger?: boolean | ProductCountOutputTypeCountLedgerArgs
    doc_lines?: boolean | ProductCountOutputTypeCountDoc_linesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryBalanceWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLedgerWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDoc_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryDocumentLineWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    balances: number
    docs_from: number
    docs_to: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | WarehouseCountOutputTypeCountBalancesArgs
    docs_from?: boolean | WarehouseCountOutputTypeCountDocs_fromArgs
    docs_to?: boolean | WarehouseCountOutputTypeCountDocs_toArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryBalanceWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountDocs_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryDocumentWhereInput
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountDocs_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryDocumentWhereInput
  }


  /**
   * Count Type InventoryDocumentCountOutputType
   */

  export type InventoryDocumentCountOutputType = {
    lines: number
  }

  export type InventoryDocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | InventoryDocumentCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * InventoryDocumentCountOutputType without action
   */
  export type InventoryDocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentCountOutputType
     */
    select?: InventoryDocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryDocumentCountOutputType without action
   */
  export type InventoryDocumentCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryDocumentLineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: string
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    presentation_g: number | null
    cost_standard: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    presentation_g: number | null
    cost_standard: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    type: string | null
    presentation_g: number | null
    packaging_unit: string | null
    unit: string | null
    category: string | null
    brand: string | null
    active: boolean | null
    cost_standard: number | null
    created_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    type: string | null
    presentation_g: number | null
    packaging_unit: string | null
    unit: string | null
    category: string | null
    brand: string | null
    active: boolean | null
    cost_standard: number | null
    created_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    type: number
    presentation_g: number
    packaging_unit: number
    unit: number
    category: number
    brand: number
    active: number
    cost_standard: number
    created_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    presentation_g?: true
    cost_standard?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    presentation_g?: true
    cost_standard?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    type?: true
    presentation_g?: true
    packaging_unit?: true
    unit?: true
    category?: true
    brand?: true
    active?: true
    cost_standard?: true
    created_at?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    type?: true
    presentation_g?: true
    packaging_unit?: true
    unit?: true
    category?: true
    brand?: true
    active?: true
    cost_standard?: true
    created_at?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    type?: true
    presentation_g?: true
    packaging_unit?: true
    unit?: true
    category?: true
    brand?: true
    active?: true
    cost_standard?: true
    created_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit: string
    category: string | null
    brand: string | null
    active: boolean
    cost_standard: number | null
    created_at: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    type?: boolean
    presentation_g?: boolean
    packaging_unit?: boolean
    unit?: boolean
    category?: boolean
    brand?: boolean
    active?: boolean
    cost_standard?: boolean
    created_at?: boolean
    balances?: boolean | Product$balancesArgs<ExtArgs>
    ledger?: boolean | Product$ledgerArgs<ExtArgs>
    doc_lines?: boolean | Product$doc_linesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    type?: boolean
    presentation_g?: boolean
    packaging_unit?: boolean
    unit?: boolean
    category?: boolean
    brand?: boolean
    active?: boolean
    cost_standard?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    sku?: boolean
    name?: boolean
    type?: boolean
    presentation_g?: boolean
    packaging_unit?: boolean
    unit?: boolean
    category?: boolean
    brand?: boolean
    active?: boolean
    cost_standard?: boolean
    created_at?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | Product$balancesArgs<ExtArgs>
    ledger?: boolean | Product$ledgerArgs<ExtArgs>
    doc_lines?: boolean | Product$doc_linesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      balances: Prisma.$InventoryBalancePayload<ExtArgs>[]
      ledger: Prisma.$InventoryLedgerPayload<ExtArgs>[]
      doc_lines: Prisma.$InventoryDocumentLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sku: string
      name: string
      type: string
      presentation_g: number
      packaging_unit: string
      unit: string
      category: string | null
      brand: string | null
      active: boolean
      cost_standard: number | null
      created_at: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balances<T extends Product$balancesArgs<ExtArgs> = {}>(args?: Subset<T, Product$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "findMany"> | Null>
    ledger<T extends Product$ledgerArgs<ExtArgs> = {}>(args?: Subset<T, Product$ledgerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "findMany"> | Null>
    doc_lines<T extends Product$doc_linesArgs<ExtArgs> = {}>(args?: Subset<T, Product$doc_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly type: FieldRef<"Product", 'String'>
    readonly presentation_g: FieldRef<"Product", 'Int'>
    readonly packaging_unit: FieldRef<"Product", 'String'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly active: FieldRef<"Product", 'Boolean'>
    readonly cost_standard: FieldRef<"Product", 'Float'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.balances
   */
  export type Product$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    where?: InventoryBalanceWhereInput
    orderBy?: InventoryBalanceOrderByWithRelationInput | InventoryBalanceOrderByWithRelationInput[]
    cursor?: InventoryBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryBalanceScalarFieldEnum | InventoryBalanceScalarFieldEnum[]
  }

  /**
   * Product.ledger
   */
  export type Product$ledgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    where?: InventoryLedgerWhereInput
    orderBy?: InventoryLedgerOrderByWithRelationInput | InventoryLedgerOrderByWithRelationInput[]
    cursor?: InventoryLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryLedgerScalarFieldEnum | InventoryLedgerScalarFieldEnum[]
  }

  /**
   * Product.doc_lines
   */
  export type Product$doc_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    where?: InventoryDocumentLineWhereInput
    orderBy?: InventoryDocumentLineOrderByWithRelationInput | InventoryDocumentLineOrderByWithRelationInput[]
    cursor?: InventoryDocumentLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryDocumentLineScalarFieldEnum | InventoryDocumentLineScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    id: number | null
    manager_id: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    id: number | null
    manager_id: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    manager_id: number | null
    type: string | null
    active: boolean | null
    color: string | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    manager_id: number | null
    type: string | null
    active: boolean | null
    color: string | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    location: number
    manager_id: number
    type: number
    active: number
    color: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    id?: true
    manager_id?: true
  }

  export type WarehouseSumAggregateInputType = {
    id?: true
    manager_id?: true
  }

  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    manager_id?: true
    type?: true
    active?: true
    color?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    manager_id?: true
    type?: true
    active?: true
    color?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    manager_id?: true
    type?: true
    active?: true
    color?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: number
    name: string
    location: string | null
    manager_id: number | null
    type: string
    active: boolean
    color: string
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    manager_id?: boolean
    type?: boolean
    active?: boolean
    color?: boolean
    balances?: boolean | Warehouse$balancesArgs<ExtArgs>
    docs_from?: boolean | Warehouse$docs_fromArgs<ExtArgs>
    docs_to?: boolean | Warehouse$docs_toArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    manager_id?: boolean
    type?: boolean
    active?: boolean
    color?: boolean
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    manager_id?: boolean
    type?: boolean
    active?: boolean
    color?: boolean
  }

  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | Warehouse$balancesArgs<ExtArgs>
    docs_from?: boolean | Warehouse$docs_fromArgs<ExtArgs>
    docs_to?: boolean | Warehouse$docs_toArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      balances: Prisma.$InventoryBalancePayload<ExtArgs>[]
      docs_from: Prisma.$InventoryDocumentPayload<ExtArgs>[]
      docs_to: Prisma.$InventoryDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string | null
      manager_id: number | null
      type: string
      active: boolean
      color: string
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehouseCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balances<T extends Warehouse$balancesArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "findMany"> | Null>
    docs_from<T extends Warehouse$docs_fromArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$docs_fromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "findMany"> | Null>
    docs_to<T extends Warehouse$docs_toArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$docs_toArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warehouse model
   */ 
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'Int'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly location: FieldRef<"Warehouse", 'String'>
    readonly manager_id: FieldRef<"Warehouse", 'Int'>
    readonly type: FieldRef<"Warehouse", 'String'>
    readonly active: FieldRef<"Warehouse", 'Boolean'>
    readonly color: FieldRef<"Warehouse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
  }

  /**
   * Warehouse createManyAndReturn
   */
  export type WarehouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
  }

  /**
   * Warehouse.balances
   */
  export type Warehouse$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    where?: InventoryBalanceWhereInput
    orderBy?: InventoryBalanceOrderByWithRelationInput | InventoryBalanceOrderByWithRelationInput[]
    cursor?: InventoryBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryBalanceScalarFieldEnum | InventoryBalanceScalarFieldEnum[]
  }

  /**
   * Warehouse.docs_from
   */
  export type Warehouse$docs_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    where?: InventoryDocumentWhereInput
    orderBy?: InventoryDocumentOrderByWithRelationInput | InventoryDocumentOrderByWithRelationInput[]
    cursor?: InventoryDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryDocumentScalarFieldEnum | InventoryDocumentScalarFieldEnum[]
  }

  /**
   * Warehouse.docs_to
   */
  export type Warehouse$docs_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    where?: InventoryDocumentWhereInput
    orderBy?: InventoryDocumentOrderByWithRelationInput | InventoryDocumentOrderByWithRelationInput[]
    cursor?: InventoryDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryDocumentScalarFieldEnum | InventoryDocumentScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model InventoryBalance
   */

  export type AggregateInventoryBalance = {
    _count: InventoryBalanceCountAggregateOutputType | null
    _avg: InventoryBalanceAvgAggregateOutputType | null
    _sum: InventoryBalanceSumAggregateOutputType | null
    _min: InventoryBalanceMinAggregateOutputType | null
    _max: InventoryBalanceMaxAggregateOutputType | null
  }

  export type InventoryBalanceAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    warehouse_id: number | null
    qty_on_hand: number | null
    avg_cost: number | null
    value_total: number | null
  }

  export type InventoryBalanceSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    warehouse_id: number | null
    qty_on_hand: number | null
    avg_cost: number | null
    value_total: number | null
  }

  export type InventoryBalanceMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    warehouse_id: number | null
    lot: string | null
    qty_on_hand: number | null
    avg_cost: number | null
    value_total: number | null
    updated_at: Date | null
  }

  export type InventoryBalanceMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    warehouse_id: number | null
    lot: string | null
    qty_on_hand: number | null
    avg_cost: number | null
    value_total: number | null
    updated_at: Date | null
  }

  export type InventoryBalanceCountAggregateOutputType = {
    id: number
    product_id: number
    warehouse_id: number
    lot: number
    qty_on_hand: number
    avg_cost: number
    value_total: number
    updated_at: number
    _all: number
  }


  export type InventoryBalanceAvgAggregateInputType = {
    id?: true
    product_id?: true
    warehouse_id?: true
    qty_on_hand?: true
    avg_cost?: true
    value_total?: true
  }

  export type InventoryBalanceSumAggregateInputType = {
    id?: true
    product_id?: true
    warehouse_id?: true
    qty_on_hand?: true
    avg_cost?: true
    value_total?: true
  }

  export type InventoryBalanceMinAggregateInputType = {
    id?: true
    product_id?: true
    warehouse_id?: true
    lot?: true
    qty_on_hand?: true
    avg_cost?: true
    value_total?: true
    updated_at?: true
  }

  export type InventoryBalanceMaxAggregateInputType = {
    id?: true
    product_id?: true
    warehouse_id?: true
    lot?: true
    qty_on_hand?: true
    avg_cost?: true
    value_total?: true
    updated_at?: true
  }

  export type InventoryBalanceCountAggregateInputType = {
    id?: true
    product_id?: true
    warehouse_id?: true
    lot?: true
    qty_on_hand?: true
    avg_cost?: true
    value_total?: true
    updated_at?: true
    _all?: true
  }

  export type InventoryBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryBalance to aggregate.
     */
    where?: InventoryBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBalances to fetch.
     */
    orderBy?: InventoryBalanceOrderByWithRelationInput | InventoryBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryBalances
    **/
    _count?: true | InventoryBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryBalanceMaxAggregateInputType
  }

  export type GetInventoryBalanceAggregateType<T extends InventoryBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryBalance[P]>
      : GetScalarType<T[P], AggregateInventoryBalance[P]>
  }




  export type InventoryBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryBalanceWhereInput
    orderBy?: InventoryBalanceOrderByWithAggregationInput | InventoryBalanceOrderByWithAggregationInput[]
    by: InventoryBalanceScalarFieldEnum[] | InventoryBalanceScalarFieldEnum
    having?: InventoryBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryBalanceCountAggregateInputType | true
    _avg?: InventoryBalanceAvgAggregateInputType
    _sum?: InventoryBalanceSumAggregateInputType
    _min?: InventoryBalanceMinAggregateInputType
    _max?: InventoryBalanceMaxAggregateInputType
  }

  export type InventoryBalanceGroupByOutputType = {
    id: number
    product_id: number
    warehouse_id: number
    lot: string
    qty_on_hand: number
    avg_cost: number
    value_total: number
    updated_at: Date
    _count: InventoryBalanceCountAggregateOutputType | null
    _avg: InventoryBalanceAvgAggregateOutputType | null
    _sum: InventoryBalanceSumAggregateOutputType | null
    _min: InventoryBalanceMinAggregateOutputType | null
    _max: InventoryBalanceMaxAggregateOutputType | null
  }

  type GetInventoryBalanceGroupByPayload<T extends InventoryBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryBalanceGroupByOutputType[P]>
        }
      >
    >


  export type InventoryBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    warehouse_id?: boolean
    lot?: boolean
    qty_on_hand?: boolean
    avg_cost?: boolean
    value_total?: boolean
    updated_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryBalance"]>

  export type InventoryBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    warehouse_id?: boolean
    lot?: boolean
    qty_on_hand?: boolean
    avg_cost?: boolean
    value_total?: boolean
    updated_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryBalance"]>

  export type InventoryBalanceSelectScalar = {
    id?: boolean
    product_id?: boolean
    warehouse_id?: boolean
    lot?: boolean
    qty_on_hand?: boolean
    avg_cost?: boolean
    value_total?: boolean
    updated_at?: boolean
  }

  export type InventoryBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }
  export type InventoryBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
  }

  export type $InventoryBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryBalance"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      warehouse_id: number
      lot: string
      qty_on_hand: number
      avg_cost: number
      value_total: number
      updated_at: Date
    }, ExtArgs["result"]["inventoryBalance"]>
    composites: {}
  }

  type InventoryBalanceGetPayload<S extends boolean | null | undefined | InventoryBalanceDefaultArgs> = $Result.GetResult<Prisma.$InventoryBalancePayload, S>

  type InventoryBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryBalanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryBalanceCountAggregateInputType | true
    }

  export interface InventoryBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryBalance'], meta: { name: 'InventoryBalance' } }
    /**
     * Find zero or one InventoryBalance that matches the filter.
     * @param {InventoryBalanceFindUniqueArgs} args - Arguments to find a InventoryBalance
     * @example
     * // Get one InventoryBalance
     * const inventoryBalance = await prisma.inventoryBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryBalanceFindUniqueArgs>(args: SelectSubset<T, InventoryBalanceFindUniqueArgs<ExtArgs>>): Prisma__InventoryBalanceClient<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryBalance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryBalanceFindUniqueOrThrowArgs} args - Arguments to find a InventoryBalance
     * @example
     * // Get one InventoryBalance
     * const inventoryBalance = await prisma.inventoryBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryBalanceClient<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBalanceFindFirstArgs} args - Arguments to find a InventoryBalance
     * @example
     * // Get one InventoryBalance
     * const inventoryBalance = await prisma.inventoryBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryBalanceFindFirstArgs>(args?: SelectSubset<T, InventoryBalanceFindFirstArgs<ExtArgs>>): Prisma__InventoryBalanceClient<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBalanceFindFirstOrThrowArgs} args - Arguments to find a InventoryBalance
     * @example
     * // Get one InventoryBalance
     * const inventoryBalance = await prisma.inventoryBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryBalanceClient<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryBalances
     * const inventoryBalances = await prisma.inventoryBalance.findMany()
     * 
     * // Get first 10 InventoryBalances
     * const inventoryBalances = await prisma.inventoryBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryBalanceWithIdOnly = await prisma.inventoryBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryBalanceFindManyArgs>(args?: SelectSubset<T, InventoryBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryBalance.
     * @param {InventoryBalanceCreateArgs} args - Arguments to create a InventoryBalance.
     * @example
     * // Create one InventoryBalance
     * const InventoryBalance = await prisma.inventoryBalance.create({
     *   data: {
     *     // ... data to create a InventoryBalance
     *   }
     * })
     * 
     */
    create<T extends InventoryBalanceCreateArgs>(args: SelectSubset<T, InventoryBalanceCreateArgs<ExtArgs>>): Prisma__InventoryBalanceClient<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryBalances.
     * @param {InventoryBalanceCreateManyArgs} args - Arguments to create many InventoryBalances.
     * @example
     * // Create many InventoryBalances
     * const inventoryBalance = await prisma.inventoryBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryBalanceCreateManyArgs>(args?: SelectSubset<T, InventoryBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryBalances and returns the data saved in the database.
     * @param {InventoryBalanceCreateManyAndReturnArgs} args - Arguments to create many InventoryBalances.
     * @example
     * // Create many InventoryBalances
     * const inventoryBalance = await prisma.inventoryBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryBalances and only return the `id`
     * const inventoryBalanceWithIdOnly = await prisma.inventoryBalance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryBalance.
     * @param {InventoryBalanceDeleteArgs} args - Arguments to delete one InventoryBalance.
     * @example
     * // Delete one InventoryBalance
     * const InventoryBalance = await prisma.inventoryBalance.delete({
     *   where: {
     *     // ... filter to delete one InventoryBalance
     *   }
     * })
     * 
     */
    delete<T extends InventoryBalanceDeleteArgs>(args: SelectSubset<T, InventoryBalanceDeleteArgs<ExtArgs>>): Prisma__InventoryBalanceClient<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryBalance.
     * @param {InventoryBalanceUpdateArgs} args - Arguments to update one InventoryBalance.
     * @example
     * // Update one InventoryBalance
     * const inventoryBalance = await prisma.inventoryBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryBalanceUpdateArgs>(args: SelectSubset<T, InventoryBalanceUpdateArgs<ExtArgs>>): Prisma__InventoryBalanceClient<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryBalances.
     * @param {InventoryBalanceDeleteManyArgs} args - Arguments to filter InventoryBalances to delete.
     * @example
     * // Delete a few InventoryBalances
     * const { count } = await prisma.inventoryBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryBalanceDeleteManyArgs>(args?: SelectSubset<T, InventoryBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryBalances
     * const inventoryBalance = await prisma.inventoryBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryBalanceUpdateManyArgs>(args: SelectSubset<T, InventoryBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryBalance.
     * @param {InventoryBalanceUpsertArgs} args - Arguments to update or create a InventoryBalance.
     * @example
     * // Update or create a InventoryBalance
     * const inventoryBalance = await prisma.inventoryBalance.upsert({
     *   create: {
     *     // ... data to create a InventoryBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryBalance we want to update
     *   }
     * })
     */
    upsert<T extends InventoryBalanceUpsertArgs>(args: SelectSubset<T, InventoryBalanceUpsertArgs<ExtArgs>>): Prisma__InventoryBalanceClient<$Result.GetResult<Prisma.$InventoryBalancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBalanceCountArgs} args - Arguments to filter InventoryBalances to count.
     * @example
     * // Count the number of InventoryBalances
     * const count = await prisma.inventoryBalance.count({
     *   where: {
     *     // ... the filter for the InventoryBalances we want to count
     *   }
     * })
    **/
    count<T extends InventoryBalanceCountArgs>(
      args?: Subset<T, InventoryBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryBalanceAggregateArgs>(args: Subset<T, InventoryBalanceAggregateArgs>): Prisma.PrismaPromise<GetInventoryBalanceAggregateType<T>>

    /**
     * Group by InventoryBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryBalanceGroupByArgs['orderBy'] }
        : { orderBy?: InventoryBalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryBalance model
   */
  readonly fields: InventoryBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryBalance model
   */ 
  interface InventoryBalanceFieldRefs {
    readonly id: FieldRef<"InventoryBalance", 'Int'>
    readonly product_id: FieldRef<"InventoryBalance", 'Int'>
    readonly warehouse_id: FieldRef<"InventoryBalance", 'Int'>
    readonly lot: FieldRef<"InventoryBalance", 'String'>
    readonly qty_on_hand: FieldRef<"InventoryBalance", 'Float'>
    readonly avg_cost: FieldRef<"InventoryBalance", 'Float'>
    readonly value_total: FieldRef<"InventoryBalance", 'Float'>
    readonly updated_at: FieldRef<"InventoryBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryBalance findUnique
   */
  export type InventoryBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBalance to fetch.
     */
    where: InventoryBalanceWhereUniqueInput
  }

  /**
   * InventoryBalance findUniqueOrThrow
   */
  export type InventoryBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBalance to fetch.
     */
    where: InventoryBalanceWhereUniqueInput
  }

  /**
   * InventoryBalance findFirst
   */
  export type InventoryBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBalance to fetch.
     */
    where?: InventoryBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBalances to fetch.
     */
    orderBy?: InventoryBalanceOrderByWithRelationInput | InventoryBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryBalances.
     */
    cursor?: InventoryBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryBalances.
     */
    distinct?: InventoryBalanceScalarFieldEnum | InventoryBalanceScalarFieldEnum[]
  }

  /**
   * InventoryBalance findFirstOrThrow
   */
  export type InventoryBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBalance to fetch.
     */
    where?: InventoryBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBalances to fetch.
     */
    orderBy?: InventoryBalanceOrderByWithRelationInput | InventoryBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryBalances.
     */
    cursor?: InventoryBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryBalances.
     */
    distinct?: InventoryBalanceScalarFieldEnum | InventoryBalanceScalarFieldEnum[]
  }

  /**
   * InventoryBalance findMany
   */
  export type InventoryBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBalances to fetch.
     */
    where?: InventoryBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBalances to fetch.
     */
    orderBy?: InventoryBalanceOrderByWithRelationInput | InventoryBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryBalances.
     */
    cursor?: InventoryBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBalances.
     */
    skip?: number
    distinct?: InventoryBalanceScalarFieldEnum | InventoryBalanceScalarFieldEnum[]
  }

  /**
   * InventoryBalance create
   */
  export type InventoryBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryBalance.
     */
    data: XOR<InventoryBalanceCreateInput, InventoryBalanceUncheckedCreateInput>
  }

  /**
   * InventoryBalance createMany
   */
  export type InventoryBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryBalances.
     */
    data: InventoryBalanceCreateManyInput | InventoryBalanceCreateManyInput[]
  }

  /**
   * InventoryBalance createManyAndReturn
   */
  export type InventoryBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryBalances.
     */
    data: InventoryBalanceCreateManyInput | InventoryBalanceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryBalance update
   */
  export type InventoryBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryBalance.
     */
    data: XOR<InventoryBalanceUpdateInput, InventoryBalanceUncheckedUpdateInput>
    /**
     * Choose, which InventoryBalance to update.
     */
    where: InventoryBalanceWhereUniqueInput
  }

  /**
   * InventoryBalance updateMany
   */
  export type InventoryBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryBalances.
     */
    data: XOR<InventoryBalanceUpdateManyMutationInput, InventoryBalanceUncheckedUpdateManyInput>
    /**
     * Filter which InventoryBalances to update
     */
    where?: InventoryBalanceWhereInput
  }

  /**
   * InventoryBalance upsert
   */
  export type InventoryBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryBalance to update in case it exists.
     */
    where: InventoryBalanceWhereUniqueInput
    /**
     * In case the InventoryBalance found by the `where` argument doesn't exist, create a new InventoryBalance with this data.
     */
    create: XOR<InventoryBalanceCreateInput, InventoryBalanceUncheckedCreateInput>
    /**
     * In case the InventoryBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryBalanceUpdateInput, InventoryBalanceUncheckedUpdateInput>
  }

  /**
   * InventoryBalance delete
   */
  export type InventoryBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
    /**
     * Filter which InventoryBalance to delete.
     */
    where: InventoryBalanceWhereUniqueInput
  }

  /**
   * InventoryBalance deleteMany
   */
  export type InventoryBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryBalances to delete
     */
    where?: InventoryBalanceWhereInput
  }

  /**
   * InventoryBalance without action
   */
  export type InventoryBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBalance
     */
    select?: InventoryBalanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBalanceInclude<ExtArgs> | null
  }


  /**
   * Model InventoryDocument
   */

  export type AggregateInventoryDocument = {
    _count: InventoryDocumentCountAggregateOutputType | null
    _avg: InventoryDocumentAvgAggregateOutputType | null
    _sum: InventoryDocumentSumAggregateOutputType | null
    _min: InventoryDocumentMinAggregateOutputType | null
    _max: InventoryDocumentMaxAggregateOutputType | null
  }

  export type InventoryDocumentAvgAggregateOutputType = {
    id: number | null
    warehouse_from_id: number | null
    warehouse_to_id: number | null
    third_party_id: number | null
    created_by: number | null
    approved_by: number | null
  }

  export type InventoryDocumentSumAggregateOutputType = {
    id: number | null
    warehouse_from_id: number | null
    warehouse_to_id: number | null
    third_party_id: number | null
    created_by: number | null
    approved_by: number | null
  }

  export type InventoryDocumentMinAggregateOutputType = {
    id: number | null
    doc_type: string | null
    document_number: string | null
    status: string | null
    warehouse_from_id: number | null
    warehouse_to_id: number | null
    third_party_id: number | null
    date: Date | null
    notes: string | null
    created_by: number | null
    approved_by: number | null
    attachment_url: string | null
  }

  export type InventoryDocumentMaxAggregateOutputType = {
    id: number | null
    doc_type: string | null
    document_number: string | null
    status: string | null
    warehouse_from_id: number | null
    warehouse_to_id: number | null
    third_party_id: number | null
    date: Date | null
    notes: string | null
    created_by: number | null
    approved_by: number | null
    attachment_url: string | null
  }

  export type InventoryDocumentCountAggregateOutputType = {
    id: number
    doc_type: number
    document_number: number
    status: number
    warehouse_from_id: number
    warehouse_to_id: number
    third_party_id: number
    date: number
    notes: number
    created_by: number
    approved_by: number
    attachment_url: number
    _all: number
  }


  export type InventoryDocumentAvgAggregateInputType = {
    id?: true
    warehouse_from_id?: true
    warehouse_to_id?: true
    third_party_id?: true
    created_by?: true
    approved_by?: true
  }

  export type InventoryDocumentSumAggregateInputType = {
    id?: true
    warehouse_from_id?: true
    warehouse_to_id?: true
    third_party_id?: true
    created_by?: true
    approved_by?: true
  }

  export type InventoryDocumentMinAggregateInputType = {
    id?: true
    doc_type?: true
    document_number?: true
    status?: true
    warehouse_from_id?: true
    warehouse_to_id?: true
    third_party_id?: true
    date?: true
    notes?: true
    created_by?: true
    approved_by?: true
    attachment_url?: true
  }

  export type InventoryDocumentMaxAggregateInputType = {
    id?: true
    doc_type?: true
    document_number?: true
    status?: true
    warehouse_from_id?: true
    warehouse_to_id?: true
    third_party_id?: true
    date?: true
    notes?: true
    created_by?: true
    approved_by?: true
    attachment_url?: true
  }

  export type InventoryDocumentCountAggregateInputType = {
    id?: true
    doc_type?: true
    document_number?: true
    status?: true
    warehouse_from_id?: true
    warehouse_to_id?: true
    third_party_id?: true
    date?: true
    notes?: true
    created_by?: true
    approved_by?: true
    attachment_url?: true
    _all?: true
  }

  export type InventoryDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryDocument to aggregate.
     */
    where?: InventoryDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryDocuments to fetch.
     */
    orderBy?: InventoryDocumentOrderByWithRelationInput | InventoryDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryDocuments
    **/
    _count?: true | InventoryDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryDocumentMaxAggregateInputType
  }

  export type GetInventoryDocumentAggregateType<T extends InventoryDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryDocument[P]>
      : GetScalarType<T[P], AggregateInventoryDocument[P]>
  }




  export type InventoryDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryDocumentWhereInput
    orderBy?: InventoryDocumentOrderByWithAggregationInput | InventoryDocumentOrderByWithAggregationInput[]
    by: InventoryDocumentScalarFieldEnum[] | InventoryDocumentScalarFieldEnum
    having?: InventoryDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryDocumentCountAggregateInputType | true
    _avg?: InventoryDocumentAvgAggregateInputType
    _sum?: InventoryDocumentSumAggregateInputType
    _min?: InventoryDocumentMinAggregateInputType
    _max?: InventoryDocumentMaxAggregateInputType
  }

  export type InventoryDocumentGroupByOutputType = {
    id: number
    doc_type: string
    document_number: string
    status: string
    warehouse_from_id: number | null
    warehouse_to_id: number | null
    third_party_id: number | null
    date: Date
    notes: string | null
    created_by: number
    approved_by: number | null
    attachment_url: string | null
    _count: InventoryDocumentCountAggregateOutputType | null
    _avg: InventoryDocumentAvgAggregateOutputType | null
    _sum: InventoryDocumentSumAggregateOutputType | null
    _min: InventoryDocumentMinAggregateOutputType | null
    _max: InventoryDocumentMaxAggregateOutputType | null
  }

  type GetInventoryDocumentGroupByPayload<T extends InventoryDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryDocumentGroupByOutputType[P]>
        }
      >
    >


  export type InventoryDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doc_type?: boolean
    document_number?: boolean
    status?: boolean
    warehouse_from_id?: boolean
    warehouse_to_id?: boolean
    third_party_id?: boolean
    date?: boolean
    notes?: boolean
    created_by?: boolean
    approved_by?: boolean
    attachment_url?: boolean
    warehouse_from?: boolean | InventoryDocument$warehouse_fromArgs<ExtArgs>
    warehouse_to?: boolean | InventoryDocument$warehouse_toArgs<ExtArgs>
    lines?: boolean | InventoryDocument$linesArgs<ExtArgs>
    _count?: boolean | InventoryDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryDocument"]>

  export type InventoryDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doc_type?: boolean
    document_number?: boolean
    status?: boolean
    warehouse_from_id?: boolean
    warehouse_to_id?: boolean
    third_party_id?: boolean
    date?: boolean
    notes?: boolean
    created_by?: boolean
    approved_by?: boolean
    attachment_url?: boolean
    warehouse_from?: boolean | InventoryDocument$warehouse_fromArgs<ExtArgs>
    warehouse_to?: boolean | InventoryDocument$warehouse_toArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryDocument"]>

  export type InventoryDocumentSelectScalar = {
    id?: boolean
    doc_type?: boolean
    document_number?: boolean
    status?: boolean
    warehouse_from_id?: boolean
    warehouse_to_id?: boolean
    third_party_id?: boolean
    date?: boolean
    notes?: boolean
    created_by?: boolean
    approved_by?: boolean
    attachment_url?: boolean
  }

  export type InventoryDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse_from?: boolean | InventoryDocument$warehouse_fromArgs<ExtArgs>
    warehouse_to?: boolean | InventoryDocument$warehouse_toArgs<ExtArgs>
    lines?: boolean | InventoryDocument$linesArgs<ExtArgs>
    _count?: boolean | InventoryDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse_from?: boolean | InventoryDocument$warehouse_fromArgs<ExtArgs>
    warehouse_to?: boolean | InventoryDocument$warehouse_toArgs<ExtArgs>
  }

  export type $InventoryDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryDocument"
    objects: {
      warehouse_from: Prisma.$WarehousePayload<ExtArgs> | null
      warehouse_to: Prisma.$WarehousePayload<ExtArgs> | null
      lines: Prisma.$InventoryDocumentLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      doc_type: string
      document_number: string
      status: string
      warehouse_from_id: number | null
      warehouse_to_id: number | null
      third_party_id: number | null
      date: Date
      notes: string | null
      created_by: number
      approved_by: number | null
      attachment_url: string | null
    }, ExtArgs["result"]["inventoryDocument"]>
    composites: {}
  }

  type InventoryDocumentGetPayload<S extends boolean | null | undefined | InventoryDocumentDefaultArgs> = $Result.GetResult<Prisma.$InventoryDocumentPayload, S>

  type InventoryDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryDocumentCountAggregateInputType | true
    }

  export interface InventoryDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryDocument'], meta: { name: 'InventoryDocument' } }
    /**
     * Find zero or one InventoryDocument that matches the filter.
     * @param {InventoryDocumentFindUniqueArgs} args - Arguments to find a InventoryDocument
     * @example
     * // Get one InventoryDocument
     * const inventoryDocument = await prisma.inventoryDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryDocumentFindUniqueArgs>(args: SelectSubset<T, InventoryDocumentFindUniqueArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryDocumentFindUniqueOrThrowArgs} args - Arguments to find a InventoryDocument
     * @example
     * // Get one InventoryDocument
     * const inventoryDocument = await prisma.inventoryDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentFindFirstArgs} args - Arguments to find a InventoryDocument
     * @example
     * // Get one InventoryDocument
     * const inventoryDocument = await prisma.inventoryDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryDocumentFindFirstArgs>(args?: SelectSubset<T, InventoryDocumentFindFirstArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentFindFirstOrThrowArgs} args - Arguments to find a InventoryDocument
     * @example
     * // Get one InventoryDocument
     * const inventoryDocument = await prisma.inventoryDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryDocuments
     * const inventoryDocuments = await prisma.inventoryDocument.findMany()
     * 
     * // Get first 10 InventoryDocuments
     * const inventoryDocuments = await prisma.inventoryDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryDocumentWithIdOnly = await prisma.inventoryDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryDocumentFindManyArgs>(args?: SelectSubset<T, InventoryDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryDocument.
     * @param {InventoryDocumentCreateArgs} args - Arguments to create a InventoryDocument.
     * @example
     * // Create one InventoryDocument
     * const InventoryDocument = await prisma.inventoryDocument.create({
     *   data: {
     *     // ... data to create a InventoryDocument
     *   }
     * })
     * 
     */
    create<T extends InventoryDocumentCreateArgs>(args: SelectSubset<T, InventoryDocumentCreateArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryDocuments.
     * @param {InventoryDocumentCreateManyArgs} args - Arguments to create many InventoryDocuments.
     * @example
     * // Create many InventoryDocuments
     * const inventoryDocument = await prisma.inventoryDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryDocumentCreateManyArgs>(args?: SelectSubset<T, InventoryDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryDocuments and returns the data saved in the database.
     * @param {InventoryDocumentCreateManyAndReturnArgs} args - Arguments to create many InventoryDocuments.
     * @example
     * // Create many InventoryDocuments
     * const inventoryDocument = await prisma.inventoryDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryDocuments and only return the `id`
     * const inventoryDocumentWithIdOnly = await prisma.inventoryDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryDocument.
     * @param {InventoryDocumentDeleteArgs} args - Arguments to delete one InventoryDocument.
     * @example
     * // Delete one InventoryDocument
     * const InventoryDocument = await prisma.inventoryDocument.delete({
     *   where: {
     *     // ... filter to delete one InventoryDocument
     *   }
     * })
     * 
     */
    delete<T extends InventoryDocumentDeleteArgs>(args: SelectSubset<T, InventoryDocumentDeleteArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryDocument.
     * @param {InventoryDocumentUpdateArgs} args - Arguments to update one InventoryDocument.
     * @example
     * // Update one InventoryDocument
     * const inventoryDocument = await prisma.inventoryDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryDocumentUpdateArgs>(args: SelectSubset<T, InventoryDocumentUpdateArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryDocuments.
     * @param {InventoryDocumentDeleteManyArgs} args - Arguments to filter InventoryDocuments to delete.
     * @example
     * // Delete a few InventoryDocuments
     * const { count } = await prisma.inventoryDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDocumentDeleteManyArgs>(args?: SelectSubset<T, InventoryDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryDocuments
     * const inventoryDocument = await prisma.inventoryDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryDocumentUpdateManyArgs>(args: SelectSubset<T, InventoryDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryDocument.
     * @param {InventoryDocumentUpsertArgs} args - Arguments to update or create a InventoryDocument.
     * @example
     * // Update or create a InventoryDocument
     * const inventoryDocument = await prisma.inventoryDocument.upsert({
     *   create: {
     *     // ... data to create a InventoryDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryDocument we want to update
     *   }
     * })
     */
    upsert<T extends InventoryDocumentUpsertArgs>(args: SelectSubset<T, InventoryDocumentUpsertArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentCountArgs} args - Arguments to filter InventoryDocuments to count.
     * @example
     * // Count the number of InventoryDocuments
     * const count = await prisma.inventoryDocument.count({
     *   where: {
     *     // ... the filter for the InventoryDocuments we want to count
     *   }
     * })
    **/
    count<T extends InventoryDocumentCountArgs>(
      args?: Subset<T, InventoryDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryDocumentAggregateArgs>(args: Subset<T, InventoryDocumentAggregateArgs>): Prisma.PrismaPromise<GetInventoryDocumentAggregateType<T>>

    /**
     * Group by InventoryDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryDocumentGroupByArgs['orderBy'] }
        : { orderBy?: InventoryDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryDocument model
   */
  readonly fields: InventoryDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouse_from<T extends InventoryDocument$warehouse_fromArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDocument$warehouse_fromArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    warehouse_to<T extends InventoryDocument$warehouse_toArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDocument$warehouse_toArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    lines<T extends InventoryDocument$linesArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDocument$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryDocument model
   */ 
  interface InventoryDocumentFieldRefs {
    readonly id: FieldRef<"InventoryDocument", 'Int'>
    readonly doc_type: FieldRef<"InventoryDocument", 'String'>
    readonly document_number: FieldRef<"InventoryDocument", 'String'>
    readonly status: FieldRef<"InventoryDocument", 'String'>
    readonly warehouse_from_id: FieldRef<"InventoryDocument", 'Int'>
    readonly warehouse_to_id: FieldRef<"InventoryDocument", 'Int'>
    readonly third_party_id: FieldRef<"InventoryDocument", 'Int'>
    readonly date: FieldRef<"InventoryDocument", 'DateTime'>
    readonly notes: FieldRef<"InventoryDocument", 'String'>
    readonly created_by: FieldRef<"InventoryDocument", 'Int'>
    readonly approved_by: FieldRef<"InventoryDocument", 'Int'>
    readonly attachment_url: FieldRef<"InventoryDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryDocument findUnique
   */
  export type InventoryDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocument to fetch.
     */
    where: InventoryDocumentWhereUniqueInput
  }

  /**
   * InventoryDocument findUniqueOrThrow
   */
  export type InventoryDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocument to fetch.
     */
    where: InventoryDocumentWhereUniqueInput
  }

  /**
   * InventoryDocument findFirst
   */
  export type InventoryDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocument to fetch.
     */
    where?: InventoryDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryDocuments to fetch.
     */
    orderBy?: InventoryDocumentOrderByWithRelationInput | InventoryDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryDocuments.
     */
    cursor?: InventoryDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryDocuments.
     */
    distinct?: InventoryDocumentScalarFieldEnum | InventoryDocumentScalarFieldEnum[]
  }

  /**
   * InventoryDocument findFirstOrThrow
   */
  export type InventoryDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocument to fetch.
     */
    where?: InventoryDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryDocuments to fetch.
     */
    orderBy?: InventoryDocumentOrderByWithRelationInput | InventoryDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryDocuments.
     */
    cursor?: InventoryDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryDocuments.
     */
    distinct?: InventoryDocumentScalarFieldEnum | InventoryDocumentScalarFieldEnum[]
  }

  /**
   * InventoryDocument findMany
   */
  export type InventoryDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocuments to fetch.
     */
    where?: InventoryDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryDocuments to fetch.
     */
    orderBy?: InventoryDocumentOrderByWithRelationInput | InventoryDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryDocuments.
     */
    cursor?: InventoryDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryDocuments.
     */
    skip?: number
    distinct?: InventoryDocumentScalarFieldEnum | InventoryDocumentScalarFieldEnum[]
  }

  /**
   * InventoryDocument create
   */
  export type InventoryDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryDocument.
     */
    data: XOR<InventoryDocumentCreateInput, InventoryDocumentUncheckedCreateInput>
  }

  /**
   * InventoryDocument createMany
   */
  export type InventoryDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryDocuments.
     */
    data: InventoryDocumentCreateManyInput | InventoryDocumentCreateManyInput[]
  }

  /**
   * InventoryDocument createManyAndReturn
   */
  export type InventoryDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryDocuments.
     */
    data: InventoryDocumentCreateManyInput | InventoryDocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryDocument update
   */
  export type InventoryDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryDocument.
     */
    data: XOR<InventoryDocumentUpdateInput, InventoryDocumentUncheckedUpdateInput>
    /**
     * Choose, which InventoryDocument to update.
     */
    where: InventoryDocumentWhereUniqueInput
  }

  /**
   * InventoryDocument updateMany
   */
  export type InventoryDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryDocuments.
     */
    data: XOR<InventoryDocumentUpdateManyMutationInput, InventoryDocumentUncheckedUpdateManyInput>
    /**
     * Filter which InventoryDocuments to update
     */
    where?: InventoryDocumentWhereInput
  }

  /**
   * InventoryDocument upsert
   */
  export type InventoryDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryDocument to update in case it exists.
     */
    where: InventoryDocumentWhereUniqueInput
    /**
     * In case the InventoryDocument found by the `where` argument doesn't exist, create a new InventoryDocument with this data.
     */
    create: XOR<InventoryDocumentCreateInput, InventoryDocumentUncheckedCreateInput>
    /**
     * In case the InventoryDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryDocumentUpdateInput, InventoryDocumentUncheckedUpdateInput>
  }

  /**
   * InventoryDocument delete
   */
  export type InventoryDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
    /**
     * Filter which InventoryDocument to delete.
     */
    where: InventoryDocumentWhereUniqueInput
  }

  /**
   * InventoryDocument deleteMany
   */
  export type InventoryDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryDocuments to delete
     */
    where?: InventoryDocumentWhereInput
  }

  /**
   * InventoryDocument.warehouse_from
   */
  export type InventoryDocument$warehouse_fromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
  }

  /**
   * InventoryDocument.warehouse_to
   */
  export type InventoryDocument$warehouse_toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
  }

  /**
   * InventoryDocument.lines
   */
  export type InventoryDocument$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    where?: InventoryDocumentLineWhereInput
    orderBy?: InventoryDocumentLineOrderByWithRelationInput | InventoryDocumentLineOrderByWithRelationInput[]
    cursor?: InventoryDocumentLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryDocumentLineScalarFieldEnum | InventoryDocumentLineScalarFieldEnum[]
  }

  /**
   * InventoryDocument without action
   */
  export type InventoryDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocument
     */
    select?: InventoryDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentInclude<ExtArgs> | null
  }


  /**
   * Model InventoryDocumentLine
   */

  export type AggregateInventoryDocumentLine = {
    _count: InventoryDocumentLineCountAggregateOutputType | null
    _avg: InventoryDocumentLineAvgAggregateOutputType | null
    _sum: InventoryDocumentLineSumAggregateOutputType | null
    _min: InventoryDocumentLineMinAggregateOutputType | null
    _max: InventoryDocumentLineMaxAggregateOutputType | null
  }

  export type InventoryDocumentLineAvgAggregateOutputType = {
    id: number | null
    document_id: number | null
    product_id: number | null
    qty: number | null
    unit_cost: number | null
    total_cost: number | null
    unit_sale: number | null
    total_sale: number | null
  }

  export type InventoryDocumentLineSumAggregateOutputType = {
    id: number | null
    document_id: number | null
    product_id: number | null
    qty: number | null
    unit_cost: number | null
    total_cost: number | null
    unit_sale: number | null
    total_sale: number | null
  }

  export type InventoryDocumentLineMinAggregateOutputType = {
    id: number | null
    document_id: number | null
    product_id: number | null
    qty: number | null
    unit_cost: number | null
    total_cost: number | null
    unit_sale: number | null
    total_sale: number | null
    lot: string | null
  }

  export type InventoryDocumentLineMaxAggregateOutputType = {
    id: number | null
    document_id: number | null
    product_id: number | null
    qty: number | null
    unit_cost: number | null
    total_cost: number | null
    unit_sale: number | null
    total_sale: number | null
    lot: string | null
  }

  export type InventoryDocumentLineCountAggregateOutputType = {
    id: number
    document_id: number
    product_id: number
    qty: number
    unit_cost: number
    total_cost: number
    unit_sale: number
    total_sale: number
    lot: number
    _all: number
  }


  export type InventoryDocumentLineAvgAggregateInputType = {
    id?: true
    document_id?: true
    product_id?: true
    qty?: true
    unit_cost?: true
    total_cost?: true
    unit_sale?: true
    total_sale?: true
  }

  export type InventoryDocumentLineSumAggregateInputType = {
    id?: true
    document_id?: true
    product_id?: true
    qty?: true
    unit_cost?: true
    total_cost?: true
    unit_sale?: true
    total_sale?: true
  }

  export type InventoryDocumentLineMinAggregateInputType = {
    id?: true
    document_id?: true
    product_id?: true
    qty?: true
    unit_cost?: true
    total_cost?: true
    unit_sale?: true
    total_sale?: true
    lot?: true
  }

  export type InventoryDocumentLineMaxAggregateInputType = {
    id?: true
    document_id?: true
    product_id?: true
    qty?: true
    unit_cost?: true
    total_cost?: true
    unit_sale?: true
    total_sale?: true
    lot?: true
  }

  export type InventoryDocumentLineCountAggregateInputType = {
    id?: true
    document_id?: true
    product_id?: true
    qty?: true
    unit_cost?: true
    total_cost?: true
    unit_sale?: true
    total_sale?: true
    lot?: true
    _all?: true
  }

  export type InventoryDocumentLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryDocumentLine to aggregate.
     */
    where?: InventoryDocumentLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryDocumentLines to fetch.
     */
    orderBy?: InventoryDocumentLineOrderByWithRelationInput | InventoryDocumentLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryDocumentLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryDocumentLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryDocumentLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryDocumentLines
    **/
    _count?: true | InventoryDocumentLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryDocumentLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryDocumentLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryDocumentLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryDocumentLineMaxAggregateInputType
  }

  export type GetInventoryDocumentLineAggregateType<T extends InventoryDocumentLineAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryDocumentLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryDocumentLine[P]>
      : GetScalarType<T[P], AggregateInventoryDocumentLine[P]>
  }




  export type InventoryDocumentLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryDocumentLineWhereInput
    orderBy?: InventoryDocumentLineOrderByWithAggregationInput | InventoryDocumentLineOrderByWithAggregationInput[]
    by: InventoryDocumentLineScalarFieldEnum[] | InventoryDocumentLineScalarFieldEnum
    having?: InventoryDocumentLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryDocumentLineCountAggregateInputType | true
    _avg?: InventoryDocumentLineAvgAggregateInputType
    _sum?: InventoryDocumentLineSumAggregateInputType
    _min?: InventoryDocumentLineMinAggregateInputType
    _max?: InventoryDocumentLineMaxAggregateInputType
  }

  export type InventoryDocumentLineGroupByOutputType = {
    id: number
    document_id: number
    product_id: number
    qty: number
    unit_cost: number | null
    total_cost: number | null
    unit_sale: number | null
    total_sale: number | null
    lot: string | null
    _count: InventoryDocumentLineCountAggregateOutputType | null
    _avg: InventoryDocumentLineAvgAggregateOutputType | null
    _sum: InventoryDocumentLineSumAggregateOutputType | null
    _min: InventoryDocumentLineMinAggregateOutputType | null
    _max: InventoryDocumentLineMaxAggregateOutputType | null
  }

  type GetInventoryDocumentLineGroupByPayload<T extends InventoryDocumentLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryDocumentLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryDocumentLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryDocumentLineGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryDocumentLineGroupByOutputType[P]>
        }
      >
    >


  export type InventoryDocumentLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    product_id?: boolean
    qty?: boolean
    unit_cost?: boolean
    total_cost?: boolean
    unit_sale?: boolean
    total_sale?: boolean
    lot?: boolean
    document?: boolean | InventoryDocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryDocumentLine"]>

  export type InventoryDocumentLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    product_id?: boolean
    qty?: boolean
    unit_cost?: boolean
    total_cost?: boolean
    unit_sale?: boolean
    total_sale?: boolean
    lot?: boolean
    document?: boolean | InventoryDocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryDocumentLine"]>

  export type InventoryDocumentLineSelectScalar = {
    id?: boolean
    document_id?: boolean
    product_id?: boolean
    qty?: boolean
    unit_cost?: boolean
    total_cost?: boolean
    unit_sale?: boolean
    total_sale?: boolean
    lot?: boolean
  }

  export type InventoryDocumentLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | InventoryDocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryDocumentLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | InventoryDocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryDocumentLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryDocumentLine"
    objects: {
      document: Prisma.$InventoryDocumentPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      document_id: number
      product_id: number
      qty: number
      unit_cost: number | null
      total_cost: number | null
      unit_sale: number | null
      total_sale: number | null
      lot: string | null
    }, ExtArgs["result"]["inventoryDocumentLine"]>
    composites: {}
  }

  type InventoryDocumentLineGetPayload<S extends boolean | null | undefined | InventoryDocumentLineDefaultArgs> = $Result.GetResult<Prisma.$InventoryDocumentLinePayload, S>

  type InventoryDocumentLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryDocumentLineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryDocumentLineCountAggregateInputType | true
    }

  export interface InventoryDocumentLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryDocumentLine'], meta: { name: 'InventoryDocumentLine' } }
    /**
     * Find zero or one InventoryDocumentLine that matches the filter.
     * @param {InventoryDocumentLineFindUniqueArgs} args - Arguments to find a InventoryDocumentLine
     * @example
     * // Get one InventoryDocumentLine
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryDocumentLineFindUniqueArgs>(args: SelectSubset<T, InventoryDocumentLineFindUniqueArgs<ExtArgs>>): Prisma__InventoryDocumentLineClient<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryDocumentLine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryDocumentLineFindUniqueOrThrowArgs} args - Arguments to find a InventoryDocumentLine
     * @example
     * // Get one InventoryDocumentLine
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryDocumentLineFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryDocumentLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryDocumentLineClient<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryDocumentLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentLineFindFirstArgs} args - Arguments to find a InventoryDocumentLine
     * @example
     * // Get one InventoryDocumentLine
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryDocumentLineFindFirstArgs>(args?: SelectSubset<T, InventoryDocumentLineFindFirstArgs<ExtArgs>>): Prisma__InventoryDocumentLineClient<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryDocumentLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentLineFindFirstOrThrowArgs} args - Arguments to find a InventoryDocumentLine
     * @example
     * // Get one InventoryDocumentLine
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryDocumentLineFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryDocumentLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryDocumentLineClient<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryDocumentLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryDocumentLines
     * const inventoryDocumentLines = await prisma.inventoryDocumentLine.findMany()
     * 
     * // Get first 10 InventoryDocumentLines
     * const inventoryDocumentLines = await prisma.inventoryDocumentLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryDocumentLineWithIdOnly = await prisma.inventoryDocumentLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryDocumentLineFindManyArgs>(args?: SelectSubset<T, InventoryDocumentLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryDocumentLine.
     * @param {InventoryDocumentLineCreateArgs} args - Arguments to create a InventoryDocumentLine.
     * @example
     * // Create one InventoryDocumentLine
     * const InventoryDocumentLine = await prisma.inventoryDocumentLine.create({
     *   data: {
     *     // ... data to create a InventoryDocumentLine
     *   }
     * })
     * 
     */
    create<T extends InventoryDocumentLineCreateArgs>(args: SelectSubset<T, InventoryDocumentLineCreateArgs<ExtArgs>>): Prisma__InventoryDocumentLineClient<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryDocumentLines.
     * @param {InventoryDocumentLineCreateManyArgs} args - Arguments to create many InventoryDocumentLines.
     * @example
     * // Create many InventoryDocumentLines
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryDocumentLineCreateManyArgs>(args?: SelectSubset<T, InventoryDocumentLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryDocumentLines and returns the data saved in the database.
     * @param {InventoryDocumentLineCreateManyAndReturnArgs} args - Arguments to create many InventoryDocumentLines.
     * @example
     * // Create many InventoryDocumentLines
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryDocumentLines and only return the `id`
     * const inventoryDocumentLineWithIdOnly = await prisma.inventoryDocumentLine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryDocumentLineCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryDocumentLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryDocumentLine.
     * @param {InventoryDocumentLineDeleteArgs} args - Arguments to delete one InventoryDocumentLine.
     * @example
     * // Delete one InventoryDocumentLine
     * const InventoryDocumentLine = await prisma.inventoryDocumentLine.delete({
     *   where: {
     *     // ... filter to delete one InventoryDocumentLine
     *   }
     * })
     * 
     */
    delete<T extends InventoryDocumentLineDeleteArgs>(args: SelectSubset<T, InventoryDocumentLineDeleteArgs<ExtArgs>>): Prisma__InventoryDocumentLineClient<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryDocumentLine.
     * @param {InventoryDocumentLineUpdateArgs} args - Arguments to update one InventoryDocumentLine.
     * @example
     * // Update one InventoryDocumentLine
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryDocumentLineUpdateArgs>(args: SelectSubset<T, InventoryDocumentLineUpdateArgs<ExtArgs>>): Prisma__InventoryDocumentLineClient<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryDocumentLines.
     * @param {InventoryDocumentLineDeleteManyArgs} args - Arguments to filter InventoryDocumentLines to delete.
     * @example
     * // Delete a few InventoryDocumentLines
     * const { count } = await prisma.inventoryDocumentLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDocumentLineDeleteManyArgs>(args?: SelectSubset<T, InventoryDocumentLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryDocumentLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryDocumentLines
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryDocumentLineUpdateManyArgs>(args: SelectSubset<T, InventoryDocumentLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryDocumentLine.
     * @param {InventoryDocumentLineUpsertArgs} args - Arguments to update or create a InventoryDocumentLine.
     * @example
     * // Update or create a InventoryDocumentLine
     * const inventoryDocumentLine = await prisma.inventoryDocumentLine.upsert({
     *   create: {
     *     // ... data to create a InventoryDocumentLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryDocumentLine we want to update
     *   }
     * })
     */
    upsert<T extends InventoryDocumentLineUpsertArgs>(args: SelectSubset<T, InventoryDocumentLineUpsertArgs<ExtArgs>>): Prisma__InventoryDocumentLineClient<$Result.GetResult<Prisma.$InventoryDocumentLinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryDocumentLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentLineCountArgs} args - Arguments to filter InventoryDocumentLines to count.
     * @example
     * // Count the number of InventoryDocumentLines
     * const count = await prisma.inventoryDocumentLine.count({
     *   where: {
     *     // ... the filter for the InventoryDocumentLines we want to count
     *   }
     * })
    **/
    count<T extends InventoryDocumentLineCountArgs>(
      args?: Subset<T, InventoryDocumentLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryDocumentLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryDocumentLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryDocumentLineAggregateArgs>(args: Subset<T, InventoryDocumentLineAggregateArgs>): Prisma.PrismaPromise<GetInventoryDocumentLineAggregateType<T>>

    /**
     * Group by InventoryDocumentLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryDocumentLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryDocumentLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryDocumentLineGroupByArgs['orderBy'] }
        : { orderBy?: InventoryDocumentLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryDocumentLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryDocumentLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryDocumentLine model
   */
  readonly fields: InventoryDocumentLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryDocumentLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryDocumentLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends InventoryDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDocumentDefaultArgs<ExtArgs>>): Prisma__InventoryDocumentClient<$Result.GetResult<Prisma.$InventoryDocumentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryDocumentLine model
   */ 
  interface InventoryDocumentLineFieldRefs {
    readonly id: FieldRef<"InventoryDocumentLine", 'Int'>
    readonly document_id: FieldRef<"InventoryDocumentLine", 'Int'>
    readonly product_id: FieldRef<"InventoryDocumentLine", 'Int'>
    readonly qty: FieldRef<"InventoryDocumentLine", 'Float'>
    readonly unit_cost: FieldRef<"InventoryDocumentLine", 'Float'>
    readonly total_cost: FieldRef<"InventoryDocumentLine", 'Float'>
    readonly unit_sale: FieldRef<"InventoryDocumentLine", 'Float'>
    readonly total_sale: FieldRef<"InventoryDocumentLine", 'Float'>
    readonly lot: FieldRef<"InventoryDocumentLine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryDocumentLine findUnique
   */
  export type InventoryDocumentLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocumentLine to fetch.
     */
    where: InventoryDocumentLineWhereUniqueInput
  }

  /**
   * InventoryDocumentLine findUniqueOrThrow
   */
  export type InventoryDocumentLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocumentLine to fetch.
     */
    where: InventoryDocumentLineWhereUniqueInput
  }

  /**
   * InventoryDocumentLine findFirst
   */
  export type InventoryDocumentLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocumentLine to fetch.
     */
    where?: InventoryDocumentLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryDocumentLines to fetch.
     */
    orderBy?: InventoryDocumentLineOrderByWithRelationInput | InventoryDocumentLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryDocumentLines.
     */
    cursor?: InventoryDocumentLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryDocumentLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryDocumentLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryDocumentLines.
     */
    distinct?: InventoryDocumentLineScalarFieldEnum | InventoryDocumentLineScalarFieldEnum[]
  }

  /**
   * InventoryDocumentLine findFirstOrThrow
   */
  export type InventoryDocumentLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocumentLine to fetch.
     */
    where?: InventoryDocumentLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryDocumentLines to fetch.
     */
    orderBy?: InventoryDocumentLineOrderByWithRelationInput | InventoryDocumentLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryDocumentLines.
     */
    cursor?: InventoryDocumentLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryDocumentLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryDocumentLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryDocumentLines.
     */
    distinct?: InventoryDocumentLineScalarFieldEnum | InventoryDocumentLineScalarFieldEnum[]
  }

  /**
   * InventoryDocumentLine findMany
   */
  export type InventoryDocumentLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which InventoryDocumentLines to fetch.
     */
    where?: InventoryDocumentLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryDocumentLines to fetch.
     */
    orderBy?: InventoryDocumentLineOrderByWithRelationInput | InventoryDocumentLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryDocumentLines.
     */
    cursor?: InventoryDocumentLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryDocumentLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryDocumentLines.
     */
    skip?: number
    distinct?: InventoryDocumentLineScalarFieldEnum | InventoryDocumentLineScalarFieldEnum[]
  }

  /**
   * InventoryDocumentLine create
   */
  export type InventoryDocumentLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryDocumentLine.
     */
    data: XOR<InventoryDocumentLineCreateInput, InventoryDocumentLineUncheckedCreateInput>
  }

  /**
   * InventoryDocumentLine createMany
   */
  export type InventoryDocumentLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryDocumentLines.
     */
    data: InventoryDocumentLineCreateManyInput | InventoryDocumentLineCreateManyInput[]
  }

  /**
   * InventoryDocumentLine createManyAndReturn
   */
  export type InventoryDocumentLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryDocumentLines.
     */
    data: InventoryDocumentLineCreateManyInput | InventoryDocumentLineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryDocumentLine update
   */
  export type InventoryDocumentLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryDocumentLine.
     */
    data: XOR<InventoryDocumentLineUpdateInput, InventoryDocumentLineUncheckedUpdateInput>
    /**
     * Choose, which InventoryDocumentLine to update.
     */
    where: InventoryDocumentLineWhereUniqueInput
  }

  /**
   * InventoryDocumentLine updateMany
   */
  export type InventoryDocumentLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryDocumentLines.
     */
    data: XOR<InventoryDocumentLineUpdateManyMutationInput, InventoryDocumentLineUncheckedUpdateManyInput>
    /**
     * Filter which InventoryDocumentLines to update
     */
    where?: InventoryDocumentLineWhereInput
  }

  /**
   * InventoryDocumentLine upsert
   */
  export type InventoryDocumentLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryDocumentLine to update in case it exists.
     */
    where: InventoryDocumentLineWhereUniqueInput
    /**
     * In case the InventoryDocumentLine found by the `where` argument doesn't exist, create a new InventoryDocumentLine with this data.
     */
    create: XOR<InventoryDocumentLineCreateInput, InventoryDocumentLineUncheckedCreateInput>
    /**
     * In case the InventoryDocumentLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryDocumentLineUpdateInput, InventoryDocumentLineUncheckedUpdateInput>
  }

  /**
   * InventoryDocumentLine delete
   */
  export type InventoryDocumentLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
    /**
     * Filter which InventoryDocumentLine to delete.
     */
    where: InventoryDocumentLineWhereUniqueInput
  }

  /**
   * InventoryDocumentLine deleteMany
   */
  export type InventoryDocumentLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryDocumentLines to delete
     */
    where?: InventoryDocumentLineWhereInput
  }

  /**
   * InventoryDocumentLine without action
   */
  export type InventoryDocumentLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryDocumentLine
     */
    select?: InventoryDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryDocumentLineInclude<ExtArgs> | null
  }


  /**
   * Model InventoryLedger
   */

  export type AggregateInventoryLedger = {
    _count: InventoryLedgerCountAggregateOutputType | null
    _avg: InventoryLedgerAvgAggregateOutputType | null
    _sum: InventoryLedgerSumAggregateOutputType | null
    _min: InventoryLedgerMinAggregateOutputType | null
    _max: InventoryLedgerMaxAggregateOutputType | null
  }

  export type InventoryLedgerAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    warehouse_id: number | null
    doc_id: number | null
    qty_in: number | null
    qty_out: number | null
    balance_qty: number | null
    unit_cost: number | null
    avg_cost_after: number | null
    value_after: number | null
    created_by: number | null
  }

  export type InventoryLedgerSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    warehouse_id: number | null
    doc_id: number | null
    qty_in: number | null
    qty_out: number | null
    balance_qty: number | null
    unit_cost: number | null
    avg_cost_after: number | null
    value_after: number | null
    created_by: number | null
  }

  export type InventoryLedgerMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    product_id: number | null
    warehouse_id: number | null
    movement_type: string | null
    doc_id: number | null
    qty_in: number | null
    qty_out: number | null
    balance_qty: number | null
    unit_cost: number | null
    avg_cost_after: number | null
    value_after: number | null
    lot: string | null
    created_by: number | null
  }

  export type InventoryLedgerMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    product_id: number | null
    warehouse_id: number | null
    movement_type: string | null
    doc_id: number | null
    qty_in: number | null
    qty_out: number | null
    balance_qty: number | null
    unit_cost: number | null
    avg_cost_after: number | null
    value_after: number | null
    lot: string | null
    created_by: number | null
  }

  export type InventoryLedgerCountAggregateOutputType = {
    id: number
    timestamp: number
    product_id: number
    warehouse_id: number
    movement_type: number
    doc_id: number
    qty_in: number
    qty_out: number
    balance_qty: number
    unit_cost: number
    avg_cost_after: number
    value_after: number
    lot: number
    created_by: number
    _all: number
  }


  export type InventoryLedgerAvgAggregateInputType = {
    id?: true
    product_id?: true
    warehouse_id?: true
    doc_id?: true
    qty_in?: true
    qty_out?: true
    balance_qty?: true
    unit_cost?: true
    avg_cost_after?: true
    value_after?: true
    created_by?: true
  }

  export type InventoryLedgerSumAggregateInputType = {
    id?: true
    product_id?: true
    warehouse_id?: true
    doc_id?: true
    qty_in?: true
    qty_out?: true
    balance_qty?: true
    unit_cost?: true
    avg_cost_after?: true
    value_after?: true
    created_by?: true
  }

  export type InventoryLedgerMinAggregateInputType = {
    id?: true
    timestamp?: true
    product_id?: true
    warehouse_id?: true
    movement_type?: true
    doc_id?: true
    qty_in?: true
    qty_out?: true
    balance_qty?: true
    unit_cost?: true
    avg_cost_after?: true
    value_after?: true
    lot?: true
    created_by?: true
  }

  export type InventoryLedgerMaxAggregateInputType = {
    id?: true
    timestamp?: true
    product_id?: true
    warehouse_id?: true
    movement_type?: true
    doc_id?: true
    qty_in?: true
    qty_out?: true
    balance_qty?: true
    unit_cost?: true
    avg_cost_after?: true
    value_after?: true
    lot?: true
    created_by?: true
  }

  export type InventoryLedgerCountAggregateInputType = {
    id?: true
    timestamp?: true
    product_id?: true
    warehouse_id?: true
    movement_type?: true
    doc_id?: true
    qty_in?: true
    qty_out?: true
    balance_qty?: true
    unit_cost?: true
    avg_cost_after?: true
    value_after?: true
    lot?: true
    created_by?: true
    _all?: true
  }

  export type InventoryLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLedger to aggregate.
     */
    where?: InventoryLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLedgers to fetch.
     */
    orderBy?: InventoryLedgerOrderByWithRelationInput | InventoryLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryLedgers
    **/
    _count?: true | InventoryLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryLedgerMaxAggregateInputType
  }

  export type GetInventoryLedgerAggregateType<T extends InventoryLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryLedger[P]>
      : GetScalarType<T[P], AggregateInventoryLedger[P]>
  }




  export type InventoryLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLedgerWhereInput
    orderBy?: InventoryLedgerOrderByWithAggregationInput | InventoryLedgerOrderByWithAggregationInput[]
    by: InventoryLedgerScalarFieldEnum[] | InventoryLedgerScalarFieldEnum
    having?: InventoryLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryLedgerCountAggregateInputType | true
    _avg?: InventoryLedgerAvgAggregateInputType
    _sum?: InventoryLedgerSumAggregateInputType
    _min?: InventoryLedgerMinAggregateInputType
    _max?: InventoryLedgerMaxAggregateInputType
  }

  export type InventoryLedgerGroupByOutputType = {
    id: number
    timestamp: Date
    product_id: number
    warehouse_id: number
    movement_type: string
    doc_id: number
    qty_in: number
    qty_out: number
    balance_qty: number
    unit_cost: number
    avg_cost_after: number
    value_after: number
    lot: string
    created_by: number
    _count: InventoryLedgerCountAggregateOutputType | null
    _avg: InventoryLedgerAvgAggregateOutputType | null
    _sum: InventoryLedgerSumAggregateOutputType | null
    _min: InventoryLedgerMinAggregateOutputType | null
    _max: InventoryLedgerMaxAggregateOutputType | null
  }

  type GetInventoryLedgerGroupByPayload<T extends InventoryLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryLedgerGroupByOutputType[P]>
        }
      >
    >


  export type InventoryLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    product_id?: boolean
    warehouse_id?: boolean
    movement_type?: boolean
    doc_id?: boolean
    qty_in?: boolean
    qty_out?: boolean
    balance_qty?: boolean
    unit_cost?: boolean
    avg_cost_after?: boolean
    value_after?: boolean
    lot?: boolean
    created_by?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryLedger"]>

  export type InventoryLedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    product_id?: boolean
    warehouse_id?: boolean
    movement_type?: boolean
    doc_id?: boolean
    qty_in?: boolean
    qty_out?: boolean
    balance_qty?: boolean
    unit_cost?: boolean
    avg_cost_after?: boolean
    value_after?: boolean
    lot?: boolean
    created_by?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryLedger"]>

  export type InventoryLedgerSelectScalar = {
    id?: boolean
    timestamp?: boolean
    product_id?: boolean
    warehouse_id?: boolean
    movement_type?: boolean
    doc_id?: boolean
    qty_in?: boolean
    qty_out?: boolean
    balance_qty?: boolean
    unit_cost?: boolean
    avg_cost_after?: boolean
    value_after?: boolean
    lot?: boolean
    created_by?: boolean
  }

  export type InventoryLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryLedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryLedger"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      product_id: number
      warehouse_id: number
      movement_type: string
      doc_id: number
      qty_in: number
      qty_out: number
      balance_qty: number
      unit_cost: number
      avg_cost_after: number
      value_after: number
      lot: string
      created_by: number
    }, ExtArgs["result"]["inventoryLedger"]>
    composites: {}
  }

  type InventoryLedgerGetPayload<S extends boolean | null | undefined | InventoryLedgerDefaultArgs> = $Result.GetResult<Prisma.$InventoryLedgerPayload, S>

  type InventoryLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryLedgerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryLedgerCountAggregateInputType | true
    }

  export interface InventoryLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryLedger'], meta: { name: 'InventoryLedger' } }
    /**
     * Find zero or one InventoryLedger that matches the filter.
     * @param {InventoryLedgerFindUniqueArgs} args - Arguments to find a InventoryLedger
     * @example
     * // Get one InventoryLedger
     * const inventoryLedger = await prisma.inventoryLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryLedgerFindUniqueArgs>(args: SelectSubset<T, InventoryLedgerFindUniqueArgs<ExtArgs>>): Prisma__InventoryLedgerClient<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryLedger that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryLedgerFindUniqueOrThrowArgs} args - Arguments to find a InventoryLedger
     * @example
     * // Get one InventoryLedger
     * const inventoryLedger = await prisma.inventoryLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryLedgerClient<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLedgerFindFirstArgs} args - Arguments to find a InventoryLedger
     * @example
     * // Get one InventoryLedger
     * const inventoryLedger = await prisma.inventoryLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryLedgerFindFirstArgs>(args?: SelectSubset<T, InventoryLedgerFindFirstArgs<ExtArgs>>): Prisma__InventoryLedgerClient<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLedgerFindFirstOrThrowArgs} args - Arguments to find a InventoryLedger
     * @example
     * // Get one InventoryLedger
     * const inventoryLedger = await prisma.inventoryLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryLedgerClient<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryLedgers
     * const inventoryLedgers = await prisma.inventoryLedger.findMany()
     * 
     * // Get first 10 InventoryLedgers
     * const inventoryLedgers = await prisma.inventoryLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryLedgerWithIdOnly = await prisma.inventoryLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryLedgerFindManyArgs>(args?: SelectSubset<T, InventoryLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryLedger.
     * @param {InventoryLedgerCreateArgs} args - Arguments to create a InventoryLedger.
     * @example
     * // Create one InventoryLedger
     * const InventoryLedger = await prisma.inventoryLedger.create({
     *   data: {
     *     // ... data to create a InventoryLedger
     *   }
     * })
     * 
     */
    create<T extends InventoryLedgerCreateArgs>(args: SelectSubset<T, InventoryLedgerCreateArgs<ExtArgs>>): Prisma__InventoryLedgerClient<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryLedgers.
     * @param {InventoryLedgerCreateManyArgs} args - Arguments to create many InventoryLedgers.
     * @example
     * // Create many InventoryLedgers
     * const inventoryLedger = await prisma.inventoryLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryLedgerCreateManyArgs>(args?: SelectSubset<T, InventoryLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryLedgers and returns the data saved in the database.
     * @param {InventoryLedgerCreateManyAndReturnArgs} args - Arguments to create many InventoryLedgers.
     * @example
     * // Create many InventoryLedgers
     * const inventoryLedger = await prisma.inventoryLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryLedgers and only return the `id`
     * const inventoryLedgerWithIdOnly = await prisma.inventoryLedger.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryLedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryLedger.
     * @param {InventoryLedgerDeleteArgs} args - Arguments to delete one InventoryLedger.
     * @example
     * // Delete one InventoryLedger
     * const InventoryLedger = await prisma.inventoryLedger.delete({
     *   where: {
     *     // ... filter to delete one InventoryLedger
     *   }
     * })
     * 
     */
    delete<T extends InventoryLedgerDeleteArgs>(args: SelectSubset<T, InventoryLedgerDeleteArgs<ExtArgs>>): Prisma__InventoryLedgerClient<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryLedger.
     * @param {InventoryLedgerUpdateArgs} args - Arguments to update one InventoryLedger.
     * @example
     * // Update one InventoryLedger
     * const inventoryLedger = await prisma.inventoryLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryLedgerUpdateArgs>(args: SelectSubset<T, InventoryLedgerUpdateArgs<ExtArgs>>): Prisma__InventoryLedgerClient<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryLedgers.
     * @param {InventoryLedgerDeleteManyArgs} args - Arguments to filter InventoryLedgers to delete.
     * @example
     * // Delete a few InventoryLedgers
     * const { count } = await prisma.inventoryLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryLedgerDeleteManyArgs>(args?: SelectSubset<T, InventoryLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryLedgers
     * const inventoryLedger = await prisma.inventoryLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryLedgerUpdateManyArgs>(args: SelectSubset<T, InventoryLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryLedger.
     * @param {InventoryLedgerUpsertArgs} args - Arguments to update or create a InventoryLedger.
     * @example
     * // Update or create a InventoryLedger
     * const inventoryLedger = await prisma.inventoryLedger.upsert({
     *   create: {
     *     // ... data to create a InventoryLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryLedger we want to update
     *   }
     * })
     */
    upsert<T extends InventoryLedgerUpsertArgs>(args: SelectSubset<T, InventoryLedgerUpsertArgs<ExtArgs>>): Prisma__InventoryLedgerClient<$Result.GetResult<Prisma.$InventoryLedgerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLedgerCountArgs} args - Arguments to filter InventoryLedgers to count.
     * @example
     * // Count the number of InventoryLedgers
     * const count = await prisma.inventoryLedger.count({
     *   where: {
     *     // ... the filter for the InventoryLedgers we want to count
     *   }
     * })
    **/
    count<T extends InventoryLedgerCountArgs>(
      args?: Subset<T, InventoryLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryLedgerAggregateArgs>(args: Subset<T, InventoryLedgerAggregateArgs>): Prisma.PrismaPromise<GetInventoryLedgerAggregateType<T>>

    /**
     * Group by InventoryLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLedgerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryLedgerGroupByArgs['orderBy'] }
        : { orderBy?: InventoryLedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryLedger model
   */
  readonly fields: InventoryLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryLedger model
   */ 
  interface InventoryLedgerFieldRefs {
    readonly id: FieldRef<"InventoryLedger", 'Int'>
    readonly timestamp: FieldRef<"InventoryLedger", 'DateTime'>
    readonly product_id: FieldRef<"InventoryLedger", 'Int'>
    readonly warehouse_id: FieldRef<"InventoryLedger", 'Int'>
    readonly movement_type: FieldRef<"InventoryLedger", 'String'>
    readonly doc_id: FieldRef<"InventoryLedger", 'Int'>
    readonly qty_in: FieldRef<"InventoryLedger", 'Float'>
    readonly qty_out: FieldRef<"InventoryLedger", 'Float'>
    readonly balance_qty: FieldRef<"InventoryLedger", 'Float'>
    readonly unit_cost: FieldRef<"InventoryLedger", 'Float'>
    readonly avg_cost_after: FieldRef<"InventoryLedger", 'Float'>
    readonly value_after: FieldRef<"InventoryLedger", 'Float'>
    readonly lot: FieldRef<"InventoryLedger", 'String'>
    readonly created_by: FieldRef<"InventoryLedger", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InventoryLedger findUnique
   */
  export type InventoryLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLedger to fetch.
     */
    where: InventoryLedgerWhereUniqueInput
  }

  /**
   * InventoryLedger findUniqueOrThrow
   */
  export type InventoryLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLedger to fetch.
     */
    where: InventoryLedgerWhereUniqueInput
  }

  /**
   * InventoryLedger findFirst
   */
  export type InventoryLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLedger to fetch.
     */
    where?: InventoryLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLedgers to fetch.
     */
    orderBy?: InventoryLedgerOrderByWithRelationInput | InventoryLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLedgers.
     */
    cursor?: InventoryLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLedgers.
     */
    distinct?: InventoryLedgerScalarFieldEnum | InventoryLedgerScalarFieldEnum[]
  }

  /**
   * InventoryLedger findFirstOrThrow
   */
  export type InventoryLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLedger to fetch.
     */
    where?: InventoryLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLedgers to fetch.
     */
    orderBy?: InventoryLedgerOrderByWithRelationInput | InventoryLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLedgers.
     */
    cursor?: InventoryLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLedgers.
     */
    distinct?: InventoryLedgerScalarFieldEnum | InventoryLedgerScalarFieldEnum[]
  }

  /**
   * InventoryLedger findMany
   */
  export type InventoryLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLedgers to fetch.
     */
    where?: InventoryLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLedgers to fetch.
     */
    orderBy?: InventoryLedgerOrderByWithRelationInput | InventoryLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryLedgers.
     */
    cursor?: InventoryLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLedgers.
     */
    skip?: number
    distinct?: InventoryLedgerScalarFieldEnum | InventoryLedgerScalarFieldEnum[]
  }

  /**
   * InventoryLedger create
   */
  export type InventoryLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryLedger.
     */
    data: XOR<InventoryLedgerCreateInput, InventoryLedgerUncheckedCreateInput>
  }

  /**
   * InventoryLedger createMany
   */
  export type InventoryLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryLedgers.
     */
    data: InventoryLedgerCreateManyInput | InventoryLedgerCreateManyInput[]
  }

  /**
   * InventoryLedger createManyAndReturn
   */
  export type InventoryLedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryLedgers.
     */
    data: InventoryLedgerCreateManyInput | InventoryLedgerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryLedger update
   */
  export type InventoryLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryLedger.
     */
    data: XOR<InventoryLedgerUpdateInput, InventoryLedgerUncheckedUpdateInput>
    /**
     * Choose, which InventoryLedger to update.
     */
    where: InventoryLedgerWhereUniqueInput
  }

  /**
   * InventoryLedger updateMany
   */
  export type InventoryLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryLedgers.
     */
    data: XOR<InventoryLedgerUpdateManyMutationInput, InventoryLedgerUncheckedUpdateManyInput>
    /**
     * Filter which InventoryLedgers to update
     */
    where?: InventoryLedgerWhereInput
  }

  /**
   * InventoryLedger upsert
   */
  export type InventoryLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryLedger to update in case it exists.
     */
    where: InventoryLedgerWhereUniqueInput
    /**
     * In case the InventoryLedger found by the `where` argument doesn't exist, create a new InventoryLedger with this data.
     */
    create: XOR<InventoryLedgerCreateInput, InventoryLedgerUncheckedCreateInput>
    /**
     * In case the InventoryLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryLedgerUpdateInput, InventoryLedgerUncheckedUpdateInput>
  }

  /**
   * InventoryLedger delete
   */
  export type InventoryLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
    /**
     * Filter which InventoryLedger to delete.
     */
    where: InventoryLedgerWhereUniqueInput
  }

  /**
   * InventoryLedger deleteMany
   */
  export type InventoryLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLedgers to delete
     */
    where?: InventoryLedgerWhereInput
  }

  /**
   * InventoryLedger without action
   */
  export type InventoryLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLedger
     */
    select?: InventoryLedgerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLedgerInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    entity_id: number | null
    user_id: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    entity_id: number | null
    user_id: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    entity: string | null
    entity_id: number | null
    action: string | null
    old_value: string | null
    new_value: string | null
    user_id: number | null
    timestamp: Date | null
    ip: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    entity: string | null
    entity_id: number | null
    action: string | null
    old_value: string | null
    new_value: string | null
    user_id: number | null
    timestamp: Date | null
    ip: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    entity: number
    entity_id: number
    action: number
    old_value: number
    new_value: number
    user_id: number
    timestamp: number
    ip: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    entity_id?: true
    user_id?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    entity_id?: true
    user_id?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    entity?: true
    entity_id?: true
    action?: true
    old_value?: true
    new_value?: true
    user_id?: true
    timestamp?: true
    ip?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    entity?: true
    entity_id?: true
    action?: true
    old_value?: true
    new_value?: true
    user_id?: true
    timestamp?: true
    ip?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    entity?: true
    entity_id?: true
    action?: true
    old_value?: true
    new_value?: true
    user_id?: true
    timestamp?: true
    ip?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    entity: string
    entity_id: number
    action: string
    old_value: string | null
    new_value: string | null
    user_id: number
    timestamp: Date
    ip: string | null
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entity_id?: boolean
    action?: boolean
    old_value?: boolean
    new_value?: boolean
    user_id?: boolean
    timestamp?: boolean
    ip?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entity_id?: boolean
    action?: boolean
    old_value?: boolean
    new_value?: boolean
    user_id?: boolean
    timestamp?: boolean
    ip?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    entity?: boolean
    entity_id?: boolean
    action?: boolean
    old_value?: boolean
    new_value?: boolean
    user_id?: boolean
    timestamp?: boolean
    ip?: boolean
  }


  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entity: string
      entity_id: number
      action: string
      old_value: string | null
      new_value: string | null
      user_id: number
      timestamp: Date
      ip: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entity_id: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly old_value: FieldRef<"AuditLog", 'String'>
    readonly new_value: FieldRef<"AuditLog", 'String'>
    readonly user_id: FieldRef<"AuditLog", 'Int'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
    readonly ip: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
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

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    manager_id: 'manager_id',
    type: 'type',
    active: 'active',
    color: 'color'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const InventoryBalanceScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    warehouse_id: 'warehouse_id',
    lot: 'lot',
    qty_on_hand: 'qty_on_hand',
    avg_cost: 'avg_cost',
    value_total: 'value_total',
    updated_at: 'updated_at'
  };

  export type InventoryBalanceScalarFieldEnum = (typeof InventoryBalanceScalarFieldEnum)[keyof typeof InventoryBalanceScalarFieldEnum]


  export const InventoryDocumentScalarFieldEnum: {
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

  export type InventoryDocumentScalarFieldEnum = (typeof InventoryDocumentScalarFieldEnum)[keyof typeof InventoryDocumentScalarFieldEnum]


  export const InventoryDocumentLineScalarFieldEnum: {
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

  export type InventoryDocumentLineScalarFieldEnum = (typeof InventoryDocumentLineScalarFieldEnum)[keyof typeof InventoryDocumentLineScalarFieldEnum]


  export const InventoryLedgerScalarFieldEnum: {
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

  export type InventoryLedgerScalarFieldEnum = (typeof InventoryLedgerScalarFieldEnum)[keyof typeof InventoryLedgerScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
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

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    type?: StringFilter<"Product"> | string
    presentation_g?: IntFilter<"Product"> | number
    packaging_unit?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    brand?: StringNullableFilter<"Product"> | string | null
    active?: BoolFilter<"Product"> | boolean
    cost_standard?: FloatNullableFilter<"Product"> | number | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    balances?: InventoryBalanceListRelationFilter
    ledger?: InventoryLedgerListRelationFilter
    doc_lines?: InventoryDocumentLineListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    type?: SortOrder
    presentation_g?: SortOrder
    packaging_unit?: SortOrder
    unit?: SortOrder
    category?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    active?: SortOrder
    cost_standard?: SortOrderInput | SortOrder
    created_at?: SortOrder
    balances?: InventoryBalanceOrderByRelationAggregateInput
    ledger?: InventoryLedgerOrderByRelationAggregateInput
    doc_lines?: InventoryDocumentLineOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    type?: StringFilter<"Product"> | string
    presentation_g?: IntFilter<"Product"> | number
    packaging_unit?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    brand?: StringNullableFilter<"Product"> | string | null
    active?: BoolFilter<"Product"> | boolean
    cost_standard?: FloatNullableFilter<"Product"> | number | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    balances?: InventoryBalanceListRelationFilter
    ledger?: InventoryLedgerListRelationFilter
    doc_lines?: InventoryDocumentLineListRelationFilter
  }, "id" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    type?: SortOrder
    presentation_g?: SortOrder
    packaging_unit?: SortOrder
    unit?: SortOrder
    category?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    active?: SortOrder
    cost_standard?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    sku?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    type?: StringWithAggregatesFilter<"Product"> | string
    presentation_g?: IntWithAggregatesFilter<"Product"> | number
    packaging_unit?: StringWithAggregatesFilter<"Product"> | string
    unit?: StringWithAggregatesFilter<"Product"> | string
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    active?: BoolWithAggregatesFilter<"Product"> | boolean
    cost_standard?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    location?: StringNullableFilter<"Warehouse"> | string | null
    manager_id?: IntNullableFilter<"Warehouse"> | number | null
    type?: StringFilter<"Warehouse"> | string
    active?: BoolFilter<"Warehouse"> | boolean
    color?: StringFilter<"Warehouse"> | string
    balances?: InventoryBalanceListRelationFilter
    docs_from?: InventoryDocumentListRelationFilter
    docs_to?: InventoryDocumentListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    manager_id?: SortOrderInput | SortOrder
    type?: SortOrder
    active?: SortOrder
    color?: SortOrder
    balances?: InventoryBalanceOrderByRelationAggregateInput
    docs_from?: InventoryDocumentOrderByRelationAggregateInput
    docs_to?: InventoryDocumentOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    location?: StringNullableFilter<"Warehouse"> | string | null
    manager_id?: IntNullableFilter<"Warehouse"> | number | null
    type?: StringFilter<"Warehouse"> | string
    active?: BoolFilter<"Warehouse"> | boolean
    color?: StringFilter<"Warehouse"> | string
    balances?: InventoryBalanceListRelationFilter
    docs_from?: InventoryDocumentListRelationFilter
    docs_to?: InventoryDocumentListRelationFilter
  }, "id">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    manager_id?: SortOrderInput | SortOrder
    type?: SortOrder
    active?: SortOrder
    color?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warehouse"> | number
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    location?: StringNullableWithAggregatesFilter<"Warehouse"> | string | null
    manager_id?: IntNullableWithAggregatesFilter<"Warehouse"> | number | null
    type?: StringWithAggregatesFilter<"Warehouse"> | string
    active?: BoolWithAggregatesFilter<"Warehouse"> | boolean
    color?: StringWithAggregatesFilter<"Warehouse"> | string
  }

  export type InventoryBalanceWhereInput = {
    AND?: InventoryBalanceWhereInput | InventoryBalanceWhereInput[]
    OR?: InventoryBalanceWhereInput[]
    NOT?: InventoryBalanceWhereInput | InventoryBalanceWhereInput[]
    id?: IntFilter<"InventoryBalance"> | number
    product_id?: IntFilter<"InventoryBalance"> | number
    warehouse_id?: IntFilter<"InventoryBalance"> | number
    lot?: StringFilter<"InventoryBalance"> | string
    qty_on_hand?: FloatFilter<"InventoryBalance"> | number
    avg_cost?: FloatFilter<"InventoryBalance"> | number
    value_total?: FloatFilter<"InventoryBalance"> | number
    updated_at?: DateTimeFilter<"InventoryBalance"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
  }

  export type InventoryBalanceOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    lot?: SortOrder
    qty_on_hand?: SortOrder
    avg_cost?: SortOrder
    value_total?: SortOrder
    updated_at?: SortOrder
    product?: ProductOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
  }

  export type InventoryBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    product_id_warehouse_id_lot?: InventoryBalanceProduct_idWarehouse_idLotCompoundUniqueInput
    AND?: InventoryBalanceWhereInput | InventoryBalanceWhereInput[]
    OR?: InventoryBalanceWhereInput[]
    NOT?: InventoryBalanceWhereInput | InventoryBalanceWhereInput[]
    product_id?: IntFilter<"InventoryBalance"> | number
    warehouse_id?: IntFilter<"InventoryBalance"> | number
    lot?: StringFilter<"InventoryBalance"> | string
    qty_on_hand?: FloatFilter<"InventoryBalance"> | number
    avg_cost?: FloatFilter<"InventoryBalance"> | number
    value_total?: FloatFilter<"InventoryBalance"> | number
    updated_at?: DateTimeFilter<"InventoryBalance"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    warehouse?: XOR<WarehouseRelationFilter, WarehouseWhereInput>
  }, "id" | "product_id_warehouse_id_lot">

  export type InventoryBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    lot?: SortOrder
    qty_on_hand?: SortOrder
    avg_cost?: SortOrder
    value_total?: SortOrder
    updated_at?: SortOrder
    _count?: InventoryBalanceCountOrderByAggregateInput
    _avg?: InventoryBalanceAvgOrderByAggregateInput
    _max?: InventoryBalanceMaxOrderByAggregateInput
    _min?: InventoryBalanceMinOrderByAggregateInput
    _sum?: InventoryBalanceSumOrderByAggregateInput
  }

  export type InventoryBalanceScalarWhereWithAggregatesInput = {
    AND?: InventoryBalanceScalarWhereWithAggregatesInput | InventoryBalanceScalarWhereWithAggregatesInput[]
    OR?: InventoryBalanceScalarWhereWithAggregatesInput[]
    NOT?: InventoryBalanceScalarWhereWithAggregatesInput | InventoryBalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryBalance"> | number
    product_id?: IntWithAggregatesFilter<"InventoryBalance"> | number
    warehouse_id?: IntWithAggregatesFilter<"InventoryBalance"> | number
    lot?: StringWithAggregatesFilter<"InventoryBalance"> | string
    qty_on_hand?: FloatWithAggregatesFilter<"InventoryBalance"> | number
    avg_cost?: FloatWithAggregatesFilter<"InventoryBalance"> | number
    value_total?: FloatWithAggregatesFilter<"InventoryBalance"> | number
    updated_at?: DateTimeWithAggregatesFilter<"InventoryBalance"> | Date | string
  }

  export type InventoryDocumentWhereInput = {
    AND?: InventoryDocumentWhereInput | InventoryDocumentWhereInput[]
    OR?: InventoryDocumentWhereInput[]
    NOT?: InventoryDocumentWhereInput | InventoryDocumentWhereInput[]
    id?: IntFilter<"InventoryDocument"> | number
    doc_type?: StringFilter<"InventoryDocument"> | string
    document_number?: StringFilter<"InventoryDocument"> | string
    status?: StringFilter<"InventoryDocument"> | string
    warehouse_from_id?: IntNullableFilter<"InventoryDocument"> | number | null
    warehouse_to_id?: IntNullableFilter<"InventoryDocument"> | number | null
    third_party_id?: IntNullableFilter<"InventoryDocument"> | number | null
    date?: DateTimeFilter<"InventoryDocument"> | Date | string
    notes?: StringNullableFilter<"InventoryDocument"> | string | null
    created_by?: IntFilter<"InventoryDocument"> | number
    approved_by?: IntNullableFilter<"InventoryDocument"> | number | null
    attachment_url?: StringNullableFilter<"InventoryDocument"> | string | null
    warehouse_from?: XOR<WarehouseNullableRelationFilter, WarehouseWhereInput> | null
    warehouse_to?: XOR<WarehouseNullableRelationFilter, WarehouseWhereInput> | null
    lines?: InventoryDocumentLineListRelationFilter
  }

  export type InventoryDocumentOrderByWithRelationInput = {
    id?: SortOrder
    doc_type?: SortOrder
    document_number?: SortOrder
    status?: SortOrder
    warehouse_from_id?: SortOrderInput | SortOrder
    warehouse_to_id?: SortOrderInput | SortOrder
    third_party_id?: SortOrderInput | SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_by?: SortOrder
    approved_by?: SortOrderInput | SortOrder
    attachment_url?: SortOrderInput | SortOrder
    warehouse_from?: WarehouseOrderByWithRelationInput
    warehouse_to?: WarehouseOrderByWithRelationInput
    lines?: InventoryDocumentLineOrderByRelationAggregateInput
  }

  export type InventoryDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document_number?: string
    AND?: InventoryDocumentWhereInput | InventoryDocumentWhereInput[]
    OR?: InventoryDocumentWhereInput[]
    NOT?: InventoryDocumentWhereInput | InventoryDocumentWhereInput[]
    doc_type?: StringFilter<"InventoryDocument"> | string
    status?: StringFilter<"InventoryDocument"> | string
    warehouse_from_id?: IntNullableFilter<"InventoryDocument"> | number | null
    warehouse_to_id?: IntNullableFilter<"InventoryDocument"> | number | null
    third_party_id?: IntNullableFilter<"InventoryDocument"> | number | null
    date?: DateTimeFilter<"InventoryDocument"> | Date | string
    notes?: StringNullableFilter<"InventoryDocument"> | string | null
    created_by?: IntFilter<"InventoryDocument"> | number
    approved_by?: IntNullableFilter<"InventoryDocument"> | number | null
    attachment_url?: StringNullableFilter<"InventoryDocument"> | string | null
    warehouse_from?: XOR<WarehouseNullableRelationFilter, WarehouseWhereInput> | null
    warehouse_to?: XOR<WarehouseNullableRelationFilter, WarehouseWhereInput> | null
    lines?: InventoryDocumentLineListRelationFilter
  }, "id" | "document_number">

  export type InventoryDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    doc_type?: SortOrder
    document_number?: SortOrder
    status?: SortOrder
    warehouse_from_id?: SortOrderInput | SortOrder
    warehouse_to_id?: SortOrderInput | SortOrder
    third_party_id?: SortOrderInput | SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_by?: SortOrder
    approved_by?: SortOrderInput | SortOrder
    attachment_url?: SortOrderInput | SortOrder
    _count?: InventoryDocumentCountOrderByAggregateInput
    _avg?: InventoryDocumentAvgOrderByAggregateInput
    _max?: InventoryDocumentMaxOrderByAggregateInput
    _min?: InventoryDocumentMinOrderByAggregateInput
    _sum?: InventoryDocumentSumOrderByAggregateInput
  }

  export type InventoryDocumentScalarWhereWithAggregatesInput = {
    AND?: InventoryDocumentScalarWhereWithAggregatesInput | InventoryDocumentScalarWhereWithAggregatesInput[]
    OR?: InventoryDocumentScalarWhereWithAggregatesInput[]
    NOT?: InventoryDocumentScalarWhereWithAggregatesInput | InventoryDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryDocument"> | number
    doc_type?: StringWithAggregatesFilter<"InventoryDocument"> | string
    document_number?: StringWithAggregatesFilter<"InventoryDocument"> | string
    status?: StringWithAggregatesFilter<"InventoryDocument"> | string
    warehouse_from_id?: IntNullableWithAggregatesFilter<"InventoryDocument"> | number | null
    warehouse_to_id?: IntNullableWithAggregatesFilter<"InventoryDocument"> | number | null
    third_party_id?: IntNullableWithAggregatesFilter<"InventoryDocument"> | number | null
    date?: DateTimeWithAggregatesFilter<"InventoryDocument"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"InventoryDocument"> | string | null
    created_by?: IntWithAggregatesFilter<"InventoryDocument"> | number
    approved_by?: IntNullableWithAggregatesFilter<"InventoryDocument"> | number | null
    attachment_url?: StringNullableWithAggregatesFilter<"InventoryDocument"> | string | null
  }

  export type InventoryDocumentLineWhereInput = {
    AND?: InventoryDocumentLineWhereInput | InventoryDocumentLineWhereInput[]
    OR?: InventoryDocumentLineWhereInput[]
    NOT?: InventoryDocumentLineWhereInput | InventoryDocumentLineWhereInput[]
    id?: IntFilter<"InventoryDocumentLine"> | number
    document_id?: IntFilter<"InventoryDocumentLine"> | number
    product_id?: IntFilter<"InventoryDocumentLine"> | number
    qty?: FloatFilter<"InventoryDocumentLine"> | number
    unit_cost?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    total_cost?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    unit_sale?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    total_sale?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    lot?: StringNullableFilter<"InventoryDocumentLine"> | string | null
    document?: XOR<InventoryDocumentRelationFilter, InventoryDocumentWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type InventoryDocumentLineOrderByWithRelationInput = {
    id?: SortOrder
    document_id?: SortOrder
    product_id?: SortOrder
    qty?: SortOrder
    unit_cost?: SortOrderInput | SortOrder
    total_cost?: SortOrderInput | SortOrder
    unit_sale?: SortOrderInput | SortOrder
    total_sale?: SortOrderInput | SortOrder
    lot?: SortOrderInput | SortOrder
    document?: InventoryDocumentOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type InventoryDocumentLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryDocumentLineWhereInput | InventoryDocumentLineWhereInput[]
    OR?: InventoryDocumentLineWhereInput[]
    NOT?: InventoryDocumentLineWhereInput | InventoryDocumentLineWhereInput[]
    document_id?: IntFilter<"InventoryDocumentLine"> | number
    product_id?: IntFilter<"InventoryDocumentLine"> | number
    qty?: FloatFilter<"InventoryDocumentLine"> | number
    unit_cost?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    total_cost?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    unit_sale?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    total_sale?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    lot?: StringNullableFilter<"InventoryDocumentLine"> | string | null
    document?: XOR<InventoryDocumentRelationFilter, InventoryDocumentWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type InventoryDocumentLineOrderByWithAggregationInput = {
    id?: SortOrder
    document_id?: SortOrder
    product_id?: SortOrder
    qty?: SortOrder
    unit_cost?: SortOrderInput | SortOrder
    total_cost?: SortOrderInput | SortOrder
    unit_sale?: SortOrderInput | SortOrder
    total_sale?: SortOrderInput | SortOrder
    lot?: SortOrderInput | SortOrder
    _count?: InventoryDocumentLineCountOrderByAggregateInput
    _avg?: InventoryDocumentLineAvgOrderByAggregateInput
    _max?: InventoryDocumentLineMaxOrderByAggregateInput
    _min?: InventoryDocumentLineMinOrderByAggregateInput
    _sum?: InventoryDocumentLineSumOrderByAggregateInput
  }

  export type InventoryDocumentLineScalarWhereWithAggregatesInput = {
    AND?: InventoryDocumentLineScalarWhereWithAggregatesInput | InventoryDocumentLineScalarWhereWithAggregatesInput[]
    OR?: InventoryDocumentLineScalarWhereWithAggregatesInput[]
    NOT?: InventoryDocumentLineScalarWhereWithAggregatesInput | InventoryDocumentLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryDocumentLine"> | number
    document_id?: IntWithAggregatesFilter<"InventoryDocumentLine"> | number
    product_id?: IntWithAggregatesFilter<"InventoryDocumentLine"> | number
    qty?: FloatWithAggregatesFilter<"InventoryDocumentLine"> | number
    unit_cost?: FloatNullableWithAggregatesFilter<"InventoryDocumentLine"> | number | null
    total_cost?: FloatNullableWithAggregatesFilter<"InventoryDocumentLine"> | number | null
    unit_sale?: FloatNullableWithAggregatesFilter<"InventoryDocumentLine"> | number | null
    total_sale?: FloatNullableWithAggregatesFilter<"InventoryDocumentLine"> | number | null
    lot?: StringNullableWithAggregatesFilter<"InventoryDocumentLine"> | string | null
  }

  export type InventoryLedgerWhereInput = {
    AND?: InventoryLedgerWhereInput | InventoryLedgerWhereInput[]
    OR?: InventoryLedgerWhereInput[]
    NOT?: InventoryLedgerWhereInput | InventoryLedgerWhereInput[]
    id?: IntFilter<"InventoryLedger"> | number
    timestamp?: DateTimeFilter<"InventoryLedger"> | Date | string
    product_id?: IntFilter<"InventoryLedger"> | number
    warehouse_id?: IntFilter<"InventoryLedger"> | number
    movement_type?: StringFilter<"InventoryLedger"> | string
    doc_id?: IntFilter<"InventoryLedger"> | number
    qty_in?: FloatFilter<"InventoryLedger"> | number
    qty_out?: FloatFilter<"InventoryLedger"> | number
    balance_qty?: FloatFilter<"InventoryLedger"> | number
    unit_cost?: FloatFilter<"InventoryLedger"> | number
    avg_cost_after?: FloatFilter<"InventoryLedger"> | number
    value_after?: FloatFilter<"InventoryLedger"> | number
    lot?: StringFilter<"InventoryLedger"> | string
    created_by?: IntFilter<"InventoryLedger"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type InventoryLedgerOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    movement_type?: SortOrder
    doc_id?: SortOrder
    qty_in?: SortOrder
    qty_out?: SortOrder
    balance_qty?: SortOrder
    unit_cost?: SortOrder
    avg_cost_after?: SortOrder
    value_after?: SortOrder
    lot?: SortOrder
    created_by?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type InventoryLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryLedgerWhereInput | InventoryLedgerWhereInput[]
    OR?: InventoryLedgerWhereInput[]
    NOT?: InventoryLedgerWhereInput | InventoryLedgerWhereInput[]
    timestamp?: DateTimeFilter<"InventoryLedger"> | Date | string
    product_id?: IntFilter<"InventoryLedger"> | number
    warehouse_id?: IntFilter<"InventoryLedger"> | number
    movement_type?: StringFilter<"InventoryLedger"> | string
    doc_id?: IntFilter<"InventoryLedger"> | number
    qty_in?: FloatFilter<"InventoryLedger"> | number
    qty_out?: FloatFilter<"InventoryLedger"> | number
    balance_qty?: FloatFilter<"InventoryLedger"> | number
    unit_cost?: FloatFilter<"InventoryLedger"> | number
    avg_cost_after?: FloatFilter<"InventoryLedger"> | number
    value_after?: FloatFilter<"InventoryLedger"> | number
    lot?: StringFilter<"InventoryLedger"> | string
    created_by?: IntFilter<"InventoryLedger"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type InventoryLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    movement_type?: SortOrder
    doc_id?: SortOrder
    qty_in?: SortOrder
    qty_out?: SortOrder
    balance_qty?: SortOrder
    unit_cost?: SortOrder
    avg_cost_after?: SortOrder
    value_after?: SortOrder
    lot?: SortOrder
    created_by?: SortOrder
    _count?: InventoryLedgerCountOrderByAggregateInput
    _avg?: InventoryLedgerAvgOrderByAggregateInput
    _max?: InventoryLedgerMaxOrderByAggregateInput
    _min?: InventoryLedgerMinOrderByAggregateInput
    _sum?: InventoryLedgerSumOrderByAggregateInput
  }

  export type InventoryLedgerScalarWhereWithAggregatesInput = {
    AND?: InventoryLedgerScalarWhereWithAggregatesInput | InventoryLedgerScalarWhereWithAggregatesInput[]
    OR?: InventoryLedgerScalarWhereWithAggregatesInput[]
    NOT?: InventoryLedgerScalarWhereWithAggregatesInput | InventoryLedgerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryLedger"> | number
    timestamp?: DateTimeWithAggregatesFilter<"InventoryLedger"> | Date | string
    product_id?: IntWithAggregatesFilter<"InventoryLedger"> | number
    warehouse_id?: IntWithAggregatesFilter<"InventoryLedger"> | number
    movement_type?: StringWithAggregatesFilter<"InventoryLedger"> | string
    doc_id?: IntWithAggregatesFilter<"InventoryLedger"> | number
    qty_in?: FloatWithAggregatesFilter<"InventoryLedger"> | number
    qty_out?: FloatWithAggregatesFilter<"InventoryLedger"> | number
    balance_qty?: FloatWithAggregatesFilter<"InventoryLedger"> | number
    unit_cost?: FloatWithAggregatesFilter<"InventoryLedger"> | number
    avg_cost_after?: FloatWithAggregatesFilter<"InventoryLedger"> | number
    value_after?: FloatWithAggregatesFilter<"InventoryLedger"> | number
    lot?: StringWithAggregatesFilter<"InventoryLedger"> | string
    created_by?: IntWithAggregatesFilter<"InventoryLedger"> | number
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    entity?: StringFilter<"AuditLog"> | string
    entity_id?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    old_value?: StringNullableFilter<"AuditLog"> | string | null
    new_value?: StringNullableFilter<"AuditLog"> | string | null
    user_id?: IntFilter<"AuditLog"> | number
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    ip?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    old_value?: SortOrderInput | SortOrder
    new_value?: SortOrderInput | SortOrder
    user_id?: SortOrder
    timestamp?: SortOrder
    ip?: SortOrderInput | SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    entity?: StringFilter<"AuditLog"> | string
    entity_id?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    old_value?: StringNullableFilter<"AuditLog"> | string | null
    new_value?: StringNullableFilter<"AuditLog"> | string | null
    user_id?: IntFilter<"AuditLog"> | number
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    ip?: StringNullableFilter<"AuditLog"> | string | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    old_value?: SortOrderInput | SortOrder
    new_value?: SortOrderInput | SortOrder
    user_id?: SortOrder
    timestamp?: SortOrder
    ip?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entity_id?: IntWithAggregatesFilter<"AuditLog"> | number
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    old_value?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    new_value?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    user_id?: IntWithAggregatesFilter<"AuditLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    ip?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: string
    name: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: string
    name: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
    balances?: InventoryBalanceCreateNestedManyWithoutProductInput
    ledger?: InventoryLedgerCreateNestedManyWithoutProductInput
    doc_lines?: InventoryDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
    balances?: InventoryBalanceUncheckedCreateNestedManyWithoutProductInput
    ledger?: InventoryLedgerUncheckedCreateNestedManyWithoutProductInput
    doc_lines?: InventoryDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: InventoryBalanceUpdateManyWithoutProductNestedInput
    ledger?: InventoryLedgerUpdateManyWithoutProductNestedInput
    doc_lines?: InventoryDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: InventoryBalanceUncheckedUpdateManyWithoutProductNestedInput
    ledger?: InventoryLedgerUncheckedUpdateManyWithoutProductNestedInput
    doc_lines?: InventoryDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WarehouseCreateInput = {
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
    balances?: InventoryBalanceCreateNestedManyWithoutWarehouseInput
    docs_from?: InventoryDocumentCreateNestedManyWithoutWarehouse_fromInput
    docs_to?: InventoryDocumentCreateNestedManyWithoutWarehouse_toInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: number
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
    balances?: InventoryBalanceUncheckedCreateNestedManyWithoutWarehouseInput
    docs_from?: InventoryDocumentUncheckedCreateNestedManyWithoutWarehouse_fromInput
    docs_to?: InventoryDocumentUncheckedCreateNestedManyWithoutWarehouse_toInput
  }

  export type WarehouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    balances?: InventoryBalanceUpdateManyWithoutWarehouseNestedInput
    docs_from?: InventoryDocumentUpdateManyWithoutWarehouse_fromNestedInput
    docs_to?: InventoryDocumentUpdateManyWithoutWarehouse_toNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    balances?: InventoryBalanceUncheckedUpdateManyWithoutWarehouseNestedInput
    docs_from?: InventoryDocumentUncheckedUpdateManyWithoutWarehouse_fromNestedInput
    docs_to?: InventoryDocumentUncheckedUpdateManyWithoutWarehouse_toNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: number
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
  }

  export type WarehouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryBalanceCreateInput = {
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutBalancesInput
    warehouse: WarehouseCreateNestedOneWithoutBalancesInput
  }

  export type InventoryBalanceUncheckedCreateInput = {
    id?: number
    product_id: number
    warehouse_id: number
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
  }

  export type InventoryBalanceUpdateInput = {
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBalancesNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type InventoryBalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryBalanceCreateManyInput = {
    id?: number
    product_id: number
    warehouse_id: number
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
  }

  export type InventoryBalanceUpdateManyMutationInput = {
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryBalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryDocumentCreateInput = {
    doc_type: string
    document_number: string
    status: string
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
    warehouse_from?: WarehouseCreateNestedOneWithoutDocs_fromInput
    warehouse_to?: WarehouseCreateNestedOneWithoutDocs_toInput
    lines?: InventoryDocumentLineCreateNestedManyWithoutDocumentInput
  }

  export type InventoryDocumentUncheckedCreateInput = {
    id?: number
    doc_type: string
    document_number: string
    status: string
    warehouse_from_id?: number | null
    warehouse_to_id?: number | null
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
    lines?: InventoryDocumentLineUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type InventoryDocumentUpdateInput = {
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    warehouse_from?: WarehouseUpdateOneWithoutDocs_fromNestedInput
    warehouse_to?: WarehouseUpdateOneWithoutDocs_toNestedInput
    lines?: InventoryDocumentLineUpdateManyWithoutDocumentNestedInput
  }

  export type InventoryDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    warehouse_from_id?: NullableIntFieldUpdateOperationsInput | number | null
    warehouse_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    lines?: InventoryDocumentLineUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type InventoryDocumentCreateManyInput = {
    id?: number
    doc_type: string
    document_number: string
    status: string
    warehouse_from_id?: number | null
    warehouse_to_id?: number | null
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
  }

  export type InventoryDocumentUpdateManyMutationInput = {
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    warehouse_from_id?: NullableIntFieldUpdateOperationsInput | number | null
    warehouse_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryDocumentLineCreateInput = {
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
    document: InventoryDocumentCreateNestedOneWithoutLinesInput
    product: ProductCreateNestedOneWithoutDoc_linesInput
  }

  export type InventoryDocumentLineUncheckedCreateInput = {
    id?: number
    document_id: number
    product_id: number
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
  }

  export type InventoryDocumentLineUpdateInput = {
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
    document?: InventoryDocumentUpdateOneRequiredWithoutLinesNestedInput
    product?: ProductUpdateOneRequiredWithoutDoc_linesNestedInput
  }

  export type InventoryDocumentLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryDocumentLineCreateManyInput = {
    id?: number
    document_id: number
    product_id: number
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
  }

  export type InventoryDocumentLineUpdateManyMutationInput = {
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryDocumentLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryLedgerCreateInput = {
    timestamp?: Date | string
    warehouse_id: number
    movement_type: string
    doc_id: number
    qty_in?: number
    qty_out?: number
    balance_qty: number
    unit_cost: number
    avg_cost_after: number
    value_after: number
    lot?: string
    created_by: number
    product: ProductCreateNestedOneWithoutLedgerInput
  }

  export type InventoryLedgerUncheckedCreateInput = {
    id?: number
    timestamp?: Date | string
    product_id: number
    warehouse_id: number
    movement_type: string
    doc_id: number
    qty_in?: number
    qty_out?: number
    balance_qty: number
    unit_cost: number
    avg_cost_after: number
    value_after: number
    lot?: string
    created_by: number
  }

  export type InventoryLedgerUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse_id?: IntFieldUpdateOperationsInput | number
    movement_type?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    qty_in?: FloatFieldUpdateOperationsInput | number
    qty_out?: FloatFieldUpdateOperationsInput | number
    balance_qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: FloatFieldUpdateOperationsInput | number
    avg_cost_after?: FloatFieldUpdateOperationsInput | number
    value_after?: FloatFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutLedgerNestedInput
  }

  export type InventoryLedgerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    product_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    movement_type?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    qty_in?: FloatFieldUpdateOperationsInput | number
    qty_out?: FloatFieldUpdateOperationsInput | number
    balance_qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: FloatFieldUpdateOperationsInput | number
    avg_cost_after?: FloatFieldUpdateOperationsInput | number
    value_after?: FloatFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryLedgerCreateManyInput = {
    id?: number
    timestamp?: Date | string
    product_id: number
    warehouse_id: number
    movement_type: string
    doc_id: number
    qty_in?: number
    qty_out?: number
    balance_qty: number
    unit_cost: number
    avg_cost_after: number
    value_after: number
    lot?: string
    created_by: number
  }

  export type InventoryLedgerUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse_id?: IntFieldUpdateOperationsInput | number
    movement_type?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    qty_in?: FloatFieldUpdateOperationsInput | number
    qty_out?: FloatFieldUpdateOperationsInput | number
    balance_qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: FloatFieldUpdateOperationsInput | number
    avg_cost_after?: FloatFieldUpdateOperationsInput | number
    value_after?: FloatFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryLedgerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    product_id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    movement_type?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    qty_in?: FloatFieldUpdateOperationsInput | number
    qty_out?: FloatFieldUpdateOperationsInput | number
    balance_qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: FloatFieldUpdateOperationsInput | number
    avg_cost_after?: FloatFieldUpdateOperationsInput | number
    value_after?: FloatFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
  }

  export type AuditLogCreateInput = {
    entity: string
    entity_id: number
    action: string
    old_value?: string | null
    new_value?: string | null
    user_id: number
    timestamp?: Date | string
    ip?: string | null
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    entity: string
    entity_id: number
    action: string
    old_value?: string | null
    new_value?: string | null
    user_id: number
    timestamp?: Date | string
    ip?: string | null
  }

  export type AuditLogUpdateInput = {
    entity?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: number
    entity: string
    entity_id: number
    action: string
    old_value?: string | null
    new_value?: string | null
    user_id: number
    timestamp?: Date | string
    ip?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    entity?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    old_value?: NullableStringFieldUpdateOperationsInput | string | null
    new_value?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InventoryBalanceListRelationFilter = {
    every?: InventoryBalanceWhereInput
    some?: InventoryBalanceWhereInput
    none?: InventoryBalanceWhereInput
  }

  export type InventoryLedgerListRelationFilter = {
    every?: InventoryLedgerWhereInput
    some?: InventoryLedgerWhereInput
    none?: InventoryLedgerWhereInput
  }

  export type InventoryDocumentLineListRelationFilter = {
    every?: InventoryDocumentLineWhereInput
    some?: InventoryDocumentLineWhereInput
    none?: InventoryDocumentLineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventoryBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryDocumentLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    type?: SortOrder
    presentation_g?: SortOrder
    packaging_unit?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    active?: SortOrder
    cost_standard?: SortOrder
    created_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    presentation_g?: SortOrder
    cost_standard?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    type?: SortOrder
    presentation_g?: SortOrder
    packaging_unit?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    active?: SortOrder
    cost_standard?: SortOrder
    created_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    type?: SortOrder
    presentation_g?: SortOrder
    packaging_unit?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    brand?: SortOrder
    active?: SortOrder
    cost_standard?: SortOrder
    created_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    presentation_g?: SortOrder
    cost_standard?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InventoryDocumentListRelationFilter = {
    every?: InventoryDocumentWhereInput
    some?: InventoryDocumentWhereInput
    none?: InventoryDocumentWhereInput
  }

  export type InventoryDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    manager_id?: SortOrder
    type?: SortOrder
    active?: SortOrder
    color?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    manager_id?: SortOrder
    type?: SortOrder
    active?: SortOrder
    color?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    manager_id?: SortOrder
    type?: SortOrder
    active?: SortOrder
    color?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    id?: SortOrder
    manager_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type WarehouseRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type InventoryBalanceProduct_idWarehouse_idLotCompoundUniqueInput = {
    product_id: number
    warehouse_id: number
    lot: string
  }

  export type InventoryBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    lot?: SortOrder
    qty_on_hand?: SortOrder
    avg_cost?: SortOrder
    value_total?: SortOrder
    updated_at?: SortOrder
  }

  export type InventoryBalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    qty_on_hand?: SortOrder
    avg_cost?: SortOrder
    value_total?: SortOrder
  }

  export type InventoryBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    lot?: SortOrder
    qty_on_hand?: SortOrder
    avg_cost?: SortOrder
    value_total?: SortOrder
    updated_at?: SortOrder
  }

  export type InventoryBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    lot?: SortOrder
    qty_on_hand?: SortOrder
    avg_cost?: SortOrder
    value_total?: SortOrder
    updated_at?: SortOrder
  }

  export type InventoryBalanceSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    qty_on_hand?: SortOrder
    avg_cost?: SortOrder
    value_total?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type WarehouseNullableRelationFilter = {
    is?: WarehouseWhereInput | null
    isNot?: WarehouseWhereInput | null
  }

  export type InventoryDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    document_number?: SortOrder
    status?: SortOrder
    warehouse_from_id?: SortOrder
    warehouse_to_id?: SortOrder
    third_party_id?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
    attachment_url?: SortOrder
  }

  export type InventoryDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    warehouse_from_id?: SortOrder
    warehouse_to_id?: SortOrder
    third_party_id?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
  }

  export type InventoryDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    document_number?: SortOrder
    status?: SortOrder
    warehouse_from_id?: SortOrder
    warehouse_to_id?: SortOrder
    third_party_id?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
    attachment_url?: SortOrder
  }

  export type InventoryDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    doc_type?: SortOrder
    document_number?: SortOrder
    status?: SortOrder
    warehouse_from_id?: SortOrder
    warehouse_to_id?: SortOrder
    third_party_id?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
    attachment_url?: SortOrder
  }

  export type InventoryDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    warehouse_from_id?: SortOrder
    warehouse_to_id?: SortOrder
    third_party_id?: SortOrder
    created_by?: SortOrder
    approved_by?: SortOrder
  }

  export type InventoryDocumentRelationFilter = {
    is?: InventoryDocumentWhereInput
    isNot?: InventoryDocumentWhereInput
  }

  export type InventoryDocumentLineCountOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    product_id?: SortOrder
    qty?: SortOrder
    unit_cost?: SortOrder
    total_cost?: SortOrder
    unit_sale?: SortOrder
    total_sale?: SortOrder
    lot?: SortOrder
  }

  export type InventoryDocumentLineAvgOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    product_id?: SortOrder
    qty?: SortOrder
    unit_cost?: SortOrder
    total_cost?: SortOrder
    unit_sale?: SortOrder
    total_sale?: SortOrder
  }

  export type InventoryDocumentLineMaxOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    product_id?: SortOrder
    qty?: SortOrder
    unit_cost?: SortOrder
    total_cost?: SortOrder
    unit_sale?: SortOrder
    total_sale?: SortOrder
    lot?: SortOrder
  }

  export type InventoryDocumentLineMinOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    product_id?: SortOrder
    qty?: SortOrder
    unit_cost?: SortOrder
    total_cost?: SortOrder
    unit_sale?: SortOrder
    total_sale?: SortOrder
    lot?: SortOrder
  }

  export type InventoryDocumentLineSumOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    product_id?: SortOrder
    qty?: SortOrder
    unit_cost?: SortOrder
    total_cost?: SortOrder
    unit_sale?: SortOrder
    total_sale?: SortOrder
  }

  export type InventoryLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    movement_type?: SortOrder
    doc_id?: SortOrder
    qty_in?: SortOrder
    qty_out?: SortOrder
    balance_qty?: SortOrder
    unit_cost?: SortOrder
    avg_cost_after?: SortOrder
    value_after?: SortOrder
    lot?: SortOrder
    created_by?: SortOrder
  }

  export type InventoryLedgerAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    doc_id?: SortOrder
    qty_in?: SortOrder
    qty_out?: SortOrder
    balance_qty?: SortOrder
    unit_cost?: SortOrder
    avg_cost_after?: SortOrder
    value_after?: SortOrder
    created_by?: SortOrder
  }

  export type InventoryLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    movement_type?: SortOrder
    doc_id?: SortOrder
    qty_in?: SortOrder
    qty_out?: SortOrder
    balance_qty?: SortOrder
    unit_cost?: SortOrder
    avg_cost_after?: SortOrder
    value_after?: SortOrder
    lot?: SortOrder
    created_by?: SortOrder
  }

  export type InventoryLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    movement_type?: SortOrder
    doc_id?: SortOrder
    qty_in?: SortOrder
    qty_out?: SortOrder
    balance_qty?: SortOrder
    unit_cost?: SortOrder
    avg_cost_after?: SortOrder
    value_after?: SortOrder
    lot?: SortOrder
    created_by?: SortOrder
  }

  export type InventoryLedgerSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    warehouse_id?: SortOrder
    doc_id?: SortOrder
    qty_in?: SortOrder
    qty_out?: SortOrder
    balance_qty?: SortOrder
    unit_cost?: SortOrder
    avg_cost_after?: SortOrder
    value_after?: SortOrder
    created_by?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    old_value?: SortOrder
    new_value?: SortOrder
    user_id?: SortOrder
    timestamp?: SortOrder
    ip?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    user_id?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    old_value?: SortOrder
    new_value?: SortOrder
    user_id?: SortOrder
    timestamp?: SortOrder
    ip?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entity_id?: SortOrder
    action?: SortOrder
    old_value?: SortOrder
    new_value?: SortOrder
    user_id?: SortOrder
    timestamp?: SortOrder
    ip?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryBalanceCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryBalanceCreateWithoutProductInput, InventoryBalanceUncheckedCreateWithoutProductInput> | InventoryBalanceCreateWithoutProductInput[] | InventoryBalanceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryBalanceCreateOrConnectWithoutProductInput | InventoryBalanceCreateOrConnectWithoutProductInput[]
    createMany?: InventoryBalanceCreateManyProductInputEnvelope
    connect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
  }

  export type InventoryLedgerCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryLedgerCreateWithoutProductInput, InventoryLedgerUncheckedCreateWithoutProductInput> | InventoryLedgerCreateWithoutProductInput[] | InventoryLedgerUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLedgerCreateOrConnectWithoutProductInput | InventoryLedgerCreateOrConnectWithoutProductInput[]
    createMany?: InventoryLedgerCreateManyProductInputEnvelope
    connect?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
  }

  export type InventoryDocumentLineCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryDocumentLineCreateWithoutProductInput, InventoryDocumentLineUncheckedCreateWithoutProductInput> | InventoryDocumentLineCreateWithoutProductInput[] | InventoryDocumentLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryDocumentLineCreateOrConnectWithoutProductInput | InventoryDocumentLineCreateOrConnectWithoutProductInput[]
    createMany?: InventoryDocumentLineCreateManyProductInputEnvelope
    connect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
  }

  export type InventoryBalanceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryBalanceCreateWithoutProductInput, InventoryBalanceUncheckedCreateWithoutProductInput> | InventoryBalanceCreateWithoutProductInput[] | InventoryBalanceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryBalanceCreateOrConnectWithoutProductInput | InventoryBalanceCreateOrConnectWithoutProductInput[]
    createMany?: InventoryBalanceCreateManyProductInputEnvelope
    connect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
  }

  export type InventoryLedgerUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryLedgerCreateWithoutProductInput, InventoryLedgerUncheckedCreateWithoutProductInput> | InventoryLedgerCreateWithoutProductInput[] | InventoryLedgerUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLedgerCreateOrConnectWithoutProductInput | InventoryLedgerCreateOrConnectWithoutProductInput[]
    createMany?: InventoryLedgerCreateManyProductInputEnvelope
    connect?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
  }

  export type InventoryDocumentLineUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryDocumentLineCreateWithoutProductInput, InventoryDocumentLineUncheckedCreateWithoutProductInput> | InventoryDocumentLineCreateWithoutProductInput[] | InventoryDocumentLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryDocumentLineCreateOrConnectWithoutProductInput | InventoryDocumentLineCreateOrConnectWithoutProductInput[]
    createMany?: InventoryDocumentLineCreateManyProductInputEnvelope
    connect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InventoryBalanceUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryBalanceCreateWithoutProductInput, InventoryBalanceUncheckedCreateWithoutProductInput> | InventoryBalanceCreateWithoutProductInput[] | InventoryBalanceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryBalanceCreateOrConnectWithoutProductInput | InventoryBalanceCreateOrConnectWithoutProductInput[]
    upsert?: InventoryBalanceUpsertWithWhereUniqueWithoutProductInput | InventoryBalanceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryBalanceCreateManyProductInputEnvelope
    set?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    disconnect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    delete?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    connect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    update?: InventoryBalanceUpdateWithWhereUniqueWithoutProductInput | InventoryBalanceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryBalanceUpdateManyWithWhereWithoutProductInput | InventoryBalanceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryBalanceScalarWhereInput | InventoryBalanceScalarWhereInput[]
  }

  export type InventoryLedgerUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryLedgerCreateWithoutProductInput, InventoryLedgerUncheckedCreateWithoutProductInput> | InventoryLedgerCreateWithoutProductInput[] | InventoryLedgerUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLedgerCreateOrConnectWithoutProductInput | InventoryLedgerCreateOrConnectWithoutProductInput[]
    upsert?: InventoryLedgerUpsertWithWhereUniqueWithoutProductInput | InventoryLedgerUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryLedgerCreateManyProductInputEnvelope
    set?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
    disconnect?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
    delete?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
    connect?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
    update?: InventoryLedgerUpdateWithWhereUniqueWithoutProductInput | InventoryLedgerUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryLedgerUpdateManyWithWhereWithoutProductInput | InventoryLedgerUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryLedgerScalarWhereInput | InventoryLedgerScalarWhereInput[]
  }

  export type InventoryDocumentLineUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryDocumentLineCreateWithoutProductInput, InventoryDocumentLineUncheckedCreateWithoutProductInput> | InventoryDocumentLineCreateWithoutProductInput[] | InventoryDocumentLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryDocumentLineCreateOrConnectWithoutProductInput | InventoryDocumentLineCreateOrConnectWithoutProductInput[]
    upsert?: InventoryDocumentLineUpsertWithWhereUniqueWithoutProductInput | InventoryDocumentLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryDocumentLineCreateManyProductInputEnvelope
    set?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    disconnect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    delete?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    connect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    update?: InventoryDocumentLineUpdateWithWhereUniqueWithoutProductInput | InventoryDocumentLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryDocumentLineUpdateManyWithWhereWithoutProductInput | InventoryDocumentLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryDocumentLineScalarWhereInput | InventoryDocumentLineScalarWhereInput[]
  }

  export type InventoryBalanceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryBalanceCreateWithoutProductInput, InventoryBalanceUncheckedCreateWithoutProductInput> | InventoryBalanceCreateWithoutProductInput[] | InventoryBalanceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryBalanceCreateOrConnectWithoutProductInput | InventoryBalanceCreateOrConnectWithoutProductInput[]
    upsert?: InventoryBalanceUpsertWithWhereUniqueWithoutProductInput | InventoryBalanceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryBalanceCreateManyProductInputEnvelope
    set?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    disconnect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    delete?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    connect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    update?: InventoryBalanceUpdateWithWhereUniqueWithoutProductInput | InventoryBalanceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryBalanceUpdateManyWithWhereWithoutProductInput | InventoryBalanceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryBalanceScalarWhereInput | InventoryBalanceScalarWhereInput[]
  }

  export type InventoryLedgerUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryLedgerCreateWithoutProductInput, InventoryLedgerUncheckedCreateWithoutProductInput> | InventoryLedgerCreateWithoutProductInput[] | InventoryLedgerUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryLedgerCreateOrConnectWithoutProductInput | InventoryLedgerCreateOrConnectWithoutProductInput[]
    upsert?: InventoryLedgerUpsertWithWhereUniqueWithoutProductInput | InventoryLedgerUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryLedgerCreateManyProductInputEnvelope
    set?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
    disconnect?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
    delete?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
    connect?: InventoryLedgerWhereUniqueInput | InventoryLedgerWhereUniqueInput[]
    update?: InventoryLedgerUpdateWithWhereUniqueWithoutProductInput | InventoryLedgerUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryLedgerUpdateManyWithWhereWithoutProductInput | InventoryLedgerUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryLedgerScalarWhereInput | InventoryLedgerScalarWhereInput[]
  }

  export type InventoryDocumentLineUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryDocumentLineCreateWithoutProductInput, InventoryDocumentLineUncheckedCreateWithoutProductInput> | InventoryDocumentLineCreateWithoutProductInput[] | InventoryDocumentLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryDocumentLineCreateOrConnectWithoutProductInput | InventoryDocumentLineCreateOrConnectWithoutProductInput[]
    upsert?: InventoryDocumentLineUpsertWithWhereUniqueWithoutProductInput | InventoryDocumentLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryDocumentLineCreateManyProductInputEnvelope
    set?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    disconnect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    delete?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    connect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    update?: InventoryDocumentLineUpdateWithWhereUniqueWithoutProductInput | InventoryDocumentLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryDocumentLineUpdateManyWithWhereWithoutProductInput | InventoryDocumentLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryDocumentLineScalarWhereInput | InventoryDocumentLineScalarWhereInput[]
  }

  export type InventoryBalanceCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InventoryBalanceCreateWithoutWarehouseInput, InventoryBalanceUncheckedCreateWithoutWarehouseInput> | InventoryBalanceCreateWithoutWarehouseInput[] | InventoryBalanceUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryBalanceCreateOrConnectWithoutWarehouseInput | InventoryBalanceCreateOrConnectWithoutWarehouseInput[]
    createMany?: InventoryBalanceCreateManyWarehouseInputEnvelope
    connect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
  }

  export type InventoryDocumentCreateNestedManyWithoutWarehouse_fromInput = {
    create?: XOR<InventoryDocumentCreateWithoutWarehouse_fromInput, InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput> | InventoryDocumentCreateWithoutWarehouse_fromInput[] | InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput[]
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput | InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput[]
    createMany?: InventoryDocumentCreateManyWarehouse_fromInputEnvelope
    connect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
  }

  export type InventoryDocumentCreateNestedManyWithoutWarehouse_toInput = {
    create?: XOR<InventoryDocumentCreateWithoutWarehouse_toInput, InventoryDocumentUncheckedCreateWithoutWarehouse_toInput> | InventoryDocumentCreateWithoutWarehouse_toInput[] | InventoryDocumentUncheckedCreateWithoutWarehouse_toInput[]
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutWarehouse_toInput | InventoryDocumentCreateOrConnectWithoutWarehouse_toInput[]
    createMany?: InventoryDocumentCreateManyWarehouse_toInputEnvelope
    connect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
  }

  export type InventoryBalanceUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<InventoryBalanceCreateWithoutWarehouseInput, InventoryBalanceUncheckedCreateWithoutWarehouseInput> | InventoryBalanceCreateWithoutWarehouseInput[] | InventoryBalanceUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryBalanceCreateOrConnectWithoutWarehouseInput | InventoryBalanceCreateOrConnectWithoutWarehouseInput[]
    createMany?: InventoryBalanceCreateManyWarehouseInputEnvelope
    connect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
  }

  export type InventoryDocumentUncheckedCreateNestedManyWithoutWarehouse_fromInput = {
    create?: XOR<InventoryDocumentCreateWithoutWarehouse_fromInput, InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput> | InventoryDocumentCreateWithoutWarehouse_fromInput[] | InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput[]
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput | InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput[]
    createMany?: InventoryDocumentCreateManyWarehouse_fromInputEnvelope
    connect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
  }

  export type InventoryDocumentUncheckedCreateNestedManyWithoutWarehouse_toInput = {
    create?: XOR<InventoryDocumentCreateWithoutWarehouse_toInput, InventoryDocumentUncheckedCreateWithoutWarehouse_toInput> | InventoryDocumentCreateWithoutWarehouse_toInput[] | InventoryDocumentUncheckedCreateWithoutWarehouse_toInput[]
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutWarehouse_toInput | InventoryDocumentCreateOrConnectWithoutWarehouse_toInput[]
    createMany?: InventoryDocumentCreateManyWarehouse_toInputEnvelope
    connect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryBalanceUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InventoryBalanceCreateWithoutWarehouseInput, InventoryBalanceUncheckedCreateWithoutWarehouseInput> | InventoryBalanceCreateWithoutWarehouseInput[] | InventoryBalanceUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryBalanceCreateOrConnectWithoutWarehouseInput | InventoryBalanceCreateOrConnectWithoutWarehouseInput[]
    upsert?: InventoryBalanceUpsertWithWhereUniqueWithoutWarehouseInput | InventoryBalanceUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InventoryBalanceCreateManyWarehouseInputEnvelope
    set?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    disconnect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    delete?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    connect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    update?: InventoryBalanceUpdateWithWhereUniqueWithoutWarehouseInput | InventoryBalanceUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InventoryBalanceUpdateManyWithWhereWithoutWarehouseInput | InventoryBalanceUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InventoryBalanceScalarWhereInput | InventoryBalanceScalarWhereInput[]
  }

  export type InventoryDocumentUpdateManyWithoutWarehouse_fromNestedInput = {
    create?: XOR<InventoryDocumentCreateWithoutWarehouse_fromInput, InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput> | InventoryDocumentCreateWithoutWarehouse_fromInput[] | InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput[]
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput | InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput[]
    upsert?: InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_fromInput | InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_fromInput[]
    createMany?: InventoryDocumentCreateManyWarehouse_fromInputEnvelope
    set?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    disconnect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    delete?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    connect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    update?: InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_fromInput | InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_fromInput[]
    updateMany?: InventoryDocumentUpdateManyWithWhereWithoutWarehouse_fromInput | InventoryDocumentUpdateManyWithWhereWithoutWarehouse_fromInput[]
    deleteMany?: InventoryDocumentScalarWhereInput | InventoryDocumentScalarWhereInput[]
  }

  export type InventoryDocumentUpdateManyWithoutWarehouse_toNestedInput = {
    create?: XOR<InventoryDocumentCreateWithoutWarehouse_toInput, InventoryDocumentUncheckedCreateWithoutWarehouse_toInput> | InventoryDocumentCreateWithoutWarehouse_toInput[] | InventoryDocumentUncheckedCreateWithoutWarehouse_toInput[]
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutWarehouse_toInput | InventoryDocumentCreateOrConnectWithoutWarehouse_toInput[]
    upsert?: InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_toInput | InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_toInput[]
    createMany?: InventoryDocumentCreateManyWarehouse_toInputEnvelope
    set?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    disconnect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    delete?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    connect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    update?: InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_toInput | InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_toInput[]
    updateMany?: InventoryDocumentUpdateManyWithWhereWithoutWarehouse_toInput | InventoryDocumentUpdateManyWithWhereWithoutWarehouse_toInput[]
    deleteMany?: InventoryDocumentScalarWhereInput | InventoryDocumentScalarWhereInput[]
  }

  export type InventoryBalanceUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<InventoryBalanceCreateWithoutWarehouseInput, InventoryBalanceUncheckedCreateWithoutWarehouseInput> | InventoryBalanceCreateWithoutWarehouseInput[] | InventoryBalanceUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: InventoryBalanceCreateOrConnectWithoutWarehouseInput | InventoryBalanceCreateOrConnectWithoutWarehouseInput[]
    upsert?: InventoryBalanceUpsertWithWhereUniqueWithoutWarehouseInput | InventoryBalanceUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: InventoryBalanceCreateManyWarehouseInputEnvelope
    set?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    disconnect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    delete?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    connect?: InventoryBalanceWhereUniqueInput | InventoryBalanceWhereUniqueInput[]
    update?: InventoryBalanceUpdateWithWhereUniqueWithoutWarehouseInput | InventoryBalanceUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: InventoryBalanceUpdateManyWithWhereWithoutWarehouseInput | InventoryBalanceUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: InventoryBalanceScalarWhereInput | InventoryBalanceScalarWhereInput[]
  }

  export type InventoryDocumentUncheckedUpdateManyWithoutWarehouse_fromNestedInput = {
    create?: XOR<InventoryDocumentCreateWithoutWarehouse_fromInput, InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput> | InventoryDocumentCreateWithoutWarehouse_fromInput[] | InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput[]
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput | InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput[]
    upsert?: InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_fromInput | InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_fromInput[]
    createMany?: InventoryDocumentCreateManyWarehouse_fromInputEnvelope
    set?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    disconnect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    delete?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    connect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    update?: InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_fromInput | InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_fromInput[]
    updateMany?: InventoryDocumentUpdateManyWithWhereWithoutWarehouse_fromInput | InventoryDocumentUpdateManyWithWhereWithoutWarehouse_fromInput[]
    deleteMany?: InventoryDocumentScalarWhereInput | InventoryDocumentScalarWhereInput[]
  }

  export type InventoryDocumentUncheckedUpdateManyWithoutWarehouse_toNestedInput = {
    create?: XOR<InventoryDocumentCreateWithoutWarehouse_toInput, InventoryDocumentUncheckedCreateWithoutWarehouse_toInput> | InventoryDocumentCreateWithoutWarehouse_toInput[] | InventoryDocumentUncheckedCreateWithoutWarehouse_toInput[]
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutWarehouse_toInput | InventoryDocumentCreateOrConnectWithoutWarehouse_toInput[]
    upsert?: InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_toInput | InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_toInput[]
    createMany?: InventoryDocumentCreateManyWarehouse_toInputEnvelope
    set?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    disconnect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    delete?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    connect?: InventoryDocumentWhereUniqueInput | InventoryDocumentWhereUniqueInput[]
    update?: InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_toInput | InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_toInput[]
    updateMany?: InventoryDocumentUpdateManyWithWhereWithoutWarehouse_toInput | InventoryDocumentUpdateManyWithWhereWithoutWarehouse_toInput[]
    deleteMany?: InventoryDocumentScalarWhereInput | InventoryDocumentScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutBalancesInput = {
    create?: XOR<ProductCreateWithoutBalancesInput, ProductUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBalancesInput
    connect?: ProductWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutBalancesInput = {
    create?: XOR<WarehouseCreateWithoutBalancesInput, WarehouseUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutBalancesInput
    connect?: WarehouseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<ProductCreateWithoutBalancesInput, ProductUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBalancesInput
    upsert?: ProductUpsertWithoutBalancesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBalancesInput, ProductUpdateWithoutBalancesInput>, ProductUncheckedUpdateWithoutBalancesInput>
  }

  export type WarehouseUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<WarehouseCreateWithoutBalancesInput, WarehouseUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutBalancesInput
    upsert?: WarehouseUpsertWithoutBalancesInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutBalancesInput, WarehouseUpdateWithoutBalancesInput>, WarehouseUncheckedUpdateWithoutBalancesInput>
  }

  export type WarehouseCreateNestedOneWithoutDocs_fromInput = {
    create?: XOR<WarehouseCreateWithoutDocs_fromInput, WarehouseUncheckedCreateWithoutDocs_fromInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutDocs_fromInput
    connect?: WarehouseWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutDocs_toInput = {
    create?: XOR<WarehouseCreateWithoutDocs_toInput, WarehouseUncheckedCreateWithoutDocs_toInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutDocs_toInput
    connect?: WarehouseWhereUniqueInput
  }

  export type InventoryDocumentLineCreateNestedManyWithoutDocumentInput = {
    create?: XOR<InventoryDocumentLineCreateWithoutDocumentInput, InventoryDocumentLineUncheckedCreateWithoutDocumentInput> | InventoryDocumentLineCreateWithoutDocumentInput[] | InventoryDocumentLineUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: InventoryDocumentLineCreateOrConnectWithoutDocumentInput | InventoryDocumentLineCreateOrConnectWithoutDocumentInput[]
    createMany?: InventoryDocumentLineCreateManyDocumentInputEnvelope
    connect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
  }

  export type InventoryDocumentLineUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<InventoryDocumentLineCreateWithoutDocumentInput, InventoryDocumentLineUncheckedCreateWithoutDocumentInput> | InventoryDocumentLineCreateWithoutDocumentInput[] | InventoryDocumentLineUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: InventoryDocumentLineCreateOrConnectWithoutDocumentInput | InventoryDocumentLineCreateOrConnectWithoutDocumentInput[]
    createMany?: InventoryDocumentLineCreateManyDocumentInputEnvelope
    connect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
  }

  export type WarehouseUpdateOneWithoutDocs_fromNestedInput = {
    create?: XOR<WarehouseCreateWithoutDocs_fromInput, WarehouseUncheckedCreateWithoutDocs_fromInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutDocs_fromInput
    upsert?: WarehouseUpsertWithoutDocs_fromInput
    disconnect?: WarehouseWhereInput | boolean
    delete?: WarehouseWhereInput | boolean
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutDocs_fromInput, WarehouseUpdateWithoutDocs_fromInput>, WarehouseUncheckedUpdateWithoutDocs_fromInput>
  }

  export type WarehouseUpdateOneWithoutDocs_toNestedInput = {
    create?: XOR<WarehouseCreateWithoutDocs_toInput, WarehouseUncheckedCreateWithoutDocs_toInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutDocs_toInput
    upsert?: WarehouseUpsertWithoutDocs_toInput
    disconnect?: WarehouseWhereInput | boolean
    delete?: WarehouseWhereInput | boolean
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutDocs_toInput, WarehouseUpdateWithoutDocs_toInput>, WarehouseUncheckedUpdateWithoutDocs_toInput>
  }

  export type InventoryDocumentLineUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<InventoryDocumentLineCreateWithoutDocumentInput, InventoryDocumentLineUncheckedCreateWithoutDocumentInput> | InventoryDocumentLineCreateWithoutDocumentInput[] | InventoryDocumentLineUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: InventoryDocumentLineCreateOrConnectWithoutDocumentInput | InventoryDocumentLineCreateOrConnectWithoutDocumentInput[]
    upsert?: InventoryDocumentLineUpsertWithWhereUniqueWithoutDocumentInput | InventoryDocumentLineUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: InventoryDocumentLineCreateManyDocumentInputEnvelope
    set?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    disconnect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    delete?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    connect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    update?: InventoryDocumentLineUpdateWithWhereUniqueWithoutDocumentInput | InventoryDocumentLineUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: InventoryDocumentLineUpdateManyWithWhereWithoutDocumentInput | InventoryDocumentLineUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: InventoryDocumentLineScalarWhereInput | InventoryDocumentLineScalarWhereInput[]
  }

  export type InventoryDocumentLineUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<InventoryDocumentLineCreateWithoutDocumentInput, InventoryDocumentLineUncheckedCreateWithoutDocumentInput> | InventoryDocumentLineCreateWithoutDocumentInput[] | InventoryDocumentLineUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: InventoryDocumentLineCreateOrConnectWithoutDocumentInput | InventoryDocumentLineCreateOrConnectWithoutDocumentInput[]
    upsert?: InventoryDocumentLineUpsertWithWhereUniqueWithoutDocumentInput | InventoryDocumentLineUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: InventoryDocumentLineCreateManyDocumentInputEnvelope
    set?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    disconnect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    delete?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    connect?: InventoryDocumentLineWhereUniqueInput | InventoryDocumentLineWhereUniqueInput[]
    update?: InventoryDocumentLineUpdateWithWhereUniqueWithoutDocumentInput | InventoryDocumentLineUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: InventoryDocumentLineUpdateManyWithWhereWithoutDocumentInput | InventoryDocumentLineUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: InventoryDocumentLineScalarWhereInput | InventoryDocumentLineScalarWhereInput[]
  }

  export type InventoryDocumentCreateNestedOneWithoutLinesInput = {
    create?: XOR<InventoryDocumentCreateWithoutLinesInput, InventoryDocumentUncheckedCreateWithoutLinesInput>
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutLinesInput
    connect?: InventoryDocumentWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDoc_linesInput = {
    create?: XOR<ProductCreateWithoutDoc_linesInput, ProductUncheckedCreateWithoutDoc_linesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDoc_linesInput
    connect?: ProductWhereUniqueInput
  }

  export type InventoryDocumentUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<InventoryDocumentCreateWithoutLinesInput, InventoryDocumentUncheckedCreateWithoutLinesInput>
    connectOrCreate?: InventoryDocumentCreateOrConnectWithoutLinesInput
    upsert?: InventoryDocumentUpsertWithoutLinesInput
    connect?: InventoryDocumentWhereUniqueInput
    update?: XOR<XOR<InventoryDocumentUpdateToOneWithWhereWithoutLinesInput, InventoryDocumentUpdateWithoutLinesInput>, InventoryDocumentUncheckedUpdateWithoutLinesInput>
  }

  export type ProductUpdateOneRequiredWithoutDoc_linesNestedInput = {
    create?: XOR<ProductCreateWithoutDoc_linesInput, ProductUncheckedCreateWithoutDoc_linesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDoc_linesInput
    upsert?: ProductUpsertWithoutDoc_linesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDoc_linesInput, ProductUpdateWithoutDoc_linesInput>, ProductUncheckedUpdateWithoutDoc_linesInput>
  }

  export type ProductCreateNestedOneWithoutLedgerInput = {
    create?: XOR<ProductCreateWithoutLedgerInput, ProductUncheckedCreateWithoutLedgerInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLedgerInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutLedgerNestedInput = {
    create?: XOR<ProductCreateWithoutLedgerInput, ProductUncheckedCreateWithoutLedgerInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLedgerInput
    upsert?: ProductUpsertWithoutLedgerInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutLedgerInput, ProductUpdateWithoutLedgerInput>, ProductUncheckedUpdateWithoutLedgerInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InventoryBalanceCreateWithoutProductInput = {
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
    warehouse: WarehouseCreateNestedOneWithoutBalancesInput
  }

  export type InventoryBalanceUncheckedCreateWithoutProductInput = {
    id?: number
    warehouse_id: number
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
  }

  export type InventoryBalanceCreateOrConnectWithoutProductInput = {
    where: InventoryBalanceWhereUniqueInput
    create: XOR<InventoryBalanceCreateWithoutProductInput, InventoryBalanceUncheckedCreateWithoutProductInput>
  }

  export type InventoryBalanceCreateManyProductInputEnvelope = {
    data: InventoryBalanceCreateManyProductInput | InventoryBalanceCreateManyProductInput[]
  }

  export type InventoryLedgerCreateWithoutProductInput = {
    timestamp?: Date | string
    warehouse_id: number
    movement_type: string
    doc_id: number
    qty_in?: number
    qty_out?: number
    balance_qty: number
    unit_cost: number
    avg_cost_after: number
    value_after: number
    lot?: string
    created_by: number
  }

  export type InventoryLedgerUncheckedCreateWithoutProductInput = {
    id?: number
    timestamp?: Date | string
    warehouse_id: number
    movement_type: string
    doc_id: number
    qty_in?: number
    qty_out?: number
    balance_qty: number
    unit_cost: number
    avg_cost_after: number
    value_after: number
    lot?: string
    created_by: number
  }

  export type InventoryLedgerCreateOrConnectWithoutProductInput = {
    where: InventoryLedgerWhereUniqueInput
    create: XOR<InventoryLedgerCreateWithoutProductInput, InventoryLedgerUncheckedCreateWithoutProductInput>
  }

  export type InventoryLedgerCreateManyProductInputEnvelope = {
    data: InventoryLedgerCreateManyProductInput | InventoryLedgerCreateManyProductInput[]
  }

  export type InventoryDocumentLineCreateWithoutProductInput = {
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
    document: InventoryDocumentCreateNestedOneWithoutLinesInput
  }

  export type InventoryDocumentLineUncheckedCreateWithoutProductInput = {
    id?: number
    document_id: number
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
  }

  export type InventoryDocumentLineCreateOrConnectWithoutProductInput = {
    where: InventoryDocumentLineWhereUniqueInput
    create: XOR<InventoryDocumentLineCreateWithoutProductInput, InventoryDocumentLineUncheckedCreateWithoutProductInput>
  }

  export type InventoryDocumentLineCreateManyProductInputEnvelope = {
    data: InventoryDocumentLineCreateManyProductInput | InventoryDocumentLineCreateManyProductInput[]
  }

  export type InventoryBalanceUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryBalanceWhereUniqueInput
    update: XOR<InventoryBalanceUpdateWithoutProductInput, InventoryBalanceUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryBalanceCreateWithoutProductInput, InventoryBalanceUncheckedCreateWithoutProductInput>
  }

  export type InventoryBalanceUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryBalanceWhereUniqueInput
    data: XOR<InventoryBalanceUpdateWithoutProductInput, InventoryBalanceUncheckedUpdateWithoutProductInput>
  }

  export type InventoryBalanceUpdateManyWithWhereWithoutProductInput = {
    where: InventoryBalanceScalarWhereInput
    data: XOR<InventoryBalanceUpdateManyMutationInput, InventoryBalanceUncheckedUpdateManyWithoutProductInput>
  }

  export type InventoryBalanceScalarWhereInput = {
    AND?: InventoryBalanceScalarWhereInput | InventoryBalanceScalarWhereInput[]
    OR?: InventoryBalanceScalarWhereInput[]
    NOT?: InventoryBalanceScalarWhereInput | InventoryBalanceScalarWhereInput[]
    id?: IntFilter<"InventoryBalance"> | number
    product_id?: IntFilter<"InventoryBalance"> | number
    warehouse_id?: IntFilter<"InventoryBalance"> | number
    lot?: StringFilter<"InventoryBalance"> | string
    qty_on_hand?: FloatFilter<"InventoryBalance"> | number
    avg_cost?: FloatFilter<"InventoryBalance"> | number
    value_total?: FloatFilter<"InventoryBalance"> | number
    updated_at?: DateTimeFilter<"InventoryBalance"> | Date | string
  }

  export type InventoryLedgerUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryLedgerWhereUniqueInput
    update: XOR<InventoryLedgerUpdateWithoutProductInput, InventoryLedgerUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryLedgerCreateWithoutProductInput, InventoryLedgerUncheckedCreateWithoutProductInput>
  }

  export type InventoryLedgerUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryLedgerWhereUniqueInput
    data: XOR<InventoryLedgerUpdateWithoutProductInput, InventoryLedgerUncheckedUpdateWithoutProductInput>
  }

  export type InventoryLedgerUpdateManyWithWhereWithoutProductInput = {
    where: InventoryLedgerScalarWhereInput
    data: XOR<InventoryLedgerUpdateManyMutationInput, InventoryLedgerUncheckedUpdateManyWithoutProductInput>
  }

  export type InventoryLedgerScalarWhereInput = {
    AND?: InventoryLedgerScalarWhereInput | InventoryLedgerScalarWhereInput[]
    OR?: InventoryLedgerScalarWhereInput[]
    NOT?: InventoryLedgerScalarWhereInput | InventoryLedgerScalarWhereInput[]
    id?: IntFilter<"InventoryLedger"> | number
    timestamp?: DateTimeFilter<"InventoryLedger"> | Date | string
    product_id?: IntFilter<"InventoryLedger"> | number
    warehouse_id?: IntFilter<"InventoryLedger"> | number
    movement_type?: StringFilter<"InventoryLedger"> | string
    doc_id?: IntFilter<"InventoryLedger"> | number
    qty_in?: FloatFilter<"InventoryLedger"> | number
    qty_out?: FloatFilter<"InventoryLedger"> | number
    balance_qty?: FloatFilter<"InventoryLedger"> | number
    unit_cost?: FloatFilter<"InventoryLedger"> | number
    avg_cost_after?: FloatFilter<"InventoryLedger"> | number
    value_after?: FloatFilter<"InventoryLedger"> | number
    lot?: StringFilter<"InventoryLedger"> | string
    created_by?: IntFilter<"InventoryLedger"> | number
  }

  export type InventoryDocumentLineUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryDocumentLineWhereUniqueInput
    update: XOR<InventoryDocumentLineUpdateWithoutProductInput, InventoryDocumentLineUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryDocumentLineCreateWithoutProductInput, InventoryDocumentLineUncheckedCreateWithoutProductInput>
  }

  export type InventoryDocumentLineUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryDocumentLineWhereUniqueInput
    data: XOR<InventoryDocumentLineUpdateWithoutProductInput, InventoryDocumentLineUncheckedUpdateWithoutProductInput>
  }

  export type InventoryDocumentLineUpdateManyWithWhereWithoutProductInput = {
    where: InventoryDocumentLineScalarWhereInput
    data: XOR<InventoryDocumentLineUpdateManyMutationInput, InventoryDocumentLineUncheckedUpdateManyWithoutProductInput>
  }

  export type InventoryDocumentLineScalarWhereInput = {
    AND?: InventoryDocumentLineScalarWhereInput | InventoryDocumentLineScalarWhereInput[]
    OR?: InventoryDocumentLineScalarWhereInput[]
    NOT?: InventoryDocumentLineScalarWhereInput | InventoryDocumentLineScalarWhereInput[]
    id?: IntFilter<"InventoryDocumentLine"> | number
    document_id?: IntFilter<"InventoryDocumentLine"> | number
    product_id?: IntFilter<"InventoryDocumentLine"> | number
    qty?: FloatFilter<"InventoryDocumentLine"> | number
    unit_cost?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    total_cost?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    unit_sale?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    total_sale?: FloatNullableFilter<"InventoryDocumentLine"> | number | null
    lot?: StringNullableFilter<"InventoryDocumentLine"> | string | null
  }

  export type InventoryBalanceCreateWithoutWarehouseInput = {
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutBalancesInput
  }

  export type InventoryBalanceUncheckedCreateWithoutWarehouseInput = {
    id?: number
    product_id: number
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
  }

  export type InventoryBalanceCreateOrConnectWithoutWarehouseInput = {
    where: InventoryBalanceWhereUniqueInput
    create: XOR<InventoryBalanceCreateWithoutWarehouseInput, InventoryBalanceUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryBalanceCreateManyWarehouseInputEnvelope = {
    data: InventoryBalanceCreateManyWarehouseInput | InventoryBalanceCreateManyWarehouseInput[]
  }

  export type InventoryDocumentCreateWithoutWarehouse_fromInput = {
    doc_type: string
    document_number: string
    status: string
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
    warehouse_to?: WarehouseCreateNestedOneWithoutDocs_toInput
    lines?: InventoryDocumentLineCreateNestedManyWithoutDocumentInput
  }

  export type InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput = {
    id?: number
    doc_type: string
    document_number: string
    status: string
    warehouse_to_id?: number | null
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
    lines?: InventoryDocumentLineUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type InventoryDocumentCreateOrConnectWithoutWarehouse_fromInput = {
    where: InventoryDocumentWhereUniqueInput
    create: XOR<InventoryDocumentCreateWithoutWarehouse_fromInput, InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput>
  }

  export type InventoryDocumentCreateManyWarehouse_fromInputEnvelope = {
    data: InventoryDocumentCreateManyWarehouse_fromInput | InventoryDocumentCreateManyWarehouse_fromInput[]
  }

  export type InventoryDocumentCreateWithoutWarehouse_toInput = {
    doc_type: string
    document_number: string
    status: string
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
    warehouse_from?: WarehouseCreateNestedOneWithoutDocs_fromInput
    lines?: InventoryDocumentLineCreateNestedManyWithoutDocumentInput
  }

  export type InventoryDocumentUncheckedCreateWithoutWarehouse_toInput = {
    id?: number
    doc_type: string
    document_number: string
    status: string
    warehouse_from_id?: number | null
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
    lines?: InventoryDocumentLineUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type InventoryDocumentCreateOrConnectWithoutWarehouse_toInput = {
    where: InventoryDocumentWhereUniqueInput
    create: XOR<InventoryDocumentCreateWithoutWarehouse_toInput, InventoryDocumentUncheckedCreateWithoutWarehouse_toInput>
  }

  export type InventoryDocumentCreateManyWarehouse_toInputEnvelope = {
    data: InventoryDocumentCreateManyWarehouse_toInput | InventoryDocumentCreateManyWarehouse_toInput[]
  }

  export type InventoryBalanceUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: InventoryBalanceWhereUniqueInput
    update: XOR<InventoryBalanceUpdateWithoutWarehouseInput, InventoryBalanceUncheckedUpdateWithoutWarehouseInput>
    create: XOR<InventoryBalanceCreateWithoutWarehouseInput, InventoryBalanceUncheckedCreateWithoutWarehouseInput>
  }

  export type InventoryBalanceUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: InventoryBalanceWhereUniqueInput
    data: XOR<InventoryBalanceUpdateWithoutWarehouseInput, InventoryBalanceUncheckedUpdateWithoutWarehouseInput>
  }

  export type InventoryBalanceUpdateManyWithWhereWithoutWarehouseInput = {
    where: InventoryBalanceScalarWhereInput
    data: XOR<InventoryBalanceUpdateManyMutationInput, InventoryBalanceUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_fromInput = {
    where: InventoryDocumentWhereUniqueInput
    update: XOR<InventoryDocumentUpdateWithoutWarehouse_fromInput, InventoryDocumentUncheckedUpdateWithoutWarehouse_fromInput>
    create: XOR<InventoryDocumentCreateWithoutWarehouse_fromInput, InventoryDocumentUncheckedCreateWithoutWarehouse_fromInput>
  }

  export type InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_fromInput = {
    where: InventoryDocumentWhereUniqueInput
    data: XOR<InventoryDocumentUpdateWithoutWarehouse_fromInput, InventoryDocumentUncheckedUpdateWithoutWarehouse_fromInput>
  }

  export type InventoryDocumentUpdateManyWithWhereWithoutWarehouse_fromInput = {
    where: InventoryDocumentScalarWhereInput
    data: XOR<InventoryDocumentUpdateManyMutationInput, InventoryDocumentUncheckedUpdateManyWithoutWarehouse_fromInput>
  }

  export type InventoryDocumentScalarWhereInput = {
    AND?: InventoryDocumentScalarWhereInput | InventoryDocumentScalarWhereInput[]
    OR?: InventoryDocumentScalarWhereInput[]
    NOT?: InventoryDocumentScalarWhereInput | InventoryDocumentScalarWhereInput[]
    id?: IntFilter<"InventoryDocument"> | number
    doc_type?: StringFilter<"InventoryDocument"> | string
    document_number?: StringFilter<"InventoryDocument"> | string
    status?: StringFilter<"InventoryDocument"> | string
    warehouse_from_id?: IntNullableFilter<"InventoryDocument"> | number | null
    warehouse_to_id?: IntNullableFilter<"InventoryDocument"> | number | null
    third_party_id?: IntNullableFilter<"InventoryDocument"> | number | null
    date?: DateTimeFilter<"InventoryDocument"> | Date | string
    notes?: StringNullableFilter<"InventoryDocument"> | string | null
    created_by?: IntFilter<"InventoryDocument"> | number
    approved_by?: IntNullableFilter<"InventoryDocument"> | number | null
    attachment_url?: StringNullableFilter<"InventoryDocument"> | string | null
  }

  export type InventoryDocumentUpsertWithWhereUniqueWithoutWarehouse_toInput = {
    where: InventoryDocumentWhereUniqueInput
    update: XOR<InventoryDocumentUpdateWithoutWarehouse_toInput, InventoryDocumentUncheckedUpdateWithoutWarehouse_toInput>
    create: XOR<InventoryDocumentCreateWithoutWarehouse_toInput, InventoryDocumentUncheckedCreateWithoutWarehouse_toInput>
  }

  export type InventoryDocumentUpdateWithWhereUniqueWithoutWarehouse_toInput = {
    where: InventoryDocumentWhereUniqueInput
    data: XOR<InventoryDocumentUpdateWithoutWarehouse_toInput, InventoryDocumentUncheckedUpdateWithoutWarehouse_toInput>
  }

  export type InventoryDocumentUpdateManyWithWhereWithoutWarehouse_toInput = {
    where: InventoryDocumentScalarWhereInput
    data: XOR<InventoryDocumentUpdateManyMutationInput, InventoryDocumentUncheckedUpdateManyWithoutWarehouse_toInput>
  }

  export type ProductCreateWithoutBalancesInput = {
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
    ledger?: InventoryLedgerCreateNestedManyWithoutProductInput
    doc_lines?: InventoryDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBalancesInput = {
    id?: number
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
    ledger?: InventoryLedgerUncheckedCreateNestedManyWithoutProductInput
    doc_lines?: InventoryDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBalancesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBalancesInput, ProductUncheckedCreateWithoutBalancesInput>
  }

  export type WarehouseCreateWithoutBalancesInput = {
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
    docs_from?: InventoryDocumentCreateNestedManyWithoutWarehouse_fromInput
    docs_to?: InventoryDocumentCreateNestedManyWithoutWarehouse_toInput
  }

  export type WarehouseUncheckedCreateWithoutBalancesInput = {
    id?: number
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
    docs_from?: InventoryDocumentUncheckedCreateNestedManyWithoutWarehouse_fromInput
    docs_to?: InventoryDocumentUncheckedCreateNestedManyWithoutWarehouse_toInput
  }

  export type WarehouseCreateOrConnectWithoutBalancesInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutBalancesInput, WarehouseUncheckedCreateWithoutBalancesInput>
  }

  export type ProductUpsertWithoutBalancesInput = {
    update: XOR<ProductUpdateWithoutBalancesInput, ProductUncheckedUpdateWithoutBalancesInput>
    create: XOR<ProductCreateWithoutBalancesInput, ProductUncheckedCreateWithoutBalancesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBalancesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBalancesInput, ProductUncheckedUpdateWithoutBalancesInput>
  }

  export type ProductUpdateWithoutBalancesInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: InventoryLedgerUpdateManyWithoutProductNestedInput
    doc_lines?: InventoryDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ledger?: InventoryLedgerUncheckedUpdateManyWithoutProductNestedInput
    doc_lines?: InventoryDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WarehouseUpsertWithoutBalancesInput = {
    update: XOR<WarehouseUpdateWithoutBalancesInput, WarehouseUncheckedUpdateWithoutBalancesInput>
    create: XOR<WarehouseCreateWithoutBalancesInput, WarehouseUncheckedCreateWithoutBalancesInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutBalancesInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutBalancesInput, WarehouseUncheckedUpdateWithoutBalancesInput>
  }

  export type WarehouseUpdateWithoutBalancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    docs_from?: InventoryDocumentUpdateManyWithoutWarehouse_fromNestedInput
    docs_to?: InventoryDocumentUpdateManyWithoutWarehouse_toNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    docs_from?: InventoryDocumentUncheckedUpdateManyWithoutWarehouse_fromNestedInput
    docs_to?: InventoryDocumentUncheckedUpdateManyWithoutWarehouse_toNestedInput
  }

  export type WarehouseCreateWithoutDocs_fromInput = {
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
    balances?: InventoryBalanceCreateNestedManyWithoutWarehouseInput
    docs_to?: InventoryDocumentCreateNestedManyWithoutWarehouse_toInput
  }

  export type WarehouseUncheckedCreateWithoutDocs_fromInput = {
    id?: number
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
    balances?: InventoryBalanceUncheckedCreateNestedManyWithoutWarehouseInput
    docs_to?: InventoryDocumentUncheckedCreateNestedManyWithoutWarehouse_toInput
  }

  export type WarehouseCreateOrConnectWithoutDocs_fromInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutDocs_fromInput, WarehouseUncheckedCreateWithoutDocs_fromInput>
  }

  export type WarehouseCreateWithoutDocs_toInput = {
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
    balances?: InventoryBalanceCreateNestedManyWithoutWarehouseInput
    docs_from?: InventoryDocumentCreateNestedManyWithoutWarehouse_fromInput
  }

  export type WarehouseUncheckedCreateWithoutDocs_toInput = {
    id?: number
    name: string
    location?: string | null
    manager_id?: number | null
    type: string
    active?: boolean
    color?: string
    balances?: InventoryBalanceUncheckedCreateNestedManyWithoutWarehouseInput
    docs_from?: InventoryDocumentUncheckedCreateNestedManyWithoutWarehouse_fromInput
  }

  export type WarehouseCreateOrConnectWithoutDocs_toInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutDocs_toInput, WarehouseUncheckedCreateWithoutDocs_toInput>
  }

  export type InventoryDocumentLineCreateWithoutDocumentInput = {
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
    product: ProductCreateNestedOneWithoutDoc_linesInput
  }

  export type InventoryDocumentLineUncheckedCreateWithoutDocumentInput = {
    id?: number
    product_id: number
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
  }

  export type InventoryDocumentLineCreateOrConnectWithoutDocumentInput = {
    where: InventoryDocumentLineWhereUniqueInput
    create: XOR<InventoryDocumentLineCreateWithoutDocumentInput, InventoryDocumentLineUncheckedCreateWithoutDocumentInput>
  }

  export type InventoryDocumentLineCreateManyDocumentInputEnvelope = {
    data: InventoryDocumentLineCreateManyDocumentInput | InventoryDocumentLineCreateManyDocumentInput[]
  }

  export type WarehouseUpsertWithoutDocs_fromInput = {
    update: XOR<WarehouseUpdateWithoutDocs_fromInput, WarehouseUncheckedUpdateWithoutDocs_fromInput>
    create: XOR<WarehouseCreateWithoutDocs_fromInput, WarehouseUncheckedCreateWithoutDocs_fromInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutDocs_fromInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutDocs_fromInput, WarehouseUncheckedUpdateWithoutDocs_fromInput>
  }

  export type WarehouseUpdateWithoutDocs_fromInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    balances?: InventoryBalanceUpdateManyWithoutWarehouseNestedInput
    docs_to?: InventoryDocumentUpdateManyWithoutWarehouse_toNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutDocs_fromInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    balances?: InventoryBalanceUncheckedUpdateManyWithoutWarehouseNestedInput
    docs_to?: InventoryDocumentUncheckedUpdateManyWithoutWarehouse_toNestedInput
  }

  export type WarehouseUpsertWithoutDocs_toInput = {
    update: XOR<WarehouseUpdateWithoutDocs_toInput, WarehouseUncheckedUpdateWithoutDocs_toInput>
    create: XOR<WarehouseCreateWithoutDocs_toInput, WarehouseUncheckedCreateWithoutDocs_toInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutDocs_toInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutDocs_toInput, WarehouseUncheckedUpdateWithoutDocs_toInput>
  }

  export type WarehouseUpdateWithoutDocs_toInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    balances?: InventoryBalanceUpdateManyWithoutWarehouseNestedInput
    docs_from?: InventoryDocumentUpdateManyWithoutWarehouse_fromNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutDocs_toInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    balances?: InventoryBalanceUncheckedUpdateManyWithoutWarehouseNestedInput
    docs_from?: InventoryDocumentUncheckedUpdateManyWithoutWarehouse_fromNestedInput
  }

  export type InventoryDocumentLineUpsertWithWhereUniqueWithoutDocumentInput = {
    where: InventoryDocumentLineWhereUniqueInput
    update: XOR<InventoryDocumentLineUpdateWithoutDocumentInput, InventoryDocumentLineUncheckedUpdateWithoutDocumentInput>
    create: XOR<InventoryDocumentLineCreateWithoutDocumentInput, InventoryDocumentLineUncheckedCreateWithoutDocumentInput>
  }

  export type InventoryDocumentLineUpdateWithWhereUniqueWithoutDocumentInput = {
    where: InventoryDocumentLineWhereUniqueInput
    data: XOR<InventoryDocumentLineUpdateWithoutDocumentInput, InventoryDocumentLineUncheckedUpdateWithoutDocumentInput>
  }

  export type InventoryDocumentLineUpdateManyWithWhereWithoutDocumentInput = {
    where: InventoryDocumentLineScalarWhereInput
    data: XOR<InventoryDocumentLineUpdateManyMutationInput, InventoryDocumentLineUncheckedUpdateManyWithoutDocumentInput>
  }

  export type InventoryDocumentCreateWithoutLinesInput = {
    doc_type: string
    document_number: string
    status: string
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
    warehouse_from?: WarehouseCreateNestedOneWithoutDocs_fromInput
    warehouse_to?: WarehouseCreateNestedOneWithoutDocs_toInput
  }

  export type InventoryDocumentUncheckedCreateWithoutLinesInput = {
    id?: number
    doc_type: string
    document_number: string
    status: string
    warehouse_from_id?: number | null
    warehouse_to_id?: number | null
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
  }

  export type InventoryDocumentCreateOrConnectWithoutLinesInput = {
    where: InventoryDocumentWhereUniqueInput
    create: XOR<InventoryDocumentCreateWithoutLinesInput, InventoryDocumentUncheckedCreateWithoutLinesInput>
  }

  export type ProductCreateWithoutDoc_linesInput = {
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
    balances?: InventoryBalanceCreateNestedManyWithoutProductInput
    ledger?: InventoryLedgerCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDoc_linesInput = {
    id?: number
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
    balances?: InventoryBalanceUncheckedCreateNestedManyWithoutProductInput
    ledger?: InventoryLedgerUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDoc_linesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDoc_linesInput, ProductUncheckedCreateWithoutDoc_linesInput>
  }

  export type InventoryDocumentUpsertWithoutLinesInput = {
    update: XOR<InventoryDocumentUpdateWithoutLinesInput, InventoryDocumentUncheckedUpdateWithoutLinesInput>
    create: XOR<InventoryDocumentCreateWithoutLinesInput, InventoryDocumentUncheckedCreateWithoutLinesInput>
    where?: InventoryDocumentWhereInput
  }

  export type InventoryDocumentUpdateToOneWithWhereWithoutLinesInput = {
    where?: InventoryDocumentWhereInput
    data: XOR<InventoryDocumentUpdateWithoutLinesInput, InventoryDocumentUncheckedUpdateWithoutLinesInput>
  }

  export type InventoryDocumentUpdateWithoutLinesInput = {
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    warehouse_from?: WarehouseUpdateOneWithoutDocs_fromNestedInput
    warehouse_to?: WarehouseUpdateOneWithoutDocs_toNestedInput
  }

  export type InventoryDocumentUncheckedUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    warehouse_from_id?: NullableIntFieldUpdateOperationsInput | number | null
    warehouse_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpsertWithoutDoc_linesInput = {
    update: XOR<ProductUpdateWithoutDoc_linesInput, ProductUncheckedUpdateWithoutDoc_linesInput>
    create: XOR<ProductCreateWithoutDoc_linesInput, ProductUncheckedCreateWithoutDoc_linesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDoc_linesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDoc_linesInput, ProductUncheckedUpdateWithoutDoc_linesInput>
  }

  export type ProductUpdateWithoutDoc_linesInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: InventoryBalanceUpdateManyWithoutProductNestedInput
    ledger?: InventoryLedgerUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDoc_linesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: InventoryBalanceUncheckedUpdateManyWithoutProductNestedInput
    ledger?: InventoryLedgerUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutLedgerInput = {
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
    balances?: InventoryBalanceCreateNestedManyWithoutProductInput
    doc_lines?: InventoryDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutLedgerInput = {
    id?: number
    sku: string
    name: string
    type: string
    presentation_g: number
    packaging_unit: string
    unit?: string
    category?: string | null
    brand?: string | null
    active?: boolean
    cost_standard?: number | null
    created_at?: Date | string
    balances?: InventoryBalanceUncheckedCreateNestedManyWithoutProductInput
    doc_lines?: InventoryDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutLedgerInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutLedgerInput, ProductUncheckedCreateWithoutLedgerInput>
  }

  export type ProductUpsertWithoutLedgerInput = {
    update: XOR<ProductUpdateWithoutLedgerInput, ProductUncheckedUpdateWithoutLedgerInput>
    create: XOR<ProductCreateWithoutLedgerInput, ProductUncheckedCreateWithoutLedgerInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutLedgerInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutLedgerInput, ProductUncheckedUpdateWithoutLedgerInput>
  }

  export type ProductUpdateWithoutLedgerInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: InventoryBalanceUpdateManyWithoutProductNestedInput
    doc_lines?: InventoryDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutLedgerInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    presentation_g?: IntFieldUpdateOperationsInput | number
    packaging_unit?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    cost_standard?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: InventoryBalanceUncheckedUpdateManyWithoutProductNestedInput
    doc_lines?: InventoryDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type InventoryBalanceCreateManyProductInput = {
    id?: number
    warehouse_id: number
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
  }

  export type InventoryLedgerCreateManyProductInput = {
    id?: number
    timestamp?: Date | string
    warehouse_id: number
    movement_type: string
    doc_id: number
    qty_in?: number
    qty_out?: number
    balance_qty: number
    unit_cost: number
    avg_cost_after: number
    value_after: number
    lot?: string
    created_by: number
  }

  export type InventoryDocumentLineCreateManyProductInput = {
    id?: number
    document_id: number
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
  }

  export type InventoryBalanceUpdateWithoutProductInput = {
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse?: WarehouseUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type InventoryBalanceUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryBalanceUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    warehouse_id?: IntFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLedgerUpdateWithoutProductInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse_id?: IntFieldUpdateOperationsInput | number
    movement_type?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    qty_in?: FloatFieldUpdateOperationsInput | number
    qty_out?: FloatFieldUpdateOperationsInput | number
    balance_qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: FloatFieldUpdateOperationsInput | number
    avg_cost_after?: FloatFieldUpdateOperationsInput | number
    value_after?: FloatFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryLedgerUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse_id?: IntFieldUpdateOperationsInput | number
    movement_type?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    qty_in?: FloatFieldUpdateOperationsInput | number
    qty_out?: FloatFieldUpdateOperationsInput | number
    balance_qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: FloatFieldUpdateOperationsInput | number
    avg_cost_after?: FloatFieldUpdateOperationsInput | number
    value_after?: FloatFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryLedgerUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouse_id?: IntFieldUpdateOperationsInput | number
    movement_type?: StringFieldUpdateOperationsInput | string
    doc_id?: IntFieldUpdateOperationsInput | number
    qty_in?: FloatFieldUpdateOperationsInput | number
    qty_out?: FloatFieldUpdateOperationsInput | number
    balance_qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: FloatFieldUpdateOperationsInput | number
    avg_cost_after?: FloatFieldUpdateOperationsInput | number
    value_after?: FloatFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryDocumentLineUpdateWithoutProductInput = {
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
    document?: InventoryDocumentUpdateOneRequiredWithoutLinesNestedInput
  }

  export type InventoryDocumentLineUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryDocumentLineUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: IntFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryBalanceCreateManyWarehouseInput = {
    id?: number
    product_id: number
    lot?: string
    qty_on_hand?: number
    avg_cost?: number
    value_total?: number
    updated_at?: Date | string
  }

  export type InventoryDocumentCreateManyWarehouse_fromInput = {
    id?: number
    doc_type: string
    document_number: string
    status: string
    warehouse_to_id?: number | null
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
  }

  export type InventoryDocumentCreateManyWarehouse_toInput = {
    id?: number
    doc_type: string
    document_number: string
    status: string
    warehouse_from_id?: number | null
    third_party_id?: number | null
    date: Date | string
    notes?: string | null
    created_by: number
    approved_by?: number | null
    attachment_url?: string | null
  }

  export type InventoryBalanceUpdateWithoutWarehouseInput = {
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type InventoryBalanceUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryBalanceUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    lot?: StringFieldUpdateOperationsInput | string
    qty_on_hand?: FloatFieldUpdateOperationsInput | number
    avg_cost?: FloatFieldUpdateOperationsInput | number
    value_total?: FloatFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryDocumentUpdateWithoutWarehouse_fromInput = {
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    warehouse_to?: WarehouseUpdateOneWithoutDocs_toNestedInput
    lines?: InventoryDocumentLineUpdateManyWithoutDocumentNestedInput
  }

  export type InventoryDocumentUncheckedUpdateWithoutWarehouse_fromInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    warehouse_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    lines?: InventoryDocumentLineUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type InventoryDocumentUncheckedUpdateManyWithoutWarehouse_fromInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    warehouse_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryDocumentUpdateWithoutWarehouse_toInput = {
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    warehouse_from?: WarehouseUpdateOneWithoutDocs_fromNestedInput
    lines?: InventoryDocumentLineUpdateManyWithoutDocumentNestedInput
  }

  export type InventoryDocumentUncheckedUpdateWithoutWarehouse_toInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    warehouse_from_id?: NullableIntFieldUpdateOperationsInput | number | null
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    lines?: InventoryDocumentLineUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type InventoryDocumentUncheckedUpdateManyWithoutWarehouse_toInput = {
    id?: IntFieldUpdateOperationsInput | number
    doc_type?: StringFieldUpdateOperationsInput | string
    document_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    warehouse_from_id?: NullableIntFieldUpdateOperationsInput | number | null
    third_party_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    approved_by?: NullableIntFieldUpdateOperationsInput | number | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryDocumentLineCreateManyDocumentInput = {
    id?: number
    product_id: number
    qty: number
    unit_cost?: number | null
    total_cost?: number | null
    unit_sale?: number | null
    total_sale?: number | null
    lot?: string | null
  }

  export type InventoryDocumentLineUpdateWithoutDocumentInput = {
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutDoc_linesNestedInput
  }

  export type InventoryDocumentLineUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryDocumentLineUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    unit_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    total_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    unit_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    total_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    lot?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseCountOutputTypeDefaultArgs instead
     */
    export type WarehouseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryDocumentCountOutputTypeDefaultArgs instead
     */
    export type InventoryDocumentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryDocumentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WarehouseDefaultArgs instead
     */
    export type WarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WarehouseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryBalanceDefaultArgs instead
     */
    export type InventoryBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryBalanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryDocumentDefaultArgs instead
     */
    export type InventoryDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryDocumentLineDefaultArgs instead
     */
    export type InventoryDocumentLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryDocumentLineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryLedgerDefaultArgs instead
     */
    export type InventoryLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryLedgerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}