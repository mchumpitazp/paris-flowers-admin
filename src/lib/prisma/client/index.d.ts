
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
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model product_images
 * 
 */
export type product_images = $Result.DefaultSelection<Prisma.$product_imagesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model occasions
 * 
 */
export type occasions = $Result.DefaultSelection<Prisma.$occasionsPayload>
/**
 * Model product_occasions
 * 
 */
export type product_occasions = $Result.DefaultSelection<Prisma.$product_occasionsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model product_categories
 * 
 */
export type product_categories = $Result.DefaultSelection<Prisma.$product_categoriesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.orders.findMany()
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
   * // Fetch zero or more Orders
   * const orders = await prisma.orders.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_images`: Exposes CRUD operations for the **product_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_images
    * const product_images = await prisma.product_images.findMany()
    * ```
    */
  get product_images(): Prisma.product_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occasions`: Exposes CRUD operations for the **occasions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Occasions
    * const occasions = await prisma.occasions.findMany()
    * ```
    */
  get occasions(): Prisma.occasionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_occasions`: Exposes CRUD operations for the **product_occasions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_occasions
    * const product_occasions = await prisma.product_occasions.findMany()
    * ```
    */
  get product_occasions(): Prisma.product_occasionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_categories`: Exposes CRUD operations for the **product_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_categories
    * const product_categories = await prisma.product_categories.findMany()
    * ```
    */
  get product_categories(): Prisma.product_categoriesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    orders: 'orders',
    product_images: 'product_images',
    products: 'products',
    occasions: 'occasions',
    product_occasions: 'product_occasions',
    categories: 'categories',
    product_categories: 'product_categories'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "orders" | "product_images" | "products" | "occasions" | "product_occasions" | "categories" | "product_categories"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      product_images: {
        payload: Prisma.$product_imagesPayload<ExtArgs>
        fields: Prisma.product_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          findFirst: {
            args: Prisma.product_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          findMany: {
            args: Prisma.product_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          create: {
            args: Prisma.product_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          createMany: {
            args: Prisma.product_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          delete: {
            args: Prisma.product_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          update: {
            args: Prisma.product_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          deleteMany: {
            args: Prisma.product_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          upsert: {
            args: Prisma.product_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          aggregate: {
            args: Prisma.Product_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_images>
          }
          groupBy: {
            args: Prisma.product_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_imagesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      occasions: {
        payload: Prisma.$occasionsPayload<ExtArgs>
        fields: Prisma.occasionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.occasionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.occasionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>
          }
          findFirst: {
            args: Prisma.occasionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.occasionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>
          }
          findMany: {
            args: Prisma.occasionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>[]
          }
          create: {
            args: Prisma.occasionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>
          }
          createMany: {
            args: Prisma.occasionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.occasionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>[]
          }
          delete: {
            args: Prisma.occasionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>
          }
          update: {
            args: Prisma.occasionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>
          }
          deleteMany: {
            args: Prisma.occasionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.occasionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.occasionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>[]
          }
          upsert: {
            args: Prisma.occasionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$occasionsPayload>
          }
          aggregate: {
            args: Prisma.OccasionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccasions>
          }
          groupBy: {
            args: Prisma.occasionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccasionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.occasionsCountArgs<ExtArgs>
            result: $Utils.Optional<OccasionsCountAggregateOutputType> | number
          }
        }
      }
      product_occasions: {
        payload: Prisma.$product_occasionsPayload<ExtArgs>
        fields: Prisma.product_occasionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_occasionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_occasionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>
          }
          findFirst: {
            args: Prisma.product_occasionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_occasionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>
          }
          findMany: {
            args: Prisma.product_occasionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>[]
          }
          create: {
            args: Prisma.product_occasionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>
          }
          createMany: {
            args: Prisma.product_occasionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_occasionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>[]
          }
          delete: {
            args: Prisma.product_occasionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>
          }
          update: {
            args: Prisma.product_occasionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>
          }
          deleteMany: {
            args: Prisma.product_occasionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_occasionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_occasionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>[]
          }
          upsert: {
            args: Prisma.product_occasionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_occasionsPayload>
          }
          aggregate: {
            args: Prisma.Product_occasionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_occasions>
          }
          groupBy: {
            args: Prisma.product_occasionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_occasionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_occasionsCountArgs<ExtArgs>
            result: $Utils.Optional<Product_occasionsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      product_categories: {
        payload: Prisma.$product_categoriesPayload<ExtArgs>
        fields: Prisma.product_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          findFirst: {
            args: Prisma.product_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          findMany: {
            args: Prisma.product_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>[]
          }
          create: {
            args: Prisma.product_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          createMany: {
            args: Prisma.product_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>[]
          }
          delete: {
            args: Prisma.product_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          update: {
            args: Prisma.product_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.product_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.product_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Product_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_categories>
          }
          groupBy: {
            args: Prisma.product_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_categoriesCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    orders?: ordersOmit
    product_images?: product_imagesOmit
    products?: productsOmit
    occasions?: occasionsOmit
    product_occasions?: product_occasionsOmit
    categories?: categoriesOmit
    product_categories?: product_categoriesOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    product_categories: number
    product_images: number
    product_occasions: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_categories?: boolean | ProductsCountOutputTypeCountProduct_categoriesArgs
    product_images?: boolean | ProductsCountOutputTypeCountProduct_imagesArgs
    product_occasions?: boolean | ProductsCountOutputTypeCountProduct_occasionsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_categoriesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imagesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_occasionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_occasionsWhereInput
  }


  /**
   * Count Type OccasionsCountOutputType
   */

  export type OccasionsCountOutputType = {
    product_occasions: number
  }

  export type OccasionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_occasions?: boolean | OccasionsCountOutputTypeCountProduct_occasionsArgs
  }

  // Custom InputTypes
  /**
   * OccasionsCountOutputType without action
   */
  export type OccasionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccasionsCountOutputType
     */
    select?: OccasionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OccasionsCountOutputType without action
   */
  export type OccasionsCountOutputTypeCountProduct_occasionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_occasionsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    product_categories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_categories?: boolean | CategoriesCountOutputTypeCountProduct_categoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProduct_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_categoriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    customer_name: string | null
    customer_phone: string | null
    customer_email: string | null
    delivery_address: string | null
    delivery_district: string | null
    delivery_datetime: Date | null
    needs_card: boolean | null
    card_text: string | null
    is_different_recipient: boolean | null
    recipient_phone: string | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    customer_name: string | null
    customer_phone: string | null
    customer_email: string | null
    delivery_address: string | null
    delivery_district: string | null
    delivery_datetime: Date | null
    needs_card: boolean | null
    card_text: string | null
    is_different_recipient: boolean | null
    recipient_phone: string | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    customer_name: number
    customer_phone: number
    customer_email: number
    delivery_address: number
    delivery_district: number
    delivery_datetime: number
    needs_card: number
    card_text: number
    is_different_recipient: number
    recipient_phone: number
    created_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    customer_name?: true
    customer_phone?: true
    customer_email?: true
    delivery_address?: true
    delivery_district?: true
    delivery_datetime?: true
    needs_card?: true
    card_text?: true
    is_different_recipient?: true
    recipient_phone?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    customer_name?: true
    customer_phone?: true
    customer_email?: true
    delivery_address?: true
    delivery_district?: true
    delivery_datetime?: true
    needs_card?: true
    card_text?: true
    is_different_recipient?: true
    recipient_phone?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    customer_name?: true
    customer_phone?: true
    customer_email?: true
    delivery_address?: true
    delivery_district?: true
    delivery_datetime?: true
    needs_card?: true
    card_text?: true
    is_different_recipient?: true
    recipient_phone?: true
    created_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    customer_name: string
    customer_phone: string
    customer_email: string | null
    delivery_address: string
    delivery_district: string
    delivery_datetime: Date
    needs_card: boolean
    card_text: string | null
    is_different_recipient: boolean
    recipient_phone: string | null
    created_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    customer_email?: boolean
    delivery_address?: boolean
    delivery_district?: boolean
    delivery_datetime?: boolean
    needs_card?: boolean
    card_text?: boolean
    is_different_recipient?: boolean
    recipient_phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    customer_email?: boolean
    delivery_address?: boolean
    delivery_district?: boolean
    delivery_datetime?: boolean
    needs_card?: boolean
    card_text?: boolean
    is_different_recipient?: boolean
    recipient_phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    customer_email?: boolean
    delivery_address?: boolean
    delivery_district?: boolean
    delivery_datetime?: boolean
    needs_card?: boolean
    card_text?: boolean
    is_different_recipient?: boolean
    recipient_phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    customer_email?: boolean
    delivery_address?: boolean
    delivery_district?: boolean
    delivery_datetime?: boolean
    needs_card?: boolean
    card_text?: boolean
    is_different_recipient?: boolean
    recipient_phone?: boolean
    created_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_name" | "customer_phone" | "customer_email" | "delivery_address" | "delivery_district" | "delivery_datetime" | "needs_card" | "card_text" | "is_different_recipient" | "recipient_phone" | "created_at", ExtArgs["result"]["orders"]>

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_name: string
      customer_phone: string
      customer_email: string | null
      delivery_address: string
      delivery_district: string
      delivery_datetime: Date
      needs_card: boolean
      card_text: string | null
      is_different_recipient: boolean
      recipient_phone: string | null
      created_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly customer_name: FieldRef<"orders", 'String'>
    readonly customer_phone: FieldRef<"orders", 'String'>
    readonly customer_email: FieldRef<"orders", 'String'>
    readonly delivery_address: FieldRef<"orders", 'String'>
    readonly delivery_district: FieldRef<"orders", 'String'>
    readonly delivery_datetime: FieldRef<"orders", 'DateTime'>
    readonly needs_card: FieldRef<"orders", 'Boolean'>
    readonly card_text: FieldRef<"orders", 'String'>
    readonly is_different_recipient: FieldRef<"orders", 'Boolean'>
    readonly recipient_phone: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
  }


  /**
   * Model product_images
   */

  export type AggregateProduct_images = {
    _count: Product_imagesCountAggregateOutputType | null
    _avg: Product_imagesAvgAggregateOutputType | null
    _sum: Product_imagesSumAggregateOutputType | null
    _min: Product_imagesMinAggregateOutputType | null
    _max: Product_imagesMaxAggregateOutputType | null
  }

  export type Product_imagesAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    display_order: number | null
  }

  export type Product_imagesSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    display_order: number | null
  }

  export type Product_imagesMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    image_url: string | null
    is_primary: boolean | null
    display_order: number | null
  }

  export type Product_imagesMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    image_url: string | null
    is_primary: boolean | null
    display_order: number | null
  }

  export type Product_imagesCountAggregateOutputType = {
    id: number
    product_id: number
    image_url: number
    is_primary: number
    display_order: number
    _all: number
  }


  export type Product_imagesAvgAggregateInputType = {
    id?: true
    product_id?: true
    display_order?: true
  }

  export type Product_imagesSumAggregateInputType = {
    id?: true
    product_id?: true
    display_order?: true
  }

  export type Product_imagesMinAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
    is_primary?: true
    display_order?: true
  }

  export type Product_imagesMaxAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
    is_primary?: true
    display_order?: true
  }

  export type Product_imagesCountAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
    is_primary?: true
    display_order?: true
    _all?: true
  }

  export type Product_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to aggregate.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_images
    **/
    _count?: true | Product_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_imagesMaxAggregateInputType
  }

  export type GetProduct_imagesAggregateType<T extends Product_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_images[P]>
      : GetScalarType<T[P], AggregateProduct_images[P]>
  }




  export type product_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imagesWhereInput
    orderBy?: product_imagesOrderByWithAggregationInput | product_imagesOrderByWithAggregationInput[]
    by: Product_imagesScalarFieldEnum[] | Product_imagesScalarFieldEnum
    having?: product_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_imagesCountAggregateInputType | true
    _avg?: Product_imagesAvgAggregateInputType
    _sum?: Product_imagesSumAggregateInputType
    _min?: Product_imagesMinAggregateInputType
    _max?: Product_imagesMaxAggregateInputType
  }

  export type Product_imagesGroupByOutputType = {
    id: number
    product_id: number | null
    image_url: string
    is_primary: boolean | null
    display_order: number | null
    _count: Product_imagesCountAggregateOutputType | null
    _avg: Product_imagesAvgAggregateOutputType | null
    _sum: Product_imagesSumAggregateOutputType | null
    _min: Product_imagesMinAggregateOutputType | null
    _max: Product_imagesMaxAggregateOutputType | null
  }

  type GetProduct_imagesGroupByPayload<T extends product_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_imagesGroupByOutputType[P]>
        }
      >
    >


  export type product_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    image_url?: boolean
    is_primary?: boolean
    display_order?: boolean
    products?: boolean | product_images$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    image_url?: boolean
    is_primary?: boolean
    display_order?: boolean
    products?: boolean | product_images$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    image_url?: boolean
    is_primary?: boolean
    display_order?: boolean
    products?: boolean | product_images$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectScalar = {
    id?: boolean
    product_id?: boolean
    image_url?: boolean
    is_primary?: boolean
    display_order?: boolean
  }

  export type product_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "image_url" | "is_primary" | "display_order", ExtArgs["result"]["product_images"]>
  export type product_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_images$productsArgs<ExtArgs>
  }
  export type product_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_images$productsArgs<ExtArgs>
  }
  export type product_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_images$productsArgs<ExtArgs>
  }

  export type $product_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_images"
    objects: {
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number | null
      image_url: string
      is_primary: boolean | null
      display_order: number | null
    }, ExtArgs["result"]["product_images"]>
    composites: {}
  }

  type product_imagesGetPayload<S extends boolean | null | undefined | product_imagesDefaultArgs> = $Result.GetResult<Prisma.$product_imagesPayload, S>

  type product_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_imagesCountAggregateInputType | true
    }

  export interface product_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_images'], meta: { name: 'product_images' } }
    /**
     * Find zero or one Product_images that matches the filter.
     * @param {product_imagesFindUniqueArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_imagesFindUniqueArgs>(args: SelectSubset<T, product_imagesFindUniqueArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_imagesFindUniqueOrThrowArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindFirstArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_imagesFindFirstArgs>(args?: SelectSubset<T, product_imagesFindFirstArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindFirstOrThrowArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_images
     * const product_images = await prisma.product_images.findMany()
     * 
     * // Get first 10 Product_images
     * const product_images = await prisma.product_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_imagesFindManyArgs>(args?: SelectSubset<T, product_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_images.
     * @param {product_imagesCreateArgs} args - Arguments to create a Product_images.
     * @example
     * // Create one Product_images
     * const Product_images = await prisma.product_images.create({
     *   data: {
     *     // ... data to create a Product_images
     *   }
     * })
     * 
     */
    create<T extends product_imagesCreateArgs>(args: SelectSubset<T, product_imagesCreateArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_images.
     * @param {product_imagesCreateManyArgs} args - Arguments to create many Product_images.
     * @example
     * // Create many Product_images
     * const product_images = await prisma.product_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_imagesCreateManyArgs>(args?: SelectSubset<T, product_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_images and returns the data saved in the database.
     * @param {product_imagesCreateManyAndReturnArgs} args - Arguments to create many Product_images.
     * @example
     * // Create many Product_images
     * const product_images = await prisma.product_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_images and only return the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, product_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_images.
     * @param {product_imagesDeleteArgs} args - Arguments to delete one Product_images.
     * @example
     * // Delete one Product_images
     * const Product_images = await prisma.product_images.delete({
     *   where: {
     *     // ... filter to delete one Product_images
     *   }
     * })
     * 
     */
    delete<T extends product_imagesDeleteArgs>(args: SelectSubset<T, product_imagesDeleteArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_images.
     * @param {product_imagesUpdateArgs} args - Arguments to update one Product_images.
     * @example
     * // Update one Product_images
     * const product_images = await prisma.product_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_imagesUpdateArgs>(args: SelectSubset<T, product_imagesUpdateArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_images.
     * @param {product_imagesDeleteManyArgs} args - Arguments to filter Product_images to delete.
     * @example
     * // Delete a few Product_images
     * const { count } = await prisma.product_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_imagesDeleteManyArgs>(args?: SelectSubset<T, product_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_images
     * const product_images = await prisma.product_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_imagesUpdateManyArgs>(args: SelectSubset<T, product_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images and returns the data updated in the database.
     * @param {product_imagesUpdateManyAndReturnArgs} args - Arguments to update many Product_images.
     * @example
     * // Update many Product_images
     * const product_images = await prisma.product_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_images and only return the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, product_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_images.
     * @param {product_imagesUpsertArgs} args - Arguments to update or create a Product_images.
     * @example
     * // Update or create a Product_images
     * const product_images = await prisma.product_images.upsert({
     *   create: {
     *     // ... data to create a Product_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_images we want to update
     *   }
     * })
     */
    upsert<T extends product_imagesUpsertArgs>(args: SelectSubset<T, product_imagesUpsertArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesCountArgs} args - Arguments to filter Product_images to count.
     * @example
     * // Count the number of Product_images
     * const count = await prisma.product_images.count({
     *   where: {
     *     // ... the filter for the Product_images we want to count
     *   }
     * })
    **/
    count<T extends product_imagesCountArgs>(
      args?: Subset<T, product_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_imagesAggregateArgs>(args: Subset<T, Product_imagesAggregateArgs>): Prisma.PrismaPromise<GetProduct_imagesAggregateType<T>>

    /**
     * Group by Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesGroupByArgs} args - Group by arguments.
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
      T extends product_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_imagesGroupByArgs['orderBy'] }
        : { orderBy?: product_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_images model
   */
  readonly fields: product_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends product_images$productsArgs<ExtArgs> = {}>(args?: Subset<T, product_images$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the product_images model
   */
  interface product_imagesFieldRefs {
    readonly id: FieldRef<"product_images", 'Int'>
    readonly product_id: FieldRef<"product_images", 'Int'>
    readonly image_url: FieldRef<"product_images", 'String'>
    readonly is_primary: FieldRef<"product_images", 'Boolean'>
    readonly display_order: FieldRef<"product_images", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product_images findUnique
   */
  export type product_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images findUniqueOrThrow
   */
  export type product_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images findFirst
   */
  export type product_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images findFirstOrThrow
   */
  export type product_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images findMany
   */
  export type product_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images create
   */
  export type product_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_images.
     */
    data: XOR<product_imagesCreateInput, product_imagesUncheckedCreateInput>
  }

  /**
   * product_images createMany
   */
  export type product_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_images.
     */
    data: product_imagesCreateManyInput | product_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_images createManyAndReturn
   */
  export type product_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many product_images.
     */
    data: product_imagesCreateManyInput | product_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_images update
   */
  export type product_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_images.
     */
    data: XOR<product_imagesUpdateInput, product_imagesUncheckedUpdateInput>
    /**
     * Choose, which product_images to update.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images updateMany
   */
  export type product_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to update.
     */
    limit?: number
  }

  /**
   * product_images updateManyAndReturn
   */
  export type product_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_images upsert
   */
  export type product_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_images to update in case it exists.
     */
    where: product_imagesWhereUniqueInput
    /**
     * In case the product_images found by the `where` argument doesn't exist, create a new product_images with this data.
     */
    create: XOR<product_imagesCreateInput, product_imagesUncheckedCreateInput>
    /**
     * In case the product_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_imagesUpdateInput, product_imagesUncheckedUpdateInput>
  }

  /**
   * product_images delete
   */
  export type product_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter which product_images to delete.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images deleteMany
   */
  export type product_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to delete
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to delete.
     */
    limit?: number
  }

  /**
   * product_images.products
   */
  export type product_images$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * product_images without action
   */
  export type product_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    width: number | null
    height: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: number | null
    width: number | null
    height: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    descriptionRu: string | null
    price: number | null
    category: string | null
    occasion: string | null
    width: number | null
    height: number | null
    expiryDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    is_active: boolean | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    descriptionRu: string | null
    price: number | null
    category: string | null
    occasion: string | null
    width: number | null
    height: number | null
    expiryDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    is_active: boolean | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    descriptionRu: number
    price: number
    category: number
    status: number
    image: number
    occasion: number
    width: number
    height: number
    items: number
    expiryDate: number
    createdAt: number
    updatedAt: number
    is_active: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    width?: true
    height?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    width?: true
    height?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    descriptionRu?: true
    price?: true
    category?: true
    occasion?: true
    width?: true
    height?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
    is_active?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    descriptionRu?: true
    price?: true
    category?: true
    occasion?: true
    width?: true
    height?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
    is_active?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    descriptionRu?: true
    price?: true
    category?: true
    status?: true
    image?: true
    occasion?: true
    width?: true
    height?: true
    items?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
    is_active?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    descriptionRu: string | null
    price: number | null
    category: string | null
    status: JsonValue | null
    image: JsonValue | null
    occasion: string | null
    width: number | null
    height: number | null
    items: JsonValue | null
    expiryDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    is_active: boolean
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    descriptionRu?: boolean
    price?: boolean
    category?: boolean
    status?: boolean
    image?: boolean
    occasion?: boolean
    width?: boolean
    height?: boolean
    items?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    is_active?: boolean
    product_categories?: boolean | products$product_categoriesArgs<ExtArgs>
    product_images?: boolean | products$product_imagesArgs<ExtArgs>
    product_occasions?: boolean | products$product_occasionsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    descriptionRu?: boolean
    price?: boolean
    category?: boolean
    status?: boolean
    image?: boolean
    occasion?: boolean
    width?: boolean
    height?: boolean
    items?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    descriptionRu?: boolean
    price?: boolean
    category?: boolean
    status?: boolean
    image?: boolean
    occasion?: boolean
    width?: boolean
    height?: boolean
    items?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    descriptionRu?: boolean
    price?: boolean
    category?: boolean
    status?: boolean
    image?: boolean
    occasion?: boolean
    width?: boolean
    height?: boolean
    items?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    is_active?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "descriptionRu" | "price" | "category" | "status" | "image" | "occasion" | "width" | "height" | "items" | "expiryDate" | "createdAt" | "updatedAt" | "is_active", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_categories?: boolean | products$product_categoriesArgs<ExtArgs>
    product_images?: boolean | products$product_imagesArgs<ExtArgs>
    product_occasions?: boolean | products$product_occasionsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      product_categories: Prisma.$product_categoriesPayload<ExtArgs>[]
      product_images: Prisma.$product_imagesPayload<ExtArgs>[]
      product_occasions: Prisma.$product_occasionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      descriptionRu: string | null
      price: number | null
      category: string | null
      status: Prisma.JsonValue | null
      image: Prisma.JsonValue | null
      occasion: string | null
      width: number | null
      height: number | null
      items: Prisma.JsonValue | null
      expiryDate: string | null
      createdAt: Date | null
      updatedAt: Date | null
      is_active: boolean
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_categories<T extends products$product_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$product_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_images<T extends products$product_imagesArgs<ExtArgs> = {}>(args?: Subset<T, products$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_occasions<T extends products$product_occasionsArgs<ExtArgs> = {}>(args?: Subset<T, products$product_occasionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly descriptionRu: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Int'>
    readonly category: FieldRef<"products", 'String'>
    readonly status: FieldRef<"products", 'Json'>
    readonly image: FieldRef<"products", 'Json'>
    readonly occasion: FieldRef<"products", 'String'>
    readonly width: FieldRef<"products", 'Int'>
    readonly height: FieldRef<"products", 'Int'>
    readonly items: FieldRef<"products", 'Json'>
    readonly expiryDate: FieldRef<"products", 'String'>
    readonly createdAt: FieldRef<"products", 'DateTime'>
    readonly updatedAt: FieldRef<"products", 'DateTime'>
    readonly is_active: FieldRef<"products", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.product_categories
   */
  export type products$product_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    where?: product_categoriesWhereInput
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    cursor?: product_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * products.product_images
   */
  export type products$product_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    where?: product_imagesWhereInput
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    cursor?: product_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * products.product_occasions
   */
  export type products$product_occasionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    where?: product_occasionsWhereInput
    orderBy?: product_occasionsOrderByWithRelationInput | product_occasionsOrderByWithRelationInput[]
    cursor?: product_occasionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_occasionsScalarFieldEnum | Product_occasionsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model occasions
   */

  export type AggregateOccasions = {
    _count: OccasionsCountAggregateOutputType | null
    _avg: OccasionsAvgAggregateOutputType | null
    _sum: OccasionsSumAggregateOutputType | null
    _min: OccasionsMinAggregateOutputType | null
    _max: OccasionsMaxAggregateOutputType | null
  }

  export type OccasionsAvgAggregateOutputType = {
    id: number | null
  }

  export type OccasionsSumAggregateOutputType = {
    id: number | null
  }

  export type OccasionsMinAggregateOutputType = {
    id: number | null
    slug: string | null
    label: string | null
  }

  export type OccasionsMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    label: string | null
  }

  export type OccasionsCountAggregateOutputType = {
    id: number
    slug: number
    label: number
    _all: number
  }


  export type OccasionsAvgAggregateInputType = {
    id?: true
  }

  export type OccasionsSumAggregateInputType = {
    id?: true
  }

  export type OccasionsMinAggregateInputType = {
    id?: true
    slug?: true
    label?: true
  }

  export type OccasionsMaxAggregateInputType = {
    id?: true
    slug?: true
    label?: true
  }

  export type OccasionsCountAggregateInputType = {
    id?: true
    slug?: true
    label?: true
    _all?: true
  }

  export type OccasionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which occasions to aggregate.
     */
    where?: occasionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of occasions to fetch.
     */
    orderBy?: occasionsOrderByWithRelationInput | occasionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: occasionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned occasions
    **/
    _count?: true | OccasionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccasionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccasionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccasionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccasionsMaxAggregateInputType
  }

  export type GetOccasionsAggregateType<T extends OccasionsAggregateArgs> = {
        [P in keyof T & keyof AggregateOccasions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccasions[P]>
      : GetScalarType<T[P], AggregateOccasions[P]>
  }




  export type occasionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: occasionsWhereInput
    orderBy?: occasionsOrderByWithAggregationInput | occasionsOrderByWithAggregationInput[]
    by: OccasionsScalarFieldEnum[] | OccasionsScalarFieldEnum
    having?: occasionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccasionsCountAggregateInputType | true
    _avg?: OccasionsAvgAggregateInputType
    _sum?: OccasionsSumAggregateInputType
    _min?: OccasionsMinAggregateInputType
    _max?: OccasionsMaxAggregateInputType
  }

  export type OccasionsGroupByOutputType = {
    id: number
    slug: string
    label: string
    _count: OccasionsCountAggregateOutputType | null
    _avg: OccasionsAvgAggregateOutputType | null
    _sum: OccasionsSumAggregateOutputType | null
    _min: OccasionsMinAggregateOutputType | null
    _max: OccasionsMaxAggregateOutputType | null
  }

  type GetOccasionsGroupByPayload<T extends occasionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccasionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccasionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccasionsGroupByOutputType[P]>
            : GetScalarType<T[P], OccasionsGroupByOutputType[P]>
        }
      >
    >


  export type occasionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
    product_occasions?: boolean | occasions$product_occasionsArgs<ExtArgs>
    _count?: boolean | OccasionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occasions"]>

  export type occasionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
  }, ExtArgs["result"]["occasions"]>

  export type occasionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
  }, ExtArgs["result"]["occasions"]>

  export type occasionsSelectScalar = {
    id?: boolean
    slug?: boolean
    label?: boolean
  }

  export type occasionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "label", ExtArgs["result"]["occasions"]>
  export type occasionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_occasions?: boolean | occasions$product_occasionsArgs<ExtArgs>
    _count?: boolean | OccasionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type occasionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type occasionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $occasionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "occasions"
    objects: {
      product_occasions: Prisma.$product_occasionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      label: string
    }, ExtArgs["result"]["occasions"]>
    composites: {}
  }

  type occasionsGetPayload<S extends boolean | null | undefined | occasionsDefaultArgs> = $Result.GetResult<Prisma.$occasionsPayload, S>

  type occasionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<occasionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccasionsCountAggregateInputType | true
    }

  export interface occasionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['occasions'], meta: { name: 'occasions' } }
    /**
     * Find zero or one Occasions that matches the filter.
     * @param {occasionsFindUniqueArgs} args - Arguments to find a Occasions
     * @example
     * // Get one Occasions
     * const occasions = await prisma.occasions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends occasionsFindUniqueArgs>(args: SelectSubset<T, occasionsFindUniqueArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Occasions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {occasionsFindUniqueOrThrowArgs} args - Arguments to find a Occasions
     * @example
     * // Get one Occasions
     * const occasions = await prisma.occasions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends occasionsFindUniqueOrThrowArgs>(args: SelectSubset<T, occasionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Occasions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {occasionsFindFirstArgs} args - Arguments to find a Occasions
     * @example
     * // Get one Occasions
     * const occasions = await prisma.occasions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends occasionsFindFirstArgs>(args?: SelectSubset<T, occasionsFindFirstArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Occasions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {occasionsFindFirstOrThrowArgs} args - Arguments to find a Occasions
     * @example
     * // Get one Occasions
     * const occasions = await prisma.occasions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends occasionsFindFirstOrThrowArgs>(args?: SelectSubset<T, occasionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Occasions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {occasionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Occasions
     * const occasions = await prisma.occasions.findMany()
     * 
     * // Get first 10 Occasions
     * const occasions = await prisma.occasions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occasionsWithIdOnly = await prisma.occasions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends occasionsFindManyArgs>(args?: SelectSubset<T, occasionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Occasions.
     * @param {occasionsCreateArgs} args - Arguments to create a Occasions.
     * @example
     * // Create one Occasions
     * const Occasions = await prisma.occasions.create({
     *   data: {
     *     // ... data to create a Occasions
     *   }
     * })
     * 
     */
    create<T extends occasionsCreateArgs>(args: SelectSubset<T, occasionsCreateArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Occasions.
     * @param {occasionsCreateManyArgs} args - Arguments to create many Occasions.
     * @example
     * // Create many Occasions
     * const occasions = await prisma.occasions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends occasionsCreateManyArgs>(args?: SelectSubset<T, occasionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Occasions and returns the data saved in the database.
     * @param {occasionsCreateManyAndReturnArgs} args - Arguments to create many Occasions.
     * @example
     * // Create many Occasions
     * const occasions = await prisma.occasions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Occasions and only return the `id`
     * const occasionsWithIdOnly = await prisma.occasions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends occasionsCreateManyAndReturnArgs>(args?: SelectSubset<T, occasionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Occasions.
     * @param {occasionsDeleteArgs} args - Arguments to delete one Occasions.
     * @example
     * // Delete one Occasions
     * const Occasions = await prisma.occasions.delete({
     *   where: {
     *     // ... filter to delete one Occasions
     *   }
     * })
     * 
     */
    delete<T extends occasionsDeleteArgs>(args: SelectSubset<T, occasionsDeleteArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Occasions.
     * @param {occasionsUpdateArgs} args - Arguments to update one Occasions.
     * @example
     * // Update one Occasions
     * const occasions = await prisma.occasions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends occasionsUpdateArgs>(args: SelectSubset<T, occasionsUpdateArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Occasions.
     * @param {occasionsDeleteManyArgs} args - Arguments to filter Occasions to delete.
     * @example
     * // Delete a few Occasions
     * const { count } = await prisma.occasions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends occasionsDeleteManyArgs>(args?: SelectSubset<T, occasionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {occasionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Occasions
     * const occasions = await prisma.occasions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends occasionsUpdateManyArgs>(args: SelectSubset<T, occasionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occasions and returns the data updated in the database.
     * @param {occasionsUpdateManyAndReturnArgs} args - Arguments to update many Occasions.
     * @example
     * // Update many Occasions
     * const occasions = await prisma.occasions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Occasions and only return the `id`
     * const occasionsWithIdOnly = await prisma.occasions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends occasionsUpdateManyAndReturnArgs>(args: SelectSubset<T, occasionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Occasions.
     * @param {occasionsUpsertArgs} args - Arguments to update or create a Occasions.
     * @example
     * // Update or create a Occasions
     * const occasions = await prisma.occasions.upsert({
     *   create: {
     *     // ... data to create a Occasions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Occasions we want to update
     *   }
     * })
     */
    upsert<T extends occasionsUpsertArgs>(args: SelectSubset<T, occasionsUpsertArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {occasionsCountArgs} args - Arguments to filter Occasions to count.
     * @example
     * // Count the number of Occasions
     * const count = await prisma.occasions.count({
     *   where: {
     *     // ... the filter for the Occasions we want to count
     *   }
     * })
    **/
    count<T extends occasionsCountArgs>(
      args?: Subset<T, occasionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccasionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccasionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccasionsAggregateArgs>(args: Subset<T, OccasionsAggregateArgs>): Prisma.PrismaPromise<GetOccasionsAggregateType<T>>

    /**
     * Group by Occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {occasionsGroupByArgs} args - Group by arguments.
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
      T extends occasionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: occasionsGroupByArgs['orderBy'] }
        : { orderBy?: occasionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, occasionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccasionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the occasions model
   */
  readonly fields: occasionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for occasions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__occasionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_occasions<T extends occasions$product_occasionsArgs<ExtArgs> = {}>(args?: Subset<T, occasions$product_occasionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the occasions model
   */
  interface occasionsFieldRefs {
    readonly id: FieldRef<"occasions", 'Int'>
    readonly slug: FieldRef<"occasions", 'String'>
    readonly label: FieldRef<"occasions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * occasions findUnique
   */
  export type occasionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * Filter, which occasions to fetch.
     */
    where: occasionsWhereUniqueInput
  }

  /**
   * occasions findUniqueOrThrow
   */
  export type occasionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * Filter, which occasions to fetch.
     */
    where: occasionsWhereUniqueInput
  }

  /**
   * occasions findFirst
   */
  export type occasionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * Filter, which occasions to fetch.
     */
    where?: occasionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of occasions to fetch.
     */
    orderBy?: occasionsOrderByWithRelationInput | occasionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for occasions.
     */
    cursor?: occasionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of occasions.
     */
    distinct?: OccasionsScalarFieldEnum | OccasionsScalarFieldEnum[]
  }

  /**
   * occasions findFirstOrThrow
   */
  export type occasionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * Filter, which occasions to fetch.
     */
    where?: occasionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of occasions to fetch.
     */
    orderBy?: occasionsOrderByWithRelationInput | occasionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for occasions.
     */
    cursor?: occasionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of occasions.
     */
    distinct?: OccasionsScalarFieldEnum | OccasionsScalarFieldEnum[]
  }

  /**
   * occasions findMany
   */
  export type occasionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * Filter, which occasions to fetch.
     */
    where?: occasionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of occasions to fetch.
     */
    orderBy?: occasionsOrderByWithRelationInput | occasionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing occasions.
     */
    cursor?: occasionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` occasions.
     */
    skip?: number
    distinct?: OccasionsScalarFieldEnum | OccasionsScalarFieldEnum[]
  }

  /**
   * occasions create
   */
  export type occasionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * The data needed to create a occasions.
     */
    data: XOR<occasionsCreateInput, occasionsUncheckedCreateInput>
  }

  /**
   * occasions createMany
   */
  export type occasionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many occasions.
     */
    data: occasionsCreateManyInput | occasionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * occasions createManyAndReturn
   */
  export type occasionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * The data used to create many occasions.
     */
    data: occasionsCreateManyInput | occasionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * occasions update
   */
  export type occasionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * The data needed to update a occasions.
     */
    data: XOR<occasionsUpdateInput, occasionsUncheckedUpdateInput>
    /**
     * Choose, which occasions to update.
     */
    where: occasionsWhereUniqueInput
  }

  /**
   * occasions updateMany
   */
  export type occasionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update occasions.
     */
    data: XOR<occasionsUpdateManyMutationInput, occasionsUncheckedUpdateManyInput>
    /**
     * Filter which occasions to update
     */
    where?: occasionsWhereInput
    /**
     * Limit how many occasions to update.
     */
    limit?: number
  }

  /**
   * occasions updateManyAndReturn
   */
  export type occasionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * The data used to update occasions.
     */
    data: XOR<occasionsUpdateManyMutationInput, occasionsUncheckedUpdateManyInput>
    /**
     * Filter which occasions to update
     */
    where?: occasionsWhereInput
    /**
     * Limit how many occasions to update.
     */
    limit?: number
  }

  /**
   * occasions upsert
   */
  export type occasionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * The filter to search for the occasions to update in case it exists.
     */
    where: occasionsWhereUniqueInput
    /**
     * In case the occasions found by the `where` argument doesn't exist, create a new occasions with this data.
     */
    create: XOR<occasionsCreateInput, occasionsUncheckedCreateInput>
    /**
     * In case the occasions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<occasionsUpdateInput, occasionsUncheckedUpdateInput>
  }

  /**
   * occasions delete
   */
  export type occasionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
    /**
     * Filter which occasions to delete.
     */
    where: occasionsWhereUniqueInput
  }

  /**
   * occasions deleteMany
   */
  export type occasionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which occasions to delete
     */
    where?: occasionsWhereInput
    /**
     * Limit how many occasions to delete.
     */
    limit?: number
  }

  /**
   * occasions.product_occasions
   */
  export type occasions$product_occasionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    where?: product_occasionsWhereInput
    orderBy?: product_occasionsOrderByWithRelationInput | product_occasionsOrderByWithRelationInput[]
    cursor?: product_occasionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_occasionsScalarFieldEnum | Product_occasionsScalarFieldEnum[]
  }

  /**
   * occasions without action
   */
  export type occasionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the occasions
     */
    select?: occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the occasions
     */
    omit?: occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: occasionsInclude<ExtArgs> | null
  }


  /**
   * Model product_occasions
   */

  export type AggregateProduct_occasions = {
    _count: Product_occasionsCountAggregateOutputType | null
    _avg: Product_occasionsAvgAggregateOutputType | null
    _sum: Product_occasionsSumAggregateOutputType | null
    _min: Product_occasionsMinAggregateOutputType | null
    _max: Product_occasionsMaxAggregateOutputType | null
  }

  export type Product_occasionsAvgAggregateOutputType = {
    product_id: number | null
    occasion_id: number | null
  }

  export type Product_occasionsSumAggregateOutputType = {
    product_id: number | null
    occasion_id: number | null
  }

  export type Product_occasionsMinAggregateOutputType = {
    product_id: number | null
    occasion_id: number | null
  }

  export type Product_occasionsMaxAggregateOutputType = {
    product_id: number | null
    occasion_id: number | null
  }

  export type Product_occasionsCountAggregateOutputType = {
    product_id: number
    occasion_id: number
    _all: number
  }


  export type Product_occasionsAvgAggregateInputType = {
    product_id?: true
    occasion_id?: true
  }

  export type Product_occasionsSumAggregateInputType = {
    product_id?: true
    occasion_id?: true
  }

  export type Product_occasionsMinAggregateInputType = {
    product_id?: true
    occasion_id?: true
  }

  export type Product_occasionsMaxAggregateInputType = {
    product_id?: true
    occasion_id?: true
  }

  export type Product_occasionsCountAggregateInputType = {
    product_id?: true
    occasion_id?: true
    _all?: true
  }

  export type Product_occasionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_occasions to aggregate.
     */
    where?: product_occasionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_occasions to fetch.
     */
    orderBy?: product_occasionsOrderByWithRelationInput | product_occasionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_occasionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_occasions
    **/
    _count?: true | Product_occasionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_occasionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_occasionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_occasionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_occasionsMaxAggregateInputType
  }

  export type GetProduct_occasionsAggregateType<T extends Product_occasionsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_occasions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_occasions[P]>
      : GetScalarType<T[P], AggregateProduct_occasions[P]>
  }




  export type product_occasionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_occasionsWhereInput
    orderBy?: product_occasionsOrderByWithAggregationInput | product_occasionsOrderByWithAggregationInput[]
    by: Product_occasionsScalarFieldEnum[] | Product_occasionsScalarFieldEnum
    having?: product_occasionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_occasionsCountAggregateInputType | true
    _avg?: Product_occasionsAvgAggregateInputType
    _sum?: Product_occasionsSumAggregateInputType
    _min?: Product_occasionsMinAggregateInputType
    _max?: Product_occasionsMaxAggregateInputType
  }

  export type Product_occasionsGroupByOutputType = {
    product_id: number
    occasion_id: number
    _count: Product_occasionsCountAggregateOutputType | null
    _avg: Product_occasionsAvgAggregateOutputType | null
    _sum: Product_occasionsSumAggregateOutputType | null
    _min: Product_occasionsMinAggregateOutputType | null
    _max: Product_occasionsMaxAggregateOutputType | null
  }

  type GetProduct_occasionsGroupByPayload<T extends product_occasionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_occasionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_occasionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_occasionsGroupByOutputType[P]>
            : GetScalarType<T[P], Product_occasionsGroupByOutputType[P]>
        }
      >
    >


  export type product_occasionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    occasion_id?: boolean
    occasions?: boolean | occasionsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_occasions"]>

  export type product_occasionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    occasion_id?: boolean
    occasions?: boolean | occasionsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_occasions"]>

  export type product_occasionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    occasion_id?: boolean
    occasions?: boolean | occasionsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_occasions"]>

  export type product_occasionsSelectScalar = {
    product_id?: boolean
    occasion_id?: boolean
  }

  export type product_occasionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "occasion_id", ExtArgs["result"]["product_occasions"]>
  export type product_occasionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occasions?: boolean | occasionsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_occasionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occasions?: boolean | occasionsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_occasionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occasions?: boolean | occasionsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $product_occasionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_occasions"
    objects: {
      occasions: Prisma.$occasionsPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      occasion_id: number
    }, ExtArgs["result"]["product_occasions"]>
    composites: {}
  }

  type product_occasionsGetPayload<S extends boolean | null | undefined | product_occasionsDefaultArgs> = $Result.GetResult<Prisma.$product_occasionsPayload, S>

  type product_occasionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_occasionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_occasionsCountAggregateInputType | true
    }

  export interface product_occasionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_occasions'], meta: { name: 'product_occasions' } }
    /**
     * Find zero or one Product_occasions that matches the filter.
     * @param {product_occasionsFindUniqueArgs} args - Arguments to find a Product_occasions
     * @example
     * // Get one Product_occasions
     * const product_occasions = await prisma.product_occasions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_occasionsFindUniqueArgs>(args: SelectSubset<T, product_occasionsFindUniqueArgs<ExtArgs>>): Prisma__product_occasionsClient<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_occasions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_occasionsFindUniqueOrThrowArgs} args - Arguments to find a Product_occasions
     * @example
     * // Get one Product_occasions
     * const product_occasions = await prisma.product_occasions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_occasionsFindUniqueOrThrowArgs>(args: SelectSubset<T, product_occasionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_occasionsClient<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_occasions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_occasionsFindFirstArgs} args - Arguments to find a Product_occasions
     * @example
     * // Get one Product_occasions
     * const product_occasions = await prisma.product_occasions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_occasionsFindFirstArgs>(args?: SelectSubset<T, product_occasionsFindFirstArgs<ExtArgs>>): Prisma__product_occasionsClient<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_occasions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_occasionsFindFirstOrThrowArgs} args - Arguments to find a Product_occasions
     * @example
     * // Get one Product_occasions
     * const product_occasions = await prisma.product_occasions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_occasionsFindFirstOrThrowArgs>(args?: SelectSubset<T, product_occasionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_occasionsClient<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_occasions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_occasionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_occasions
     * const product_occasions = await prisma.product_occasions.findMany()
     * 
     * // Get first 10 Product_occasions
     * const product_occasions = await prisma.product_occasions.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const product_occasionsWithProduct_idOnly = await prisma.product_occasions.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends product_occasionsFindManyArgs>(args?: SelectSubset<T, product_occasionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_occasions.
     * @param {product_occasionsCreateArgs} args - Arguments to create a Product_occasions.
     * @example
     * // Create one Product_occasions
     * const Product_occasions = await prisma.product_occasions.create({
     *   data: {
     *     // ... data to create a Product_occasions
     *   }
     * })
     * 
     */
    create<T extends product_occasionsCreateArgs>(args: SelectSubset<T, product_occasionsCreateArgs<ExtArgs>>): Prisma__product_occasionsClient<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_occasions.
     * @param {product_occasionsCreateManyArgs} args - Arguments to create many Product_occasions.
     * @example
     * // Create many Product_occasions
     * const product_occasions = await prisma.product_occasions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_occasionsCreateManyArgs>(args?: SelectSubset<T, product_occasionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_occasions and returns the data saved in the database.
     * @param {product_occasionsCreateManyAndReturnArgs} args - Arguments to create many Product_occasions.
     * @example
     * // Create many Product_occasions
     * const product_occasions = await prisma.product_occasions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_occasions and only return the `product_id`
     * const product_occasionsWithProduct_idOnly = await prisma.product_occasions.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_occasionsCreateManyAndReturnArgs>(args?: SelectSubset<T, product_occasionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_occasions.
     * @param {product_occasionsDeleteArgs} args - Arguments to delete one Product_occasions.
     * @example
     * // Delete one Product_occasions
     * const Product_occasions = await prisma.product_occasions.delete({
     *   where: {
     *     // ... filter to delete one Product_occasions
     *   }
     * })
     * 
     */
    delete<T extends product_occasionsDeleteArgs>(args: SelectSubset<T, product_occasionsDeleteArgs<ExtArgs>>): Prisma__product_occasionsClient<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_occasions.
     * @param {product_occasionsUpdateArgs} args - Arguments to update one Product_occasions.
     * @example
     * // Update one Product_occasions
     * const product_occasions = await prisma.product_occasions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_occasionsUpdateArgs>(args: SelectSubset<T, product_occasionsUpdateArgs<ExtArgs>>): Prisma__product_occasionsClient<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_occasions.
     * @param {product_occasionsDeleteManyArgs} args - Arguments to filter Product_occasions to delete.
     * @example
     * // Delete a few Product_occasions
     * const { count } = await prisma.product_occasions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_occasionsDeleteManyArgs>(args?: SelectSubset<T, product_occasionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_occasionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_occasions
     * const product_occasions = await prisma.product_occasions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_occasionsUpdateManyArgs>(args: SelectSubset<T, product_occasionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_occasions and returns the data updated in the database.
     * @param {product_occasionsUpdateManyAndReturnArgs} args - Arguments to update many Product_occasions.
     * @example
     * // Update many Product_occasions
     * const product_occasions = await prisma.product_occasions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_occasions and only return the `product_id`
     * const product_occasionsWithProduct_idOnly = await prisma.product_occasions.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_occasionsUpdateManyAndReturnArgs>(args: SelectSubset<T, product_occasionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_occasions.
     * @param {product_occasionsUpsertArgs} args - Arguments to update or create a Product_occasions.
     * @example
     * // Update or create a Product_occasions
     * const product_occasions = await prisma.product_occasions.upsert({
     *   create: {
     *     // ... data to create a Product_occasions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_occasions we want to update
     *   }
     * })
     */
    upsert<T extends product_occasionsUpsertArgs>(args: SelectSubset<T, product_occasionsUpsertArgs<ExtArgs>>): Prisma__product_occasionsClient<$Result.GetResult<Prisma.$product_occasionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_occasionsCountArgs} args - Arguments to filter Product_occasions to count.
     * @example
     * // Count the number of Product_occasions
     * const count = await prisma.product_occasions.count({
     *   where: {
     *     // ... the filter for the Product_occasions we want to count
     *   }
     * })
    **/
    count<T extends product_occasionsCountArgs>(
      args?: Subset<T, product_occasionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_occasionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_occasionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_occasionsAggregateArgs>(args: Subset<T, Product_occasionsAggregateArgs>): Prisma.PrismaPromise<GetProduct_occasionsAggregateType<T>>

    /**
     * Group by Product_occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_occasionsGroupByArgs} args - Group by arguments.
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
      T extends product_occasionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_occasionsGroupByArgs['orderBy'] }
        : { orderBy?: product_occasionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_occasionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_occasionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_occasions model
   */
  readonly fields: product_occasionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_occasions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_occasionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    occasions<T extends occasionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, occasionsDefaultArgs<ExtArgs>>): Prisma__occasionsClient<$Result.GetResult<Prisma.$occasionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the product_occasions model
   */
  interface product_occasionsFieldRefs {
    readonly product_id: FieldRef<"product_occasions", 'Int'>
    readonly occasion_id: FieldRef<"product_occasions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product_occasions findUnique
   */
  export type product_occasionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * Filter, which product_occasions to fetch.
     */
    where: product_occasionsWhereUniqueInput
  }

  /**
   * product_occasions findUniqueOrThrow
   */
  export type product_occasionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * Filter, which product_occasions to fetch.
     */
    where: product_occasionsWhereUniqueInput
  }

  /**
   * product_occasions findFirst
   */
  export type product_occasionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * Filter, which product_occasions to fetch.
     */
    where?: product_occasionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_occasions to fetch.
     */
    orderBy?: product_occasionsOrderByWithRelationInput | product_occasionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_occasions.
     */
    cursor?: product_occasionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_occasions.
     */
    distinct?: Product_occasionsScalarFieldEnum | Product_occasionsScalarFieldEnum[]
  }

  /**
   * product_occasions findFirstOrThrow
   */
  export type product_occasionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * Filter, which product_occasions to fetch.
     */
    where?: product_occasionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_occasions to fetch.
     */
    orderBy?: product_occasionsOrderByWithRelationInput | product_occasionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_occasions.
     */
    cursor?: product_occasionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_occasions.
     */
    distinct?: Product_occasionsScalarFieldEnum | Product_occasionsScalarFieldEnum[]
  }

  /**
   * product_occasions findMany
   */
  export type product_occasionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * Filter, which product_occasions to fetch.
     */
    where?: product_occasionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_occasions to fetch.
     */
    orderBy?: product_occasionsOrderByWithRelationInput | product_occasionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_occasions.
     */
    cursor?: product_occasionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_occasions.
     */
    skip?: number
    distinct?: Product_occasionsScalarFieldEnum | Product_occasionsScalarFieldEnum[]
  }

  /**
   * product_occasions create
   */
  export type product_occasionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * The data needed to create a product_occasions.
     */
    data: XOR<product_occasionsCreateInput, product_occasionsUncheckedCreateInput>
  }

  /**
   * product_occasions createMany
   */
  export type product_occasionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_occasions.
     */
    data: product_occasionsCreateManyInput | product_occasionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_occasions createManyAndReturn
   */
  export type product_occasionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * The data used to create many product_occasions.
     */
    data: product_occasionsCreateManyInput | product_occasionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_occasions update
   */
  export type product_occasionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * The data needed to update a product_occasions.
     */
    data: XOR<product_occasionsUpdateInput, product_occasionsUncheckedUpdateInput>
    /**
     * Choose, which product_occasions to update.
     */
    where: product_occasionsWhereUniqueInput
  }

  /**
   * product_occasions updateMany
   */
  export type product_occasionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_occasions.
     */
    data: XOR<product_occasionsUpdateManyMutationInput, product_occasionsUncheckedUpdateManyInput>
    /**
     * Filter which product_occasions to update
     */
    where?: product_occasionsWhereInput
    /**
     * Limit how many product_occasions to update.
     */
    limit?: number
  }

  /**
   * product_occasions updateManyAndReturn
   */
  export type product_occasionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * The data used to update product_occasions.
     */
    data: XOR<product_occasionsUpdateManyMutationInput, product_occasionsUncheckedUpdateManyInput>
    /**
     * Filter which product_occasions to update
     */
    where?: product_occasionsWhereInput
    /**
     * Limit how many product_occasions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_occasions upsert
   */
  export type product_occasionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * The filter to search for the product_occasions to update in case it exists.
     */
    where: product_occasionsWhereUniqueInput
    /**
     * In case the product_occasions found by the `where` argument doesn't exist, create a new product_occasions with this data.
     */
    create: XOR<product_occasionsCreateInput, product_occasionsUncheckedCreateInput>
    /**
     * In case the product_occasions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_occasionsUpdateInput, product_occasionsUncheckedUpdateInput>
  }

  /**
   * product_occasions delete
   */
  export type product_occasionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
    /**
     * Filter which product_occasions to delete.
     */
    where: product_occasionsWhereUniqueInput
  }

  /**
   * product_occasions deleteMany
   */
  export type product_occasionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_occasions to delete
     */
    where?: product_occasionsWhereInput
    /**
     * Limit how many product_occasions to delete.
     */
    limit?: number
  }

  /**
   * product_occasions without action
   */
  export type product_occasionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_occasions
     */
    select?: product_occasionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_occasions
     */
    omit?: product_occasionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_occasionsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    slug: string | null
    label: string | null
    image: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    label: string | null
    image: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    slug: number
    label: number
    image: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    slug?: true
    label?: true
    image?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    slug?: true
    label?: true
    image?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    slug?: true
    label?: true
    image?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    slug: string
    label: string
    image: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
    image?: boolean
    product_categories?: boolean | categories$product_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
    image?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    label?: boolean
    image?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    slug?: boolean
    label?: boolean
    image?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "label" | "image", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_categories?: boolean | categories$product_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      product_categories: Prisma.$product_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      label: string
      image: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_categories<T extends categories$product_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$product_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly slug: FieldRef<"categories", 'String'>
    readonly label: FieldRef<"categories", 'String'>
    readonly image: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.product_categories
   */
  export type categories$product_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    where?: product_categoriesWhereInput
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    cursor?: product_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model product_categories
   */

  export type AggregateProduct_categories = {
    _count: Product_categoriesCountAggregateOutputType | null
    _avg: Product_categoriesAvgAggregateOutputType | null
    _sum: Product_categoriesSumAggregateOutputType | null
    _min: Product_categoriesMinAggregateOutputType | null
    _max: Product_categoriesMaxAggregateOutputType | null
  }

  export type Product_categoriesAvgAggregateOutputType = {
    product_id: number | null
    category_id: number | null
  }

  export type Product_categoriesSumAggregateOutputType = {
    product_id: number | null
    category_id: number | null
  }

  export type Product_categoriesMinAggregateOutputType = {
    product_id: number | null
    category_id: number | null
  }

  export type Product_categoriesMaxAggregateOutputType = {
    product_id: number | null
    category_id: number | null
  }

  export type Product_categoriesCountAggregateOutputType = {
    product_id: number
    category_id: number
    _all: number
  }


  export type Product_categoriesAvgAggregateInputType = {
    product_id?: true
    category_id?: true
  }

  export type Product_categoriesSumAggregateInputType = {
    product_id?: true
    category_id?: true
  }

  export type Product_categoriesMinAggregateInputType = {
    product_id?: true
    category_id?: true
  }

  export type Product_categoriesMaxAggregateInputType = {
    product_id?: true
    category_id?: true
  }

  export type Product_categoriesCountAggregateInputType = {
    product_id?: true
    category_id?: true
    _all?: true
  }

  export type Product_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_categories to aggregate.
     */
    where?: product_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categories to fetch.
     */
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_categories
    **/
    _count?: true | Product_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_categoriesMaxAggregateInputType
  }

  export type GetProduct_categoriesAggregateType<T extends Product_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_categories[P]>
      : GetScalarType<T[P], AggregateProduct_categories[P]>
  }




  export type product_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_categoriesWhereInput
    orderBy?: product_categoriesOrderByWithAggregationInput | product_categoriesOrderByWithAggregationInput[]
    by: Product_categoriesScalarFieldEnum[] | Product_categoriesScalarFieldEnum
    having?: product_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_categoriesCountAggregateInputType | true
    _avg?: Product_categoriesAvgAggregateInputType
    _sum?: Product_categoriesSumAggregateInputType
    _min?: Product_categoriesMinAggregateInputType
    _max?: Product_categoriesMaxAggregateInputType
  }

  export type Product_categoriesGroupByOutputType = {
    product_id: number
    category_id: number
    _count: Product_categoriesCountAggregateOutputType | null
    _avg: Product_categoriesAvgAggregateOutputType | null
    _sum: Product_categoriesSumAggregateOutputType | null
    _min: Product_categoriesMinAggregateOutputType | null
    _max: Product_categoriesMaxAggregateOutputType | null
  }

  type GetProduct_categoriesGroupByPayload<T extends product_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type product_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_categories"]>

  export type product_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_categories"]>

  export type product_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_categories"]>

  export type product_categoriesSelectScalar = {
    product_id?: boolean
    category_id?: boolean
  }

  export type product_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "category_id", ExtArgs["result"]["product_categories"]>
  export type product_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type product_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $product_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_categories"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      category_id: number
    }, ExtArgs["result"]["product_categories"]>
    composites: {}
  }

  type product_categoriesGetPayload<S extends boolean | null | undefined | product_categoriesDefaultArgs> = $Result.GetResult<Prisma.$product_categoriesPayload, S>

  type product_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_categoriesCountAggregateInputType | true
    }

  export interface product_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_categories'], meta: { name: 'product_categories' } }
    /**
     * Find zero or one Product_categories that matches the filter.
     * @param {product_categoriesFindUniqueArgs} args - Arguments to find a Product_categories
     * @example
     * // Get one Product_categories
     * const product_categories = await prisma.product_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_categoriesFindUniqueArgs>(args: SelectSubset<T, product_categoriesFindUniqueArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Product_categories
     * @example
     * // Get one Product_categories
     * const product_categories = await prisma.product_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesFindFirstArgs} args - Arguments to find a Product_categories
     * @example
     * // Get one Product_categories
     * const product_categories = await prisma.product_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_categoriesFindFirstArgs>(args?: SelectSubset<T, product_categoriesFindFirstArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesFindFirstOrThrowArgs} args - Arguments to find a Product_categories
     * @example
     * // Get one Product_categories
     * const product_categories = await prisma.product_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_categories
     * const product_categories = await prisma.product_categories.findMany()
     * 
     * // Get first 10 Product_categories
     * const product_categories = await prisma.product_categories.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const product_categoriesWithProduct_idOnly = await prisma.product_categories.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends product_categoriesFindManyArgs>(args?: SelectSubset<T, product_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_categories.
     * @param {product_categoriesCreateArgs} args - Arguments to create a Product_categories.
     * @example
     * // Create one Product_categories
     * const Product_categories = await prisma.product_categories.create({
     *   data: {
     *     // ... data to create a Product_categories
     *   }
     * })
     * 
     */
    create<T extends product_categoriesCreateArgs>(args: SelectSubset<T, product_categoriesCreateArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_categories.
     * @param {product_categoriesCreateManyArgs} args - Arguments to create many Product_categories.
     * @example
     * // Create many Product_categories
     * const product_categories = await prisma.product_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_categoriesCreateManyArgs>(args?: SelectSubset<T, product_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_categories and returns the data saved in the database.
     * @param {product_categoriesCreateManyAndReturnArgs} args - Arguments to create many Product_categories.
     * @example
     * // Create many Product_categories
     * const product_categories = await prisma.product_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_categories and only return the `product_id`
     * const product_categoriesWithProduct_idOnly = await prisma.product_categories.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, product_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_categories.
     * @param {product_categoriesDeleteArgs} args - Arguments to delete one Product_categories.
     * @example
     * // Delete one Product_categories
     * const Product_categories = await prisma.product_categories.delete({
     *   where: {
     *     // ... filter to delete one Product_categories
     *   }
     * })
     * 
     */
    delete<T extends product_categoriesDeleteArgs>(args: SelectSubset<T, product_categoriesDeleteArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_categories.
     * @param {product_categoriesUpdateArgs} args - Arguments to update one Product_categories.
     * @example
     * // Update one Product_categories
     * const product_categories = await prisma.product_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_categoriesUpdateArgs>(args: SelectSubset<T, product_categoriesUpdateArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_categories.
     * @param {product_categoriesDeleteManyArgs} args - Arguments to filter Product_categories to delete.
     * @example
     * // Delete a few Product_categories
     * const { count } = await prisma.product_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_categoriesDeleteManyArgs>(args?: SelectSubset<T, product_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_categories
     * const product_categories = await prisma.product_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_categoriesUpdateManyArgs>(args: SelectSubset<T, product_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_categories and returns the data updated in the database.
     * @param {product_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Product_categories.
     * @example
     * // Update many Product_categories
     * const product_categories = await prisma.product_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_categories and only return the `product_id`
     * const product_categoriesWithProduct_idOnly = await prisma.product_categories.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, product_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_categories.
     * @param {product_categoriesUpsertArgs} args - Arguments to update or create a Product_categories.
     * @example
     * // Update or create a Product_categories
     * const product_categories = await prisma.product_categories.upsert({
     *   create: {
     *     // ... data to create a Product_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_categories we want to update
     *   }
     * })
     */
    upsert<T extends product_categoriesUpsertArgs>(args: SelectSubset<T, product_categoriesUpsertArgs<ExtArgs>>): Prisma__product_categoriesClient<$Result.GetResult<Prisma.$product_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesCountArgs} args - Arguments to filter Product_categories to count.
     * @example
     * // Count the number of Product_categories
     * const count = await prisma.product_categories.count({
     *   where: {
     *     // ... the filter for the Product_categories we want to count
     *   }
     * })
    **/
    count<T extends product_categoriesCountArgs>(
      args?: Subset<T, product_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_categoriesAggregateArgs>(args: Subset<T, Product_categoriesAggregateArgs>): Prisma.PrismaPromise<GetProduct_categoriesAggregateType<T>>

    /**
     * Group by Product_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesGroupByArgs} args - Group by arguments.
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
      T extends product_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: product_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_categories model
   */
  readonly fields: product_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the product_categories model
   */
  interface product_categoriesFieldRefs {
    readonly product_id: FieldRef<"product_categories", 'Int'>
    readonly category_id: FieldRef<"product_categories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product_categories findUnique
   */
  export type product_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where: product_categoriesWhereUniqueInput
  }

  /**
   * product_categories findUniqueOrThrow
   */
  export type product_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where: product_categoriesWhereUniqueInput
  }

  /**
   * product_categories findFirst
   */
  export type product_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where?: product_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categories to fetch.
     */
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_categories.
     */
    cursor?: product_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_categories.
     */
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * product_categories findFirstOrThrow
   */
  export type product_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where?: product_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categories to fetch.
     */
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_categories.
     */
    cursor?: product_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_categories.
     */
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * product_categories findMany
   */
  export type product_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which product_categories to fetch.
     */
    where?: product_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categories to fetch.
     */
    orderBy?: product_categoriesOrderByWithRelationInput | product_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_categories.
     */
    cursor?: product_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categories.
     */
    skip?: number
    distinct?: Product_categoriesScalarFieldEnum | Product_categoriesScalarFieldEnum[]
  }

  /**
   * product_categories create
   */
  export type product_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_categories.
     */
    data: XOR<product_categoriesCreateInput, product_categoriesUncheckedCreateInput>
  }

  /**
   * product_categories createMany
   */
  export type product_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_categories.
     */
    data: product_categoriesCreateManyInput | product_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_categories createManyAndReturn
   */
  export type product_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many product_categories.
     */
    data: product_categoriesCreateManyInput | product_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_categories update
   */
  export type product_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_categories.
     */
    data: XOR<product_categoriesUpdateInput, product_categoriesUncheckedUpdateInput>
    /**
     * Choose, which product_categories to update.
     */
    where: product_categoriesWhereUniqueInput
  }

  /**
   * product_categories updateMany
   */
  export type product_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_categories.
     */
    data: XOR<product_categoriesUpdateManyMutationInput, product_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which product_categories to update
     */
    where?: product_categoriesWhereInput
    /**
     * Limit how many product_categories to update.
     */
    limit?: number
  }

  /**
   * product_categories updateManyAndReturn
   */
  export type product_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update product_categories.
     */
    data: XOR<product_categoriesUpdateManyMutationInput, product_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which product_categories to update
     */
    where?: product_categoriesWhereInput
    /**
     * Limit how many product_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_categories upsert
   */
  export type product_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_categories to update in case it exists.
     */
    where: product_categoriesWhereUniqueInput
    /**
     * In case the product_categories found by the `where` argument doesn't exist, create a new product_categories with this data.
     */
    create: XOR<product_categoriesCreateInput, product_categoriesUncheckedCreateInput>
    /**
     * In case the product_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_categoriesUpdateInput, product_categoriesUncheckedUpdateInput>
  }

  /**
   * product_categories delete
   */
  export type product_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
    /**
     * Filter which product_categories to delete.
     */
    where: product_categoriesWhereUniqueInput
  }

  /**
   * product_categories deleteMany
   */
  export type product_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_categories to delete
     */
    where?: product_categoriesWhereInput
    /**
     * Limit how many product_categories to delete.
     */
    limit?: number
  }

  /**
   * product_categories without action
   */
  export type product_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categories
     */
    select?: product_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categories
     */
    omit?: product_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_categoriesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    customer_name: 'customer_name',
    customer_phone: 'customer_phone',
    customer_email: 'customer_email',
    delivery_address: 'delivery_address',
    delivery_district: 'delivery_district',
    delivery_datetime: 'delivery_datetime',
    needs_card: 'needs_card',
    card_text: 'card_text',
    is_different_recipient: 'is_different_recipient',
    recipient_phone: 'recipient_phone',
    created_at: 'created_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Product_imagesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    image_url: 'image_url',
    is_primary: 'is_primary',
    display_order: 'display_order'
  };

  export type Product_imagesScalarFieldEnum = (typeof Product_imagesScalarFieldEnum)[keyof typeof Product_imagesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    descriptionRu: 'descriptionRu',
    price: 'price',
    category: 'category',
    status: 'status',
    image: 'image',
    occasion: 'occasion',
    width: 'width',
    height: 'height',
    items: 'items',
    expiryDate: 'expiryDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    is_active: 'is_active'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const OccasionsScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    label: 'label'
  };

  export type OccasionsScalarFieldEnum = (typeof OccasionsScalarFieldEnum)[keyof typeof OccasionsScalarFieldEnum]


  export const Product_occasionsScalarFieldEnum: {
    product_id: 'product_id',
    occasion_id: 'occasion_id'
  };

  export type Product_occasionsScalarFieldEnum = (typeof Product_occasionsScalarFieldEnum)[keyof typeof Product_occasionsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    label: 'label',
    image: 'image'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Product_categoriesScalarFieldEnum: {
    product_id: 'product_id',
    category_id: 'category_id'
  };

  export type Product_categoriesScalarFieldEnum = (typeof Product_categoriesScalarFieldEnum)[keyof typeof Product_categoriesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    customer_name?: StringFilter<"orders"> | string
    customer_phone?: StringFilter<"orders"> | string
    customer_email?: StringNullableFilter<"orders"> | string | null
    delivery_address?: StringFilter<"orders"> | string
    delivery_district?: StringFilter<"orders"> | string
    delivery_datetime?: DateTimeFilter<"orders"> | Date | string
    needs_card?: BoolFilter<"orders"> | boolean
    card_text?: StringNullableFilter<"orders"> | string | null
    is_different_recipient?: BoolFilter<"orders"> | boolean
    recipient_phone?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeFilter<"orders"> | Date | string
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    customer_email?: SortOrderInput | SortOrder
    delivery_address?: SortOrder
    delivery_district?: SortOrder
    delivery_datetime?: SortOrder
    needs_card?: SortOrder
    card_text?: SortOrderInput | SortOrder
    is_different_recipient?: SortOrder
    recipient_phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customer_name?: StringFilter<"orders"> | string
    customer_phone?: StringFilter<"orders"> | string
    customer_email?: StringNullableFilter<"orders"> | string | null
    delivery_address?: StringFilter<"orders"> | string
    delivery_district?: StringFilter<"orders"> | string
    delivery_datetime?: DateTimeFilter<"orders"> | Date | string
    needs_card?: BoolFilter<"orders"> | boolean
    card_text?: StringNullableFilter<"orders"> | string | null
    is_different_recipient?: BoolFilter<"orders"> | boolean
    recipient_phone?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeFilter<"orders"> | Date | string
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    customer_email?: SortOrderInput | SortOrder
    delivery_address?: SortOrder
    delivery_district?: SortOrder
    delivery_datetime?: SortOrder
    needs_card?: SortOrder
    card_text?: SortOrderInput | SortOrder
    is_different_recipient?: SortOrder
    recipient_phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    customer_name?: StringWithAggregatesFilter<"orders"> | string
    customer_phone?: StringWithAggregatesFilter<"orders"> | string
    customer_email?: StringNullableWithAggregatesFilter<"orders"> | string | null
    delivery_address?: StringWithAggregatesFilter<"orders"> | string
    delivery_district?: StringWithAggregatesFilter<"orders"> | string
    delivery_datetime?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    needs_card?: BoolWithAggregatesFilter<"orders"> | boolean
    card_text?: StringNullableWithAggregatesFilter<"orders"> | string | null
    is_different_recipient?: BoolWithAggregatesFilter<"orders"> | boolean
    recipient_phone?: StringNullableWithAggregatesFilter<"orders"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type product_imagesWhereInput = {
    AND?: product_imagesWhereInput | product_imagesWhereInput[]
    OR?: product_imagesWhereInput[]
    NOT?: product_imagesWhereInput | product_imagesWhereInput[]
    id?: IntFilter<"product_images"> | number
    product_id?: IntNullableFilter<"product_images"> | number | null
    image_url?: StringFilter<"product_images"> | string
    is_primary?: BoolNullableFilter<"product_images"> | boolean | null
    display_order?: IntNullableFilter<"product_images"> | number | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type product_imagesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    image_url?: SortOrder
    is_primary?: SortOrderInput | SortOrder
    display_order?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type product_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_imagesWhereInput | product_imagesWhereInput[]
    OR?: product_imagesWhereInput[]
    NOT?: product_imagesWhereInput | product_imagesWhereInput[]
    product_id?: IntNullableFilter<"product_images"> | number | null
    image_url?: StringFilter<"product_images"> | string
    is_primary?: BoolNullableFilter<"product_images"> | boolean | null
    display_order?: IntNullableFilter<"product_images"> | number | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type product_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    image_url?: SortOrder
    is_primary?: SortOrderInput | SortOrder
    display_order?: SortOrderInput | SortOrder
    _count?: product_imagesCountOrderByAggregateInput
    _avg?: product_imagesAvgOrderByAggregateInput
    _max?: product_imagesMaxOrderByAggregateInput
    _min?: product_imagesMinOrderByAggregateInput
    _sum?: product_imagesSumOrderByAggregateInput
  }

  export type product_imagesScalarWhereWithAggregatesInput = {
    AND?: product_imagesScalarWhereWithAggregatesInput | product_imagesScalarWhereWithAggregatesInput[]
    OR?: product_imagesScalarWhereWithAggregatesInput[]
    NOT?: product_imagesScalarWhereWithAggregatesInput | product_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_images"> | number
    product_id?: IntNullableWithAggregatesFilter<"product_images"> | number | null
    image_url?: StringWithAggregatesFilter<"product_images"> | string
    is_primary?: BoolNullableWithAggregatesFilter<"product_images"> | boolean | null
    display_order?: IntNullableWithAggregatesFilter<"product_images"> | number | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    descriptionRu?: StringNullableFilter<"products"> | string | null
    price?: IntNullableFilter<"products"> | number | null
    category?: StringNullableFilter<"products"> | string | null
    status?: JsonNullableFilter<"products">
    image?: JsonNullableFilter<"products">
    occasion?: StringNullableFilter<"products"> | string | null
    width?: IntNullableFilter<"products"> | number | null
    height?: IntNullableFilter<"products"> | number | null
    items?: JsonNullableFilter<"products">
    expiryDate?: StringNullableFilter<"products"> | string | null
    createdAt?: DateTimeNullableFilter<"products"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"products"> | Date | string | null
    is_active?: BoolFilter<"products"> | boolean
    product_categories?: Product_categoriesListRelationFilter
    product_images?: Product_imagesListRelationFilter
    product_occasions?: Product_occasionsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionRu?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    occasion?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    items?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    is_active?: SortOrder
    product_categories?: product_categoriesOrderByRelationAggregateInput
    product_images?: product_imagesOrderByRelationAggregateInput
    product_occasions?: product_occasionsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    descriptionRu?: StringNullableFilter<"products"> | string | null
    price?: IntNullableFilter<"products"> | number | null
    category?: StringNullableFilter<"products"> | string | null
    status?: JsonNullableFilter<"products">
    image?: JsonNullableFilter<"products">
    occasion?: StringNullableFilter<"products"> | string | null
    width?: IntNullableFilter<"products"> | number | null
    height?: IntNullableFilter<"products"> | number | null
    items?: JsonNullableFilter<"products">
    expiryDate?: StringNullableFilter<"products"> | string | null
    createdAt?: DateTimeNullableFilter<"products"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"products"> | Date | string | null
    is_active?: BoolFilter<"products"> | boolean
    product_categories?: Product_categoriesListRelationFilter
    product_images?: Product_imagesListRelationFilter
    product_occasions?: Product_occasionsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionRu?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    occasion?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    items?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    is_active?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    name?: StringWithAggregatesFilter<"products"> | string
    descriptionRu?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: IntNullableWithAggregatesFilter<"products"> | number | null
    category?: StringNullableWithAggregatesFilter<"products"> | string | null
    status?: JsonNullableWithAggregatesFilter<"products">
    image?: JsonNullableWithAggregatesFilter<"products">
    occasion?: StringNullableWithAggregatesFilter<"products"> | string | null
    width?: IntNullableWithAggregatesFilter<"products"> | number | null
    height?: IntNullableWithAggregatesFilter<"products"> | number | null
    items?: JsonNullableWithAggregatesFilter<"products">
    expiryDate?: StringNullableWithAggregatesFilter<"products"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    is_active?: BoolWithAggregatesFilter<"products"> | boolean
  }

  export type occasionsWhereInput = {
    AND?: occasionsWhereInput | occasionsWhereInput[]
    OR?: occasionsWhereInput[]
    NOT?: occasionsWhereInput | occasionsWhereInput[]
    id?: IntFilter<"occasions"> | number
    slug?: StringFilter<"occasions"> | string
    label?: StringFilter<"occasions"> | string
    product_occasions?: Product_occasionsListRelationFilter
  }

  export type occasionsOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    product_occasions?: product_occasionsOrderByRelationAggregateInput
  }

  export type occasionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: occasionsWhereInput | occasionsWhereInput[]
    OR?: occasionsWhereInput[]
    NOT?: occasionsWhereInput | occasionsWhereInput[]
    label?: StringFilter<"occasions"> | string
    product_occasions?: Product_occasionsListRelationFilter
  }, "id" | "slug">

  export type occasionsOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    _count?: occasionsCountOrderByAggregateInput
    _avg?: occasionsAvgOrderByAggregateInput
    _max?: occasionsMaxOrderByAggregateInput
    _min?: occasionsMinOrderByAggregateInput
    _sum?: occasionsSumOrderByAggregateInput
  }

  export type occasionsScalarWhereWithAggregatesInput = {
    AND?: occasionsScalarWhereWithAggregatesInput | occasionsScalarWhereWithAggregatesInput[]
    OR?: occasionsScalarWhereWithAggregatesInput[]
    NOT?: occasionsScalarWhereWithAggregatesInput | occasionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"occasions"> | number
    slug?: StringWithAggregatesFilter<"occasions"> | string
    label?: StringWithAggregatesFilter<"occasions"> | string
  }

  export type product_occasionsWhereInput = {
    AND?: product_occasionsWhereInput | product_occasionsWhereInput[]
    OR?: product_occasionsWhereInput[]
    NOT?: product_occasionsWhereInput | product_occasionsWhereInput[]
    product_id?: IntFilter<"product_occasions"> | number
    occasion_id?: IntFilter<"product_occasions"> | number
    occasions?: XOR<OccasionsScalarRelationFilter, occasionsWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type product_occasionsOrderByWithRelationInput = {
    product_id?: SortOrder
    occasion_id?: SortOrder
    occasions?: occasionsOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type product_occasionsWhereUniqueInput = Prisma.AtLeast<{
    product_id_occasion_id?: product_occasionsProduct_idOccasion_idCompoundUniqueInput
    AND?: product_occasionsWhereInput | product_occasionsWhereInput[]
    OR?: product_occasionsWhereInput[]
    NOT?: product_occasionsWhereInput | product_occasionsWhereInput[]
    product_id?: IntFilter<"product_occasions"> | number
    occasion_id?: IntFilter<"product_occasions"> | number
    occasions?: XOR<OccasionsScalarRelationFilter, occasionsWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "product_id_occasion_id">

  export type product_occasionsOrderByWithAggregationInput = {
    product_id?: SortOrder
    occasion_id?: SortOrder
    _count?: product_occasionsCountOrderByAggregateInput
    _avg?: product_occasionsAvgOrderByAggregateInput
    _max?: product_occasionsMaxOrderByAggregateInput
    _min?: product_occasionsMinOrderByAggregateInput
    _sum?: product_occasionsSumOrderByAggregateInput
  }

  export type product_occasionsScalarWhereWithAggregatesInput = {
    AND?: product_occasionsScalarWhereWithAggregatesInput | product_occasionsScalarWhereWithAggregatesInput[]
    OR?: product_occasionsScalarWhereWithAggregatesInput[]
    NOT?: product_occasionsScalarWhereWithAggregatesInput | product_occasionsScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"product_occasions"> | number
    occasion_id?: IntWithAggregatesFilter<"product_occasions"> | number
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    slug?: StringFilter<"categories"> | string
    label?: StringFilter<"categories"> | string
    image?: StringFilter<"categories"> | string
    product_categories?: Product_categoriesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    image?: SortOrder
    product_categories?: product_categoriesOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    label?: StringFilter<"categories"> | string
    image?: StringFilter<"categories"> | string
    product_categories?: Product_categoriesListRelationFilter
  }, "id" | "slug">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    image?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    slug?: StringWithAggregatesFilter<"categories"> | string
    label?: StringWithAggregatesFilter<"categories"> | string
    image?: StringWithAggregatesFilter<"categories"> | string
  }

  export type product_categoriesWhereInput = {
    AND?: product_categoriesWhereInput | product_categoriesWhereInput[]
    OR?: product_categoriesWhereInput[]
    NOT?: product_categoriesWhereInput | product_categoriesWhereInput[]
    product_id?: IntFilter<"product_categories"> | number
    category_id?: IntFilter<"product_categories"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type product_categoriesOrderByWithRelationInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    categories?: categoriesOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type product_categoriesWhereUniqueInput = Prisma.AtLeast<{
    product_id_category_id?: product_categoriesProduct_idCategory_idCompoundUniqueInput
    AND?: product_categoriesWhereInput | product_categoriesWhereInput[]
    OR?: product_categoriesWhereInput[]
    NOT?: product_categoriesWhereInput | product_categoriesWhereInput[]
    product_id?: IntFilter<"product_categories"> | number
    category_id?: IntFilter<"product_categories"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "product_id_category_id">

  export type product_categoriesOrderByWithAggregationInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    _count?: product_categoriesCountOrderByAggregateInput
    _avg?: product_categoriesAvgOrderByAggregateInput
    _max?: product_categoriesMaxOrderByAggregateInput
    _min?: product_categoriesMinOrderByAggregateInput
    _sum?: product_categoriesSumOrderByAggregateInput
  }

  export type product_categoriesScalarWhereWithAggregatesInput = {
    AND?: product_categoriesScalarWhereWithAggregatesInput | product_categoriesScalarWhereWithAggregatesInput[]
    OR?: product_categoriesScalarWhereWithAggregatesInput[]
    NOT?: product_categoriesScalarWhereWithAggregatesInput | product_categoriesScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"product_categories"> | number
    category_id?: IntWithAggregatesFilter<"product_categories"> | number
  }

  export type ordersCreateInput = {
    customer_name: string
    customer_phone: string
    customer_email?: string | null
    delivery_address: string
    delivery_district: string
    delivery_datetime: Date | string
    needs_card: boolean
    card_text?: string | null
    is_different_recipient: boolean
    recipient_phone?: string | null
    created_at?: Date | string
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    customer_name: string
    customer_phone: string
    customer_email?: string | null
    delivery_address: string
    delivery_district: string
    delivery_datetime: Date | string
    needs_card: boolean
    card_text?: string | null
    is_different_recipient: boolean
    recipient_phone?: string | null
    created_at?: Date | string
  }

  export type ordersUpdateInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_district?: StringFieldUpdateOperationsInput | string
    delivery_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    needs_card?: BoolFieldUpdateOperationsInput | boolean
    card_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_different_recipient?: BoolFieldUpdateOperationsInput | boolean
    recipient_phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_district?: StringFieldUpdateOperationsInput | string
    delivery_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    needs_card?: BoolFieldUpdateOperationsInput | boolean
    card_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_different_recipient?: BoolFieldUpdateOperationsInput | boolean
    recipient_phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyInput = {
    id?: number
    customer_name: string
    customer_phone: string
    customer_email?: string | null
    delivery_address: string
    delivery_district: string
    delivery_datetime: Date | string
    needs_card: boolean
    card_text?: string | null
    is_different_recipient: boolean
    recipient_phone?: string | null
    created_at?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_district?: StringFieldUpdateOperationsInput | string
    delivery_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    needs_card?: BoolFieldUpdateOperationsInput | boolean
    card_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_different_recipient?: BoolFieldUpdateOperationsInput | boolean
    recipient_phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_district?: StringFieldUpdateOperationsInput | string
    delivery_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    needs_card?: BoolFieldUpdateOperationsInput | boolean
    card_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_different_recipient?: BoolFieldUpdateOperationsInput | boolean
    recipient_phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_imagesCreateInput = {
    image_url: string
    is_primary?: boolean | null
    display_order?: number | null
    products?: productsCreateNestedOneWithoutProduct_imagesInput
  }

  export type product_imagesUncheckedCreateInput = {
    id?: number
    product_id?: number | null
    image_url: string
    is_primary?: boolean | null
    display_order?: number | null
  }

  export type product_imagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUpdateOneWithoutProduct_imagesNestedInput
  }

  export type product_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: StringFieldUpdateOperationsInput | string
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_imagesCreateManyInput = {
    id?: number
    product_id?: number | null
    image_url: string
    is_primary?: boolean | null
    display_order?: number | null
  }

  export type product_imagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: StringFieldUpdateOperationsInput | string
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsCreateInput = {
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
    product_categories?: product_categoriesCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    product_occasions?: product_occasionsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    product_occasions?: product_occasionsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_categories?: product_categoriesUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    product_occasions?: product_occasionsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_categories?: product_categoriesUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    product_occasions?: product_occasionsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type occasionsCreateInput = {
    slug: string
    label: string
    product_occasions?: product_occasionsCreateNestedManyWithoutOccasionsInput
  }

  export type occasionsUncheckedCreateInput = {
    id?: number
    slug: string
    label: string
    product_occasions?: product_occasionsUncheckedCreateNestedManyWithoutOccasionsInput
  }

  export type occasionsUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    product_occasions?: product_occasionsUpdateManyWithoutOccasionsNestedInput
  }

  export type occasionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    product_occasions?: product_occasionsUncheckedUpdateManyWithoutOccasionsNestedInput
  }

  export type occasionsCreateManyInput = {
    id?: number
    slug: string
    label: string
  }

  export type occasionsUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type occasionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type product_occasionsCreateInput = {
    occasions: occasionsCreateNestedOneWithoutProduct_occasionsInput
    products: productsCreateNestedOneWithoutProduct_occasionsInput
  }

  export type product_occasionsUncheckedCreateInput = {
    product_id: number
    occasion_id: number
  }

  export type product_occasionsUpdateInput = {
    occasions?: occasionsUpdateOneRequiredWithoutProduct_occasionsNestedInput
    products?: productsUpdateOneRequiredWithoutProduct_occasionsNestedInput
  }

  export type product_occasionsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    occasion_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_occasionsCreateManyInput = {
    product_id: number
    occasion_id: number
  }

  export type product_occasionsUpdateManyMutationInput = {

  }

  export type product_occasionsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    occasion_id?: IntFieldUpdateOperationsInput | number
  }

  export type categoriesCreateInput = {
    slug: string
    label: string
    image: string
    product_categories?: product_categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    slug: string
    label: string
    image: string
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    product_categories?: product_categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    product_categories?: product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    slug: string
    label: string
    image: string
  }

  export type categoriesUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type product_categoriesCreateInput = {
    categories: categoriesCreateNestedOneWithoutProduct_categoriesInput
    products: productsCreateNestedOneWithoutProduct_categoriesInput
  }

  export type product_categoriesUncheckedCreateInput = {
    product_id: number
    category_id: number
  }

  export type product_categoriesUpdateInput = {
    categories?: categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput
    products?: productsUpdateOneRequiredWithoutProduct_categoriesNestedInput
  }

  export type product_categoriesUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_categoriesCreateManyInput = {
    product_id: number
    category_id: number
  }

  export type product_categoriesUpdateManyMutationInput = {

  }

  export type product_categoriesUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    customer_email?: SortOrder
    delivery_address?: SortOrder
    delivery_district?: SortOrder
    delivery_datetime?: SortOrder
    needs_card?: SortOrder
    card_text?: SortOrder
    is_different_recipient?: SortOrder
    recipient_phone?: SortOrder
    created_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    customer_email?: SortOrder
    delivery_address?: SortOrder
    delivery_district?: SortOrder
    delivery_datetime?: SortOrder
    needs_card?: SortOrder
    card_text?: SortOrder
    is_different_recipient?: SortOrder
    recipient_phone?: SortOrder
    created_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    customer_email?: SortOrder
    delivery_address?: SortOrder
    delivery_district?: SortOrder
    delivery_datetime?: SortOrder
    needs_card?: SortOrder
    card_text?: SortOrder
    is_different_recipient?: SortOrder
    recipient_phone?: SortOrder
    created_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null
    isNot?: productsWhereInput | null
  }

  export type product_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
    is_primary?: SortOrder
    display_order?: SortOrder
  }

  export type product_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    display_order?: SortOrder
  }

  export type product_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
    is_primary?: SortOrder
    display_order?: SortOrder
  }

  export type product_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
    is_primary?: SortOrder
    display_order?: SortOrder
  }

  export type product_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    display_order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Product_categoriesListRelationFilter = {
    every?: product_categoriesWhereInput
    some?: product_categoriesWhereInput
    none?: product_categoriesWhereInput
  }

  export type Product_imagesListRelationFilter = {
    every?: product_imagesWhereInput
    some?: product_imagesWhereInput
    none?: product_imagesWhereInput
  }

  export type Product_occasionsListRelationFilter = {
    every?: product_occasionsWhereInput
    some?: product_occasionsWhereInput
    none?: product_occasionsWhereInput
  }

  export type product_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_occasionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionRu?: SortOrder
    price?: SortOrder
    category?: SortOrder
    status?: SortOrder
    image?: SortOrder
    occasion?: SortOrder
    width?: SortOrder
    height?: SortOrder
    items?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    is_active?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionRu?: SortOrder
    price?: SortOrder
    category?: SortOrder
    occasion?: SortOrder
    width?: SortOrder
    height?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    is_active?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    descriptionRu?: SortOrder
    price?: SortOrder
    category?: SortOrder
    occasion?: SortOrder
    width?: SortOrder
    height?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    is_active?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type occasionsCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
  }

  export type occasionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type occasionsMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
  }

  export type occasionsMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
  }

  export type occasionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OccasionsScalarRelationFilter = {
    is?: occasionsWhereInput
    isNot?: occasionsWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type product_occasionsProduct_idOccasion_idCompoundUniqueInput = {
    product_id: number
    occasion_id: number
  }

  export type product_occasionsCountOrderByAggregateInput = {
    product_id?: SortOrder
    occasion_id?: SortOrder
  }

  export type product_occasionsAvgOrderByAggregateInput = {
    product_id?: SortOrder
    occasion_id?: SortOrder
  }

  export type product_occasionsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    occasion_id?: SortOrder
  }

  export type product_occasionsMinOrderByAggregateInput = {
    product_id?: SortOrder
    occasion_id?: SortOrder
  }

  export type product_occasionsSumOrderByAggregateInput = {
    product_id?: SortOrder
    occasion_id?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    image?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    image?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    label?: SortOrder
    image?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type product_categoriesProduct_idCategory_idCompoundUniqueInput = {
    product_id: number
    category_id: number
  }

  export type product_categoriesCountOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
  }

  export type product_categoriesAvgOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
  }

  export type product_categoriesMaxOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
  }

  export type product_categoriesMinOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
  }

  export type product_categoriesSumOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsCreateNestedOneWithoutProduct_imagesInput = {
    create?: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_imagesInput
    connect?: productsWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUpdateOneWithoutProduct_imagesNestedInput = {
    create?: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_imagesInput
    upsert?: productsUpsertWithoutProduct_imagesInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_imagesInput, productsUpdateWithoutProduct_imagesInput>, productsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type product_categoriesCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput> | product_categoriesCreateWithoutProductsInput[] | product_categoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProductsInput | product_categoriesCreateOrConnectWithoutProductsInput[]
    createMany?: product_categoriesCreateManyProductsInputEnvelope
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
  }

  export type product_imagesCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
  }

  export type product_occasionsCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_occasionsCreateWithoutProductsInput, product_occasionsUncheckedCreateWithoutProductsInput> | product_occasionsCreateWithoutProductsInput[] | product_occasionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_occasionsCreateOrConnectWithoutProductsInput | product_occasionsCreateOrConnectWithoutProductsInput[]
    createMany?: product_occasionsCreateManyProductsInputEnvelope
    connect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
  }

  export type product_categoriesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput> | product_categoriesCreateWithoutProductsInput[] | product_categoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProductsInput | product_categoriesCreateOrConnectWithoutProductsInput[]
    createMany?: product_categoriesCreateManyProductsInputEnvelope
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
  }

  export type product_imagesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
  }

  export type product_occasionsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_occasionsCreateWithoutProductsInput, product_occasionsUncheckedCreateWithoutProductsInput> | product_occasionsCreateWithoutProductsInput[] | product_occasionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_occasionsCreateOrConnectWithoutProductsInput | product_occasionsCreateOrConnectWithoutProductsInput[]
    createMany?: product_occasionsCreateManyProductsInputEnvelope
    connect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type product_categoriesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput> | product_categoriesCreateWithoutProductsInput[] | product_categoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProductsInput | product_categoriesCreateOrConnectWithoutProductsInput[]
    upsert?: product_categoriesUpsertWithWhereUniqueWithoutProductsInput | product_categoriesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_categoriesCreateManyProductsInputEnvelope
    set?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    disconnect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    delete?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    update?: product_categoriesUpdateWithWhereUniqueWithoutProductsInput | product_categoriesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_categoriesUpdateManyWithWhereWithoutProductsInput | product_categoriesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
  }

  export type product_imagesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    upsert?: product_imagesUpsertWithWhereUniqueWithoutProductsInput | product_imagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    set?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    disconnect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    delete?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    update?: product_imagesUpdateWithWhereUniqueWithoutProductsInput | product_imagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_imagesUpdateManyWithWhereWithoutProductsInput | product_imagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
  }

  export type product_occasionsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_occasionsCreateWithoutProductsInput, product_occasionsUncheckedCreateWithoutProductsInput> | product_occasionsCreateWithoutProductsInput[] | product_occasionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_occasionsCreateOrConnectWithoutProductsInput | product_occasionsCreateOrConnectWithoutProductsInput[]
    upsert?: product_occasionsUpsertWithWhereUniqueWithoutProductsInput | product_occasionsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_occasionsCreateManyProductsInputEnvelope
    set?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    disconnect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    delete?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    connect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    update?: product_occasionsUpdateWithWhereUniqueWithoutProductsInput | product_occasionsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_occasionsUpdateManyWithWhereWithoutProductsInput | product_occasionsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_occasionsScalarWhereInput | product_occasionsScalarWhereInput[]
  }

  export type product_categoriesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput> | product_categoriesCreateWithoutProductsInput[] | product_categoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutProductsInput | product_categoriesCreateOrConnectWithoutProductsInput[]
    upsert?: product_categoriesUpsertWithWhereUniqueWithoutProductsInput | product_categoriesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_categoriesCreateManyProductsInputEnvelope
    set?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    disconnect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    delete?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    update?: product_categoriesUpdateWithWhereUniqueWithoutProductsInput | product_categoriesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_categoriesUpdateManyWithWhereWithoutProductsInput | product_categoriesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
  }

  export type product_imagesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    upsert?: product_imagesUpsertWithWhereUniqueWithoutProductsInput | product_imagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    set?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    disconnect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    delete?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    update?: product_imagesUpdateWithWhereUniqueWithoutProductsInput | product_imagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_imagesUpdateManyWithWhereWithoutProductsInput | product_imagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
  }

  export type product_occasionsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_occasionsCreateWithoutProductsInput, product_occasionsUncheckedCreateWithoutProductsInput> | product_occasionsCreateWithoutProductsInput[] | product_occasionsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_occasionsCreateOrConnectWithoutProductsInput | product_occasionsCreateOrConnectWithoutProductsInput[]
    upsert?: product_occasionsUpsertWithWhereUniqueWithoutProductsInput | product_occasionsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_occasionsCreateManyProductsInputEnvelope
    set?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    disconnect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    delete?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    connect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    update?: product_occasionsUpdateWithWhereUniqueWithoutProductsInput | product_occasionsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_occasionsUpdateManyWithWhereWithoutProductsInput | product_occasionsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_occasionsScalarWhereInput | product_occasionsScalarWhereInput[]
  }

  export type product_occasionsCreateNestedManyWithoutOccasionsInput = {
    create?: XOR<product_occasionsCreateWithoutOccasionsInput, product_occasionsUncheckedCreateWithoutOccasionsInput> | product_occasionsCreateWithoutOccasionsInput[] | product_occasionsUncheckedCreateWithoutOccasionsInput[]
    connectOrCreate?: product_occasionsCreateOrConnectWithoutOccasionsInput | product_occasionsCreateOrConnectWithoutOccasionsInput[]
    createMany?: product_occasionsCreateManyOccasionsInputEnvelope
    connect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
  }

  export type product_occasionsUncheckedCreateNestedManyWithoutOccasionsInput = {
    create?: XOR<product_occasionsCreateWithoutOccasionsInput, product_occasionsUncheckedCreateWithoutOccasionsInput> | product_occasionsCreateWithoutOccasionsInput[] | product_occasionsUncheckedCreateWithoutOccasionsInput[]
    connectOrCreate?: product_occasionsCreateOrConnectWithoutOccasionsInput | product_occasionsCreateOrConnectWithoutOccasionsInput[]
    createMany?: product_occasionsCreateManyOccasionsInputEnvelope
    connect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
  }

  export type product_occasionsUpdateManyWithoutOccasionsNestedInput = {
    create?: XOR<product_occasionsCreateWithoutOccasionsInput, product_occasionsUncheckedCreateWithoutOccasionsInput> | product_occasionsCreateWithoutOccasionsInput[] | product_occasionsUncheckedCreateWithoutOccasionsInput[]
    connectOrCreate?: product_occasionsCreateOrConnectWithoutOccasionsInput | product_occasionsCreateOrConnectWithoutOccasionsInput[]
    upsert?: product_occasionsUpsertWithWhereUniqueWithoutOccasionsInput | product_occasionsUpsertWithWhereUniqueWithoutOccasionsInput[]
    createMany?: product_occasionsCreateManyOccasionsInputEnvelope
    set?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    disconnect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    delete?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    connect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    update?: product_occasionsUpdateWithWhereUniqueWithoutOccasionsInput | product_occasionsUpdateWithWhereUniqueWithoutOccasionsInput[]
    updateMany?: product_occasionsUpdateManyWithWhereWithoutOccasionsInput | product_occasionsUpdateManyWithWhereWithoutOccasionsInput[]
    deleteMany?: product_occasionsScalarWhereInput | product_occasionsScalarWhereInput[]
  }

  export type product_occasionsUncheckedUpdateManyWithoutOccasionsNestedInput = {
    create?: XOR<product_occasionsCreateWithoutOccasionsInput, product_occasionsUncheckedCreateWithoutOccasionsInput> | product_occasionsCreateWithoutOccasionsInput[] | product_occasionsUncheckedCreateWithoutOccasionsInput[]
    connectOrCreate?: product_occasionsCreateOrConnectWithoutOccasionsInput | product_occasionsCreateOrConnectWithoutOccasionsInput[]
    upsert?: product_occasionsUpsertWithWhereUniqueWithoutOccasionsInput | product_occasionsUpsertWithWhereUniqueWithoutOccasionsInput[]
    createMany?: product_occasionsCreateManyOccasionsInputEnvelope
    set?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    disconnect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    delete?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    connect?: product_occasionsWhereUniqueInput | product_occasionsWhereUniqueInput[]
    update?: product_occasionsUpdateWithWhereUniqueWithoutOccasionsInput | product_occasionsUpdateWithWhereUniqueWithoutOccasionsInput[]
    updateMany?: product_occasionsUpdateManyWithWhereWithoutOccasionsInput | product_occasionsUpdateManyWithWhereWithoutOccasionsInput[]
    deleteMany?: product_occasionsScalarWhereInput | product_occasionsScalarWhereInput[]
  }

  export type occasionsCreateNestedOneWithoutProduct_occasionsInput = {
    create?: XOR<occasionsCreateWithoutProduct_occasionsInput, occasionsUncheckedCreateWithoutProduct_occasionsInput>
    connectOrCreate?: occasionsCreateOrConnectWithoutProduct_occasionsInput
    connect?: occasionsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutProduct_occasionsInput = {
    create?: XOR<productsCreateWithoutProduct_occasionsInput, productsUncheckedCreateWithoutProduct_occasionsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_occasionsInput
    connect?: productsWhereUniqueInput
  }

  export type occasionsUpdateOneRequiredWithoutProduct_occasionsNestedInput = {
    create?: XOR<occasionsCreateWithoutProduct_occasionsInput, occasionsUncheckedCreateWithoutProduct_occasionsInput>
    connectOrCreate?: occasionsCreateOrConnectWithoutProduct_occasionsInput
    upsert?: occasionsUpsertWithoutProduct_occasionsInput
    connect?: occasionsWhereUniqueInput
    update?: XOR<XOR<occasionsUpdateToOneWithWhereWithoutProduct_occasionsInput, occasionsUpdateWithoutProduct_occasionsInput>, occasionsUncheckedUpdateWithoutProduct_occasionsInput>
  }

  export type productsUpdateOneRequiredWithoutProduct_occasionsNestedInput = {
    create?: XOR<productsCreateWithoutProduct_occasionsInput, productsUncheckedCreateWithoutProduct_occasionsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_occasionsInput
    upsert?: productsUpsertWithoutProduct_occasionsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_occasionsInput, productsUpdateWithoutProduct_occasionsInput>, productsUncheckedUpdateWithoutProduct_occasionsInput>
  }

  export type product_categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput> | product_categoriesCreateWithoutCategoriesInput[] | product_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutCategoriesInput | product_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
  }

  export type product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput> | product_categoriesCreateWithoutCategoriesInput[] | product_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutCategoriesInput | product_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
  }

  export type product_categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput> | product_categoriesCreateWithoutCategoriesInput[] | product_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutCategoriesInput | product_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope
    set?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    disconnect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    delete?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    update?: product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: product_categoriesUpdateManyWithWhereWithoutCategoriesInput | product_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
  }

  export type product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput> | product_categoriesCreateWithoutCategoriesInput[] | product_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: product_categoriesCreateOrConnectWithoutCategoriesInput | product_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: product_categoriesCreateManyCategoriesInputEnvelope
    set?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    disconnect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    delete?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    connect?: product_categoriesWhereUniqueInput | product_categoriesWhereUniqueInput[]
    update?: product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: product_categoriesUpdateManyWithWhereWithoutCategoriesInput | product_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutProduct_categoriesInput = {
    create?: XOR<categoriesCreateWithoutProduct_categoriesInput, categoriesUncheckedCreateWithoutProduct_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProduct_categoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutProduct_categoriesInput = {
    create?: XOR<productsCreateWithoutProduct_categoriesInput, productsUncheckedCreateWithoutProduct_categoriesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_categoriesInput
    connect?: productsWhereUniqueInput
  }

  export type categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutProduct_categoriesInput, categoriesUncheckedCreateWithoutProduct_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProduct_categoriesInput
    upsert?: categoriesUpsertWithoutProduct_categoriesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput, categoriesUpdateWithoutProduct_categoriesInput>, categoriesUncheckedUpdateWithoutProduct_categoriesInput>
  }

  export type productsUpdateOneRequiredWithoutProduct_categoriesNestedInput = {
    create?: XOR<productsCreateWithoutProduct_categoriesInput, productsUncheckedCreateWithoutProduct_categoriesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_categoriesInput
    upsert?: productsUpsertWithoutProduct_categoriesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_categoriesInput, productsUpdateWithoutProduct_categoriesInput>, productsUncheckedUpdateWithoutProduct_categoriesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type productsCreateWithoutProduct_imagesInput = {
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
    product_categories?: product_categoriesCreateNestedManyWithoutProductsInput
    product_occasions?: product_occasionsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_imagesInput = {
    id?: number
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutProductsInput
    product_occasions?: product_occasionsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_imagesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
  }

  export type productsUpsertWithoutProduct_imagesInput = {
    update: XOR<productsUpdateWithoutProduct_imagesInput, productsUncheckedUpdateWithoutProduct_imagesInput>
    create: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_imagesInput, productsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type productsUpdateWithoutProduct_imagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_categories?: product_categoriesUpdateManyWithoutProductsNestedInput
    product_occasions?: product_occasionsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_categories?: product_categoriesUncheckedUpdateManyWithoutProductsNestedInput
    product_occasions?: product_occasionsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type product_categoriesCreateWithoutProductsInput = {
    categories: categoriesCreateNestedOneWithoutProduct_categoriesInput
  }

  export type product_categoriesUncheckedCreateWithoutProductsInput = {
    category_id: number
  }

  export type product_categoriesCreateOrConnectWithoutProductsInput = {
    where: product_categoriesWhereUniqueInput
    create: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput>
  }

  export type product_categoriesCreateManyProductsInputEnvelope = {
    data: product_categoriesCreateManyProductsInput | product_categoriesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_imagesCreateWithoutProductsInput = {
    image_url: string
    is_primary?: boolean | null
    display_order?: number | null
  }

  export type product_imagesUncheckedCreateWithoutProductsInput = {
    id?: number
    image_url: string
    is_primary?: boolean | null
    display_order?: number | null
  }

  export type product_imagesCreateOrConnectWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    create: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput>
  }

  export type product_imagesCreateManyProductsInputEnvelope = {
    data: product_imagesCreateManyProductsInput | product_imagesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_occasionsCreateWithoutProductsInput = {
    occasions: occasionsCreateNestedOneWithoutProduct_occasionsInput
  }

  export type product_occasionsUncheckedCreateWithoutProductsInput = {
    occasion_id: number
  }

  export type product_occasionsCreateOrConnectWithoutProductsInput = {
    where: product_occasionsWhereUniqueInput
    create: XOR<product_occasionsCreateWithoutProductsInput, product_occasionsUncheckedCreateWithoutProductsInput>
  }

  export type product_occasionsCreateManyProductsInputEnvelope = {
    data: product_occasionsCreateManyProductsInput | product_occasionsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_categoriesUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_categoriesWhereUniqueInput
    update: XOR<product_categoriesUpdateWithoutProductsInput, product_categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<product_categoriesCreateWithoutProductsInput, product_categoriesUncheckedCreateWithoutProductsInput>
  }

  export type product_categoriesUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_categoriesWhereUniqueInput
    data: XOR<product_categoriesUpdateWithoutProductsInput, product_categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type product_categoriesUpdateManyWithWhereWithoutProductsInput = {
    where: product_categoriesScalarWhereInput
    data: XOR<product_categoriesUpdateManyMutationInput, product_categoriesUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_categoriesScalarWhereInput = {
    AND?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
    OR?: product_categoriesScalarWhereInput[]
    NOT?: product_categoriesScalarWhereInput | product_categoriesScalarWhereInput[]
    product_id?: IntFilter<"product_categories"> | number
    category_id?: IntFilter<"product_categories"> | number
  }

  export type product_imagesUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    update: XOR<product_imagesUpdateWithoutProductsInput, product_imagesUncheckedUpdateWithoutProductsInput>
    create: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput>
  }

  export type product_imagesUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    data: XOR<product_imagesUpdateWithoutProductsInput, product_imagesUncheckedUpdateWithoutProductsInput>
  }

  export type product_imagesUpdateManyWithWhereWithoutProductsInput = {
    where: product_imagesScalarWhereInput
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_imagesScalarWhereInput = {
    AND?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
    OR?: product_imagesScalarWhereInput[]
    NOT?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
    id?: IntFilter<"product_images"> | number
    product_id?: IntNullableFilter<"product_images"> | number | null
    image_url?: StringFilter<"product_images"> | string
    is_primary?: BoolNullableFilter<"product_images"> | boolean | null
    display_order?: IntNullableFilter<"product_images"> | number | null
  }

  export type product_occasionsUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_occasionsWhereUniqueInput
    update: XOR<product_occasionsUpdateWithoutProductsInput, product_occasionsUncheckedUpdateWithoutProductsInput>
    create: XOR<product_occasionsCreateWithoutProductsInput, product_occasionsUncheckedCreateWithoutProductsInput>
  }

  export type product_occasionsUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_occasionsWhereUniqueInput
    data: XOR<product_occasionsUpdateWithoutProductsInput, product_occasionsUncheckedUpdateWithoutProductsInput>
  }

  export type product_occasionsUpdateManyWithWhereWithoutProductsInput = {
    where: product_occasionsScalarWhereInput
    data: XOR<product_occasionsUpdateManyMutationInput, product_occasionsUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_occasionsScalarWhereInput = {
    AND?: product_occasionsScalarWhereInput | product_occasionsScalarWhereInput[]
    OR?: product_occasionsScalarWhereInput[]
    NOT?: product_occasionsScalarWhereInput | product_occasionsScalarWhereInput[]
    product_id?: IntFilter<"product_occasions"> | number
    occasion_id?: IntFilter<"product_occasions"> | number
  }

  export type product_occasionsCreateWithoutOccasionsInput = {
    products: productsCreateNestedOneWithoutProduct_occasionsInput
  }

  export type product_occasionsUncheckedCreateWithoutOccasionsInput = {
    product_id: number
  }

  export type product_occasionsCreateOrConnectWithoutOccasionsInput = {
    where: product_occasionsWhereUniqueInput
    create: XOR<product_occasionsCreateWithoutOccasionsInput, product_occasionsUncheckedCreateWithoutOccasionsInput>
  }

  export type product_occasionsCreateManyOccasionsInputEnvelope = {
    data: product_occasionsCreateManyOccasionsInput | product_occasionsCreateManyOccasionsInput[]
    skipDuplicates?: boolean
  }

  export type product_occasionsUpsertWithWhereUniqueWithoutOccasionsInput = {
    where: product_occasionsWhereUniqueInput
    update: XOR<product_occasionsUpdateWithoutOccasionsInput, product_occasionsUncheckedUpdateWithoutOccasionsInput>
    create: XOR<product_occasionsCreateWithoutOccasionsInput, product_occasionsUncheckedCreateWithoutOccasionsInput>
  }

  export type product_occasionsUpdateWithWhereUniqueWithoutOccasionsInput = {
    where: product_occasionsWhereUniqueInput
    data: XOR<product_occasionsUpdateWithoutOccasionsInput, product_occasionsUncheckedUpdateWithoutOccasionsInput>
  }

  export type product_occasionsUpdateManyWithWhereWithoutOccasionsInput = {
    where: product_occasionsScalarWhereInput
    data: XOR<product_occasionsUpdateManyMutationInput, product_occasionsUncheckedUpdateManyWithoutOccasionsInput>
  }

  export type occasionsCreateWithoutProduct_occasionsInput = {
    slug: string
    label: string
  }

  export type occasionsUncheckedCreateWithoutProduct_occasionsInput = {
    id?: number
    slug: string
    label: string
  }

  export type occasionsCreateOrConnectWithoutProduct_occasionsInput = {
    where: occasionsWhereUniqueInput
    create: XOR<occasionsCreateWithoutProduct_occasionsInput, occasionsUncheckedCreateWithoutProduct_occasionsInput>
  }

  export type productsCreateWithoutProduct_occasionsInput = {
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
    product_categories?: product_categoriesCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_occasionsInput = {
    id?: number
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_occasionsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_occasionsInput, productsUncheckedCreateWithoutProduct_occasionsInput>
  }

  export type occasionsUpsertWithoutProduct_occasionsInput = {
    update: XOR<occasionsUpdateWithoutProduct_occasionsInput, occasionsUncheckedUpdateWithoutProduct_occasionsInput>
    create: XOR<occasionsCreateWithoutProduct_occasionsInput, occasionsUncheckedCreateWithoutProduct_occasionsInput>
    where?: occasionsWhereInput
  }

  export type occasionsUpdateToOneWithWhereWithoutProduct_occasionsInput = {
    where?: occasionsWhereInput
    data: XOR<occasionsUpdateWithoutProduct_occasionsInput, occasionsUncheckedUpdateWithoutProduct_occasionsInput>
  }

  export type occasionsUpdateWithoutProduct_occasionsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type occasionsUncheckedUpdateWithoutProduct_occasionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type productsUpsertWithoutProduct_occasionsInput = {
    update: XOR<productsUpdateWithoutProduct_occasionsInput, productsUncheckedUpdateWithoutProduct_occasionsInput>
    create: XOR<productsCreateWithoutProduct_occasionsInput, productsUncheckedCreateWithoutProduct_occasionsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_occasionsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_occasionsInput, productsUncheckedUpdateWithoutProduct_occasionsInput>
  }

  export type productsUpdateWithoutProduct_occasionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_categories?: product_categoriesUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_occasionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_categories?: product_categoriesUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type product_categoriesCreateWithoutCategoriesInput = {
    products: productsCreateNestedOneWithoutProduct_categoriesInput
  }

  export type product_categoriesUncheckedCreateWithoutCategoriesInput = {
    product_id: number
  }

  export type product_categoriesCreateOrConnectWithoutCategoriesInput = {
    where: product_categoriesWhereUniqueInput
    create: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type product_categoriesCreateManyCategoriesInputEnvelope = {
    data: product_categoriesCreateManyCategoriesInput | product_categoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type product_categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: product_categoriesWhereUniqueInput
    update: XOR<product_categoriesUpdateWithoutCategoriesInput, product_categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<product_categoriesCreateWithoutCategoriesInput, product_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type product_categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: product_categoriesWhereUniqueInput
    data: XOR<product_categoriesUpdateWithoutCategoriesInput, product_categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type product_categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: product_categoriesScalarWhereInput
    data: XOR<product_categoriesUpdateManyMutationInput, product_categoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type categoriesCreateWithoutProduct_categoriesInput = {
    slug: string
    label: string
    image: string
  }

  export type categoriesUncheckedCreateWithoutProduct_categoriesInput = {
    id?: number
    slug: string
    label: string
    image: string
  }

  export type categoriesCreateOrConnectWithoutProduct_categoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProduct_categoriesInput, categoriesUncheckedCreateWithoutProduct_categoriesInput>
  }

  export type productsCreateWithoutProduct_categoriesInput = {
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    product_occasions?: product_occasionsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_categoriesInput = {
    id?: number
    name: string
    descriptionRu?: string | null
    price?: number | null
    category?: string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: string | null
    width?: number | null
    height?: number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    is_active?: boolean
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    product_occasions?: product_occasionsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_categoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_categoriesInput, productsUncheckedCreateWithoutProduct_categoriesInput>
  }

  export type categoriesUpsertWithoutProduct_categoriesInput = {
    update: XOR<categoriesUpdateWithoutProduct_categoriesInput, categoriesUncheckedUpdateWithoutProduct_categoriesInput>
    create: XOR<categoriesCreateWithoutProduct_categoriesInput, categoriesUncheckedCreateWithoutProduct_categoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProduct_categoriesInput, categoriesUncheckedUpdateWithoutProduct_categoriesInput>
  }

  export type categoriesUpdateWithoutProduct_categoriesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateWithoutProduct_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type productsUpsertWithoutProduct_categoriesInput = {
    update: XOR<productsUpdateWithoutProduct_categoriesInput, productsUncheckedUpdateWithoutProduct_categoriesInput>
    create: XOR<productsCreateWithoutProduct_categoriesInput, productsUncheckedCreateWithoutProduct_categoriesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_categoriesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_categoriesInput, productsUncheckedUpdateWithoutProduct_categoriesInput>
  }

  export type productsUpdateWithoutProduct_categoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    product_occasions?: product_occasionsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    descriptionRu?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableJsonNullValueInput | InputJsonValue
    image?: NullableJsonNullValueInput | InputJsonValue
    occasion?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    items?: NullableJsonNullValueInput | InputJsonValue
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    product_occasions?: product_occasionsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type product_categoriesCreateManyProductsInput = {
    category_id: number
  }

  export type product_imagesCreateManyProductsInput = {
    id?: number
    image_url: string
    is_primary?: boolean | null
    display_order?: number | null
  }

  export type product_occasionsCreateManyProductsInput = {
    occasion_id: number
  }

  export type product_categoriesUpdateWithoutProductsInput = {
    categories?: categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput
  }

  export type product_categoriesUncheckedUpdateWithoutProductsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_categoriesUncheckedUpdateManyWithoutProductsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_imagesUpdateWithoutProductsInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_imagesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_imagesUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type product_occasionsUpdateWithoutProductsInput = {
    occasions?: occasionsUpdateOneRequiredWithoutProduct_occasionsNestedInput
  }

  export type product_occasionsUncheckedUpdateWithoutProductsInput = {
    occasion_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_occasionsUncheckedUpdateManyWithoutProductsInput = {
    occasion_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_occasionsCreateManyOccasionsInput = {
    product_id: number
  }

  export type product_occasionsUpdateWithoutOccasionsInput = {
    products?: productsUpdateOneRequiredWithoutProduct_occasionsNestedInput
  }

  export type product_occasionsUncheckedUpdateWithoutOccasionsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_occasionsUncheckedUpdateManyWithoutOccasionsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_categoriesCreateManyCategoriesInput = {
    product_id: number
  }

  export type product_categoriesUpdateWithoutCategoriesInput = {
    products?: productsUpdateOneRequiredWithoutProduct_categoriesNestedInput
  }

  export type product_categoriesUncheckedUpdateWithoutCategoriesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type product_categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
  }



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