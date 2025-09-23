
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
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model CollectionMineral
 * 
 */
export type CollectionMineral = $Result.DefaultSelection<Prisma.$CollectionMineralPayload>
/**
 * Model MineralPassed
 * 
 */
export type MineralPassed = $Result.DefaultSelection<Prisma.$MineralPassedPayload>
/**
 * Model Mineral
 * 
 */
export type Mineral = $Result.DefaultSelection<Prisma.$MineralPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model Statuses
 * 
 */
export type Statuses = $Result.DefaultSelection<Prisma.$StatusesPayload>
/**
 * Model MineralMap
 * 
 */
export type MineralMap = $Result.DefaultSelection<Prisma.$MineralMapPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionMineral`: Exposes CRUD operations for the **CollectionMineral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionMinerals
    * const collectionMinerals = await prisma.collectionMineral.findMany()
    * ```
    */
  get collectionMineral(): Prisma.CollectionMineralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mineralPassed`: Exposes CRUD operations for the **MineralPassed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MineralPasseds
    * const mineralPasseds = await prisma.mineralPassed.findMany()
    * ```
    */
  get mineralPassed(): Prisma.MineralPassedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mineral`: Exposes CRUD operations for the **Mineral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Minerals
    * const minerals = await prisma.mineral.findMany()
    * ```
    */
  get mineral(): Prisma.MineralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statuses`: Exposes CRUD operations for the **Statuses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.statuses.findMany()
    * ```
    */
  get statuses(): Prisma.StatusesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mineralMap`: Exposes CRUD operations for the **MineralMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MineralMaps
    * const mineralMaps = await prisma.mineralMap.findMany()
    * ```
    */
  get mineralMap(): Prisma.MineralMapDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    Status: 'Status',
    Profile: 'Profile',
    Collection: 'Collection',
    CollectionMineral: 'CollectionMineral',
    MineralPassed: 'MineralPassed',
    Mineral: 'Mineral',
    Question: 'Question',
    Answer: 'Answer',
    Statuses: 'Statuses',
    MineralMap: 'MineralMap'
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
      modelProps: "user" | "status" | "profile" | "collection" | "collectionMineral" | "mineralPassed" | "mineral" | "question" | "answer" | "statuses" | "mineralMap"
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
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      CollectionMineral: {
        payload: Prisma.$CollectionMineralPayload<ExtArgs>
        fields: Prisma.CollectionMineralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionMineralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionMineralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>
          }
          findFirst: {
            args: Prisma.CollectionMineralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionMineralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>
          }
          findMany: {
            args: Prisma.CollectionMineralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>[]
          }
          create: {
            args: Prisma.CollectionMineralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>
          }
          createMany: {
            args: Prisma.CollectionMineralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionMineralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>[]
          }
          delete: {
            args: Prisma.CollectionMineralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>
          }
          update: {
            args: Prisma.CollectionMineralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>
          }
          deleteMany: {
            args: Prisma.CollectionMineralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionMineralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollectionMineralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>[]
          }
          upsert: {
            args: Prisma.CollectionMineralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionMineralPayload>
          }
          aggregate: {
            args: Prisma.CollectionMineralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionMineral>
          }
          groupBy: {
            args: Prisma.CollectionMineralGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionMineralGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionMineralCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionMineralCountAggregateOutputType> | number
          }
        }
      }
      MineralPassed: {
        payload: Prisma.$MineralPassedPayload<ExtArgs>
        fields: Prisma.MineralPassedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MineralPassedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MineralPassedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>
          }
          findFirst: {
            args: Prisma.MineralPassedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MineralPassedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>
          }
          findMany: {
            args: Prisma.MineralPassedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>[]
          }
          create: {
            args: Prisma.MineralPassedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>
          }
          createMany: {
            args: Prisma.MineralPassedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MineralPassedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>[]
          }
          delete: {
            args: Prisma.MineralPassedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>
          }
          update: {
            args: Prisma.MineralPassedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>
          }
          deleteMany: {
            args: Prisma.MineralPassedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MineralPassedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MineralPassedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>[]
          }
          upsert: {
            args: Prisma.MineralPassedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPassedPayload>
          }
          aggregate: {
            args: Prisma.MineralPassedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMineralPassed>
          }
          groupBy: {
            args: Prisma.MineralPassedGroupByArgs<ExtArgs>
            result: $Utils.Optional<MineralPassedGroupByOutputType>[]
          }
          count: {
            args: Prisma.MineralPassedCountArgs<ExtArgs>
            result: $Utils.Optional<MineralPassedCountAggregateOutputType> | number
          }
        }
      }
      Mineral: {
        payload: Prisma.$MineralPayload<ExtArgs>
        fields: Prisma.MineralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MineralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MineralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>
          }
          findFirst: {
            args: Prisma.MineralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MineralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>
          }
          findMany: {
            args: Prisma.MineralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>[]
          }
          create: {
            args: Prisma.MineralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>
          }
          createMany: {
            args: Prisma.MineralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MineralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>[]
          }
          delete: {
            args: Prisma.MineralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>
          }
          update: {
            args: Prisma.MineralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>
          }
          deleteMany: {
            args: Prisma.MineralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MineralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MineralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>[]
          }
          upsert: {
            args: Prisma.MineralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralPayload>
          }
          aggregate: {
            args: Prisma.MineralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMineral>
          }
          groupBy: {
            args: Prisma.MineralGroupByArgs<ExtArgs>
            result: $Utils.Optional<MineralGroupByOutputType>[]
          }
          count: {
            args: Prisma.MineralCountArgs<ExtArgs>
            result: $Utils.Optional<MineralCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      Statuses: {
        payload: Prisma.$StatusesPayload<ExtArgs>
        fields: Prisma.StatusesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>
          }
          findFirst: {
            args: Prisma.StatusesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>
          }
          findMany: {
            args: Prisma.StatusesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>[]
          }
          create: {
            args: Prisma.StatusesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>
          }
          createMany: {
            args: Prisma.StatusesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>[]
          }
          delete: {
            args: Prisma.StatusesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>
          }
          update: {
            args: Prisma.StatusesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>
          }
          deleteMany: {
            args: Prisma.StatusesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>[]
          }
          upsert: {
            args: Prisma.StatusesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusesPayload>
          }
          aggregate: {
            args: Prisma.StatusesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatuses>
          }
          groupBy: {
            args: Prisma.StatusesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusesGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusesCountArgs<ExtArgs>
            result: $Utils.Optional<StatusesCountAggregateOutputType> | number
          }
        }
      }
      MineralMap: {
        payload: Prisma.$MineralMapPayload<ExtArgs>
        fields: Prisma.MineralMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MineralMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MineralMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>
          }
          findFirst: {
            args: Prisma.MineralMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MineralMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>
          }
          findMany: {
            args: Prisma.MineralMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>[]
          }
          create: {
            args: Prisma.MineralMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>
          }
          createMany: {
            args: Prisma.MineralMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MineralMapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>[]
          }
          delete: {
            args: Prisma.MineralMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>
          }
          update: {
            args: Prisma.MineralMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>
          }
          deleteMany: {
            args: Prisma.MineralMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MineralMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MineralMapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>[]
          }
          upsert: {
            args: Prisma.MineralMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MineralMapPayload>
          }
          aggregate: {
            args: Prisma.MineralMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMineralMap>
          }
          groupBy: {
            args: Prisma.MineralMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MineralMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.MineralMapCountArgs<ExtArgs>
            result: $Utils.Optional<MineralMapCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    status?: StatusOmit
    profile?: ProfileOmit
    collection?: CollectionOmit
    collectionMineral?: CollectionMineralOmit
    mineralPassed?: MineralPassedOmit
    mineral?: MineralOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    statuses?: StatusesOmit
    mineralMap?: MineralMapOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    mineralPassed: number
    collection: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mineralPassed?: boolean | UserCountOutputTypeCountMineralPassedArgs
    collection?: boolean | UserCountOutputTypeCountCollectionArgs
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
  export type UserCountOutputTypeCountMineralPassedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MineralPassedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Count Type MineralCountOutputType
   */

  export type MineralCountOutputType = {
    question: number
  }

  export type MineralCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | MineralCountOutputTypeCountQuestionArgs
  }

  // Custom InputTypes
  /**
   * MineralCountOutputType without action
   */
  export type MineralCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralCountOutputType
     */
    select?: MineralCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MineralCountOutputType without action
   */
  export type MineralCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
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
    total: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    total: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    total: number | null
    createAt: Date | null
    updateAr: Date | null
    isAdmin: boolean | null
    firstVisit: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    total: number | null
    createAt: Date | null
    updateAr: Date | null
    isAdmin: boolean | null
    firstVisit: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    total: number
    createAt: number
    updateAr: number
    isAdmin: number
    firstVisit: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    total?: true
    createAt?: true
    updateAr?: true
    isAdmin?: true
    firstVisit?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    total?: true
    createAt?: true
    updateAr?: true
    isAdmin?: true
    firstVisit?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    total?: true
    createAt?: true
    updateAr?: true
    isAdmin?: true
    firstVisit?: true
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
    name: string
    email: string
    password: string
    total: number
    createAt: Date
    updateAr: Date
    isAdmin: boolean
    firstVisit: boolean
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
    name?: boolean
    email?: boolean
    password?: boolean
    total?: boolean
    createAt?: boolean
    updateAr?: boolean
    isAdmin?: boolean
    firstVisit?: boolean
    mineralPassed?: boolean | User$mineralPassedArgs<ExtArgs>
    collection?: boolean | User$collectionArgs<ExtArgs>
    status?: boolean | User$statusArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    total?: boolean
    createAt?: boolean
    updateAr?: boolean
    isAdmin?: boolean
    firstVisit?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    total?: boolean
    createAt?: boolean
    updateAr?: boolean
    isAdmin?: boolean
    firstVisit?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    total?: boolean
    createAt?: boolean
    updateAr?: boolean
    isAdmin?: boolean
    firstVisit?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "total" | "createAt" | "updateAr" | "isAdmin" | "firstVisit", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mineralPassed?: boolean | User$mineralPassedArgs<ExtArgs>
    collection?: boolean | User$collectionArgs<ExtArgs>
    status?: boolean | User$statusArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mineralPassed: Prisma.$MineralPassedPayload<ExtArgs>[]
      collection: Prisma.$CollectionPayload<ExtArgs>[]
      status: Prisma.$StatusPayload<ExtArgs> | null
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      total: number
      createAt: Date
      updateAr: Date
      isAdmin: boolean
      firstVisit: boolean
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
    mineralPassed<T extends User$mineralPassedArgs<ExtArgs> = {}>(args?: Subset<T, User$mineralPassedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collection<T extends User$collectionArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    status<T extends User$statusArgs<ExtArgs> = {}>(args?: Subset<T, User$statusArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly total: FieldRef<"User", 'Int'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAr: FieldRef<"User", 'DateTime'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly firstVisit: FieldRef<"User", 'Boolean'>
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
   * User.mineralPassed
   */
  export type User$mineralPassedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    where?: MineralPassedWhereInput
    orderBy?: MineralPassedOrderByWithRelationInput | MineralPassedOrderByWithRelationInput[]
    cursor?: MineralPassedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MineralPassedScalarFieldEnum | MineralPassedScalarFieldEnum[]
  }

  /**
   * User.collection
   */
  export type User$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User.status
   */
  export type User$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    where?: StatusWhereInput
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
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
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StatusSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StatusMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: string | null
    userId: number | null
  }

  export type StatusMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: string | null
    userId: number | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    title: number
    price: number
    userId: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StatusSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StatusMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    userId?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    userId?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    userId?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: number
    title: string
    price: string
    userId: number
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    userId?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "price" | "userId", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: string
      userId: number
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
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
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Status model
   */
  interface StatusFieldRefs {
    readonly id: FieldRef<"Status", 'Int'>
    readonly title: FieldRef<"Status", 'String'>
    readonly price: FieldRef<"Status", 'String'>
    readonly userId: FieldRef<"Status", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status createManyAndReturn
   */
  export type StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status updateManyAndReturn
   */
  export type StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    avatar: string | null
    age: string | null
    profession: string | null
    bio: string | null
    phone: string | null
    telegram: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    avatar: string | null
    age: string | null
    profession: string | null
    bio: string | null
    phone: string | null
    telegram: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    avatar: number
    age: number
    profession: number
    bio: number
    phone: number
    telegram: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    avatar?: true
    age?: true
    profession?: true
    bio?: true
    phone?: true
    telegram?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    avatar?: true
    age?: true
    profession?: true
    bio?: true
    phone?: true
    telegram?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    avatar?: true
    age?: true
    profession?: true
    bio?: true
    phone?: true
    telegram?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    avatar: string
    age: string
    profession: string
    bio: string | null
    phone: string | null
    telegram: string | null
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar?: boolean
    age?: boolean
    profession?: boolean
    bio?: boolean
    phone?: boolean
    telegram?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar?: boolean
    age?: boolean
    profession?: boolean
    bio?: boolean
    phone?: boolean
    telegram?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar?: boolean
    age?: boolean
    profession?: boolean
    bio?: boolean
    phone?: boolean
    telegram?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    avatar?: boolean
    age?: boolean
    profession?: boolean
    bio?: boolean
    phone?: boolean
    telegram?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "avatar" | "age" | "profession" | "bio" | "phone" | "telegram" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      avatar: string
      age: string
      profession: string
      bio: string | null
      phone: string | null
      telegram: string | null
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly avatar: FieldRef<"Profile", 'String'>
    readonly age: FieldRef<"Profile", 'String'>
    readonly profession: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly telegram: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CollectionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    received: boolean | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    received: boolean | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    title: number
    image: number
    received: number
    createAt: number
    updateAt: number
    userId: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CollectionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    received?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    received?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    received?: true
    createAt?: true
    updateAt?: true
    userId?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: number
    title: string
    image: string
    received: boolean
    createAt: Date
    updateAt: Date
    userId: number
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    received?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    received?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    received?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    received?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "received" | "createAt" | "updateAt" | "userId", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string
      received: boolean
      createAt: Date
      updateAt: Date
      userId: number
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {CollectionUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'Int'>
    readonly title: FieldRef<"Collection", 'String'>
    readonly image: FieldRef<"Collection", 'String'>
    readonly received: FieldRef<"Collection", 'Boolean'>
    readonly createAt: FieldRef<"Collection", 'DateTime'>
    readonly updateAt: FieldRef<"Collection", 'DateTime'>
    readonly userId: FieldRef<"Collection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection updateManyAndReturn
   */
  export type CollectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model CollectionMineral
   */

  export type AggregateCollectionMineral = {
    _count: CollectionMineralCountAggregateOutputType | null
    _avg: CollectionMineralAvgAggregateOutputType | null
    _sum: CollectionMineralSumAggregateOutputType | null
    _min: CollectionMineralMinAggregateOutputType | null
    _max: CollectionMineralMaxAggregateOutputType | null
  }

  export type CollectionMineralAvgAggregateOutputType = {
    id: number | null
  }

  export type CollectionMineralSumAggregateOutputType = {
    id: number | null
  }

  export type CollectionMineralMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    received: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CollectionMineralMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    received: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CollectionMineralCountAggregateOutputType = {
    id: number
    title: number
    image: number
    received: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CollectionMineralAvgAggregateInputType = {
    id?: true
  }

  export type CollectionMineralSumAggregateInputType = {
    id?: true
  }

  export type CollectionMineralMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    received?: true
    createAt?: true
    updateAt?: true
  }

  export type CollectionMineralMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    received?: true
    createAt?: true
    updateAt?: true
  }

  export type CollectionMineralCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    received?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CollectionMineralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionMineral to aggregate.
     */
    where?: CollectionMineralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionMinerals to fetch.
     */
    orderBy?: CollectionMineralOrderByWithRelationInput | CollectionMineralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionMineralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionMinerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionMinerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionMinerals
    **/
    _count?: true | CollectionMineralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionMineralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionMineralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMineralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMineralMaxAggregateInputType
  }

  export type GetCollectionMineralAggregateType<T extends CollectionMineralAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionMineral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionMineral[P]>
      : GetScalarType<T[P], AggregateCollectionMineral[P]>
  }




  export type CollectionMineralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionMineralWhereInput
    orderBy?: CollectionMineralOrderByWithAggregationInput | CollectionMineralOrderByWithAggregationInput[]
    by: CollectionMineralScalarFieldEnum[] | CollectionMineralScalarFieldEnum
    having?: CollectionMineralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionMineralCountAggregateInputType | true
    _avg?: CollectionMineralAvgAggregateInputType
    _sum?: CollectionMineralSumAggregateInputType
    _min?: CollectionMineralMinAggregateInputType
    _max?: CollectionMineralMaxAggregateInputType
  }

  export type CollectionMineralGroupByOutputType = {
    id: number
    title: string
    image: string
    received: boolean
    createAt: Date
    updateAt: Date
    _count: CollectionMineralCountAggregateOutputType | null
    _avg: CollectionMineralAvgAggregateOutputType | null
    _sum: CollectionMineralSumAggregateOutputType | null
    _min: CollectionMineralMinAggregateOutputType | null
    _max: CollectionMineralMaxAggregateOutputType | null
  }

  type GetCollectionMineralGroupByPayload<T extends CollectionMineralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionMineralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionMineralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionMineralGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionMineralGroupByOutputType[P]>
        }
      >
    >


  export type CollectionMineralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    received?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["collectionMineral"]>

  export type CollectionMineralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    received?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["collectionMineral"]>

  export type CollectionMineralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    received?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["collectionMineral"]>

  export type CollectionMineralSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    received?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type CollectionMineralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "received" | "createAt" | "updateAt", ExtArgs["result"]["collectionMineral"]>

  export type $CollectionMineralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionMineral"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string
      received: boolean
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["collectionMineral"]>
    composites: {}
  }

  type CollectionMineralGetPayload<S extends boolean | null | undefined | CollectionMineralDefaultArgs> = $Result.GetResult<Prisma.$CollectionMineralPayload, S>

  type CollectionMineralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionMineralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionMineralCountAggregateInputType | true
    }

  export interface CollectionMineralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionMineral'], meta: { name: 'CollectionMineral' } }
    /**
     * Find zero or one CollectionMineral that matches the filter.
     * @param {CollectionMineralFindUniqueArgs} args - Arguments to find a CollectionMineral
     * @example
     * // Get one CollectionMineral
     * const collectionMineral = await prisma.collectionMineral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionMineralFindUniqueArgs>(args: SelectSubset<T, CollectionMineralFindUniqueArgs<ExtArgs>>): Prisma__CollectionMineralClient<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionMineral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionMineralFindUniqueOrThrowArgs} args - Arguments to find a CollectionMineral
     * @example
     * // Get one CollectionMineral
     * const collectionMineral = await prisma.collectionMineral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionMineralFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionMineralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionMineralClient<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionMineral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionMineralFindFirstArgs} args - Arguments to find a CollectionMineral
     * @example
     * // Get one CollectionMineral
     * const collectionMineral = await prisma.collectionMineral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionMineralFindFirstArgs>(args?: SelectSubset<T, CollectionMineralFindFirstArgs<ExtArgs>>): Prisma__CollectionMineralClient<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionMineral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionMineralFindFirstOrThrowArgs} args - Arguments to find a CollectionMineral
     * @example
     * // Get one CollectionMineral
     * const collectionMineral = await prisma.collectionMineral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionMineralFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionMineralFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionMineralClient<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionMinerals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionMineralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionMinerals
     * const collectionMinerals = await prisma.collectionMineral.findMany()
     * 
     * // Get first 10 CollectionMinerals
     * const collectionMinerals = await prisma.collectionMineral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionMineralWithIdOnly = await prisma.collectionMineral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionMineralFindManyArgs>(args?: SelectSubset<T, CollectionMineralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionMineral.
     * @param {CollectionMineralCreateArgs} args - Arguments to create a CollectionMineral.
     * @example
     * // Create one CollectionMineral
     * const CollectionMineral = await prisma.collectionMineral.create({
     *   data: {
     *     // ... data to create a CollectionMineral
     *   }
     * })
     * 
     */
    create<T extends CollectionMineralCreateArgs>(args: SelectSubset<T, CollectionMineralCreateArgs<ExtArgs>>): Prisma__CollectionMineralClient<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionMinerals.
     * @param {CollectionMineralCreateManyArgs} args - Arguments to create many CollectionMinerals.
     * @example
     * // Create many CollectionMinerals
     * const collectionMineral = await prisma.collectionMineral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionMineralCreateManyArgs>(args?: SelectSubset<T, CollectionMineralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollectionMinerals and returns the data saved in the database.
     * @param {CollectionMineralCreateManyAndReturnArgs} args - Arguments to create many CollectionMinerals.
     * @example
     * // Create many CollectionMinerals
     * const collectionMineral = await prisma.collectionMineral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollectionMinerals and only return the `id`
     * const collectionMineralWithIdOnly = await prisma.collectionMineral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionMineralCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionMineralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollectionMineral.
     * @param {CollectionMineralDeleteArgs} args - Arguments to delete one CollectionMineral.
     * @example
     * // Delete one CollectionMineral
     * const CollectionMineral = await prisma.collectionMineral.delete({
     *   where: {
     *     // ... filter to delete one CollectionMineral
     *   }
     * })
     * 
     */
    delete<T extends CollectionMineralDeleteArgs>(args: SelectSubset<T, CollectionMineralDeleteArgs<ExtArgs>>): Prisma__CollectionMineralClient<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionMineral.
     * @param {CollectionMineralUpdateArgs} args - Arguments to update one CollectionMineral.
     * @example
     * // Update one CollectionMineral
     * const collectionMineral = await prisma.collectionMineral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionMineralUpdateArgs>(args: SelectSubset<T, CollectionMineralUpdateArgs<ExtArgs>>): Prisma__CollectionMineralClient<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionMinerals.
     * @param {CollectionMineralDeleteManyArgs} args - Arguments to filter CollectionMinerals to delete.
     * @example
     * // Delete a few CollectionMinerals
     * const { count } = await prisma.collectionMineral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionMineralDeleteManyArgs>(args?: SelectSubset<T, CollectionMineralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionMinerals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionMineralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionMinerals
     * const collectionMineral = await prisma.collectionMineral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionMineralUpdateManyArgs>(args: SelectSubset<T, CollectionMineralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionMinerals and returns the data updated in the database.
     * @param {CollectionMineralUpdateManyAndReturnArgs} args - Arguments to update many CollectionMinerals.
     * @example
     * // Update many CollectionMinerals
     * const collectionMineral = await prisma.collectionMineral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollectionMinerals and only return the `id`
     * const collectionMineralWithIdOnly = await prisma.collectionMineral.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollectionMineralUpdateManyAndReturnArgs>(args: SelectSubset<T, CollectionMineralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollectionMineral.
     * @param {CollectionMineralUpsertArgs} args - Arguments to update or create a CollectionMineral.
     * @example
     * // Update or create a CollectionMineral
     * const collectionMineral = await prisma.collectionMineral.upsert({
     *   create: {
     *     // ... data to create a CollectionMineral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionMineral we want to update
     *   }
     * })
     */
    upsert<T extends CollectionMineralUpsertArgs>(args: SelectSubset<T, CollectionMineralUpsertArgs<ExtArgs>>): Prisma__CollectionMineralClient<$Result.GetResult<Prisma.$CollectionMineralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollectionMinerals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionMineralCountArgs} args - Arguments to filter CollectionMinerals to count.
     * @example
     * // Count the number of CollectionMinerals
     * const count = await prisma.collectionMineral.count({
     *   where: {
     *     // ... the filter for the CollectionMinerals we want to count
     *   }
     * })
    **/
    count<T extends CollectionMineralCountArgs>(
      args?: Subset<T, CollectionMineralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionMineralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionMineral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionMineralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionMineralAggregateArgs>(args: Subset<T, CollectionMineralAggregateArgs>): Prisma.PrismaPromise<GetCollectionMineralAggregateType<T>>

    /**
     * Group by CollectionMineral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionMineralGroupByArgs} args - Group by arguments.
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
      T extends CollectionMineralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionMineralGroupByArgs['orderBy'] }
        : { orderBy?: CollectionMineralGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionMineralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionMineralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionMineral model
   */
  readonly fields: CollectionMineralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionMineral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionMineralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CollectionMineral model
   */
  interface CollectionMineralFieldRefs {
    readonly id: FieldRef<"CollectionMineral", 'Int'>
    readonly title: FieldRef<"CollectionMineral", 'String'>
    readonly image: FieldRef<"CollectionMineral", 'String'>
    readonly received: FieldRef<"CollectionMineral", 'Boolean'>
    readonly createAt: FieldRef<"CollectionMineral", 'DateTime'>
    readonly updateAt: FieldRef<"CollectionMineral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollectionMineral findUnique
   */
  export type CollectionMineralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * Filter, which CollectionMineral to fetch.
     */
    where: CollectionMineralWhereUniqueInput
  }

  /**
   * CollectionMineral findUniqueOrThrow
   */
  export type CollectionMineralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * Filter, which CollectionMineral to fetch.
     */
    where: CollectionMineralWhereUniqueInput
  }

  /**
   * CollectionMineral findFirst
   */
  export type CollectionMineralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * Filter, which CollectionMineral to fetch.
     */
    where?: CollectionMineralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionMinerals to fetch.
     */
    orderBy?: CollectionMineralOrderByWithRelationInput | CollectionMineralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionMinerals.
     */
    cursor?: CollectionMineralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionMinerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionMinerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionMinerals.
     */
    distinct?: CollectionMineralScalarFieldEnum | CollectionMineralScalarFieldEnum[]
  }

  /**
   * CollectionMineral findFirstOrThrow
   */
  export type CollectionMineralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * Filter, which CollectionMineral to fetch.
     */
    where?: CollectionMineralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionMinerals to fetch.
     */
    orderBy?: CollectionMineralOrderByWithRelationInput | CollectionMineralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionMinerals.
     */
    cursor?: CollectionMineralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionMinerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionMinerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionMinerals.
     */
    distinct?: CollectionMineralScalarFieldEnum | CollectionMineralScalarFieldEnum[]
  }

  /**
   * CollectionMineral findMany
   */
  export type CollectionMineralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * Filter, which CollectionMinerals to fetch.
     */
    where?: CollectionMineralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionMinerals to fetch.
     */
    orderBy?: CollectionMineralOrderByWithRelationInput | CollectionMineralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionMinerals.
     */
    cursor?: CollectionMineralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionMinerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionMinerals.
     */
    skip?: number
    distinct?: CollectionMineralScalarFieldEnum | CollectionMineralScalarFieldEnum[]
  }

  /**
   * CollectionMineral create
   */
  export type CollectionMineralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * The data needed to create a CollectionMineral.
     */
    data: XOR<CollectionMineralCreateInput, CollectionMineralUncheckedCreateInput>
  }

  /**
   * CollectionMineral createMany
   */
  export type CollectionMineralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionMinerals.
     */
    data: CollectionMineralCreateManyInput | CollectionMineralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollectionMineral createManyAndReturn
   */
  export type CollectionMineralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * The data used to create many CollectionMinerals.
     */
    data: CollectionMineralCreateManyInput | CollectionMineralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollectionMineral update
   */
  export type CollectionMineralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * The data needed to update a CollectionMineral.
     */
    data: XOR<CollectionMineralUpdateInput, CollectionMineralUncheckedUpdateInput>
    /**
     * Choose, which CollectionMineral to update.
     */
    where: CollectionMineralWhereUniqueInput
  }

  /**
   * CollectionMineral updateMany
   */
  export type CollectionMineralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionMinerals.
     */
    data: XOR<CollectionMineralUpdateManyMutationInput, CollectionMineralUncheckedUpdateManyInput>
    /**
     * Filter which CollectionMinerals to update
     */
    where?: CollectionMineralWhereInput
    /**
     * Limit how many CollectionMinerals to update.
     */
    limit?: number
  }

  /**
   * CollectionMineral updateManyAndReturn
   */
  export type CollectionMineralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * The data used to update CollectionMinerals.
     */
    data: XOR<CollectionMineralUpdateManyMutationInput, CollectionMineralUncheckedUpdateManyInput>
    /**
     * Filter which CollectionMinerals to update
     */
    where?: CollectionMineralWhereInput
    /**
     * Limit how many CollectionMinerals to update.
     */
    limit?: number
  }

  /**
   * CollectionMineral upsert
   */
  export type CollectionMineralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * The filter to search for the CollectionMineral to update in case it exists.
     */
    where: CollectionMineralWhereUniqueInput
    /**
     * In case the CollectionMineral found by the `where` argument doesn't exist, create a new CollectionMineral with this data.
     */
    create: XOR<CollectionMineralCreateInput, CollectionMineralUncheckedCreateInput>
    /**
     * In case the CollectionMineral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionMineralUpdateInput, CollectionMineralUncheckedUpdateInput>
  }

  /**
   * CollectionMineral delete
   */
  export type CollectionMineralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
    /**
     * Filter which CollectionMineral to delete.
     */
    where: CollectionMineralWhereUniqueInput
  }

  /**
   * CollectionMineral deleteMany
   */
  export type CollectionMineralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionMinerals to delete
     */
    where?: CollectionMineralWhereInput
    /**
     * Limit how many CollectionMinerals to delete.
     */
    limit?: number
  }

  /**
   * CollectionMineral without action
   */
  export type CollectionMineralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionMineral
     */
    select?: CollectionMineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionMineral
     */
    omit?: CollectionMineralOmit<ExtArgs> | null
  }


  /**
   * Model MineralPassed
   */

  export type AggregateMineralPassed = {
    _count: MineralPassedCountAggregateOutputType | null
    _avg: MineralPassedAvgAggregateOutputType | null
    _sum: MineralPassedSumAggregateOutputType | null
    _min: MineralPassedMinAggregateOutputType | null
    _max: MineralPassedMaxAggregateOutputType | null
  }

  export type MineralPassedAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MineralPassedSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MineralPassedMinAggregateOutputType = {
    id: number | null
    title: string | null
    isPassed: boolean | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type MineralPassedMaxAggregateOutputType = {
    id: number | null
    title: string | null
    isPassed: boolean | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type MineralPassedCountAggregateOutputType = {
    id: number
    title: number
    isPassed: number
    createAt: number
    updateAt: number
    userId: number
    _all: number
  }


  export type MineralPassedAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MineralPassedSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MineralPassedMinAggregateInputType = {
    id?: true
    title?: true
    isPassed?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type MineralPassedMaxAggregateInputType = {
    id?: true
    title?: true
    isPassed?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type MineralPassedCountAggregateInputType = {
    id?: true
    title?: true
    isPassed?: true
    createAt?: true
    updateAt?: true
    userId?: true
    _all?: true
  }

  export type MineralPassedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MineralPassed to aggregate.
     */
    where?: MineralPassedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MineralPasseds to fetch.
     */
    orderBy?: MineralPassedOrderByWithRelationInput | MineralPassedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MineralPassedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MineralPasseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MineralPasseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MineralPasseds
    **/
    _count?: true | MineralPassedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MineralPassedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MineralPassedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MineralPassedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MineralPassedMaxAggregateInputType
  }

  export type GetMineralPassedAggregateType<T extends MineralPassedAggregateArgs> = {
        [P in keyof T & keyof AggregateMineralPassed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMineralPassed[P]>
      : GetScalarType<T[P], AggregateMineralPassed[P]>
  }




  export type MineralPassedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MineralPassedWhereInput
    orderBy?: MineralPassedOrderByWithAggregationInput | MineralPassedOrderByWithAggregationInput[]
    by: MineralPassedScalarFieldEnum[] | MineralPassedScalarFieldEnum
    having?: MineralPassedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MineralPassedCountAggregateInputType | true
    _avg?: MineralPassedAvgAggregateInputType
    _sum?: MineralPassedSumAggregateInputType
    _min?: MineralPassedMinAggregateInputType
    _max?: MineralPassedMaxAggregateInputType
  }

  export type MineralPassedGroupByOutputType = {
    id: number
    title: string
    isPassed: boolean
    createAt: Date
    updateAt: Date
    userId: number
    _count: MineralPassedCountAggregateOutputType | null
    _avg: MineralPassedAvgAggregateOutputType | null
    _sum: MineralPassedSumAggregateOutputType | null
    _min: MineralPassedMinAggregateOutputType | null
    _max: MineralPassedMaxAggregateOutputType | null
  }

  type GetMineralPassedGroupByPayload<T extends MineralPassedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MineralPassedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MineralPassedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MineralPassedGroupByOutputType[P]>
            : GetScalarType<T[P], MineralPassedGroupByOutputType[P]>
        }
      >
    >


  export type MineralPassedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isPassed?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mineralPassed"]>

  export type MineralPassedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isPassed?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mineralPassed"]>

  export type MineralPassedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isPassed?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mineralPassed"]>

  export type MineralPassedSelectScalar = {
    id?: boolean
    title?: boolean
    isPassed?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
  }

  export type MineralPassedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "isPassed" | "createAt" | "updateAt" | "userId", ExtArgs["result"]["mineralPassed"]>
  export type MineralPassedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MineralPassedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MineralPassedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MineralPassedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MineralPassed"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      isPassed: boolean
      createAt: Date
      updateAt: Date
      userId: number
    }, ExtArgs["result"]["mineralPassed"]>
    composites: {}
  }

  type MineralPassedGetPayload<S extends boolean | null | undefined | MineralPassedDefaultArgs> = $Result.GetResult<Prisma.$MineralPassedPayload, S>

  type MineralPassedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MineralPassedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MineralPassedCountAggregateInputType | true
    }

  export interface MineralPassedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MineralPassed'], meta: { name: 'MineralPassed' } }
    /**
     * Find zero or one MineralPassed that matches the filter.
     * @param {MineralPassedFindUniqueArgs} args - Arguments to find a MineralPassed
     * @example
     * // Get one MineralPassed
     * const mineralPassed = await prisma.mineralPassed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MineralPassedFindUniqueArgs>(args: SelectSubset<T, MineralPassedFindUniqueArgs<ExtArgs>>): Prisma__MineralPassedClient<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MineralPassed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MineralPassedFindUniqueOrThrowArgs} args - Arguments to find a MineralPassed
     * @example
     * // Get one MineralPassed
     * const mineralPassed = await prisma.mineralPassed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MineralPassedFindUniqueOrThrowArgs>(args: SelectSubset<T, MineralPassedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MineralPassedClient<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MineralPassed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralPassedFindFirstArgs} args - Arguments to find a MineralPassed
     * @example
     * // Get one MineralPassed
     * const mineralPassed = await prisma.mineralPassed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MineralPassedFindFirstArgs>(args?: SelectSubset<T, MineralPassedFindFirstArgs<ExtArgs>>): Prisma__MineralPassedClient<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MineralPassed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralPassedFindFirstOrThrowArgs} args - Arguments to find a MineralPassed
     * @example
     * // Get one MineralPassed
     * const mineralPassed = await prisma.mineralPassed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MineralPassedFindFirstOrThrowArgs>(args?: SelectSubset<T, MineralPassedFindFirstOrThrowArgs<ExtArgs>>): Prisma__MineralPassedClient<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MineralPasseds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralPassedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MineralPasseds
     * const mineralPasseds = await prisma.mineralPassed.findMany()
     * 
     * // Get first 10 MineralPasseds
     * const mineralPasseds = await prisma.mineralPassed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mineralPassedWithIdOnly = await prisma.mineralPassed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MineralPassedFindManyArgs>(args?: SelectSubset<T, MineralPassedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MineralPassed.
     * @param {MineralPassedCreateArgs} args - Arguments to create a MineralPassed.
     * @example
     * // Create one MineralPassed
     * const MineralPassed = await prisma.mineralPassed.create({
     *   data: {
     *     // ... data to create a MineralPassed
     *   }
     * })
     * 
     */
    create<T extends MineralPassedCreateArgs>(args: SelectSubset<T, MineralPassedCreateArgs<ExtArgs>>): Prisma__MineralPassedClient<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MineralPasseds.
     * @param {MineralPassedCreateManyArgs} args - Arguments to create many MineralPasseds.
     * @example
     * // Create many MineralPasseds
     * const mineralPassed = await prisma.mineralPassed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MineralPassedCreateManyArgs>(args?: SelectSubset<T, MineralPassedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MineralPasseds and returns the data saved in the database.
     * @param {MineralPassedCreateManyAndReturnArgs} args - Arguments to create many MineralPasseds.
     * @example
     * // Create many MineralPasseds
     * const mineralPassed = await prisma.mineralPassed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MineralPasseds and only return the `id`
     * const mineralPassedWithIdOnly = await prisma.mineralPassed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MineralPassedCreateManyAndReturnArgs>(args?: SelectSubset<T, MineralPassedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MineralPassed.
     * @param {MineralPassedDeleteArgs} args - Arguments to delete one MineralPassed.
     * @example
     * // Delete one MineralPassed
     * const MineralPassed = await prisma.mineralPassed.delete({
     *   where: {
     *     // ... filter to delete one MineralPassed
     *   }
     * })
     * 
     */
    delete<T extends MineralPassedDeleteArgs>(args: SelectSubset<T, MineralPassedDeleteArgs<ExtArgs>>): Prisma__MineralPassedClient<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MineralPassed.
     * @param {MineralPassedUpdateArgs} args - Arguments to update one MineralPassed.
     * @example
     * // Update one MineralPassed
     * const mineralPassed = await prisma.mineralPassed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MineralPassedUpdateArgs>(args: SelectSubset<T, MineralPassedUpdateArgs<ExtArgs>>): Prisma__MineralPassedClient<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MineralPasseds.
     * @param {MineralPassedDeleteManyArgs} args - Arguments to filter MineralPasseds to delete.
     * @example
     * // Delete a few MineralPasseds
     * const { count } = await prisma.mineralPassed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MineralPassedDeleteManyArgs>(args?: SelectSubset<T, MineralPassedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MineralPasseds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralPassedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MineralPasseds
     * const mineralPassed = await prisma.mineralPassed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MineralPassedUpdateManyArgs>(args: SelectSubset<T, MineralPassedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MineralPasseds and returns the data updated in the database.
     * @param {MineralPassedUpdateManyAndReturnArgs} args - Arguments to update many MineralPasseds.
     * @example
     * // Update many MineralPasseds
     * const mineralPassed = await prisma.mineralPassed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MineralPasseds and only return the `id`
     * const mineralPassedWithIdOnly = await prisma.mineralPassed.updateManyAndReturn({
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
    updateManyAndReturn<T extends MineralPassedUpdateManyAndReturnArgs>(args: SelectSubset<T, MineralPassedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MineralPassed.
     * @param {MineralPassedUpsertArgs} args - Arguments to update or create a MineralPassed.
     * @example
     * // Update or create a MineralPassed
     * const mineralPassed = await prisma.mineralPassed.upsert({
     *   create: {
     *     // ... data to create a MineralPassed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MineralPassed we want to update
     *   }
     * })
     */
    upsert<T extends MineralPassedUpsertArgs>(args: SelectSubset<T, MineralPassedUpsertArgs<ExtArgs>>): Prisma__MineralPassedClient<$Result.GetResult<Prisma.$MineralPassedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MineralPasseds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralPassedCountArgs} args - Arguments to filter MineralPasseds to count.
     * @example
     * // Count the number of MineralPasseds
     * const count = await prisma.mineralPassed.count({
     *   where: {
     *     // ... the filter for the MineralPasseds we want to count
     *   }
     * })
    **/
    count<T extends MineralPassedCountArgs>(
      args?: Subset<T, MineralPassedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MineralPassedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MineralPassed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralPassedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MineralPassedAggregateArgs>(args: Subset<T, MineralPassedAggregateArgs>): Prisma.PrismaPromise<GetMineralPassedAggregateType<T>>

    /**
     * Group by MineralPassed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralPassedGroupByArgs} args - Group by arguments.
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
      T extends MineralPassedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MineralPassedGroupByArgs['orderBy'] }
        : { orderBy?: MineralPassedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MineralPassedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMineralPassedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MineralPassed model
   */
  readonly fields: MineralPassedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MineralPassed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MineralPassedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MineralPassed model
   */
  interface MineralPassedFieldRefs {
    readonly id: FieldRef<"MineralPassed", 'Int'>
    readonly title: FieldRef<"MineralPassed", 'String'>
    readonly isPassed: FieldRef<"MineralPassed", 'Boolean'>
    readonly createAt: FieldRef<"MineralPassed", 'DateTime'>
    readonly updateAt: FieldRef<"MineralPassed", 'DateTime'>
    readonly userId: FieldRef<"MineralPassed", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MineralPassed findUnique
   */
  export type MineralPassedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * Filter, which MineralPassed to fetch.
     */
    where: MineralPassedWhereUniqueInput
  }

  /**
   * MineralPassed findUniqueOrThrow
   */
  export type MineralPassedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * Filter, which MineralPassed to fetch.
     */
    where: MineralPassedWhereUniqueInput
  }

  /**
   * MineralPassed findFirst
   */
  export type MineralPassedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * Filter, which MineralPassed to fetch.
     */
    where?: MineralPassedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MineralPasseds to fetch.
     */
    orderBy?: MineralPassedOrderByWithRelationInput | MineralPassedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MineralPasseds.
     */
    cursor?: MineralPassedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MineralPasseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MineralPasseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MineralPasseds.
     */
    distinct?: MineralPassedScalarFieldEnum | MineralPassedScalarFieldEnum[]
  }

  /**
   * MineralPassed findFirstOrThrow
   */
  export type MineralPassedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * Filter, which MineralPassed to fetch.
     */
    where?: MineralPassedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MineralPasseds to fetch.
     */
    orderBy?: MineralPassedOrderByWithRelationInput | MineralPassedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MineralPasseds.
     */
    cursor?: MineralPassedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MineralPasseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MineralPasseds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MineralPasseds.
     */
    distinct?: MineralPassedScalarFieldEnum | MineralPassedScalarFieldEnum[]
  }

  /**
   * MineralPassed findMany
   */
  export type MineralPassedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * Filter, which MineralPasseds to fetch.
     */
    where?: MineralPassedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MineralPasseds to fetch.
     */
    orderBy?: MineralPassedOrderByWithRelationInput | MineralPassedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MineralPasseds.
     */
    cursor?: MineralPassedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MineralPasseds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MineralPasseds.
     */
    skip?: number
    distinct?: MineralPassedScalarFieldEnum | MineralPassedScalarFieldEnum[]
  }

  /**
   * MineralPassed create
   */
  export type MineralPassedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * The data needed to create a MineralPassed.
     */
    data: XOR<MineralPassedCreateInput, MineralPassedUncheckedCreateInput>
  }

  /**
   * MineralPassed createMany
   */
  export type MineralPassedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MineralPasseds.
     */
    data: MineralPassedCreateManyInput | MineralPassedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MineralPassed createManyAndReturn
   */
  export type MineralPassedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * The data used to create many MineralPasseds.
     */
    data: MineralPassedCreateManyInput | MineralPassedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MineralPassed update
   */
  export type MineralPassedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * The data needed to update a MineralPassed.
     */
    data: XOR<MineralPassedUpdateInput, MineralPassedUncheckedUpdateInput>
    /**
     * Choose, which MineralPassed to update.
     */
    where: MineralPassedWhereUniqueInput
  }

  /**
   * MineralPassed updateMany
   */
  export type MineralPassedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MineralPasseds.
     */
    data: XOR<MineralPassedUpdateManyMutationInput, MineralPassedUncheckedUpdateManyInput>
    /**
     * Filter which MineralPasseds to update
     */
    where?: MineralPassedWhereInput
    /**
     * Limit how many MineralPasseds to update.
     */
    limit?: number
  }

  /**
   * MineralPassed updateManyAndReturn
   */
  export type MineralPassedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * The data used to update MineralPasseds.
     */
    data: XOR<MineralPassedUpdateManyMutationInput, MineralPassedUncheckedUpdateManyInput>
    /**
     * Filter which MineralPasseds to update
     */
    where?: MineralPassedWhereInput
    /**
     * Limit how many MineralPasseds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MineralPassed upsert
   */
  export type MineralPassedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * The filter to search for the MineralPassed to update in case it exists.
     */
    where: MineralPassedWhereUniqueInput
    /**
     * In case the MineralPassed found by the `where` argument doesn't exist, create a new MineralPassed with this data.
     */
    create: XOR<MineralPassedCreateInput, MineralPassedUncheckedCreateInput>
    /**
     * In case the MineralPassed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MineralPassedUpdateInput, MineralPassedUncheckedUpdateInput>
  }

  /**
   * MineralPassed delete
   */
  export type MineralPassedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
    /**
     * Filter which MineralPassed to delete.
     */
    where: MineralPassedWhereUniqueInput
  }

  /**
   * MineralPassed deleteMany
   */
  export type MineralPassedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MineralPasseds to delete
     */
    where?: MineralPassedWhereInput
    /**
     * Limit how many MineralPasseds to delete.
     */
    limit?: number
  }

  /**
   * MineralPassed without action
   */
  export type MineralPassedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralPassed
     */
    select?: MineralPassedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralPassed
     */
    omit?: MineralPassedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralPassedInclude<ExtArgs> | null
  }


  /**
   * Model Mineral
   */

  export type AggregateMineral = {
    _count: MineralCountAggregateOutputType | null
    _avg: MineralAvgAggregateOutputType | null
    _sum: MineralSumAggregateOutputType | null
    _min: MineralMinAggregateOutputType | null
    _max: MineralMaxAggregateOutputType | null
  }

  export type MineralAvgAggregateOutputType = {
    id: number | null
  }

  export type MineralSumAggregateOutputType = {
    id: number | null
  }

  export type MineralMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    video: string | null
    image: string | null
    isPassed: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type MineralMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    video: string | null
    image: string | null
    isPassed: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type MineralCountAggregateOutputType = {
    id: number
    title: number
    description: number
    video: number
    image: number
    isPassed: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type MineralAvgAggregateInputType = {
    id?: true
  }

  export type MineralSumAggregateInputType = {
    id?: true
  }

  export type MineralMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    video?: true
    image?: true
    isPassed?: true
    createAt?: true
    updateAt?: true
  }

  export type MineralMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    video?: true
    image?: true
    isPassed?: true
    createAt?: true
    updateAt?: true
  }

  export type MineralCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    video?: true
    image?: true
    isPassed?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type MineralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mineral to aggregate.
     */
    where?: MineralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minerals to fetch.
     */
    orderBy?: MineralOrderByWithRelationInput | MineralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MineralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Minerals
    **/
    _count?: true | MineralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MineralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MineralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MineralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MineralMaxAggregateInputType
  }

  export type GetMineralAggregateType<T extends MineralAggregateArgs> = {
        [P in keyof T & keyof AggregateMineral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMineral[P]>
      : GetScalarType<T[P], AggregateMineral[P]>
  }




  export type MineralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MineralWhereInput
    orderBy?: MineralOrderByWithAggregationInput | MineralOrderByWithAggregationInput[]
    by: MineralScalarFieldEnum[] | MineralScalarFieldEnum
    having?: MineralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MineralCountAggregateInputType | true
    _avg?: MineralAvgAggregateInputType
    _sum?: MineralSumAggregateInputType
    _min?: MineralMinAggregateInputType
    _max?: MineralMaxAggregateInputType
  }

  export type MineralGroupByOutputType = {
    id: number
    title: string
    description: string
    video: string
    image: string
    isPassed: boolean
    createAt: Date
    updateAt: Date
    _count: MineralCountAggregateOutputType | null
    _avg: MineralAvgAggregateOutputType | null
    _sum: MineralSumAggregateOutputType | null
    _min: MineralMinAggregateOutputType | null
    _max: MineralMaxAggregateOutputType | null
  }

  type GetMineralGroupByPayload<T extends MineralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MineralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MineralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MineralGroupByOutputType[P]>
            : GetScalarType<T[P], MineralGroupByOutputType[P]>
        }
      >
    >


  export type MineralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    video?: boolean
    image?: boolean
    isPassed?: boolean
    createAt?: boolean
    updateAt?: boolean
    question?: boolean | Mineral$questionArgs<ExtArgs>
    _count?: boolean | MineralCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mineral"]>

  export type MineralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    video?: boolean
    image?: boolean
    isPassed?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["mineral"]>

  export type MineralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    video?: boolean
    image?: boolean
    isPassed?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["mineral"]>

  export type MineralSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    video?: boolean
    image?: boolean
    isPassed?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type MineralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "video" | "image" | "isPassed" | "createAt" | "updateAt", ExtArgs["result"]["mineral"]>
  export type MineralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | Mineral$questionArgs<ExtArgs>
    _count?: boolean | MineralCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MineralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MineralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MineralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mineral"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      video: string
      image: string
      isPassed: boolean
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["mineral"]>
    composites: {}
  }

  type MineralGetPayload<S extends boolean | null | undefined | MineralDefaultArgs> = $Result.GetResult<Prisma.$MineralPayload, S>

  type MineralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MineralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MineralCountAggregateInputType | true
    }

  export interface MineralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mineral'], meta: { name: 'Mineral' } }
    /**
     * Find zero or one Mineral that matches the filter.
     * @param {MineralFindUniqueArgs} args - Arguments to find a Mineral
     * @example
     * // Get one Mineral
     * const mineral = await prisma.mineral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MineralFindUniqueArgs>(args: SelectSubset<T, MineralFindUniqueArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mineral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MineralFindUniqueOrThrowArgs} args - Arguments to find a Mineral
     * @example
     * // Get one Mineral
     * const mineral = await prisma.mineral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MineralFindUniqueOrThrowArgs>(args: SelectSubset<T, MineralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mineral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralFindFirstArgs} args - Arguments to find a Mineral
     * @example
     * // Get one Mineral
     * const mineral = await prisma.mineral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MineralFindFirstArgs>(args?: SelectSubset<T, MineralFindFirstArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mineral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralFindFirstOrThrowArgs} args - Arguments to find a Mineral
     * @example
     * // Get one Mineral
     * const mineral = await prisma.mineral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MineralFindFirstOrThrowArgs>(args?: SelectSubset<T, MineralFindFirstOrThrowArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Minerals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Minerals
     * const minerals = await prisma.mineral.findMany()
     * 
     * // Get first 10 Minerals
     * const minerals = await prisma.mineral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mineralWithIdOnly = await prisma.mineral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MineralFindManyArgs>(args?: SelectSubset<T, MineralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mineral.
     * @param {MineralCreateArgs} args - Arguments to create a Mineral.
     * @example
     * // Create one Mineral
     * const Mineral = await prisma.mineral.create({
     *   data: {
     *     // ... data to create a Mineral
     *   }
     * })
     * 
     */
    create<T extends MineralCreateArgs>(args: SelectSubset<T, MineralCreateArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Minerals.
     * @param {MineralCreateManyArgs} args - Arguments to create many Minerals.
     * @example
     * // Create many Minerals
     * const mineral = await prisma.mineral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MineralCreateManyArgs>(args?: SelectSubset<T, MineralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Minerals and returns the data saved in the database.
     * @param {MineralCreateManyAndReturnArgs} args - Arguments to create many Minerals.
     * @example
     * // Create many Minerals
     * const mineral = await prisma.mineral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Minerals and only return the `id`
     * const mineralWithIdOnly = await prisma.mineral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MineralCreateManyAndReturnArgs>(args?: SelectSubset<T, MineralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mineral.
     * @param {MineralDeleteArgs} args - Arguments to delete one Mineral.
     * @example
     * // Delete one Mineral
     * const Mineral = await prisma.mineral.delete({
     *   where: {
     *     // ... filter to delete one Mineral
     *   }
     * })
     * 
     */
    delete<T extends MineralDeleteArgs>(args: SelectSubset<T, MineralDeleteArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mineral.
     * @param {MineralUpdateArgs} args - Arguments to update one Mineral.
     * @example
     * // Update one Mineral
     * const mineral = await prisma.mineral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MineralUpdateArgs>(args: SelectSubset<T, MineralUpdateArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Minerals.
     * @param {MineralDeleteManyArgs} args - Arguments to filter Minerals to delete.
     * @example
     * // Delete a few Minerals
     * const { count } = await prisma.mineral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MineralDeleteManyArgs>(args?: SelectSubset<T, MineralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Minerals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Minerals
     * const mineral = await prisma.mineral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MineralUpdateManyArgs>(args: SelectSubset<T, MineralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Minerals and returns the data updated in the database.
     * @param {MineralUpdateManyAndReturnArgs} args - Arguments to update many Minerals.
     * @example
     * // Update many Minerals
     * const mineral = await prisma.mineral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Minerals and only return the `id`
     * const mineralWithIdOnly = await prisma.mineral.updateManyAndReturn({
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
    updateManyAndReturn<T extends MineralUpdateManyAndReturnArgs>(args: SelectSubset<T, MineralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mineral.
     * @param {MineralUpsertArgs} args - Arguments to update or create a Mineral.
     * @example
     * // Update or create a Mineral
     * const mineral = await prisma.mineral.upsert({
     *   create: {
     *     // ... data to create a Mineral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mineral we want to update
     *   }
     * })
     */
    upsert<T extends MineralUpsertArgs>(args: SelectSubset<T, MineralUpsertArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Minerals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralCountArgs} args - Arguments to filter Minerals to count.
     * @example
     * // Count the number of Minerals
     * const count = await prisma.mineral.count({
     *   where: {
     *     // ... the filter for the Minerals we want to count
     *   }
     * })
    **/
    count<T extends MineralCountArgs>(
      args?: Subset<T, MineralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MineralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mineral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MineralAggregateArgs>(args: Subset<T, MineralAggregateArgs>): Prisma.PrismaPromise<GetMineralAggregateType<T>>

    /**
     * Group by Mineral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralGroupByArgs} args - Group by arguments.
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
      T extends MineralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MineralGroupByArgs['orderBy'] }
        : { orderBy?: MineralGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MineralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMineralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mineral model
   */
  readonly fields: MineralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mineral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MineralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends Mineral$questionArgs<ExtArgs> = {}>(args?: Subset<T, Mineral$questionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mineral model
   */
  interface MineralFieldRefs {
    readonly id: FieldRef<"Mineral", 'Int'>
    readonly title: FieldRef<"Mineral", 'String'>
    readonly description: FieldRef<"Mineral", 'String'>
    readonly video: FieldRef<"Mineral", 'String'>
    readonly image: FieldRef<"Mineral", 'String'>
    readonly isPassed: FieldRef<"Mineral", 'Boolean'>
    readonly createAt: FieldRef<"Mineral", 'DateTime'>
    readonly updateAt: FieldRef<"Mineral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mineral findUnique
   */
  export type MineralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * Filter, which Mineral to fetch.
     */
    where: MineralWhereUniqueInput
  }

  /**
   * Mineral findUniqueOrThrow
   */
  export type MineralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * Filter, which Mineral to fetch.
     */
    where: MineralWhereUniqueInput
  }

  /**
   * Mineral findFirst
   */
  export type MineralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * Filter, which Mineral to fetch.
     */
    where?: MineralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minerals to fetch.
     */
    orderBy?: MineralOrderByWithRelationInput | MineralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Minerals.
     */
    cursor?: MineralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Minerals.
     */
    distinct?: MineralScalarFieldEnum | MineralScalarFieldEnum[]
  }

  /**
   * Mineral findFirstOrThrow
   */
  export type MineralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * Filter, which Mineral to fetch.
     */
    where?: MineralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minerals to fetch.
     */
    orderBy?: MineralOrderByWithRelationInput | MineralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Minerals.
     */
    cursor?: MineralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minerals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Minerals.
     */
    distinct?: MineralScalarFieldEnum | MineralScalarFieldEnum[]
  }

  /**
   * Mineral findMany
   */
  export type MineralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * Filter, which Minerals to fetch.
     */
    where?: MineralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minerals to fetch.
     */
    orderBy?: MineralOrderByWithRelationInput | MineralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Minerals.
     */
    cursor?: MineralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minerals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minerals.
     */
    skip?: number
    distinct?: MineralScalarFieldEnum | MineralScalarFieldEnum[]
  }

  /**
   * Mineral create
   */
  export type MineralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * The data needed to create a Mineral.
     */
    data: XOR<MineralCreateInput, MineralUncheckedCreateInput>
  }

  /**
   * Mineral createMany
   */
  export type MineralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Minerals.
     */
    data: MineralCreateManyInput | MineralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mineral createManyAndReturn
   */
  export type MineralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * The data used to create many Minerals.
     */
    data: MineralCreateManyInput | MineralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mineral update
   */
  export type MineralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * The data needed to update a Mineral.
     */
    data: XOR<MineralUpdateInput, MineralUncheckedUpdateInput>
    /**
     * Choose, which Mineral to update.
     */
    where: MineralWhereUniqueInput
  }

  /**
   * Mineral updateMany
   */
  export type MineralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Minerals.
     */
    data: XOR<MineralUpdateManyMutationInput, MineralUncheckedUpdateManyInput>
    /**
     * Filter which Minerals to update
     */
    where?: MineralWhereInput
    /**
     * Limit how many Minerals to update.
     */
    limit?: number
  }

  /**
   * Mineral updateManyAndReturn
   */
  export type MineralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * The data used to update Minerals.
     */
    data: XOR<MineralUpdateManyMutationInput, MineralUncheckedUpdateManyInput>
    /**
     * Filter which Minerals to update
     */
    where?: MineralWhereInput
    /**
     * Limit how many Minerals to update.
     */
    limit?: number
  }

  /**
   * Mineral upsert
   */
  export type MineralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * The filter to search for the Mineral to update in case it exists.
     */
    where: MineralWhereUniqueInput
    /**
     * In case the Mineral found by the `where` argument doesn't exist, create a new Mineral with this data.
     */
    create: XOR<MineralCreateInput, MineralUncheckedCreateInput>
    /**
     * In case the Mineral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MineralUpdateInput, MineralUncheckedUpdateInput>
  }

  /**
   * Mineral delete
   */
  export type MineralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
    /**
     * Filter which Mineral to delete.
     */
    where: MineralWhereUniqueInput
  }

  /**
   * Mineral deleteMany
   */
  export type MineralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Minerals to delete
     */
    where?: MineralWhereInput
    /**
     * Limit how many Minerals to delete.
     */
    limit?: number
  }

  /**
   * Mineral.question
   */
  export type Mineral$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Mineral without action
   */
  export type MineralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mineral
     */
    select?: MineralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mineral
     */
    omit?: MineralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineralInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    mineralId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    mineralId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    mineralId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    mineralId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    image: number
    mineralId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    mineralId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    mineralId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    mineralId?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    mineralId?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    mineralId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    title: string
    image: string | null
    mineralId: number
    createAt: Date
    updateAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    mineralId?: boolean
    createAt?: boolean
    updateAt?: boolean
    mineral?: boolean | MineralDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    mineralId?: boolean
    createAt?: boolean
    updateAt?: boolean
    mineral?: boolean | MineralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    mineralId?: boolean
    createAt?: boolean
    updateAt?: boolean
    mineral?: boolean | MineralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    mineralId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "mineralId" | "createAt" | "updateAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mineral?: boolean | MineralDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mineral?: boolean | MineralDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mineral?: boolean | MineralDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      mineral: Prisma.$MineralPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string | null
      mineralId: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mineral<T extends MineralDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MineralDefaultArgs<ExtArgs>>): Prisma__MineralClient<$Result.GetResult<Prisma.$MineralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly title: FieldRef<"Question", 'String'>
    readonly image: FieldRef<"Question", 'String'>
    readonly mineralId: FieldRef<"Question", 'Int'>
    readonly createAt: FieldRef<"Question", 'DateTime'>
    readonly updateAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    text: string | null
    correct: boolean | null
    questionId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    text: string | null
    correct: boolean | null
    questionId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    text: number
    correct: number
    questionId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    text?: true
    correct?: true
    questionId?: true
    createAt?: true
    updateAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    text?: true
    correct?: true
    questionId?: true
    createAt?: true
    updateAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    text?: true
    correct?: true
    questionId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: number
    text: string
    correct: boolean
    questionId: number
    createAt: Date
    updateAt: Date
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    correct?: boolean
    questionId?: boolean
    createAt?: boolean
    updateAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    correct?: boolean
    questionId?: boolean
    createAt?: boolean
    updateAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    correct?: boolean
    questionId?: boolean
    createAt?: boolean
    updateAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    text?: boolean
    correct?: boolean
    questionId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "correct" | "questionId" | "createAt" | "updateAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      correct: boolean
      questionId: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'Int'>
    readonly text: FieldRef<"Answer", 'String'>
    readonly correct: FieldRef<"Answer", 'Boolean'>
    readonly questionId: FieldRef<"Answer", 'Int'>
    readonly createAt: FieldRef<"Answer", 'DateTime'>
    readonly updateAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model Statuses
   */

  export type AggregateStatuses = {
    _count: StatusesCountAggregateOutputType | null
    _avg: StatusesAvgAggregateOutputType | null
    _sum: StatusesSumAggregateOutputType | null
    _min: StatusesMinAggregateOutputType | null
    _max: StatusesMaxAggregateOutputType | null
  }

  export type StatusesAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusesSumAggregateOutputType = {
    id: number | null
  }

  export type StatusesMinAggregateOutputType = {
    id: number | null
    title: string | null
    icon: string | null
    price: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StatusesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    icon: string | null
    price: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StatusesCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    price: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type StatusesAvgAggregateInputType = {
    id?: true
  }

  export type StatusesSumAggregateInputType = {
    id?: true
  }

  export type StatusesMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    price?: true
    createAt?: true
    updateAt?: true
  }

  export type StatusesMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    price?: true
    createAt?: true
    updateAt?: true
  }

  export type StatusesCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    price?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type StatusesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to aggregate.
     */
    where?: StatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusesOrderByWithRelationInput | StatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusesMaxAggregateInputType
  }

  export type GetStatusesAggregateType<T extends StatusesAggregateArgs> = {
        [P in keyof T & keyof AggregateStatuses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatuses[P]>
      : GetScalarType<T[P], AggregateStatuses[P]>
  }




  export type StatusesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusesWhereInput
    orderBy?: StatusesOrderByWithAggregationInput | StatusesOrderByWithAggregationInput[]
    by: StatusesScalarFieldEnum[] | StatusesScalarFieldEnum
    having?: StatusesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusesCountAggregateInputType | true
    _avg?: StatusesAvgAggregateInputType
    _sum?: StatusesSumAggregateInputType
    _min?: StatusesMinAggregateInputType
    _max?: StatusesMaxAggregateInputType
  }

  export type StatusesGroupByOutputType = {
    id: number
    title: string
    icon: string
    price: string | null
    createAt: Date
    updateAt: Date
    _count: StatusesCountAggregateOutputType | null
    _avg: StatusesAvgAggregateOutputType | null
    _sum: StatusesSumAggregateOutputType | null
    _min: StatusesMinAggregateOutputType | null
    _max: StatusesMaxAggregateOutputType | null
  }

  type GetStatusesGroupByPayload<T extends StatusesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusesGroupByOutputType[P]>
            : GetScalarType<T[P], StatusesGroupByOutputType[P]>
        }
      >
    >


  export type StatusesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["statuses"]>

  export type StatusesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["statuses"]>

  export type StatusesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["statuses"]>

  export type StatusesSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
    price?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type StatusesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon" | "price" | "createAt" | "updateAt", ExtArgs["result"]["statuses"]>

  export type $StatusesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Statuses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      icon: string
      price: string | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["statuses"]>
    composites: {}
  }

  type StatusesGetPayload<S extends boolean | null | undefined | StatusesDefaultArgs> = $Result.GetResult<Prisma.$StatusesPayload, S>

  type StatusesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusesCountAggregateInputType | true
    }

  export interface StatusesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Statuses'], meta: { name: 'Statuses' } }
    /**
     * Find zero or one Statuses that matches the filter.
     * @param {StatusesFindUniqueArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusesFindUniqueArgs>(args: SelectSubset<T, StatusesFindUniqueArgs<ExtArgs>>): Prisma__StatusesClient<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Statuses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusesFindUniqueOrThrowArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusesFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusesClient<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesFindFirstArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusesFindFirstArgs>(args?: SelectSubset<T, StatusesFindFirstArgs<ExtArgs>>): Prisma__StatusesClient<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statuses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesFindFirstOrThrowArgs} args - Arguments to find a Statuses
     * @example
     * // Get one Statuses
     * const statuses = await prisma.statuses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusesFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusesFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusesClient<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.statuses.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.statuses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusesWithIdOnly = await prisma.statuses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusesFindManyArgs>(args?: SelectSubset<T, StatusesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Statuses.
     * @param {StatusesCreateArgs} args - Arguments to create a Statuses.
     * @example
     * // Create one Statuses
     * const Statuses = await prisma.statuses.create({
     *   data: {
     *     // ... data to create a Statuses
     *   }
     * })
     * 
     */
    create<T extends StatusesCreateArgs>(args: SelectSubset<T, StatusesCreateArgs<ExtArgs>>): Prisma__StatusesClient<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusesCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const statuses = await prisma.statuses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusesCreateManyArgs>(args?: SelectSubset<T, StatusesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusesCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const statuses = await prisma.statuses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusesWithIdOnly = await prisma.statuses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusesCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Statuses.
     * @param {StatusesDeleteArgs} args - Arguments to delete one Statuses.
     * @example
     * // Delete one Statuses
     * const Statuses = await prisma.statuses.delete({
     *   where: {
     *     // ... filter to delete one Statuses
     *   }
     * })
     * 
     */
    delete<T extends StatusesDeleteArgs>(args: SelectSubset<T, StatusesDeleteArgs<ExtArgs>>): Prisma__StatusesClient<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Statuses.
     * @param {StatusesUpdateArgs} args - Arguments to update one Statuses.
     * @example
     * // Update one Statuses
     * const statuses = await prisma.statuses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusesUpdateArgs>(args: SelectSubset<T, StatusesUpdateArgs<ExtArgs>>): Prisma__StatusesClient<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusesDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.statuses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusesDeleteManyArgs>(args?: SelectSubset<T, StatusesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const statuses = await prisma.statuses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusesUpdateManyArgs>(args: SelectSubset<T, StatusesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusesUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const statuses = await prisma.statuses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusesWithIdOnly = await prisma.statuses.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatusesUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Statuses.
     * @param {StatusesUpsertArgs} args - Arguments to update or create a Statuses.
     * @example
     * // Update or create a Statuses
     * const statuses = await prisma.statuses.upsert({
     *   create: {
     *     // ... data to create a Statuses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statuses we want to update
     *   }
     * })
     */
    upsert<T extends StatusesUpsertArgs>(args: SelectSubset<T, StatusesUpsertArgs<ExtArgs>>): Prisma__StatusesClient<$Result.GetResult<Prisma.$StatusesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.statuses.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusesCountArgs>(
      args?: Subset<T, StatusesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusesAggregateArgs>(args: Subset<T, StatusesAggregateArgs>): Prisma.PrismaPromise<GetStatusesAggregateType<T>>

    /**
     * Group by Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusesGroupByArgs} args - Group by arguments.
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
      T extends StatusesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusesGroupByArgs['orderBy'] }
        : { orderBy?: StatusesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Statuses model
   */
  readonly fields: StatusesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Statuses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Statuses model
   */
  interface StatusesFieldRefs {
    readonly id: FieldRef<"Statuses", 'Int'>
    readonly title: FieldRef<"Statuses", 'String'>
    readonly icon: FieldRef<"Statuses", 'String'>
    readonly price: FieldRef<"Statuses", 'String'>
    readonly createAt: FieldRef<"Statuses", 'DateTime'>
    readonly updateAt: FieldRef<"Statuses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Statuses findUnique
   */
  export type StatusesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where: StatusesWhereUniqueInput
  }

  /**
   * Statuses findUniqueOrThrow
   */
  export type StatusesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where: StatusesWhereUniqueInput
  }

  /**
   * Statuses findFirst
   */
  export type StatusesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusesOrderByWithRelationInput | StatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusesScalarFieldEnum | StatusesScalarFieldEnum[]
  }

  /**
   * Statuses findFirstOrThrow
   */
  export type StatusesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusesOrderByWithRelationInput | StatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusesScalarFieldEnum | StatusesScalarFieldEnum[]
  }

  /**
   * Statuses findMany
   */
  export type StatusesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusesOrderByWithRelationInput | StatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusesScalarFieldEnum | StatusesScalarFieldEnum[]
  }

  /**
   * Statuses create
   */
  export type StatusesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * The data needed to create a Statuses.
     */
    data: XOR<StatusesCreateInput, StatusesUncheckedCreateInput>
  }

  /**
   * Statuses createMany
   */
  export type StatusesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusesCreateManyInput | StatusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Statuses createManyAndReturn
   */
  export type StatusesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusesCreateManyInput | StatusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Statuses update
   */
  export type StatusesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * The data needed to update a Statuses.
     */
    data: XOR<StatusesUpdateInput, StatusesUncheckedUpdateInput>
    /**
     * Choose, which Statuses to update.
     */
    where: StatusesWhereUniqueInput
  }

  /**
   * Statuses updateMany
   */
  export type StatusesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusesUpdateManyMutationInput, StatusesUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusesWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Statuses updateManyAndReturn
   */
  export type StatusesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusesUpdateManyMutationInput, StatusesUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusesWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Statuses upsert
   */
  export type StatusesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * The filter to search for the Statuses to update in case it exists.
     */
    where: StatusesWhereUniqueInput
    /**
     * In case the Statuses found by the `where` argument doesn't exist, create a new Statuses with this data.
     */
    create: XOR<StatusesCreateInput, StatusesUncheckedCreateInput>
    /**
     * In case the Statuses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusesUpdateInput, StatusesUncheckedUpdateInput>
  }

  /**
   * Statuses delete
   */
  export type StatusesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
    /**
     * Filter which Statuses to delete.
     */
    where: StatusesWhereUniqueInput
  }

  /**
   * Statuses deleteMany
   */
  export type StatusesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusesWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Statuses without action
   */
  export type StatusesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statuses
     */
    select?: StatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statuses
     */
    omit?: StatusesOmit<ExtArgs> | null
  }


  /**
   * Model MineralMap
   */

  export type AggregateMineralMap = {
    _count: MineralMapCountAggregateOutputType | null
    _avg: MineralMapAvgAggregateOutputType | null
    _sum: MineralMapSumAggregateOutputType | null
    _min: MineralMapMinAggregateOutputType | null
    _max: MineralMapMaxAggregateOutputType | null
  }

  export type MineralMapAvgAggregateOutputType = {
    id: number | null
  }

  export type MineralMapSumAggregateOutputType = {
    id: number | null
  }

  export type MineralMapMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type MineralMapMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    image: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type MineralMapCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type MineralMapAvgAggregateInputType = {
    id?: true
  }

  export type MineralMapSumAggregateInputType = {
    id?: true
  }

  export type MineralMapMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    createAt?: true
    updateAt?: true
  }

  export type MineralMapMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    createAt?: true
    updateAt?: true
  }

  export type MineralMapCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type MineralMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MineralMap to aggregate.
     */
    where?: MineralMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MineralMaps to fetch.
     */
    orderBy?: MineralMapOrderByWithRelationInput | MineralMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MineralMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MineralMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MineralMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MineralMaps
    **/
    _count?: true | MineralMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MineralMapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MineralMapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MineralMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MineralMapMaxAggregateInputType
  }

  export type GetMineralMapAggregateType<T extends MineralMapAggregateArgs> = {
        [P in keyof T & keyof AggregateMineralMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMineralMap[P]>
      : GetScalarType<T[P], AggregateMineralMap[P]>
  }




  export type MineralMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MineralMapWhereInput
    orderBy?: MineralMapOrderByWithAggregationInput | MineralMapOrderByWithAggregationInput[]
    by: MineralMapScalarFieldEnum[] | MineralMapScalarFieldEnum
    having?: MineralMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MineralMapCountAggregateInputType | true
    _avg?: MineralMapAvgAggregateInputType
    _sum?: MineralMapSumAggregateInputType
    _min?: MineralMapMinAggregateInputType
    _max?: MineralMapMaxAggregateInputType
  }

  export type MineralMapGroupByOutputType = {
    id: number
    title: string
    description: string
    image: string | null
    createAt: Date
    updateAt: Date
    _count: MineralMapCountAggregateOutputType | null
    _avg: MineralMapAvgAggregateOutputType | null
    _sum: MineralMapSumAggregateOutputType | null
    _min: MineralMapMinAggregateOutputType | null
    _max: MineralMapMaxAggregateOutputType | null
  }

  type GetMineralMapGroupByPayload<T extends MineralMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MineralMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MineralMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MineralMapGroupByOutputType[P]>
            : GetScalarType<T[P], MineralMapGroupByOutputType[P]>
        }
      >
    >


  export type MineralMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["mineralMap"]>

  export type MineralMapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["mineralMap"]>

  export type MineralMapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["mineralMap"]>

  export type MineralMapSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type MineralMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "createAt" | "updateAt", ExtArgs["result"]["mineralMap"]>

  export type $MineralMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MineralMap"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      image: string | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["mineralMap"]>
    composites: {}
  }

  type MineralMapGetPayload<S extends boolean | null | undefined | MineralMapDefaultArgs> = $Result.GetResult<Prisma.$MineralMapPayload, S>

  type MineralMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MineralMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MineralMapCountAggregateInputType | true
    }

  export interface MineralMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MineralMap'], meta: { name: 'MineralMap' } }
    /**
     * Find zero or one MineralMap that matches the filter.
     * @param {MineralMapFindUniqueArgs} args - Arguments to find a MineralMap
     * @example
     * // Get one MineralMap
     * const mineralMap = await prisma.mineralMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MineralMapFindUniqueArgs>(args: SelectSubset<T, MineralMapFindUniqueArgs<ExtArgs>>): Prisma__MineralMapClient<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MineralMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MineralMapFindUniqueOrThrowArgs} args - Arguments to find a MineralMap
     * @example
     * // Get one MineralMap
     * const mineralMap = await prisma.mineralMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MineralMapFindUniqueOrThrowArgs>(args: SelectSubset<T, MineralMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MineralMapClient<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MineralMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralMapFindFirstArgs} args - Arguments to find a MineralMap
     * @example
     * // Get one MineralMap
     * const mineralMap = await prisma.mineralMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MineralMapFindFirstArgs>(args?: SelectSubset<T, MineralMapFindFirstArgs<ExtArgs>>): Prisma__MineralMapClient<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MineralMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralMapFindFirstOrThrowArgs} args - Arguments to find a MineralMap
     * @example
     * // Get one MineralMap
     * const mineralMap = await prisma.mineralMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MineralMapFindFirstOrThrowArgs>(args?: SelectSubset<T, MineralMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MineralMapClient<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MineralMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MineralMaps
     * const mineralMaps = await prisma.mineralMap.findMany()
     * 
     * // Get first 10 MineralMaps
     * const mineralMaps = await prisma.mineralMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mineralMapWithIdOnly = await prisma.mineralMap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MineralMapFindManyArgs>(args?: SelectSubset<T, MineralMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MineralMap.
     * @param {MineralMapCreateArgs} args - Arguments to create a MineralMap.
     * @example
     * // Create one MineralMap
     * const MineralMap = await prisma.mineralMap.create({
     *   data: {
     *     // ... data to create a MineralMap
     *   }
     * })
     * 
     */
    create<T extends MineralMapCreateArgs>(args: SelectSubset<T, MineralMapCreateArgs<ExtArgs>>): Prisma__MineralMapClient<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MineralMaps.
     * @param {MineralMapCreateManyArgs} args - Arguments to create many MineralMaps.
     * @example
     * // Create many MineralMaps
     * const mineralMap = await prisma.mineralMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MineralMapCreateManyArgs>(args?: SelectSubset<T, MineralMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MineralMaps and returns the data saved in the database.
     * @param {MineralMapCreateManyAndReturnArgs} args - Arguments to create many MineralMaps.
     * @example
     * // Create many MineralMaps
     * const mineralMap = await prisma.mineralMap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MineralMaps and only return the `id`
     * const mineralMapWithIdOnly = await prisma.mineralMap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MineralMapCreateManyAndReturnArgs>(args?: SelectSubset<T, MineralMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MineralMap.
     * @param {MineralMapDeleteArgs} args - Arguments to delete one MineralMap.
     * @example
     * // Delete one MineralMap
     * const MineralMap = await prisma.mineralMap.delete({
     *   where: {
     *     // ... filter to delete one MineralMap
     *   }
     * })
     * 
     */
    delete<T extends MineralMapDeleteArgs>(args: SelectSubset<T, MineralMapDeleteArgs<ExtArgs>>): Prisma__MineralMapClient<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MineralMap.
     * @param {MineralMapUpdateArgs} args - Arguments to update one MineralMap.
     * @example
     * // Update one MineralMap
     * const mineralMap = await prisma.mineralMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MineralMapUpdateArgs>(args: SelectSubset<T, MineralMapUpdateArgs<ExtArgs>>): Prisma__MineralMapClient<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MineralMaps.
     * @param {MineralMapDeleteManyArgs} args - Arguments to filter MineralMaps to delete.
     * @example
     * // Delete a few MineralMaps
     * const { count } = await prisma.mineralMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MineralMapDeleteManyArgs>(args?: SelectSubset<T, MineralMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MineralMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MineralMaps
     * const mineralMap = await prisma.mineralMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MineralMapUpdateManyArgs>(args: SelectSubset<T, MineralMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MineralMaps and returns the data updated in the database.
     * @param {MineralMapUpdateManyAndReturnArgs} args - Arguments to update many MineralMaps.
     * @example
     * // Update many MineralMaps
     * const mineralMap = await prisma.mineralMap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MineralMaps and only return the `id`
     * const mineralMapWithIdOnly = await prisma.mineralMap.updateManyAndReturn({
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
    updateManyAndReturn<T extends MineralMapUpdateManyAndReturnArgs>(args: SelectSubset<T, MineralMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MineralMap.
     * @param {MineralMapUpsertArgs} args - Arguments to update or create a MineralMap.
     * @example
     * // Update or create a MineralMap
     * const mineralMap = await prisma.mineralMap.upsert({
     *   create: {
     *     // ... data to create a MineralMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MineralMap we want to update
     *   }
     * })
     */
    upsert<T extends MineralMapUpsertArgs>(args: SelectSubset<T, MineralMapUpsertArgs<ExtArgs>>): Prisma__MineralMapClient<$Result.GetResult<Prisma.$MineralMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MineralMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralMapCountArgs} args - Arguments to filter MineralMaps to count.
     * @example
     * // Count the number of MineralMaps
     * const count = await prisma.mineralMap.count({
     *   where: {
     *     // ... the filter for the MineralMaps we want to count
     *   }
     * })
    **/
    count<T extends MineralMapCountArgs>(
      args?: Subset<T, MineralMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MineralMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MineralMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MineralMapAggregateArgs>(args: Subset<T, MineralMapAggregateArgs>): Prisma.PrismaPromise<GetMineralMapAggregateType<T>>

    /**
     * Group by MineralMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineralMapGroupByArgs} args - Group by arguments.
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
      T extends MineralMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MineralMapGroupByArgs['orderBy'] }
        : { orderBy?: MineralMapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MineralMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMineralMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MineralMap model
   */
  readonly fields: MineralMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MineralMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MineralMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MineralMap model
   */
  interface MineralMapFieldRefs {
    readonly id: FieldRef<"MineralMap", 'Int'>
    readonly title: FieldRef<"MineralMap", 'String'>
    readonly description: FieldRef<"MineralMap", 'String'>
    readonly image: FieldRef<"MineralMap", 'String'>
    readonly createAt: FieldRef<"MineralMap", 'DateTime'>
    readonly updateAt: FieldRef<"MineralMap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MineralMap findUnique
   */
  export type MineralMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * Filter, which MineralMap to fetch.
     */
    where: MineralMapWhereUniqueInput
  }

  /**
   * MineralMap findUniqueOrThrow
   */
  export type MineralMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * Filter, which MineralMap to fetch.
     */
    where: MineralMapWhereUniqueInput
  }

  /**
   * MineralMap findFirst
   */
  export type MineralMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * Filter, which MineralMap to fetch.
     */
    where?: MineralMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MineralMaps to fetch.
     */
    orderBy?: MineralMapOrderByWithRelationInput | MineralMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MineralMaps.
     */
    cursor?: MineralMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MineralMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MineralMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MineralMaps.
     */
    distinct?: MineralMapScalarFieldEnum | MineralMapScalarFieldEnum[]
  }

  /**
   * MineralMap findFirstOrThrow
   */
  export type MineralMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * Filter, which MineralMap to fetch.
     */
    where?: MineralMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MineralMaps to fetch.
     */
    orderBy?: MineralMapOrderByWithRelationInput | MineralMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MineralMaps.
     */
    cursor?: MineralMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MineralMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MineralMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MineralMaps.
     */
    distinct?: MineralMapScalarFieldEnum | MineralMapScalarFieldEnum[]
  }

  /**
   * MineralMap findMany
   */
  export type MineralMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * Filter, which MineralMaps to fetch.
     */
    where?: MineralMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MineralMaps to fetch.
     */
    orderBy?: MineralMapOrderByWithRelationInput | MineralMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MineralMaps.
     */
    cursor?: MineralMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MineralMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MineralMaps.
     */
    skip?: number
    distinct?: MineralMapScalarFieldEnum | MineralMapScalarFieldEnum[]
  }

  /**
   * MineralMap create
   */
  export type MineralMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * The data needed to create a MineralMap.
     */
    data: XOR<MineralMapCreateInput, MineralMapUncheckedCreateInput>
  }

  /**
   * MineralMap createMany
   */
  export type MineralMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MineralMaps.
     */
    data: MineralMapCreateManyInput | MineralMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MineralMap createManyAndReturn
   */
  export type MineralMapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * The data used to create many MineralMaps.
     */
    data: MineralMapCreateManyInput | MineralMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MineralMap update
   */
  export type MineralMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * The data needed to update a MineralMap.
     */
    data: XOR<MineralMapUpdateInput, MineralMapUncheckedUpdateInput>
    /**
     * Choose, which MineralMap to update.
     */
    where: MineralMapWhereUniqueInput
  }

  /**
   * MineralMap updateMany
   */
  export type MineralMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MineralMaps.
     */
    data: XOR<MineralMapUpdateManyMutationInput, MineralMapUncheckedUpdateManyInput>
    /**
     * Filter which MineralMaps to update
     */
    where?: MineralMapWhereInput
    /**
     * Limit how many MineralMaps to update.
     */
    limit?: number
  }

  /**
   * MineralMap updateManyAndReturn
   */
  export type MineralMapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * The data used to update MineralMaps.
     */
    data: XOR<MineralMapUpdateManyMutationInput, MineralMapUncheckedUpdateManyInput>
    /**
     * Filter which MineralMaps to update
     */
    where?: MineralMapWhereInput
    /**
     * Limit how many MineralMaps to update.
     */
    limit?: number
  }

  /**
   * MineralMap upsert
   */
  export type MineralMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * The filter to search for the MineralMap to update in case it exists.
     */
    where: MineralMapWhereUniqueInput
    /**
     * In case the MineralMap found by the `where` argument doesn't exist, create a new MineralMap with this data.
     */
    create: XOR<MineralMapCreateInput, MineralMapUncheckedCreateInput>
    /**
     * In case the MineralMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MineralMapUpdateInput, MineralMapUncheckedUpdateInput>
  }

  /**
   * MineralMap delete
   */
  export type MineralMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
    /**
     * Filter which MineralMap to delete.
     */
    where: MineralMapWhereUniqueInput
  }

  /**
   * MineralMap deleteMany
   */
  export type MineralMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MineralMaps to delete
     */
    where?: MineralMapWhereInput
    /**
     * Limit how many MineralMaps to delete.
     */
    limit?: number
  }

  /**
   * MineralMap without action
   */
  export type MineralMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineralMap
     */
    select?: MineralMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MineralMap
     */
    omit?: MineralMapOmit<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    total: 'total',
    createAt: 'createAt',
    updateAr: 'updateAr',
    isAdmin: 'isAdmin',
    firstVisit: 'firstVisit'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    userId: 'userId'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    age: 'age',
    profession: 'profession',
    bio: 'bio',
    phone: 'phone',
    telegram: 'telegram',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    received: 'received',
    createAt: 'createAt',
    updateAt: 'updateAt',
    userId: 'userId'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const CollectionMineralScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    received: 'received',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CollectionMineralScalarFieldEnum = (typeof CollectionMineralScalarFieldEnum)[keyof typeof CollectionMineralScalarFieldEnum]


  export const MineralPassedScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isPassed: 'isPassed',
    createAt: 'createAt',
    updateAt: 'updateAt',
    userId: 'userId'
  };

  export type MineralPassedScalarFieldEnum = (typeof MineralPassedScalarFieldEnum)[keyof typeof MineralPassedScalarFieldEnum]


  export const MineralScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    video: 'video',
    image: 'image',
    isPassed: 'isPassed',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type MineralScalarFieldEnum = (typeof MineralScalarFieldEnum)[keyof typeof MineralScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    mineralId: 'mineralId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    text: 'text',
    correct: 'correct',
    questionId: 'questionId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const StatusesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    price: 'price',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type StatusesScalarFieldEnum = (typeof StatusesScalarFieldEnum)[keyof typeof StatusesScalarFieldEnum]


  export const MineralMapScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type MineralMapScalarFieldEnum = (typeof MineralMapScalarFieldEnum)[keyof typeof MineralMapScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    total?: IntFilter<"User"> | number
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAr?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    firstVisit?: BoolFilter<"User"> | boolean
    mineralPassed?: MineralPassedListRelationFilter
    collection?: CollectionListRelationFilter
    status?: XOR<StatusNullableScalarRelationFilter, StatusWhereInput> | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    total?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
    isAdmin?: SortOrder
    firstVisit?: SortOrder
    mineralPassed?: MineralPassedOrderByRelationAggregateInput
    collection?: CollectionOrderByRelationAggregateInput
    status?: StatusOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    total?: IntFilter<"User"> | number
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAr?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    firstVisit?: BoolFilter<"User"> | boolean
    mineralPassed?: MineralPassedListRelationFilter
    collection?: CollectionListRelationFilter
    status?: XOR<StatusNullableScalarRelationFilter, StatusWhereInput> | null
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    total?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
    isAdmin?: SortOrder
    firstVisit?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    total?: IntWithAggregatesFilter<"User"> | number
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAr?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    firstVisit?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id?: IntFilter<"Status"> | number
    title?: StringFilter<"Status"> | string
    price?: StringFilter<"Status"> | string
    userId?: IntFilter<"Status"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    title?: StringFilter<"Status"> | string
    price?: StringFilter<"Status"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _avg?: StatusAvgOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
    _sum?: StatusSumOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Status"> | number
    title?: StringWithAggregatesFilter<"Status"> | string
    price?: StringWithAggregatesFilter<"Status"> | string
    userId?: IntWithAggregatesFilter<"Status"> | number
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    avatar?: StringFilter<"Profile"> | string
    age?: StringFilter<"Profile"> | string
    profession?: StringFilter<"Profile"> | string
    bio?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    telegram?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    profession?: SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    avatar?: StringFilter<"Profile"> | string
    age?: StringFilter<"Profile"> | string
    profession?: StringFilter<"Profile"> | string
    bio?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    telegram?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    profession?: SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    avatar?: StringWithAggregatesFilter<"Profile"> | string
    age?: StringWithAggregatesFilter<"Profile"> | string
    profession?: StringWithAggregatesFilter<"Profile"> | string
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    telegram?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: IntFilter<"Collection"> | number
    title?: StringFilter<"Collection"> | string
    image?: StringFilter<"Collection"> | string
    received?: BoolFilter<"Collection"> | boolean
    createAt?: DateTimeFilter<"Collection"> | Date | string
    updateAt?: DateTimeFilter<"Collection"> | Date | string
    userId?: IntFilter<"Collection"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    title?: StringFilter<"Collection"> | string
    image?: StringFilter<"Collection"> | string
    received?: BoolFilter<"Collection"> | boolean
    createAt?: DateTimeFilter<"Collection"> | Date | string
    updateAt?: DateTimeFilter<"Collection"> | Date | string
    userId?: IntFilter<"Collection"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Collection"> | number
    title?: StringWithAggregatesFilter<"Collection"> | string
    image?: StringWithAggregatesFilter<"Collection"> | string
    received?: BoolWithAggregatesFilter<"Collection"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    userId?: IntWithAggregatesFilter<"Collection"> | number
  }

  export type CollectionMineralWhereInput = {
    AND?: CollectionMineralWhereInput | CollectionMineralWhereInput[]
    OR?: CollectionMineralWhereInput[]
    NOT?: CollectionMineralWhereInput | CollectionMineralWhereInput[]
    id?: IntFilter<"CollectionMineral"> | number
    title?: StringFilter<"CollectionMineral"> | string
    image?: StringFilter<"CollectionMineral"> | string
    received?: BoolFilter<"CollectionMineral"> | boolean
    createAt?: DateTimeFilter<"CollectionMineral"> | Date | string
    updateAt?: DateTimeFilter<"CollectionMineral"> | Date | string
  }

  export type CollectionMineralOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CollectionMineralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CollectionMineralWhereInput | CollectionMineralWhereInput[]
    OR?: CollectionMineralWhereInput[]
    NOT?: CollectionMineralWhereInput | CollectionMineralWhereInput[]
    title?: StringFilter<"CollectionMineral"> | string
    image?: StringFilter<"CollectionMineral"> | string
    received?: BoolFilter<"CollectionMineral"> | boolean
    createAt?: DateTimeFilter<"CollectionMineral"> | Date | string
    updateAt?: DateTimeFilter<"CollectionMineral"> | Date | string
  }, "id">

  export type CollectionMineralOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CollectionMineralCountOrderByAggregateInput
    _avg?: CollectionMineralAvgOrderByAggregateInput
    _max?: CollectionMineralMaxOrderByAggregateInput
    _min?: CollectionMineralMinOrderByAggregateInput
    _sum?: CollectionMineralSumOrderByAggregateInput
  }

  export type CollectionMineralScalarWhereWithAggregatesInput = {
    AND?: CollectionMineralScalarWhereWithAggregatesInput | CollectionMineralScalarWhereWithAggregatesInput[]
    OR?: CollectionMineralScalarWhereWithAggregatesInput[]
    NOT?: CollectionMineralScalarWhereWithAggregatesInput | CollectionMineralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CollectionMineral"> | number
    title?: StringWithAggregatesFilter<"CollectionMineral"> | string
    image?: StringWithAggregatesFilter<"CollectionMineral"> | string
    received?: BoolWithAggregatesFilter<"CollectionMineral"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"CollectionMineral"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"CollectionMineral"> | Date | string
  }

  export type MineralPassedWhereInput = {
    AND?: MineralPassedWhereInput | MineralPassedWhereInput[]
    OR?: MineralPassedWhereInput[]
    NOT?: MineralPassedWhereInput | MineralPassedWhereInput[]
    id?: IntFilter<"MineralPassed"> | number
    title?: StringFilter<"MineralPassed"> | string
    isPassed?: BoolFilter<"MineralPassed"> | boolean
    createAt?: DateTimeFilter<"MineralPassed"> | Date | string
    updateAt?: DateTimeFilter<"MineralPassed"> | Date | string
    userId?: IntFilter<"MineralPassed"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MineralPassedOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MineralPassedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_id?: MineralPassedUserIdIdCompoundUniqueInput
    AND?: MineralPassedWhereInput | MineralPassedWhereInput[]
    OR?: MineralPassedWhereInput[]
    NOT?: MineralPassedWhereInput | MineralPassedWhereInput[]
    title?: StringFilter<"MineralPassed"> | string
    isPassed?: BoolFilter<"MineralPassed"> | boolean
    createAt?: DateTimeFilter<"MineralPassed"> | Date | string
    updateAt?: DateTimeFilter<"MineralPassed"> | Date | string
    userId?: IntFilter<"MineralPassed"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_id">

  export type MineralPassedOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    _count?: MineralPassedCountOrderByAggregateInput
    _avg?: MineralPassedAvgOrderByAggregateInput
    _max?: MineralPassedMaxOrderByAggregateInput
    _min?: MineralPassedMinOrderByAggregateInput
    _sum?: MineralPassedSumOrderByAggregateInput
  }

  export type MineralPassedScalarWhereWithAggregatesInput = {
    AND?: MineralPassedScalarWhereWithAggregatesInput | MineralPassedScalarWhereWithAggregatesInput[]
    OR?: MineralPassedScalarWhereWithAggregatesInput[]
    NOT?: MineralPassedScalarWhereWithAggregatesInput | MineralPassedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MineralPassed"> | number
    title?: StringWithAggregatesFilter<"MineralPassed"> | string
    isPassed?: BoolWithAggregatesFilter<"MineralPassed"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"MineralPassed"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"MineralPassed"> | Date | string
    userId?: IntWithAggregatesFilter<"MineralPassed"> | number
  }

  export type MineralWhereInput = {
    AND?: MineralWhereInput | MineralWhereInput[]
    OR?: MineralWhereInput[]
    NOT?: MineralWhereInput | MineralWhereInput[]
    id?: IntFilter<"Mineral"> | number
    title?: StringFilter<"Mineral"> | string
    description?: StringFilter<"Mineral"> | string
    video?: StringFilter<"Mineral"> | string
    image?: StringFilter<"Mineral"> | string
    isPassed?: BoolFilter<"Mineral"> | boolean
    createAt?: DateTimeFilter<"Mineral"> | Date | string
    updateAt?: DateTimeFilter<"Mineral"> | Date | string
    question?: QuestionListRelationFilter
  }

  export type MineralOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    video?: SortOrder
    image?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    question?: QuestionOrderByRelationAggregateInput
  }

  export type MineralWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MineralWhereInput | MineralWhereInput[]
    OR?: MineralWhereInput[]
    NOT?: MineralWhereInput | MineralWhereInput[]
    title?: StringFilter<"Mineral"> | string
    description?: StringFilter<"Mineral"> | string
    video?: StringFilter<"Mineral"> | string
    image?: StringFilter<"Mineral"> | string
    isPassed?: BoolFilter<"Mineral"> | boolean
    createAt?: DateTimeFilter<"Mineral"> | Date | string
    updateAt?: DateTimeFilter<"Mineral"> | Date | string
    question?: QuestionListRelationFilter
  }, "id">

  export type MineralOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    video?: SortOrder
    image?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: MineralCountOrderByAggregateInput
    _avg?: MineralAvgOrderByAggregateInput
    _max?: MineralMaxOrderByAggregateInput
    _min?: MineralMinOrderByAggregateInput
    _sum?: MineralSumOrderByAggregateInput
  }

  export type MineralScalarWhereWithAggregatesInput = {
    AND?: MineralScalarWhereWithAggregatesInput | MineralScalarWhereWithAggregatesInput[]
    OR?: MineralScalarWhereWithAggregatesInput[]
    NOT?: MineralScalarWhereWithAggregatesInput | MineralScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mineral"> | number
    title?: StringWithAggregatesFilter<"Mineral"> | string
    description?: StringWithAggregatesFilter<"Mineral"> | string
    video?: StringWithAggregatesFilter<"Mineral"> | string
    image?: StringWithAggregatesFilter<"Mineral"> | string
    isPassed?: BoolWithAggregatesFilter<"Mineral"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"Mineral"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Mineral"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    image?: StringNullableFilter<"Question"> | string | null
    mineralId?: IntFilter<"Question"> | number
    createAt?: DateTimeFilter<"Question"> | Date | string
    updateAt?: DateTimeFilter<"Question"> | Date | string
    mineral?: XOR<MineralScalarRelationFilter, MineralWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    mineralId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    mineral?: MineralOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    image?: StringNullableFilter<"Question"> | string | null
    mineralId?: IntFilter<"Question"> | number
    createAt?: DateTimeFilter<"Question"> | Date | string
    updateAt?: DateTimeFilter<"Question"> | Date | string
    mineral?: XOR<MineralScalarRelationFilter, MineralWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    mineralId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    title?: StringWithAggregatesFilter<"Question"> | string
    image?: StringNullableWithAggregatesFilter<"Question"> | string | null
    mineralId?: IntWithAggregatesFilter<"Question"> | number
    createAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: IntFilter<"Answer"> | number
    text?: StringFilter<"Answer"> | string
    correct?: BoolFilter<"Answer"> | boolean
    questionId?: IntFilter<"Answer"> | number
    createAt?: DateTimeFilter<"Answer"> | Date | string
    updateAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    correct?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    text?: StringFilter<"Answer"> | string
    correct?: BoolFilter<"Answer"> | boolean
    questionId?: IntFilter<"Answer"> | number
    createAt?: DateTimeFilter<"Answer"> | Date | string
    updateAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    correct?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Answer"> | number
    text?: StringWithAggregatesFilter<"Answer"> | string
    correct?: BoolWithAggregatesFilter<"Answer"> | boolean
    questionId?: IntWithAggregatesFilter<"Answer"> | number
    createAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type StatusesWhereInput = {
    AND?: StatusesWhereInput | StatusesWhereInput[]
    OR?: StatusesWhereInput[]
    NOT?: StatusesWhereInput | StatusesWhereInput[]
    id?: IntFilter<"Statuses"> | number
    title?: StringFilter<"Statuses"> | string
    icon?: StringFilter<"Statuses"> | string
    price?: StringNullableFilter<"Statuses"> | string | null
    createAt?: DateTimeFilter<"Statuses"> | Date | string
    updateAt?: DateTimeFilter<"Statuses"> | Date | string
  }

  export type StatusesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    price?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StatusesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatusesWhereInput | StatusesWhereInput[]
    OR?: StatusesWhereInput[]
    NOT?: StatusesWhereInput | StatusesWhereInput[]
    title?: StringFilter<"Statuses"> | string
    icon?: StringFilter<"Statuses"> | string
    price?: StringNullableFilter<"Statuses"> | string | null
    createAt?: DateTimeFilter<"Statuses"> | Date | string
    updateAt?: DateTimeFilter<"Statuses"> | Date | string
  }, "id">

  export type StatusesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    price?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: StatusesCountOrderByAggregateInput
    _avg?: StatusesAvgOrderByAggregateInput
    _max?: StatusesMaxOrderByAggregateInput
    _min?: StatusesMinOrderByAggregateInput
    _sum?: StatusesSumOrderByAggregateInput
  }

  export type StatusesScalarWhereWithAggregatesInput = {
    AND?: StatusesScalarWhereWithAggregatesInput | StatusesScalarWhereWithAggregatesInput[]
    OR?: StatusesScalarWhereWithAggregatesInput[]
    NOT?: StatusesScalarWhereWithAggregatesInput | StatusesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Statuses"> | number
    title?: StringWithAggregatesFilter<"Statuses"> | string
    icon?: StringWithAggregatesFilter<"Statuses"> | string
    price?: StringNullableWithAggregatesFilter<"Statuses"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"Statuses"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Statuses"> | Date | string
  }

  export type MineralMapWhereInput = {
    AND?: MineralMapWhereInput | MineralMapWhereInput[]
    OR?: MineralMapWhereInput[]
    NOT?: MineralMapWhereInput | MineralMapWhereInput[]
    id?: IntFilter<"MineralMap"> | number
    title?: StringFilter<"MineralMap"> | string
    description?: StringFilter<"MineralMap"> | string
    image?: StringNullableFilter<"MineralMap"> | string | null
    createAt?: DateTimeFilter<"MineralMap"> | Date | string
    updateAt?: DateTimeFilter<"MineralMap"> | Date | string
  }

  export type MineralMapOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MineralMapWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MineralMapWhereInput | MineralMapWhereInput[]
    OR?: MineralMapWhereInput[]
    NOT?: MineralMapWhereInput | MineralMapWhereInput[]
    title?: StringFilter<"MineralMap"> | string
    description?: StringFilter<"MineralMap"> | string
    image?: StringNullableFilter<"MineralMap"> | string | null
    createAt?: DateTimeFilter<"MineralMap"> | Date | string
    updateAt?: DateTimeFilter<"MineralMap"> | Date | string
  }, "id">

  export type MineralMapOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: MineralMapCountOrderByAggregateInput
    _avg?: MineralMapAvgOrderByAggregateInput
    _max?: MineralMapMaxOrderByAggregateInput
    _min?: MineralMapMinOrderByAggregateInput
    _sum?: MineralMapSumOrderByAggregateInput
  }

  export type MineralMapScalarWhereWithAggregatesInput = {
    AND?: MineralMapScalarWhereWithAggregatesInput | MineralMapScalarWhereWithAggregatesInput[]
    OR?: MineralMapScalarWhereWithAggregatesInput[]
    NOT?: MineralMapScalarWhereWithAggregatesInput | MineralMapScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MineralMap"> | number
    title?: StringWithAggregatesFilter<"MineralMap"> | string
    description?: StringWithAggregatesFilter<"MineralMap"> | string
    image?: StringNullableWithAggregatesFilter<"MineralMap"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"MineralMap"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"MineralMap"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    mineralPassed?: MineralPassedCreateNestedManyWithoutUserInput
    collection?: CollectionCreateNestedManyWithoutUserInput
    status?: StatusCreateNestedOneWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    mineralPassed?: MineralPassedUncheckedCreateNestedManyWithoutUserInput
    collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    status?: StatusUncheckedCreateNestedOneWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    mineralPassed?: MineralPassedUpdateManyWithoutUserNestedInput
    collection?: CollectionUpdateManyWithoutUserNestedInput
    status?: StatusUpdateOneWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    mineralPassed?: MineralPassedUncheckedUpdateManyWithoutUserNestedInput
    collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    status?: StatusUncheckedUpdateOneWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StatusCreateInput = {
    title: string
    price: string
    user: UserCreateNestedOneWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id?: number
    title: string
    price: string
    userId: number
  }

  export type StatusUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StatusCreateManyInput = {
    id?: number
    title: string
    price: string
    userId: number
  }

  export type StatusUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateInput = {
    avatar: string
    age: string
    profession: string
    bio?: string | null
    phone?: string | null
    telegram?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    avatar: string
    age: string
    profession: string
    bio?: string | null
    phone?: string | null
    telegram?: string | null
    userId: number
  }

  export type ProfileUpdateInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    avatar: string
    age: string
    profession: string
    bio?: string | null
    phone?: string | null
    telegram?: string | null
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CollectionCreateInput = {
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: number
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
  }

  export type CollectionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CollectionCreateManyInput = {
    id?: number
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
  }

  export type CollectionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CollectionMineralCreateInput = {
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CollectionMineralUncheckedCreateInput = {
    id?: number
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CollectionMineralUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionMineralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionMineralCreateManyInput = {
    id?: number
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CollectionMineralUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionMineralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralPassedCreateInput = {
    title: string
    isPassed: boolean
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutMineralPassedInput
  }

  export type MineralPassedUncheckedCreateInput = {
    id?: number
    title: string
    isPassed: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
  }

  export type MineralPassedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMineralPassedNestedInput
  }

  export type MineralPassedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MineralPassedCreateManyInput = {
    id?: number
    title: string
    isPassed: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
  }

  export type MineralPassedUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralPassedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MineralCreateInput = {
    title: string
    description: string
    video: string
    image: string
    isPassed?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    question?: QuestionCreateNestedManyWithoutMineralInput
  }

  export type MineralUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    video: string
    image: string
    isPassed?: boolean
    createAt?: Date | string
    updateAt?: Date | string
    question?: QuestionUncheckedCreateNestedManyWithoutMineralInput
  }

  export type MineralUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateManyWithoutMineralNestedInput
  }

  export type MineralUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUncheckedUpdateManyWithoutMineralNestedInput
  }

  export type MineralCreateManyInput = {
    id?: number
    title: string
    description: string
    video: string
    image: string
    isPassed?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    title: string
    image?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    mineral: MineralCreateNestedOneWithoutQuestionInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    title: string
    image?: string | null
    mineralId: number
    createAt?: Date | string
    updateAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mineral?: MineralUpdateOneRequiredWithoutQuestionNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mineralId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    title: string
    image?: string | null
    mineralId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mineralId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    text: string
    correct: boolean
    createAt?: Date | string
    updateAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    text: string
    correct: boolean
    questionId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnswerUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    questionId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyInput = {
    id?: number
    text: string
    correct: boolean
    questionId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    questionId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusesCreateInput = {
    title: string
    icon: string
    price?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type StatusesUncheckedCreateInput = {
    id?: number
    title: string
    icon: string
    price?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type StatusesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusesCreateManyInput = {
    id?: number
    title: string
    icon: string
    price?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type StatusesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralMapCreateInput = {
    title: string
    description: string
    image?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralMapUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    image?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralMapUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralMapUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralMapCreateManyInput = {
    id?: number
    title: string
    description: string
    image?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralMapUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralMapUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MineralPassedListRelationFilter = {
    every?: MineralPassedWhereInput
    some?: MineralPassedWhereInput
    none?: MineralPassedWhereInput
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type StatusNullableScalarRelationFilter = {
    is?: StatusWhereInput | null
    isNot?: StatusWhereInput | null
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type MineralPassedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    total?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
    isAdmin?: SortOrder
    firstVisit?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    total?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
    isAdmin?: SortOrder
    firstVisit?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    total?: SortOrder
    createAt?: SortOrder
    updateAr?: SortOrder
    isAdmin?: SortOrder
    firstVisit?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type StatusAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type StatusSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    profession?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    profession?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    profession?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    telegram?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CollectionMineralCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CollectionMineralAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollectionMineralMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CollectionMineralMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    received?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CollectionMineralSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MineralPassedUserIdIdCompoundUniqueInput = {
    userId: number
    id: number
  }

  export type MineralPassedCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type MineralPassedAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MineralPassedMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type MineralPassedMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type MineralPassedSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MineralCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    video?: SortOrder
    image?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MineralAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MineralMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    video?: SortOrder
    image?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MineralMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    video?: SortOrder
    image?: SortOrder
    isPassed?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MineralSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MineralScalarRelationFilter = {
    is?: MineralWhereInput
    isNot?: MineralWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    mineralId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    mineralId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    mineralId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    mineralId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    mineralId?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correct?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correct?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correct?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type StatusesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StatusesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatusesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StatusesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StatusesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MineralMapCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MineralMapAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MineralMapMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MineralMapMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type MineralMapSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MineralPassedCreateNestedManyWithoutUserInput = {
    create?: XOR<MineralPassedCreateWithoutUserInput, MineralPassedUncheckedCreateWithoutUserInput> | MineralPassedCreateWithoutUserInput[] | MineralPassedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MineralPassedCreateOrConnectWithoutUserInput | MineralPassedCreateOrConnectWithoutUserInput[]
    createMany?: MineralPassedCreateManyUserInputEnvelope
    connect?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type StatusCreateNestedOneWithoutUserInput = {
    create?: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatusCreateOrConnectWithoutUserInput
    connect?: StatusWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type MineralPassedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MineralPassedCreateWithoutUserInput, MineralPassedUncheckedCreateWithoutUserInput> | MineralPassedCreateWithoutUserInput[] | MineralPassedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MineralPassedCreateOrConnectWithoutUserInput | MineralPassedCreateOrConnectWithoutUserInput[]
    createMany?: MineralPassedCreateManyUserInputEnvelope
    connect?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type StatusUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatusCreateOrConnectWithoutUserInput
    connect?: StatusWhereUniqueInput
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MineralPassedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MineralPassedCreateWithoutUserInput, MineralPassedUncheckedCreateWithoutUserInput> | MineralPassedCreateWithoutUserInput[] | MineralPassedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MineralPassedCreateOrConnectWithoutUserInput | MineralPassedCreateOrConnectWithoutUserInput[]
    upsert?: MineralPassedUpsertWithWhereUniqueWithoutUserInput | MineralPassedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MineralPassedCreateManyUserInputEnvelope
    set?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
    disconnect?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
    delete?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
    connect?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
    update?: MineralPassedUpdateWithWhereUniqueWithoutUserInput | MineralPassedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MineralPassedUpdateManyWithWhereWithoutUserInput | MineralPassedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MineralPassedScalarWhereInput | MineralPassedScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type StatusUpdateOneWithoutUserNestedInput = {
    create?: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatusCreateOrConnectWithoutUserInput
    upsert?: StatusUpsertWithoutUserInput
    disconnect?: StatusWhereInput | boolean
    delete?: StatusWhereInput | boolean
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutUserInput, StatusUpdateWithoutUserInput>, StatusUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type MineralPassedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MineralPassedCreateWithoutUserInput, MineralPassedUncheckedCreateWithoutUserInput> | MineralPassedCreateWithoutUserInput[] | MineralPassedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MineralPassedCreateOrConnectWithoutUserInput | MineralPassedCreateOrConnectWithoutUserInput[]
    upsert?: MineralPassedUpsertWithWhereUniqueWithoutUserInput | MineralPassedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MineralPassedCreateManyUserInputEnvelope
    set?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
    disconnect?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
    delete?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
    connect?: MineralPassedWhereUniqueInput | MineralPassedWhereUniqueInput[]
    update?: MineralPassedUpdateWithWhereUniqueWithoutUserInput | MineralPassedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MineralPassedUpdateManyWithWhereWithoutUserInput | MineralPassedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MineralPassedScalarWhereInput | MineralPassedScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type StatusUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput>
    connectOrCreate?: StatusCreateOrConnectWithoutUserInput
    upsert?: StatusUpsertWithoutUserInput
    disconnect?: StatusWhereInput | boolean
    delete?: StatusWhereInput | boolean
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutUserInput, StatusUpdateWithoutUserInput>, StatusUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutStatusInput = {
    create?: XOR<UserCreateWithoutStatusInput, UserUncheckedCreateWithoutStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatusNestedInput = {
    create?: XOR<UserCreateWithoutStatusInput, UserUncheckedCreateWithoutStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusInput
    upsert?: UserUpsertWithoutStatusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatusInput, UserUpdateWithoutStatusInput>, UserUncheckedUpdateWithoutStatusInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutCollectionInput = {
    create?: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCollectionNestedInput = {
    create?: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionInput
    upsert?: UserUpsertWithoutCollectionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionInput, UserUpdateWithoutCollectionInput>, UserUncheckedUpdateWithoutCollectionInput>
  }

  export type UserCreateNestedOneWithoutMineralPassedInput = {
    create?: XOR<UserCreateWithoutMineralPassedInput, UserUncheckedCreateWithoutMineralPassedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMineralPassedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMineralPassedNestedInput = {
    create?: XOR<UserCreateWithoutMineralPassedInput, UserUncheckedCreateWithoutMineralPassedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMineralPassedInput
    upsert?: UserUpsertWithoutMineralPassedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMineralPassedInput, UserUpdateWithoutMineralPassedInput>, UserUncheckedUpdateWithoutMineralPassedInput>
  }

  export type QuestionCreateNestedManyWithoutMineralInput = {
    create?: XOR<QuestionCreateWithoutMineralInput, QuestionUncheckedCreateWithoutMineralInput> | QuestionCreateWithoutMineralInput[] | QuestionUncheckedCreateWithoutMineralInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutMineralInput | QuestionCreateOrConnectWithoutMineralInput[]
    createMany?: QuestionCreateManyMineralInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutMineralInput = {
    create?: XOR<QuestionCreateWithoutMineralInput, QuestionUncheckedCreateWithoutMineralInput> | QuestionCreateWithoutMineralInput[] | QuestionUncheckedCreateWithoutMineralInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutMineralInput | QuestionCreateOrConnectWithoutMineralInput[]
    createMany?: QuestionCreateManyMineralInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutMineralNestedInput = {
    create?: XOR<QuestionCreateWithoutMineralInput, QuestionUncheckedCreateWithoutMineralInput> | QuestionCreateWithoutMineralInput[] | QuestionUncheckedCreateWithoutMineralInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutMineralInput | QuestionCreateOrConnectWithoutMineralInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutMineralInput | QuestionUpsertWithWhereUniqueWithoutMineralInput[]
    createMany?: QuestionCreateManyMineralInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutMineralInput | QuestionUpdateWithWhereUniqueWithoutMineralInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutMineralInput | QuestionUpdateManyWithWhereWithoutMineralInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutMineralNestedInput = {
    create?: XOR<QuestionCreateWithoutMineralInput, QuestionUncheckedCreateWithoutMineralInput> | QuestionCreateWithoutMineralInput[] | QuestionUncheckedCreateWithoutMineralInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutMineralInput | QuestionCreateOrConnectWithoutMineralInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutMineralInput | QuestionUpsertWithWhereUniqueWithoutMineralInput[]
    createMany?: QuestionCreateManyMineralInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutMineralInput | QuestionUpdateWithWhereUniqueWithoutMineralInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutMineralInput | QuestionUpdateManyWithWhereWithoutMineralInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type MineralCreateNestedOneWithoutQuestionInput = {
    create?: XOR<MineralCreateWithoutQuestionInput, MineralUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: MineralCreateOrConnectWithoutQuestionInput
    connect?: MineralWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type MineralUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<MineralCreateWithoutQuestionInput, MineralUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: MineralCreateOrConnectWithoutQuestionInput
    upsert?: MineralUpsertWithoutQuestionInput
    connect?: MineralWhereUniqueInput
    update?: XOR<XOR<MineralUpdateToOneWithWhereWithoutQuestionInput, MineralUpdateWithoutQuestionInput>, MineralUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
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

  export type MineralPassedCreateWithoutUserInput = {
    title: string
    isPassed: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralPassedUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    isPassed: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralPassedCreateOrConnectWithoutUserInput = {
    where: MineralPassedWhereUniqueInput
    create: XOR<MineralPassedCreateWithoutUserInput, MineralPassedUncheckedCreateWithoutUserInput>
  }

  export type MineralPassedCreateManyUserInputEnvelope = {
    data: MineralPassedCreateManyUserInput | MineralPassedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CollectionCreateWithoutUserInput = {
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StatusCreateWithoutUserInput = {
    title: string
    price: string
  }

  export type StatusUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    price: string
  }

  export type StatusCreateOrConnectWithoutUserInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput>
  }

  export type ProfileCreateWithoutUserInput = {
    avatar: string
    age: string
    profession: string
    bio?: string | null
    phone?: string | null
    telegram?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    avatar: string
    age: string
    profession: string
    bio?: string | null
    phone?: string | null
    telegram?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type MineralPassedUpsertWithWhereUniqueWithoutUserInput = {
    where: MineralPassedWhereUniqueInput
    update: XOR<MineralPassedUpdateWithoutUserInput, MineralPassedUncheckedUpdateWithoutUserInput>
    create: XOR<MineralPassedCreateWithoutUserInput, MineralPassedUncheckedCreateWithoutUserInput>
  }

  export type MineralPassedUpdateWithWhereUniqueWithoutUserInput = {
    where: MineralPassedWhereUniqueInput
    data: XOR<MineralPassedUpdateWithoutUserInput, MineralPassedUncheckedUpdateWithoutUserInput>
  }

  export type MineralPassedUpdateManyWithWhereWithoutUserInput = {
    where: MineralPassedScalarWhereInput
    data: XOR<MineralPassedUpdateManyMutationInput, MineralPassedUncheckedUpdateManyWithoutUserInput>
  }

  export type MineralPassedScalarWhereInput = {
    AND?: MineralPassedScalarWhereInput | MineralPassedScalarWhereInput[]
    OR?: MineralPassedScalarWhereInput[]
    NOT?: MineralPassedScalarWhereInput | MineralPassedScalarWhereInput[]
    id?: IntFilter<"MineralPassed"> | number
    title?: StringFilter<"MineralPassed"> | string
    isPassed?: BoolFilter<"MineralPassed"> | boolean
    createAt?: DateTimeFilter<"MineralPassed"> | Date | string
    updateAt?: DateTimeFilter<"MineralPassed"> | Date | string
    userId?: IntFilter<"MineralPassed"> | number
  }

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: IntFilter<"Collection"> | number
    title?: StringFilter<"Collection"> | string
    image?: StringFilter<"Collection"> | string
    received?: BoolFilter<"Collection"> | boolean
    createAt?: DateTimeFilter<"Collection"> | Date | string
    updateAt?: DateTimeFilter<"Collection"> | Date | string
    userId?: IntFilter<"Collection"> | number
  }

  export type StatusUpsertWithoutUserInput = {
    update: XOR<StatusUpdateWithoutUserInput, StatusUncheckedUpdateWithoutUserInput>
    create: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput>
    where?: StatusWhereInput
  }

  export type StatusUpdateToOneWithWhereWithoutUserInput = {
    where?: StatusWhereInput
    data: XOR<StatusUpdateWithoutUserInput, StatusUncheckedUpdateWithoutUserInput>
  }

  export type StatusUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    avatar?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatar?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutStatusInput = {
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    mineralPassed?: MineralPassedCreateNestedManyWithoutUserInput
    collection?: CollectionCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatusInput = {
    id?: number
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    mineralPassed?: MineralPassedUncheckedCreateNestedManyWithoutUserInput
    collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatusInput, UserUncheckedCreateWithoutStatusInput>
  }

  export type UserUpsertWithoutStatusInput = {
    update: XOR<UserUpdateWithoutStatusInput, UserUncheckedUpdateWithoutStatusInput>
    create: XOR<UserCreateWithoutStatusInput, UserUncheckedCreateWithoutStatusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatusInput, UserUncheckedUpdateWithoutStatusInput>
  }

  export type UserUpdateWithoutStatusInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    mineralPassed?: MineralPassedUpdateManyWithoutUserNestedInput
    collection?: CollectionUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    mineralPassed?: MineralPassedUncheckedUpdateManyWithoutUserNestedInput
    collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    mineralPassed?: MineralPassedCreateNestedManyWithoutUserInput
    collection?: CollectionCreateNestedManyWithoutUserInput
    status?: StatusCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    mineralPassed?: MineralPassedUncheckedCreateNestedManyWithoutUserInput
    collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    status?: StatusUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    mineralPassed?: MineralPassedUpdateManyWithoutUserNestedInput
    collection?: CollectionUpdateManyWithoutUserNestedInput
    status?: StatusUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    mineralPassed?: MineralPassedUncheckedUpdateManyWithoutUserNestedInput
    collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    status?: StatusUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutCollectionInput = {
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    mineralPassed?: MineralPassedCreateNestedManyWithoutUserInput
    status?: StatusCreateNestedOneWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollectionInput = {
    id?: number
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    mineralPassed?: MineralPassedUncheckedCreateNestedManyWithoutUserInput
    status?: StatusUncheckedCreateNestedOneWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollectionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
  }

  export type UserUpsertWithoutCollectionInput = {
    update: XOR<UserUpdateWithoutCollectionInput, UserUncheckedUpdateWithoutCollectionInput>
    create: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionInput, UserUncheckedUpdateWithoutCollectionInput>
  }

  export type UserUpdateWithoutCollectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    mineralPassed?: MineralPassedUpdateManyWithoutUserNestedInput
    status?: StatusUpdateOneWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    mineralPassed?: MineralPassedUncheckedUpdateManyWithoutUserNestedInput
    status?: StatusUncheckedUpdateOneWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutMineralPassedInput = {
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    collection?: CollectionCreateNestedManyWithoutUserInput
    status?: StatusCreateNestedOneWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMineralPassedInput = {
    id?: number
    name: string
    email: string
    password: string
    total: number
    createAt?: Date | string
    updateAr?: Date | string
    isAdmin: boolean
    firstVisit?: boolean
    collection?: CollectionUncheckedCreateNestedManyWithoutUserInput
    status?: StatusUncheckedCreateNestedOneWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMineralPassedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMineralPassedInput, UserUncheckedCreateWithoutMineralPassedInput>
  }

  export type UserUpsertWithoutMineralPassedInput = {
    update: XOR<UserUpdateWithoutMineralPassedInput, UserUncheckedUpdateWithoutMineralPassedInput>
    create: XOR<UserCreateWithoutMineralPassedInput, UserUncheckedCreateWithoutMineralPassedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMineralPassedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMineralPassedInput, UserUncheckedUpdateWithoutMineralPassedInput>
  }

  export type UserUpdateWithoutMineralPassedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    collection?: CollectionUpdateManyWithoutUserNestedInput
    status?: StatusUpdateOneWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMineralPassedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAr?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    firstVisit?: BoolFieldUpdateOperationsInput | boolean
    collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    status?: StatusUncheckedUpdateOneWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type QuestionCreateWithoutMineralInput = {
    title: string
    image?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutMineralInput = {
    id?: number
    title: string
    image?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutMineralInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutMineralInput, QuestionUncheckedCreateWithoutMineralInput>
  }

  export type QuestionCreateManyMineralInputEnvelope = {
    data: QuestionCreateManyMineralInput | QuestionCreateManyMineralInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutMineralInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutMineralInput, QuestionUncheckedUpdateWithoutMineralInput>
    create: XOR<QuestionCreateWithoutMineralInput, QuestionUncheckedCreateWithoutMineralInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutMineralInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutMineralInput, QuestionUncheckedUpdateWithoutMineralInput>
  }

  export type QuestionUpdateManyWithWhereWithoutMineralInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutMineralInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    image?: StringNullableFilter<"Question"> | string | null
    mineralId?: IntFilter<"Question"> | number
    createAt?: DateTimeFilter<"Question"> | Date | string
    updateAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type MineralCreateWithoutQuestionInput = {
    title: string
    description: string
    video: string
    image: string
    isPassed?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralUncheckedCreateWithoutQuestionInput = {
    id?: number
    title: string
    description: string
    video: string
    image: string
    isPassed?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralCreateOrConnectWithoutQuestionInput = {
    where: MineralWhereUniqueInput
    create: XOR<MineralCreateWithoutQuestionInput, MineralUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    text: string
    correct: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    text: string
    correct: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type MineralUpsertWithoutQuestionInput = {
    update: XOR<MineralUpdateWithoutQuestionInput, MineralUncheckedUpdateWithoutQuestionInput>
    create: XOR<MineralCreateWithoutQuestionInput, MineralUncheckedCreateWithoutQuestionInput>
    where?: MineralWhereInput
  }

  export type MineralUpdateToOneWithWhereWithoutQuestionInput = {
    where?: MineralWhereInput
    data: XOR<MineralUpdateWithoutQuestionInput, MineralUncheckedUpdateWithoutQuestionInput>
  }

  export type MineralUpdateWithoutQuestionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    video?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: IntFilter<"Answer"> | number
    text?: StringFilter<"Answer"> | string
    correct?: BoolFilter<"Answer"> | boolean
    questionId?: IntFilter<"Answer"> | number
    createAt?: DateTimeFilter<"Answer"> | Date | string
    updateAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type QuestionCreateWithoutAnswersInput = {
    title: string
    image?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    mineral: MineralCreateNestedOneWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: number
    title: string
    image?: string | null
    mineralId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mineral?: MineralUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    mineralId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralPassedCreateManyUserInput = {
    id?: number
    title: string
    isPassed: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CollectionCreateManyUserInput = {
    id?: number
    title: string
    image: string
    received?: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type MineralPassedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralPassedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineralPassedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyMineralInput = {
    id?: number
    title: string
    image?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateWithoutMineralInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutMineralInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutMineralInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: number
    text: string
    correct: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    text?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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