
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
 * Model Account_Items
 * 
 */
export type Account_Items = $Result.DefaultSelection<Prisma.$Account_ItemsPayload>
/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model Items
 * 
 */
export type Items = $Result.DefaultSelection<Prisma.$ItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Account_Items
 * const account_Items = await prisma.account_Items.findMany()
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
   * // Fetch zero or more Account_Items
   * const account_Items = await prisma.account_Items.findMany()
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
   * `prisma.account_Items`: Exposes CRUD operations for the **Account_Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_Items
    * const account_Items = await prisma.account_Items.findMany()
    * ```
    */
  get account_Items(): Prisma.Account_ItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Account_Items: 'Account_Items',
    Accounts: 'Accounts',
    Items: 'Items'
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
      modelProps: "account_Items" | "accounts" | "items"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account_Items: {
        payload: Prisma.$Account_ItemsPayload<ExtArgs>
        fields: Prisma.Account_ItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Account_ItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Account_ItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>
          }
          findFirst: {
            args: Prisma.Account_ItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Account_ItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>
          }
          findMany: {
            args: Prisma.Account_ItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>[]
          }
          create: {
            args: Prisma.Account_ItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>
          }
          createMany: {
            args: Prisma.Account_ItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Account_ItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>[]
          }
          delete: {
            args: Prisma.Account_ItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>
          }
          update: {
            args: Prisma.Account_ItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>
          }
          deleteMany: {
            args: Prisma.Account_ItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Account_ItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Account_ItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>[]
          }
          upsert: {
            args: Prisma.Account_ItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Account_ItemsPayload>
          }
          aggregate: {
            args: Prisma.Account_ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount_Items>
          }
          groupBy: {
            args: Prisma.Account_ItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Account_ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Account_ItemsCountArgs<ExtArgs>
            result: $Utils.Optional<Account_ItemsCountAggregateOutputType> | number
          }
        }
      }
      Accounts: {
        payload: Prisma.$AccountsPayload<ExtArgs>
        fields: Prisma.AccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findFirst: {
            args: Prisma.AccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findMany: {
            args: Prisma.AccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          create: {
            args: Prisma.AccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          createMany: {
            args: Prisma.AccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          delete: {
            args: Prisma.AccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          update: {
            args: Prisma.AccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          deleteMany: {
            args: Prisma.AccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          upsert: {
            args: Prisma.AccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.AccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      Items: {
        payload: Prisma.$ItemsPayload<ExtArgs>
        fields: Prisma.ItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findFirst: {
            args: Prisma.ItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          findMany: {
            args: Prisma.ItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          create: {
            args: Prisma.ItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          createMany: {
            args: Prisma.ItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          delete: {
            args: Prisma.ItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          update: {
            args: Prisma.ItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          deleteMany: {
            args: Prisma.ItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>[]
          }
          upsert: {
            args: Prisma.ItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemsPayload>
          }
          aggregate: {
            args: Prisma.ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItems>
          }
          groupBy: {
            args: Prisma.ItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ItemsCountAggregateOutputType> | number
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
    account_Items?: Account_ItemsOmit
    accounts?: AccountsOmit
    items?: ItemsOmit
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
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    Account_Items: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Items?: boolean | AccountsCountOutputTypeCountAccount_ItemsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountAccount_ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Account_ItemsWhereInput
  }


  /**
   * Count Type ItemsCountOutputType
   */

  export type ItemsCountOutputType = {
    Account_Items: number
  }

  export type ItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Items?: boolean | ItemsCountOutputTypeCountAccount_ItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemsCountOutputType
     */
    select?: ItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeCountAccount_ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Account_ItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account_Items
   */

  export type AggregateAccount_Items = {
    _count: Account_ItemsCountAggregateOutputType | null
    _avg: Account_ItemsAvgAggregateOutputType | null
    _sum: Account_ItemsSumAggregateOutputType | null
    _min: Account_ItemsMinAggregateOutputType | null
    _max: Account_ItemsMaxAggregateOutputType | null
  }

  export type Account_ItemsAvgAggregateOutputType = {
    ItemID: number | null
    Price: number | null
    PurchasePrice: number | null
    Qty: number | null
  }

  export type Account_ItemsSumAggregateOutputType = {
    ItemID: bigint | null
    Price: bigint | null
    PurchasePrice: bigint | null
    Qty: bigint | null
  }

  export type Account_ItemsMinAggregateOutputType = {
    AccountID: string | null
    ItemID: bigint | null
    Price: bigint | null
    PurchasePrice: bigint | null
    Qty: bigint | null
    ImageLink: string | null
  }

  export type Account_ItemsMaxAggregateOutputType = {
    AccountID: string | null
    ItemID: bigint | null
    Price: bigint | null
    PurchasePrice: bigint | null
    Qty: bigint | null
    ImageLink: string | null
  }

  export type Account_ItemsCountAggregateOutputType = {
    AccountID: number
    ItemID: number
    Price: number
    PurchasePrice: number
    Qty: number
    ImageLink: number
    _all: number
  }


  export type Account_ItemsAvgAggregateInputType = {
    ItemID?: true
    Price?: true
    PurchasePrice?: true
    Qty?: true
  }

  export type Account_ItemsSumAggregateInputType = {
    ItemID?: true
    Price?: true
    PurchasePrice?: true
    Qty?: true
  }

  export type Account_ItemsMinAggregateInputType = {
    AccountID?: true
    ItemID?: true
    Price?: true
    PurchasePrice?: true
    Qty?: true
    ImageLink?: true
  }

  export type Account_ItemsMaxAggregateInputType = {
    AccountID?: true
    ItemID?: true
    Price?: true
    PurchasePrice?: true
    Qty?: true
    ImageLink?: true
  }

  export type Account_ItemsCountAggregateInputType = {
    AccountID?: true
    ItemID?: true
    Price?: true
    PurchasePrice?: true
    Qty?: true
    ImageLink?: true
    _all?: true
  }

  export type Account_ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account_Items to aggregate.
     */
    where?: Account_ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Account_Items to fetch.
     */
    orderBy?: Account_ItemsOrderByWithRelationInput | Account_ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Account_ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Account_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Account_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Account_Items
    **/
    _count?: true | Account_ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Account_ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Account_ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_ItemsMaxAggregateInputType
  }

  export type GetAccount_ItemsAggregateType<T extends Account_ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_Items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_Items[P]>
      : GetScalarType<T[P], AggregateAccount_Items[P]>
  }




  export type Account_ItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Account_ItemsWhereInput
    orderBy?: Account_ItemsOrderByWithAggregationInput | Account_ItemsOrderByWithAggregationInput[]
    by: Account_ItemsScalarFieldEnum[] | Account_ItemsScalarFieldEnum
    having?: Account_ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_ItemsCountAggregateInputType | true
    _avg?: Account_ItemsAvgAggregateInputType
    _sum?: Account_ItemsSumAggregateInputType
    _min?: Account_ItemsMinAggregateInputType
    _max?: Account_ItemsMaxAggregateInputType
  }

  export type Account_ItemsGroupByOutputType = {
    AccountID: string
    ItemID: bigint
    Price: bigint
    PurchasePrice: bigint
    Qty: bigint
    ImageLink: string
    _count: Account_ItemsCountAggregateOutputType | null
    _avg: Account_ItemsAvgAggregateOutputType | null
    _sum: Account_ItemsSumAggregateOutputType | null
    _min: Account_ItemsMinAggregateOutputType | null
    _max: Account_ItemsMaxAggregateOutputType | null
  }

  type GetAccount_ItemsGroupByPayload<T extends Account_ItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Account_ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], Account_ItemsGroupByOutputType[P]>
        }
      >
    >


  export type Account_ItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AccountID?: boolean
    ItemID?: boolean
    Price?: boolean
    PurchasePrice?: boolean
    Qty?: boolean
    ImageLink?: boolean
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
    Items?: boolean | ItemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_Items"]>

  export type Account_ItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AccountID?: boolean
    ItemID?: boolean
    Price?: boolean
    PurchasePrice?: boolean
    Qty?: boolean
    ImageLink?: boolean
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
    Items?: boolean | ItemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_Items"]>

  export type Account_ItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AccountID?: boolean
    ItemID?: boolean
    Price?: boolean
    PurchasePrice?: boolean
    Qty?: boolean
    ImageLink?: boolean
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
    Items?: boolean | ItemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_Items"]>

  export type Account_ItemsSelectScalar = {
    AccountID?: boolean
    ItemID?: boolean
    Price?: boolean
    PurchasePrice?: boolean
    Qty?: boolean
    ImageLink?: boolean
  }

  export type Account_ItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"AccountID" | "ItemID" | "Price" | "PurchasePrice" | "Qty" | "ImageLink", ExtArgs["result"]["account_Items"]>
  export type Account_ItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
    Items?: boolean | ItemsDefaultArgs<ExtArgs>
  }
  export type Account_ItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
    Items?: boolean | ItemsDefaultArgs<ExtArgs>
  }
  export type Account_ItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
    Items?: boolean | ItemsDefaultArgs<ExtArgs>
  }

  export type $Account_ItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account_Items"
    objects: {
      Accounts: Prisma.$AccountsPayload<ExtArgs>
      Items: Prisma.$ItemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      AccountID: string
      ItemID: bigint
      Price: bigint
      PurchasePrice: bigint
      Qty: bigint
      ImageLink: string
    }, ExtArgs["result"]["account_Items"]>
    composites: {}
  }

  type Account_ItemsGetPayload<S extends boolean | null | undefined | Account_ItemsDefaultArgs> = $Result.GetResult<Prisma.$Account_ItemsPayload, S>

  type Account_ItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Account_ItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Account_ItemsCountAggregateInputType | true
    }

  export interface Account_ItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account_Items'], meta: { name: 'Account_Items' } }
    /**
     * Find zero or one Account_Items that matches the filter.
     * @param {Account_ItemsFindUniqueArgs} args - Arguments to find a Account_Items
     * @example
     * // Get one Account_Items
     * const account_Items = await prisma.account_Items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Account_ItemsFindUniqueArgs>(args: SelectSubset<T, Account_ItemsFindUniqueArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account_Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Account_ItemsFindUniqueOrThrowArgs} args - Arguments to find a Account_Items
     * @example
     * // Get one Account_Items
     * const account_Items = await prisma.account_Items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Account_ItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, Account_ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_ItemsFindFirstArgs} args - Arguments to find a Account_Items
     * @example
     * // Get one Account_Items
     * const account_Items = await prisma.account_Items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Account_ItemsFindFirstArgs>(args?: SelectSubset<T, Account_ItemsFindFirstArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_ItemsFindFirstOrThrowArgs} args - Arguments to find a Account_Items
     * @example
     * // Get one Account_Items
     * const account_Items = await prisma.account_Items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Account_ItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, Account_ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Account_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_Items
     * const account_Items = await prisma.account_Items.findMany()
     * 
     * // Get first 10 Account_Items
     * const account_Items = await prisma.account_Items.findMany({ take: 10 })
     * 
     * // Only select the `AccountID`
     * const account_ItemsWithAccountIDOnly = await prisma.account_Items.findMany({ select: { AccountID: true } })
     * 
     */
    findMany<T extends Account_ItemsFindManyArgs>(args?: SelectSubset<T, Account_ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account_Items.
     * @param {Account_ItemsCreateArgs} args - Arguments to create a Account_Items.
     * @example
     * // Create one Account_Items
     * const Account_Items = await prisma.account_Items.create({
     *   data: {
     *     // ... data to create a Account_Items
     *   }
     * })
     * 
     */
    create<T extends Account_ItemsCreateArgs>(args: SelectSubset<T, Account_ItemsCreateArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Account_Items.
     * @param {Account_ItemsCreateManyArgs} args - Arguments to create many Account_Items.
     * @example
     * // Create many Account_Items
     * const account_Items = await prisma.account_Items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Account_ItemsCreateManyArgs>(args?: SelectSubset<T, Account_ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Account_Items and returns the data saved in the database.
     * @param {Account_ItemsCreateManyAndReturnArgs} args - Arguments to create many Account_Items.
     * @example
     * // Create many Account_Items
     * const account_Items = await prisma.account_Items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Account_Items and only return the `AccountID`
     * const account_ItemsWithAccountIDOnly = await prisma.account_Items.createManyAndReturn({
     *   select: { AccountID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Account_ItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, Account_ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account_Items.
     * @param {Account_ItemsDeleteArgs} args - Arguments to delete one Account_Items.
     * @example
     * // Delete one Account_Items
     * const Account_Items = await prisma.account_Items.delete({
     *   where: {
     *     // ... filter to delete one Account_Items
     *   }
     * })
     * 
     */
    delete<T extends Account_ItemsDeleteArgs>(args: SelectSubset<T, Account_ItemsDeleteArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account_Items.
     * @param {Account_ItemsUpdateArgs} args - Arguments to update one Account_Items.
     * @example
     * // Update one Account_Items
     * const account_Items = await prisma.account_Items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Account_ItemsUpdateArgs>(args: SelectSubset<T, Account_ItemsUpdateArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Account_Items.
     * @param {Account_ItemsDeleteManyArgs} args - Arguments to filter Account_Items to delete.
     * @example
     * // Delete a few Account_Items
     * const { count } = await prisma.account_Items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Account_ItemsDeleteManyArgs>(args?: SelectSubset<T, Account_ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_Items
     * const account_Items = await prisma.account_Items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Account_ItemsUpdateManyArgs>(args: SelectSubset<T, Account_ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_Items and returns the data updated in the database.
     * @param {Account_ItemsUpdateManyAndReturnArgs} args - Arguments to update many Account_Items.
     * @example
     * // Update many Account_Items
     * const account_Items = await prisma.account_Items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Account_Items and only return the `AccountID`
     * const account_ItemsWithAccountIDOnly = await prisma.account_Items.updateManyAndReturn({
     *   select: { AccountID: true },
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
    updateManyAndReturn<T extends Account_ItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, Account_ItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account_Items.
     * @param {Account_ItemsUpsertArgs} args - Arguments to update or create a Account_Items.
     * @example
     * // Update or create a Account_Items
     * const account_Items = await prisma.account_Items.upsert({
     *   create: {
     *     // ... data to create a Account_Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_Items we want to update
     *   }
     * })
     */
    upsert<T extends Account_ItemsUpsertArgs>(args: SelectSubset<T, Account_ItemsUpsertArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Account_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_ItemsCountArgs} args - Arguments to filter Account_Items to count.
     * @example
     * // Count the number of Account_Items
     * const count = await prisma.account_Items.count({
     *   where: {
     *     // ... the filter for the Account_Items we want to count
     *   }
     * })
    **/
    count<T extends Account_ItemsCountArgs>(
      args?: Subset<T, Account_ItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Account_ItemsAggregateArgs>(args: Subset<T, Account_ItemsAggregateArgs>): Prisma.PrismaPromise<GetAccount_ItemsAggregateType<T>>

    /**
     * Group by Account_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_ItemsGroupByArgs} args - Group by arguments.
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
      T extends Account_ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Account_ItemsGroupByArgs['orderBy'] }
        : { orderBy?: Account_ItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Account_ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_ItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account_Items model
   */
  readonly fields: Account_ItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account_Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Account_ItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Accounts<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Items<T extends ItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemsDefaultArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account_Items model
   */
  interface Account_ItemsFieldRefs {
    readonly AccountID: FieldRef<"Account_Items", 'String'>
    readonly ItemID: FieldRef<"Account_Items", 'BigInt'>
    readonly Price: FieldRef<"Account_Items", 'BigInt'>
    readonly PurchasePrice: FieldRef<"Account_Items", 'BigInt'>
    readonly Qty: FieldRef<"Account_Items", 'BigInt'>
    readonly ImageLink: FieldRef<"Account_Items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account_Items findUnique
   */
  export type Account_ItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Account_Items to fetch.
     */
    where: Account_ItemsWhereUniqueInput
  }

  /**
   * Account_Items findUniqueOrThrow
   */
  export type Account_ItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Account_Items to fetch.
     */
    where: Account_ItemsWhereUniqueInput
  }

  /**
   * Account_Items findFirst
   */
  export type Account_ItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Account_Items to fetch.
     */
    where?: Account_ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Account_Items to fetch.
     */
    orderBy?: Account_ItemsOrderByWithRelationInput | Account_ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Account_Items.
     */
    cursor?: Account_ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Account_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Account_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Account_Items.
     */
    distinct?: Account_ItemsScalarFieldEnum | Account_ItemsScalarFieldEnum[]
  }

  /**
   * Account_Items findFirstOrThrow
   */
  export type Account_ItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Account_Items to fetch.
     */
    where?: Account_ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Account_Items to fetch.
     */
    orderBy?: Account_ItemsOrderByWithRelationInput | Account_ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Account_Items.
     */
    cursor?: Account_ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Account_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Account_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Account_Items.
     */
    distinct?: Account_ItemsScalarFieldEnum | Account_ItemsScalarFieldEnum[]
  }

  /**
   * Account_Items findMany
   */
  export type Account_ItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Account_Items to fetch.
     */
    where?: Account_ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Account_Items to fetch.
     */
    orderBy?: Account_ItemsOrderByWithRelationInput | Account_ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Account_Items.
     */
    cursor?: Account_ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Account_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Account_Items.
     */
    skip?: number
    distinct?: Account_ItemsScalarFieldEnum | Account_ItemsScalarFieldEnum[]
  }

  /**
   * Account_Items create
   */
  export type Account_ItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Account_Items.
     */
    data: XOR<Account_ItemsCreateInput, Account_ItemsUncheckedCreateInput>
  }

  /**
   * Account_Items createMany
   */
  export type Account_ItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Account_Items.
     */
    data: Account_ItemsCreateManyInput | Account_ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account_Items createManyAndReturn
   */
  export type Account_ItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * The data used to create many Account_Items.
     */
    data: Account_ItemsCreateManyInput | Account_ItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account_Items update
   */
  export type Account_ItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Account_Items.
     */
    data: XOR<Account_ItemsUpdateInput, Account_ItemsUncheckedUpdateInput>
    /**
     * Choose, which Account_Items to update.
     */
    where: Account_ItemsWhereUniqueInput
  }

  /**
   * Account_Items updateMany
   */
  export type Account_ItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Account_Items.
     */
    data: XOR<Account_ItemsUpdateManyMutationInput, Account_ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Account_Items to update
     */
    where?: Account_ItemsWhereInput
    /**
     * Limit how many Account_Items to update.
     */
    limit?: number
  }

  /**
   * Account_Items updateManyAndReturn
   */
  export type Account_ItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * The data used to update Account_Items.
     */
    data: XOR<Account_ItemsUpdateManyMutationInput, Account_ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Account_Items to update
     */
    where?: Account_ItemsWhereInput
    /**
     * Limit how many Account_Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account_Items upsert
   */
  export type Account_ItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Account_Items to update in case it exists.
     */
    where: Account_ItemsWhereUniqueInput
    /**
     * In case the Account_Items found by the `where` argument doesn't exist, create a new Account_Items with this data.
     */
    create: XOR<Account_ItemsCreateInput, Account_ItemsUncheckedCreateInput>
    /**
     * In case the Account_Items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Account_ItemsUpdateInput, Account_ItemsUncheckedUpdateInput>
  }

  /**
   * Account_Items delete
   */
  export type Account_ItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    /**
     * Filter which Account_Items to delete.
     */
    where: Account_ItemsWhereUniqueInput
  }

  /**
   * Account_Items deleteMany
   */
  export type Account_ItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account_Items to delete
     */
    where?: Account_ItemsWhereInput
    /**
     * Limit how many Account_Items to delete.
     */
    limit?: number
  }

  /**
   * Account_Items without action
   */
  export type Account_ItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
  }


  /**
   * Model Accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    AccountID: string | null
    Email: string | null
    FirstName: string | null
    LastName: string | null
    Password: Uint8Array | null
    Username: string | null
    FacebookID: string | null
    GoogleID: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    AccountID: string | null
    Email: string | null
    FirstName: string | null
    LastName: string | null
    Password: Uint8Array | null
    Username: string | null
    FacebookID: string | null
    GoogleID: string | null
  }

  export type AccountsCountAggregateOutputType = {
    AccountID: number
    Email: number
    FirstName: number
    LastName: number
    Password: number
    Username: number
    FacebookID: number
    GoogleID: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    AccountID?: true
    Email?: true
    FirstName?: true
    LastName?: true
    Password?: true
    Username?: true
    FacebookID?: true
    GoogleID?: true
  }

  export type AccountsMaxAggregateInputType = {
    AccountID?: true
    Email?: true
    FirstName?: true
    LastName?: true
    Password?: true
    Username?: true
    FacebookID?: true
    GoogleID?: true
  }

  export type AccountsCountAggregateInputType = {
    AccountID?: true
    Email?: true
    FirstName?: true
    LastName?: true
    Password?: true
    Username?: true
    FacebookID?: true
    GoogleID?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to aggregate.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithAggregationInput | AccountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Username: string | null
    FacebookID: string | null
    GoogleID: string | null
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AccountID?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    Password?: boolean
    Username?: boolean
    FacebookID?: boolean
    GoogleID?: boolean
    Account_Items?: boolean | Accounts$Account_ItemsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AccountID?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    Password?: boolean
    Username?: boolean
    FacebookID?: boolean
    GoogleID?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AccountID?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    Password?: boolean
    Username?: boolean
    FacebookID?: boolean
    GoogleID?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    AccountID?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    Password?: boolean
    Username?: boolean
    FacebookID?: boolean
    GoogleID?: boolean
  }

  export type AccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"AccountID" | "Email" | "FirstName" | "LastName" | "Password" | "Username" | "FacebookID" | "GoogleID", ExtArgs["result"]["accounts"]>
  export type AccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Items?: boolean | Accounts$Account_ItemsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {
      Account_Items: Prisma.$Account_ItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      AccountID: string
      Email: string
      FirstName: string
      LastName: string
      Password: Uint8Array
      Username: string | null
      FacebookID: string | null
      GoogleID: string | null
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type AccountsGetPayload<S extends boolean | null | undefined | AccountsDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayload, S>

  type AccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface AccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accounts'], meta: { name: 'Accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsFindUniqueArgs>(args: SelectSubset<T, AccountsFindUniqueArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsFindFirstArgs>(args?: SelectSubset<T, AccountsFindFirstArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `AccountID`
     * const accountsWithAccountIDOnly = await prisma.accounts.findMany({ select: { AccountID: true } })
     * 
     */
    findMany<T extends AccountsFindManyArgs>(args?: SelectSubset<T, AccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends AccountsCreateArgs>(args: SelectSubset<T, AccountsCreateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsCreateManyArgs>(args?: SelectSubset<T, AccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `AccountID`
     * const accountsWithAccountIDOnly = await prisma.accounts.createManyAndReturn({
     *   select: { AccountID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends AccountsDeleteArgs>(args: SelectSubset<T, AccountsDeleteArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsUpdateArgs>(args: SelectSubset<T, AccountsUpdateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsDeleteManyArgs>(args?: SelectSubset<T, AccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsUpdateManyArgs>(args: SelectSubset<T, AccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `AccountID`
     * const accountsWithAccountIDOnly = await prisma.accounts.updateManyAndReturn({
     *   select: { AccountID: true },
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
    updateManyAndReturn<T extends AccountsUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends AccountsUpsertArgs>(args: SelectSubset<T, AccountsUpsertArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
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
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accounts model
   */
  readonly fields: AccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account_Items<T extends Accounts$Account_ItemsArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$Account_ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Accounts model
   */
  interface AccountsFieldRefs {
    readonly AccountID: FieldRef<"Accounts", 'String'>
    readonly Email: FieldRef<"Accounts", 'String'>
    readonly FirstName: FieldRef<"Accounts", 'String'>
    readonly LastName: FieldRef<"Accounts", 'String'>
    readonly Password: FieldRef<"Accounts", 'Bytes'>
    readonly Username: FieldRef<"Accounts", 'String'>
    readonly FacebookID: FieldRef<"Accounts", 'String'>
    readonly GoogleID: FieldRef<"Accounts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Accounts findUnique
   */
  export type AccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findFirst
   */
  export type AccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts create
   */
  export type AccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a Accounts.
     */
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }

  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts createManyAndReturn
   */
  export type AccountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts update
   */
  export type AccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a Accounts.
     */
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Accounts updateManyAndReturn
   */
  export type AccountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     */
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     */
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }

  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter which Accounts to delete.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Accounts.Account_Items
   */
  export type Accounts$Account_ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    where?: Account_ItemsWhereInput
    orderBy?: Account_ItemsOrderByWithRelationInput | Account_ItemsOrderByWithRelationInput[]
    cursor?: Account_ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_ItemsScalarFieldEnum | Account_ItemsScalarFieldEnum[]
  }

  /**
   * Accounts without action
   */
  export type AccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
  }


  /**
   * Model Items
   */

  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    ItemID: number | null
    Code: number | null
    CategoryID: number | null
  }

  export type ItemsSumAggregateOutputType = {
    ItemID: bigint | null
    Code: bigint | null
    CategoryID: bigint | null
  }

  export type ItemsMinAggregateOutputType = {
    ItemID: bigint | null
    Name: string | null
    Code: bigint | null
    CategoryID: bigint | null
    Brand: string | null
    Type: string | null
    DefaultImageLink: string | null
  }

  export type ItemsMaxAggregateOutputType = {
    ItemID: bigint | null
    Name: string | null
    Code: bigint | null
    CategoryID: bigint | null
    Brand: string | null
    Type: string | null
    DefaultImageLink: string | null
  }

  export type ItemsCountAggregateOutputType = {
    ItemID: number
    Name: number
    Code: number
    CategoryID: number
    Brand: number
    Type: number
    DefaultImageLink: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    ItemID?: true
    Code?: true
    CategoryID?: true
  }

  export type ItemsSumAggregateInputType = {
    ItemID?: true
    Code?: true
    CategoryID?: true
  }

  export type ItemsMinAggregateInputType = {
    ItemID?: true
    Name?: true
    Code?: true
    CategoryID?: true
    Brand?: true
    Type?: true
    DefaultImageLink?: true
  }

  export type ItemsMaxAggregateInputType = {
    ItemID?: true
    Name?: true
    Code?: true
    CategoryID?: true
    Brand?: true
    Type?: true
    DefaultImageLink?: true
  }

  export type ItemsCountAggregateInputType = {
    ItemID?: true
    Name?: true
    Code?: true
    CategoryID?: true
    Brand?: true
    Type?: true
    DefaultImageLink?: true
    _all?: true
  }

  export type ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to aggregate.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemsWhereInput
    orderBy?: ItemsOrderByWithAggregationInput | ItemsOrderByWithAggregationInput[]
    by: ItemsScalarFieldEnum[] | ItemsScalarFieldEnum
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }

  export type ItemsGroupByOutputType = {
    ItemID: bigint
    Name: string
    Code: bigint
    CategoryID: bigint
    Brand: string
    Type: string
    DefaultImageLink: string
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemID?: boolean
    Name?: boolean
    Code?: boolean
    CategoryID?: boolean
    Brand?: boolean
    Type?: boolean
    DefaultImageLink?: boolean
    Account_Items?: boolean | Items$Account_ItemsArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemID?: boolean
    Name?: boolean
    Code?: boolean
    CategoryID?: boolean
    Brand?: boolean
    Type?: boolean
    DefaultImageLink?: boolean
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemID?: boolean
    Name?: boolean
    Code?: boolean
    CategoryID?: boolean
    Brand?: boolean
    Type?: boolean
    DefaultImageLink?: boolean
  }, ExtArgs["result"]["items"]>

  export type ItemsSelectScalar = {
    ItemID?: boolean
    Name?: boolean
    Code?: boolean
    CategoryID?: boolean
    Brand?: boolean
    Type?: boolean
    DefaultImageLink?: boolean
  }

  export type ItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ItemID" | "Name" | "Code" | "CategoryID" | "Brand" | "Type" | "DefaultImageLink", ExtArgs["result"]["items"]>
  export type ItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Items?: boolean | Items$Account_ItemsArgs<ExtArgs>
    _count?: boolean | ItemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Items"
    objects: {
      Account_Items: Prisma.$Account_ItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ItemID: bigint
      Name: string
      Code: bigint
      CategoryID: bigint
      Brand: string
      Type: string
      DefaultImageLink: string
    }, ExtArgs["result"]["items"]>
    composites: {}
  }

  type ItemsGetPayload<S extends boolean | null | undefined | ItemsDefaultArgs> = $Result.GetResult<Prisma.$ItemsPayload, S>

  type ItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemsCountAggregateInputType | true
    }

  export interface ItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Items'], meta: { name: 'Items' } }
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemsFindUniqueArgs>(args: SelectSubset<T, ItemsFindUniqueArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemsFindFirstArgs>(args?: SelectSubset<T, ItemsFindFirstArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `ItemID`
     * const itemsWithItemIDOnly = await prisma.items.findMany({ select: { ItemID: true } })
     * 
     */
    findMany<T extends ItemsFindManyArgs>(args?: SelectSubset<T, ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
     */
    create<T extends ItemsCreateArgs>(args: SelectSubset<T, ItemsCreateArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemsCreateManyArgs>(args?: SelectSubset<T, ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemsCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const items = await prisma.items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `ItemID`
     * const itemsWithItemIDOnly = await prisma.items.createManyAndReturn({
     *   select: { ItemID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
     */
    delete<T extends ItemsDeleteArgs>(args: SelectSubset<T, ItemsDeleteArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemsUpdateArgs>(args: SelectSubset<T, ItemsUpdateArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemsDeleteManyArgs>(args?: SelectSubset<T, ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemsUpdateManyArgs>(args: SelectSubset<T, ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemsUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `ItemID`
     * const itemsWithItemIDOnly = await prisma.items.updateManyAndReturn({
     *   select: { ItemID: true },
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
    updateManyAndReturn<T extends ItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
     */
    upsert<T extends ItemsUpsertArgs>(args: SelectSubset<T, ItemsUpsertArgs<ExtArgs>>): Prisma__ItemsClient<$Result.GetResult<Prisma.$ItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): Prisma.PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
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
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Items model
   */
  readonly fields: ItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account_Items<T extends Items$Account_ItemsArgs<ExtArgs> = {}>(args?: Subset<T, Items$Account_ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Items model
   */
  interface ItemsFieldRefs {
    readonly ItemID: FieldRef<"Items", 'BigInt'>
    readonly Name: FieldRef<"Items", 'String'>
    readonly Code: FieldRef<"Items", 'BigInt'>
    readonly CategoryID: FieldRef<"Items", 'BigInt'>
    readonly Brand: FieldRef<"Items", 'String'>
    readonly Type: FieldRef<"Items", 'String'>
    readonly DefaultImageLink: FieldRef<"Items", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Items findUnique
   */
  export type ItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findFirst
   */
  export type ItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items findMany
   */
  export type ItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemsOrderByWithRelationInput | ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemsScalarFieldEnum | ItemsScalarFieldEnum[]
  }

  /**
   * Items create
   */
  export type ItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Items.
     */
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }

  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Items createManyAndReturn
   */
  export type ItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemsCreateManyInput | ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Items update
   */
  export type ItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Items.
     */
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Items updateManyAndReturn
   */
  export type ItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Items upsert
   */
  export type ItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Items to update in case it exists.
     */
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     */
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }

  /**
   * Items delete
   */
  export type ItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
    /**
     * Filter which Items to delete.
     */
    where: ItemsWhereUniqueInput
  }

  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemsWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Items.Account_Items
   */
  export type Items$Account_ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_Items
     */
    select?: Account_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account_Items
     */
    omit?: Account_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Account_ItemsInclude<ExtArgs> | null
    where?: Account_ItemsWhereInput
    orderBy?: Account_ItemsOrderByWithRelationInput | Account_ItemsOrderByWithRelationInput[]
    cursor?: Account_ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_ItemsScalarFieldEnum | Account_ItemsScalarFieldEnum[]
  }

  /**
   * Items without action
   */
  export type ItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Items
     */
    select?: ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Items
     */
    omit?: ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemsInclude<ExtArgs> | null
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


  export const Account_ItemsScalarFieldEnum: {
    AccountID: 'AccountID',
    ItemID: 'ItemID',
    Price: 'Price',
    PurchasePrice: 'PurchasePrice',
    Qty: 'Qty',
    ImageLink: 'ImageLink'
  };

  export type Account_ItemsScalarFieldEnum = (typeof Account_ItemsScalarFieldEnum)[keyof typeof Account_ItemsScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    AccountID: 'AccountID',
    Email: 'Email',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Password: 'Password',
    Username: 'Username',
    FacebookID: 'FacebookID',
    GoogleID: 'GoogleID'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    ItemID: 'ItemID',
    Name: 'Name',
    Code: 'Code',
    CategoryID: 'CategoryID',
    Brand: 'Brand',
    Type: 'Type',
    DefaultImageLink: 'DefaultImageLink'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type Account_ItemsWhereInput = {
    AND?: Account_ItemsWhereInput | Account_ItemsWhereInput[]
    OR?: Account_ItemsWhereInput[]
    NOT?: Account_ItemsWhereInput | Account_ItemsWhereInput[]
    AccountID?: UuidFilter<"Account_Items"> | string
    ItemID?: BigIntFilter<"Account_Items"> | bigint | number
    Price?: BigIntFilter<"Account_Items"> | bigint | number
    PurchasePrice?: BigIntFilter<"Account_Items"> | bigint | number
    Qty?: BigIntFilter<"Account_Items"> | bigint | number
    ImageLink?: StringFilter<"Account_Items"> | string
    Accounts?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    Items?: XOR<ItemsScalarRelationFilter, ItemsWhereInput>
  }

  export type Account_ItemsOrderByWithRelationInput = {
    AccountID?: SortOrder
    ItemID?: SortOrder
    Price?: SortOrder
    PurchasePrice?: SortOrder
    Qty?: SortOrder
    ImageLink?: SortOrder
    Accounts?: AccountsOrderByWithRelationInput
    Items?: ItemsOrderByWithRelationInput
  }

  export type Account_ItemsWhereUniqueInput = Prisma.AtLeast<{
    AccountID_ItemID?: Account_ItemsAccountIDItemIDCompoundUniqueInput
    AND?: Account_ItemsWhereInput | Account_ItemsWhereInput[]
    OR?: Account_ItemsWhereInput[]
    NOT?: Account_ItemsWhereInput | Account_ItemsWhereInput[]
    AccountID?: UuidFilter<"Account_Items"> | string
    ItemID?: BigIntFilter<"Account_Items"> | bigint | number
    Price?: BigIntFilter<"Account_Items"> | bigint | number
    PurchasePrice?: BigIntFilter<"Account_Items"> | bigint | number
    Qty?: BigIntFilter<"Account_Items"> | bigint | number
    ImageLink?: StringFilter<"Account_Items"> | string
    Accounts?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    Items?: XOR<ItemsScalarRelationFilter, ItemsWhereInput>
  }, "AccountID_ItemID">

  export type Account_ItemsOrderByWithAggregationInput = {
    AccountID?: SortOrder
    ItemID?: SortOrder
    Price?: SortOrder
    PurchasePrice?: SortOrder
    Qty?: SortOrder
    ImageLink?: SortOrder
    _count?: Account_ItemsCountOrderByAggregateInput
    _avg?: Account_ItemsAvgOrderByAggregateInput
    _max?: Account_ItemsMaxOrderByAggregateInput
    _min?: Account_ItemsMinOrderByAggregateInput
    _sum?: Account_ItemsSumOrderByAggregateInput
  }

  export type Account_ItemsScalarWhereWithAggregatesInput = {
    AND?: Account_ItemsScalarWhereWithAggregatesInput | Account_ItemsScalarWhereWithAggregatesInput[]
    OR?: Account_ItemsScalarWhereWithAggregatesInput[]
    NOT?: Account_ItemsScalarWhereWithAggregatesInput | Account_ItemsScalarWhereWithAggregatesInput[]
    AccountID?: UuidWithAggregatesFilter<"Account_Items"> | string
    ItemID?: BigIntWithAggregatesFilter<"Account_Items"> | bigint | number
    Price?: BigIntWithAggregatesFilter<"Account_Items"> | bigint | number
    PurchasePrice?: BigIntWithAggregatesFilter<"Account_Items"> | bigint | number
    Qty?: BigIntWithAggregatesFilter<"Account_Items"> | bigint | number
    ImageLink?: StringWithAggregatesFilter<"Account_Items"> | string
  }

  export type AccountsWhereInput = {
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    AccountID?: UuidFilter<"Accounts"> | string
    Email?: StringFilter<"Accounts"> | string
    FirstName?: StringFilter<"Accounts"> | string
    LastName?: StringFilter<"Accounts"> | string
    Password?: BytesFilter<"Accounts"> | Uint8Array
    Username?: StringNullableFilter<"Accounts"> | string | null
    FacebookID?: StringNullableFilter<"Accounts"> | string | null
    GoogleID?: StringNullableFilter<"Accounts"> | string | null
    Account_Items?: Account_ItemsListRelationFilter
  }

  export type AccountsOrderByWithRelationInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Username?: SortOrderInput | SortOrder
    FacebookID?: SortOrderInput | SortOrder
    GoogleID?: SortOrderInput | SortOrder
    Account_Items?: Account_ItemsOrderByRelationAggregateInput
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    AccountID?: string
    Email?: string
    Username?: string
    FacebookID?: string
    GoogleID?: string
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    FirstName?: StringFilter<"Accounts"> | string
    LastName?: StringFilter<"Accounts"> | string
    Password?: BytesFilter<"Accounts"> | Uint8Array
    Account_Items?: Account_ItemsListRelationFilter
  }, "AccountID" | "Email" | "Username" | "FacebookID" | "GoogleID">

  export type AccountsOrderByWithAggregationInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Username?: SortOrderInput | SortOrder
    FacebookID?: SortOrderInput | SortOrder
    GoogleID?: SortOrderInput | SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    OR?: AccountsScalarWhereWithAggregatesInput[]
    NOT?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    AccountID?: UuidWithAggregatesFilter<"Accounts"> | string
    Email?: StringWithAggregatesFilter<"Accounts"> | string
    FirstName?: StringWithAggregatesFilter<"Accounts"> | string
    LastName?: StringWithAggregatesFilter<"Accounts"> | string
    Password?: BytesWithAggregatesFilter<"Accounts"> | Uint8Array
    Username?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    FacebookID?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    GoogleID?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
  }

  export type ItemsWhereInput = {
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    ItemID?: BigIntFilter<"Items"> | bigint | number
    Name?: StringFilter<"Items"> | string
    Code?: BigIntFilter<"Items"> | bigint | number
    CategoryID?: BigIntFilter<"Items"> | bigint | number
    Brand?: StringFilter<"Items"> | string
    Type?: StringFilter<"Items"> | string
    DefaultImageLink?: StringFilter<"Items"> | string
    Account_Items?: Account_ItemsListRelationFilter
  }

  export type ItemsOrderByWithRelationInput = {
    ItemID?: SortOrder
    Name?: SortOrder
    Code?: SortOrder
    CategoryID?: SortOrder
    Brand?: SortOrder
    Type?: SortOrder
    DefaultImageLink?: SortOrder
    Account_Items?: Account_ItemsOrderByRelationAggregateInput
  }

  export type ItemsWhereUniqueInput = Prisma.AtLeast<{
    ItemID?: bigint | number
    Code?: bigint | number
    AND?: ItemsWhereInput | ItemsWhereInput[]
    OR?: ItemsWhereInput[]
    NOT?: ItemsWhereInput | ItemsWhereInput[]
    Name?: StringFilter<"Items"> | string
    CategoryID?: BigIntFilter<"Items"> | bigint | number
    Brand?: StringFilter<"Items"> | string
    Type?: StringFilter<"Items"> | string
    DefaultImageLink?: StringFilter<"Items"> | string
    Account_Items?: Account_ItemsListRelationFilter
  }, "ItemID" | "Code">

  export type ItemsOrderByWithAggregationInput = {
    ItemID?: SortOrder
    Name?: SortOrder
    Code?: SortOrder
    CategoryID?: SortOrder
    Brand?: SortOrder
    Type?: SortOrder
    DefaultImageLink?: SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _avg?: ItemsAvgOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
    _sum?: ItemsSumOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    OR?: ItemsScalarWhereWithAggregatesInput[]
    NOT?: ItemsScalarWhereWithAggregatesInput | ItemsScalarWhereWithAggregatesInput[]
    ItemID?: BigIntWithAggregatesFilter<"Items"> | bigint | number
    Name?: StringWithAggregatesFilter<"Items"> | string
    Code?: BigIntWithAggregatesFilter<"Items"> | bigint | number
    CategoryID?: BigIntWithAggregatesFilter<"Items"> | bigint | number
    Brand?: StringWithAggregatesFilter<"Items"> | string
    Type?: StringWithAggregatesFilter<"Items"> | string
    DefaultImageLink?: StringWithAggregatesFilter<"Items"> | string
  }

  export type Account_ItemsCreateInput = {
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    Accounts: AccountsCreateNestedOneWithoutAccount_ItemsInput
    Items: ItemsCreateNestedOneWithoutAccount_ItemsInput
  }

  export type Account_ItemsUncheckedCreateInput = {
    AccountID: string
    ItemID: bigint | number
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
  }

  export type Account_ItemsUpdateInput = {
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    Accounts?: AccountsUpdateOneRequiredWithoutAccount_ItemsNestedInput
    Items?: ItemsUpdateOneRequiredWithoutAccount_ItemsNestedInput
  }

  export type Account_ItemsUncheckedUpdateInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type Account_ItemsCreateManyInput = {
    AccountID: string
    ItemID: bigint | number
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
  }

  export type Account_ItemsUpdateManyMutationInput = {
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type Account_ItemsUncheckedUpdateManyInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type AccountsCreateInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    Account_Items?: Account_ItemsCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUncheckedCreateInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    Account_Items?: Account_ItemsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountsUpdateInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    Account_Items?: Account_ItemsUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    Account_Items?: Account_ItemsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountsCreateManyInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
  }

  export type AccountsUpdateManyMutationInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountsUncheckedUpdateManyInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemsCreateInput = {
    ItemID?: bigint | number
    Name: string
    Code: bigint | number
    CategoryID: bigint | number
    Brand: string
    Type: string
    DefaultImageLink: string
    Account_Items?: Account_ItemsCreateNestedManyWithoutItemsInput
  }

  export type ItemsUncheckedCreateInput = {
    ItemID?: bigint | number
    Name: string
    Code: bigint | number
    CategoryID: bigint | number
    Brand: string
    Type: string
    DefaultImageLink: string
    Account_Items?: Account_ItemsUncheckedCreateNestedManyWithoutItemsInput
  }

  export type ItemsUpdateInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Code?: BigIntFieldUpdateOperationsInput | bigint | number
    CategoryID?: BigIntFieldUpdateOperationsInput | bigint | number
    Brand?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    DefaultImageLink?: StringFieldUpdateOperationsInput | string
    Account_Items?: Account_ItemsUpdateManyWithoutItemsNestedInput
  }

  export type ItemsUncheckedUpdateInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Code?: BigIntFieldUpdateOperationsInput | bigint | number
    CategoryID?: BigIntFieldUpdateOperationsInput | bigint | number
    Brand?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    DefaultImageLink?: StringFieldUpdateOperationsInput | string
    Account_Items?: Account_ItemsUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type ItemsCreateManyInput = {
    ItemID?: bigint | number
    Name: string
    Code: bigint | number
    CategoryID: bigint | number
    Brand: string
    Type: string
    DefaultImageLink: string
  }

  export type ItemsUpdateManyMutationInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Code?: BigIntFieldUpdateOperationsInput | bigint | number
    CategoryID?: BigIntFieldUpdateOperationsInput | bigint | number
    Brand?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    DefaultImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsUncheckedUpdateManyInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Code?: BigIntFieldUpdateOperationsInput | bigint | number
    CategoryID?: BigIntFieldUpdateOperationsInput | bigint | number
    Brand?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    DefaultImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type AccountsScalarRelationFilter = {
    is?: AccountsWhereInput
    isNot?: AccountsWhereInput
  }

  export type ItemsScalarRelationFilter = {
    is?: ItemsWhereInput
    isNot?: ItemsWhereInput
  }

  export type Account_ItemsAccountIDItemIDCompoundUniqueInput = {
    AccountID: string
    ItemID: bigint | number
  }

  export type Account_ItemsCountOrderByAggregateInput = {
    AccountID?: SortOrder
    ItemID?: SortOrder
    Price?: SortOrder
    PurchasePrice?: SortOrder
    Qty?: SortOrder
    ImageLink?: SortOrder
  }

  export type Account_ItemsAvgOrderByAggregateInput = {
    ItemID?: SortOrder
    Price?: SortOrder
    PurchasePrice?: SortOrder
    Qty?: SortOrder
  }

  export type Account_ItemsMaxOrderByAggregateInput = {
    AccountID?: SortOrder
    ItemID?: SortOrder
    Price?: SortOrder
    PurchasePrice?: SortOrder
    Qty?: SortOrder
    ImageLink?: SortOrder
  }

  export type Account_ItemsMinOrderByAggregateInput = {
    AccountID?: SortOrder
    ItemID?: SortOrder
    Price?: SortOrder
    PurchasePrice?: SortOrder
    Qty?: SortOrder
    ImageLink?: SortOrder
  }

  export type Account_ItemsSumOrderByAggregateInput = {
    ItemID?: SortOrder
    Price?: SortOrder
    PurchasePrice?: SortOrder
    Qty?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
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

  export type Account_ItemsListRelationFilter = {
    every?: Account_ItemsWhereInput
    some?: Account_ItemsWhereInput
    none?: Account_ItemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Account_ItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Username?: SortOrder
    FacebookID?: SortOrder
    GoogleID?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Username?: SortOrder
    FacebookID?: SortOrder
    GoogleID?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Username?: SortOrder
    FacebookID?: SortOrder
    GoogleID?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type ItemsCountOrderByAggregateInput = {
    ItemID?: SortOrder
    Name?: SortOrder
    Code?: SortOrder
    CategoryID?: SortOrder
    Brand?: SortOrder
    Type?: SortOrder
    DefaultImageLink?: SortOrder
  }

  export type ItemsAvgOrderByAggregateInput = {
    ItemID?: SortOrder
    Code?: SortOrder
    CategoryID?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    ItemID?: SortOrder
    Name?: SortOrder
    Code?: SortOrder
    CategoryID?: SortOrder
    Brand?: SortOrder
    Type?: SortOrder
    DefaultImageLink?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    ItemID?: SortOrder
    Name?: SortOrder
    Code?: SortOrder
    CategoryID?: SortOrder
    Brand?: SortOrder
    Type?: SortOrder
    DefaultImageLink?: SortOrder
  }

  export type ItemsSumOrderByAggregateInput = {
    ItemID?: SortOrder
    Code?: SortOrder
    CategoryID?: SortOrder
  }

  export type AccountsCreateNestedOneWithoutAccount_ItemsInput = {
    create?: XOR<AccountsCreateWithoutAccount_ItemsInput, AccountsUncheckedCreateWithoutAccount_ItemsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutAccount_ItemsInput
    connect?: AccountsWhereUniqueInput
  }

  export type ItemsCreateNestedOneWithoutAccount_ItemsInput = {
    create?: XOR<ItemsCreateWithoutAccount_ItemsInput, ItemsUncheckedCreateWithoutAccount_ItemsInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutAccount_ItemsInput
    connect?: ItemsWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AccountsUpdateOneRequiredWithoutAccount_ItemsNestedInput = {
    create?: XOR<AccountsCreateWithoutAccount_ItemsInput, AccountsUncheckedCreateWithoutAccount_ItemsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutAccount_ItemsInput
    upsert?: AccountsUpsertWithoutAccount_ItemsInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutAccount_ItemsInput, AccountsUpdateWithoutAccount_ItemsInput>, AccountsUncheckedUpdateWithoutAccount_ItemsInput>
  }

  export type ItemsUpdateOneRequiredWithoutAccount_ItemsNestedInput = {
    create?: XOR<ItemsCreateWithoutAccount_ItemsInput, ItemsUncheckedCreateWithoutAccount_ItemsInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutAccount_ItemsInput
    upsert?: ItemsUpsertWithoutAccount_ItemsInput
    connect?: ItemsWhereUniqueInput
    update?: XOR<XOR<ItemsUpdateToOneWithWhereWithoutAccount_ItemsInput, ItemsUpdateWithoutAccount_ItemsInput>, ItemsUncheckedUpdateWithoutAccount_ItemsInput>
  }

  export type Account_ItemsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput> | Account_ItemsCreateWithoutAccountsInput[] | Account_ItemsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutAccountsInput | Account_ItemsCreateOrConnectWithoutAccountsInput[]
    createMany?: Account_ItemsCreateManyAccountsInputEnvelope
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
  }

  export type Account_ItemsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput> | Account_ItemsCreateWithoutAccountsInput[] | Account_ItemsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutAccountsInput | Account_ItemsCreateOrConnectWithoutAccountsInput[]
    createMany?: Account_ItemsCreateManyAccountsInputEnvelope
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Account_ItemsUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput> | Account_ItemsCreateWithoutAccountsInput[] | Account_ItemsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutAccountsInput | Account_ItemsCreateOrConnectWithoutAccountsInput[]
    upsert?: Account_ItemsUpsertWithWhereUniqueWithoutAccountsInput | Account_ItemsUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: Account_ItemsCreateManyAccountsInputEnvelope
    set?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    disconnect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    delete?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    update?: Account_ItemsUpdateWithWhereUniqueWithoutAccountsInput | Account_ItemsUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: Account_ItemsUpdateManyWithWhereWithoutAccountsInput | Account_ItemsUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: Account_ItemsScalarWhereInput | Account_ItemsScalarWhereInput[]
  }

  export type Account_ItemsUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput> | Account_ItemsCreateWithoutAccountsInput[] | Account_ItemsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutAccountsInput | Account_ItemsCreateOrConnectWithoutAccountsInput[]
    upsert?: Account_ItemsUpsertWithWhereUniqueWithoutAccountsInput | Account_ItemsUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: Account_ItemsCreateManyAccountsInputEnvelope
    set?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    disconnect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    delete?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    update?: Account_ItemsUpdateWithWhereUniqueWithoutAccountsInput | Account_ItemsUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: Account_ItemsUpdateManyWithWhereWithoutAccountsInput | Account_ItemsUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: Account_ItemsScalarWhereInput | Account_ItemsScalarWhereInput[]
  }

  export type Account_ItemsCreateNestedManyWithoutItemsInput = {
    create?: XOR<Account_ItemsCreateWithoutItemsInput, Account_ItemsUncheckedCreateWithoutItemsInput> | Account_ItemsCreateWithoutItemsInput[] | Account_ItemsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutItemsInput | Account_ItemsCreateOrConnectWithoutItemsInput[]
    createMany?: Account_ItemsCreateManyItemsInputEnvelope
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
  }

  export type Account_ItemsUncheckedCreateNestedManyWithoutItemsInput = {
    create?: XOR<Account_ItemsCreateWithoutItemsInput, Account_ItemsUncheckedCreateWithoutItemsInput> | Account_ItemsCreateWithoutItemsInput[] | Account_ItemsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutItemsInput | Account_ItemsCreateOrConnectWithoutItemsInput[]
    createMany?: Account_ItemsCreateManyItemsInputEnvelope
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
  }

  export type Account_ItemsUpdateManyWithoutItemsNestedInput = {
    create?: XOR<Account_ItemsCreateWithoutItemsInput, Account_ItemsUncheckedCreateWithoutItemsInput> | Account_ItemsCreateWithoutItemsInput[] | Account_ItemsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutItemsInput | Account_ItemsCreateOrConnectWithoutItemsInput[]
    upsert?: Account_ItemsUpsertWithWhereUniqueWithoutItemsInput | Account_ItemsUpsertWithWhereUniqueWithoutItemsInput[]
    createMany?: Account_ItemsCreateManyItemsInputEnvelope
    set?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    disconnect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    delete?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    update?: Account_ItemsUpdateWithWhereUniqueWithoutItemsInput | Account_ItemsUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: Account_ItemsUpdateManyWithWhereWithoutItemsInput | Account_ItemsUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: Account_ItemsScalarWhereInput | Account_ItemsScalarWhereInput[]
  }

  export type Account_ItemsUncheckedUpdateManyWithoutItemsNestedInput = {
    create?: XOR<Account_ItemsCreateWithoutItemsInput, Account_ItemsUncheckedCreateWithoutItemsInput> | Account_ItemsCreateWithoutItemsInput[] | Account_ItemsUncheckedCreateWithoutItemsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutItemsInput | Account_ItemsCreateOrConnectWithoutItemsInput[]
    upsert?: Account_ItemsUpsertWithWhereUniqueWithoutItemsInput | Account_ItemsUpsertWithWhereUniqueWithoutItemsInput[]
    createMany?: Account_ItemsCreateManyItemsInputEnvelope
    set?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    disconnect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    delete?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
    update?: Account_ItemsUpdateWithWhereUniqueWithoutItemsInput | Account_ItemsUpdateWithWhereUniqueWithoutItemsInput[]
    updateMany?: Account_ItemsUpdateManyWithWhereWithoutItemsInput | Account_ItemsUpdateManyWithWhereWithoutItemsInput[]
    deleteMany?: Account_ItemsScalarWhereInput | Account_ItemsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
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

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type AccountsCreateWithoutAccount_ItemsInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
  }

  export type AccountsUncheckedCreateWithoutAccount_ItemsInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
  }

  export type AccountsCreateOrConnectWithoutAccount_ItemsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutAccount_ItemsInput, AccountsUncheckedCreateWithoutAccount_ItemsInput>
  }

  export type ItemsCreateWithoutAccount_ItemsInput = {
    ItemID?: bigint | number
    Name: string
    Code: bigint | number
    CategoryID: bigint | number
    Brand: string
    Type: string
    DefaultImageLink: string
  }

  export type ItemsUncheckedCreateWithoutAccount_ItemsInput = {
    ItemID?: bigint | number
    Name: string
    Code: bigint | number
    CategoryID: bigint | number
    Brand: string
    Type: string
    DefaultImageLink: string
  }

  export type ItemsCreateOrConnectWithoutAccount_ItemsInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutAccount_ItemsInput, ItemsUncheckedCreateWithoutAccount_ItemsInput>
  }

  export type AccountsUpsertWithoutAccount_ItemsInput = {
    update: XOR<AccountsUpdateWithoutAccount_ItemsInput, AccountsUncheckedUpdateWithoutAccount_ItemsInput>
    create: XOR<AccountsCreateWithoutAccount_ItemsInput, AccountsUncheckedCreateWithoutAccount_ItemsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutAccount_ItemsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutAccount_ItemsInput, AccountsUncheckedUpdateWithoutAccount_ItemsInput>
  }

  export type AccountsUpdateWithoutAccount_ItemsInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountsUncheckedUpdateWithoutAccount_ItemsInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemsUpsertWithoutAccount_ItemsInput = {
    update: XOR<ItemsUpdateWithoutAccount_ItemsInput, ItemsUncheckedUpdateWithoutAccount_ItemsInput>
    create: XOR<ItemsCreateWithoutAccount_ItemsInput, ItemsUncheckedCreateWithoutAccount_ItemsInput>
    where?: ItemsWhereInput
  }

  export type ItemsUpdateToOneWithWhereWithoutAccount_ItemsInput = {
    where?: ItemsWhereInput
    data: XOR<ItemsUpdateWithoutAccount_ItemsInput, ItemsUncheckedUpdateWithoutAccount_ItemsInput>
  }

  export type ItemsUpdateWithoutAccount_ItemsInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Code?: BigIntFieldUpdateOperationsInput | bigint | number
    CategoryID?: BigIntFieldUpdateOperationsInput | bigint | number
    Brand?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    DefaultImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsUncheckedUpdateWithoutAccount_ItemsInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Name?: StringFieldUpdateOperationsInput | string
    Code?: BigIntFieldUpdateOperationsInput | bigint | number
    CategoryID?: BigIntFieldUpdateOperationsInput | bigint | number
    Brand?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    DefaultImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type Account_ItemsCreateWithoutAccountsInput = {
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    Items: ItemsCreateNestedOneWithoutAccount_ItemsInput
  }

  export type Account_ItemsUncheckedCreateWithoutAccountsInput = {
    ItemID: bigint | number
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
  }

  export type Account_ItemsCreateOrConnectWithoutAccountsInput = {
    where: Account_ItemsWhereUniqueInput
    create: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput>
  }

  export type Account_ItemsCreateManyAccountsInputEnvelope = {
    data: Account_ItemsCreateManyAccountsInput | Account_ItemsCreateManyAccountsInput[]
    skipDuplicates?: boolean
  }

  export type Account_ItemsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: Account_ItemsWhereUniqueInput
    update: XOR<Account_ItemsUpdateWithoutAccountsInput, Account_ItemsUncheckedUpdateWithoutAccountsInput>
    create: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput>
  }

  export type Account_ItemsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: Account_ItemsWhereUniqueInput
    data: XOR<Account_ItemsUpdateWithoutAccountsInput, Account_ItemsUncheckedUpdateWithoutAccountsInput>
  }

  export type Account_ItemsUpdateManyWithWhereWithoutAccountsInput = {
    where: Account_ItemsScalarWhereInput
    data: XOR<Account_ItemsUpdateManyMutationInput, Account_ItemsUncheckedUpdateManyWithoutAccountsInput>
  }

  export type Account_ItemsScalarWhereInput = {
    AND?: Account_ItemsScalarWhereInput | Account_ItemsScalarWhereInput[]
    OR?: Account_ItemsScalarWhereInput[]
    NOT?: Account_ItemsScalarWhereInput | Account_ItemsScalarWhereInput[]
    AccountID?: UuidFilter<"Account_Items"> | string
    ItemID?: BigIntFilter<"Account_Items"> | bigint | number
    Price?: BigIntFilter<"Account_Items"> | bigint | number
    PurchasePrice?: BigIntFilter<"Account_Items"> | bigint | number
    Qty?: BigIntFilter<"Account_Items"> | bigint | number
    ImageLink?: StringFilter<"Account_Items"> | string
  }

  export type Account_ItemsCreateWithoutItemsInput = {
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    Accounts: AccountsCreateNestedOneWithoutAccount_ItemsInput
  }

  export type Account_ItemsUncheckedCreateWithoutItemsInput = {
    AccountID: string
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
  }

  export type Account_ItemsCreateOrConnectWithoutItemsInput = {
    where: Account_ItemsWhereUniqueInput
    create: XOR<Account_ItemsCreateWithoutItemsInput, Account_ItemsUncheckedCreateWithoutItemsInput>
  }

  export type Account_ItemsCreateManyItemsInputEnvelope = {
    data: Account_ItemsCreateManyItemsInput | Account_ItemsCreateManyItemsInput[]
    skipDuplicates?: boolean
  }

  export type Account_ItemsUpsertWithWhereUniqueWithoutItemsInput = {
    where: Account_ItemsWhereUniqueInput
    update: XOR<Account_ItemsUpdateWithoutItemsInput, Account_ItemsUncheckedUpdateWithoutItemsInput>
    create: XOR<Account_ItemsCreateWithoutItemsInput, Account_ItemsUncheckedCreateWithoutItemsInput>
  }

  export type Account_ItemsUpdateWithWhereUniqueWithoutItemsInput = {
    where: Account_ItemsWhereUniqueInput
    data: XOR<Account_ItemsUpdateWithoutItemsInput, Account_ItemsUncheckedUpdateWithoutItemsInput>
  }

  export type Account_ItemsUpdateManyWithWhereWithoutItemsInput = {
    where: Account_ItemsScalarWhereInput
    data: XOR<Account_ItemsUpdateManyMutationInput, Account_ItemsUncheckedUpdateManyWithoutItemsInput>
  }

  export type Account_ItemsCreateManyAccountsInput = {
    ItemID: bigint | number
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
  }

  export type Account_ItemsUpdateWithoutAccountsInput = {
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    Items?: ItemsUpdateOneRequiredWithoutAccount_ItemsNestedInput
  }

  export type Account_ItemsUncheckedUpdateWithoutAccountsInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type Account_ItemsUncheckedUpdateManyWithoutAccountsInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type Account_ItemsCreateManyItemsInput = {
    AccountID: string
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
  }

  export type Account_ItemsUpdateWithoutItemsInput = {
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    Accounts?: AccountsUpdateOneRequiredWithoutAccount_ItemsNestedInput
  }

  export type Account_ItemsUncheckedUpdateWithoutItemsInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type Account_ItemsUncheckedUpdateManyWithoutItemsInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
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