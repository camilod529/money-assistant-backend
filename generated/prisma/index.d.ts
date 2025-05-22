
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
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model ExchangeRate
 * 
 */
export type ExchangeRate = $Result.DefaultSelection<Prisma.$ExchangeRatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeRate`: Exposes CRUD operations for the **ExchangeRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeRates
    * const exchangeRates = await prisma.exchangeRate.findMany()
    * ```
    */
  get exchangeRate(): Prisma.ExchangeRateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Book: 'Book',
    Currency: 'Currency',
    Account: 'Account',
    Category: 'Category',
    Transaction: 'Transaction',
    Member: 'Member',
    Budget: 'Budget',
    Setting: 'Setting',
    Attachment: 'Attachment',
    ExchangeRate: 'ExchangeRate'
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
      modelProps: "user" | "book" | "currency" | "account" | "category" | "transaction" | "member" | "budget" | "setting" | "attachment" | "exchangeRate"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurrencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      ExchangeRate: {
        payload: Prisma.$ExchangeRatePayload<ExtArgs>
        fields: Prisma.ExchangeRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          findFirst: {
            args: Prisma.ExchangeRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          findMany: {
            args: Prisma.ExchangeRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          create: {
            args: Prisma.ExchangeRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          createMany: {
            args: Prisma.ExchangeRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          delete: {
            args: Prisma.ExchangeRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          update: {
            args: Prisma.ExchangeRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          deleteMany: {
            args: Prisma.ExchangeRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>[]
          }
          upsert: {
            args: Prisma.ExchangeRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRatePayload>
          }
          aggregate: {
            args: Prisma.ExchangeRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeRate>
          }
          groupBy: {
            args: Prisma.ExchangeRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeRateCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRateCountAggregateOutputType> | number
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
    user?: UserOmit
    book?: BookOmit
    currency?: CurrencyOmit
    account?: AccountOmit
    category?: CategoryOmit
    transaction?: TransactionOmit
    member?: MemberOmit
    budget?: BudgetOmit
    setting?: SettingOmit
    attachment?: AttachmentOmit
    exchangeRate?: ExchangeRateOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    books: number
    settings: number
    Member: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | UserCountOutputTypeCountBooksArgs
    settings?: boolean | UserCountOutputTypeCountSettingsArgs
    Member?: boolean | UserCountOutputTypeCountMemberArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    accounts: number
    categories: number
    members: number
    budgets: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | BookCountOutputTypeCountAccountsArgs
    categories?: boolean | BookCountOutputTypeCountCategoriesArgs
    members?: boolean | BookCountOutputTypeCountMembersArgs
    budgets?: boolean | BookCountOutputTypeCountBudgetsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }


  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    accounts: number
    settings: number
    exchangeRates: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | CurrencyCountOutputTypeCountAccountsArgs
    settings?: boolean | CurrencyCountOutputTypeCountSettingsArgs
    exchangeRates?: boolean | CurrencyCountOutputTypeCountExchangeRatesArgs
  }

  // Custom InputTypes
  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountExchangeRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeRateWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    transactions: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    transactions: number
    budgets: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
    budgets?: boolean | CategoryCountOutputTypeCountBudgetsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    attachments: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | TransactionCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    role: $Enums.Role[]
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
    books?: boolean | User$booksArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    Member?: boolean | User$MemberArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | User$booksArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    Member?: boolean | User$MemberArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      settings: Prisma.$SettingPayload<ExtArgs>[]
      Member: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
      role: $Enums.Role[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends User$booksArgs<ExtArgs> = {}>(args?: Subset<T, User$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Member<T extends User$MemberArgs<ExtArgs> = {}>(args?: Subset<T, User$MemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role[]'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.books
   */
  export type User$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    cursor?: SettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * User.Member
   */
  export type User$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type BookMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    createdAt: Date
    _count: BookCountAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    accounts?: boolean | Book$accountsArgs<ExtArgs>
    categories?: boolean | Book$categoriesArgs<ExtArgs>
    members?: boolean | Book$membersArgs<ExtArgs>
    budgets?: boolean | Book$budgetsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    accounts?: boolean | Book$accountsArgs<ExtArgs>
    categories?: boolean | Book$categoriesArgs<ExtArgs>
    members?: boolean | Book$membersArgs<ExtArgs>
    budgets?: boolean | Book$budgetsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      members: Prisma.$MemberPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accounts<T extends Book$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Book$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Book$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Book$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Book$membersArgs<ExtArgs> = {}>(args?: Subset<T, Book$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends Book$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, Book$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly userId: FieldRef<"Book", 'String'>
    readonly name: FieldRef<"Book", 'String'>
    readonly description: FieldRef<"Book", 'String'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.accounts
   */
  export type Book$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Book.categories
   */
  export type Book$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Book.members
   */
  export type Book$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Book.budgets
   */
  export type Book$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    exchangeRate: Decimal | null
  }

  export type CurrencySumAggregateOutputType = {
    exchangeRate: Decimal | null
  }

  export type CurrencyMinAggregateOutputType = {
    code: string | null
    name: string | null
    symbol: string | null
    exchangeRate: Decimal | null
  }

  export type CurrencyMaxAggregateOutputType = {
    code: string | null
    name: string | null
    symbol: string | null
    exchangeRate: Decimal | null
  }

  export type CurrencyCountAggregateOutputType = {
    code: number
    name: number
    symbol: number
    exchangeRate: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    exchangeRate?: true
  }

  export type CurrencySumAggregateInputType = {
    exchangeRate?: true
  }

  export type CurrencyMinAggregateInputType = {
    code?: true
    name?: true
    symbol?: true
    exchangeRate?: true
  }

  export type CurrencyMaxAggregateInputType = {
    code?: true
    name?: true
    symbol?: true
    exchangeRate?: true
  }

  export type CurrencyCountAggregateInputType = {
    code?: true
    name?: true
    symbol?: true
    exchangeRate?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    symbol?: boolean
    exchangeRate?: boolean
    accounts?: boolean | Currency$accountsArgs<ExtArgs>
    settings?: boolean | Currency$settingsArgs<ExtArgs>
    exchangeRates?: boolean | Currency$exchangeRatesArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    symbol?: boolean
    exchangeRate?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    symbol?: boolean
    exchangeRate?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    code?: boolean
    name?: boolean
    symbol?: boolean
    exchangeRate?: boolean
  }

  export type CurrencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "symbol" | "exchangeRate", ExtArgs["result"]["currency"]>
  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Currency$accountsArgs<ExtArgs>
    settings?: boolean | Currency$settingsArgs<ExtArgs>
    exchangeRates?: boolean | Currency$exchangeRatesArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CurrencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      settings: Prisma.$SettingPayload<ExtArgs>[]
      exchangeRates: Prisma.$ExchangeRatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      symbol: string
      exchangeRate: Prisma.Decimal
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }

  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyFindUniqueArgs>(args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyFindFirstArgs>(args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const currencyWithCodeOnly = await prisma.currency.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends CurrencyFindManyArgs>(args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
     */
    create<T extends CurrencyCreateArgs>(args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyCreateManyArgs>(args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {CurrencyCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `code`
     * const currencyWithCodeOnly = await prisma.currency.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
     */
    delete<T extends CurrencyDeleteArgs>(args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyUpdateArgs>(args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyDeleteManyArgs>(args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyUpdateManyArgs>(args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies and returns the data updated in the database.
     * @param {CurrencyUpdateManyAndReturnArgs} args - Arguments to update many Currencies.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Currencies and only return the `code`
     * const currencyWithCodeOnly = await prisma.currency.updateManyAndReturn({
     *   select: { code: true },
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
    updateManyAndReturn<T extends CurrencyUpdateManyAndReturnArgs>(args: SelectSubset<T, CurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyUpsertArgs>(args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
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
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends Currency$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Currency$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends Currency$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Currency$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exchangeRates<T extends Currency$exchangeRatesArgs<ExtArgs> = {}>(args?: Subset<T, Currency$exchangeRatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Currency model
   */
  interface CurrencyFieldRefs {
    readonly code: FieldRef<"Currency", 'String'>
    readonly name: FieldRef<"Currency", 'String'>
    readonly symbol: FieldRef<"Currency", 'String'>
    readonly exchangeRate: FieldRef<"Currency", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }

  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency createManyAndReturn
   */
  export type CurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency updateManyAndReturn
   */
  export type CurrencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }

  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to delete.
     */
    limit?: number
  }

  /**
   * Currency.accounts
   */
  export type Currency$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Currency.settings
   */
  export type Currency$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    cursor?: SettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Currency.exchangeRates
   */
  export type Currency$exchangeRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    where?: ExchangeRateWhereInput
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    cursor?: ExchangeRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    name: string | null
    type: string | null
    currencyCode: string | null
    createdAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    name: string | null
    type: string | null
    currencyCode: string | null
    createdAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    bookId: number
    name: number
    type: number
    currencyCode: number
    createdAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    type?: true
    currencyCode?: true
    createdAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    type?: true
    currencyCode?: true
    createdAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    type?: true
    currencyCode?: true
    createdAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
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
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    bookId: string
    name: string
    type: string
    currencyCode: string
    createdAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    type?: boolean
    currencyCode?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    type?: boolean
    currencyCode?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    type?: boolean
    currencyCode?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    bookId?: boolean
    name?: boolean
    type?: boolean
    currencyCode?: boolean
    createdAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "name" | "type" | "currencyCode" | "createdAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      currency: Prisma.$CurrencyPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      name: string
      type: string
      currencyCode: string
      createdAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Account$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Account$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly bookId: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly currencyCode: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
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
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
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
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
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
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.transactions
   */
  export type Account$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    name: string | null
    type: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    name: string | null
    type: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    bookId: number
    name: number
    type: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    type?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    type?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    bookId?: true
    name?: true
    type?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    bookId: string
    name: string
    type: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    type?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    budgets?: boolean | Category$budgetsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    type?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    name?: boolean
    type?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    bookId?: boolean
    name?: boolean
    type?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "name" | "type", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    budgets?: boolean | Category$budgetsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      budgets: Prisma.$BudgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      name: string
      type: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    budgets<T extends Category$budgetsArgs<ExtArgs> = {}>(args?: Subset<T, Category$budgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly bookId: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category.budgets
   */
  export type Category$budgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    cursor?: BudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    categoryId: string | null
    amount: Decimal | null
    transactionAt: Date | null
    description: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    categoryId: string | null
    amount: Decimal | null
    transactionAt: Date | null
    description: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    accountId: number
    categoryId: number
    amount: number
    transactionAt: number
    description: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    accountId?: true
    categoryId?: true
    amount?: true
    transactionAt?: true
    description?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    accountId?: true
    categoryId?: true
    amount?: true
    transactionAt?: true
    description?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    accountId?: true
    categoryId?: true
    amount?: true
    transactionAt?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    accountId: string
    categoryId: string
    amount: Decimal
    transactionAt: Date
    description: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    categoryId?: boolean
    amount?: boolean
    transactionAt?: boolean
    description?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    attachments?: boolean | Transaction$attachmentsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    categoryId?: boolean
    amount?: boolean
    transactionAt?: boolean
    description?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    categoryId?: boolean
    amount?: boolean
    transactionAt?: boolean
    description?: boolean
    createdAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    accountId?: boolean
    categoryId?: boolean
    amount?: boolean
    transactionAt?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "categoryId" | "amount" | "transactionAt" | "description" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    attachments?: boolean | Transaction$attachmentsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      categoryId: string
      amount: Prisma.Decimal
      transactionAt: Date
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachments<T extends Transaction$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly accountId: FieldRef<"Transaction", 'String'>
    readonly categoryId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly transactionAt: FieldRef<"Transaction", 'DateTime'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.attachments
   */
  export type Transaction$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    userId: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    userId: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    bookId: number
    userId: number
    name: number
    role: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    name?: true
    role?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    name?: true
    role?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    bookId?: true
    userId?: true
    name?: true
    role?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    bookId: string
    userId: string
    name: string
    role: $Enums.Role
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    name?: boolean
    role?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    name?: boolean
    role?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    userId?: boolean
    name?: boolean
    role?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    bookId?: boolean
    userId?: boolean
    name?: boolean
    role?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "userId" | "name" | "role", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      userId: string
      name: string
      role: $Enums.Role
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly bookId: FieldRef<"Member", 'String'>
    readonly userId: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly role: FieldRef<"Member", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type BudgetSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    categoryId: string | null
    amount: Decimal | null
    period: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    categoryId: string | null
    amount: Decimal | null
    period: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    bookId: number
    categoryId: number
    amount: number
    period: number
    startDate: number
    endDate: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    amount?: true
  }

  export type BudgetSumAggregateInputType = {
    amount?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    bookId?: true
    categoryId?: true
    amount?: true
    period?: true
    startDate?: true
    endDate?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    bookId?: true
    categoryId?: true
    amount?: true
    period?: true
    startDate?: true
    endDate?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    bookId?: true
    categoryId?: true
    amount?: true
    period?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    bookId: string
    categoryId: string
    amount: Decimal
    period: string
    startDate: Date
    endDate: Date | null
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    categoryId?: boolean
    amount?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    categoryId?: boolean
    amount?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    categoryId?: boolean
    amount?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    bookId?: boolean
    categoryId?: boolean
    amount?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "categoryId" | "amount" | "period" | "startDate" | "endDate", ExtArgs["result"]["budget"]>
  export type BudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type BudgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      categoryId: string
      amount: Prisma.Decimal
      period: string
      startDate: Date
      endDate: Date | null
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {BudgetUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.updateManyAndReturn({
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
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
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
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly bookId: FieldRef<"Budget", 'String'>
    readonly categoryId: FieldRef<"Budget", 'String'>
    readonly amount: FieldRef<"Budget", 'Decimal'>
    readonly period: FieldRef<"Budget", 'String'>
    readonly startDate: FieldRef<"Budget", 'DateTime'>
    readonly endDate: FieldRef<"Budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget updateManyAndReturn
   */
  export type BudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BudgetInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    theme: string | null
    currencyCode: string | null
    locale: string | null
    notificationEnabled: boolean | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    theme: string | null
    currencyCode: string | null
    locale: string | null
    notificationEnabled: boolean | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    userId: number
    theme: number
    currencyCode: number
    locale: number
    notificationEnabled: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    currencyCode?: true
    locale?: true
    notificationEnabled?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    currencyCode?: true
    locale?: true
    notificationEnabled?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    currencyCode?: true
    locale?: true
    notificationEnabled?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    userId: string
    theme: string
    currencyCode: string | null
    locale: string | null
    notificationEnabled: boolean
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    currencyCode?: boolean
    locale?: boolean
    notificationEnabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Setting$currencyArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    currencyCode?: boolean
    locale?: boolean
    notificationEnabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Setting$currencyArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    currencyCode?: boolean
    locale?: boolean
    notificationEnabled?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Setting$currencyArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    userId?: boolean
    theme?: boolean
    currencyCode?: boolean
    locale?: boolean
    notificationEnabled?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "theme" | "currencyCode" | "locale" | "notificationEnabled", ExtArgs["result"]["setting"]>
  export type SettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Setting$currencyArgs<ExtArgs>
  }
  export type SettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Setting$currencyArgs<ExtArgs>
  }
  export type SettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    currency?: boolean | Setting$currencyArgs<ExtArgs>
  }

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      currency: Prisma.$CurrencyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      theme: string
      currencyCode: string | null
      locale: string | null
      notificationEnabled: boolean
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currency<T extends Setting$currencyArgs<ExtArgs> = {}>(args?: Subset<T, Setting$currencyArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly userId: FieldRef<"Setting", 'String'>
    readonly theme: FieldRef<"Setting", 'String'>
    readonly currencyCode: FieldRef<"Setting", 'String'>
    readonly locale: FieldRef<"Setting", 'String'>
    readonly notificationEnabled: FieldRef<"Setting", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting.currency
   */
  export type Setting$currencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    where?: CurrencyWhereInput
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    filePath: string | null
    createdAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    filePath: string | null
    createdAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    transactionId: number
    filePath: number
    createdAt: number
    _all: number
  }


  export type AttachmentMinAggregateInputType = {
    id?: true
    transactionId?: true
    filePath?: true
    createdAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    transactionId?: true
    filePath?: true
    createdAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    transactionId?: true
    filePath?: true
    createdAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    transactionId: string
    filePath: string
    createdAt: Date
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    filePath?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    filePath?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    filePath?: boolean
    createdAt?: boolean
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    transactionId?: boolean
    filePath?: boolean
    createdAt?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "filePath" | "createdAt", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      filePath: string
      createdAt: Date
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
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
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly transactionId: FieldRef<"Attachment", 'String'>
    readonly filePath: FieldRef<"Attachment", 'String'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model ExchangeRate
   */

  export type AggregateExchangeRate = {
    _count: ExchangeRateCountAggregateOutputType | null
    _avg: ExchangeRateAvgAggregateOutputType | null
    _sum: ExchangeRateSumAggregateOutputType | null
    _min: ExchangeRateMinAggregateOutputType | null
    _max: ExchangeRateMaxAggregateOutputType | null
  }

  export type ExchangeRateAvgAggregateOutputType = {
    rateToBase: Decimal | null
  }

  export type ExchangeRateSumAggregateOutputType = {
    rateToBase: Decimal | null
  }

  export type ExchangeRateMinAggregateOutputType = {
    id: string | null
    currencyCode: string | null
    rateToBase: Decimal | null
    validFrom: Date | null
    validTo: Date | null
    source: string | null
    createdAt: Date | null
  }

  export type ExchangeRateMaxAggregateOutputType = {
    id: string | null
    currencyCode: string | null
    rateToBase: Decimal | null
    validFrom: Date | null
    validTo: Date | null
    source: string | null
    createdAt: Date | null
  }

  export type ExchangeRateCountAggregateOutputType = {
    id: number
    currencyCode: number
    rateToBase: number
    validFrom: number
    validTo: number
    source: number
    createdAt: number
    _all: number
  }


  export type ExchangeRateAvgAggregateInputType = {
    rateToBase?: true
  }

  export type ExchangeRateSumAggregateInputType = {
    rateToBase?: true
  }

  export type ExchangeRateMinAggregateInputType = {
    id?: true
    currencyCode?: true
    rateToBase?: true
    validFrom?: true
    validTo?: true
    source?: true
    createdAt?: true
  }

  export type ExchangeRateMaxAggregateInputType = {
    id?: true
    currencyCode?: true
    rateToBase?: true
    validFrom?: true
    validTo?: true
    source?: true
    createdAt?: true
  }

  export type ExchangeRateCountAggregateInputType = {
    id?: true
    currencyCode?: true
    rateToBase?: true
    validFrom?: true
    validTo?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type ExchangeRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRate to aggregate.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeRates
    **/
    _count?: true | ExchangeRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeRateMaxAggregateInputType
  }

  export type GetExchangeRateAggregateType<T extends ExchangeRateAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeRate[P]>
      : GetScalarType<T[P], AggregateExchangeRate[P]>
  }




  export type ExchangeRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeRateWhereInput
    orderBy?: ExchangeRateOrderByWithAggregationInput | ExchangeRateOrderByWithAggregationInput[]
    by: ExchangeRateScalarFieldEnum[] | ExchangeRateScalarFieldEnum
    having?: ExchangeRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeRateCountAggregateInputType | true
    _avg?: ExchangeRateAvgAggregateInputType
    _sum?: ExchangeRateSumAggregateInputType
    _min?: ExchangeRateMinAggregateInputType
    _max?: ExchangeRateMaxAggregateInputType
  }

  export type ExchangeRateGroupByOutputType = {
    id: string
    currencyCode: string
    rateToBase: Decimal
    validFrom: Date
    validTo: Date | null
    source: string
    createdAt: Date
    _count: ExchangeRateCountAggregateOutputType | null
    _avg: ExchangeRateAvgAggregateOutputType | null
    _sum: ExchangeRateSumAggregateOutputType | null
    _min: ExchangeRateMinAggregateOutputType | null
    _max: ExchangeRateMaxAggregateOutputType | null
  }

  type GetExchangeRateGroupByPayload<T extends ExchangeRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeRateGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeRateGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currencyCode?: boolean
    rateToBase?: boolean
    validFrom?: boolean
    validTo?: boolean
    source?: boolean
    createdAt?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currencyCode?: boolean
    rateToBase?: boolean
    validFrom?: boolean
    validTo?: boolean
    source?: boolean
    createdAt?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currencyCode?: boolean
    rateToBase?: boolean
    validFrom?: boolean
    validTo?: boolean
    source?: boolean
    createdAt?: boolean
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeRate"]>

  export type ExchangeRateSelectScalar = {
    id?: boolean
    currencyCode?: boolean
    rateToBase?: boolean
    validFrom?: boolean
    validTo?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type ExchangeRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currencyCode" | "rateToBase" | "validFrom" | "validTo" | "source" | "createdAt", ExtArgs["result"]["exchangeRate"]>
  export type ExchangeRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type ExchangeRateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }
  export type ExchangeRateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency?: boolean | CurrencyDefaultArgs<ExtArgs>
  }

  export type $ExchangeRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeRate"
    objects: {
      currency: Prisma.$CurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currencyCode: string
      rateToBase: Prisma.Decimal
      validFrom: Date
      validTo: Date | null
      source: string
      createdAt: Date
    }, ExtArgs["result"]["exchangeRate"]>
    composites: {}
  }

  type ExchangeRateGetPayload<S extends boolean | null | undefined | ExchangeRateDefaultArgs> = $Result.GetResult<Prisma.$ExchangeRatePayload, S>

  type ExchangeRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeRateCountAggregateInputType | true
    }

  export interface ExchangeRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeRate'], meta: { name: 'ExchangeRate' } }
    /**
     * Find zero or one ExchangeRate that matches the filter.
     * @param {ExchangeRateFindUniqueArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeRateFindUniqueArgs>(args: SelectSubset<T, ExchangeRateFindUniqueArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeRateFindUniqueOrThrowArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeRateFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindFirstArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeRateFindFirstArgs>(args?: SelectSubset<T, ExchangeRateFindFirstArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindFirstOrThrowArgs} args - Arguments to find a ExchangeRate
     * @example
     * // Get one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeRateFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeRates
     * const exchangeRates = await prisma.exchangeRate.findMany()
     * 
     * // Get first 10 ExchangeRates
     * const exchangeRates = await prisma.exchangeRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExchangeRateFindManyArgs>(args?: SelectSubset<T, ExchangeRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeRate.
     * @param {ExchangeRateCreateArgs} args - Arguments to create a ExchangeRate.
     * @example
     * // Create one ExchangeRate
     * const ExchangeRate = await prisma.exchangeRate.create({
     *   data: {
     *     // ... data to create a ExchangeRate
     *   }
     * })
     * 
     */
    create<T extends ExchangeRateCreateArgs>(args: SelectSubset<T, ExchangeRateCreateArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeRates.
     * @param {ExchangeRateCreateManyArgs} args - Arguments to create many ExchangeRates.
     * @example
     * // Create many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeRateCreateManyArgs>(args?: SelectSubset<T, ExchangeRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeRates and returns the data saved in the database.
     * @param {ExchangeRateCreateManyAndReturnArgs} args - Arguments to create many ExchangeRates.
     * @example
     * // Create many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeRates and only return the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeRateCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeRate.
     * @param {ExchangeRateDeleteArgs} args - Arguments to delete one ExchangeRate.
     * @example
     * // Delete one ExchangeRate
     * const ExchangeRate = await prisma.exchangeRate.delete({
     *   where: {
     *     // ... filter to delete one ExchangeRate
     *   }
     * })
     * 
     */
    delete<T extends ExchangeRateDeleteArgs>(args: SelectSubset<T, ExchangeRateDeleteArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeRate.
     * @param {ExchangeRateUpdateArgs} args - Arguments to update one ExchangeRate.
     * @example
     * // Update one ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeRateUpdateArgs>(args: SelectSubset<T, ExchangeRateUpdateArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeRates.
     * @param {ExchangeRateDeleteManyArgs} args - Arguments to filter ExchangeRates to delete.
     * @example
     * // Delete a few ExchangeRates
     * const { count } = await prisma.exchangeRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeRateDeleteManyArgs>(args?: SelectSubset<T, ExchangeRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeRateUpdateManyArgs>(args: SelectSubset<T, ExchangeRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRates and returns the data updated in the database.
     * @param {ExchangeRateUpdateManyAndReturnArgs} args - Arguments to update many ExchangeRates.
     * @example
     * // Update many ExchangeRates
     * const exchangeRate = await prisma.exchangeRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeRates and only return the `id`
     * const exchangeRateWithIdOnly = await prisma.exchangeRate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExchangeRateUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeRate.
     * @param {ExchangeRateUpsertArgs} args - Arguments to update or create a ExchangeRate.
     * @example
     * // Update or create a ExchangeRate
     * const exchangeRate = await prisma.exchangeRate.upsert({
     *   create: {
     *     // ... data to create a ExchangeRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeRate we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeRateUpsertArgs>(args: SelectSubset<T, ExchangeRateUpsertArgs<ExtArgs>>): Prisma__ExchangeRateClient<$Result.GetResult<Prisma.$ExchangeRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCountArgs} args - Arguments to filter ExchangeRates to count.
     * @example
     * // Count the number of ExchangeRates
     * const count = await prisma.exchangeRate.count({
     *   where: {
     *     // ... the filter for the ExchangeRates we want to count
     *   }
     * })
    **/
    count<T extends ExchangeRateCountArgs>(
      args?: Subset<T, ExchangeRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExchangeRateAggregateArgs>(args: Subset<T, ExchangeRateAggregateArgs>): Prisma.PrismaPromise<GetExchangeRateAggregateType<T>>

    /**
     * Group by ExchangeRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateGroupByArgs} args - Group by arguments.
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
      T extends ExchangeRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeRateGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExchangeRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeRate model
   */
  readonly fields: ExchangeRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currency<T extends CurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurrencyDefaultArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExchangeRate model
   */
  interface ExchangeRateFieldRefs {
    readonly id: FieldRef<"ExchangeRate", 'String'>
    readonly currencyCode: FieldRef<"ExchangeRate", 'String'>
    readonly rateToBase: FieldRef<"ExchangeRate", 'Decimal'>
    readonly validFrom: FieldRef<"ExchangeRate", 'DateTime'>
    readonly validTo: FieldRef<"ExchangeRate", 'DateTime'>
    readonly source: FieldRef<"ExchangeRate", 'String'>
    readonly createdAt: FieldRef<"ExchangeRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeRate findUnique
   */
  export type ExchangeRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate findUniqueOrThrow
   */
  export type ExchangeRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate findFirst
   */
  export type ExchangeRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRates.
     */
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate findFirstOrThrow
   */
  export type ExchangeRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRate to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRates.
     */
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate findMany
   */
  export type ExchangeRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeRates to fetch.
     */
    where?: ExchangeRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRates to fetch.
     */
    orderBy?: ExchangeRateOrderByWithRelationInput | ExchangeRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeRates.
     */
    cursor?: ExchangeRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRates.
     */
    skip?: number
    distinct?: ExchangeRateScalarFieldEnum | ExchangeRateScalarFieldEnum[]
  }

  /**
   * ExchangeRate create
   */
  export type ExchangeRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * The data needed to create a ExchangeRate.
     */
    data: XOR<ExchangeRateCreateInput, ExchangeRateUncheckedCreateInput>
  }

  /**
   * ExchangeRate createMany
   */
  export type ExchangeRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeRates.
     */
    data: ExchangeRateCreateManyInput | ExchangeRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeRate createManyAndReturn
   */
  export type ExchangeRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeRates.
     */
    data: ExchangeRateCreateManyInput | ExchangeRateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExchangeRate update
   */
  export type ExchangeRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * The data needed to update a ExchangeRate.
     */
    data: XOR<ExchangeRateUpdateInput, ExchangeRateUncheckedUpdateInput>
    /**
     * Choose, which ExchangeRate to update.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate updateMany
   */
  export type ExchangeRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeRates.
     */
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRates to update
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to update.
     */
    limit?: number
  }

  /**
   * ExchangeRate updateManyAndReturn
   */
  export type ExchangeRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeRates.
     */
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRates to update
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExchangeRate upsert
   */
  export type ExchangeRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * The filter to search for the ExchangeRate to update in case it exists.
     */
    where: ExchangeRateWhereUniqueInput
    /**
     * In case the ExchangeRate found by the `where` argument doesn't exist, create a new ExchangeRate with this data.
     */
    create: XOR<ExchangeRateCreateInput, ExchangeRateUncheckedCreateInput>
    /**
     * In case the ExchangeRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeRateUpdateInput, ExchangeRateUncheckedUpdateInput>
  }

  /**
   * ExchangeRate delete
   */
  export type ExchangeRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
    /**
     * Filter which ExchangeRate to delete.
     */
    where: ExchangeRateWhereUniqueInput
  }

  /**
   * ExchangeRate deleteMany
   */
  export type ExchangeRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRates to delete
     */
    where?: ExchangeRateWhereInput
    /**
     * Limit how many ExchangeRates to delete.
     */
    limit?: number
  }

  /**
   * ExchangeRate without action
   */
  export type ExchangeRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRate
     */
    select?: ExchangeRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRate
     */
    omit?: ExchangeRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeRateInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    code: 'code',
    name: 'name',
    symbol: 'symbol',
    exchangeRate: 'exchangeRate'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    name: 'name',
    type: 'type',
    currencyCode: 'currencyCode',
    createdAt: 'createdAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    name: 'name',
    type: 'type'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    categoryId: 'categoryId',
    amount: 'amount',
    transactionAt: 'transactionAt',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    userId: 'userId',
    name: 'name',
    role: 'role'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    categoryId: 'categoryId',
    amount: 'amount',
    period: 'period',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    theme: 'theme',
    currencyCode: 'currencyCode',
    locale: 'locale',
    notificationEnabled: 'notificationEnabled'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    filePath: 'filePath',
    createdAt: 'createdAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const ExchangeRateScalarFieldEnum: {
    id: 'id',
    currencyCode: 'currencyCode',
    rateToBase: 'rateToBase',
    validFrom: 'validFrom',
    validTo: 'validTo',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type ExchangeRateScalarFieldEnum = (typeof ExchangeRateScalarFieldEnum)[keyof typeof ExchangeRateScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleNullableListFilter<"User">
    books?: BookListRelationFilter
    settings?: SettingListRelationFilter
    Member?: MemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    books?: BookOrderByRelationAggregateInput
    settings?: SettingOrderByRelationAggregateInput
    Member?: MemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleNullableListFilter<"User">
    books?: BookListRelationFilter
    settings?: SettingListRelationFilter
    Member?: MemberListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleNullableListFilter<"User">
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: UuidFilter<"Book"> | string
    userId?: UuidFilter<"Book"> | string
    name?: StringFilter<"Book"> | string
    description?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    accounts?: AccountListRelationFilter
    categories?: CategoryListRelationFilter
    members?: MemberListRelationFilter
    budgets?: BudgetListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    accounts?: AccountOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    members?: MemberOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    userId?: UuidFilter<"Book"> | string
    name?: StringFilter<"Book"> | string
    description?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    accounts?: AccountListRelationFilter
    categories?: CategoryListRelationFilter
    members?: MemberListRelationFilter
    budgets?: BudgetListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Book"> | string
    userId?: UuidWithAggregatesFilter<"Book"> | string
    name?: StringWithAggregatesFilter<"Book"> | string
    description?: StringNullableWithAggregatesFilter<"Book"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    code?: StringFilter<"Currency"> | string
    name?: StringFilter<"Currency"> | string
    symbol?: StringFilter<"Currency"> | string
    exchangeRate?: DecimalFilter<"Currency"> | Decimal | DecimalJsLike | number | string
    accounts?: AccountListRelationFilter
    settings?: SettingListRelationFilter
    exchangeRates?: ExchangeRateListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    settings?: SettingOrderByRelationAggregateInput
    exchangeRates?: ExchangeRateOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    name?: StringFilter<"Currency"> | string
    symbol?: StringFilter<"Currency"> | string
    exchangeRate?: DecimalFilter<"Currency"> | Decimal | DecimalJsLike | number | string
    accounts?: AccountListRelationFilter
    settings?: SettingListRelationFilter
    exchangeRates?: ExchangeRateListRelationFilter
  }, "code">

  export type CurrencyOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Currency"> | string
    name?: StringWithAggregatesFilter<"Currency"> | string
    symbol?: StringWithAggregatesFilter<"Currency"> | string
    exchangeRate?: DecimalWithAggregatesFilter<"Currency"> | Decimal | DecimalJsLike | number | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: UuidFilter<"Account"> | string
    bookId?: UuidFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    currencyCode?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
    book?: BookOrderByWithRelationInput
    currency?: CurrencyOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    bookId?: UuidFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    currencyCode?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Account"> | string
    bookId?: UuidWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    currencyCode?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: UuidFilter<"Category"> | string
    bookId?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    type?: StringFilter<"Category"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    transactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    book?: BookOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    budgets?: BudgetOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    bookId?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    type?: StringFilter<"Category"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    transactions?: TransactionListRelationFilter
    budgets?: BudgetListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Category"> | string
    bookId?: UuidWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    type?: StringWithAggregatesFilter<"Category"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: UuidFilter<"Transaction"> | string
    accountId?: UuidFilter<"Transaction"> | string
    categoryId?: UuidFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    attachments?: AttachmentListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    transactionAt?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    attachments?: AttachmentOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    accountId?: UuidFilter<"Transaction"> | string
    categoryId?: UuidFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    attachments?: AttachmentListRelationFilter
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    transactionAt?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Transaction"> | string
    accountId?: UuidWithAggregatesFilter<"Transaction"> | string
    categoryId?: UuidWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: UuidFilter<"Member"> | string
    bookId?: UuidFilter<"Member"> | string
    userId?: UuidFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    book?: BookOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookId_userId?: MemberBookIdUserIdCompoundUniqueInput
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    bookId?: UuidFilter<"Member"> | string
    userId?: UuidFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    role?: EnumRoleFilter<"Member"> | $Enums.Role
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "bookId_userId">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Member"> | string
    bookId?: UuidWithAggregatesFilter<"Member"> | string
    userId?: UuidWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    role?: EnumRoleWithAggregatesFilter<"Member"> | $Enums.Role
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: UuidFilter<"Budget"> | string
    bookId?: UuidFilter<"Budget"> | string
    categoryId?: UuidFilter<"Budget"> | string
    amount?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    period?: StringFilter<"Budget"> | string
    startDate?: DateTimeFilter<"Budget"> | Date | string
    endDate?: DateTimeNullableFilter<"Budget"> | Date | string | null
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    book?: BookOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    bookId?: UuidFilter<"Budget"> | string
    categoryId?: UuidFilter<"Budget"> | string
    amount?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    period?: StringFilter<"Budget"> | string
    startDate?: DateTimeFilter<"Budget"> | Date | string
    endDate?: DateTimeNullableFilter<"Budget"> | Date | string | null
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Budget"> | string
    bookId?: UuidWithAggregatesFilter<"Budget"> | string
    categoryId?: UuidWithAggregatesFilter<"Budget"> | string
    amount?: DecimalWithAggregatesFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    period?: StringWithAggregatesFilter<"Budget"> | string
    startDate?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Budget"> | Date | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: UuidFilter<"Setting"> | string
    userId?: UuidFilter<"Setting"> | string
    theme?: StringFilter<"Setting"> | string
    currencyCode?: StringNullableFilter<"Setting"> | string | null
    locale?: StringNullableFilter<"Setting"> | string | null
    notificationEnabled?: BoolFilter<"Setting"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    currency?: XOR<CurrencyNullableScalarRelationFilter, CurrencyWhereInput> | null
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    currencyCode?: SortOrderInput | SortOrder
    locale?: SortOrderInput | SortOrder
    notificationEnabled?: SortOrder
    user?: UserOrderByWithRelationInput
    currency?: CurrencyOrderByWithRelationInput
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    userId?: UuidFilter<"Setting"> | string
    theme?: StringFilter<"Setting"> | string
    currencyCode?: StringNullableFilter<"Setting"> | string | null
    locale?: StringNullableFilter<"Setting"> | string | null
    notificationEnabled?: BoolFilter<"Setting"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    currency?: XOR<CurrencyNullableScalarRelationFilter, CurrencyWhereInput> | null
  }, "id">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    currencyCode?: SortOrderInput | SortOrder
    locale?: SortOrderInput | SortOrder
    notificationEnabled?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Setting"> | string
    userId?: UuidWithAggregatesFilter<"Setting"> | string
    theme?: StringWithAggregatesFilter<"Setting"> | string
    currencyCode?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    locale?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    notificationEnabled?: BoolWithAggregatesFilter<"Setting"> | boolean
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: UuidFilter<"Attachment"> | string
    transactionId?: UuidFilter<"Attachment"> | string
    filePath?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    transaction?: TransactionOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    transactionId?: UuidFilter<"Attachment"> | string
    filePath?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attachment"> | string
    transactionId?: UuidWithAggregatesFilter<"Attachment"> | string
    filePath?: StringWithAggregatesFilter<"Attachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
  }

  export type ExchangeRateWhereInput = {
    AND?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    OR?: ExchangeRateWhereInput[]
    NOT?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    id?: UuidFilter<"ExchangeRate"> | string
    currencyCode?: StringFilter<"ExchangeRate"> | string
    rateToBase?: DecimalFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFilter<"ExchangeRate"> | Date | string
    validTo?: DateTimeNullableFilter<"ExchangeRate"> | Date | string | null
    source?: StringFilter<"ExchangeRate"> | string
    createdAt?: DateTimeFilter<"ExchangeRate"> | Date | string
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }

  export type ExchangeRateOrderByWithRelationInput = {
    id?: SortOrder
    currencyCode?: SortOrder
    rateToBase?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    currency?: CurrencyOrderByWithRelationInput
  }

  export type ExchangeRateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    OR?: ExchangeRateWhereInput[]
    NOT?: ExchangeRateWhereInput | ExchangeRateWhereInput[]
    currencyCode?: StringFilter<"ExchangeRate"> | string
    rateToBase?: DecimalFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFilter<"ExchangeRate"> | Date | string
    validTo?: DateTimeNullableFilter<"ExchangeRate"> | Date | string | null
    source?: StringFilter<"ExchangeRate"> | string
    createdAt?: DateTimeFilter<"ExchangeRate"> | Date | string
    currency?: XOR<CurrencyScalarRelationFilter, CurrencyWhereInput>
  }, "id">

  export type ExchangeRateOrderByWithAggregationInput = {
    id?: SortOrder
    currencyCode?: SortOrder
    rateToBase?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrderInput | SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: ExchangeRateCountOrderByAggregateInput
    _avg?: ExchangeRateAvgOrderByAggregateInput
    _max?: ExchangeRateMaxOrderByAggregateInput
    _min?: ExchangeRateMinOrderByAggregateInput
    _sum?: ExchangeRateSumOrderByAggregateInput
  }

  export type ExchangeRateScalarWhereWithAggregatesInput = {
    AND?: ExchangeRateScalarWhereWithAggregatesInput | ExchangeRateScalarWhereWithAggregatesInput[]
    OR?: ExchangeRateScalarWhereWithAggregatesInput[]
    NOT?: ExchangeRateScalarWhereWithAggregatesInput | ExchangeRateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ExchangeRate"> | string
    currencyCode?: StringWithAggregatesFilter<"ExchangeRate"> | string
    rateToBase?: DecimalWithAggregatesFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeWithAggregatesFilter<"ExchangeRate"> | Date | string
    validTo?: DateTimeNullableWithAggregatesFilter<"ExchangeRate"> | Date | string | null
    source?: StringWithAggregatesFilter<"ExchangeRate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExchangeRate"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
    books?: BookCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
    Member?: MemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    Member?: MemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
    books?: BookUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
    Member?: MemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    Member?: MemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
  }

  export type BookCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    accounts?: AccountCreateNestedManyWithoutBookInput
    categories?: CategoryCreateNestedManyWithoutBookInput
    members?: MemberCreateNestedManyWithoutBookInput
    budgets?: BudgetCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutBookInput
    categories?: CategoryUncheckedCreateNestedManyWithoutBookInput
    members?: MemberUncheckedCreateNestedManyWithoutBookInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    accounts?: AccountUpdateManyWithoutBookNestedInput
    categories?: CategoryUpdateManyWithoutBookNestedInput
    members?: MemberUpdateManyWithoutBookNestedInput
    budgets?: BudgetUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutBookNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutBookNestedInput
    members?: MemberUncheckedUpdateManyWithoutBookNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyCreateInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    accounts?: AccountCreateNestedManyWithoutCurrencyInput
    settings?: SettingCreateNestedManyWithoutCurrencyInput
    exchangeRates?: ExchangeRateCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    accounts?: AccountUncheckedCreateNestedManyWithoutCurrencyInput
    settings?: SettingUncheckedCreateNestedManyWithoutCurrencyInput
    exchangeRates?: ExchangeRateUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accounts?: AccountUpdateManyWithoutCurrencyNestedInput
    settings?: SettingUpdateManyWithoutCurrencyNestedInput
    exchangeRates?: ExchangeRateUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accounts?: AccountUncheckedUpdateManyWithoutCurrencyNestedInput
    settings?: SettingUncheckedUpdateManyWithoutCurrencyNestedInput
    exchangeRates?: ExchangeRateUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
  }

  export type CurrencyUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutAccountsInput
    currency: CurrencyCreateNestedOneWithoutAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    bookId: string
    name: string
    type: string
    currencyCode: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutAccountsNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    bookId: string
    name: string
    type: string
    currencyCode: string
    createdAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    type: string
    book: BookCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    bookId: string
    name: string
    type: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    book?: BookUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    bookId: string
    name: string
    type: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutTransactionsInput
    category: CategoryCreateNestedOneWithoutTransactionsInput
    attachments?: AttachmentCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    accountId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
    attachments?: AttachmentUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    accountId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    name: string
    role: $Enums.Role
    book: BookCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    bookId: string
    userId: string
    name: string
    role: $Enums.Role
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    book?: BookUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MemberCreateManyInput = {
    id?: string
    bookId: string
    userId: string
    name: string
    role: $Enums.Role
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type BudgetCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
    book: BookCreateNestedOneWithoutBudgetsInput
    category: CategoryCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    bookId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: BookUpdateOneRequiredWithoutBudgetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BudgetCreateManyInput = {
    id?: string
    bookId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettingCreateInput = {
    id?: string
    theme?: string
    locale?: string | null
    notificationEnabled?: boolean
    user: UserCreateNestedOneWithoutSettingsInput
    currency?: CurrencyCreateNestedOneWithoutSettingsInput
  }

  export type SettingUncheckedCreateInput = {
    id?: string
    userId: string
    theme?: string
    currencyCode?: string | null
    locale?: string | null
    notificationEnabled?: boolean
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
    currency?: CurrencyUpdateOneWithoutSettingsNestedInput
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingCreateManyInput = {
    id?: string
    userId: string
    theme?: string
    currencyCode?: string | null
    locale?: string | null
    notificationEnabled?: boolean
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttachmentCreateInput = {
    id?: string
    filePath: string
    createdAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    transactionId: string
    filePath: string
    createdAt?: Date | string
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyInput = {
    id?: string
    transactionId: string
    filePath: string
    createdAt?: Date | string
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateCreateInput = {
    id?: string
    rateToBase: Decimal | DecimalJsLike | number | string
    validFrom: Date | string
    validTo?: Date | string | null
    source: string
    createdAt?: Date | string
    currency: CurrencyCreateNestedOneWithoutExchangeRatesInput
  }

  export type ExchangeRateUncheckedCreateInput = {
    id?: string
    currencyCode: string
    rateToBase: Decimal | DecimalJsLike | number | string
    validFrom: Date | string
    validTo?: Date | string | null
    source: string
    createdAt?: Date | string
  }

  export type ExchangeRateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rateToBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: CurrencyUpdateOneRequiredWithoutExchangeRatesNestedInput
  }

  export type ExchangeRateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    rateToBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateCreateManyInput = {
    id?: string
    currencyCode: string
    rateToBase: Decimal | DecimalJsLike | number | string
    validFrom: Date | string
    validTo?: Date | string | null
    source: string
    createdAt?: Date | string
  }

  export type ExchangeRateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rateToBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    rateToBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type SettingListRelationFilter = {
    every?: SettingWhereInput
    some?: SettingWhereInput
    none?: SettingWhereInput
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type BudgetListRelationFilter = {
    every?: BudgetWhereInput
    some?: BudgetWhereInput
    none?: BudgetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ExchangeRateListRelationFilter = {
    every?: ExchangeRateWhereInput
    some?: ExchangeRateWhereInput
    none?: ExchangeRateWhereInput
  }

  export type ExchangeRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrencyCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    exchangeRate?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    exchangeRate?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    exchangeRate?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type CurrencyScalarRelationFilter = {
    is?: CurrencyWhereInput
    isNot?: CurrencyWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    transactionAt?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    transactionAt?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    transactionAt?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type MemberBookIdUserIdCompoundUniqueInput = {
    bookId: string
    userId: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CurrencyNullableScalarRelationFilter = {
    is?: CurrencyWhereInput | null
    isNot?: CurrencyWhereInput | null
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    currencyCode?: SortOrder
    locale?: SortOrder
    notificationEnabled?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    currencyCode?: SortOrder
    locale?: SortOrder
    notificationEnabled?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    currencyCode?: SortOrder
    locale?: SortOrder
    notificationEnabled?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeRateCountOrderByAggregateInput = {
    id?: SortOrder
    currencyCode?: SortOrder
    rateToBase?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeRateAvgOrderByAggregateInput = {
    rateToBase?: SortOrder
  }

  export type ExchangeRateMaxOrderByAggregateInput = {
    id?: SortOrder
    currencyCode?: SortOrder
    rateToBase?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeRateMinOrderByAggregateInput = {
    id?: SortOrder
    currencyCode?: SortOrder
    rateToBase?: SortOrder
    validFrom?: SortOrder
    validTo?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeRateSumOrderByAggregateInput = {
    rateToBase?: SortOrder
  }

  export type UserCreateroleInput = {
    set: $Enums.Role[]
  }

  export type BookCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type SettingCreateNestedManyWithoutUserInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput> | SettingCreateWithoutUserInput[] | SettingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput | SettingCreateOrConnectWithoutUserInput[]
    createMany?: SettingCreateManyUserInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type SettingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput> | SettingCreateWithoutUserInput[] | SettingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput | SettingCreateOrConnectWithoutUserInput[]
    createMany?: SettingCreateManyUserInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateroleInput = {
    set?: $Enums.Role[]
    push?: $Enums.Role | $Enums.Role[]
  }

  export type BookUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type SettingUpdateManyWithoutUserNestedInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput> | SettingCreateWithoutUserInput[] | SettingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput | SettingCreateOrConnectWithoutUserInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutUserInput | SettingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SettingCreateManyUserInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutUserInput | SettingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutUserInput | SettingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutUserInput | MemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutUserInput | MemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutUserInput | MemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type SettingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput> | SettingCreateWithoutUserInput[] | SettingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUserInput | SettingCreateOrConnectWithoutUserInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutUserInput | SettingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SettingCreateManyUserInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutUserInput | SettingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutUserInput | SettingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutUserInput | MemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutUserInput | MemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutUserInput | MemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBooksInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedManyWithoutBookInput = {
    create?: XOR<AccountCreateWithoutBookInput, AccountUncheckedCreateWithoutBookInput> | AccountCreateWithoutBookInput[] | AccountUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutBookInput | AccountCreateOrConnectWithoutBookInput[]
    createMany?: AccountCreateManyBookInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutBookInput = {
    create?: XOR<CategoryCreateWithoutBookInput, CategoryUncheckedCreateWithoutBookInput> | CategoryCreateWithoutBookInput[] | CategoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBookInput | CategoryCreateOrConnectWithoutBookInput[]
    createMany?: CategoryCreateManyBookInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutBookInput = {
    create?: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput> | MemberCreateWithoutBookInput[] | MemberUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutBookInput | MemberCreateOrConnectWithoutBookInput[]
    createMany?: MemberCreateManyBookInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutBookInput = {
    create?: XOR<BudgetCreateWithoutBookInput, BudgetUncheckedCreateWithoutBookInput> | BudgetCreateWithoutBookInput[] | BudgetUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutBookInput | BudgetCreateOrConnectWithoutBookInput[]
    createMany?: BudgetCreateManyBookInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<AccountCreateWithoutBookInput, AccountUncheckedCreateWithoutBookInput> | AccountCreateWithoutBookInput[] | AccountUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutBookInput | AccountCreateOrConnectWithoutBookInput[]
    createMany?: AccountCreateManyBookInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<CategoryCreateWithoutBookInput, CategoryUncheckedCreateWithoutBookInput> | CategoryCreateWithoutBookInput[] | CategoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBookInput | CategoryCreateOrConnectWithoutBookInput[]
    createMany?: CategoryCreateManyBookInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput> | MemberCreateWithoutBookInput[] | MemberUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutBookInput | MemberCreateOrConnectWithoutBookInput[]
    createMany?: MemberCreateManyBookInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BudgetCreateWithoutBookInput, BudgetUncheckedCreateWithoutBookInput> | BudgetCreateWithoutBookInput[] | BudgetUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutBookInput | BudgetCreateOrConnectWithoutBookInput[]
    createMany?: BudgetCreateManyBookInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    upsert?: UserUpsertWithoutBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBooksInput, UserUpdateWithoutBooksInput>, UserUncheckedUpdateWithoutBooksInput>
  }

  export type AccountUpdateManyWithoutBookNestedInput = {
    create?: XOR<AccountCreateWithoutBookInput, AccountUncheckedCreateWithoutBookInput> | AccountCreateWithoutBookInput[] | AccountUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutBookInput | AccountCreateOrConnectWithoutBookInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutBookInput | AccountUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: AccountCreateManyBookInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutBookInput | AccountUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutBookInput | AccountUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutBookNestedInput = {
    create?: XOR<CategoryCreateWithoutBookInput, CategoryUncheckedCreateWithoutBookInput> | CategoryCreateWithoutBookInput[] | CategoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBookInput | CategoryCreateOrConnectWithoutBookInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutBookInput | CategoryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CategoryCreateManyBookInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutBookInput | CategoryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutBookInput | CategoryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutBookNestedInput = {
    create?: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput> | MemberCreateWithoutBookInput[] | MemberUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutBookInput | MemberCreateOrConnectWithoutBookInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutBookInput | MemberUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: MemberCreateManyBookInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutBookInput | MemberUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutBookInput | MemberUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutBookNestedInput = {
    create?: XOR<BudgetCreateWithoutBookInput, BudgetUncheckedCreateWithoutBookInput> | BudgetCreateWithoutBookInput[] | BudgetUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutBookInput | BudgetCreateOrConnectWithoutBookInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutBookInput | BudgetUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BudgetCreateManyBookInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutBookInput | BudgetUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutBookInput | BudgetUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<AccountCreateWithoutBookInput, AccountUncheckedCreateWithoutBookInput> | AccountCreateWithoutBookInput[] | AccountUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutBookInput | AccountCreateOrConnectWithoutBookInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutBookInput | AccountUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: AccountCreateManyBookInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutBookInput | AccountUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutBookInput | AccountUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<CategoryCreateWithoutBookInput, CategoryUncheckedCreateWithoutBookInput> | CategoryCreateWithoutBookInput[] | CategoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBookInput | CategoryCreateOrConnectWithoutBookInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutBookInput | CategoryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CategoryCreateManyBookInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutBookInput | CategoryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutBookInput | CategoryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput> | MemberCreateWithoutBookInput[] | MemberUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutBookInput | MemberCreateOrConnectWithoutBookInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutBookInput | MemberUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: MemberCreateManyBookInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutBookInput | MemberUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutBookInput | MemberUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BudgetCreateWithoutBookInput, BudgetUncheckedCreateWithoutBookInput> | BudgetCreateWithoutBookInput[] | BudgetUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutBookInput | BudgetCreateOrConnectWithoutBookInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutBookInput | BudgetUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BudgetCreateManyBookInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutBookInput | BudgetUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutBookInput | BudgetUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type AccountCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<AccountCreateWithoutCurrencyInput, AccountUncheckedCreateWithoutCurrencyInput> | AccountCreateWithoutCurrencyInput[] | AccountUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutCurrencyInput | AccountCreateOrConnectWithoutCurrencyInput[]
    createMany?: AccountCreateManyCurrencyInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SettingCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<SettingCreateWithoutCurrencyInput, SettingUncheckedCreateWithoutCurrencyInput> | SettingCreateWithoutCurrencyInput[] | SettingUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutCurrencyInput | SettingCreateOrConnectWithoutCurrencyInput[]
    createMany?: SettingCreateManyCurrencyInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type ExchangeRateCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<ExchangeRateCreateWithoutCurrencyInput, ExchangeRateUncheckedCreateWithoutCurrencyInput> | ExchangeRateCreateWithoutCurrencyInput[] | ExchangeRateUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutCurrencyInput | ExchangeRateCreateOrConnectWithoutCurrencyInput[]
    createMany?: ExchangeRateCreateManyCurrencyInputEnvelope
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<AccountCreateWithoutCurrencyInput, AccountUncheckedCreateWithoutCurrencyInput> | AccountCreateWithoutCurrencyInput[] | AccountUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutCurrencyInput | AccountCreateOrConnectWithoutCurrencyInput[]
    createMany?: AccountCreateManyCurrencyInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SettingUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<SettingCreateWithoutCurrencyInput, SettingUncheckedCreateWithoutCurrencyInput> | SettingCreateWithoutCurrencyInput[] | SettingUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutCurrencyInput | SettingCreateOrConnectWithoutCurrencyInput[]
    createMany?: SettingCreateManyCurrencyInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type ExchangeRateUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<ExchangeRateCreateWithoutCurrencyInput, ExchangeRateUncheckedCreateWithoutCurrencyInput> | ExchangeRateCreateWithoutCurrencyInput[] | ExchangeRateUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutCurrencyInput | ExchangeRateCreateOrConnectWithoutCurrencyInput[]
    createMany?: ExchangeRateCreateManyCurrencyInputEnvelope
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AccountUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<AccountCreateWithoutCurrencyInput, AccountUncheckedCreateWithoutCurrencyInput> | AccountCreateWithoutCurrencyInput[] | AccountUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutCurrencyInput | AccountCreateOrConnectWithoutCurrencyInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutCurrencyInput | AccountUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: AccountCreateManyCurrencyInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutCurrencyInput | AccountUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutCurrencyInput | AccountUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SettingUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<SettingCreateWithoutCurrencyInput, SettingUncheckedCreateWithoutCurrencyInput> | SettingCreateWithoutCurrencyInput[] | SettingUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutCurrencyInput | SettingCreateOrConnectWithoutCurrencyInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutCurrencyInput | SettingUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: SettingCreateManyCurrencyInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutCurrencyInput | SettingUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutCurrencyInput | SettingUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type ExchangeRateUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<ExchangeRateCreateWithoutCurrencyInput, ExchangeRateUncheckedCreateWithoutCurrencyInput> | ExchangeRateCreateWithoutCurrencyInput[] | ExchangeRateUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutCurrencyInput | ExchangeRateCreateOrConnectWithoutCurrencyInput[]
    upsert?: ExchangeRateUpsertWithWhereUniqueWithoutCurrencyInput | ExchangeRateUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: ExchangeRateCreateManyCurrencyInputEnvelope
    set?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    disconnect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    delete?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    update?: ExchangeRateUpdateWithWhereUniqueWithoutCurrencyInput | ExchangeRateUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: ExchangeRateUpdateManyWithWhereWithoutCurrencyInput | ExchangeRateUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<AccountCreateWithoutCurrencyInput, AccountUncheckedCreateWithoutCurrencyInput> | AccountCreateWithoutCurrencyInput[] | AccountUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutCurrencyInput | AccountCreateOrConnectWithoutCurrencyInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutCurrencyInput | AccountUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: AccountCreateManyCurrencyInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutCurrencyInput | AccountUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutCurrencyInput | AccountUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SettingUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<SettingCreateWithoutCurrencyInput, SettingUncheckedCreateWithoutCurrencyInput> | SettingCreateWithoutCurrencyInput[] | SettingUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutCurrencyInput | SettingCreateOrConnectWithoutCurrencyInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutCurrencyInput | SettingUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: SettingCreateManyCurrencyInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutCurrencyInput | SettingUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutCurrencyInput | SettingUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type ExchangeRateUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<ExchangeRateCreateWithoutCurrencyInput, ExchangeRateUncheckedCreateWithoutCurrencyInput> | ExchangeRateCreateWithoutCurrencyInput[] | ExchangeRateUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: ExchangeRateCreateOrConnectWithoutCurrencyInput | ExchangeRateCreateOrConnectWithoutCurrencyInput[]
    upsert?: ExchangeRateUpsertWithWhereUniqueWithoutCurrencyInput | ExchangeRateUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: ExchangeRateCreateManyCurrencyInputEnvelope
    set?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    disconnect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    delete?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    connect?: ExchangeRateWhereUniqueInput | ExchangeRateWhereUniqueInput[]
    update?: ExchangeRateUpdateWithWhereUniqueWithoutCurrencyInput | ExchangeRateUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: ExchangeRateUpdateManyWithWhereWithoutCurrencyInput | ExchangeRateUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutAccountsInput = {
    create?: XOR<BookCreateWithoutAccountsInput, BookUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: BookCreateOrConnectWithoutAccountsInput
    connect?: BookWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutAccountsInput = {
    create?: XOR<CurrencyCreateWithoutAccountsInput, CurrencyUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutAccountsInput
    connect?: CurrencyWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BookUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<BookCreateWithoutAccountsInput, BookUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: BookCreateOrConnectWithoutAccountsInput
    upsert?: BookUpsertWithoutAccountsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutAccountsInput, BookUpdateWithoutAccountsInput>, BookUncheckedUpdateWithoutAccountsInput>
  }

  export type CurrencyUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<CurrencyCreateWithoutAccountsInput, CurrencyUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutAccountsInput
    upsert?: CurrencyUpsertWithoutAccountsInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutAccountsInput, CurrencyUpdateWithoutAccountsInput>, CurrencyUncheckedUpdateWithoutAccountsInput>
  }

  export type TransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<BookCreateWithoutCategoriesInput, BookUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput
    connect?: BookWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BudgetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
  }

  export type BookUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<BookCreateWithoutCategoriesInput, BookUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput
    upsert?: BookUpsertWithoutCategoriesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutCategoriesInput, BookUpdateWithoutCategoriesInput>, BookUncheckedUpdateWithoutCategoriesInput>
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutCategoryInput | BudgetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutCategoryInput | BudgetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutCategoryInput | BudgetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BudgetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput> | BudgetCreateWithoutCategoryInput[] | BudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput | BudgetCreateOrConnectWithoutCategoryInput[]
    upsert?: BudgetUpsertWithWhereUniqueWithoutCategoryInput | BudgetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BudgetCreateManyCategoryInputEnvelope
    set?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    disconnect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    delete?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    connect?: BudgetWhereUniqueInput | BudgetWhereUniqueInput[]
    update?: BudgetUpdateWithWhereUniqueWithoutCategoryInput | BudgetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BudgetUpdateManyWithWhereWithoutCategoryInput | BudgetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    connect?: AccountWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type AttachmentCreateNestedManyWithoutTransactionInput = {
    create?: XOR<AttachmentCreateWithoutTransactionInput, AttachmentUncheckedCreateWithoutTransactionInput> | AttachmentCreateWithoutTransactionInput[] | AttachmentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTransactionInput | AttachmentCreateOrConnectWithoutTransactionInput[]
    createMany?: AttachmentCreateManyTransactionInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<AttachmentCreateWithoutTransactionInput, AttachmentUncheckedCreateWithoutTransactionInput> | AttachmentCreateWithoutTransactionInput[] | AttachmentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTransactionInput | AttachmentCreateOrConnectWithoutTransactionInput[]
    createMany?: AttachmentCreateManyTransactionInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    upsert?: AccountUpsertWithoutTransactionsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransactionsInput, AccountUpdateWithoutTransactionsInput>, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type AttachmentUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<AttachmentCreateWithoutTransactionInput, AttachmentUncheckedCreateWithoutTransactionInput> | AttachmentCreateWithoutTransactionInput[] | AttachmentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTransactionInput | AttachmentCreateOrConnectWithoutTransactionInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTransactionInput | AttachmentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: AttachmentCreateManyTransactionInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTransactionInput | AttachmentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTransactionInput | AttachmentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<AttachmentCreateWithoutTransactionInput, AttachmentUncheckedCreateWithoutTransactionInput> | AttachmentCreateWithoutTransactionInput[] | AttachmentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTransactionInput | AttachmentCreateOrConnectWithoutTransactionInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTransactionInput | AttachmentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: AttachmentCreateManyTransactionInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTransactionInput | AttachmentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTransactionInput | AttachmentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutMembersInput = {
    create?: XOR<BookCreateWithoutMembersInput, BookUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BookCreateOrConnectWithoutMembersInput
    connect?: BookWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMemberInput = {
    create?: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BookUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<BookCreateWithoutMembersInput, BookUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BookCreateOrConnectWithoutMembersInput
    upsert?: BookUpsertWithoutMembersInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutMembersInput, BookUpdateWithoutMembersInput>, BookUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberInput
    upsert?: UserUpsertWithoutMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemberInput, UserUpdateWithoutMemberInput>, UserUncheckedUpdateWithoutMemberInput>
  }

  export type BookCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<BookCreateWithoutBudgetsInput, BookUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBudgetsInput
    connect?: BookWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBudgetsInput = {
    create?: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetsInput
    connect?: CategoryWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<BookCreateWithoutBudgetsInput, BookUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBudgetsInput
    upsert?: BookUpsertWithoutBudgetsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutBudgetsInput, BookUpdateWithoutBudgetsInput>, BookUncheckedUpdateWithoutBudgetsInput>
  }

  export type CategoryUpdateOneRequiredWithoutBudgetsNestedInput = {
    create?: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetsInput
    upsert?: CategoryUpsertWithoutBudgetsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBudgetsInput, CategoryUpdateWithoutBudgetsInput>, CategoryUncheckedUpdateWithoutBudgetsInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutSettingsInput = {
    create?: XOR<CurrencyCreateWithoutSettingsInput, CurrencyUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutSettingsInput
    connect?: CurrencyWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type CurrencyUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<CurrencyCreateWithoutSettingsInput, CurrencyUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutSettingsInput
    upsert?: CurrencyUpsertWithoutSettingsInput
    disconnect?: CurrencyWhereInput | boolean
    delete?: CurrencyWhereInput | boolean
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutSettingsInput, CurrencyUpdateWithoutSettingsInput>, CurrencyUncheckedUpdateWithoutSettingsInput>
  }

  export type TransactionCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TransactionCreateWithoutAttachmentsInput, TransactionUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutAttachmentsInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TransactionCreateWithoutAttachmentsInput, TransactionUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutAttachmentsInput
    upsert?: TransactionUpsertWithoutAttachmentsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutAttachmentsInput, TransactionUpdateWithoutAttachmentsInput>, TransactionUncheckedUpdateWithoutAttachmentsInput>
  }

  export type CurrencyCreateNestedOneWithoutExchangeRatesInput = {
    create?: XOR<CurrencyCreateWithoutExchangeRatesInput, CurrencyUncheckedCreateWithoutExchangeRatesInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutExchangeRatesInput
    connect?: CurrencyWhereUniqueInput
  }

  export type CurrencyUpdateOneRequiredWithoutExchangeRatesNestedInput = {
    create?: XOR<CurrencyCreateWithoutExchangeRatesInput, CurrencyUncheckedCreateWithoutExchangeRatesInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutExchangeRatesInput
    upsert?: CurrencyUpsertWithoutExchangeRatesInput
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutExchangeRatesInput, CurrencyUpdateWithoutExchangeRatesInput>, CurrencyUncheckedUpdateWithoutExchangeRatesInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BookCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutBookInput
    categories?: CategoryCreateNestedManyWithoutBookInput
    members?: MemberCreateNestedManyWithoutBookInput
    budgets?: BudgetCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutBookInput
    categories?: CategoryUncheckedCreateNestedManyWithoutBookInput
    members?: MemberUncheckedCreateNestedManyWithoutBookInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookCreateManyUserInputEnvelope = {
    data: BookCreateManyUserInput | BookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettingCreateWithoutUserInput = {
    id?: string
    theme?: string
    locale?: string | null
    notificationEnabled?: boolean
    currency?: CurrencyCreateNestedOneWithoutSettingsInput
  }

  export type SettingUncheckedCreateWithoutUserInput = {
    id?: string
    theme?: string
    currencyCode?: string | null
    locale?: string | null
    notificationEnabled?: boolean
  }

  export type SettingCreateOrConnectWithoutUserInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
  }

  export type SettingCreateManyUserInputEnvelope = {
    data: SettingCreateManyUserInput | SettingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MemberCreateWithoutUserInput = {
    id?: string
    name: string
    role: $Enums.Role
    book: BookCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateWithoutUserInput = {
    id?: string
    bookId: string
    name: string
    role: $Enums.Role
  }

  export type MemberCreateOrConnectWithoutUserInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberCreateManyUserInputEnvelope = {
    data: MemberCreateManyUserInput | MemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
  }

  export type BookUpdateManyWithWhereWithoutUserInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutUserInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: UuidFilter<"Book"> | string
    userId?: UuidFilter<"Book"> | string
    name?: StringFilter<"Book"> | string
    description?: StringNullableFilter<"Book"> | string | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
  }

  export type SettingUpsertWithWhereUniqueWithoutUserInput = {
    where: SettingWhereUniqueInput
    update: XOR<SettingUpdateWithoutUserInput, SettingUncheckedUpdateWithoutUserInput>
    create: XOR<SettingCreateWithoutUserInput, SettingUncheckedCreateWithoutUserInput>
  }

  export type SettingUpdateWithWhereUniqueWithoutUserInput = {
    where: SettingWhereUniqueInput
    data: XOR<SettingUpdateWithoutUserInput, SettingUncheckedUpdateWithoutUserInput>
  }

  export type SettingUpdateManyWithWhereWithoutUserInput = {
    where: SettingScalarWhereInput
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyWithoutUserInput>
  }

  export type SettingScalarWhereInput = {
    AND?: SettingScalarWhereInput | SettingScalarWhereInput[]
    OR?: SettingScalarWhereInput[]
    NOT?: SettingScalarWhereInput | SettingScalarWhereInput[]
    id?: UuidFilter<"Setting"> | string
    userId?: UuidFilter<"Setting"> | string
    theme?: StringFilter<"Setting"> | string
    currencyCode?: StringNullableFilter<"Setting"> | string | null
    locale?: StringNullableFilter<"Setting"> | string | null
    notificationEnabled?: BoolFilter<"Setting"> | boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutUserInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutUserInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
  }

  export type MemberUpdateManyWithWhereWithoutUserInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutUserInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: UuidFilter<"Member"> | string
    bookId?: UuidFilter<"Member"> | string
    userId?: UuidFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    role?: EnumRoleFilter<"Member"> | $Enums.Role
  }

  export type UserCreateWithoutBooksInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
    settings?: SettingCreateNestedManyWithoutUserInput
    Member?: MemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBooksInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
    Member?: MemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
  }

  export type AccountCreateWithoutBookInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    currency: CurrencyCreateNestedOneWithoutAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutBookInput = {
    id?: string
    name: string
    type: string
    currencyCode: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutBookInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutBookInput, AccountUncheckedCreateWithoutBookInput>
  }

  export type AccountCreateManyBookInputEnvelope = {
    data: AccountCreateManyBookInput | AccountCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutBookInput = {
    id?: string
    name: string
    type: string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBookInput = {
    id?: string
    name: string
    type: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBookInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBookInput, CategoryUncheckedCreateWithoutBookInput>
  }

  export type CategoryCreateManyBookInputEnvelope = {
    data: CategoryCreateManyBookInput | CategoryCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type MemberCreateWithoutBookInput = {
    id?: string
    name: string
    role: $Enums.Role
    user: UserCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutBookInput = {
    id?: string
    userId: string
    name: string
    role: $Enums.Role
  }

  export type MemberCreateOrConnectWithoutBookInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput>
  }

  export type MemberCreateManyBookInputEnvelope = {
    data: MemberCreateManyBookInput | MemberCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutBookInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
    category: CategoryCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutBookInput = {
    id?: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type BudgetCreateOrConnectWithoutBookInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutBookInput, BudgetUncheckedCreateWithoutBookInput>
  }

  export type BudgetCreateManyBookInputEnvelope = {
    data: BudgetCreateManyBookInput | BudgetCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBooksInput = {
    update: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
  }

  export type UserUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
    settings?: SettingUpdateManyWithoutUserNestedInput
    Member?: MemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
    Member?: MemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountUpsertWithWhereUniqueWithoutBookInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutBookInput, AccountUncheckedUpdateWithoutBookInput>
    create: XOR<AccountCreateWithoutBookInput, AccountUncheckedCreateWithoutBookInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutBookInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutBookInput, AccountUncheckedUpdateWithoutBookInput>
  }

  export type AccountUpdateManyWithWhereWithoutBookInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutBookInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: UuidFilter<"Account"> | string
    bookId?: UuidFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    currencyCode?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutBookInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutBookInput, CategoryUncheckedUpdateWithoutBookInput>
    create: XOR<CategoryCreateWithoutBookInput, CategoryUncheckedCreateWithoutBookInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutBookInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutBookInput, CategoryUncheckedUpdateWithoutBookInput>
  }

  export type CategoryUpdateManyWithWhereWithoutBookInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutBookInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: UuidFilter<"Category"> | string
    bookId?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    type?: StringFilter<"Category"> | string
  }

  export type MemberUpsertWithWhereUniqueWithoutBookInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutBookInput, MemberUncheckedUpdateWithoutBookInput>
    create: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutBookInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutBookInput, MemberUncheckedUpdateWithoutBookInput>
  }

  export type MemberUpdateManyWithWhereWithoutBookInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutBookInput>
  }

  export type BudgetUpsertWithWhereUniqueWithoutBookInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutBookInput, BudgetUncheckedUpdateWithoutBookInput>
    create: XOR<BudgetCreateWithoutBookInput, BudgetUncheckedCreateWithoutBookInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutBookInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutBookInput, BudgetUncheckedUpdateWithoutBookInput>
  }

  export type BudgetUpdateManyWithWhereWithoutBookInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutBookInput>
  }

  export type BudgetScalarWhereInput = {
    AND?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    OR?: BudgetScalarWhereInput[]
    NOT?: BudgetScalarWhereInput | BudgetScalarWhereInput[]
    id?: UuidFilter<"Budget"> | string
    bookId?: UuidFilter<"Budget"> | string
    categoryId?: UuidFilter<"Budget"> | string
    amount?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    period?: StringFilter<"Budget"> | string
    startDate?: DateTimeFilter<"Budget"> | Date | string
    endDate?: DateTimeNullableFilter<"Budget"> | Date | string | null
  }

  export type AccountCreateWithoutCurrencyInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutAccountsInput
    transactions?: TransactionCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCurrencyInput = {
    id?: string
    bookId: string
    name: string
    type: string
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCurrencyInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCurrencyInput, AccountUncheckedCreateWithoutCurrencyInput>
  }

  export type AccountCreateManyCurrencyInputEnvelope = {
    data: AccountCreateManyCurrencyInput | AccountCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type SettingCreateWithoutCurrencyInput = {
    id?: string
    theme?: string
    locale?: string | null
    notificationEnabled?: boolean
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type SettingUncheckedCreateWithoutCurrencyInput = {
    id?: string
    userId: string
    theme?: string
    locale?: string | null
    notificationEnabled?: boolean
  }

  export type SettingCreateOrConnectWithoutCurrencyInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutCurrencyInput, SettingUncheckedCreateWithoutCurrencyInput>
  }

  export type SettingCreateManyCurrencyInputEnvelope = {
    data: SettingCreateManyCurrencyInput | SettingCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type ExchangeRateCreateWithoutCurrencyInput = {
    id?: string
    rateToBase: Decimal | DecimalJsLike | number | string
    validFrom: Date | string
    validTo?: Date | string | null
    source: string
    createdAt?: Date | string
  }

  export type ExchangeRateUncheckedCreateWithoutCurrencyInput = {
    id?: string
    rateToBase: Decimal | DecimalJsLike | number | string
    validFrom: Date | string
    validTo?: Date | string | null
    source: string
    createdAt?: Date | string
  }

  export type ExchangeRateCreateOrConnectWithoutCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    create: XOR<ExchangeRateCreateWithoutCurrencyInput, ExchangeRateUncheckedCreateWithoutCurrencyInput>
  }

  export type ExchangeRateCreateManyCurrencyInputEnvelope = {
    data: ExchangeRateCreateManyCurrencyInput | ExchangeRateCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutCurrencyInput, AccountUncheckedUpdateWithoutCurrencyInput>
    create: XOR<AccountCreateWithoutCurrencyInput, AccountUncheckedCreateWithoutCurrencyInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutCurrencyInput, AccountUncheckedUpdateWithoutCurrencyInput>
  }

  export type AccountUpdateManyWithWhereWithoutCurrencyInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type SettingUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: SettingWhereUniqueInput
    update: XOR<SettingUpdateWithoutCurrencyInput, SettingUncheckedUpdateWithoutCurrencyInput>
    create: XOR<SettingCreateWithoutCurrencyInput, SettingUncheckedCreateWithoutCurrencyInput>
  }

  export type SettingUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: SettingWhereUniqueInput
    data: XOR<SettingUpdateWithoutCurrencyInput, SettingUncheckedUpdateWithoutCurrencyInput>
  }

  export type SettingUpdateManyWithWhereWithoutCurrencyInput = {
    where: SettingScalarWhereInput
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type ExchangeRateUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    update: XOR<ExchangeRateUpdateWithoutCurrencyInput, ExchangeRateUncheckedUpdateWithoutCurrencyInput>
    create: XOR<ExchangeRateCreateWithoutCurrencyInput, ExchangeRateUncheckedCreateWithoutCurrencyInput>
  }

  export type ExchangeRateUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: ExchangeRateWhereUniqueInput
    data: XOR<ExchangeRateUpdateWithoutCurrencyInput, ExchangeRateUncheckedUpdateWithoutCurrencyInput>
  }

  export type ExchangeRateUpdateManyWithWhereWithoutCurrencyInput = {
    where: ExchangeRateScalarWhereInput
    data: XOR<ExchangeRateUpdateManyMutationInput, ExchangeRateUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type ExchangeRateScalarWhereInput = {
    AND?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
    OR?: ExchangeRateScalarWhereInput[]
    NOT?: ExchangeRateScalarWhereInput | ExchangeRateScalarWhereInput[]
    id?: UuidFilter<"ExchangeRate"> | string
    currencyCode?: StringFilter<"ExchangeRate"> | string
    rateToBase?: DecimalFilter<"ExchangeRate"> | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFilter<"ExchangeRate"> | Date | string
    validTo?: DateTimeNullableFilter<"ExchangeRate"> | Date | string | null
    source?: StringFilter<"ExchangeRate"> | string
    createdAt?: DateTimeFilter<"ExchangeRate"> | Date | string
  }

  export type BookCreateWithoutAccountsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    categories?: CategoryCreateNestedManyWithoutBookInput
    members?: MemberCreateNestedManyWithoutBookInput
    budgets?: BudgetCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAccountsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutBookInput
    members?: MemberUncheckedCreateNestedManyWithoutBookInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAccountsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAccountsInput, BookUncheckedCreateWithoutAccountsInput>
  }

  export type CurrencyCreateWithoutAccountsInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    settings?: SettingCreateNestedManyWithoutCurrencyInput
    exchangeRates?: ExchangeRateCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutAccountsInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    settings?: SettingUncheckedCreateNestedManyWithoutCurrencyInput
    exchangeRates?: ExchangeRateUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutAccountsInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutAccountsInput, CurrencyUncheckedCreateWithoutAccountsInput>
  }

  export type TransactionCreateWithoutAccountInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutTransactionsInput
    attachments?: AttachmentCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutAccountInput = {
    id?: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionCreateManyAccountInputEnvelope = {
    data: TransactionCreateManyAccountInput | TransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithoutAccountsInput = {
    update: XOR<BookUpdateWithoutAccountsInput, BookUncheckedUpdateWithoutAccountsInput>
    create: XOR<BookCreateWithoutAccountsInput, BookUncheckedCreateWithoutAccountsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutAccountsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutAccountsInput, BookUncheckedUpdateWithoutAccountsInput>
  }

  export type BookUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    categories?: CategoryUpdateManyWithoutBookNestedInput
    members?: MemberUpdateManyWithoutBookNestedInput
    budgets?: BudgetUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutBookNestedInput
    members?: MemberUncheckedUpdateManyWithoutBookNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutBookNestedInput
  }

  export type CurrencyUpsertWithoutAccountsInput = {
    update: XOR<CurrencyUpdateWithoutAccountsInput, CurrencyUncheckedUpdateWithoutAccountsInput>
    create: XOR<CurrencyCreateWithoutAccountsInput, CurrencyUncheckedCreateWithoutAccountsInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutAccountsInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutAccountsInput, CurrencyUncheckedUpdateWithoutAccountsInput>
  }

  export type CurrencyUpdateWithoutAccountsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settings?: SettingUpdateManyWithoutCurrencyNestedInput
    exchangeRates?: ExchangeRateUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutAccountsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settings?: SettingUncheckedUpdateManyWithoutCurrencyNestedInput
    exchangeRates?: ExchangeRateUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: UuidFilter<"Transaction"> | string
    accountId?: UuidFilter<"Transaction"> | string
    categoryId?: UuidFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFilter<"Transaction"> | Date | string
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type BookCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    accounts?: AccountCreateNestedManyWithoutBookInput
    members?: MemberCreateNestedManyWithoutBookInput
    budgets?: BudgetCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCategoriesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutBookInput
    members?: MemberUncheckedCreateNestedManyWithoutBookInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCategoriesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCategoriesInput, BookUncheckedCreateWithoutCategoriesInput>
  }

  export type TransactionCreateWithoutCategoryInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutTransactionsInput
    attachments?: AttachmentCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: string
    accountId: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BudgetCreateWithoutCategoryInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
    book: BookCreateNestedOneWithoutBudgetsInput
  }

  export type BudgetUncheckedCreateWithoutCategoryInput = {
    id?: string
    bookId: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type BudgetCreateOrConnectWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    create: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput>
  }

  export type BudgetCreateManyCategoryInputEnvelope = {
    data: BudgetCreateManyCategoryInput | BudgetCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithoutCategoriesInput = {
    update: XOR<BookUpdateWithoutCategoriesInput, BookUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BookCreateWithoutCategoriesInput, BookUncheckedCreateWithoutCategoriesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutCategoriesInput, BookUncheckedUpdateWithoutCategoriesInput>
  }

  export type BookUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    accounts?: AccountUpdateManyWithoutBookNestedInput
    members?: MemberUpdateManyWithoutBookNestedInput
    budgets?: BudgetUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutBookNestedInput
    members?: MemberUncheckedUpdateManyWithoutBookNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutBookNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BudgetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    update: XOR<BudgetUpdateWithoutCategoryInput, BudgetUncheckedUpdateWithoutCategoryInput>
    create: XOR<BudgetCreateWithoutCategoryInput, BudgetUncheckedCreateWithoutCategoryInput>
  }

  export type BudgetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BudgetWhereUniqueInput
    data: XOR<BudgetUpdateWithoutCategoryInput, BudgetUncheckedUpdateWithoutCategoryInput>
  }

  export type BudgetUpdateManyWithWhereWithoutCategoryInput = {
    where: BudgetScalarWhereInput
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AccountCreateWithoutTransactionsInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutAccountsInput
    currency: CurrencyCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    bookId: string
    name: string
    type: string
    currencyCode: string
    createdAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutTransactionsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryCreateWithoutTransactionsInput = {
    id?: string
    name: string
    type: string
    book: BookCreateNestedOneWithoutCategoriesInput
    budgets?: BudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: string
    bookId: string
    name: string
    type: string
    budgets?: BudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type AttachmentCreateWithoutTransactionInput = {
    id?: string
    filePath: string
    createdAt?: Date | string
  }

  export type AttachmentUncheckedCreateWithoutTransactionInput = {
    id?: string
    filePath: string
    createdAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutTransactionInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutTransactionInput, AttachmentUncheckedCreateWithoutTransactionInput>
  }

  export type AttachmentCreateManyTransactionInputEnvelope = {
    data: AttachmentCreateManyTransactionInput | AttachmentCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutTransactionsInput = {
    update: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutAccountsNestedInput
    currency?: CurrencyUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    book?: BookUpdateOneRequiredWithoutCategoriesNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type AttachmentUpsertWithWhereUniqueWithoutTransactionInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutTransactionInput, AttachmentUncheckedUpdateWithoutTransactionInput>
    create: XOR<AttachmentCreateWithoutTransactionInput, AttachmentUncheckedCreateWithoutTransactionInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutTransactionInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutTransactionInput, AttachmentUncheckedUpdateWithoutTransactionInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutTransactionInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutTransactionInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: UuidFilter<"Attachment"> | string
    transactionId?: UuidFilter<"Attachment"> | string
    filePath?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
  }

  export type BookCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    accounts?: AccountCreateNestedManyWithoutBookInput
    categories?: CategoryCreateNestedManyWithoutBookInput
    budgets?: BudgetCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutMembersInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutBookInput
    categories?: CategoryUncheckedCreateNestedManyWithoutBookInput
    budgets?: BudgetUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutMembersInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutMembersInput, BookUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMemberInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
    books?: BookCreateNestedManyWithoutUserInput
    settings?: SettingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemberInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
  }

  export type BookUpsertWithoutMembersInput = {
    update: XOR<BookUpdateWithoutMembersInput, BookUncheckedUpdateWithoutMembersInput>
    create: XOR<BookCreateWithoutMembersInput, BookUncheckedCreateWithoutMembersInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutMembersInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutMembersInput, BookUncheckedUpdateWithoutMembersInput>
  }

  export type BookUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    accounts?: AccountUpdateManyWithoutBookNestedInput
    categories?: CategoryUpdateManyWithoutBookNestedInput
    budgets?: BudgetUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutBookNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutBookNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserUpsertWithoutMemberInput = {
    update: XOR<UserUpdateWithoutMemberInput, UserUncheckedUpdateWithoutMemberInput>
    create: XOR<UserCreateWithoutMemberInput, UserUncheckedCreateWithoutMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemberInput, UserUncheckedUpdateWithoutMemberInput>
  }

  export type UserUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
    books?: BookUpdateManyWithoutUserNestedInput
    settings?: SettingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookCreateWithoutBudgetsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    accounts?: AccountCreateNestedManyWithoutBookInput
    categories?: CategoryCreateNestedManyWithoutBookInput
    members?: MemberCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutBudgetsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutBookInput
    categories?: CategoryUncheckedCreateNestedManyWithoutBookInput
    members?: MemberUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutBudgetsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBudgetsInput, BookUncheckedCreateWithoutBudgetsInput>
  }

  export type CategoryCreateWithoutBudgetsInput = {
    id?: string
    name: string
    type: string
    book: BookCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBudgetsInput = {
    id?: string
    bookId: string
    name: string
    type: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBudgetsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
  }

  export type BookUpsertWithoutBudgetsInput = {
    update: XOR<BookUpdateWithoutBudgetsInput, BookUncheckedUpdateWithoutBudgetsInput>
    create: XOR<BookCreateWithoutBudgetsInput, BookUncheckedCreateWithoutBudgetsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutBudgetsInput, BookUncheckedUpdateWithoutBudgetsInput>
  }

  export type BookUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    accounts?: AccountUpdateManyWithoutBookNestedInput
    categories?: CategoryUpdateManyWithoutBookNestedInput
    members?: MemberUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutBookNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutBookNestedInput
    members?: MemberUncheckedUpdateManyWithoutBookNestedInput
  }

  export type CategoryUpsertWithoutBudgetsInput = {
    update: XOR<CategoryUpdateWithoutBudgetsInput, CategoryUncheckedUpdateWithoutBudgetsInput>
    create: XOR<CategoryCreateWithoutBudgetsInput, CategoryUncheckedCreateWithoutBudgetsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBudgetsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBudgetsInput, CategoryUncheckedUpdateWithoutBudgetsInput>
  }

  export type CategoryUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    book?: BookUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBudgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
    books?: BookCreateNestedManyWithoutUserInput
    Member?: MemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    role?: UserCreateroleInput | $Enums.Role[]
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    Member?: MemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type CurrencyCreateWithoutSettingsInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    accounts?: AccountCreateNestedManyWithoutCurrencyInput
    exchangeRates?: ExchangeRateCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutSettingsInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    accounts?: AccountUncheckedCreateNestedManyWithoutCurrencyInput
    exchangeRates?: ExchangeRateUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutSettingsInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutSettingsInput, CurrencyUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
    books?: BookUpdateManyWithoutUserNestedInput
    Member?: MemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | $Enums.Role[]
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    Member?: MemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CurrencyUpsertWithoutSettingsInput = {
    update: XOR<CurrencyUpdateWithoutSettingsInput, CurrencyUncheckedUpdateWithoutSettingsInput>
    create: XOR<CurrencyCreateWithoutSettingsInput, CurrencyUncheckedCreateWithoutSettingsInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutSettingsInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutSettingsInput, CurrencyUncheckedUpdateWithoutSettingsInput>
  }

  export type CurrencyUpdateWithoutSettingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accounts?: AccountUpdateManyWithoutCurrencyNestedInput
    exchangeRates?: ExchangeRateUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutSettingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accounts?: AccountUncheckedUpdateManyWithoutCurrencyNestedInput
    exchangeRates?: ExchangeRateUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type TransactionCreateWithoutAttachmentsInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutTransactionsInput
    category: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    accountId: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutAttachmentsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAttachmentsInput, TransactionUncheckedCreateWithoutAttachmentsInput>
  }

  export type TransactionUpsertWithoutAttachmentsInput = {
    update: XOR<TransactionUpdateWithoutAttachmentsInput, TransactionUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TransactionCreateWithoutAttachmentsInput, TransactionUncheckedCreateWithoutAttachmentsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutAttachmentsInput, TransactionUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TransactionUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyCreateWithoutExchangeRatesInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    accounts?: AccountCreateNestedManyWithoutCurrencyInput
    settings?: SettingCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateWithoutExchangeRatesInput = {
    code: string
    name: string
    symbol: string
    exchangeRate: Decimal | DecimalJsLike | number | string
    accounts?: AccountUncheckedCreateNestedManyWithoutCurrencyInput
    settings?: SettingUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyCreateOrConnectWithoutExchangeRatesInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutExchangeRatesInput, CurrencyUncheckedCreateWithoutExchangeRatesInput>
  }

  export type CurrencyUpsertWithoutExchangeRatesInput = {
    update: XOR<CurrencyUpdateWithoutExchangeRatesInput, CurrencyUncheckedUpdateWithoutExchangeRatesInput>
    create: XOR<CurrencyCreateWithoutExchangeRatesInput, CurrencyUncheckedCreateWithoutExchangeRatesInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutExchangeRatesInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutExchangeRatesInput, CurrencyUncheckedUpdateWithoutExchangeRatesInput>
  }

  export type CurrencyUpdateWithoutExchangeRatesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accounts?: AccountUpdateManyWithoutCurrencyNestedInput
    settings?: SettingUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateWithoutExchangeRatesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    exchangeRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    accounts?: AccountUncheckedUpdateManyWithoutCurrencyNestedInput
    settings?: SettingUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type BookCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type SettingCreateManyUserInput = {
    id?: string
    theme?: string
    currencyCode?: string | null
    locale?: string | null
    notificationEnabled?: boolean
  }

  export type MemberCreateManyUserInput = {
    id?: string
    bookId: string
    name: string
    role: $Enums.Role
  }

  export type BookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutBookNestedInput
    categories?: CategoryUpdateManyWithoutBookNestedInput
    members?: MemberUpdateManyWithoutBookNestedInput
    budgets?: BudgetUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutBookNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutBookNestedInput
    members?: MemberUncheckedUpdateManyWithoutBookNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
    currency?: CurrencyUpdateOneWithoutSettingsNestedInput
  }

  export type SettingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    book?: BookUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AccountCreateManyBookInput = {
    id?: string
    name: string
    type: string
    currencyCode: string
    createdAt?: Date | string
  }

  export type CategoryCreateManyBookInput = {
    id?: string
    name: string
    type: string
  }

  export type MemberCreateManyBookInput = {
    id?: string
    userId: string
    name: string
    role: $Enums.Role
  }

  export type BudgetCreateManyBookInput = {
    id?: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type AccountUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: CurrencyUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    budgets?: BudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneRequiredWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MemberUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type BudgetUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BudgetUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateManyCurrencyInput = {
    id?: string
    bookId: string
    name: string
    type: string
    createdAt?: Date | string
  }

  export type SettingCreateManyCurrencyInput = {
    id?: string
    userId: string
    theme?: string
    locale?: string | null
    notificationEnabled?: boolean
  }

  export type ExchangeRateCreateManyCurrencyInput = {
    id?: string
    rateToBase: Decimal | DecimalJsLike | number | string
    validFrom: Date | string
    validTo?: Date | string | null
    source: string
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SettingUncheckedUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingUncheckedUpdateManyWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    notificationEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExchangeRateUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rateToBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUncheckedUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rateToBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateUncheckedUpdateManyWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rateToBase?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyAccountInput = {
    id?: string
    categoryId: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
    attachments?: AttachmentUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCategoryInput = {
    id?: string
    accountId: string
    amount: Decimal | DecimalJsLike | number | string
    transactionAt: Date | string
    description?: string | null
    createdAt?: Date | string
  }

  export type BudgetCreateManyCategoryInput = {
    id?: string
    bookId: string
    amount: Decimal | DecimalJsLike | number | string
    period: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type TransactionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput
    attachments?: AttachmentUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BudgetUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: BookUpdateOneRequiredWithoutBudgetsNestedInput
  }

  export type BudgetUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BudgetUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    period?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttachmentCreateManyTransactionInput = {
    id?: string
    filePath: string
    createdAt?: Date | string
  }

  export type AttachmentUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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