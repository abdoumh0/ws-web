
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
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ChatMember
 * 
 */
export type ChatMember = $Result.DefaultSelection<Prisma.$ChatMemberPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageContent
 * 
 */
export type MessageContent = $Result.DefaultSelection<Prisma.$MessageContentPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model OrderHistory
 * 
 */
export type OrderHistory = $Result.DefaultSelection<Prisma.$OrderHistoryPayload>

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

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMember`: Exposes CRUD operations for the **ChatMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMembers
    * const chatMembers = await prisma.chatMember.findMany()
    * ```
    */
  get chatMember(): Prisma.ChatMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageContent`: Exposes CRUD operations for the **MessageContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageContents
    * const messageContents = await prisma.messageContent.findMany()
    * ```
    */
  get messageContent(): Prisma.MessageContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderHistory`: Exposes CRUD operations for the **OrderHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderHistories
    * const orderHistories = await prisma.orderHistory.findMany()
    * ```
    */
  get orderHistory(): Prisma.OrderHistoryDelegate<ExtArgs, ClientOptions>;
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
    Items: 'Items',
    Chat: 'Chat',
    ChatMember: 'ChatMember',
    Message: 'Message',
    MessageContent: 'MessageContent',
    Orders: 'Orders',
    OrderItem: 'OrderItem',
    OrderHistory: 'OrderHistory'
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
      modelProps: "account_Items" | "accounts" | "items" | "chat" | "chatMember" | "message" | "messageContent" | "orders" | "orderItem" | "orderHistory"
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
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ChatMember: {
        payload: Prisma.$ChatMemberPayload<ExtArgs>
        fields: Prisma.ChatMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findFirst: {
            args: Prisma.ChatMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          findMany: {
            args: Prisma.ChatMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          create: {
            args: Prisma.ChatMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          createMany: {
            args: Prisma.ChatMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          delete: {
            args: Prisma.ChatMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          update: {
            args: Prisma.ChatMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChatMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>[]
          }
          upsert: {
            args: Prisma.ChatMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMemberPayload>
          }
          aggregate: {
            args: Prisma.ChatMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMember>
          }
          groupBy: {
            args: Prisma.ChatMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMemberCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageContent: {
        payload: Prisma.$MessageContentPayload<ExtArgs>
        fields: Prisma.MessageContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>
          }
          findFirst: {
            args: Prisma.MessageContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>
          }
          findMany: {
            args: Prisma.MessageContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>[]
          }
          create: {
            args: Prisma.MessageContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>
          }
          createMany: {
            args: Prisma.MessageContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>[]
          }
          delete: {
            args: Prisma.MessageContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>
          }
          update: {
            args: Prisma.MessageContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>
          }
          deleteMany: {
            args: Prisma.MessageContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>[]
          }
          upsert: {
            args: Prisma.MessageContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageContentPayload>
          }
          aggregate: {
            args: Prisma.MessageContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageContent>
          }
          groupBy: {
            args: Prisma.MessageContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageContentCountArgs<ExtArgs>
            result: $Utils.Optional<MessageContentCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      OrderHistory: {
        payload: Prisma.$OrderHistoryPayload<ExtArgs>
        fields: Prisma.OrderHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          findFirst: {
            args: Prisma.OrderHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          findMany: {
            args: Prisma.OrderHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>[]
          }
          create: {
            args: Prisma.OrderHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          createMany: {
            args: Prisma.OrderHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>[]
          }
          delete: {
            args: Prisma.OrderHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          update: {
            args: Prisma.OrderHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          deleteMany: {
            args: Prisma.OrderHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>[]
          }
          upsert: {
            args: Prisma.OrderHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          aggregate: {
            args: Prisma.OrderHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderHistory>
          }
          groupBy: {
            args: Prisma.OrderHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<OrderHistoryCountAggregateOutputType> | number
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
    chat?: ChatOmit
    chatMember?: ChatMemberOmit
    message?: MessageOmit
    messageContent?: MessageContentOmit
    orders?: OrdersOmit
    orderItem?: OrderItemOmit
    orderHistory?: OrderHistoryOmit
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
   * Count Type Account_ItemsCountOutputType
   */

  export type Account_ItemsCountOutputType = {
    orderItems: number
  }

  export type Account_ItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | Account_ItemsCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * Account_ItemsCountOutputType without action
   */
  export type Account_ItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_ItemsCountOutputType
     */
    select?: Account_ItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Account_ItemsCountOutputType without action
   */
  export type Account_ItemsCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    Account_Items: number
    ChatMember: number
    Message: number
    SentOrders: number
    ReceivedOrders: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Items?: boolean | AccountsCountOutputTypeCountAccount_ItemsArgs
    ChatMember?: boolean | AccountsCountOutputTypeCountChatMemberArgs
    Message?: boolean | AccountsCountOutputTypeCountMessageArgs
    SentOrders?: boolean | AccountsCountOutputTypeCountSentOrdersArgs
    ReceivedOrders?: boolean | AccountsCountOutputTypeCountReceivedOrdersArgs
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
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountChatMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountSentOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountReceivedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
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
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    Messages: number
    Members: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Messages?: boolean | ChatCountOutputTypeCountMessagesArgs
    Members?: boolean | ChatCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    MessageContent: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MessageContent?: boolean | MessageCountOutputTypeCountMessageContentArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountMessageContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageContentWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    Items: number
    OrderHistory: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Items?: boolean | OrdersCountOutputTypeCountItemsArgs
    OrderHistory?: boolean | OrdersCountOutputTypeCountOrderHistoryArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderHistoryWhereInput
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
    orderItems?: boolean | Account_Items$orderItemsArgs<ExtArgs>
    _count?: boolean | Account_ItemsCountOutputTypeDefaultArgs<ExtArgs>
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
    orderItems?: boolean | Account_Items$orderItemsArgs<ExtArgs>
    _count?: boolean | Account_ItemsCountOutputTypeDefaultArgs<ExtArgs>
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
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
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
    orderItems<T extends Account_Items$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Account_Items$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Account_Items.orderItems
   */
  export type Account_Items$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
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
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    WorkAreaIDs: number | null
  }

  export type AccountsSumAggregateOutputType = {
    WorkAreaIDs: number[]
  }

  export type AccountsMinAggregateOutputType = {
    AccountID: string | null
    Email: string | null
    FirstName: string | null
    LastName: string | null
    Password: Uint8Array | null
    Type: string | null
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
    Type: string | null
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
    Type: number
    Username: number
    FacebookID: number
    GoogleID: number
    WorkArea: number
    WorkAreaIDs: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    WorkAreaIDs?: true
  }

  export type AccountsSumAggregateInputType = {
    WorkAreaIDs?: true
  }

  export type AccountsMinAggregateInputType = {
    AccountID?: true
    Email?: true
    FirstName?: true
    LastName?: true
    Password?: true
    Type?: true
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
    Type?: true
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
    Type?: true
    Username?: true
    FacebookID?: true
    GoogleID?: true
    WorkArea?: true
    WorkAreaIDs?: true
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
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
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
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username: string | null
    FacebookID: string | null
    GoogleID: string | null
    WorkArea: JsonValue | null
    WorkAreaIDs: number[]
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
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
    Type?: boolean
    Username?: boolean
    FacebookID?: boolean
    GoogleID?: boolean
    WorkArea?: boolean
    WorkAreaIDs?: boolean
    Account_Items?: boolean | Accounts$Account_ItemsArgs<ExtArgs>
    ChatMember?: boolean | Accounts$ChatMemberArgs<ExtArgs>
    Message?: boolean | Accounts$MessageArgs<ExtArgs>
    SentOrders?: boolean | Accounts$SentOrdersArgs<ExtArgs>
    ReceivedOrders?: boolean | Accounts$ReceivedOrdersArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AccountID?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    Password?: boolean
    Type?: boolean
    Username?: boolean
    FacebookID?: boolean
    GoogleID?: boolean
    WorkArea?: boolean
    WorkAreaIDs?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AccountID?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    Password?: boolean
    Type?: boolean
    Username?: boolean
    FacebookID?: boolean
    GoogleID?: boolean
    WorkArea?: boolean
    WorkAreaIDs?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    AccountID?: boolean
    Email?: boolean
    FirstName?: boolean
    LastName?: boolean
    Password?: boolean
    Type?: boolean
    Username?: boolean
    FacebookID?: boolean
    GoogleID?: boolean
    WorkArea?: boolean
    WorkAreaIDs?: boolean
  }

  export type AccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"AccountID" | "Email" | "FirstName" | "LastName" | "Password" | "Type" | "Username" | "FacebookID" | "GoogleID" | "WorkArea" | "WorkAreaIDs", ExtArgs["result"]["accounts"]>
  export type AccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account_Items?: boolean | Accounts$Account_ItemsArgs<ExtArgs>
    ChatMember?: boolean | Accounts$ChatMemberArgs<ExtArgs>
    Message?: boolean | Accounts$MessageArgs<ExtArgs>
    SentOrders?: boolean | Accounts$SentOrdersArgs<ExtArgs>
    ReceivedOrders?: boolean | Accounts$ReceivedOrdersArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {
      Account_Items: Prisma.$Account_ItemsPayload<ExtArgs>[]
      ChatMember: Prisma.$ChatMemberPayload<ExtArgs>[]
      Message: Prisma.$MessagePayload<ExtArgs>[]
      SentOrders: Prisma.$OrdersPayload<ExtArgs>[]
      ReceivedOrders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      AccountID: string
      Email: string
      FirstName: string
      LastName: string
      Password: Uint8Array
      Type: string
      Username: string | null
      FacebookID: string | null
      GoogleID: string | null
      WorkArea: Prisma.JsonValue | null
      WorkAreaIDs: number[]
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
    ChatMember<T extends Accounts$ChatMemberArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$ChatMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Message<T extends Accounts$MessageArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SentOrders<T extends Accounts$SentOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$SentOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReceivedOrders<T extends Accounts$ReceivedOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$ReceivedOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly Type: FieldRef<"Accounts", 'String'>
    readonly Username: FieldRef<"Accounts", 'String'>
    readonly FacebookID: FieldRef<"Accounts", 'String'>
    readonly GoogleID: FieldRef<"Accounts", 'String'>
    readonly WorkArea: FieldRef<"Accounts", 'Json'>
    readonly WorkAreaIDs: FieldRef<"Accounts", 'Int[]'>
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
   * Accounts.ChatMember
   */
  export type Accounts$ChatMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * Accounts.Message
   */
  export type Accounts$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Accounts.SentOrders
   */
  export type Accounts$SentOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Accounts.ReceivedOrders
   */
  export type Accounts$ReceivedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
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
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    ChatID: string | null
    Name: string | null
    Type: string | null
    lastMessageAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    ChatID: string | null
    Name: string | null
    Type: string | null
    lastMessageAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    ChatID: number
    Name: number
    Type: number
    lastMessageAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    ChatID?: true
    Name?: true
    Type?: true
    lastMessageAt?: true
  }

  export type ChatMaxAggregateInputType = {
    ChatID?: true
    Name?: true
    Type?: true
    lastMessageAt?: true
  }

  export type ChatCountAggregateInputType = {
    ChatID?: true
    Name?: true
    Type?: true
    lastMessageAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    ChatID: string
    Name: string
    Type: string
    lastMessageAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ChatID?: boolean
    Name?: boolean
    Type?: boolean
    lastMessageAt?: boolean
    Messages?: boolean | Chat$MessagesArgs<ExtArgs>
    Members?: boolean | Chat$MembersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ChatID?: boolean
    Name?: boolean
    Type?: boolean
    lastMessageAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ChatID?: boolean
    Name?: boolean
    Type?: boolean
    lastMessageAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    ChatID?: boolean
    Name?: boolean
    Type?: boolean
    lastMessageAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ChatID" | "Name" | "Type" | "lastMessageAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Messages?: boolean | Chat$MessagesArgs<ExtArgs>
    Members?: boolean | Chat$MembersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      Messages: Prisma.$MessagePayload<ExtArgs>[]
      Members: Prisma.$ChatMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ChatID: string
      Name: string
      Type: string
      lastMessageAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `ChatID`
     * const chatWithChatIDOnly = await prisma.chat.findMany({ select: { ChatID: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `ChatID`
     * const chatWithChatIDOnly = await prisma.chat.createManyAndReturn({
     *   select: { ChatID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `ChatID`
     * const chatWithChatIDOnly = await prisma.chat.updateManyAndReturn({
     *   select: { ChatID: true },
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Messages<T extends Chat$MessagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$MessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Members<T extends Chat$MembersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$MembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly ChatID: FieldRef<"Chat", 'String'>
    readonly Name: FieldRef<"Chat", 'String'>
    readonly Type: FieldRef<"Chat", 'String'>
    readonly lastMessageAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data?: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.Messages
   */
  export type Chat$MessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat.Members
   */
  export type Chat$MembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    cursor?: ChatMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatMember
   */

  export type AggregateChatMember = {
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  export type ChatMemberMinAggregateOutputType = {
    ChatID: string | null
    Username: string | null
  }

  export type ChatMemberMaxAggregateOutputType = {
    ChatID: string | null
    Username: string | null
  }

  export type ChatMemberCountAggregateOutputType = {
    ChatID: number
    Username: number
    _all: number
  }


  export type ChatMemberMinAggregateInputType = {
    ChatID?: true
    Username?: true
  }

  export type ChatMemberMaxAggregateInputType = {
    ChatID?: true
    Username?: true
  }

  export type ChatMemberCountAggregateInputType = {
    ChatID?: true
    Username?: true
    _all?: true
  }

  export type ChatMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMember to aggregate.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMembers
    **/
    _count?: true | ChatMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMemberMaxAggregateInputType
  }

  export type GetChatMemberAggregateType<T extends ChatMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMember[P]>
      : GetScalarType<T[P], AggregateChatMember[P]>
  }




  export type ChatMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMemberWhereInput
    orderBy?: ChatMemberOrderByWithAggregationInput | ChatMemberOrderByWithAggregationInput[]
    by: ChatMemberScalarFieldEnum[] | ChatMemberScalarFieldEnum
    having?: ChatMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMemberCountAggregateInputType | true
    _min?: ChatMemberMinAggregateInputType
    _max?: ChatMemberMaxAggregateInputType
  }

  export type ChatMemberGroupByOutputType = {
    ChatID: string
    Username: string
    _count: ChatMemberCountAggregateOutputType | null
    _min: ChatMemberMinAggregateOutputType | null
    _max: ChatMemberMaxAggregateOutputType | null
  }

  type GetChatMemberGroupByPayload<T extends ChatMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChatMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ChatID?: boolean
    Username?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    User?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ChatID?: boolean
    Username?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    User?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ChatID?: boolean
    Username?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    User?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMember"]>

  export type ChatMemberSelectScalar = {
    ChatID?: boolean
    Username?: boolean
  }

  export type ChatMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ChatID" | "Username", ExtArgs["result"]["chatMember"]>
  export type ChatMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    User?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    User?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type ChatMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    User?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $ChatMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMember"
    objects: {
      Chat: Prisma.$ChatPayload<ExtArgs>
      User: Prisma.$AccountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ChatID: string
      Username: string
    }, ExtArgs["result"]["chatMember"]>
    composites: {}
  }

  type ChatMemberGetPayload<S extends boolean | null | undefined | ChatMemberDefaultArgs> = $Result.GetResult<Prisma.$ChatMemberPayload, S>

  type ChatMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMemberCountAggregateInputType | true
    }

  export interface ChatMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMember'], meta: { name: 'ChatMember' } }
    /**
     * Find zero or one ChatMember that matches the filter.
     * @param {ChatMemberFindUniqueArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMemberFindUniqueArgs>(args: SelectSubset<T, ChatMemberFindUniqueArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMemberFindUniqueOrThrowArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindFirstArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMemberFindFirstArgs>(args?: SelectSubset<T, ChatMemberFindFirstArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindFirstOrThrowArgs} args - Arguments to find a ChatMember
     * @example
     * // Get one ChatMember
     * const chatMember = await prisma.chatMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMembers
     * const chatMembers = await prisma.chatMember.findMany()
     * 
     * // Get first 10 ChatMembers
     * const chatMembers = await prisma.chatMember.findMany({ take: 10 })
     * 
     * // Only select the `ChatID`
     * const chatMemberWithChatIDOnly = await prisma.chatMember.findMany({ select: { ChatID: true } })
     * 
     */
    findMany<T extends ChatMemberFindManyArgs>(args?: SelectSubset<T, ChatMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMember.
     * @param {ChatMemberCreateArgs} args - Arguments to create a ChatMember.
     * @example
     * // Create one ChatMember
     * const ChatMember = await prisma.chatMember.create({
     *   data: {
     *     // ... data to create a ChatMember
     *   }
     * })
     * 
     */
    create<T extends ChatMemberCreateArgs>(args: SelectSubset<T, ChatMemberCreateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMembers.
     * @param {ChatMemberCreateManyArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMember = await prisma.chatMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMemberCreateManyArgs>(args?: SelectSubset<T, ChatMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMembers and returns the data saved in the database.
     * @param {ChatMemberCreateManyAndReturnArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMember = await prisma.chatMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMembers and only return the `ChatID`
     * const chatMemberWithChatIDOnly = await prisma.chatMember.createManyAndReturn({
     *   select: { ChatID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMember.
     * @param {ChatMemberDeleteArgs} args - Arguments to delete one ChatMember.
     * @example
     * // Delete one ChatMember
     * const ChatMember = await prisma.chatMember.delete({
     *   where: {
     *     // ... filter to delete one ChatMember
     *   }
     * })
     * 
     */
    delete<T extends ChatMemberDeleteArgs>(args: SelectSubset<T, ChatMemberDeleteArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMember.
     * @param {ChatMemberUpdateArgs} args - Arguments to update one ChatMember.
     * @example
     * // Update one ChatMember
     * const chatMember = await prisma.chatMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMemberUpdateArgs>(args: SelectSubset<T, ChatMemberUpdateArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMembers.
     * @param {ChatMemberDeleteManyArgs} args - Arguments to filter ChatMembers to delete.
     * @example
     * // Delete a few ChatMembers
     * const { count } = await prisma.chatMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMemberDeleteManyArgs>(args?: SelectSubset<T, ChatMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMembers
     * const chatMember = await prisma.chatMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMemberUpdateManyArgs>(args: SelectSubset<T, ChatMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers and returns the data updated in the database.
     * @param {ChatMemberUpdateManyAndReturnArgs} args - Arguments to update many ChatMembers.
     * @example
     * // Update many ChatMembers
     * const chatMember = await prisma.chatMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMembers and only return the `ChatID`
     * const chatMemberWithChatIDOnly = await prisma.chatMember.updateManyAndReturn({
     *   select: { ChatID: true },
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
    updateManyAndReturn<T extends ChatMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMember.
     * @param {ChatMemberUpsertArgs} args - Arguments to update or create a ChatMember.
     * @example
     * // Update or create a ChatMember
     * const chatMember = await prisma.chatMember.upsert({
     *   create: {
     *     // ... data to create a ChatMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMember we want to update
     *   }
     * })
     */
    upsert<T extends ChatMemberUpsertArgs>(args: SelectSubset<T, ChatMemberUpsertArgs<ExtArgs>>): Prisma__ChatMemberClient<$Result.GetResult<Prisma.$ChatMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberCountArgs} args - Arguments to filter ChatMembers to count.
     * @example
     * // Count the number of ChatMembers
     * const count = await prisma.chatMember.count({
     *   where: {
     *     // ... the filter for the ChatMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatMemberCountArgs>(
      args?: Subset<T, ChatMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMemberAggregateArgs>(args: Subset<T, ChatMemberAggregateArgs>): Prisma.PrismaPromise<GetChatMemberAggregateType<T>>

    /**
     * Group by ChatMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMemberGroupByArgs} args - Group by arguments.
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
      T extends ChatMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChatMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMember model
   */
  readonly fields: ChatMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMember model
   */
  interface ChatMemberFieldRefs {
    readonly ChatID: FieldRef<"ChatMember", 'String'>
    readonly Username: FieldRef<"ChatMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMember findUnique
   */
  export type ChatMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findUniqueOrThrow
   */
  export type ChatMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember findFirst
   */
  export type ChatMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findFirstOrThrow
   */
  export type ChatMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMember to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember findMany
   */
  export type ChatMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where?: ChatMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMemberOrderByWithRelationInput | ChatMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMembers.
     */
    cursor?: ChatMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    distinct?: ChatMemberScalarFieldEnum | ChatMemberScalarFieldEnum[]
  }

  /**
   * ChatMember create
   */
  export type ChatMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMember.
     */
    data: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
  }

  /**
   * ChatMember createMany
   */
  export type ChatMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMember createManyAndReturn
   */
  export type ChatMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMemberCreateManyInput | ChatMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember update
   */
  export type ChatMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMember.
     */
    data: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
    /**
     * Choose, which ChatMember to update.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember updateMany
   */
  export type ChatMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
  }

  /**
   * ChatMember updateManyAndReturn
   */
  export type ChatMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMember upsert
   */
  export type ChatMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMember to update in case it exists.
     */
    where: ChatMemberWhereUniqueInput
    /**
     * In case the ChatMember found by the `where` argument doesn't exist, create a new ChatMember with this data.
     */
    create: XOR<ChatMemberCreateInput, ChatMemberUncheckedCreateInput>
    /**
     * In case the ChatMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMemberUpdateInput, ChatMemberUncheckedUpdateInput>
  }

  /**
   * ChatMember delete
   */
  export type ChatMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
    /**
     * Filter which ChatMember to delete.
     */
    where: ChatMemberWhereUniqueInput
  }

  /**
   * ChatMember deleteMany
   */
  export type ChatMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMembers to delete
     */
    where?: ChatMemberWhereInput
    /**
     * Limit how many ChatMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatMember without action
   */
  export type ChatMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMember
     */
    select?: ChatMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMember
     */
    omit?: ChatMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMemberInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    MessageID: string | null
    ChatID: string | null
    SenderUsername: string | null
    Status: string | null
    CreatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    MessageID: string | null
    ChatID: string | null
    SenderUsername: string | null
    Status: string | null
    CreatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    MessageID: number
    ChatID: number
    SenderUsername: number
    Status: number
    CreatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    MessageID?: true
    ChatID?: true
    SenderUsername?: true
    Status?: true
    CreatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    MessageID?: true
    ChatID?: true
    SenderUsername?: true
    Status?: true
    CreatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    MessageID?: true
    ChatID?: true
    SenderUsername?: true
    Status?: true
    CreatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    MessageID: string
    ChatID: string
    SenderUsername: string
    Status: string
    CreatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MessageID?: boolean
    ChatID?: boolean
    SenderUsername?: boolean
    Status?: boolean
    CreatedAt?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
    MessageContent?: boolean | Message$MessageContentArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MessageID?: boolean
    ChatID?: boolean
    SenderUsername?: boolean
    Status?: boolean
    CreatedAt?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MessageID?: boolean
    ChatID?: boolean
    SenderUsername?: boolean
    Status?: boolean
    CreatedAt?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    MessageID?: boolean
    ChatID?: boolean
    SenderUsername?: boolean
    Status?: boolean
    CreatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MessageID" | "ChatID" | "SenderUsername" | "Status" | "CreatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
    MessageContent?: boolean | Message$MessageContentArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      Chat: Prisma.$ChatPayload<ExtArgs>
      Sender: Prisma.$AccountsPayload<ExtArgs>
      MessageContent: Prisma.$MessageContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MessageID: string
      ChatID: string
      SenderUsername: string
      Status: string
      CreatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `MessageID`
     * const messageWithMessageIDOnly = await prisma.message.findMany({ select: { MessageID: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `MessageID`
     * const messageWithMessageIDOnly = await prisma.message.createManyAndReturn({
     *   select: { MessageID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `MessageID`
     * const messageWithMessageIDOnly = await prisma.message.updateManyAndReturn({
     *   select: { MessageID: true },
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sender<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MessageContent<T extends Message$MessageContentArgs<ExtArgs> = {}>(args?: Subset<T, Message$MessageContentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly MessageID: FieldRef<"Message", 'String'>
    readonly ChatID: FieldRef<"Message", 'String'>
    readonly SenderUsername: FieldRef<"Message", 'String'>
    readonly Status: FieldRef<"Message", 'String'>
    readonly CreatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.MessageContent
   */
  export type Message$MessageContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    where?: MessageContentWhereInput
    orderBy?: MessageContentOrderByWithRelationInput | MessageContentOrderByWithRelationInput[]
    cursor?: MessageContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageContentScalarFieldEnum | MessageContentScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageContent
   */

  export type AggregateMessageContent = {
    _count: MessageContentCountAggregateOutputType | null
    _avg: MessageContentAvgAggregateOutputType | null
    _sum: MessageContentSumAggregateOutputType | null
    _min: MessageContentMinAggregateOutputType | null
    _max: MessageContentMaxAggregateOutputType | null
  }

  export type MessageContentAvgAggregateOutputType = {
    MessageContentID: number | null
    Index: number | null
  }

  export type MessageContentSumAggregateOutputType = {
    MessageContentID: number | null
    Index: number | null
  }

  export type MessageContentMinAggregateOutputType = {
    MessageContentID: number | null
    MessageID: string | null
    Index: number | null
    Text: string | null
    Filename: string | null
    MimeType: string | null
    Data: Uint8Array | null
  }

  export type MessageContentMaxAggregateOutputType = {
    MessageContentID: number | null
    MessageID: string | null
    Index: number | null
    Text: string | null
    Filename: string | null
    MimeType: string | null
    Data: Uint8Array | null
  }

  export type MessageContentCountAggregateOutputType = {
    MessageContentID: number
    MessageID: number
    Index: number
    Text: number
    Filename: number
    MimeType: number
    Data: number
    _all: number
  }


  export type MessageContentAvgAggregateInputType = {
    MessageContentID?: true
    Index?: true
  }

  export type MessageContentSumAggregateInputType = {
    MessageContentID?: true
    Index?: true
  }

  export type MessageContentMinAggregateInputType = {
    MessageContentID?: true
    MessageID?: true
    Index?: true
    Text?: true
    Filename?: true
    MimeType?: true
    Data?: true
  }

  export type MessageContentMaxAggregateInputType = {
    MessageContentID?: true
    MessageID?: true
    Index?: true
    Text?: true
    Filename?: true
    MimeType?: true
    Data?: true
  }

  export type MessageContentCountAggregateInputType = {
    MessageContentID?: true
    MessageID?: true
    Index?: true
    Text?: true
    Filename?: true
    MimeType?: true
    Data?: true
    _all?: true
  }

  export type MessageContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageContent to aggregate.
     */
    where?: MessageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageContents to fetch.
     */
    orderBy?: MessageContentOrderByWithRelationInput | MessageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageContents
    **/
    _count?: true | MessageContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageContentMaxAggregateInputType
  }

  export type GetMessageContentAggregateType<T extends MessageContentAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageContent[P]>
      : GetScalarType<T[P], AggregateMessageContent[P]>
  }




  export type MessageContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageContentWhereInput
    orderBy?: MessageContentOrderByWithAggregationInput | MessageContentOrderByWithAggregationInput[]
    by: MessageContentScalarFieldEnum[] | MessageContentScalarFieldEnum
    having?: MessageContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageContentCountAggregateInputType | true
    _avg?: MessageContentAvgAggregateInputType
    _sum?: MessageContentSumAggregateInputType
    _min?: MessageContentMinAggregateInputType
    _max?: MessageContentMaxAggregateInputType
  }

  export type MessageContentGroupByOutputType = {
    MessageContentID: number
    MessageID: string
    Index: number
    Text: string | null
    Filename: string | null
    MimeType: string | null
    Data: Uint8Array | null
    _count: MessageContentCountAggregateOutputType | null
    _avg: MessageContentAvgAggregateOutputType | null
    _sum: MessageContentSumAggregateOutputType | null
    _min: MessageContentMinAggregateOutputType | null
    _max: MessageContentMaxAggregateOutputType | null
  }

  type GetMessageContentGroupByPayload<T extends MessageContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageContentGroupByOutputType[P]>
            : GetScalarType<T[P], MessageContentGroupByOutputType[P]>
        }
      >
    >


  export type MessageContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MessageContentID?: boolean
    MessageID?: boolean
    Index?: boolean
    Text?: boolean
    Filename?: boolean
    MimeType?: boolean
    Data?: boolean
    Message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageContent"]>

  export type MessageContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MessageContentID?: boolean
    MessageID?: boolean
    Index?: boolean
    Text?: boolean
    Filename?: boolean
    MimeType?: boolean
    Data?: boolean
    Message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageContent"]>

  export type MessageContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MessageContentID?: boolean
    MessageID?: boolean
    Index?: boolean
    Text?: boolean
    Filename?: boolean
    MimeType?: boolean
    Data?: boolean
    Message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageContent"]>

  export type MessageContentSelectScalar = {
    MessageContentID?: boolean
    MessageID?: boolean
    Index?: boolean
    Text?: boolean
    Filename?: boolean
    MimeType?: boolean
    Data?: boolean
  }

  export type MessageContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MessageContentID" | "MessageID" | "Index" | "Text" | "Filename" | "MimeType" | "Data", ExtArgs["result"]["messageContent"]>
  export type MessageContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type MessageContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type MessageContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Message?: boolean | MessageDefaultArgs<ExtArgs>
  }

  export type $MessageContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageContent"
    objects: {
      Message: Prisma.$MessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MessageContentID: number
      MessageID: string
      Index: number
      Text: string | null
      Filename: string | null
      MimeType: string | null
      Data: Uint8Array | null
    }, ExtArgs["result"]["messageContent"]>
    composites: {}
  }

  type MessageContentGetPayload<S extends boolean | null | undefined | MessageContentDefaultArgs> = $Result.GetResult<Prisma.$MessageContentPayload, S>

  type MessageContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageContentCountAggregateInputType | true
    }

  export interface MessageContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageContent'], meta: { name: 'MessageContent' } }
    /**
     * Find zero or one MessageContent that matches the filter.
     * @param {MessageContentFindUniqueArgs} args - Arguments to find a MessageContent
     * @example
     * // Get one MessageContent
     * const messageContent = await prisma.messageContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageContentFindUniqueArgs>(args: SelectSubset<T, MessageContentFindUniqueArgs<ExtArgs>>): Prisma__MessageContentClient<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageContentFindUniqueOrThrowArgs} args - Arguments to find a MessageContent
     * @example
     * // Get one MessageContent
     * const messageContent = await prisma.messageContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageContentFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageContentClient<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentFindFirstArgs} args - Arguments to find a MessageContent
     * @example
     * // Get one MessageContent
     * const messageContent = await prisma.messageContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageContentFindFirstArgs>(args?: SelectSubset<T, MessageContentFindFirstArgs<ExtArgs>>): Prisma__MessageContentClient<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentFindFirstOrThrowArgs} args - Arguments to find a MessageContent
     * @example
     * // Get one MessageContent
     * const messageContent = await prisma.messageContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageContentFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageContentClient<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageContents
     * const messageContents = await prisma.messageContent.findMany()
     * 
     * // Get first 10 MessageContents
     * const messageContents = await prisma.messageContent.findMany({ take: 10 })
     * 
     * // Only select the `MessageContentID`
     * const messageContentWithMessageContentIDOnly = await prisma.messageContent.findMany({ select: { MessageContentID: true } })
     * 
     */
    findMany<T extends MessageContentFindManyArgs>(args?: SelectSubset<T, MessageContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageContent.
     * @param {MessageContentCreateArgs} args - Arguments to create a MessageContent.
     * @example
     * // Create one MessageContent
     * const MessageContent = await prisma.messageContent.create({
     *   data: {
     *     // ... data to create a MessageContent
     *   }
     * })
     * 
     */
    create<T extends MessageContentCreateArgs>(args: SelectSubset<T, MessageContentCreateArgs<ExtArgs>>): Prisma__MessageContentClient<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageContents.
     * @param {MessageContentCreateManyArgs} args - Arguments to create many MessageContents.
     * @example
     * // Create many MessageContents
     * const messageContent = await prisma.messageContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageContentCreateManyArgs>(args?: SelectSubset<T, MessageContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageContents and returns the data saved in the database.
     * @param {MessageContentCreateManyAndReturnArgs} args - Arguments to create many MessageContents.
     * @example
     * // Create many MessageContents
     * const messageContent = await prisma.messageContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageContents and only return the `MessageContentID`
     * const messageContentWithMessageContentIDOnly = await prisma.messageContent.createManyAndReturn({
     *   select: { MessageContentID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageContentCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageContent.
     * @param {MessageContentDeleteArgs} args - Arguments to delete one MessageContent.
     * @example
     * // Delete one MessageContent
     * const MessageContent = await prisma.messageContent.delete({
     *   where: {
     *     // ... filter to delete one MessageContent
     *   }
     * })
     * 
     */
    delete<T extends MessageContentDeleteArgs>(args: SelectSubset<T, MessageContentDeleteArgs<ExtArgs>>): Prisma__MessageContentClient<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageContent.
     * @param {MessageContentUpdateArgs} args - Arguments to update one MessageContent.
     * @example
     * // Update one MessageContent
     * const messageContent = await prisma.messageContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageContentUpdateArgs>(args: SelectSubset<T, MessageContentUpdateArgs<ExtArgs>>): Prisma__MessageContentClient<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageContents.
     * @param {MessageContentDeleteManyArgs} args - Arguments to filter MessageContents to delete.
     * @example
     * // Delete a few MessageContents
     * const { count } = await prisma.messageContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageContentDeleteManyArgs>(args?: SelectSubset<T, MessageContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageContents
     * const messageContent = await prisma.messageContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageContentUpdateManyArgs>(args: SelectSubset<T, MessageContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageContents and returns the data updated in the database.
     * @param {MessageContentUpdateManyAndReturnArgs} args - Arguments to update many MessageContents.
     * @example
     * // Update many MessageContents
     * const messageContent = await prisma.messageContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageContents and only return the `MessageContentID`
     * const messageContentWithMessageContentIDOnly = await prisma.messageContent.updateManyAndReturn({
     *   select: { MessageContentID: true },
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
    updateManyAndReturn<T extends MessageContentUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageContent.
     * @param {MessageContentUpsertArgs} args - Arguments to update or create a MessageContent.
     * @example
     * // Update or create a MessageContent
     * const messageContent = await prisma.messageContent.upsert({
     *   create: {
     *     // ... data to create a MessageContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageContent we want to update
     *   }
     * })
     */
    upsert<T extends MessageContentUpsertArgs>(args: SelectSubset<T, MessageContentUpsertArgs<ExtArgs>>): Prisma__MessageContentClient<$Result.GetResult<Prisma.$MessageContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentCountArgs} args - Arguments to filter MessageContents to count.
     * @example
     * // Count the number of MessageContents
     * const count = await prisma.messageContent.count({
     *   where: {
     *     // ... the filter for the MessageContents we want to count
     *   }
     * })
    **/
    count<T extends MessageContentCountArgs>(
      args?: Subset<T, MessageContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageContentAggregateArgs>(args: Subset<T, MessageContentAggregateArgs>): Prisma.PrismaPromise<GetMessageContentAggregateType<T>>

    /**
     * Group by MessageContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageContentGroupByArgs} args - Group by arguments.
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
      T extends MessageContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageContentGroupByArgs['orderBy'] }
        : { orderBy?: MessageContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageContent model
   */
  readonly fields: MessageContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageContent model
   */
  interface MessageContentFieldRefs {
    readonly MessageContentID: FieldRef<"MessageContent", 'Int'>
    readonly MessageID: FieldRef<"MessageContent", 'String'>
    readonly Index: FieldRef<"MessageContent", 'Int'>
    readonly Text: FieldRef<"MessageContent", 'String'>
    readonly Filename: FieldRef<"MessageContent", 'String'>
    readonly MimeType: FieldRef<"MessageContent", 'String'>
    readonly Data: FieldRef<"MessageContent", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * MessageContent findUnique
   */
  export type MessageContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * Filter, which MessageContent to fetch.
     */
    where: MessageContentWhereUniqueInput
  }

  /**
   * MessageContent findUniqueOrThrow
   */
  export type MessageContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * Filter, which MessageContent to fetch.
     */
    where: MessageContentWhereUniqueInput
  }

  /**
   * MessageContent findFirst
   */
  export type MessageContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * Filter, which MessageContent to fetch.
     */
    where?: MessageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageContents to fetch.
     */
    orderBy?: MessageContentOrderByWithRelationInput | MessageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageContents.
     */
    cursor?: MessageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageContents.
     */
    distinct?: MessageContentScalarFieldEnum | MessageContentScalarFieldEnum[]
  }

  /**
   * MessageContent findFirstOrThrow
   */
  export type MessageContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * Filter, which MessageContent to fetch.
     */
    where?: MessageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageContents to fetch.
     */
    orderBy?: MessageContentOrderByWithRelationInput | MessageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageContents.
     */
    cursor?: MessageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageContents.
     */
    distinct?: MessageContentScalarFieldEnum | MessageContentScalarFieldEnum[]
  }

  /**
   * MessageContent findMany
   */
  export type MessageContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * Filter, which MessageContents to fetch.
     */
    where?: MessageContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageContents to fetch.
     */
    orderBy?: MessageContentOrderByWithRelationInput | MessageContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageContents.
     */
    cursor?: MessageContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageContents.
     */
    skip?: number
    distinct?: MessageContentScalarFieldEnum | MessageContentScalarFieldEnum[]
  }

  /**
   * MessageContent create
   */
  export type MessageContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageContent.
     */
    data: XOR<MessageContentCreateInput, MessageContentUncheckedCreateInput>
  }

  /**
   * MessageContent createMany
   */
  export type MessageContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageContents.
     */
    data: MessageContentCreateManyInput | MessageContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageContent createManyAndReturn
   */
  export type MessageContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * The data used to create many MessageContents.
     */
    data: MessageContentCreateManyInput | MessageContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageContent update
   */
  export type MessageContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageContent.
     */
    data: XOR<MessageContentUpdateInput, MessageContentUncheckedUpdateInput>
    /**
     * Choose, which MessageContent to update.
     */
    where: MessageContentWhereUniqueInput
  }

  /**
   * MessageContent updateMany
   */
  export type MessageContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageContents.
     */
    data: XOR<MessageContentUpdateManyMutationInput, MessageContentUncheckedUpdateManyInput>
    /**
     * Filter which MessageContents to update
     */
    where?: MessageContentWhereInput
    /**
     * Limit how many MessageContents to update.
     */
    limit?: number
  }

  /**
   * MessageContent updateManyAndReturn
   */
  export type MessageContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * The data used to update MessageContents.
     */
    data: XOR<MessageContentUpdateManyMutationInput, MessageContentUncheckedUpdateManyInput>
    /**
     * Filter which MessageContents to update
     */
    where?: MessageContentWhereInput
    /**
     * Limit how many MessageContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageContent upsert
   */
  export type MessageContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageContent to update in case it exists.
     */
    where: MessageContentWhereUniqueInput
    /**
     * In case the MessageContent found by the `where` argument doesn't exist, create a new MessageContent with this data.
     */
    create: XOR<MessageContentCreateInput, MessageContentUncheckedCreateInput>
    /**
     * In case the MessageContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageContentUpdateInput, MessageContentUncheckedUpdateInput>
  }

  /**
   * MessageContent delete
   */
  export type MessageContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
    /**
     * Filter which MessageContent to delete.
     */
    where: MessageContentWhereUniqueInput
  }

  /**
   * MessageContent deleteMany
   */
  export type MessageContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageContents to delete
     */
    where?: MessageContentWhereInput
    /**
     * Limit how many MessageContents to delete.
     */
    limit?: number
  }

  /**
   * MessageContent without action
   */
  export type MessageContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageContent
     */
    select?: MessageContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageContent
     */
    omit?: MessageContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageContentInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    OrderID: string | null
    SenderID: string | null
    ReceiverID: string | null
    CreatedAt: Date | null
    Status: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    OrderID: string | null
    SenderID: string | null
    ReceiverID: string | null
    CreatedAt: Date | null
    Status: string | null
  }

  export type OrdersCountAggregateOutputType = {
    OrderID: number
    SenderID: number
    ReceiverID: number
    CreatedAt: number
    Status: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    OrderID?: true
    SenderID?: true
    ReceiverID?: true
    CreatedAt?: true
    Status?: true
  }

  export type OrdersMaxAggregateInputType = {
    OrderID?: true
    SenderID?: true
    ReceiverID?: true
    CreatedAt?: true
    Status?: true
  }

  export type OrdersCountAggregateInputType = {
    OrderID?: true
    SenderID?: true
    ReceiverID?: true
    CreatedAt?: true
    Status?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
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




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    OrderID: string
    SenderID: string
    ReceiverID: string
    CreatedAt: Date
    Status: string
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
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


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    SenderID?: boolean
    ReceiverID?: boolean
    CreatedAt?: boolean
    Status?: boolean
    Items?: boolean | Orders$ItemsArgs<ExtArgs>
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
    Receiver?: boolean | AccountsDefaultArgs<ExtArgs>
    OrderHistory?: boolean | Orders$OrderHistoryArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    SenderID?: boolean
    ReceiverID?: boolean
    CreatedAt?: boolean
    Status?: boolean
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
    Receiver?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderID?: boolean
    SenderID?: boolean
    ReceiverID?: boolean
    CreatedAt?: boolean
    Status?: boolean
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
    Receiver?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    OrderID?: boolean
    SenderID?: boolean
    ReceiverID?: boolean
    CreatedAt?: boolean
    Status?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderID" | "SenderID" | "ReceiverID" | "CreatedAt" | "Status", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Items?: boolean | Orders$ItemsArgs<ExtArgs>
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
    Receiver?: boolean | AccountsDefaultArgs<ExtArgs>
    OrderHistory?: boolean | Orders$OrderHistoryArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
    Receiver?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sender?: boolean | AccountsDefaultArgs<ExtArgs>
    Receiver?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      Items: Prisma.$OrderItemPayload<ExtArgs>[]
      Sender: Prisma.$AccountsPayload<ExtArgs>
      Receiver: Prisma.$AccountsPayload<ExtArgs>
      OrderHistory: Prisma.$OrderHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      OrderID: string
      SenderID: string
      ReceiverID: string
      CreatedAt: Date
      Status: string
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `OrderID`
     * const ordersWithOrderIDOnly = await prisma.orders.findMany({ select: { OrderID: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `OrderID`
     * const ordersWithOrderIDOnly = await prisma.orders.createManyAndReturn({
     *   select: { OrderID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
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
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
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
     * // Update zero or more Orders and only return the `OrderID`
     * const ordersWithOrderIDOnly = await prisma.orders.updateManyAndReturn({
     *   select: { OrderID: true },
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
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
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
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
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
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Items<T extends Orders$ItemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sender<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Receiver<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    OrderHistory<T extends Orders$OrderHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Orders$OrderHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly OrderID: FieldRef<"Orders", 'String'>
    readonly SenderID: FieldRef<"Orders", 'String'>
    readonly ReceiverID: FieldRef<"Orders", 'String'>
    readonly CreatedAt: FieldRef<"Orders", 'DateTime'>
    readonly Status: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.Items
   */
  export type Orders$ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Orders.OrderHistory
   */
  export type Orders$OrderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    where?: OrderHistoryWhereInput
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    cursor?: OrderHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    quantity: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    itemId: bigint | null
    quantity: bigint | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    accountId: string | null
    itemId: bigint | null
    quantity: bigint | null
    orderId: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    accountId: string | null
    itemId: bigint | null
    quantity: bigint | null
    orderId: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    accountId: number
    itemId: number
    quantity: number
    orderId: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    itemId?: true
    quantity?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    accountId?: true
    itemId?: true
    quantity?: true
    orderId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    accountId?: true
    itemId?: true
    quantity?: true
    orderId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    accountId?: true
    itemId?: true
    quantity?: true
    orderId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    accountId: string
    itemId: bigint
    quantity: bigint
    orderId: string
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    itemId?: boolean
    quantity?: boolean
    orderId?: boolean
    accountItem?: boolean | Account_ItemsDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    itemId?: boolean
    quantity?: boolean
    orderId?: boolean
    accountItem?: boolean | Account_ItemsDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    itemId?: boolean
    quantity?: boolean
    orderId?: boolean
    accountItem?: boolean | Account_ItemsDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    accountId?: boolean
    itemId?: boolean
    quantity?: boolean
    orderId?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "itemId" | "quantity" | "orderId", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountItem?: boolean | Account_ItemsDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountItem?: boolean | Account_ItemsDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountItem?: boolean | Account_ItemsDefaultArgs<ExtArgs>
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      accountItem: Prisma.$Account_ItemsPayload<ExtArgs>
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accountId: string
      itemId: bigint
      quantity: bigint
      orderId: string
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accountItem<T extends Account_ItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Account_ItemsDefaultArgs<ExtArgs>>): Prisma__Account_ItemsClient<$Result.GetResult<Prisma.$Account_ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly accountId: FieldRef<"OrderItem", 'String'>
    readonly itemId: FieldRef<"OrderItem", 'BigInt'>
    readonly quantity: FieldRef<"OrderItem", 'BigInt'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model OrderHistory
   */

  export type AggregateOrderHistory = {
    _count: OrderHistoryCountAggregateOutputType | null
    _min: OrderHistoryMinAggregateOutputType | null
    _max: OrderHistoryMaxAggregateOutputType | null
  }

  export type OrderHistoryMinAggregateOutputType = {
    OrderHistoryID: string | null
    OrderID: string | null
  }

  export type OrderHistoryMaxAggregateOutputType = {
    OrderHistoryID: string | null
    OrderID: string | null
  }

  export type OrderHistoryCountAggregateOutputType = {
    OrderHistoryID: number
    OrderID: number
    Record: number
    _all: number
  }


  export type OrderHistoryMinAggregateInputType = {
    OrderHistoryID?: true
    OrderID?: true
  }

  export type OrderHistoryMaxAggregateInputType = {
    OrderHistoryID?: true
    OrderID?: true
  }

  export type OrderHistoryCountAggregateInputType = {
    OrderHistoryID?: true
    OrderID?: true
    Record?: true
    _all?: true
  }

  export type OrderHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderHistory to aggregate.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderHistories
    **/
    _count?: true | OrderHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderHistoryMaxAggregateInputType
  }

  export type GetOrderHistoryAggregateType<T extends OrderHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderHistory[P]>
      : GetScalarType<T[P], AggregateOrderHistory[P]>
  }




  export type OrderHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderHistoryWhereInput
    orderBy?: OrderHistoryOrderByWithAggregationInput | OrderHistoryOrderByWithAggregationInput[]
    by: OrderHistoryScalarFieldEnum[] | OrderHistoryScalarFieldEnum
    having?: OrderHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderHistoryCountAggregateInputType | true
    _min?: OrderHistoryMinAggregateInputType
    _max?: OrderHistoryMaxAggregateInputType
  }

  export type OrderHistoryGroupByOutputType = {
    OrderHistoryID: string
    OrderID: string
    Record: JsonValue
    _count: OrderHistoryCountAggregateOutputType | null
    _min: OrderHistoryMinAggregateOutputType | null
    _max: OrderHistoryMaxAggregateOutputType | null
  }

  type GetOrderHistoryGroupByPayload<T extends OrderHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], OrderHistoryGroupByOutputType[P]>
        }
      >
    >


  export type OrderHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderHistoryID?: boolean
    OrderID?: boolean
    Record?: boolean
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderHistory"]>

  export type OrderHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderHistoryID?: boolean
    OrderID?: boolean
    Record?: boolean
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderHistory"]>

  export type OrderHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    OrderHistoryID?: boolean
    OrderID?: boolean
    Record?: boolean
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderHistory"]>

  export type OrderHistorySelectScalar = {
    OrderHistoryID?: boolean
    OrderID?: boolean
    Record?: boolean
  }

  export type OrderHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"OrderHistoryID" | "OrderID" | "Record", ExtArgs["result"]["orderHistory"]>
  export type OrderHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type OrderHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type OrderHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $OrderHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderHistory"
    objects: {
      Order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      OrderHistoryID: string
      OrderID: string
      Record: Prisma.JsonValue
    }, ExtArgs["result"]["orderHistory"]>
    composites: {}
  }

  type OrderHistoryGetPayload<S extends boolean | null | undefined | OrderHistoryDefaultArgs> = $Result.GetResult<Prisma.$OrderHistoryPayload, S>

  type OrderHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderHistoryCountAggregateInputType | true
    }

  export interface OrderHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderHistory'], meta: { name: 'OrderHistory' } }
    /**
     * Find zero or one OrderHistory that matches the filter.
     * @param {OrderHistoryFindUniqueArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderHistoryFindUniqueArgs>(args: SelectSubset<T, OrderHistoryFindUniqueArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderHistoryFindUniqueOrThrowArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindFirstArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderHistoryFindFirstArgs>(args?: SelectSubset<T, OrderHistoryFindFirstArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindFirstOrThrowArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderHistories
     * const orderHistories = await prisma.orderHistory.findMany()
     * 
     * // Get first 10 OrderHistories
     * const orderHistories = await prisma.orderHistory.findMany({ take: 10 })
     * 
     * // Only select the `OrderHistoryID`
     * const orderHistoryWithOrderHistoryIDOnly = await prisma.orderHistory.findMany({ select: { OrderHistoryID: true } })
     * 
     */
    findMany<T extends OrderHistoryFindManyArgs>(args?: SelectSubset<T, OrderHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderHistory.
     * @param {OrderHistoryCreateArgs} args - Arguments to create a OrderHistory.
     * @example
     * // Create one OrderHistory
     * const OrderHistory = await prisma.orderHistory.create({
     *   data: {
     *     // ... data to create a OrderHistory
     *   }
     * })
     * 
     */
    create<T extends OrderHistoryCreateArgs>(args: SelectSubset<T, OrderHistoryCreateArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderHistories.
     * @param {OrderHistoryCreateManyArgs} args - Arguments to create many OrderHistories.
     * @example
     * // Create many OrderHistories
     * const orderHistory = await prisma.orderHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderHistoryCreateManyArgs>(args?: SelectSubset<T, OrderHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderHistories and returns the data saved in the database.
     * @param {OrderHistoryCreateManyAndReturnArgs} args - Arguments to create many OrderHistories.
     * @example
     * // Create many OrderHistories
     * const orderHistory = await prisma.orderHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderHistories and only return the `OrderHistoryID`
     * const orderHistoryWithOrderHistoryIDOnly = await prisma.orderHistory.createManyAndReturn({
     *   select: { OrderHistoryID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderHistory.
     * @param {OrderHistoryDeleteArgs} args - Arguments to delete one OrderHistory.
     * @example
     * // Delete one OrderHistory
     * const OrderHistory = await prisma.orderHistory.delete({
     *   where: {
     *     // ... filter to delete one OrderHistory
     *   }
     * })
     * 
     */
    delete<T extends OrderHistoryDeleteArgs>(args: SelectSubset<T, OrderHistoryDeleteArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderHistory.
     * @param {OrderHistoryUpdateArgs} args - Arguments to update one OrderHistory.
     * @example
     * // Update one OrderHistory
     * const orderHistory = await prisma.orderHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderHistoryUpdateArgs>(args: SelectSubset<T, OrderHistoryUpdateArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderHistories.
     * @param {OrderHistoryDeleteManyArgs} args - Arguments to filter OrderHistories to delete.
     * @example
     * // Delete a few OrderHistories
     * const { count } = await prisma.orderHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderHistoryDeleteManyArgs>(args?: SelectSubset<T, OrderHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderHistories
     * const orderHistory = await prisma.orderHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderHistoryUpdateManyArgs>(args: SelectSubset<T, OrderHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderHistories and returns the data updated in the database.
     * @param {OrderHistoryUpdateManyAndReturnArgs} args - Arguments to update many OrderHistories.
     * @example
     * // Update many OrderHistories
     * const orderHistory = await prisma.orderHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderHistories and only return the `OrderHistoryID`
     * const orderHistoryWithOrderHistoryIDOnly = await prisma.orderHistory.updateManyAndReturn({
     *   select: { OrderHistoryID: true },
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
    updateManyAndReturn<T extends OrderHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderHistory.
     * @param {OrderHistoryUpsertArgs} args - Arguments to update or create a OrderHistory.
     * @example
     * // Update or create a OrderHistory
     * const orderHistory = await prisma.orderHistory.upsert({
     *   create: {
     *     // ... data to create a OrderHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderHistory we want to update
     *   }
     * })
     */
    upsert<T extends OrderHistoryUpsertArgs>(args: SelectSubset<T, OrderHistoryUpsertArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryCountArgs} args - Arguments to filter OrderHistories to count.
     * @example
     * // Count the number of OrderHistories
     * const count = await prisma.orderHistory.count({
     *   where: {
     *     // ... the filter for the OrderHistories we want to count
     *   }
     * })
    **/
    count<T extends OrderHistoryCountArgs>(
      args?: Subset<T, OrderHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderHistoryAggregateArgs>(args: Subset<T, OrderHistoryAggregateArgs>): Prisma.PrismaPromise<GetOrderHistoryAggregateType<T>>

    /**
     * Group by OrderHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryGroupByArgs} args - Group by arguments.
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
      T extends OrderHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderHistoryGroupByArgs['orderBy'] }
        : { orderBy?: OrderHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderHistory model
   */
  readonly fields: OrderHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderHistory model
   */
  interface OrderHistoryFieldRefs {
    readonly OrderHistoryID: FieldRef<"OrderHistory", 'String'>
    readonly OrderID: FieldRef<"OrderHistory", 'String'>
    readonly Record: FieldRef<"OrderHistory", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * OrderHistory findUnique
   */
  export type OrderHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory findUniqueOrThrow
   */
  export type OrderHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory findFirst
   */
  export type OrderHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderHistories.
     */
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory findFirstOrThrow
   */
  export type OrderHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderHistories.
     */
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory findMany
   */
  export type OrderHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistories to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory create
   */
  export type OrderHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderHistory.
     */
    data: XOR<OrderHistoryCreateInput, OrderHistoryUncheckedCreateInput>
  }

  /**
   * OrderHistory createMany
   */
  export type OrderHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderHistories.
     */
    data: OrderHistoryCreateManyInput | OrderHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderHistory createManyAndReturn
   */
  export type OrderHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many OrderHistories.
     */
    data: OrderHistoryCreateManyInput | OrderHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderHistory update
   */
  export type OrderHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderHistory.
     */
    data: XOR<OrderHistoryUpdateInput, OrderHistoryUncheckedUpdateInput>
    /**
     * Choose, which OrderHistory to update.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory updateMany
   */
  export type OrderHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderHistories.
     */
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OrderHistories to update
     */
    where?: OrderHistoryWhereInput
    /**
     * Limit how many OrderHistories to update.
     */
    limit?: number
  }

  /**
   * OrderHistory updateManyAndReturn
   */
  export type OrderHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * The data used to update OrderHistories.
     */
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OrderHistories to update
     */
    where?: OrderHistoryWhereInput
    /**
     * Limit how many OrderHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderHistory upsert
   */
  export type OrderHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderHistory to update in case it exists.
     */
    where: OrderHistoryWhereUniqueInput
    /**
     * In case the OrderHistory found by the `where` argument doesn't exist, create a new OrderHistory with this data.
     */
    create: XOR<OrderHistoryCreateInput, OrderHistoryUncheckedCreateInput>
    /**
     * In case the OrderHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderHistoryUpdateInput, OrderHistoryUncheckedUpdateInput>
  }

  /**
   * OrderHistory delete
   */
  export type OrderHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter which OrderHistory to delete.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory deleteMany
   */
  export type OrderHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderHistories to delete
     */
    where?: OrderHistoryWhereInput
    /**
     * Limit how many OrderHistories to delete.
     */
    limit?: number
  }

  /**
   * OrderHistory without action
   */
  export type OrderHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
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
    Type: 'Type',
    Username: 'Username',
    FacebookID: 'FacebookID',
    GoogleID: 'GoogleID',
    WorkArea: 'WorkArea',
    WorkAreaIDs: 'WorkAreaIDs'
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


  export const ChatScalarFieldEnum: {
    ChatID: 'ChatID',
    Name: 'Name',
    Type: 'Type',
    lastMessageAt: 'lastMessageAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ChatMemberScalarFieldEnum: {
    ChatID: 'ChatID',
    Username: 'Username'
  };

  export type ChatMemberScalarFieldEnum = (typeof ChatMemberScalarFieldEnum)[keyof typeof ChatMemberScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    MessageID: 'MessageID',
    ChatID: 'ChatID',
    SenderUsername: 'SenderUsername',
    Status: 'Status',
    CreatedAt: 'CreatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageContentScalarFieldEnum: {
    MessageContentID: 'MessageContentID',
    MessageID: 'MessageID',
    Index: 'Index',
    Text: 'Text',
    Filename: 'Filename',
    MimeType: 'MimeType',
    Data: 'Data'
  };

  export type MessageContentScalarFieldEnum = (typeof MessageContentScalarFieldEnum)[keyof typeof MessageContentScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    OrderID: 'OrderID',
    SenderID: 'SenderID',
    ReceiverID: 'ReceiverID',
    CreatedAt: 'CreatedAt',
    Status: 'Status'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    itemId: 'itemId',
    quantity: 'quantity',
    orderId: 'orderId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderHistoryScalarFieldEnum: {
    OrderHistoryID: 'OrderHistoryID',
    OrderID: 'OrderID',
    Record: 'Record'
  };

  export type OrderHistoryScalarFieldEnum = (typeof OrderHistoryScalarFieldEnum)[keyof typeof OrderHistoryScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    orderItems?: OrderItemListRelationFilter
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
    orderItems?: OrderItemOrderByRelationAggregateInput
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
    orderItems?: OrderItemListRelationFilter
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
    Type?: StringFilter<"Accounts"> | string
    Username?: StringNullableFilter<"Accounts"> | string | null
    FacebookID?: StringNullableFilter<"Accounts"> | string | null
    GoogleID?: StringNullableFilter<"Accounts"> | string | null
    WorkArea?: JsonNullableFilter<"Accounts">
    WorkAreaIDs?: IntNullableListFilter<"Accounts">
    Account_Items?: Account_ItemsListRelationFilter
    ChatMember?: ChatMemberListRelationFilter
    Message?: MessageListRelationFilter
    SentOrders?: OrdersListRelationFilter
    ReceivedOrders?: OrdersListRelationFilter
  }

  export type AccountsOrderByWithRelationInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Type?: SortOrder
    Username?: SortOrderInput | SortOrder
    FacebookID?: SortOrderInput | SortOrder
    GoogleID?: SortOrderInput | SortOrder
    WorkArea?: SortOrderInput | SortOrder
    WorkAreaIDs?: SortOrder
    Account_Items?: Account_ItemsOrderByRelationAggregateInput
    ChatMember?: ChatMemberOrderByRelationAggregateInput
    Message?: MessageOrderByRelationAggregateInput
    SentOrders?: OrdersOrderByRelationAggregateInput
    ReceivedOrders?: OrdersOrderByRelationAggregateInput
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
    Type?: StringFilter<"Accounts"> | string
    WorkArea?: JsonNullableFilter<"Accounts">
    WorkAreaIDs?: IntNullableListFilter<"Accounts">
    Account_Items?: Account_ItemsListRelationFilter
    ChatMember?: ChatMemberListRelationFilter
    Message?: MessageListRelationFilter
    SentOrders?: OrdersListRelationFilter
    ReceivedOrders?: OrdersListRelationFilter
  }, "AccountID" | "Email" | "Username" | "FacebookID" | "GoogleID">

  export type AccountsOrderByWithAggregationInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Type?: SortOrder
    Username?: SortOrderInput | SortOrder
    FacebookID?: SortOrderInput | SortOrder
    GoogleID?: SortOrderInput | SortOrder
    WorkArea?: SortOrderInput | SortOrder
    WorkAreaIDs?: SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _avg?: AccountsAvgOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
    _sum?: AccountsSumOrderByAggregateInput
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
    Type?: StringWithAggregatesFilter<"Accounts"> | string
    Username?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    FacebookID?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    GoogleID?: StringNullableWithAggregatesFilter<"Accounts"> | string | null
    WorkArea?: JsonNullableWithAggregatesFilter<"Accounts">
    WorkAreaIDs?: IntNullableListFilter<"Accounts">
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

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    ChatID?: StringFilter<"Chat"> | string
    Name?: StringFilter<"Chat"> | string
    Type?: StringFilter<"Chat"> | string
    lastMessageAt?: DateTimeFilter<"Chat"> | Date | string
    Messages?: MessageListRelationFilter
    Members?: ChatMemberListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    ChatID?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    lastMessageAt?: SortOrder
    Messages?: MessageOrderByRelationAggregateInput
    Members?: ChatMemberOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    ChatID?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    Name?: StringFilter<"Chat"> | string
    Type?: StringFilter<"Chat"> | string
    lastMessageAt?: DateTimeFilter<"Chat"> | Date | string
    Messages?: MessageListRelationFilter
    Members?: ChatMemberListRelationFilter
  }, "ChatID">

  export type ChatOrderByWithAggregationInput = {
    ChatID?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    lastMessageAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    ChatID?: StringWithAggregatesFilter<"Chat"> | string
    Name?: StringWithAggregatesFilter<"Chat"> | string
    Type?: StringWithAggregatesFilter<"Chat"> | string
    lastMessageAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type ChatMemberWhereInput = {
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    ChatID?: StringFilter<"ChatMember"> | string
    Username?: StringFilter<"ChatMember"> | string
    Chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    User?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }

  export type ChatMemberOrderByWithRelationInput = {
    ChatID?: SortOrder
    Username?: SortOrder
    Chat?: ChatOrderByWithRelationInput
    User?: AccountsOrderByWithRelationInput
  }

  export type ChatMemberWhereUniqueInput = Prisma.AtLeast<{
    ChatID_Username?: ChatMemberChatIDUsernameCompoundUniqueInput
    AND?: ChatMemberWhereInput | ChatMemberWhereInput[]
    OR?: ChatMemberWhereInput[]
    NOT?: ChatMemberWhereInput | ChatMemberWhereInput[]
    ChatID?: StringFilter<"ChatMember"> | string
    Username?: StringFilter<"ChatMember"> | string
    Chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    User?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }, "ChatID_Username">

  export type ChatMemberOrderByWithAggregationInput = {
    ChatID?: SortOrder
    Username?: SortOrder
    _count?: ChatMemberCountOrderByAggregateInput
    _max?: ChatMemberMaxOrderByAggregateInput
    _min?: ChatMemberMinOrderByAggregateInput
  }

  export type ChatMemberScalarWhereWithAggregatesInput = {
    AND?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    OR?: ChatMemberScalarWhereWithAggregatesInput[]
    NOT?: ChatMemberScalarWhereWithAggregatesInput | ChatMemberScalarWhereWithAggregatesInput[]
    ChatID?: StringWithAggregatesFilter<"ChatMember"> | string
    Username?: StringWithAggregatesFilter<"ChatMember"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    MessageID?: StringFilter<"Message"> | string
    ChatID?: StringFilter<"Message"> | string
    SenderUsername?: StringFilter<"Message"> | string
    Status?: StringFilter<"Message"> | string
    CreatedAt?: DateTimeFilter<"Message"> | Date | string
    Chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    Sender?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    MessageContent?: MessageContentListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    MessageID?: SortOrder
    ChatID?: SortOrder
    SenderUsername?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    Chat?: ChatOrderByWithRelationInput
    Sender?: AccountsOrderByWithRelationInput
    MessageContent?: MessageContentOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    MessageID?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    ChatID?: StringFilter<"Message"> | string
    SenderUsername?: StringFilter<"Message"> | string
    Status?: StringFilter<"Message"> | string
    CreatedAt?: DateTimeFilter<"Message"> | Date | string
    Chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    Sender?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    MessageContent?: MessageContentListRelationFilter
  }, "MessageID">

  export type MessageOrderByWithAggregationInput = {
    MessageID?: SortOrder
    ChatID?: SortOrder
    SenderUsername?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    MessageID?: StringWithAggregatesFilter<"Message"> | string
    ChatID?: StringWithAggregatesFilter<"Message"> | string
    SenderUsername?: StringWithAggregatesFilter<"Message"> | string
    Status?: StringWithAggregatesFilter<"Message"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MessageContentWhereInput = {
    AND?: MessageContentWhereInput | MessageContentWhereInput[]
    OR?: MessageContentWhereInput[]
    NOT?: MessageContentWhereInput | MessageContentWhereInput[]
    MessageContentID?: IntFilter<"MessageContent"> | number
    MessageID?: StringFilter<"MessageContent"> | string
    Index?: IntFilter<"MessageContent"> | number
    Text?: StringNullableFilter<"MessageContent"> | string | null
    Filename?: StringNullableFilter<"MessageContent"> | string | null
    MimeType?: StringNullableFilter<"MessageContent"> | string | null
    Data?: BytesNullableFilter<"MessageContent"> | Uint8Array | null
    Message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }

  export type MessageContentOrderByWithRelationInput = {
    MessageContentID?: SortOrder
    MessageID?: SortOrder
    Index?: SortOrder
    Text?: SortOrderInput | SortOrder
    Filename?: SortOrderInput | SortOrder
    MimeType?: SortOrderInput | SortOrder
    Data?: SortOrderInput | SortOrder
    Message?: MessageOrderByWithRelationInput
  }

  export type MessageContentWhereUniqueInput = Prisma.AtLeast<{
    MessageContentID?: number
    AND?: MessageContentWhereInput | MessageContentWhereInput[]
    OR?: MessageContentWhereInput[]
    NOT?: MessageContentWhereInput | MessageContentWhereInput[]
    MessageID?: StringFilter<"MessageContent"> | string
    Index?: IntFilter<"MessageContent"> | number
    Text?: StringNullableFilter<"MessageContent"> | string | null
    Filename?: StringNullableFilter<"MessageContent"> | string | null
    MimeType?: StringNullableFilter<"MessageContent"> | string | null
    Data?: BytesNullableFilter<"MessageContent"> | Uint8Array | null
    Message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }, "MessageContentID">

  export type MessageContentOrderByWithAggregationInput = {
    MessageContentID?: SortOrder
    MessageID?: SortOrder
    Index?: SortOrder
    Text?: SortOrderInput | SortOrder
    Filename?: SortOrderInput | SortOrder
    MimeType?: SortOrderInput | SortOrder
    Data?: SortOrderInput | SortOrder
    _count?: MessageContentCountOrderByAggregateInput
    _avg?: MessageContentAvgOrderByAggregateInput
    _max?: MessageContentMaxOrderByAggregateInput
    _min?: MessageContentMinOrderByAggregateInput
    _sum?: MessageContentSumOrderByAggregateInput
  }

  export type MessageContentScalarWhereWithAggregatesInput = {
    AND?: MessageContentScalarWhereWithAggregatesInput | MessageContentScalarWhereWithAggregatesInput[]
    OR?: MessageContentScalarWhereWithAggregatesInput[]
    NOT?: MessageContentScalarWhereWithAggregatesInput | MessageContentScalarWhereWithAggregatesInput[]
    MessageContentID?: IntWithAggregatesFilter<"MessageContent"> | number
    MessageID?: StringWithAggregatesFilter<"MessageContent"> | string
    Index?: IntWithAggregatesFilter<"MessageContent"> | number
    Text?: StringNullableWithAggregatesFilter<"MessageContent"> | string | null
    Filename?: StringNullableWithAggregatesFilter<"MessageContent"> | string | null
    MimeType?: StringNullableWithAggregatesFilter<"MessageContent"> | string | null
    Data?: BytesNullableWithAggregatesFilter<"MessageContent"> | Uint8Array | null
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    OrderID?: StringFilter<"Orders"> | string
    SenderID?: UuidFilter<"Orders"> | string
    ReceiverID?: UuidFilter<"Orders"> | string
    CreatedAt?: DateTimeFilter<"Orders"> | Date | string
    Status?: StringFilter<"Orders"> | string
    Items?: OrderItemListRelationFilter
    Sender?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    Receiver?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    OrderHistory?: OrderHistoryListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    OrderID?: SortOrder
    SenderID?: SortOrder
    ReceiverID?: SortOrder
    CreatedAt?: SortOrder
    Status?: SortOrder
    Items?: OrderItemOrderByRelationAggregateInput
    Sender?: AccountsOrderByWithRelationInput
    Receiver?: AccountsOrderByWithRelationInput
    OrderHistory?: OrderHistoryOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    OrderID?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    SenderID?: UuidFilter<"Orders"> | string
    ReceiverID?: UuidFilter<"Orders"> | string
    CreatedAt?: DateTimeFilter<"Orders"> | Date | string
    Status?: StringFilter<"Orders"> | string
    Items?: OrderItemListRelationFilter
    Sender?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    Receiver?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
    OrderHistory?: OrderHistoryListRelationFilter
  }, "OrderID">

  export type OrdersOrderByWithAggregationInput = {
    OrderID?: SortOrder
    SenderID?: SortOrder
    ReceiverID?: SortOrder
    CreatedAt?: SortOrder
    Status?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OrderID?: StringWithAggregatesFilter<"Orders"> | string
    SenderID?: UuidWithAggregatesFilter<"Orders"> | string
    ReceiverID?: UuidWithAggregatesFilter<"Orders"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    Status?: StringWithAggregatesFilter<"Orders"> | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    accountId?: UuidFilter<"OrderItem"> | string
    itemId?: BigIntFilter<"OrderItem"> | bigint | number
    quantity?: BigIntFilter<"OrderItem"> | bigint | number
    orderId?: StringFilter<"OrderItem"> | string
    accountItem?: XOR<Account_ItemsScalarRelationFilter, Account_ItemsWhereInput>
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    accountItem?: Account_ItemsOrderByWithRelationInput
    order?: OrdersOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    accountId?: UuidFilter<"OrderItem"> | string
    itemId?: BigIntFilter<"OrderItem"> | bigint | number
    quantity?: BigIntFilter<"OrderItem"> | bigint | number
    orderId?: StringFilter<"OrderItem"> | string
    accountItem?: XOR<Account_ItemsScalarRelationFilter, Account_ItemsWhereInput>
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    accountId?: UuidWithAggregatesFilter<"OrderItem"> | string
    itemId?: BigIntWithAggregatesFilter<"OrderItem"> | bigint | number
    quantity?: BigIntWithAggregatesFilter<"OrderItem"> | bigint | number
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
  }

  export type OrderHistoryWhereInput = {
    AND?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    OR?: OrderHistoryWhereInput[]
    NOT?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    OrderHistoryID?: StringFilter<"OrderHistory"> | string
    OrderID?: StringFilter<"OrderHistory"> | string
    Record?: JsonFilter<"OrderHistory">
    Order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type OrderHistoryOrderByWithRelationInput = {
    OrderHistoryID?: SortOrder
    OrderID?: SortOrder
    Record?: SortOrder
    Order?: OrdersOrderByWithRelationInput
  }

  export type OrderHistoryWhereUniqueInput = Prisma.AtLeast<{
    OrderHistoryID?: string
    AND?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    OR?: OrderHistoryWhereInput[]
    NOT?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    OrderID?: StringFilter<"OrderHistory"> | string
    Record?: JsonFilter<"OrderHistory">
    Order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "OrderHistoryID">

  export type OrderHistoryOrderByWithAggregationInput = {
    OrderHistoryID?: SortOrder
    OrderID?: SortOrder
    Record?: SortOrder
    _count?: OrderHistoryCountOrderByAggregateInput
    _max?: OrderHistoryMaxOrderByAggregateInput
    _min?: OrderHistoryMinOrderByAggregateInput
  }

  export type OrderHistoryScalarWhereWithAggregatesInput = {
    AND?: OrderHistoryScalarWhereWithAggregatesInput | OrderHistoryScalarWhereWithAggregatesInput[]
    OR?: OrderHistoryScalarWhereWithAggregatesInput[]
    NOT?: OrderHistoryScalarWhereWithAggregatesInput | OrderHistoryScalarWhereWithAggregatesInput[]
    OrderHistoryID?: StringWithAggregatesFilter<"OrderHistory"> | string
    OrderID?: StringWithAggregatesFilter<"OrderHistory"> | string
    Record?: JsonWithAggregatesFilter<"OrderHistory">
  }

  export type Account_ItemsCreateInput = {
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    Accounts: AccountsCreateNestedOneWithoutAccount_ItemsInput
    Items: ItemsCreateNestedOneWithoutAccount_ItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutAccountItemInput
  }

  export type Account_ItemsUncheckedCreateInput = {
    AccountID: string
    ItemID: bigint | number
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutAccountItemInput
  }

  export type Account_ItemsUpdateInput = {
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    Accounts?: AccountsUpdateOneRequiredWithoutAccount_ItemsNestedInput
    Items?: ItemsUpdateOneRequiredWithoutAccount_ItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutAccountItemNestedInput
  }

  export type Account_ItemsUncheckedUpdateInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutAccountItemNestedInput
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
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsCreateNestedManyWithoutAccountsInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    SentOrders?: OrdersCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersCreateNestedManyWithoutReceiverInput
  }

  export type AccountsUncheckedCreateInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedCreateNestedManyWithoutAccountsInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    SentOrders?: OrdersUncheckedCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AccountsUpdateInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUpdateManyWithoutAccountsNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    SentOrders?: OrdersUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUpdateManyWithoutReceiverNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedUpdateManyWithoutAccountsNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    SentOrders?: OrdersUncheckedUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AccountsCreateManyInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
  }

  export type AccountsUpdateManyMutationInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
  }

  export type AccountsUncheckedUpdateManyInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
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

  export type ChatCreateInput = {
    ChatID?: string
    Name?: string
    Type?: string
    lastMessageAt?: Date | string
    Messages?: MessageCreateNestedManyWithoutChatInput
    Members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    ChatID?: string
    Name?: string
    Type?: string
    lastMessageAt?: Date | string
    Messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    Members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Messages?: MessageUpdateManyWithoutChatNestedInput
    Members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    Members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    ChatID?: string
    Name?: string
    Type?: string
    lastMessageAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberCreateInput = {
    Chat: ChatCreateNestedOneWithoutMembersInput
    User: AccountsCreateNestedOneWithoutChatMemberInput
  }

  export type ChatMemberUncheckedCreateInput = {
    ChatID: string
    Username: string
  }

  export type ChatMemberUpdateInput = {
    Chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
    User?: AccountsUpdateOneRequiredWithoutChatMemberNestedInput
  }

  export type ChatMemberUncheckedUpdateInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberCreateManyInput = {
    ChatID: string
    Username: string
  }

  export type ChatMemberUpdateManyMutationInput = {

  }

  export type ChatMemberUncheckedUpdateManyInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Username?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    MessageID?: string
    Status?: string
    CreatedAt?: Date | string
    Chat: ChatCreateNestedOneWithoutMessagesInput
    Sender: AccountsCreateNestedOneWithoutMessageInput
    MessageContent?: MessageContentCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    MessageID?: string
    ChatID: string
    SenderUsername: string
    Status?: string
    CreatedAt?: Date | string
    MessageContent?: MessageContentUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    Sender?: AccountsUpdateOneRequiredWithoutMessageNestedInput
    MessageContent?: MessageContentUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    ChatID?: StringFieldUpdateOperationsInput | string
    SenderUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MessageContent?: MessageContentUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    MessageID?: string
    ChatID: string
    SenderUsername: string
    Status?: string
    CreatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    ChatID?: StringFieldUpdateOperationsInput | string
    SenderUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageContentCreateInput = {
    Index: number
    Text?: string | null
    Filename?: string | null
    MimeType?: string | null
    Data?: Uint8Array | null
    Message: MessageCreateNestedOneWithoutMessageContentInput
  }

  export type MessageContentUncheckedCreateInput = {
    MessageContentID?: number
    MessageID: string
    Index: number
    Text?: string | null
    Filename?: string | null
    MimeType?: string | null
    Data?: Uint8Array | null
  }

  export type MessageContentUpdateInput = {
    Index?: IntFieldUpdateOperationsInput | number
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Filename?: NullableStringFieldUpdateOperationsInput | string | null
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    Message?: MessageUpdateOneRequiredWithoutMessageContentNestedInput
  }

  export type MessageContentUncheckedUpdateInput = {
    MessageContentID?: IntFieldUpdateOperationsInput | number
    MessageID?: StringFieldUpdateOperationsInput | string
    Index?: IntFieldUpdateOperationsInput | number
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Filename?: NullableStringFieldUpdateOperationsInput | string | null
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type MessageContentCreateManyInput = {
    MessageContentID?: number
    MessageID: string
    Index: number
    Text?: string | null
    Filename?: string | null
    MimeType?: string | null
    Data?: Uint8Array | null
  }

  export type MessageContentUpdateManyMutationInput = {
    Index?: IntFieldUpdateOperationsInput | number
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Filename?: NullableStringFieldUpdateOperationsInput | string | null
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type MessageContentUncheckedUpdateManyInput = {
    MessageContentID?: IntFieldUpdateOperationsInput | number
    MessageID?: StringFieldUpdateOperationsInput | string
    Index?: IntFieldUpdateOperationsInput | number
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Filename?: NullableStringFieldUpdateOperationsInput | string | null
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type OrdersCreateInput = {
    OrderID?: string
    CreatedAt?: Date | string
    Status?: string
    Items?: OrderItemCreateNestedManyWithoutOrderInput
    Sender: AccountsCreateNestedOneWithoutSentOrdersInput
    Receiver: AccountsCreateNestedOneWithoutReceivedOrdersInput
    OrderHistory?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    OrderID?: string
    SenderID: string
    ReceiverID: string
    CreatedAt?: Date | string
    Status?: string
    Items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    OrderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Items?: OrderItemUpdateManyWithoutOrderNestedInput
    Sender?: AccountsUpdateOneRequiredWithoutSentOrdersNestedInput
    Receiver?: AccountsUpdateOneRequiredWithoutReceivedOrdersNestedInput
    OrderHistory?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    SenderID?: StringFieldUpdateOperationsInput | string
    ReceiverID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    OrderHistory?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    OrderID?: string
    SenderID: string
    ReceiverID: string
    CreatedAt?: Date | string
    Status?: string
  }

  export type OrdersUpdateManyMutationInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    SenderID?: StringFieldUpdateOperationsInput | string
    ReceiverID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateInput = {
    quantity: bigint | number
    accountItem: Account_ItemsCreateNestedOneWithoutOrderItemsInput
    order: OrdersCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    accountId: string
    itemId: bigint | number
    quantity: bigint | number
    orderId: string
  }

  export type OrderItemUpdateInput = {
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    accountItem?: Account_ItemsUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: OrdersUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyInput = {
    id?: number
    accountId: string
    itemId: bigint | number
    quantity: bigint | number
    orderId: string
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderHistoryCreateInput = {
    OrderHistoryID?: string
    Record: JsonNullValueInput | InputJsonValue
    Order: OrdersCreateNestedOneWithoutOrderHistoryInput
  }

  export type OrderHistoryUncheckedCreateInput = {
    OrderHistoryID?: string
    OrderID: string
    Record: JsonNullValueInput | InputJsonValue
  }

  export type OrderHistoryUpdateInput = {
    OrderHistoryID?: StringFieldUpdateOperationsInput | string
    Record?: JsonNullValueInput | InputJsonValue
    Order?: OrdersUpdateOneRequiredWithoutOrderHistoryNestedInput
  }

  export type OrderHistoryUncheckedUpdateInput = {
    OrderHistoryID?: StringFieldUpdateOperationsInput | string
    OrderID?: StringFieldUpdateOperationsInput | string
    Record?: JsonNullValueInput | InputJsonValue
  }

  export type OrderHistoryCreateManyInput = {
    OrderHistoryID?: string
    OrderID: string
    Record: JsonNullValueInput | InputJsonValue
  }

  export type OrderHistoryUpdateManyMutationInput = {
    OrderHistoryID?: StringFieldUpdateOperationsInput | string
    Record?: JsonNullValueInput | InputJsonValue
  }

  export type OrderHistoryUncheckedUpdateManyInput = {
    OrderHistoryID?: StringFieldUpdateOperationsInput | string
    OrderID?: StringFieldUpdateOperationsInput | string
    Record?: JsonNullValueInput | InputJsonValue
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

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Account_ItemsListRelationFilter = {
    every?: Account_ItemsWhereInput
    some?: Account_ItemsWhereInput
    none?: Account_ItemsWhereInput
  }

  export type ChatMemberListRelationFilter = {
    every?: ChatMemberWhereInput
    some?: ChatMemberWhereInput
    none?: ChatMemberWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Account_ItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Type?: SortOrder
    Username?: SortOrder
    FacebookID?: SortOrder
    GoogleID?: SortOrder
    WorkArea?: SortOrder
    WorkAreaIDs?: SortOrder
  }

  export type AccountsAvgOrderByAggregateInput = {
    WorkAreaIDs?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    AccountID?: SortOrder
    Email?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Password?: SortOrder
    Type?: SortOrder
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
    Type?: SortOrder
    Username?: SortOrder
    FacebookID?: SortOrder
    GoogleID?: SortOrder
  }

  export type AccountsSumOrderByAggregateInput = {
    WorkAreaIDs?: SortOrder
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

  export type ChatCountOrderByAggregateInput = {
    ChatID?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    ChatID?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    lastMessageAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    ChatID?: SortOrder
    Name?: SortOrder
    Type?: SortOrder
    lastMessageAt?: SortOrder
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

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type ChatMemberChatIDUsernameCompoundUniqueInput = {
    ChatID: string
    Username: string
  }

  export type ChatMemberCountOrderByAggregateInput = {
    ChatID?: SortOrder
    Username?: SortOrder
  }

  export type ChatMemberMaxOrderByAggregateInput = {
    ChatID?: SortOrder
    Username?: SortOrder
  }

  export type ChatMemberMinOrderByAggregateInput = {
    ChatID?: SortOrder
    Username?: SortOrder
  }

  export type MessageContentListRelationFilter = {
    every?: MessageContentWhereInput
    some?: MessageContentWhereInput
    none?: MessageContentWhereInput
  }

  export type MessageContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    MessageID?: SortOrder
    ChatID?: SortOrder
    SenderUsername?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    MessageID?: SortOrder
    ChatID?: SortOrder
    SenderUsername?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    MessageID?: SortOrder
    ChatID?: SortOrder
    SenderUsername?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
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

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type MessageContentCountOrderByAggregateInput = {
    MessageContentID?: SortOrder
    MessageID?: SortOrder
    Index?: SortOrder
    Text?: SortOrder
    Filename?: SortOrder
    MimeType?: SortOrder
    Data?: SortOrder
  }

  export type MessageContentAvgOrderByAggregateInput = {
    MessageContentID?: SortOrder
    Index?: SortOrder
  }

  export type MessageContentMaxOrderByAggregateInput = {
    MessageContentID?: SortOrder
    MessageID?: SortOrder
    Index?: SortOrder
    Text?: SortOrder
    Filename?: SortOrder
    MimeType?: SortOrder
    Data?: SortOrder
  }

  export type MessageContentMinOrderByAggregateInput = {
    MessageContentID?: SortOrder
    MessageID?: SortOrder
    Index?: SortOrder
    Text?: SortOrder
    Filename?: SortOrder
    MimeType?: SortOrder
    Data?: SortOrder
  }

  export type MessageContentSumOrderByAggregateInput = {
    MessageContentID?: SortOrder
    Index?: SortOrder
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

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type OrderHistoryListRelationFilter = {
    every?: OrderHistoryWhereInput
    some?: OrderHistoryWhereInput
    none?: OrderHistoryWhereInput
  }

  export type OrderHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    OrderID?: SortOrder
    SenderID?: SortOrder
    ReceiverID?: SortOrder
    CreatedAt?: SortOrder
    Status?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    OrderID?: SortOrder
    SenderID?: SortOrder
    ReceiverID?: SortOrder
    CreatedAt?: SortOrder
    Status?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    OrderID?: SortOrder
    SenderID?: SortOrder
    ReceiverID?: SortOrder
    CreatedAt?: SortOrder
    Status?: SortOrder
  }

  export type Account_ItemsScalarRelationFilter = {
    is?: Account_ItemsWhereInput
    isNot?: Account_ItemsWhereInput
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type OrderHistoryCountOrderByAggregateInput = {
    OrderHistoryID?: SortOrder
    OrderID?: SortOrder
    Record?: SortOrder
  }

  export type OrderHistoryMaxOrderByAggregateInput = {
    OrderHistoryID?: SortOrder
    OrderID?: SortOrder
  }

  export type OrderHistoryMinOrderByAggregateInput = {
    OrderHistoryID?: SortOrder
    OrderID?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type OrderItemCreateNestedManyWithoutAccountItemInput = {
    create?: XOR<OrderItemCreateWithoutAccountItemInput, OrderItemUncheckedCreateWithoutAccountItemInput> | OrderItemCreateWithoutAccountItemInput[] | OrderItemUncheckedCreateWithoutAccountItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutAccountItemInput | OrderItemCreateOrConnectWithoutAccountItemInput[]
    createMany?: OrderItemCreateManyAccountItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutAccountItemInput = {
    create?: XOR<OrderItemCreateWithoutAccountItemInput, OrderItemUncheckedCreateWithoutAccountItemInput> | OrderItemCreateWithoutAccountItemInput[] | OrderItemUncheckedCreateWithoutAccountItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutAccountItemInput | OrderItemCreateOrConnectWithoutAccountItemInput[]
    createMany?: OrderItemCreateManyAccountItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
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

  export type OrderItemUpdateManyWithoutAccountItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutAccountItemInput, OrderItemUncheckedCreateWithoutAccountItemInput> | OrderItemCreateWithoutAccountItemInput[] | OrderItemUncheckedCreateWithoutAccountItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutAccountItemInput | OrderItemCreateOrConnectWithoutAccountItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutAccountItemInput | OrderItemUpsertWithWhereUniqueWithoutAccountItemInput[]
    createMany?: OrderItemCreateManyAccountItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutAccountItemInput | OrderItemUpdateWithWhereUniqueWithoutAccountItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutAccountItemInput | OrderItemUpdateManyWithWhereWithoutAccountItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutAccountItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutAccountItemInput, OrderItemUncheckedCreateWithoutAccountItemInput> | OrderItemCreateWithoutAccountItemInput[] | OrderItemUncheckedCreateWithoutAccountItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutAccountItemInput | OrderItemCreateOrConnectWithoutAccountItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutAccountItemInput | OrderItemUpsertWithWhereUniqueWithoutAccountItemInput[]
    createMany?: OrderItemCreateManyAccountItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutAccountItemInput | OrderItemUpdateWithWhereUniqueWithoutAccountItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutAccountItemInput | OrderItemUpdateManyWithWhereWithoutAccountItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type AccountsCreateWorkAreaIDsInput = {
    set: number[]
  }

  export type Account_ItemsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput> | Account_ItemsCreateWithoutAccountsInput[] | Account_ItemsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutAccountsInput | Account_ItemsCreateOrConnectWithoutAccountsInput[]
    createMany?: Account_ItemsCreateManyAccountsInputEnvelope
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
  }

  export type ChatMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutSenderInput = {
    create?: XOR<OrdersCreateWithoutSenderInput, OrdersUncheckedCreateWithoutSenderInput> | OrdersCreateWithoutSenderInput[] | OrdersUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutSenderInput | OrdersCreateOrConnectWithoutSenderInput[]
    createMany?: OrdersCreateManySenderInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutReceiverInput = {
    create?: XOR<OrdersCreateWithoutReceiverInput, OrdersUncheckedCreateWithoutReceiverInput> | OrdersCreateWithoutReceiverInput[] | OrdersUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutReceiverInput | OrdersCreateOrConnectWithoutReceiverInput[]
    createMany?: OrdersCreateManyReceiverInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type Account_ItemsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput> | Account_ItemsCreateWithoutAccountsInput[] | Account_ItemsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutAccountsInput | Account_ItemsCreateOrConnectWithoutAccountsInput[]
    createMany?: Account_ItemsCreateManyAccountsInputEnvelope
    connect?: Account_ItemsWhereUniqueInput | Account_ItemsWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<OrdersCreateWithoutSenderInput, OrdersUncheckedCreateWithoutSenderInput> | OrdersCreateWithoutSenderInput[] | OrdersUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutSenderInput | OrdersCreateOrConnectWithoutSenderInput[]
    createMany?: OrdersCreateManySenderInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<OrdersCreateWithoutReceiverInput, OrdersUncheckedCreateWithoutReceiverInput> | OrdersCreateWithoutReceiverInput[] | OrdersUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutReceiverInput | OrdersCreateOrConnectWithoutReceiverInput[]
    createMany?: OrdersCreateManyReceiverInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountsUpdateWorkAreaIDsInput = {
    set?: number[]
    push?: number | number[]
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

  export type ChatMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutUserInput | ChatMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutUserInput | ChatMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutUserInput | ChatMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutSenderNestedInput = {
    create?: XOR<OrdersCreateWithoutSenderInput, OrdersUncheckedCreateWithoutSenderInput> | OrdersCreateWithoutSenderInput[] | OrdersUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutSenderInput | OrdersCreateOrConnectWithoutSenderInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutSenderInput | OrdersUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: OrdersCreateManySenderInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutSenderInput | OrdersUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutSenderInput | OrdersUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<OrdersCreateWithoutReceiverInput, OrdersUncheckedCreateWithoutReceiverInput> | OrdersCreateWithoutReceiverInput[] | OrdersUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutReceiverInput | OrdersCreateOrConnectWithoutReceiverInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutReceiverInput | OrdersUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: OrdersCreateManyReceiverInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutReceiverInput | OrdersUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutReceiverInput | OrdersUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
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

  export type ChatMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput> | ChatMemberCreateWithoutUserInput[] | ChatMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutUserInput | ChatMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutUserInput | ChatMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMemberCreateManyUserInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutUserInput | ChatMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutUserInput | ChatMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<OrdersCreateWithoutSenderInput, OrdersUncheckedCreateWithoutSenderInput> | OrdersCreateWithoutSenderInput[] | OrdersUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutSenderInput | OrdersCreateOrConnectWithoutSenderInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutSenderInput | OrdersUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: OrdersCreateManySenderInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutSenderInput | OrdersUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutSenderInput | OrdersUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<OrdersCreateWithoutReceiverInput, OrdersUncheckedCreateWithoutReceiverInput> | OrdersCreateWithoutReceiverInput[] | OrdersUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutReceiverInput | OrdersCreateOrConnectWithoutReceiverInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutReceiverInput | OrdersUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: OrdersCreateManyReceiverInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutReceiverInput | OrdersUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutReceiverInput | OrdersUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
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

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMemberCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMemberUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMemberUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput> | ChatMemberCreateWithoutChatInput[] | ChatMemberUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMemberCreateOrConnectWithoutChatInput | ChatMemberCreateOrConnectWithoutChatInput[]
    upsert?: ChatMemberUpsertWithWhereUniqueWithoutChatInput | ChatMemberUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMemberCreateManyChatInputEnvelope
    set?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    disconnect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    delete?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    connect?: ChatMemberWhereUniqueInput | ChatMemberWhereUniqueInput[]
    update?: ChatMemberUpdateWithWhereUniqueWithoutChatInput | ChatMemberUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMemberUpdateManyWithWhereWithoutChatInput | ChatMemberUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput
    connect?: ChatWhereUniqueInput
  }

  export type AccountsCreateNestedOneWithoutChatMemberInput = {
    create?: XOR<AccountsCreateWithoutChatMemberInput, AccountsUncheckedCreateWithoutChatMemberInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutChatMemberInput
    connect?: AccountsWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMembersInput
    upsert?: ChatUpsertWithoutMembersInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMembersInput, ChatUpdateWithoutMembersInput>, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type AccountsUpdateOneRequiredWithoutChatMemberNestedInput = {
    create?: XOR<AccountsCreateWithoutChatMemberInput, AccountsUncheckedCreateWithoutChatMemberInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutChatMemberInput
    upsert?: AccountsUpsertWithoutChatMemberInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutChatMemberInput, AccountsUpdateWithoutChatMemberInput>, AccountsUncheckedUpdateWithoutChatMemberInput>
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type AccountsCreateNestedOneWithoutMessageInput = {
    create?: XOR<AccountsCreateWithoutMessageInput, AccountsUncheckedCreateWithoutMessageInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutMessageInput
    connect?: AccountsWhereUniqueInput
  }

  export type MessageContentCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput> | MessageContentCreateWithoutMessageInput[] | MessageContentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageContentCreateOrConnectWithoutMessageInput | MessageContentCreateOrConnectWithoutMessageInput[]
    createMany?: MessageContentCreateManyMessageInputEnvelope
    connect?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
  }

  export type MessageContentUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput> | MessageContentCreateWithoutMessageInput[] | MessageContentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageContentCreateOrConnectWithoutMessageInput | MessageContentCreateOrConnectWithoutMessageInput[]
    createMany?: MessageContentCreateManyMessageInputEnvelope
    connect?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type AccountsUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<AccountsCreateWithoutMessageInput, AccountsUncheckedCreateWithoutMessageInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutMessageInput
    upsert?: AccountsUpsertWithoutMessageInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutMessageInput, AccountsUpdateWithoutMessageInput>, AccountsUncheckedUpdateWithoutMessageInput>
  }

  export type MessageContentUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput> | MessageContentCreateWithoutMessageInput[] | MessageContentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageContentCreateOrConnectWithoutMessageInput | MessageContentCreateOrConnectWithoutMessageInput[]
    upsert?: MessageContentUpsertWithWhereUniqueWithoutMessageInput | MessageContentUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageContentCreateManyMessageInputEnvelope
    set?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
    disconnect?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
    delete?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
    connect?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
    update?: MessageContentUpdateWithWhereUniqueWithoutMessageInput | MessageContentUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageContentUpdateManyWithWhereWithoutMessageInput | MessageContentUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageContentScalarWhereInput | MessageContentScalarWhereInput[]
  }

  export type MessageContentUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput> | MessageContentCreateWithoutMessageInput[] | MessageContentUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageContentCreateOrConnectWithoutMessageInput | MessageContentCreateOrConnectWithoutMessageInput[]
    upsert?: MessageContentUpsertWithWhereUniqueWithoutMessageInput | MessageContentUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageContentCreateManyMessageInputEnvelope
    set?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
    disconnect?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
    delete?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
    connect?: MessageContentWhereUniqueInput | MessageContentWhereUniqueInput[]
    update?: MessageContentUpdateWithWhereUniqueWithoutMessageInput | MessageContentUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageContentUpdateManyWithWhereWithoutMessageInput | MessageContentUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageContentScalarWhereInput | MessageContentScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutMessageContentInput = {
    create?: XOR<MessageCreateWithoutMessageContentInput, MessageUncheckedCreateWithoutMessageContentInput>
    connectOrCreate?: MessageCreateOrConnectWithoutMessageContentInput
    connect?: MessageWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type MessageUpdateOneRequiredWithoutMessageContentNestedInput = {
    create?: XOR<MessageCreateWithoutMessageContentInput, MessageUncheckedCreateWithoutMessageContentInput>
    connectOrCreate?: MessageCreateOrConnectWithoutMessageContentInput
    upsert?: MessageUpsertWithoutMessageContentInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutMessageContentInput, MessageUpdateWithoutMessageContentInput>, MessageUncheckedUpdateWithoutMessageContentInput>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type AccountsCreateNestedOneWithoutSentOrdersInput = {
    create?: XOR<AccountsCreateWithoutSentOrdersInput, AccountsUncheckedCreateWithoutSentOrdersInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutSentOrdersInput
    connect?: AccountsWhereUniqueInput
  }

  export type AccountsCreateNestedOneWithoutReceivedOrdersInput = {
    create?: XOR<AccountsCreateWithoutReceivedOrdersInput, AccountsUncheckedCreateWithoutReceivedOrdersInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutReceivedOrdersInput
    connect?: AccountsWhereUniqueInput
  }

  export type OrderHistoryCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput> | OrderHistoryCreateWithoutOrderInput[] | OrderHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutOrderInput | OrderHistoryCreateOrConnectWithoutOrderInput[]
    createMany?: OrderHistoryCreateManyOrderInputEnvelope
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderHistoryUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput> | OrderHistoryCreateWithoutOrderInput[] | OrderHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutOrderInput | OrderHistoryCreateOrConnectWithoutOrderInput[]
    createMany?: OrderHistoryCreateManyOrderInputEnvelope
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type AccountsUpdateOneRequiredWithoutSentOrdersNestedInput = {
    create?: XOR<AccountsCreateWithoutSentOrdersInput, AccountsUncheckedCreateWithoutSentOrdersInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutSentOrdersInput
    upsert?: AccountsUpsertWithoutSentOrdersInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutSentOrdersInput, AccountsUpdateWithoutSentOrdersInput>, AccountsUncheckedUpdateWithoutSentOrdersInput>
  }

  export type AccountsUpdateOneRequiredWithoutReceivedOrdersNestedInput = {
    create?: XOR<AccountsCreateWithoutReceivedOrdersInput, AccountsUncheckedCreateWithoutReceivedOrdersInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutReceivedOrdersInput
    upsert?: AccountsUpsertWithoutReceivedOrdersInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutReceivedOrdersInput, AccountsUpdateWithoutReceivedOrdersInput>, AccountsUncheckedUpdateWithoutReceivedOrdersInput>
  }

  export type OrderHistoryUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput> | OrderHistoryCreateWithoutOrderInput[] | OrderHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutOrderInput | OrderHistoryCreateOrConnectWithoutOrderInput[]
    upsert?: OrderHistoryUpsertWithWhereUniqueWithoutOrderInput | OrderHistoryUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderHistoryCreateManyOrderInputEnvelope
    set?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    disconnect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    delete?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    update?: OrderHistoryUpdateWithWhereUniqueWithoutOrderInput | OrderHistoryUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderHistoryUpdateManyWithWhereWithoutOrderInput | OrderHistoryUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput> | OrderHistoryCreateWithoutOrderInput[] | OrderHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutOrderInput | OrderHistoryCreateOrConnectWithoutOrderInput[]
    upsert?: OrderHistoryUpsertWithWhereUniqueWithoutOrderInput | OrderHistoryUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderHistoryCreateManyOrderInputEnvelope
    set?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    disconnect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    delete?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    update?: OrderHistoryUpdateWithWhereUniqueWithoutOrderInput | OrderHistoryUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderHistoryUpdateManyWithWhereWithoutOrderInput | OrderHistoryUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
  }

  export type Account_ItemsCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<Account_ItemsCreateWithoutOrderItemsInput, Account_ItemsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutOrderItemsInput
    connect?: Account_ItemsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutItemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type Account_ItemsUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<Account_ItemsCreateWithoutOrderItemsInput, Account_ItemsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: Account_ItemsCreateOrConnectWithoutOrderItemsInput
    upsert?: Account_ItemsUpsertWithoutOrderItemsInput
    connect?: Account_ItemsWhereUniqueInput
    update?: XOR<XOR<Account_ItemsUpdateToOneWithWhereWithoutOrderItemsInput, Account_ItemsUpdateWithoutOrderItemsInput>, Account_ItemsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrdersUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutItemsInput
    upsert?: OrdersUpsertWithoutItemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutItemsInput, OrdersUpdateWithoutItemsInput>, OrdersUncheckedUpdateWithoutItemsInput>
  }

  export type OrdersCreateNestedOneWithoutOrderHistoryInput = {
    create?: XOR<OrdersCreateWithoutOrderHistoryInput, OrdersUncheckedCreateWithoutOrderHistoryInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderHistoryInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrderHistoryNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderHistoryInput, OrdersUncheckedCreateWithoutOrderHistoryInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderHistoryInput
    upsert?: OrdersUpsertWithoutOrderHistoryInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderHistoryInput, OrdersUpdateWithoutOrderHistoryInput>, OrdersUncheckedUpdateWithoutOrderHistoryInput>
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

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
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

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type AccountsCreateWithoutAccount_ItemsInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    SentOrders?: OrdersCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersCreateNestedManyWithoutReceiverInput
  }

  export type AccountsUncheckedCreateWithoutAccount_ItemsInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    SentOrders?: OrdersUncheckedCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersUncheckedCreateNestedManyWithoutReceiverInput
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

  export type OrderItemCreateWithoutAccountItemInput = {
    quantity: bigint | number
    order: OrdersCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutAccountItemInput = {
    id?: number
    quantity: bigint | number
    orderId: string
  }

  export type OrderItemCreateOrConnectWithoutAccountItemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutAccountItemInput, OrderItemUncheckedCreateWithoutAccountItemInput>
  }

  export type OrderItemCreateManyAccountItemInputEnvelope = {
    data: OrderItemCreateManyAccountItemInput | OrderItemCreateManyAccountItemInput[]
    skipDuplicates?: boolean
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
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    SentOrders?: OrdersUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUpdateManyWithoutReceiverNestedInput
  }

  export type AccountsUncheckedUpdateWithoutAccount_ItemsInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    SentOrders?: OrdersUncheckedUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUncheckedUpdateManyWithoutReceiverNestedInput
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

  export type OrderItemUpsertWithWhereUniqueWithoutAccountItemInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutAccountItemInput, OrderItemUncheckedUpdateWithoutAccountItemInput>
    create: XOR<OrderItemCreateWithoutAccountItemInput, OrderItemUncheckedCreateWithoutAccountItemInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutAccountItemInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutAccountItemInput, OrderItemUncheckedUpdateWithoutAccountItemInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutAccountItemInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutAccountItemInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    accountId?: UuidFilter<"OrderItem"> | string
    itemId?: BigIntFilter<"OrderItem"> | bigint | number
    quantity?: BigIntFilter<"OrderItem"> | bigint | number
    orderId?: StringFilter<"OrderItem"> | string
  }

  export type Account_ItemsCreateWithoutAccountsInput = {
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    Items: ItemsCreateNestedOneWithoutAccount_ItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutAccountItemInput
  }

  export type Account_ItemsUncheckedCreateWithoutAccountsInput = {
    ItemID: bigint | number
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutAccountItemInput
  }

  export type Account_ItemsCreateOrConnectWithoutAccountsInput = {
    where: Account_ItemsWhereUniqueInput
    create: XOR<Account_ItemsCreateWithoutAccountsInput, Account_ItemsUncheckedCreateWithoutAccountsInput>
  }

  export type Account_ItemsCreateManyAccountsInputEnvelope = {
    data: Account_ItemsCreateManyAccountsInput | Account_ItemsCreateManyAccountsInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberCreateWithoutUserInput = {
    Chat: ChatCreateNestedOneWithoutMembersInput
  }

  export type ChatMemberUncheckedCreateWithoutUserInput = {
    ChatID: string
  }

  export type ChatMemberCreateOrConnectWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberCreateManyUserInputEnvelope = {
    data: ChatMemberCreateManyUserInput | ChatMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    MessageID?: string
    Status?: string
    CreatedAt?: Date | string
    Chat: ChatCreateNestedOneWithoutMessagesInput
    MessageContent?: MessageContentCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    MessageID?: string
    ChatID: string
    Status?: string
    CreatedAt?: Date | string
    MessageContent?: MessageContentUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutSenderInput = {
    OrderID?: string
    CreatedAt?: Date | string
    Status?: string
    Items?: OrderItemCreateNestedManyWithoutOrderInput
    Receiver: AccountsCreateNestedOneWithoutReceivedOrdersInput
    OrderHistory?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutSenderInput = {
    OrderID?: string
    ReceiverID: string
    CreatedAt?: Date | string
    Status?: string
    Items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    OrderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutSenderInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutSenderInput, OrdersUncheckedCreateWithoutSenderInput>
  }

  export type OrdersCreateManySenderInputEnvelope = {
    data: OrdersCreateManySenderInput | OrdersCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutReceiverInput = {
    OrderID?: string
    CreatedAt?: Date | string
    Status?: string
    Items?: OrderItemCreateNestedManyWithoutOrderInput
    Sender: AccountsCreateNestedOneWithoutSentOrdersInput
    OrderHistory?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutReceiverInput = {
    OrderID?: string
    SenderID: string
    CreatedAt?: Date | string
    Status?: string
    Items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    OrderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutReceiverInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutReceiverInput, OrdersUncheckedCreateWithoutReceiverInput>
  }

  export type OrdersCreateManyReceiverInputEnvelope = {
    data: OrdersCreateManyReceiverInput | OrdersCreateManyReceiverInput[]
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

  export type ChatMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutUserInput, ChatMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMemberCreateWithoutUserInput, ChatMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutUserInput, ChatMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMemberScalarWhereInput = {
    AND?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    OR?: ChatMemberScalarWhereInput[]
    NOT?: ChatMemberScalarWhereInput | ChatMemberScalarWhereInput[]
    ChatID?: StringFilter<"ChatMember"> | string
    Username?: StringFilter<"ChatMember"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    MessageID?: StringFilter<"Message"> | string
    ChatID?: StringFilter<"Message"> | string
    SenderUsername?: StringFilter<"Message"> | string
    Status?: StringFilter<"Message"> | string
    CreatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutSenderInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutSenderInput, OrdersUncheckedUpdateWithoutSenderInput>
    create: XOR<OrdersCreateWithoutSenderInput, OrdersUncheckedCreateWithoutSenderInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutSenderInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutSenderInput, OrdersUncheckedUpdateWithoutSenderInput>
  }

  export type OrdersUpdateManyWithWhereWithoutSenderInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutSenderInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OrderID?: StringFilter<"Orders"> | string
    SenderID?: UuidFilter<"Orders"> | string
    ReceiverID?: UuidFilter<"Orders"> | string
    CreatedAt?: DateTimeFilter<"Orders"> | Date | string
    Status?: StringFilter<"Orders"> | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutReceiverInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutReceiverInput, OrdersUncheckedUpdateWithoutReceiverInput>
    create: XOR<OrdersCreateWithoutReceiverInput, OrdersUncheckedCreateWithoutReceiverInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutReceiverInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutReceiverInput, OrdersUncheckedUpdateWithoutReceiverInput>
  }

  export type OrdersUpdateManyWithWhereWithoutReceiverInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutReceiverInput>
  }

  export type Account_ItemsCreateWithoutItemsInput = {
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    Accounts: AccountsCreateNestedOneWithoutAccount_ItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutAccountItemInput
  }

  export type Account_ItemsUncheckedCreateWithoutItemsInput = {
    AccountID: string
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutAccountItemInput
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

  export type MessageCreateWithoutChatInput = {
    MessageID?: string
    Status?: string
    CreatedAt?: Date | string
    Sender: AccountsCreateNestedOneWithoutMessageInput
    MessageContent?: MessageContentCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    MessageID?: string
    SenderUsername: string
    Status?: string
    CreatedAt?: Date | string
    MessageContent?: MessageContentUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatMemberCreateWithoutChatInput = {
    User: AccountsCreateNestedOneWithoutChatMemberInput
  }

  export type ChatMemberUncheckedCreateWithoutChatInput = {
    Username: string
  }

  export type ChatMemberCreateOrConnectWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberCreateManyChatInputEnvelope = {
    data: ChatMemberCreateManyChatInput | ChatMemberCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatMemberUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    update: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
    create: XOR<ChatMemberCreateWithoutChatInput, ChatMemberUncheckedCreateWithoutChatInput>
  }

  export type ChatMemberUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatMemberWhereUniqueInput
    data: XOR<ChatMemberUpdateWithoutChatInput, ChatMemberUncheckedUpdateWithoutChatInput>
  }

  export type ChatMemberUpdateManyWithWhereWithoutChatInput = {
    where: ChatMemberScalarWhereInput
    data: XOR<ChatMemberUpdateManyMutationInput, ChatMemberUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatCreateWithoutMembersInput = {
    ChatID?: string
    Name?: string
    Type?: string
    lastMessageAt?: Date | string
    Messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMembersInput = {
    ChatID?: string
    Name?: string
    Type?: string
    lastMessageAt?: Date | string
    Messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMembersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
  }

  export type AccountsCreateWithoutChatMemberInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsCreateNestedManyWithoutAccountsInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    SentOrders?: OrdersCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersCreateNestedManyWithoutReceiverInput
  }

  export type AccountsUncheckedCreateWithoutChatMemberInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedCreateNestedManyWithoutAccountsInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    SentOrders?: OrdersUncheckedCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AccountsCreateOrConnectWithoutChatMemberInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutChatMemberInput, AccountsUncheckedCreateWithoutChatMemberInput>
  }

  export type ChatUpsertWithoutMembersInput = {
    update: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatCreateWithoutMembersInput, ChatUncheckedCreateWithoutMembersInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMembersInput, ChatUncheckedUpdateWithoutMembersInput>
  }

  export type ChatUpdateWithoutMembersInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMembersInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type AccountsUpsertWithoutChatMemberInput = {
    update: XOR<AccountsUpdateWithoutChatMemberInput, AccountsUncheckedUpdateWithoutChatMemberInput>
    create: XOR<AccountsCreateWithoutChatMemberInput, AccountsUncheckedCreateWithoutChatMemberInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutChatMemberInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutChatMemberInput, AccountsUncheckedUpdateWithoutChatMemberInput>
  }

  export type AccountsUpdateWithoutChatMemberInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUpdateManyWithoutAccountsNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    SentOrders?: OrdersUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUpdateManyWithoutReceiverNestedInput
  }

  export type AccountsUncheckedUpdateWithoutChatMemberInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedUpdateManyWithoutAccountsNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    SentOrders?: OrdersUncheckedUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ChatCreateWithoutMessagesInput = {
    ChatID?: string
    Name?: string
    Type?: string
    lastMessageAt?: Date | string
    Members?: ChatMemberCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    ChatID?: string
    Name?: string
    Type?: string
    lastMessageAt?: Date | string
    Members?: ChatMemberUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type AccountsCreateWithoutMessageInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsCreateNestedManyWithoutAccountsInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    SentOrders?: OrdersCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersCreateNestedManyWithoutReceiverInput
  }

  export type AccountsUncheckedCreateWithoutMessageInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedCreateNestedManyWithoutAccountsInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    SentOrders?: OrdersUncheckedCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AccountsCreateOrConnectWithoutMessageInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutMessageInput, AccountsUncheckedCreateWithoutMessageInput>
  }

  export type MessageContentCreateWithoutMessageInput = {
    Index: number
    Text?: string | null
    Filename?: string | null
    MimeType?: string | null
    Data?: Uint8Array | null
  }

  export type MessageContentUncheckedCreateWithoutMessageInput = {
    MessageContentID?: number
    Index: number
    Text?: string | null
    Filename?: string | null
    MimeType?: string | null
    Data?: Uint8Array | null
  }

  export type MessageContentCreateOrConnectWithoutMessageInput = {
    where: MessageContentWhereUniqueInput
    create: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput>
  }

  export type MessageContentCreateManyMessageInputEnvelope = {
    data: MessageContentCreateManyMessageInput | MessageContentCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: ChatMemberUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: ChatMemberUncheckedUpdateManyWithoutChatNestedInput
  }

  export type AccountsUpsertWithoutMessageInput = {
    update: XOR<AccountsUpdateWithoutMessageInput, AccountsUncheckedUpdateWithoutMessageInput>
    create: XOR<AccountsCreateWithoutMessageInput, AccountsUncheckedCreateWithoutMessageInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutMessageInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutMessageInput, AccountsUncheckedUpdateWithoutMessageInput>
  }

  export type AccountsUpdateWithoutMessageInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUpdateManyWithoutAccountsNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    SentOrders?: OrdersUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUpdateManyWithoutReceiverNestedInput
  }

  export type AccountsUncheckedUpdateWithoutMessageInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedUpdateManyWithoutAccountsNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    SentOrders?: OrdersUncheckedUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type MessageContentUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageContentWhereUniqueInput
    update: XOR<MessageContentUpdateWithoutMessageInput, MessageContentUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageContentCreateWithoutMessageInput, MessageContentUncheckedCreateWithoutMessageInput>
  }

  export type MessageContentUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageContentWhereUniqueInput
    data: XOR<MessageContentUpdateWithoutMessageInput, MessageContentUncheckedUpdateWithoutMessageInput>
  }

  export type MessageContentUpdateManyWithWhereWithoutMessageInput = {
    where: MessageContentScalarWhereInput
    data: XOR<MessageContentUpdateManyMutationInput, MessageContentUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageContentScalarWhereInput = {
    AND?: MessageContentScalarWhereInput | MessageContentScalarWhereInput[]
    OR?: MessageContentScalarWhereInput[]
    NOT?: MessageContentScalarWhereInput | MessageContentScalarWhereInput[]
    MessageContentID?: IntFilter<"MessageContent"> | number
    MessageID?: StringFilter<"MessageContent"> | string
    Index?: IntFilter<"MessageContent"> | number
    Text?: StringNullableFilter<"MessageContent"> | string | null
    Filename?: StringNullableFilter<"MessageContent"> | string | null
    MimeType?: StringNullableFilter<"MessageContent"> | string | null
    Data?: BytesNullableFilter<"MessageContent"> | Uint8Array | null
  }

  export type MessageCreateWithoutMessageContentInput = {
    MessageID?: string
    Status?: string
    CreatedAt?: Date | string
    Chat: ChatCreateNestedOneWithoutMessagesInput
    Sender: AccountsCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutMessageContentInput = {
    MessageID?: string
    ChatID: string
    SenderUsername: string
    Status?: string
    CreatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutMessageContentInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutMessageContentInput, MessageUncheckedCreateWithoutMessageContentInput>
  }

  export type MessageUpsertWithoutMessageContentInput = {
    update: XOR<MessageUpdateWithoutMessageContentInput, MessageUncheckedUpdateWithoutMessageContentInput>
    create: XOR<MessageCreateWithoutMessageContentInput, MessageUncheckedCreateWithoutMessageContentInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutMessageContentInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutMessageContentInput, MessageUncheckedUpdateWithoutMessageContentInput>
  }

  export type MessageUpdateWithoutMessageContentInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    Sender?: AccountsUpdateOneRequiredWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutMessageContentInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    ChatID?: StringFieldUpdateOperationsInput | string
    SenderUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateWithoutOrderInput = {
    quantity: bigint | number
    accountItem: Account_ItemsCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    accountId: string
    itemId: bigint | number
    quantity: bigint | number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type AccountsCreateWithoutSentOrdersInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsCreateNestedManyWithoutAccountsInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersCreateNestedManyWithoutReceiverInput
  }

  export type AccountsUncheckedCreateWithoutSentOrdersInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedCreateNestedManyWithoutAccountsInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    ReceivedOrders?: OrdersUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type AccountsCreateOrConnectWithoutSentOrdersInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutSentOrdersInput, AccountsUncheckedCreateWithoutSentOrdersInput>
  }

  export type AccountsCreateWithoutReceivedOrdersInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsCreateNestedManyWithoutAccountsInput
    ChatMember?: ChatMemberCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutSenderInput
    SentOrders?: OrdersCreateNestedManyWithoutSenderInput
  }

  export type AccountsUncheckedCreateWithoutReceivedOrdersInput = {
    AccountID: string
    Email: string
    FirstName: string
    LastName: string
    Password: Uint8Array
    Type: string
    Username?: string | null
    FacebookID?: string | null
    GoogleID?: string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsCreateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedCreateNestedManyWithoutAccountsInput
    ChatMember?: ChatMemberUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutSenderInput
    SentOrders?: OrdersUncheckedCreateNestedManyWithoutSenderInput
  }

  export type AccountsCreateOrConnectWithoutReceivedOrdersInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutReceivedOrdersInput, AccountsUncheckedCreateWithoutReceivedOrdersInput>
  }

  export type OrderHistoryCreateWithoutOrderInput = {
    OrderHistoryID?: string
    Record: JsonNullValueInput | InputJsonValue
  }

  export type OrderHistoryUncheckedCreateWithoutOrderInput = {
    OrderHistoryID?: string
    Record: JsonNullValueInput | InputJsonValue
  }

  export type OrderHistoryCreateOrConnectWithoutOrderInput = {
    where: OrderHistoryWhereUniqueInput
    create: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput>
  }

  export type OrderHistoryCreateManyOrderInputEnvelope = {
    data: OrderHistoryCreateManyOrderInput | OrderHistoryCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type AccountsUpsertWithoutSentOrdersInput = {
    update: XOR<AccountsUpdateWithoutSentOrdersInput, AccountsUncheckedUpdateWithoutSentOrdersInput>
    create: XOR<AccountsCreateWithoutSentOrdersInput, AccountsUncheckedCreateWithoutSentOrdersInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutSentOrdersInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutSentOrdersInput, AccountsUncheckedUpdateWithoutSentOrdersInput>
  }

  export type AccountsUpdateWithoutSentOrdersInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUpdateManyWithoutAccountsNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUpdateManyWithoutReceiverNestedInput
  }

  export type AccountsUncheckedUpdateWithoutSentOrdersInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedUpdateManyWithoutAccountsNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    ReceivedOrders?: OrdersUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type AccountsUpsertWithoutReceivedOrdersInput = {
    update: XOR<AccountsUpdateWithoutReceivedOrdersInput, AccountsUncheckedUpdateWithoutReceivedOrdersInput>
    create: XOR<AccountsCreateWithoutReceivedOrdersInput, AccountsUncheckedCreateWithoutReceivedOrdersInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutReceivedOrdersInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutReceivedOrdersInput, AccountsUncheckedUpdateWithoutReceivedOrdersInput>
  }

  export type AccountsUpdateWithoutReceivedOrdersInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUpdateManyWithoutAccountsNestedInput
    ChatMember?: ChatMemberUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutSenderNestedInput
    SentOrders?: OrdersUpdateManyWithoutSenderNestedInput
  }

  export type AccountsUncheckedUpdateWithoutReceivedOrdersInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Password?: BytesFieldUpdateOperationsInput | Uint8Array
    Type?: StringFieldUpdateOperationsInput | string
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    FacebookID?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleID?: NullableStringFieldUpdateOperationsInput | string | null
    WorkArea?: NullableJsonNullValueInput | InputJsonValue
    WorkAreaIDs?: AccountsUpdateWorkAreaIDsInput | number[]
    Account_Items?: Account_ItemsUncheckedUpdateManyWithoutAccountsNestedInput
    ChatMember?: ChatMemberUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    SentOrders?: OrdersUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type OrderHistoryUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderHistoryWhereUniqueInput
    update: XOR<OrderHistoryUpdateWithoutOrderInput, OrderHistoryUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput>
  }

  export type OrderHistoryUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderHistoryWhereUniqueInput
    data: XOR<OrderHistoryUpdateWithoutOrderInput, OrderHistoryUncheckedUpdateWithoutOrderInput>
  }

  export type OrderHistoryUpdateManyWithWhereWithoutOrderInput = {
    where: OrderHistoryScalarWhereInput
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderHistoryScalarWhereInput = {
    AND?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
    OR?: OrderHistoryScalarWhereInput[]
    NOT?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
    OrderHistoryID?: StringFilter<"OrderHistory"> | string
    OrderID?: StringFilter<"OrderHistory"> | string
    Record?: JsonFilter<"OrderHistory">
  }

  export type Account_ItemsCreateWithoutOrderItemsInput = {
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
    Accounts: AccountsCreateNestedOneWithoutAccount_ItemsInput
    Items: ItemsCreateNestedOneWithoutAccount_ItemsInput
  }

  export type Account_ItemsUncheckedCreateWithoutOrderItemsInput = {
    AccountID: string
    ItemID: bigint | number
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
  }

  export type Account_ItemsCreateOrConnectWithoutOrderItemsInput = {
    where: Account_ItemsWhereUniqueInput
    create: XOR<Account_ItemsCreateWithoutOrderItemsInput, Account_ItemsUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrdersCreateWithoutItemsInput = {
    OrderID?: string
    CreatedAt?: Date | string
    Status?: string
    Sender: AccountsCreateNestedOneWithoutSentOrdersInput
    Receiver: AccountsCreateNestedOneWithoutReceivedOrdersInput
    OrderHistory?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutItemsInput = {
    OrderID?: string
    SenderID: string
    ReceiverID: string
    CreatedAt?: Date | string
    Status?: string
    OrderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutItemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
  }

  export type Account_ItemsUpsertWithoutOrderItemsInput = {
    update: XOR<Account_ItemsUpdateWithoutOrderItemsInput, Account_ItemsUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<Account_ItemsCreateWithoutOrderItemsInput, Account_ItemsUncheckedCreateWithoutOrderItemsInput>
    where?: Account_ItemsWhereInput
  }

  export type Account_ItemsUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Account_ItemsWhereInput
    data: XOR<Account_ItemsUpdateWithoutOrderItemsInput, Account_ItemsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type Account_ItemsUpdateWithoutOrderItemsInput = {
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    Accounts?: AccountsUpdateOneRequiredWithoutAccount_ItemsNestedInput
    Items?: ItemsUpdateOneRequiredWithoutAccount_ItemsNestedInput
  }

  export type Account_ItemsUncheckedUpdateWithoutOrderItemsInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUpsertWithoutItemsInput = {
    update: XOR<OrdersUpdateWithoutItemsInput, OrdersUncheckedUpdateWithoutItemsInput>
    create: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutItemsInput, OrdersUncheckedUpdateWithoutItemsInput>
  }

  export type OrdersUpdateWithoutItemsInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Sender?: AccountsUpdateOneRequiredWithoutSentOrdersNestedInput
    Receiver?: AccountsUpdateOneRequiredWithoutReceivedOrdersNestedInput
    OrderHistory?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutItemsInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    SenderID?: StringFieldUpdateOperationsInput | string
    ReceiverID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    OrderHistory?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateWithoutOrderHistoryInput = {
    OrderID?: string
    CreatedAt?: Date | string
    Status?: string
    Items?: OrderItemCreateNestedManyWithoutOrderInput
    Sender: AccountsCreateNestedOneWithoutSentOrdersInput
    Receiver: AccountsCreateNestedOneWithoutReceivedOrdersInput
  }

  export type OrdersUncheckedCreateWithoutOrderHistoryInput = {
    OrderID?: string
    SenderID: string
    ReceiverID: string
    CreatedAt?: Date | string
    Status?: string
    Items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrderHistoryInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderHistoryInput, OrdersUncheckedCreateWithoutOrderHistoryInput>
  }

  export type OrdersUpsertWithoutOrderHistoryInput = {
    update: XOR<OrdersUpdateWithoutOrderHistoryInput, OrdersUncheckedUpdateWithoutOrderHistoryInput>
    create: XOR<OrdersCreateWithoutOrderHistoryInput, OrdersUncheckedCreateWithoutOrderHistoryInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderHistoryInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderHistoryInput, OrdersUncheckedUpdateWithoutOrderHistoryInput>
  }

  export type OrdersUpdateWithoutOrderHistoryInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Items?: OrderItemUpdateManyWithoutOrderNestedInput
    Sender?: AccountsUpdateOneRequiredWithoutSentOrdersNestedInput
    Receiver?: AccountsUpdateOneRequiredWithoutReceivedOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrderHistoryInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    SenderID?: StringFieldUpdateOperationsInput | string
    ReceiverID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderItemCreateManyAccountItemInput = {
    id?: number
    quantity: bigint | number
    orderId: string
  }

  export type OrderItemUpdateWithoutAccountItemInput = {
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: OrdersUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutAccountItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutAccountItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type Account_ItemsCreateManyAccountsInput = {
    ItemID: bigint | number
    Price: bigint | number
    PurchasePrice: bigint | number
    Qty: bigint | number
    ImageLink: string
  }

  export type ChatMemberCreateManyUserInput = {
    ChatID: string
  }

  export type MessageCreateManySenderInput = {
    MessageID?: string
    ChatID: string
    Status?: string
    CreatedAt?: Date | string
  }

  export type OrdersCreateManySenderInput = {
    OrderID?: string
    ReceiverID: string
    CreatedAt?: Date | string
    Status?: string
  }

  export type OrdersCreateManyReceiverInput = {
    OrderID?: string
    SenderID: string
    CreatedAt?: Date | string
    Status?: string
  }

  export type Account_ItemsUpdateWithoutAccountsInput = {
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    Items?: ItemsUpdateOneRequiredWithoutAccount_ItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutAccountItemNestedInput
  }

  export type Account_ItemsUncheckedUpdateWithoutAccountsInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutAccountItemNestedInput
  }

  export type Account_ItemsUncheckedUpdateManyWithoutAccountsInput = {
    ItemID?: BigIntFieldUpdateOperationsInput | bigint | number
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberUpdateWithoutUserInput = {
    Chat?: ChatUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutUserInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutUserInput = {
    ChatID?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutSenderInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    MessageContent?: MessageContentUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    ChatID?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MessageContent?: MessageContentUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    ChatID?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutSenderInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Items?: OrderItemUpdateManyWithoutOrderNestedInput
    Receiver?: AccountsUpdateOneRequiredWithoutReceivedOrdersNestedInput
    OrderHistory?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutSenderInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    ReceiverID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    OrderHistory?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutSenderInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    ReceiverID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUpdateWithoutReceiverInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Items?: OrderItemUpdateManyWithoutOrderNestedInput
    Sender?: AccountsUpdateOneRequiredWithoutSentOrdersNestedInput
    OrderHistory?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutReceiverInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    SenderID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
    Items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    OrderHistory?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutReceiverInput = {
    OrderID?: StringFieldUpdateOperationsInput | string
    SenderID?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: StringFieldUpdateOperationsInput | string
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
    orderItems?: OrderItemUpdateManyWithoutAccountItemNestedInput
  }

  export type Account_ItemsUncheckedUpdateWithoutItemsInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutAccountItemNestedInput
  }

  export type Account_ItemsUncheckedUpdateManyWithoutItemsInput = {
    AccountID?: StringFieldUpdateOperationsInput | string
    Price?: BigIntFieldUpdateOperationsInput | bigint | number
    PurchasePrice?: BigIntFieldUpdateOperationsInput | bigint | number
    Qty?: BigIntFieldUpdateOperationsInput | bigint | number
    ImageLink?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyChatInput = {
    MessageID?: string
    SenderUsername: string
    Status?: string
    CreatedAt?: Date | string
  }

  export type ChatMemberCreateManyChatInput = {
    Username: string
  }

  export type MessageUpdateWithoutChatInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sender?: AccountsUpdateOneRequiredWithoutMessageNestedInput
    MessageContent?: MessageContentUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    SenderUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MessageContent?: MessageContentUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    MessageID?: StringFieldUpdateOperationsInput | string
    SenderUsername?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMemberUpdateWithoutChatInput = {
    User?: AccountsUpdateOneRequiredWithoutChatMemberNestedInput
  }

  export type ChatMemberUncheckedUpdateWithoutChatInput = {
    Username?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMemberUncheckedUpdateManyWithoutChatInput = {
    Username?: StringFieldUpdateOperationsInput | string
  }

  export type MessageContentCreateManyMessageInput = {
    MessageContentID?: number
    Index: number
    Text?: string | null
    Filename?: string | null
    MimeType?: string | null
    Data?: Uint8Array | null
  }

  export type MessageContentUpdateWithoutMessageInput = {
    Index?: IntFieldUpdateOperationsInput | number
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Filename?: NullableStringFieldUpdateOperationsInput | string | null
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type MessageContentUncheckedUpdateWithoutMessageInput = {
    MessageContentID?: IntFieldUpdateOperationsInput | number
    Index?: IntFieldUpdateOperationsInput | number
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Filename?: NullableStringFieldUpdateOperationsInput | string | null
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type MessageContentUncheckedUpdateManyWithoutMessageInput = {
    MessageContentID?: IntFieldUpdateOperationsInput | number
    Index?: IntFieldUpdateOperationsInput | number
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Filename?: NullableStringFieldUpdateOperationsInput | string | null
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    accountId: string
    itemId: bigint | number
    quantity: bigint | number
  }

  export type OrderHistoryCreateManyOrderInput = {
    OrderHistoryID?: string
    Record: JsonNullValueInput | InputJsonValue
  }

  export type OrderItemUpdateWithoutOrderInput = {
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    accountItem?: Account_ItemsUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    itemId?: BigIntFieldUpdateOperationsInput | bigint | number
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderHistoryUpdateWithoutOrderInput = {
    OrderHistoryID?: StringFieldUpdateOperationsInput | string
    Record?: JsonNullValueInput | InputJsonValue
  }

  export type OrderHistoryUncheckedUpdateWithoutOrderInput = {
    OrderHistoryID?: StringFieldUpdateOperationsInput | string
    Record?: JsonNullValueInput | InputJsonValue
  }

  export type OrderHistoryUncheckedUpdateManyWithoutOrderInput = {
    OrderHistoryID?: StringFieldUpdateOperationsInput | string
    Record?: JsonNullValueInput | InputJsonValue
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