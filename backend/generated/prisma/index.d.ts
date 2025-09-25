
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
 * Model Run
 * 
 */
export type Run = $Result.DefaultSelection<Prisma.$RunPayload>
/**
 * Model RunPlan
 * 
 */
export type RunPlan = $Result.DefaultSelection<Prisma.$RunPlanPayload>
/**
 * Model GymPlan
 * 
 */
export type GymPlan = $Result.DefaultSelection<Prisma.$GymPlanPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model CompletedExercise
 * 
 */
export type CompletedExercise = $Result.DefaultSelection<Prisma.$CompletedExercisePayload>

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
   * `prisma.run`: Exposes CRUD operations for the **Run** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Runs
    * const runs = await prisma.run.findMany()
    * ```
    */
  get run(): Prisma.RunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.runPlan`: Exposes CRUD operations for the **RunPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RunPlans
    * const runPlans = await prisma.runPlan.findMany()
    * ```
    */
  get runPlan(): Prisma.RunPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gymPlan`: Exposes CRUD operations for the **GymPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymPlans
    * const gymPlans = await prisma.gymPlan.findMany()
    * ```
    */
  get gymPlan(): Prisma.GymPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedExercise`: Exposes CRUD operations for the **CompletedExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedExercises
    * const completedExercises = await prisma.completedExercise.findMany()
    * ```
    */
  get completedExercise(): Prisma.CompletedExerciseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Run: 'Run',
    RunPlan: 'RunPlan',
    GymPlan: 'GymPlan',
    Exercise: 'Exercise',
    CompletedExercise: 'CompletedExercise'
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
      modelProps: "user" | "run" | "runPlan" | "gymPlan" | "exercise" | "completedExercise"
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
      Run: {
        payload: Prisma.$RunPayload<ExtArgs>
        fields: Prisma.RunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findFirst: {
            args: Prisma.RunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          findMany: {
            args: Prisma.RunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          create: {
            args: Prisma.RunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          createMany: {
            args: Prisma.RunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          delete: {
            args: Prisma.RunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          update: {
            args: Prisma.RunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          deleteMany: {
            args: Prisma.RunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>[]
          }
          upsert: {
            args: Prisma.RunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPayload>
          }
          aggregate: {
            args: Prisma.RunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRun>
          }
          groupBy: {
            args: Prisma.RunGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunCountArgs<ExtArgs>
            result: $Utils.Optional<RunCountAggregateOutputType> | number
          }
        }
      }
      RunPlan: {
        payload: Prisma.$RunPlanPayload<ExtArgs>
        fields: Prisma.RunPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RunPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RunPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>
          }
          findFirst: {
            args: Prisma.RunPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RunPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>
          }
          findMany: {
            args: Prisma.RunPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>[]
          }
          create: {
            args: Prisma.RunPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>
          }
          createMany: {
            args: Prisma.RunPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RunPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>[]
          }
          delete: {
            args: Prisma.RunPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>
          }
          update: {
            args: Prisma.RunPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>
          }
          deleteMany: {
            args: Prisma.RunPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RunPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RunPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>[]
          }
          upsert: {
            args: Prisma.RunPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RunPlanPayload>
          }
          aggregate: {
            args: Prisma.RunPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRunPlan>
          }
          groupBy: {
            args: Prisma.RunPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<RunPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.RunPlanCountArgs<ExtArgs>
            result: $Utils.Optional<RunPlanCountAggregateOutputType> | number
          }
        }
      }
      GymPlan: {
        payload: Prisma.$GymPlanPayload<ExtArgs>
        fields: Prisma.GymPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>
          }
          findFirst: {
            args: Prisma.GymPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>
          }
          findMany: {
            args: Prisma.GymPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>[]
          }
          create: {
            args: Prisma.GymPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>
          }
          createMany: {
            args: Prisma.GymPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>[]
          }
          delete: {
            args: Prisma.GymPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>
          }
          update: {
            args: Prisma.GymPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>
          }
          deleteMany: {
            args: Prisma.GymPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>[]
          }
          upsert: {
            args: Prisma.GymPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPlanPayload>
          }
          aggregate: {
            args: Prisma.GymPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGymPlan>
          }
          groupBy: {
            args: Prisma.GymPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymPlanCountArgs<ExtArgs>
            result: $Utils.Optional<GymPlanCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      CompletedExercise: {
        payload: Prisma.$CompletedExercisePayload<ExtArgs>
        fields: Prisma.CompletedExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>
          }
          findFirst: {
            args: Prisma.CompletedExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>
          }
          findMany: {
            args: Prisma.CompletedExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>[]
          }
          create: {
            args: Prisma.CompletedExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>
          }
          createMany: {
            args: Prisma.CompletedExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>[]
          }
          delete: {
            args: Prisma.CompletedExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>
          }
          update: {
            args: Prisma.CompletedExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>
          }
          deleteMany: {
            args: Prisma.CompletedExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>[]
          }
          upsert: {
            args: Prisma.CompletedExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedExercisePayload>
          }
          aggregate: {
            args: Prisma.CompletedExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedExercise>
          }
          groupBy: {
            args: Prisma.CompletedExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedExerciseCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    run?: RunOmit
    runPlan?: RunPlanOmit
    gymPlan?: GymPlanOmit
    exercise?: ExerciseOmit
    completedExercise?: CompletedExerciseOmit
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
    runs: number
    runPlans: number
    gymPlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | UserCountOutputTypeCountRunsArgs
    runPlans?: boolean | UserCountOutputTypeCountRunPlansArgs
    gymPlans?: boolean | UserCountOutputTypeCountGymPlansArgs
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
  export type UserCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRunPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGymPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymPlanWhereInput
  }


  /**
   * Count Type GymPlanCountOutputType
   */

  export type GymPlanCountOutputType = {
    exercises: number
  }

  export type GymPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | GymPlanCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * GymPlanCountOutputType without action
   */
  export type GymPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlanCountOutputType
     */
    select?: GymPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GymPlanCountOutputType without action
   */
  export type GymPlanCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    completed: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completed?: boolean | ExerciseCountOutputTypeCountCompletedArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountCompletedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedExerciseWhereInput
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
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
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
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
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
    runs?: boolean | User$runsArgs<ExtArgs>
    runPlans?: boolean | User$runPlansArgs<ExtArgs>
    gymPlans?: boolean | User$gymPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    runs?: boolean | User$runsArgs<ExtArgs>
    runPlans?: boolean | User$runPlansArgs<ExtArgs>
    gymPlans?: boolean | User$gymPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      runs: Prisma.$RunPayload<ExtArgs>[]
      runPlans: Prisma.$RunPlanPayload<ExtArgs>[]
      gymPlans: Prisma.$GymPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
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
    runs<T extends User$runsArgs<ExtArgs> = {}>(args?: Subset<T, User$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    runPlans<T extends User$runPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$runPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gymPlans<T extends User$gymPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$gymPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.runs
   */
  export type User$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    cursor?: RunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * User.runPlans
   */
  export type User$runPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    where?: RunPlanWhereInput
    orderBy?: RunPlanOrderByWithRelationInput | RunPlanOrderByWithRelationInput[]
    cursor?: RunPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RunPlanScalarFieldEnum | RunPlanScalarFieldEnum[]
  }

  /**
   * User.gymPlans
   */
  export type User$gymPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    where?: GymPlanWhereInput
    orderBy?: GymPlanOrderByWithRelationInput | GymPlanOrderByWithRelationInput[]
    cursor?: GymPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymPlanScalarFieldEnum | GymPlanScalarFieldEnum[]
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
   * Model Run
   */

  export type AggregateRun = {
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  export type RunAvgAggregateOutputType = {
    id: number | null
    distance: number | null
    duration: number | null
    pace: number | null
    userId: number | null
  }

  export type RunSumAggregateOutputType = {
    id: number | null
    distance: number | null
    duration: number | null
    pace: number | null
    userId: number | null
  }

  export type RunMinAggregateOutputType = {
    id: number | null
    stravaId: string | null
    date: Date | null
    distance: number | null
    duration: number | null
    pace: number | null
    notes: string | null
    userId: number | null
  }

  export type RunMaxAggregateOutputType = {
    id: number | null
    stravaId: string | null
    date: Date | null
    distance: number | null
    duration: number | null
    pace: number | null
    notes: string | null
    userId: number | null
  }

  export type RunCountAggregateOutputType = {
    id: number
    stravaId: number
    date: number
    distance: number
    duration: number
    pace: number
    notes: number
    userId: number
    _all: number
  }


  export type RunAvgAggregateInputType = {
    id?: true
    distance?: true
    duration?: true
    pace?: true
    userId?: true
  }

  export type RunSumAggregateInputType = {
    id?: true
    distance?: true
    duration?: true
    pace?: true
    userId?: true
  }

  export type RunMinAggregateInputType = {
    id?: true
    stravaId?: true
    date?: true
    distance?: true
    duration?: true
    pace?: true
    notes?: true
    userId?: true
  }

  export type RunMaxAggregateInputType = {
    id?: true
    stravaId?: true
    date?: true
    distance?: true
    duration?: true
    pace?: true
    notes?: true
    userId?: true
  }

  export type RunCountAggregateInputType = {
    id?: true
    stravaId?: true
    date?: true
    distance?: true
    duration?: true
    pace?: true
    notes?: true
    userId?: true
    _all?: true
  }

  export type RunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Run to aggregate.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Runs
    **/
    _count?: true | RunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunMaxAggregateInputType
  }

  export type GetRunAggregateType<T extends RunAggregateArgs> = {
        [P in keyof T & keyof AggregateRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRun[P]>
      : GetScalarType<T[P], AggregateRun[P]>
  }




  export type RunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunWhereInput
    orderBy?: RunOrderByWithAggregationInput | RunOrderByWithAggregationInput[]
    by: RunScalarFieldEnum[] | RunScalarFieldEnum
    having?: RunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunCountAggregateInputType | true
    _avg?: RunAvgAggregateInputType
    _sum?: RunSumAggregateInputType
    _min?: RunMinAggregateInputType
    _max?: RunMaxAggregateInputType
  }

  export type RunGroupByOutputType = {
    id: number
    stravaId: string | null
    date: Date
    distance: number
    duration: number
    pace: number
    notes: string | null
    userId: number
    _count: RunCountAggregateOutputType | null
    _avg: RunAvgAggregateOutputType | null
    _sum: RunSumAggregateOutputType | null
    _min: RunMinAggregateOutputType | null
    _max: RunMaxAggregateOutputType | null
  }

  type GetRunGroupByPayload<T extends RunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunGroupByOutputType[P]>
            : GetScalarType<T[P], RunGroupByOutputType[P]>
        }
      >
    >


  export type RunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stravaId?: boolean
    date?: boolean
    distance?: boolean
    duration?: boolean
    pace?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    completedRunPlan?: boolean | Run$completedRunPlanArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stravaId?: boolean
    date?: boolean
    distance?: boolean
    duration?: boolean
    pace?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stravaId?: boolean
    date?: boolean
    distance?: boolean
    duration?: boolean
    pace?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["run"]>

  export type RunSelectScalar = {
    id?: boolean
    stravaId?: boolean
    date?: boolean
    distance?: boolean
    duration?: boolean
    pace?: boolean
    notes?: boolean
    userId?: boolean
  }

  export type RunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stravaId" | "date" | "distance" | "duration" | "pace" | "notes" | "userId", ExtArgs["result"]["run"]>
  export type RunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    completedRunPlan?: boolean | Run$completedRunPlanArgs<ExtArgs>
  }
  export type RunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Run"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      completedRunPlan: Prisma.$RunPlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stravaId: string | null
      date: Date
      distance: number
      duration: number
      pace: number
      notes: string | null
      userId: number
    }, ExtArgs["result"]["run"]>
    composites: {}
  }

  type RunGetPayload<S extends boolean | null | undefined | RunDefaultArgs> = $Result.GetResult<Prisma.$RunPayload, S>

  type RunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunCountAggregateInputType | true
    }

  export interface RunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Run'], meta: { name: 'Run' } }
    /**
     * Find zero or one Run that matches the filter.
     * @param {RunFindUniqueArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunFindUniqueArgs>(args: SelectSubset<T, RunFindUniqueArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Run that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunFindUniqueOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunFindUniqueOrThrowArgs>(args: SelectSubset<T, RunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunFindFirstArgs>(args?: SelectSubset<T, RunFindFirstArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Run that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindFirstOrThrowArgs} args - Arguments to find a Run
     * @example
     * // Get one Run
     * const run = await prisma.run.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunFindFirstOrThrowArgs>(args?: SelectSubset<T, RunFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Runs
     * const runs = await prisma.run.findMany()
     * 
     * // Get first 10 Runs
     * const runs = await prisma.run.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runWithIdOnly = await prisma.run.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunFindManyArgs>(args?: SelectSubset<T, RunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Run.
     * @param {RunCreateArgs} args - Arguments to create a Run.
     * @example
     * // Create one Run
     * const Run = await prisma.run.create({
     *   data: {
     *     // ... data to create a Run
     *   }
     * })
     * 
     */
    create<T extends RunCreateArgs>(args: SelectSubset<T, RunCreateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Runs.
     * @param {RunCreateManyArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunCreateManyArgs>(args?: SelectSubset<T, RunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Runs and returns the data saved in the database.
     * @param {RunCreateManyAndReturnArgs} args - Arguments to create many Runs.
     * @example
     * // Create many Runs
     * const run = await prisma.run.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunCreateManyAndReturnArgs>(args?: SelectSubset<T, RunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Run.
     * @param {RunDeleteArgs} args - Arguments to delete one Run.
     * @example
     * // Delete one Run
     * const Run = await prisma.run.delete({
     *   where: {
     *     // ... filter to delete one Run
     *   }
     * })
     * 
     */
    delete<T extends RunDeleteArgs>(args: SelectSubset<T, RunDeleteArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Run.
     * @param {RunUpdateArgs} args - Arguments to update one Run.
     * @example
     * // Update one Run
     * const run = await prisma.run.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunUpdateArgs>(args: SelectSubset<T, RunUpdateArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Runs.
     * @param {RunDeleteManyArgs} args - Arguments to filter Runs to delete.
     * @example
     * // Delete a few Runs
     * const { count } = await prisma.run.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunDeleteManyArgs>(args?: SelectSubset<T, RunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunUpdateManyArgs>(args: SelectSubset<T, RunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs and returns the data updated in the database.
     * @param {RunUpdateManyAndReturnArgs} args - Arguments to update many Runs.
     * @example
     * // Update many Runs
     * const run = await prisma.run.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Runs and only return the `id`
     * const runWithIdOnly = await prisma.run.updateManyAndReturn({
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
    updateManyAndReturn<T extends RunUpdateManyAndReturnArgs>(args: SelectSubset<T, RunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Run.
     * @param {RunUpsertArgs} args - Arguments to update or create a Run.
     * @example
     * // Update or create a Run
     * const run = await prisma.run.upsert({
     *   create: {
     *     // ... data to create a Run
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Run we want to update
     *   }
     * })
     */
    upsert<T extends RunUpsertArgs>(args: SelectSubset<T, RunUpsertArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunCountArgs} args - Arguments to filter Runs to count.
     * @example
     * // Count the number of Runs
     * const count = await prisma.run.count({
     *   where: {
     *     // ... the filter for the Runs we want to count
     *   }
     * })
    **/
    count<T extends RunCountArgs>(
      args?: Subset<T, RunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunAggregateArgs>(args: Subset<T, RunAggregateArgs>): Prisma.PrismaPromise<GetRunAggregateType<T>>

    /**
     * Group by Run.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunGroupByArgs} args - Group by arguments.
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
      T extends RunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunGroupByArgs['orderBy'] }
        : { orderBy?: RunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Run model
   */
  readonly fields: RunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Run.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completedRunPlan<T extends Run$completedRunPlanArgs<ExtArgs> = {}>(args?: Subset<T, Run$completedRunPlanArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Run model
   */
  interface RunFieldRefs {
    readonly id: FieldRef<"Run", 'Int'>
    readonly stravaId: FieldRef<"Run", 'String'>
    readonly date: FieldRef<"Run", 'DateTime'>
    readonly distance: FieldRef<"Run", 'Float'>
    readonly duration: FieldRef<"Run", 'Float'>
    readonly pace: FieldRef<"Run", 'Float'>
    readonly notes: FieldRef<"Run", 'String'>
    readonly userId: FieldRef<"Run", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Run findUnique
   */
  export type RunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findUniqueOrThrow
   */
  export type RunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run findFirst
   */
  export type RunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findFirstOrThrow
   */
  export type RunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Run to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Runs.
     */
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run findMany
   */
  export type RunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter, which Runs to fetch.
     */
    where?: RunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Runs to fetch.
     */
    orderBy?: RunOrderByWithRelationInput | RunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Runs.
     */
    cursor?: RunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Runs.
     */
    skip?: number
    distinct?: RunScalarFieldEnum | RunScalarFieldEnum[]
  }

  /**
   * Run create
   */
  export type RunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to create a Run.
     */
    data: XOR<RunCreateInput, RunUncheckedCreateInput>
  }

  /**
   * Run createMany
   */
  export type RunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Run createManyAndReturn
   */
  export type RunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to create many Runs.
     */
    data: RunCreateManyInput | RunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Run update
   */
  export type RunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The data needed to update a Run.
     */
    data: XOR<RunUpdateInput, RunUncheckedUpdateInput>
    /**
     * Choose, which Run to update.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run updateMany
   */
  export type RunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
  }

  /**
   * Run updateManyAndReturn
   */
  export type RunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * The data used to update Runs.
     */
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyInput>
    /**
     * Filter which Runs to update
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Run upsert
   */
  export type RunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * The filter to search for the Run to update in case it exists.
     */
    where: RunWhereUniqueInput
    /**
     * In case the Run found by the `where` argument doesn't exist, create a new Run with this data.
     */
    create: XOR<RunCreateInput, RunUncheckedCreateInput>
    /**
     * In case the Run was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunUpdateInput, RunUncheckedUpdateInput>
  }

  /**
   * Run delete
   */
  export type RunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    /**
     * Filter which Run to delete.
     */
    where: RunWhereUniqueInput
  }

  /**
   * Run deleteMany
   */
  export type RunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Runs to delete
     */
    where?: RunWhereInput
    /**
     * Limit how many Runs to delete.
     */
    limit?: number
  }

  /**
   * Run.completedRunPlan
   */
  export type Run$completedRunPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    where?: RunPlanWhereInput
  }

  /**
   * Run without action
   */
  export type RunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
  }


  /**
   * Model RunPlan
   */

  export type AggregateRunPlan = {
    _count: RunPlanCountAggregateOutputType | null
    _avg: RunPlanAvgAggregateOutputType | null
    _sum: RunPlanSumAggregateOutputType | null
    _min: RunPlanMinAggregateOutputType | null
    _max: RunPlanMaxAggregateOutputType | null
  }

  export type RunPlanAvgAggregateOutputType = {
    id: number | null
    week: number | null
    day: number | null
    plannedTime: number | null
    plannedDistance: number | null
    completedRunId: number | null
    userId: number | null
  }

  export type RunPlanSumAggregateOutputType = {
    id: number | null
    week: number | null
    day: number | null
    plannedTime: number | null
    plannedDistance: number | null
    completedRunId: number | null
    userId: number | null
  }

  export type RunPlanMinAggregateOutputType = {
    id: number | null
    week: number | null
    day: number | null
    type: string | null
    plannedTime: number | null
    plannedDistance: number | null
    completedRunId: number | null
    userId: number | null
  }

  export type RunPlanMaxAggregateOutputType = {
    id: number | null
    week: number | null
    day: number | null
    type: string | null
    plannedTime: number | null
    plannedDistance: number | null
    completedRunId: number | null
    userId: number | null
  }

  export type RunPlanCountAggregateOutputType = {
    id: number
    week: number
    day: number
    type: number
    plannedTime: number
    plannedDistance: number
    completedRunId: number
    userId: number
    _all: number
  }


  export type RunPlanAvgAggregateInputType = {
    id?: true
    week?: true
    day?: true
    plannedTime?: true
    plannedDistance?: true
    completedRunId?: true
    userId?: true
  }

  export type RunPlanSumAggregateInputType = {
    id?: true
    week?: true
    day?: true
    plannedTime?: true
    plannedDistance?: true
    completedRunId?: true
    userId?: true
  }

  export type RunPlanMinAggregateInputType = {
    id?: true
    week?: true
    day?: true
    type?: true
    plannedTime?: true
    plannedDistance?: true
    completedRunId?: true
    userId?: true
  }

  export type RunPlanMaxAggregateInputType = {
    id?: true
    week?: true
    day?: true
    type?: true
    plannedTime?: true
    plannedDistance?: true
    completedRunId?: true
    userId?: true
  }

  export type RunPlanCountAggregateInputType = {
    id?: true
    week?: true
    day?: true
    type?: true
    plannedTime?: true
    plannedDistance?: true
    completedRunId?: true
    userId?: true
    _all?: true
  }

  export type RunPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunPlan to aggregate.
     */
    where?: RunPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunPlans to fetch.
     */
    orderBy?: RunPlanOrderByWithRelationInput | RunPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RunPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RunPlans
    **/
    _count?: true | RunPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunPlanMaxAggregateInputType
  }

  export type GetRunPlanAggregateType<T extends RunPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateRunPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRunPlan[P]>
      : GetScalarType<T[P], AggregateRunPlan[P]>
  }




  export type RunPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RunPlanWhereInput
    orderBy?: RunPlanOrderByWithAggregationInput | RunPlanOrderByWithAggregationInput[]
    by: RunPlanScalarFieldEnum[] | RunPlanScalarFieldEnum
    having?: RunPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunPlanCountAggregateInputType | true
    _avg?: RunPlanAvgAggregateInputType
    _sum?: RunPlanSumAggregateInputType
    _min?: RunPlanMinAggregateInputType
    _max?: RunPlanMaxAggregateInputType
  }

  export type RunPlanGroupByOutputType = {
    id: number
    week: number
    day: number
    type: string
    plannedTime: number | null
    plannedDistance: number | null
    completedRunId: number | null
    userId: number
    _count: RunPlanCountAggregateOutputType | null
    _avg: RunPlanAvgAggregateOutputType | null
    _sum: RunPlanSumAggregateOutputType | null
    _min: RunPlanMinAggregateOutputType | null
    _max: RunPlanMaxAggregateOutputType | null
  }

  type GetRunPlanGroupByPayload<T extends RunPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RunPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RunPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RunPlanGroupByOutputType[P]>
            : GetScalarType<T[P], RunPlanGroupByOutputType[P]>
        }
      >
    >


  export type RunPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    day?: boolean
    type?: boolean
    plannedTime?: boolean
    plannedDistance?: boolean
    completedRunId?: boolean
    userId?: boolean
    completedRun?: boolean | RunPlan$completedRunArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runPlan"]>

  export type RunPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    day?: boolean
    type?: boolean
    plannedTime?: boolean
    plannedDistance?: boolean
    completedRunId?: boolean
    userId?: boolean
    completedRun?: boolean | RunPlan$completedRunArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runPlan"]>

  export type RunPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    day?: boolean
    type?: boolean
    plannedTime?: boolean
    plannedDistance?: boolean
    completedRunId?: boolean
    userId?: boolean
    completedRun?: boolean | RunPlan$completedRunArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["runPlan"]>

  export type RunPlanSelectScalar = {
    id?: boolean
    week?: boolean
    day?: boolean
    type?: boolean
    plannedTime?: boolean
    plannedDistance?: boolean
    completedRunId?: boolean
    userId?: boolean
  }

  export type RunPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "week" | "day" | "type" | "plannedTime" | "plannedDistance" | "completedRunId" | "userId", ExtArgs["result"]["runPlan"]>
  export type RunPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedRun?: boolean | RunPlan$completedRunArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RunPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedRun?: boolean | RunPlan$completedRunArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RunPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedRun?: boolean | RunPlan$completedRunArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RunPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RunPlan"
    objects: {
      completedRun: Prisma.$RunPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      week: number
      day: number
      type: string
      plannedTime: number | null
      plannedDistance: number | null
      completedRunId: number | null
      userId: number
    }, ExtArgs["result"]["runPlan"]>
    composites: {}
  }

  type RunPlanGetPayload<S extends boolean | null | undefined | RunPlanDefaultArgs> = $Result.GetResult<Prisma.$RunPlanPayload, S>

  type RunPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RunPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RunPlanCountAggregateInputType | true
    }

  export interface RunPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RunPlan'], meta: { name: 'RunPlan' } }
    /**
     * Find zero or one RunPlan that matches the filter.
     * @param {RunPlanFindUniqueArgs} args - Arguments to find a RunPlan
     * @example
     * // Get one RunPlan
     * const runPlan = await prisma.runPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RunPlanFindUniqueArgs>(args: SelectSubset<T, RunPlanFindUniqueArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RunPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RunPlanFindUniqueOrThrowArgs} args - Arguments to find a RunPlan
     * @example
     * // Get one RunPlan
     * const runPlan = await prisma.runPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RunPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, RunPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlanFindFirstArgs} args - Arguments to find a RunPlan
     * @example
     * // Get one RunPlan
     * const runPlan = await prisma.runPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RunPlanFindFirstArgs>(args?: SelectSubset<T, RunPlanFindFirstArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RunPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlanFindFirstOrThrowArgs} args - Arguments to find a RunPlan
     * @example
     * // Get one RunPlan
     * const runPlan = await prisma.runPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RunPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, RunPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RunPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RunPlans
     * const runPlans = await prisma.runPlan.findMany()
     * 
     * // Get first 10 RunPlans
     * const runPlans = await prisma.runPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const runPlanWithIdOnly = await prisma.runPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RunPlanFindManyArgs>(args?: SelectSubset<T, RunPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RunPlan.
     * @param {RunPlanCreateArgs} args - Arguments to create a RunPlan.
     * @example
     * // Create one RunPlan
     * const RunPlan = await prisma.runPlan.create({
     *   data: {
     *     // ... data to create a RunPlan
     *   }
     * })
     * 
     */
    create<T extends RunPlanCreateArgs>(args: SelectSubset<T, RunPlanCreateArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RunPlans.
     * @param {RunPlanCreateManyArgs} args - Arguments to create many RunPlans.
     * @example
     * // Create many RunPlans
     * const runPlan = await prisma.runPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RunPlanCreateManyArgs>(args?: SelectSubset<T, RunPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RunPlans and returns the data saved in the database.
     * @param {RunPlanCreateManyAndReturnArgs} args - Arguments to create many RunPlans.
     * @example
     * // Create many RunPlans
     * const runPlan = await prisma.runPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RunPlans and only return the `id`
     * const runPlanWithIdOnly = await prisma.runPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RunPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, RunPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RunPlan.
     * @param {RunPlanDeleteArgs} args - Arguments to delete one RunPlan.
     * @example
     * // Delete one RunPlan
     * const RunPlan = await prisma.runPlan.delete({
     *   where: {
     *     // ... filter to delete one RunPlan
     *   }
     * })
     * 
     */
    delete<T extends RunPlanDeleteArgs>(args: SelectSubset<T, RunPlanDeleteArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RunPlan.
     * @param {RunPlanUpdateArgs} args - Arguments to update one RunPlan.
     * @example
     * // Update one RunPlan
     * const runPlan = await prisma.runPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RunPlanUpdateArgs>(args: SelectSubset<T, RunPlanUpdateArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RunPlans.
     * @param {RunPlanDeleteManyArgs} args - Arguments to filter RunPlans to delete.
     * @example
     * // Delete a few RunPlans
     * const { count } = await prisma.runPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RunPlanDeleteManyArgs>(args?: SelectSubset<T, RunPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RunPlans
     * const runPlan = await prisma.runPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RunPlanUpdateManyArgs>(args: SelectSubset<T, RunPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RunPlans and returns the data updated in the database.
     * @param {RunPlanUpdateManyAndReturnArgs} args - Arguments to update many RunPlans.
     * @example
     * // Update many RunPlans
     * const runPlan = await prisma.runPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RunPlans and only return the `id`
     * const runPlanWithIdOnly = await prisma.runPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends RunPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, RunPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RunPlan.
     * @param {RunPlanUpsertArgs} args - Arguments to update or create a RunPlan.
     * @example
     * // Update or create a RunPlan
     * const runPlan = await prisma.runPlan.upsert({
     *   create: {
     *     // ... data to create a RunPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RunPlan we want to update
     *   }
     * })
     */
    upsert<T extends RunPlanUpsertArgs>(args: SelectSubset<T, RunPlanUpsertArgs<ExtArgs>>): Prisma__RunPlanClient<$Result.GetResult<Prisma.$RunPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RunPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlanCountArgs} args - Arguments to filter RunPlans to count.
     * @example
     * // Count the number of RunPlans
     * const count = await prisma.runPlan.count({
     *   where: {
     *     // ... the filter for the RunPlans we want to count
     *   }
     * })
    **/
    count<T extends RunPlanCountArgs>(
      args?: Subset<T, RunPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RunPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunPlanAggregateArgs>(args: Subset<T, RunPlanAggregateArgs>): Prisma.PrismaPromise<GetRunPlanAggregateType<T>>

    /**
     * Group by RunPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunPlanGroupByArgs} args - Group by arguments.
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
      T extends RunPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunPlanGroupByArgs['orderBy'] }
        : { orderBy?: RunPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RunPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RunPlan model
   */
  readonly fields: RunPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RunPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RunPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    completedRun<T extends RunPlan$completedRunArgs<ExtArgs> = {}>(args?: Subset<T, RunPlan$completedRunArgs<ExtArgs>>): Prisma__RunClient<$Result.GetResult<Prisma.$RunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RunPlan model
   */
  interface RunPlanFieldRefs {
    readonly id: FieldRef<"RunPlan", 'Int'>
    readonly week: FieldRef<"RunPlan", 'Int'>
    readonly day: FieldRef<"RunPlan", 'Int'>
    readonly type: FieldRef<"RunPlan", 'String'>
    readonly plannedTime: FieldRef<"RunPlan", 'Float'>
    readonly plannedDistance: FieldRef<"RunPlan", 'Float'>
    readonly completedRunId: FieldRef<"RunPlan", 'Int'>
    readonly userId: FieldRef<"RunPlan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RunPlan findUnique
   */
  export type RunPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * Filter, which RunPlan to fetch.
     */
    where: RunPlanWhereUniqueInput
  }

  /**
   * RunPlan findUniqueOrThrow
   */
  export type RunPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * Filter, which RunPlan to fetch.
     */
    where: RunPlanWhereUniqueInput
  }

  /**
   * RunPlan findFirst
   */
  export type RunPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * Filter, which RunPlan to fetch.
     */
    where?: RunPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunPlans to fetch.
     */
    orderBy?: RunPlanOrderByWithRelationInput | RunPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunPlans.
     */
    cursor?: RunPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunPlans.
     */
    distinct?: RunPlanScalarFieldEnum | RunPlanScalarFieldEnum[]
  }

  /**
   * RunPlan findFirstOrThrow
   */
  export type RunPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * Filter, which RunPlan to fetch.
     */
    where?: RunPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunPlans to fetch.
     */
    orderBy?: RunPlanOrderByWithRelationInput | RunPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RunPlans.
     */
    cursor?: RunPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RunPlans.
     */
    distinct?: RunPlanScalarFieldEnum | RunPlanScalarFieldEnum[]
  }

  /**
   * RunPlan findMany
   */
  export type RunPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * Filter, which RunPlans to fetch.
     */
    where?: RunPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RunPlans to fetch.
     */
    orderBy?: RunPlanOrderByWithRelationInput | RunPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RunPlans.
     */
    cursor?: RunPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RunPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RunPlans.
     */
    skip?: number
    distinct?: RunPlanScalarFieldEnum | RunPlanScalarFieldEnum[]
  }

  /**
   * RunPlan create
   */
  export type RunPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a RunPlan.
     */
    data: XOR<RunPlanCreateInput, RunPlanUncheckedCreateInput>
  }

  /**
   * RunPlan createMany
   */
  export type RunPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RunPlans.
     */
    data: RunPlanCreateManyInput | RunPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RunPlan createManyAndReturn
   */
  export type RunPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * The data used to create many RunPlans.
     */
    data: RunPlanCreateManyInput | RunPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunPlan update
   */
  export type RunPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a RunPlan.
     */
    data: XOR<RunPlanUpdateInput, RunPlanUncheckedUpdateInput>
    /**
     * Choose, which RunPlan to update.
     */
    where: RunPlanWhereUniqueInput
  }

  /**
   * RunPlan updateMany
   */
  export type RunPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RunPlans.
     */
    data: XOR<RunPlanUpdateManyMutationInput, RunPlanUncheckedUpdateManyInput>
    /**
     * Filter which RunPlans to update
     */
    where?: RunPlanWhereInput
    /**
     * Limit how many RunPlans to update.
     */
    limit?: number
  }

  /**
   * RunPlan updateManyAndReturn
   */
  export type RunPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * The data used to update RunPlans.
     */
    data: XOR<RunPlanUpdateManyMutationInput, RunPlanUncheckedUpdateManyInput>
    /**
     * Filter which RunPlans to update
     */
    where?: RunPlanWhereInput
    /**
     * Limit how many RunPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RunPlan upsert
   */
  export type RunPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the RunPlan to update in case it exists.
     */
    where: RunPlanWhereUniqueInput
    /**
     * In case the RunPlan found by the `where` argument doesn't exist, create a new RunPlan with this data.
     */
    create: XOR<RunPlanCreateInput, RunPlanUncheckedCreateInput>
    /**
     * In case the RunPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RunPlanUpdateInput, RunPlanUncheckedUpdateInput>
  }

  /**
   * RunPlan delete
   */
  export type RunPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
    /**
     * Filter which RunPlan to delete.
     */
    where: RunPlanWhereUniqueInput
  }

  /**
   * RunPlan deleteMany
   */
  export type RunPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RunPlans to delete
     */
    where?: RunPlanWhereInput
    /**
     * Limit how many RunPlans to delete.
     */
    limit?: number
  }

  /**
   * RunPlan.completedRun
   */
  export type RunPlan$completedRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Run
     */
    select?: RunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Run
     */
    omit?: RunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunInclude<ExtArgs> | null
    where?: RunWhereInput
  }

  /**
   * RunPlan without action
   */
  export type RunPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RunPlan
     */
    select?: RunPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RunPlan
     */
    omit?: RunPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RunPlanInclude<ExtArgs> | null
  }


  /**
   * Model GymPlan
   */

  export type AggregateGymPlan = {
    _count: GymPlanCountAggregateOutputType | null
    _avg: GymPlanAvgAggregateOutputType | null
    _sum: GymPlanSumAggregateOutputType | null
    _min: GymPlanMinAggregateOutputType | null
    _max: GymPlanMaxAggregateOutputType | null
  }

  export type GymPlanAvgAggregateOutputType = {
    id: number | null
    week: number | null
    day: number | null
    userId: number | null
  }

  export type GymPlanSumAggregateOutputType = {
    id: number | null
    week: number | null
    day: number | null
    userId: number | null
  }

  export type GymPlanMinAggregateOutputType = {
    id: number | null
    week: number | null
    day: number | null
    muscleGroup: string | null
    userId: number | null
  }

  export type GymPlanMaxAggregateOutputType = {
    id: number | null
    week: number | null
    day: number | null
    muscleGroup: string | null
    userId: number | null
  }

  export type GymPlanCountAggregateOutputType = {
    id: number
    week: number
    day: number
    muscleGroup: number
    userId: number
    _all: number
  }


  export type GymPlanAvgAggregateInputType = {
    id?: true
    week?: true
    day?: true
    userId?: true
  }

  export type GymPlanSumAggregateInputType = {
    id?: true
    week?: true
    day?: true
    userId?: true
  }

  export type GymPlanMinAggregateInputType = {
    id?: true
    week?: true
    day?: true
    muscleGroup?: true
    userId?: true
  }

  export type GymPlanMaxAggregateInputType = {
    id?: true
    week?: true
    day?: true
    muscleGroup?: true
    userId?: true
  }

  export type GymPlanCountAggregateInputType = {
    id?: true
    week?: true
    day?: true
    muscleGroup?: true
    userId?: true
    _all?: true
  }

  export type GymPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymPlan to aggregate.
     */
    where?: GymPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymPlans to fetch.
     */
    orderBy?: GymPlanOrderByWithRelationInput | GymPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymPlans
    **/
    _count?: true | GymPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymPlanMaxAggregateInputType
  }

  export type GetGymPlanAggregateType<T extends GymPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateGymPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymPlan[P]>
      : GetScalarType<T[P], AggregateGymPlan[P]>
  }




  export type GymPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymPlanWhereInput
    orderBy?: GymPlanOrderByWithAggregationInput | GymPlanOrderByWithAggregationInput[]
    by: GymPlanScalarFieldEnum[] | GymPlanScalarFieldEnum
    having?: GymPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymPlanCountAggregateInputType | true
    _avg?: GymPlanAvgAggregateInputType
    _sum?: GymPlanSumAggregateInputType
    _min?: GymPlanMinAggregateInputType
    _max?: GymPlanMaxAggregateInputType
  }

  export type GymPlanGroupByOutputType = {
    id: number
    week: number
    day: number
    muscleGroup: string
    userId: number
    _count: GymPlanCountAggregateOutputType | null
    _avg: GymPlanAvgAggregateOutputType | null
    _sum: GymPlanSumAggregateOutputType | null
    _min: GymPlanMinAggregateOutputType | null
    _max: GymPlanMaxAggregateOutputType | null
  }

  type GetGymPlanGroupByPayload<T extends GymPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymPlanGroupByOutputType[P]>
            : GetScalarType<T[P], GymPlanGroupByOutputType[P]>
        }
      >
    >


  export type GymPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    day?: boolean
    muscleGroup?: boolean
    userId?: boolean
    exercises?: boolean | GymPlan$exercisesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GymPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymPlan"]>

  export type GymPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    day?: boolean
    muscleGroup?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymPlan"]>

  export type GymPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    week?: boolean
    day?: boolean
    muscleGroup?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymPlan"]>

  export type GymPlanSelectScalar = {
    id?: boolean
    week?: boolean
    day?: boolean
    muscleGroup?: boolean
    userId?: boolean
  }

  export type GymPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "week" | "day" | "muscleGroup" | "userId", ExtArgs["result"]["gymPlan"]>
  export type GymPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | GymPlan$exercisesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GymPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GymPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GymPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GymPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GymPlan"
    objects: {
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      week: number
      day: number
      muscleGroup: string
      userId: number
    }, ExtArgs["result"]["gymPlan"]>
    composites: {}
  }

  type GymPlanGetPayload<S extends boolean | null | undefined | GymPlanDefaultArgs> = $Result.GetResult<Prisma.$GymPlanPayload, S>

  type GymPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymPlanCountAggregateInputType | true
    }

  export interface GymPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GymPlan'], meta: { name: 'GymPlan' } }
    /**
     * Find zero or one GymPlan that matches the filter.
     * @param {GymPlanFindUniqueArgs} args - Arguments to find a GymPlan
     * @example
     * // Get one GymPlan
     * const gymPlan = await prisma.gymPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymPlanFindUniqueArgs>(args: SelectSubset<T, GymPlanFindUniqueArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GymPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymPlanFindUniqueOrThrowArgs} args - Arguments to find a GymPlan
     * @example
     * // Get one GymPlan
     * const gymPlan = await prisma.gymPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, GymPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPlanFindFirstArgs} args - Arguments to find a GymPlan
     * @example
     * // Get one GymPlan
     * const gymPlan = await prisma.gymPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymPlanFindFirstArgs>(args?: SelectSubset<T, GymPlanFindFirstArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPlanFindFirstOrThrowArgs} args - Arguments to find a GymPlan
     * @example
     * // Get one GymPlan
     * const gymPlan = await prisma.gymPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, GymPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GymPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymPlans
     * const gymPlans = await prisma.gymPlan.findMany()
     * 
     * // Get first 10 GymPlans
     * const gymPlans = await prisma.gymPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymPlanWithIdOnly = await prisma.gymPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymPlanFindManyArgs>(args?: SelectSubset<T, GymPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GymPlan.
     * @param {GymPlanCreateArgs} args - Arguments to create a GymPlan.
     * @example
     * // Create one GymPlan
     * const GymPlan = await prisma.gymPlan.create({
     *   data: {
     *     // ... data to create a GymPlan
     *   }
     * })
     * 
     */
    create<T extends GymPlanCreateArgs>(args: SelectSubset<T, GymPlanCreateArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GymPlans.
     * @param {GymPlanCreateManyArgs} args - Arguments to create many GymPlans.
     * @example
     * // Create many GymPlans
     * const gymPlan = await prisma.gymPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymPlanCreateManyArgs>(args?: SelectSubset<T, GymPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GymPlans and returns the data saved in the database.
     * @param {GymPlanCreateManyAndReturnArgs} args - Arguments to create many GymPlans.
     * @example
     * // Create many GymPlans
     * const gymPlan = await prisma.gymPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GymPlans and only return the `id`
     * const gymPlanWithIdOnly = await prisma.gymPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, GymPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GymPlan.
     * @param {GymPlanDeleteArgs} args - Arguments to delete one GymPlan.
     * @example
     * // Delete one GymPlan
     * const GymPlan = await prisma.gymPlan.delete({
     *   where: {
     *     // ... filter to delete one GymPlan
     *   }
     * })
     * 
     */
    delete<T extends GymPlanDeleteArgs>(args: SelectSubset<T, GymPlanDeleteArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GymPlan.
     * @param {GymPlanUpdateArgs} args - Arguments to update one GymPlan.
     * @example
     * // Update one GymPlan
     * const gymPlan = await prisma.gymPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymPlanUpdateArgs>(args: SelectSubset<T, GymPlanUpdateArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GymPlans.
     * @param {GymPlanDeleteManyArgs} args - Arguments to filter GymPlans to delete.
     * @example
     * // Delete a few GymPlans
     * const { count } = await prisma.gymPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymPlanDeleteManyArgs>(args?: SelectSubset<T, GymPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymPlans
     * const gymPlan = await prisma.gymPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymPlanUpdateManyArgs>(args: SelectSubset<T, GymPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymPlans and returns the data updated in the database.
     * @param {GymPlanUpdateManyAndReturnArgs} args - Arguments to update many GymPlans.
     * @example
     * // Update many GymPlans
     * const gymPlan = await prisma.gymPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GymPlans and only return the `id`
     * const gymPlanWithIdOnly = await prisma.gymPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends GymPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, GymPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GymPlan.
     * @param {GymPlanUpsertArgs} args - Arguments to update or create a GymPlan.
     * @example
     * // Update or create a GymPlan
     * const gymPlan = await prisma.gymPlan.upsert({
     *   create: {
     *     // ... data to create a GymPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymPlan we want to update
     *   }
     * })
     */
    upsert<T extends GymPlanUpsertArgs>(args: SelectSubset<T, GymPlanUpsertArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GymPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPlanCountArgs} args - Arguments to filter GymPlans to count.
     * @example
     * // Count the number of GymPlans
     * const count = await prisma.gymPlan.count({
     *   where: {
     *     // ... the filter for the GymPlans we want to count
     *   }
     * })
    **/
    count<T extends GymPlanCountArgs>(
      args?: Subset<T, GymPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymPlanAggregateArgs>(args: Subset<T, GymPlanAggregateArgs>): Prisma.PrismaPromise<GetGymPlanAggregateType<T>>

    /**
     * Group by GymPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymPlanGroupByArgs} args - Group by arguments.
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
      T extends GymPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymPlanGroupByArgs['orderBy'] }
        : { orderBy?: GymPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GymPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GymPlan model
   */
  readonly fields: GymPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends GymPlan$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, GymPlan$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GymPlan model
   */
  interface GymPlanFieldRefs {
    readonly id: FieldRef<"GymPlan", 'Int'>
    readonly week: FieldRef<"GymPlan", 'Int'>
    readonly day: FieldRef<"GymPlan", 'Int'>
    readonly muscleGroup: FieldRef<"GymPlan", 'String'>
    readonly userId: FieldRef<"GymPlan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GymPlan findUnique
   */
  export type GymPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * Filter, which GymPlan to fetch.
     */
    where: GymPlanWhereUniqueInput
  }

  /**
   * GymPlan findUniqueOrThrow
   */
  export type GymPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * Filter, which GymPlan to fetch.
     */
    where: GymPlanWhereUniqueInput
  }

  /**
   * GymPlan findFirst
   */
  export type GymPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * Filter, which GymPlan to fetch.
     */
    where?: GymPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymPlans to fetch.
     */
    orderBy?: GymPlanOrderByWithRelationInput | GymPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymPlans.
     */
    cursor?: GymPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymPlans.
     */
    distinct?: GymPlanScalarFieldEnum | GymPlanScalarFieldEnum[]
  }

  /**
   * GymPlan findFirstOrThrow
   */
  export type GymPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * Filter, which GymPlan to fetch.
     */
    where?: GymPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymPlans to fetch.
     */
    orderBy?: GymPlanOrderByWithRelationInput | GymPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymPlans.
     */
    cursor?: GymPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymPlans.
     */
    distinct?: GymPlanScalarFieldEnum | GymPlanScalarFieldEnum[]
  }

  /**
   * GymPlan findMany
   */
  export type GymPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * Filter, which GymPlans to fetch.
     */
    where?: GymPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymPlans to fetch.
     */
    orderBy?: GymPlanOrderByWithRelationInput | GymPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymPlans.
     */
    cursor?: GymPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymPlans.
     */
    skip?: number
    distinct?: GymPlanScalarFieldEnum | GymPlanScalarFieldEnum[]
  }

  /**
   * GymPlan create
   */
  export type GymPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a GymPlan.
     */
    data: XOR<GymPlanCreateInput, GymPlanUncheckedCreateInput>
  }

  /**
   * GymPlan createMany
   */
  export type GymPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GymPlans.
     */
    data: GymPlanCreateManyInput | GymPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GymPlan createManyAndReturn
   */
  export type GymPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * The data used to create many GymPlans.
     */
    data: GymPlanCreateManyInput | GymPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymPlan update
   */
  export type GymPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a GymPlan.
     */
    data: XOR<GymPlanUpdateInput, GymPlanUncheckedUpdateInput>
    /**
     * Choose, which GymPlan to update.
     */
    where: GymPlanWhereUniqueInput
  }

  /**
   * GymPlan updateMany
   */
  export type GymPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GymPlans.
     */
    data: XOR<GymPlanUpdateManyMutationInput, GymPlanUncheckedUpdateManyInput>
    /**
     * Filter which GymPlans to update
     */
    where?: GymPlanWhereInput
    /**
     * Limit how many GymPlans to update.
     */
    limit?: number
  }

  /**
   * GymPlan updateManyAndReturn
   */
  export type GymPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * The data used to update GymPlans.
     */
    data: XOR<GymPlanUpdateManyMutationInput, GymPlanUncheckedUpdateManyInput>
    /**
     * Filter which GymPlans to update
     */
    where?: GymPlanWhereInput
    /**
     * Limit how many GymPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymPlan upsert
   */
  export type GymPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the GymPlan to update in case it exists.
     */
    where: GymPlanWhereUniqueInput
    /**
     * In case the GymPlan found by the `where` argument doesn't exist, create a new GymPlan with this data.
     */
    create: XOR<GymPlanCreateInput, GymPlanUncheckedCreateInput>
    /**
     * In case the GymPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymPlanUpdateInput, GymPlanUncheckedUpdateInput>
  }

  /**
   * GymPlan delete
   */
  export type GymPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
    /**
     * Filter which GymPlan to delete.
     */
    where: GymPlanWhereUniqueInput
  }

  /**
   * GymPlan deleteMany
   */
  export type GymPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymPlans to delete
     */
    where?: GymPlanWhereInput
    /**
     * Limit how many GymPlans to delete.
     */
    limit?: number
  }

  /**
   * GymPlan.exercises
   */
  export type GymPlan$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * GymPlan without action
   */
  export type GymPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymPlan
     */
    select?: GymPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymPlan
     */
    omit?: GymPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymPlanInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
    gymPlanId: number | null
    sets: number | null
    reps: number | null
    weight: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
    gymPlanId: number | null
    sets: number | null
    reps: number | null
    weight: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    gymPlanId: number | null
    name: string | null
    sets: number | null
    reps: number | null
    weight: number | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    gymPlanId: number | null
    name: string | null
    sets: number | null
    reps: number | null
    weight: number | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    gymPlanId: number
    name: number
    sets: number
    reps: number
    weight: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
    gymPlanId?: true
    sets?: true
    reps?: true
    weight?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
    gymPlanId?: true
    sets?: true
    reps?: true
    weight?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    gymPlanId?: true
    name?: true
    sets?: true
    reps?: true
    weight?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    gymPlanId?: true
    name?: true
    sets?: true
    reps?: true
    weight?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    gymPlanId?: true
    name?: true
    sets?: true
    reps?: true
    weight?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    gymPlanId: number
    name: string
    sets: number
    reps: number
    weight: number
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gymPlanId?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    completed?: boolean | Exercise$completedArgs<ExtArgs>
    gymPlan?: boolean | GymPlanDefaultArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gymPlanId?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    gymPlan?: boolean | GymPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gymPlanId?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    gymPlan?: boolean | GymPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    gymPlanId?: boolean
    name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gymPlanId" | "name" | "sets" | "reps" | "weight", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completed?: boolean | Exercise$completedArgs<ExtArgs>
    gymPlan?: boolean | GymPlanDefaultArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gymPlan?: boolean | GymPlanDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gymPlan?: boolean | GymPlanDefaultArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      completed: Prisma.$CompletedExercisePayload<ExtArgs>[]
      gymPlan: Prisma.$GymPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gymPlanId: number
      name: string
      sets: number
      reps: number
      weight: number
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    completed<T extends Exercise$completedArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$completedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gymPlan<T extends GymPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymPlanDefaultArgs<ExtArgs>>): Prisma__GymPlanClient<$Result.GetResult<Prisma.$GymPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly gymPlanId: FieldRef<"Exercise", 'Int'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly sets: FieldRef<"Exercise", 'Int'>
    readonly reps: FieldRef<"Exercise", 'Int'>
    readonly weight: FieldRef<"Exercise", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.completed
   */
  export type Exercise$completedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    where?: CompletedExerciseWhereInput
    orderBy?: CompletedExerciseOrderByWithRelationInput | CompletedExerciseOrderByWithRelationInput[]
    cursor?: CompletedExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedExerciseScalarFieldEnum | CompletedExerciseScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model CompletedExercise
   */

  export type AggregateCompletedExercise = {
    _count: CompletedExerciseCountAggregateOutputType | null
    _avg: CompletedExerciseAvgAggregateOutputType | null
    _sum: CompletedExerciseSumAggregateOutputType | null
    _min: CompletedExerciseMinAggregateOutputType | null
    _max: CompletedExerciseMaxAggregateOutputType | null
  }

  export type CompletedExerciseAvgAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    actualSets: number | null
    actualReps: number | null
    actualWeight: number | null
  }

  export type CompletedExerciseSumAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    actualSets: number | null
    actualReps: number | null
    actualWeight: number | null
  }

  export type CompletedExerciseMinAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    actualSets: number | null
    actualReps: number | null
    actualWeight: number | null
    notes: string | null
  }

  export type CompletedExerciseMaxAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    actualSets: number | null
    actualReps: number | null
    actualWeight: number | null
    notes: string | null
  }

  export type CompletedExerciseCountAggregateOutputType = {
    id: number
    exerciseId: number
    actualSets: number
    actualReps: number
    actualWeight: number
    notes: number
    _all: number
  }


  export type CompletedExerciseAvgAggregateInputType = {
    id?: true
    exerciseId?: true
    actualSets?: true
    actualReps?: true
    actualWeight?: true
  }

  export type CompletedExerciseSumAggregateInputType = {
    id?: true
    exerciseId?: true
    actualSets?: true
    actualReps?: true
    actualWeight?: true
  }

  export type CompletedExerciseMinAggregateInputType = {
    id?: true
    exerciseId?: true
    actualSets?: true
    actualReps?: true
    actualWeight?: true
    notes?: true
  }

  export type CompletedExerciseMaxAggregateInputType = {
    id?: true
    exerciseId?: true
    actualSets?: true
    actualReps?: true
    actualWeight?: true
    notes?: true
  }

  export type CompletedExerciseCountAggregateInputType = {
    id?: true
    exerciseId?: true
    actualSets?: true
    actualReps?: true
    actualWeight?: true
    notes?: true
    _all?: true
  }

  export type CompletedExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedExercise to aggregate.
     */
    where?: CompletedExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedExercises to fetch.
     */
    orderBy?: CompletedExerciseOrderByWithRelationInput | CompletedExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedExercises
    **/
    _count?: true | CompletedExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedExerciseMaxAggregateInputType
  }

  export type GetCompletedExerciseAggregateType<T extends CompletedExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedExercise[P]>
      : GetScalarType<T[P], AggregateCompletedExercise[P]>
  }




  export type CompletedExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedExerciseWhereInput
    orderBy?: CompletedExerciseOrderByWithAggregationInput | CompletedExerciseOrderByWithAggregationInput[]
    by: CompletedExerciseScalarFieldEnum[] | CompletedExerciseScalarFieldEnum
    having?: CompletedExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedExerciseCountAggregateInputType | true
    _avg?: CompletedExerciseAvgAggregateInputType
    _sum?: CompletedExerciseSumAggregateInputType
    _min?: CompletedExerciseMinAggregateInputType
    _max?: CompletedExerciseMaxAggregateInputType
  }

  export type CompletedExerciseGroupByOutputType = {
    id: number
    exerciseId: number
    actualSets: number
    actualReps: number
    actualWeight: number
    notes: string | null
    _count: CompletedExerciseCountAggregateOutputType | null
    _avg: CompletedExerciseAvgAggregateOutputType | null
    _sum: CompletedExerciseSumAggregateOutputType | null
    _min: CompletedExerciseMinAggregateOutputType | null
    _max: CompletedExerciseMaxAggregateOutputType | null
  }

  type GetCompletedExerciseGroupByPayload<T extends CompletedExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedExerciseGroupByOutputType[P]>
        }
      >
    >


  export type CompletedExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    actualSets?: boolean
    actualReps?: boolean
    actualWeight?: boolean
    notes?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedExercise"]>

  export type CompletedExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    actualSets?: boolean
    actualReps?: boolean
    actualWeight?: boolean
    notes?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedExercise"]>

  export type CompletedExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    actualSets?: boolean
    actualReps?: boolean
    actualWeight?: boolean
    notes?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedExercise"]>

  export type CompletedExerciseSelectScalar = {
    id?: boolean
    exerciseId?: boolean
    actualSets?: boolean
    actualReps?: boolean
    actualWeight?: boolean
    notes?: boolean
  }

  export type CompletedExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseId" | "actualSets" | "actualReps" | "actualWeight" | "notes", ExtArgs["result"]["completedExercise"]>
  export type CompletedExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type CompletedExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type CompletedExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $CompletedExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedExercise"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      exerciseId: number
      actualSets: number
      actualReps: number
      actualWeight: number
      notes: string | null
    }, ExtArgs["result"]["completedExercise"]>
    composites: {}
  }

  type CompletedExerciseGetPayload<S extends boolean | null | undefined | CompletedExerciseDefaultArgs> = $Result.GetResult<Prisma.$CompletedExercisePayload, S>

  type CompletedExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedExerciseCountAggregateInputType | true
    }

  export interface CompletedExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedExercise'], meta: { name: 'CompletedExercise' } }
    /**
     * Find zero or one CompletedExercise that matches the filter.
     * @param {CompletedExerciseFindUniqueArgs} args - Arguments to find a CompletedExercise
     * @example
     * // Get one CompletedExercise
     * const completedExercise = await prisma.completedExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedExerciseFindUniqueArgs>(args: SelectSubset<T, CompletedExerciseFindUniqueArgs<ExtArgs>>): Prisma__CompletedExerciseClient<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedExerciseFindUniqueOrThrowArgs} args - Arguments to find a CompletedExercise
     * @example
     * // Get one CompletedExercise
     * const completedExercise = await prisma.completedExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedExerciseClient<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedExerciseFindFirstArgs} args - Arguments to find a CompletedExercise
     * @example
     * // Get one CompletedExercise
     * const completedExercise = await prisma.completedExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedExerciseFindFirstArgs>(args?: SelectSubset<T, CompletedExerciseFindFirstArgs<ExtArgs>>): Prisma__CompletedExerciseClient<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedExerciseFindFirstOrThrowArgs} args - Arguments to find a CompletedExercise
     * @example
     * // Get one CompletedExercise
     * const completedExercise = await prisma.completedExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedExerciseClient<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedExercises
     * const completedExercises = await prisma.completedExercise.findMany()
     * 
     * // Get first 10 CompletedExercises
     * const completedExercises = await prisma.completedExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedExerciseWithIdOnly = await prisma.completedExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedExerciseFindManyArgs>(args?: SelectSubset<T, CompletedExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedExercise.
     * @param {CompletedExerciseCreateArgs} args - Arguments to create a CompletedExercise.
     * @example
     * // Create one CompletedExercise
     * const CompletedExercise = await prisma.completedExercise.create({
     *   data: {
     *     // ... data to create a CompletedExercise
     *   }
     * })
     * 
     */
    create<T extends CompletedExerciseCreateArgs>(args: SelectSubset<T, CompletedExerciseCreateArgs<ExtArgs>>): Prisma__CompletedExerciseClient<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedExercises.
     * @param {CompletedExerciseCreateManyArgs} args - Arguments to create many CompletedExercises.
     * @example
     * // Create many CompletedExercises
     * const completedExercise = await prisma.completedExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedExerciseCreateManyArgs>(args?: SelectSubset<T, CompletedExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedExercises and returns the data saved in the database.
     * @param {CompletedExerciseCreateManyAndReturnArgs} args - Arguments to create many CompletedExercises.
     * @example
     * // Create many CompletedExercises
     * const completedExercise = await prisma.completedExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedExercises and only return the `id`
     * const completedExerciseWithIdOnly = await prisma.completedExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedExercise.
     * @param {CompletedExerciseDeleteArgs} args - Arguments to delete one CompletedExercise.
     * @example
     * // Delete one CompletedExercise
     * const CompletedExercise = await prisma.completedExercise.delete({
     *   where: {
     *     // ... filter to delete one CompletedExercise
     *   }
     * })
     * 
     */
    delete<T extends CompletedExerciseDeleteArgs>(args: SelectSubset<T, CompletedExerciseDeleteArgs<ExtArgs>>): Prisma__CompletedExerciseClient<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedExercise.
     * @param {CompletedExerciseUpdateArgs} args - Arguments to update one CompletedExercise.
     * @example
     * // Update one CompletedExercise
     * const completedExercise = await prisma.completedExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedExerciseUpdateArgs>(args: SelectSubset<T, CompletedExerciseUpdateArgs<ExtArgs>>): Prisma__CompletedExerciseClient<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedExercises.
     * @param {CompletedExerciseDeleteManyArgs} args - Arguments to filter CompletedExercises to delete.
     * @example
     * // Delete a few CompletedExercises
     * const { count } = await prisma.completedExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedExerciseDeleteManyArgs>(args?: SelectSubset<T, CompletedExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedExercises
     * const completedExercise = await prisma.completedExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedExerciseUpdateManyArgs>(args: SelectSubset<T, CompletedExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedExercises and returns the data updated in the database.
     * @param {CompletedExerciseUpdateManyAndReturnArgs} args - Arguments to update many CompletedExercises.
     * @example
     * // Update many CompletedExercises
     * const completedExercise = await prisma.completedExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedExercises and only return the `id`
     * const completedExerciseWithIdOnly = await prisma.completedExercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompletedExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedExercise.
     * @param {CompletedExerciseUpsertArgs} args - Arguments to update or create a CompletedExercise.
     * @example
     * // Update or create a CompletedExercise
     * const completedExercise = await prisma.completedExercise.upsert({
     *   create: {
     *     // ... data to create a CompletedExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedExercise we want to update
     *   }
     * })
     */
    upsert<T extends CompletedExerciseUpsertArgs>(args: SelectSubset<T, CompletedExerciseUpsertArgs<ExtArgs>>): Prisma__CompletedExerciseClient<$Result.GetResult<Prisma.$CompletedExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedExerciseCountArgs} args - Arguments to filter CompletedExercises to count.
     * @example
     * // Count the number of CompletedExercises
     * const count = await prisma.completedExercise.count({
     *   where: {
     *     // ... the filter for the CompletedExercises we want to count
     *   }
     * })
    **/
    count<T extends CompletedExerciseCountArgs>(
      args?: Subset<T, CompletedExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompletedExerciseAggregateArgs>(args: Subset<T, CompletedExerciseAggregateArgs>): Prisma.PrismaPromise<GetCompletedExerciseAggregateType<T>>

    /**
     * Group by CompletedExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedExerciseGroupByArgs} args - Group by arguments.
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
      T extends CompletedExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedExerciseGroupByArgs['orderBy'] }
        : { orderBy?: CompletedExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompletedExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedExercise model
   */
  readonly fields: CompletedExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompletedExercise model
   */
  interface CompletedExerciseFieldRefs {
    readonly id: FieldRef<"CompletedExercise", 'Int'>
    readonly exerciseId: FieldRef<"CompletedExercise", 'Int'>
    readonly actualSets: FieldRef<"CompletedExercise", 'Int'>
    readonly actualReps: FieldRef<"CompletedExercise", 'Int'>
    readonly actualWeight: FieldRef<"CompletedExercise", 'Float'>
    readonly notes: FieldRef<"CompletedExercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompletedExercise findUnique
   */
  export type CompletedExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedExercise to fetch.
     */
    where: CompletedExerciseWhereUniqueInput
  }

  /**
   * CompletedExercise findUniqueOrThrow
   */
  export type CompletedExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedExercise to fetch.
     */
    where: CompletedExerciseWhereUniqueInput
  }

  /**
   * CompletedExercise findFirst
   */
  export type CompletedExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedExercise to fetch.
     */
    where?: CompletedExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedExercises to fetch.
     */
    orderBy?: CompletedExerciseOrderByWithRelationInput | CompletedExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedExercises.
     */
    cursor?: CompletedExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedExercises.
     */
    distinct?: CompletedExerciseScalarFieldEnum | CompletedExerciseScalarFieldEnum[]
  }

  /**
   * CompletedExercise findFirstOrThrow
   */
  export type CompletedExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedExercise to fetch.
     */
    where?: CompletedExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedExercises to fetch.
     */
    orderBy?: CompletedExerciseOrderByWithRelationInput | CompletedExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedExercises.
     */
    cursor?: CompletedExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedExercises.
     */
    distinct?: CompletedExerciseScalarFieldEnum | CompletedExerciseScalarFieldEnum[]
  }

  /**
   * CompletedExercise findMany
   */
  export type CompletedExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedExercises to fetch.
     */
    where?: CompletedExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedExercises to fetch.
     */
    orderBy?: CompletedExerciseOrderByWithRelationInput | CompletedExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedExercises.
     */
    cursor?: CompletedExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedExercises.
     */
    skip?: number
    distinct?: CompletedExerciseScalarFieldEnum | CompletedExerciseScalarFieldEnum[]
  }

  /**
   * CompletedExercise create
   */
  export type CompletedExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedExercise.
     */
    data: XOR<CompletedExerciseCreateInput, CompletedExerciseUncheckedCreateInput>
  }

  /**
   * CompletedExercise createMany
   */
  export type CompletedExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedExercises.
     */
    data: CompletedExerciseCreateManyInput | CompletedExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedExercise createManyAndReturn
   */
  export type CompletedExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedExercises.
     */
    data: CompletedExerciseCreateManyInput | CompletedExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedExercise update
   */
  export type CompletedExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedExercise.
     */
    data: XOR<CompletedExerciseUpdateInput, CompletedExerciseUncheckedUpdateInput>
    /**
     * Choose, which CompletedExercise to update.
     */
    where: CompletedExerciseWhereUniqueInput
  }

  /**
   * CompletedExercise updateMany
   */
  export type CompletedExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedExercises.
     */
    data: XOR<CompletedExerciseUpdateManyMutationInput, CompletedExerciseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedExercises to update
     */
    where?: CompletedExerciseWhereInput
    /**
     * Limit how many CompletedExercises to update.
     */
    limit?: number
  }

  /**
   * CompletedExercise updateManyAndReturn
   */
  export type CompletedExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * The data used to update CompletedExercises.
     */
    data: XOR<CompletedExerciseUpdateManyMutationInput, CompletedExerciseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedExercises to update
     */
    where?: CompletedExerciseWhereInput
    /**
     * Limit how many CompletedExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedExercise upsert
   */
  export type CompletedExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedExercise to update in case it exists.
     */
    where: CompletedExerciseWhereUniqueInput
    /**
     * In case the CompletedExercise found by the `where` argument doesn't exist, create a new CompletedExercise with this data.
     */
    create: XOR<CompletedExerciseCreateInput, CompletedExerciseUncheckedCreateInput>
    /**
     * In case the CompletedExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedExerciseUpdateInput, CompletedExerciseUncheckedUpdateInput>
  }

  /**
   * CompletedExercise delete
   */
  export type CompletedExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
    /**
     * Filter which CompletedExercise to delete.
     */
    where: CompletedExerciseWhereUniqueInput
  }

  /**
   * CompletedExercise deleteMany
   */
  export type CompletedExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedExercises to delete
     */
    where?: CompletedExerciseWhereInput
    /**
     * Limit how many CompletedExercises to delete.
     */
    limit?: number
  }

  /**
   * CompletedExercise without action
   */
  export type CompletedExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedExercise
     */
    select?: CompletedExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedExercise
     */
    omit?: CompletedExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedExerciseInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RunScalarFieldEnum: {
    id: 'id',
    stravaId: 'stravaId',
    date: 'date',
    distance: 'distance',
    duration: 'duration',
    pace: 'pace',
    notes: 'notes',
    userId: 'userId'
  };

  export type RunScalarFieldEnum = (typeof RunScalarFieldEnum)[keyof typeof RunScalarFieldEnum]


  export const RunPlanScalarFieldEnum: {
    id: 'id',
    week: 'week',
    day: 'day',
    type: 'type',
    plannedTime: 'plannedTime',
    plannedDistance: 'plannedDistance',
    completedRunId: 'completedRunId',
    userId: 'userId'
  };

  export type RunPlanScalarFieldEnum = (typeof RunPlanScalarFieldEnum)[keyof typeof RunPlanScalarFieldEnum]


  export const GymPlanScalarFieldEnum: {
    id: 'id',
    week: 'week',
    day: 'day',
    muscleGroup: 'muscleGroup',
    userId: 'userId'
  };

  export type GymPlanScalarFieldEnum = (typeof GymPlanScalarFieldEnum)[keyof typeof GymPlanScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    gymPlanId: 'gymPlanId',
    name: 'name',
    sets: 'sets',
    reps: 'reps',
    weight: 'weight'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const CompletedExerciseScalarFieldEnum: {
    id: 'id',
    exerciseId: 'exerciseId',
    actualSets: 'actualSets',
    actualReps: 'actualReps',
    actualWeight: 'actualWeight',
    notes: 'notes'
  };

  export type CompletedExerciseScalarFieldEnum = (typeof CompletedExerciseScalarFieldEnum)[keyof typeof CompletedExerciseScalarFieldEnum]


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
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    runs?: RunListRelationFilter
    runPlans?: RunPlanListRelationFilter
    gymPlans?: GymPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    runs?: RunOrderByRelationAggregateInput
    runPlans?: RunPlanOrderByRelationAggregateInput
    gymPlans?: GymPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    runs?: RunListRelationFilter
    runPlans?: RunPlanListRelationFilter
    gymPlans?: GymPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
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
  }

  export type RunWhereInput = {
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    id?: IntFilter<"Run"> | number
    stravaId?: StringNullableFilter<"Run"> | string | null
    date?: DateTimeFilter<"Run"> | Date | string
    distance?: FloatFilter<"Run"> | number
    duration?: FloatFilter<"Run"> | number
    pace?: FloatFilter<"Run"> | number
    notes?: StringNullableFilter<"Run"> | string | null
    userId?: IntFilter<"Run"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedRunPlan?: XOR<RunPlanNullableScalarRelationFilter, RunPlanWhereInput> | null
  }

  export type RunOrderByWithRelationInput = {
    id?: SortOrder
    stravaId?: SortOrderInput | SortOrder
    date?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    pace?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    completedRunPlan?: RunPlanOrderByWithRelationInput
  }

  export type RunWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    stravaId?: string
    AND?: RunWhereInput | RunWhereInput[]
    OR?: RunWhereInput[]
    NOT?: RunWhereInput | RunWhereInput[]
    date?: DateTimeFilter<"Run"> | Date | string
    distance?: FloatFilter<"Run"> | number
    duration?: FloatFilter<"Run"> | number
    pace?: FloatFilter<"Run"> | number
    notes?: StringNullableFilter<"Run"> | string | null
    userId?: IntFilter<"Run"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedRunPlan?: XOR<RunPlanNullableScalarRelationFilter, RunPlanWhereInput> | null
  }, "id" | "stravaId">

  export type RunOrderByWithAggregationInput = {
    id?: SortOrder
    stravaId?: SortOrderInput | SortOrder
    date?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    pace?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: RunCountOrderByAggregateInput
    _avg?: RunAvgOrderByAggregateInput
    _max?: RunMaxOrderByAggregateInput
    _min?: RunMinOrderByAggregateInput
    _sum?: RunSumOrderByAggregateInput
  }

  export type RunScalarWhereWithAggregatesInput = {
    AND?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    OR?: RunScalarWhereWithAggregatesInput[]
    NOT?: RunScalarWhereWithAggregatesInput | RunScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Run"> | number
    stravaId?: StringNullableWithAggregatesFilter<"Run"> | string | null
    date?: DateTimeWithAggregatesFilter<"Run"> | Date | string
    distance?: FloatWithAggregatesFilter<"Run"> | number
    duration?: FloatWithAggregatesFilter<"Run"> | number
    pace?: FloatWithAggregatesFilter<"Run"> | number
    notes?: StringNullableWithAggregatesFilter<"Run"> | string | null
    userId?: IntWithAggregatesFilter<"Run"> | number
  }

  export type RunPlanWhereInput = {
    AND?: RunPlanWhereInput | RunPlanWhereInput[]
    OR?: RunPlanWhereInput[]
    NOT?: RunPlanWhereInput | RunPlanWhereInput[]
    id?: IntFilter<"RunPlan"> | number
    week?: IntFilter<"RunPlan"> | number
    day?: IntFilter<"RunPlan"> | number
    type?: StringFilter<"RunPlan"> | string
    plannedTime?: FloatNullableFilter<"RunPlan"> | number | null
    plannedDistance?: FloatNullableFilter<"RunPlan"> | number | null
    completedRunId?: IntNullableFilter<"RunPlan"> | number | null
    userId?: IntFilter<"RunPlan"> | number
    completedRun?: XOR<RunNullableScalarRelationFilter, RunWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RunPlanOrderByWithRelationInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    type?: SortOrder
    plannedTime?: SortOrderInput | SortOrder
    plannedDistance?: SortOrderInput | SortOrder
    completedRunId?: SortOrderInput | SortOrder
    userId?: SortOrder
    completedRun?: RunOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RunPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    completedRunId?: number
    AND?: RunPlanWhereInput | RunPlanWhereInput[]
    OR?: RunPlanWhereInput[]
    NOT?: RunPlanWhereInput | RunPlanWhereInput[]
    week?: IntFilter<"RunPlan"> | number
    day?: IntFilter<"RunPlan"> | number
    type?: StringFilter<"RunPlan"> | string
    plannedTime?: FloatNullableFilter<"RunPlan"> | number | null
    plannedDistance?: FloatNullableFilter<"RunPlan"> | number | null
    userId?: IntFilter<"RunPlan"> | number
    completedRun?: XOR<RunNullableScalarRelationFilter, RunWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "completedRunId">

  export type RunPlanOrderByWithAggregationInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    type?: SortOrder
    plannedTime?: SortOrderInput | SortOrder
    plannedDistance?: SortOrderInput | SortOrder
    completedRunId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: RunPlanCountOrderByAggregateInput
    _avg?: RunPlanAvgOrderByAggregateInput
    _max?: RunPlanMaxOrderByAggregateInput
    _min?: RunPlanMinOrderByAggregateInput
    _sum?: RunPlanSumOrderByAggregateInput
  }

  export type RunPlanScalarWhereWithAggregatesInput = {
    AND?: RunPlanScalarWhereWithAggregatesInput | RunPlanScalarWhereWithAggregatesInput[]
    OR?: RunPlanScalarWhereWithAggregatesInput[]
    NOT?: RunPlanScalarWhereWithAggregatesInput | RunPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RunPlan"> | number
    week?: IntWithAggregatesFilter<"RunPlan"> | number
    day?: IntWithAggregatesFilter<"RunPlan"> | number
    type?: StringWithAggregatesFilter<"RunPlan"> | string
    plannedTime?: FloatNullableWithAggregatesFilter<"RunPlan"> | number | null
    plannedDistance?: FloatNullableWithAggregatesFilter<"RunPlan"> | number | null
    completedRunId?: IntNullableWithAggregatesFilter<"RunPlan"> | number | null
    userId?: IntWithAggregatesFilter<"RunPlan"> | number
  }

  export type GymPlanWhereInput = {
    AND?: GymPlanWhereInput | GymPlanWhereInput[]
    OR?: GymPlanWhereInput[]
    NOT?: GymPlanWhereInput | GymPlanWhereInput[]
    id?: IntFilter<"GymPlan"> | number
    week?: IntFilter<"GymPlan"> | number
    day?: IntFilter<"GymPlan"> | number
    muscleGroup?: StringFilter<"GymPlan"> | string
    userId?: IntFilter<"GymPlan"> | number
    exercises?: ExerciseListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GymPlanOrderByWithRelationInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    muscleGroup?: SortOrder
    userId?: SortOrder
    exercises?: ExerciseOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type GymPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GymPlanWhereInput | GymPlanWhereInput[]
    OR?: GymPlanWhereInput[]
    NOT?: GymPlanWhereInput | GymPlanWhereInput[]
    week?: IntFilter<"GymPlan"> | number
    day?: IntFilter<"GymPlan"> | number
    muscleGroup?: StringFilter<"GymPlan"> | string
    userId?: IntFilter<"GymPlan"> | number
    exercises?: ExerciseListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GymPlanOrderByWithAggregationInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    muscleGroup?: SortOrder
    userId?: SortOrder
    _count?: GymPlanCountOrderByAggregateInput
    _avg?: GymPlanAvgOrderByAggregateInput
    _max?: GymPlanMaxOrderByAggregateInput
    _min?: GymPlanMinOrderByAggregateInput
    _sum?: GymPlanSumOrderByAggregateInput
  }

  export type GymPlanScalarWhereWithAggregatesInput = {
    AND?: GymPlanScalarWhereWithAggregatesInput | GymPlanScalarWhereWithAggregatesInput[]
    OR?: GymPlanScalarWhereWithAggregatesInput[]
    NOT?: GymPlanScalarWhereWithAggregatesInput | GymPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GymPlan"> | number
    week?: IntWithAggregatesFilter<"GymPlan"> | number
    day?: IntWithAggregatesFilter<"GymPlan"> | number
    muscleGroup?: StringWithAggregatesFilter<"GymPlan"> | string
    userId?: IntWithAggregatesFilter<"GymPlan"> | number
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    gymPlanId?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    sets?: IntFilter<"Exercise"> | number
    reps?: IntFilter<"Exercise"> | number
    weight?: FloatFilter<"Exercise"> | number
    completed?: CompletedExerciseListRelationFilter
    gymPlan?: XOR<GymPlanScalarRelationFilter, GymPlanWhereInput>
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    gymPlanId?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    completed?: CompletedExerciseOrderByRelationAggregateInput
    gymPlan?: GymPlanOrderByWithRelationInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    gymPlanId?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    sets?: IntFilter<"Exercise"> | number
    reps?: IntFilter<"Exercise"> | number
    weight?: FloatFilter<"Exercise"> | number
    completed?: CompletedExerciseListRelationFilter
    gymPlan?: XOR<GymPlanScalarRelationFilter, GymPlanWhereInput>
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    gymPlanId?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    gymPlanId?: IntWithAggregatesFilter<"Exercise"> | number
    name?: StringWithAggregatesFilter<"Exercise"> | string
    sets?: IntWithAggregatesFilter<"Exercise"> | number
    reps?: IntWithAggregatesFilter<"Exercise"> | number
    weight?: FloatWithAggregatesFilter<"Exercise"> | number
  }

  export type CompletedExerciseWhereInput = {
    AND?: CompletedExerciseWhereInput | CompletedExerciseWhereInput[]
    OR?: CompletedExerciseWhereInput[]
    NOT?: CompletedExerciseWhereInput | CompletedExerciseWhereInput[]
    id?: IntFilter<"CompletedExercise"> | number
    exerciseId?: IntFilter<"CompletedExercise"> | number
    actualSets?: IntFilter<"CompletedExercise"> | number
    actualReps?: IntFilter<"CompletedExercise"> | number
    actualWeight?: FloatFilter<"CompletedExercise"> | number
    notes?: StringNullableFilter<"CompletedExercise"> | string | null
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type CompletedExerciseOrderByWithRelationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    actualSets?: SortOrder
    actualReps?: SortOrder
    actualWeight?: SortOrder
    notes?: SortOrderInput | SortOrder
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type CompletedExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompletedExerciseWhereInput | CompletedExerciseWhereInput[]
    OR?: CompletedExerciseWhereInput[]
    NOT?: CompletedExerciseWhereInput | CompletedExerciseWhereInput[]
    exerciseId?: IntFilter<"CompletedExercise"> | number
    actualSets?: IntFilter<"CompletedExercise"> | number
    actualReps?: IntFilter<"CompletedExercise"> | number
    actualWeight?: FloatFilter<"CompletedExercise"> | number
    notes?: StringNullableFilter<"CompletedExercise"> | string | null
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type CompletedExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    actualSets?: SortOrder
    actualReps?: SortOrder
    actualWeight?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: CompletedExerciseCountOrderByAggregateInput
    _avg?: CompletedExerciseAvgOrderByAggregateInput
    _max?: CompletedExerciseMaxOrderByAggregateInput
    _min?: CompletedExerciseMinOrderByAggregateInput
    _sum?: CompletedExerciseSumOrderByAggregateInput
  }

  export type CompletedExerciseScalarWhereWithAggregatesInput = {
    AND?: CompletedExerciseScalarWhereWithAggregatesInput | CompletedExerciseScalarWhereWithAggregatesInput[]
    OR?: CompletedExerciseScalarWhereWithAggregatesInput[]
    NOT?: CompletedExerciseScalarWhereWithAggregatesInput | CompletedExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompletedExercise"> | number
    exerciseId?: IntWithAggregatesFilter<"CompletedExercise"> | number
    actualSets?: IntWithAggregatesFilter<"CompletedExercise"> | number
    actualReps?: IntWithAggregatesFilter<"CompletedExercise"> | number
    actualWeight?: FloatWithAggregatesFilter<"CompletedExercise"> | number
    notes?: StringNullableWithAggregatesFilter<"CompletedExercise"> | string | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    runs?: RunCreateNestedManyWithoutUserInput
    runPlans?: RunPlanCreateNestedManyWithoutUserInput
    gymPlans?: GymPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    runPlans?: RunPlanUncheckedCreateNestedManyWithoutUserInput
    gymPlans?: GymPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    runs?: RunUpdateManyWithoutUserNestedInput
    runPlans?: RunPlanUpdateManyWithoutUserNestedInput
    gymPlans?: GymPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    runPlans?: RunPlanUncheckedUpdateManyWithoutUserNestedInput
    gymPlans?: GymPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RunCreateInput = {
    stravaId?: string | null
    date: Date | string
    distance: number
    duration: number
    pace: number
    notes?: string | null
    user: UserCreateNestedOneWithoutRunsInput
    completedRunPlan?: RunPlanCreateNestedOneWithoutCompletedRunInput
  }

  export type RunUncheckedCreateInput = {
    id?: number
    stravaId?: string | null
    date: Date | string
    distance: number
    duration: number
    pace: number
    notes?: string | null
    userId: number
    completedRunPlan?: RunPlanUncheckedCreateNestedOneWithoutCompletedRunInput
  }

  export type RunUpdateInput = {
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRunsNestedInput
    completedRunPlan?: RunPlanUpdateOneWithoutCompletedRunNestedInput
  }

  export type RunUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    completedRunPlan?: RunPlanUncheckedUpdateOneWithoutCompletedRunNestedInput
  }

  export type RunCreateManyInput = {
    id?: number
    stravaId?: string | null
    date: Date | string
    distance: number
    duration: number
    pace: number
    notes?: string | null
    userId: number
  }

  export type RunUpdateManyMutationInput = {
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RunPlanCreateInput = {
    week: number
    day: number
    type: string
    plannedTime?: number | null
    plannedDistance?: number | null
    completedRun?: RunCreateNestedOneWithoutCompletedRunPlanInput
    user: UserCreateNestedOneWithoutRunPlansInput
  }

  export type RunPlanUncheckedCreateInput = {
    id?: number
    week: number
    day: number
    type: string
    plannedTime?: number | null
    plannedDistance?: number | null
    completedRunId?: number | null
    userId: number
  }

  export type RunPlanUpdateInput = {
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    completedRun?: RunUpdateOneWithoutCompletedRunPlanNestedInput
    user?: UserUpdateOneRequiredWithoutRunPlansNestedInput
  }

  export type RunPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    completedRunId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RunPlanCreateManyInput = {
    id?: number
    week: number
    day: number
    type: string
    plannedTime?: number | null
    plannedDistance?: number | null
    completedRunId?: number | null
    userId: number
  }

  export type RunPlanUpdateManyMutationInput = {
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RunPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    completedRunId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GymPlanCreateInput = {
    week: number
    day: number
    muscleGroup: string
    exercises?: ExerciseCreateNestedManyWithoutGymPlanInput
    user: UserCreateNestedOneWithoutGymPlansInput
  }

  export type GymPlanUncheckedCreateInput = {
    id?: number
    week: number
    day: number
    muscleGroup: string
    userId: number
    exercises?: ExerciseUncheckedCreateNestedManyWithoutGymPlanInput
  }

  export type GymPlanUpdateInput = {
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUpdateManyWithoutGymPlanNestedInput
    user?: UserUpdateOneRequiredWithoutGymPlansNestedInput
  }

  export type GymPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    exercises?: ExerciseUncheckedUpdateManyWithoutGymPlanNestedInput
  }

  export type GymPlanCreateManyInput = {
    id?: number
    week: number
    day: number
    muscleGroup: string
    userId: number
  }

  export type GymPlanUpdateManyMutationInput = {
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
  }

  export type GymPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseCreateInput = {
    name: string
    sets: number
    reps: number
    weight: number
    completed?: CompletedExerciseCreateNestedManyWithoutExerciseInput
    gymPlan: GymPlanCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    gymPlanId: number
    name: string
    sets: number
    reps: number
    weight: number
    completed?: CompletedExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    completed?: CompletedExerciseUpdateManyWithoutExerciseNestedInput
    gymPlan?: GymPlanUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gymPlanId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    completed?: CompletedExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    gymPlanId: number
    name: string
    sets: number
    reps: number
    weight: number
  }

  export type ExerciseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gymPlanId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type CompletedExerciseCreateInput = {
    actualSets: number
    actualReps: number
    actualWeight: number
    notes?: string | null
    exercise: ExerciseCreateNestedOneWithoutCompletedInput
  }

  export type CompletedExerciseUncheckedCreateInput = {
    id?: number
    exerciseId: number
    actualSets: number
    actualReps: number
    actualWeight: number
    notes?: string | null
  }

  export type CompletedExerciseUpdateInput = {
    actualSets?: IntFieldUpdateOperationsInput | number
    actualReps?: IntFieldUpdateOperationsInput | number
    actualWeight?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: ExerciseUpdateOneRequiredWithoutCompletedNestedInput
  }

  export type CompletedExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    actualSets?: IntFieldUpdateOperationsInput | number
    actualReps?: IntFieldUpdateOperationsInput | number
    actualWeight?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedExerciseCreateManyInput = {
    id?: number
    exerciseId: number
    actualSets: number
    actualReps: number
    actualWeight: number
    notes?: string | null
  }

  export type CompletedExerciseUpdateManyMutationInput = {
    actualSets?: IntFieldUpdateOperationsInput | number
    actualReps?: IntFieldUpdateOperationsInput | number
    actualWeight?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    actualSets?: IntFieldUpdateOperationsInput | number
    actualReps?: IntFieldUpdateOperationsInput | number
    actualWeight?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type RunListRelationFilter = {
    every?: RunWhereInput
    some?: RunWhereInput
    none?: RunWhereInput
  }

  export type RunPlanListRelationFilter = {
    every?: RunPlanWhereInput
    some?: RunPlanWhereInput
    none?: RunPlanWhereInput
  }

  export type GymPlanListRelationFilter = {
    every?: GymPlanWhereInput
    some?: GymPlanWhereInput
    none?: GymPlanWhereInput
  }

  export type RunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RunPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RunPlanNullableScalarRelationFilter = {
    is?: RunPlanWhereInput | null
    isNot?: RunPlanWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RunCountOrderByAggregateInput = {
    id?: SortOrder
    stravaId?: SortOrder
    date?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    pace?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type RunAvgOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    pace?: SortOrder
    userId?: SortOrder
  }

  export type RunMaxOrderByAggregateInput = {
    id?: SortOrder
    stravaId?: SortOrder
    date?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    pace?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type RunMinOrderByAggregateInput = {
    id?: SortOrder
    stravaId?: SortOrder
    date?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    pace?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type RunSumOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    pace?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type RunNullableScalarRelationFilter = {
    is?: RunWhereInput | null
    isNot?: RunWhereInput | null
  }

  export type RunPlanCountOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    type?: SortOrder
    plannedTime?: SortOrder
    plannedDistance?: SortOrder
    completedRunId?: SortOrder
    userId?: SortOrder
  }

  export type RunPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    plannedTime?: SortOrder
    plannedDistance?: SortOrder
    completedRunId?: SortOrder
    userId?: SortOrder
  }

  export type RunPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    type?: SortOrder
    plannedTime?: SortOrder
    plannedDistance?: SortOrder
    completedRunId?: SortOrder
    userId?: SortOrder
  }

  export type RunPlanMinOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    type?: SortOrder
    plannedTime?: SortOrder
    plannedDistance?: SortOrder
    completedRunId?: SortOrder
    userId?: SortOrder
  }

  export type RunPlanSumOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    plannedTime?: SortOrder
    plannedDistance?: SortOrder
    completedRunId?: SortOrder
    userId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymPlanCountOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    muscleGroup?: SortOrder
    userId?: SortOrder
  }

  export type GymPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    userId?: SortOrder
  }

  export type GymPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    muscleGroup?: SortOrder
    userId?: SortOrder
  }

  export type GymPlanMinOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    muscleGroup?: SortOrder
    userId?: SortOrder
  }

  export type GymPlanSumOrderByAggregateInput = {
    id?: SortOrder
    week?: SortOrder
    day?: SortOrder
    userId?: SortOrder
  }

  export type CompletedExerciseListRelationFilter = {
    every?: CompletedExerciseWhereInput
    some?: CompletedExerciseWhereInput
    none?: CompletedExerciseWhereInput
  }

  export type GymPlanScalarRelationFilter = {
    is?: GymPlanWhereInput
    isNot?: GymPlanWhereInput
  }

  export type CompletedExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    gymPlanId?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    gymPlanId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    gymPlanId?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    gymPlanId?: SortOrder
    name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    gymPlanId?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type CompletedExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    actualSets?: SortOrder
    actualReps?: SortOrder
    actualWeight?: SortOrder
    notes?: SortOrder
  }

  export type CompletedExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    actualSets?: SortOrder
    actualReps?: SortOrder
    actualWeight?: SortOrder
  }

  export type CompletedExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    actualSets?: SortOrder
    actualReps?: SortOrder
    actualWeight?: SortOrder
    notes?: SortOrder
  }

  export type CompletedExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    actualSets?: SortOrder
    actualReps?: SortOrder
    actualWeight?: SortOrder
    notes?: SortOrder
  }

  export type CompletedExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    actualSets?: SortOrder
    actualReps?: SortOrder
    actualWeight?: SortOrder
  }

  export type RunCreateNestedManyWithoutUserInput = {
    create?: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput> | RunCreateWithoutUserInput[] | RunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunCreateOrConnectWithoutUserInput | RunCreateOrConnectWithoutUserInput[]
    createMany?: RunCreateManyUserInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type RunPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<RunPlanCreateWithoutUserInput, RunPlanUncheckedCreateWithoutUserInput> | RunPlanCreateWithoutUserInput[] | RunPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunPlanCreateOrConnectWithoutUserInput | RunPlanCreateOrConnectWithoutUserInput[]
    createMany?: RunPlanCreateManyUserInputEnvelope
    connect?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
  }

  export type GymPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<GymPlanCreateWithoutUserInput, GymPlanUncheckedCreateWithoutUserInput> | GymPlanCreateWithoutUserInput[] | GymPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymPlanCreateOrConnectWithoutUserInput | GymPlanCreateOrConnectWithoutUserInput[]
    createMany?: GymPlanCreateManyUserInputEnvelope
    connect?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
  }

  export type RunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput> | RunCreateWithoutUserInput[] | RunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunCreateOrConnectWithoutUserInput | RunCreateOrConnectWithoutUserInput[]
    createMany?: RunCreateManyUserInputEnvelope
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
  }

  export type RunPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RunPlanCreateWithoutUserInput, RunPlanUncheckedCreateWithoutUserInput> | RunPlanCreateWithoutUserInput[] | RunPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunPlanCreateOrConnectWithoutUserInput | RunPlanCreateOrConnectWithoutUserInput[]
    createMany?: RunPlanCreateManyUserInputEnvelope
    connect?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
  }

  export type GymPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GymPlanCreateWithoutUserInput, GymPlanUncheckedCreateWithoutUserInput> | GymPlanCreateWithoutUserInput[] | GymPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymPlanCreateOrConnectWithoutUserInput | GymPlanCreateOrConnectWithoutUserInput[]
    createMany?: GymPlanCreateManyUserInputEnvelope
    connect?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RunUpdateManyWithoutUserNestedInput = {
    create?: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput> | RunCreateWithoutUserInput[] | RunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunCreateOrConnectWithoutUserInput | RunCreateOrConnectWithoutUserInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutUserInput | RunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RunCreateManyUserInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutUserInput | RunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RunUpdateManyWithWhereWithoutUserInput | RunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type RunPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<RunPlanCreateWithoutUserInput, RunPlanUncheckedCreateWithoutUserInput> | RunPlanCreateWithoutUserInput[] | RunPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunPlanCreateOrConnectWithoutUserInput | RunPlanCreateOrConnectWithoutUserInput[]
    upsert?: RunPlanUpsertWithWhereUniqueWithoutUserInput | RunPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RunPlanCreateManyUserInputEnvelope
    set?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
    disconnect?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
    delete?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
    connect?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
    update?: RunPlanUpdateWithWhereUniqueWithoutUserInput | RunPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RunPlanUpdateManyWithWhereWithoutUserInput | RunPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RunPlanScalarWhereInput | RunPlanScalarWhereInput[]
  }

  export type GymPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<GymPlanCreateWithoutUserInput, GymPlanUncheckedCreateWithoutUserInput> | GymPlanCreateWithoutUserInput[] | GymPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymPlanCreateOrConnectWithoutUserInput | GymPlanCreateOrConnectWithoutUserInput[]
    upsert?: GymPlanUpsertWithWhereUniqueWithoutUserInput | GymPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GymPlanCreateManyUserInputEnvelope
    set?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
    disconnect?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
    delete?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
    connect?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
    update?: GymPlanUpdateWithWhereUniqueWithoutUserInput | GymPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GymPlanUpdateManyWithWhereWithoutUserInput | GymPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GymPlanScalarWhereInput | GymPlanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput> | RunCreateWithoutUserInput[] | RunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunCreateOrConnectWithoutUserInput | RunCreateOrConnectWithoutUserInput[]
    upsert?: RunUpsertWithWhereUniqueWithoutUserInput | RunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RunCreateManyUserInputEnvelope
    set?: RunWhereUniqueInput | RunWhereUniqueInput[]
    disconnect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    delete?: RunWhereUniqueInput | RunWhereUniqueInput[]
    connect?: RunWhereUniqueInput | RunWhereUniqueInput[]
    update?: RunUpdateWithWhereUniqueWithoutUserInput | RunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RunUpdateManyWithWhereWithoutUserInput | RunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RunScalarWhereInput | RunScalarWhereInput[]
  }

  export type RunPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RunPlanCreateWithoutUserInput, RunPlanUncheckedCreateWithoutUserInput> | RunPlanCreateWithoutUserInput[] | RunPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RunPlanCreateOrConnectWithoutUserInput | RunPlanCreateOrConnectWithoutUserInput[]
    upsert?: RunPlanUpsertWithWhereUniqueWithoutUserInput | RunPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RunPlanCreateManyUserInputEnvelope
    set?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
    disconnect?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
    delete?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
    connect?: RunPlanWhereUniqueInput | RunPlanWhereUniqueInput[]
    update?: RunPlanUpdateWithWhereUniqueWithoutUserInput | RunPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RunPlanUpdateManyWithWhereWithoutUserInput | RunPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RunPlanScalarWhereInput | RunPlanScalarWhereInput[]
  }

  export type GymPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GymPlanCreateWithoutUserInput, GymPlanUncheckedCreateWithoutUserInput> | GymPlanCreateWithoutUserInput[] | GymPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymPlanCreateOrConnectWithoutUserInput | GymPlanCreateOrConnectWithoutUserInput[]
    upsert?: GymPlanUpsertWithWhereUniqueWithoutUserInput | GymPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GymPlanCreateManyUserInputEnvelope
    set?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
    disconnect?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
    delete?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
    connect?: GymPlanWhereUniqueInput | GymPlanWhereUniqueInput[]
    update?: GymPlanUpdateWithWhereUniqueWithoutUserInput | GymPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GymPlanUpdateManyWithWhereWithoutUserInput | GymPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GymPlanScalarWhereInput | GymPlanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRunsInput = {
    create?: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRunsInput
    connect?: UserWhereUniqueInput
  }

  export type RunPlanCreateNestedOneWithoutCompletedRunInput = {
    create?: XOR<RunPlanCreateWithoutCompletedRunInput, RunPlanUncheckedCreateWithoutCompletedRunInput>
    connectOrCreate?: RunPlanCreateOrConnectWithoutCompletedRunInput
    connect?: RunPlanWhereUniqueInput
  }

  export type RunPlanUncheckedCreateNestedOneWithoutCompletedRunInput = {
    create?: XOR<RunPlanCreateWithoutCompletedRunInput, RunPlanUncheckedCreateWithoutCompletedRunInput>
    connectOrCreate?: RunPlanCreateOrConnectWithoutCompletedRunInput
    connect?: RunPlanWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRunsInput
    upsert?: UserUpsertWithoutRunsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRunsInput, UserUpdateWithoutRunsInput>, UserUncheckedUpdateWithoutRunsInput>
  }

  export type RunPlanUpdateOneWithoutCompletedRunNestedInput = {
    create?: XOR<RunPlanCreateWithoutCompletedRunInput, RunPlanUncheckedCreateWithoutCompletedRunInput>
    connectOrCreate?: RunPlanCreateOrConnectWithoutCompletedRunInput
    upsert?: RunPlanUpsertWithoutCompletedRunInput
    disconnect?: RunPlanWhereInput | boolean
    delete?: RunPlanWhereInput | boolean
    connect?: RunPlanWhereUniqueInput
    update?: XOR<XOR<RunPlanUpdateToOneWithWhereWithoutCompletedRunInput, RunPlanUpdateWithoutCompletedRunInput>, RunPlanUncheckedUpdateWithoutCompletedRunInput>
  }

  export type RunPlanUncheckedUpdateOneWithoutCompletedRunNestedInput = {
    create?: XOR<RunPlanCreateWithoutCompletedRunInput, RunPlanUncheckedCreateWithoutCompletedRunInput>
    connectOrCreate?: RunPlanCreateOrConnectWithoutCompletedRunInput
    upsert?: RunPlanUpsertWithoutCompletedRunInput
    disconnect?: RunPlanWhereInput | boolean
    delete?: RunPlanWhereInput | boolean
    connect?: RunPlanWhereUniqueInput
    update?: XOR<XOR<RunPlanUpdateToOneWithWhereWithoutCompletedRunInput, RunPlanUpdateWithoutCompletedRunInput>, RunPlanUncheckedUpdateWithoutCompletedRunInput>
  }

  export type RunCreateNestedOneWithoutCompletedRunPlanInput = {
    create?: XOR<RunCreateWithoutCompletedRunPlanInput, RunUncheckedCreateWithoutCompletedRunPlanInput>
    connectOrCreate?: RunCreateOrConnectWithoutCompletedRunPlanInput
    connect?: RunWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRunPlansInput = {
    create?: XOR<UserCreateWithoutRunPlansInput, UserUncheckedCreateWithoutRunPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutRunPlansInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RunUpdateOneWithoutCompletedRunPlanNestedInput = {
    create?: XOR<RunCreateWithoutCompletedRunPlanInput, RunUncheckedCreateWithoutCompletedRunPlanInput>
    connectOrCreate?: RunCreateOrConnectWithoutCompletedRunPlanInput
    upsert?: RunUpsertWithoutCompletedRunPlanInput
    disconnect?: RunWhereInput | boolean
    delete?: RunWhereInput | boolean
    connect?: RunWhereUniqueInput
    update?: XOR<XOR<RunUpdateToOneWithWhereWithoutCompletedRunPlanInput, RunUpdateWithoutCompletedRunPlanInput>, RunUncheckedUpdateWithoutCompletedRunPlanInput>
  }

  export type UserUpdateOneRequiredWithoutRunPlansNestedInput = {
    create?: XOR<UserCreateWithoutRunPlansInput, UserUncheckedCreateWithoutRunPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutRunPlansInput
    upsert?: UserUpsertWithoutRunPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRunPlansInput, UserUpdateWithoutRunPlansInput>, UserUncheckedUpdateWithoutRunPlansInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExerciseCreateNestedManyWithoutGymPlanInput = {
    create?: XOR<ExerciseCreateWithoutGymPlanInput, ExerciseUncheckedCreateWithoutGymPlanInput> | ExerciseCreateWithoutGymPlanInput[] | ExerciseUncheckedCreateWithoutGymPlanInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutGymPlanInput | ExerciseCreateOrConnectWithoutGymPlanInput[]
    createMany?: ExerciseCreateManyGymPlanInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutGymPlansInput = {
    create?: XOR<UserCreateWithoutGymPlansInput, UserUncheckedCreateWithoutGymPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymPlansInput
    connect?: UserWhereUniqueInput
  }

  export type ExerciseUncheckedCreateNestedManyWithoutGymPlanInput = {
    create?: XOR<ExerciseCreateWithoutGymPlanInput, ExerciseUncheckedCreateWithoutGymPlanInput> | ExerciseCreateWithoutGymPlanInput[] | ExerciseUncheckedCreateWithoutGymPlanInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutGymPlanInput | ExerciseCreateOrConnectWithoutGymPlanInput[]
    createMany?: ExerciseCreateManyGymPlanInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUpdateManyWithoutGymPlanNestedInput = {
    create?: XOR<ExerciseCreateWithoutGymPlanInput, ExerciseUncheckedCreateWithoutGymPlanInput> | ExerciseCreateWithoutGymPlanInput[] | ExerciseUncheckedCreateWithoutGymPlanInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutGymPlanInput | ExerciseCreateOrConnectWithoutGymPlanInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutGymPlanInput | ExerciseUpsertWithWhereUniqueWithoutGymPlanInput[]
    createMany?: ExerciseCreateManyGymPlanInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutGymPlanInput | ExerciseUpdateWithWhereUniqueWithoutGymPlanInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutGymPlanInput | ExerciseUpdateManyWithWhereWithoutGymPlanInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutGymPlansNestedInput = {
    create?: XOR<UserCreateWithoutGymPlansInput, UserUncheckedCreateWithoutGymPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymPlansInput
    upsert?: UserUpsertWithoutGymPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGymPlansInput, UserUpdateWithoutGymPlansInput>, UserUncheckedUpdateWithoutGymPlansInput>
  }

  export type ExerciseUncheckedUpdateManyWithoutGymPlanNestedInput = {
    create?: XOR<ExerciseCreateWithoutGymPlanInput, ExerciseUncheckedCreateWithoutGymPlanInput> | ExerciseCreateWithoutGymPlanInput[] | ExerciseUncheckedCreateWithoutGymPlanInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutGymPlanInput | ExerciseCreateOrConnectWithoutGymPlanInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutGymPlanInput | ExerciseUpsertWithWhereUniqueWithoutGymPlanInput[]
    createMany?: ExerciseCreateManyGymPlanInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutGymPlanInput | ExerciseUpdateWithWhereUniqueWithoutGymPlanInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutGymPlanInput | ExerciseUpdateManyWithWhereWithoutGymPlanInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type CompletedExerciseCreateNestedManyWithoutExerciseInput = {
    create?: XOR<CompletedExerciseCreateWithoutExerciseInput, CompletedExerciseUncheckedCreateWithoutExerciseInput> | CompletedExerciseCreateWithoutExerciseInput[] | CompletedExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: CompletedExerciseCreateOrConnectWithoutExerciseInput | CompletedExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: CompletedExerciseCreateManyExerciseInputEnvelope
    connect?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
  }

  export type GymPlanCreateNestedOneWithoutExercisesInput = {
    create?: XOR<GymPlanCreateWithoutExercisesInput, GymPlanUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: GymPlanCreateOrConnectWithoutExercisesInput
    connect?: GymPlanWhereUniqueInput
  }

  export type CompletedExerciseUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<CompletedExerciseCreateWithoutExerciseInput, CompletedExerciseUncheckedCreateWithoutExerciseInput> | CompletedExerciseCreateWithoutExerciseInput[] | CompletedExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: CompletedExerciseCreateOrConnectWithoutExerciseInput | CompletedExerciseCreateOrConnectWithoutExerciseInput[]
    createMany?: CompletedExerciseCreateManyExerciseInputEnvelope
    connect?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
  }

  export type CompletedExerciseUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<CompletedExerciseCreateWithoutExerciseInput, CompletedExerciseUncheckedCreateWithoutExerciseInput> | CompletedExerciseCreateWithoutExerciseInput[] | CompletedExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: CompletedExerciseCreateOrConnectWithoutExerciseInput | CompletedExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: CompletedExerciseUpsertWithWhereUniqueWithoutExerciseInput | CompletedExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: CompletedExerciseCreateManyExerciseInputEnvelope
    set?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
    disconnect?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
    delete?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
    connect?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
    update?: CompletedExerciseUpdateWithWhereUniqueWithoutExerciseInput | CompletedExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: CompletedExerciseUpdateManyWithWhereWithoutExerciseInput | CompletedExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: CompletedExerciseScalarWhereInput | CompletedExerciseScalarWhereInput[]
  }

  export type GymPlanUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<GymPlanCreateWithoutExercisesInput, GymPlanUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: GymPlanCreateOrConnectWithoutExercisesInput
    upsert?: GymPlanUpsertWithoutExercisesInput
    connect?: GymPlanWhereUniqueInput
    update?: XOR<XOR<GymPlanUpdateToOneWithWhereWithoutExercisesInput, GymPlanUpdateWithoutExercisesInput>, GymPlanUncheckedUpdateWithoutExercisesInput>
  }

  export type CompletedExerciseUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<CompletedExerciseCreateWithoutExerciseInput, CompletedExerciseUncheckedCreateWithoutExerciseInput> | CompletedExerciseCreateWithoutExerciseInput[] | CompletedExerciseUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: CompletedExerciseCreateOrConnectWithoutExerciseInput | CompletedExerciseCreateOrConnectWithoutExerciseInput[]
    upsert?: CompletedExerciseUpsertWithWhereUniqueWithoutExerciseInput | CompletedExerciseUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: CompletedExerciseCreateManyExerciseInputEnvelope
    set?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
    disconnect?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
    delete?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
    connect?: CompletedExerciseWhereUniqueInput | CompletedExerciseWhereUniqueInput[]
    update?: CompletedExerciseUpdateWithWhereUniqueWithoutExerciseInput | CompletedExerciseUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: CompletedExerciseUpdateManyWithWhereWithoutExerciseInput | CompletedExerciseUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: CompletedExerciseScalarWhereInput | CompletedExerciseScalarWhereInput[]
  }

  export type ExerciseCreateNestedOneWithoutCompletedInput = {
    create?: XOR<ExerciseCreateWithoutCompletedInput, ExerciseUncheckedCreateWithoutCompletedInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutCompletedInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseUpdateOneRequiredWithoutCompletedNestedInput = {
    create?: XOR<ExerciseCreateWithoutCompletedInput, ExerciseUncheckedCreateWithoutCompletedInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutCompletedInput
    upsert?: ExerciseUpsertWithoutCompletedInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutCompletedInput, ExerciseUpdateWithoutCompletedInput>, ExerciseUncheckedUpdateWithoutCompletedInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type RunCreateWithoutUserInput = {
    stravaId?: string | null
    date: Date | string
    distance: number
    duration: number
    pace: number
    notes?: string | null
    completedRunPlan?: RunPlanCreateNestedOneWithoutCompletedRunInput
  }

  export type RunUncheckedCreateWithoutUserInput = {
    id?: number
    stravaId?: string | null
    date: Date | string
    distance: number
    duration: number
    pace: number
    notes?: string | null
    completedRunPlan?: RunPlanUncheckedCreateNestedOneWithoutCompletedRunInput
  }

  export type RunCreateOrConnectWithoutUserInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput>
  }

  export type RunCreateManyUserInputEnvelope = {
    data: RunCreateManyUserInput | RunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RunPlanCreateWithoutUserInput = {
    week: number
    day: number
    type: string
    plannedTime?: number | null
    plannedDistance?: number | null
    completedRun?: RunCreateNestedOneWithoutCompletedRunPlanInput
  }

  export type RunPlanUncheckedCreateWithoutUserInput = {
    id?: number
    week: number
    day: number
    type: string
    plannedTime?: number | null
    plannedDistance?: number | null
    completedRunId?: number | null
  }

  export type RunPlanCreateOrConnectWithoutUserInput = {
    where: RunPlanWhereUniqueInput
    create: XOR<RunPlanCreateWithoutUserInput, RunPlanUncheckedCreateWithoutUserInput>
  }

  export type RunPlanCreateManyUserInputEnvelope = {
    data: RunPlanCreateManyUserInput | RunPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GymPlanCreateWithoutUserInput = {
    week: number
    day: number
    muscleGroup: string
    exercises?: ExerciseCreateNestedManyWithoutGymPlanInput
  }

  export type GymPlanUncheckedCreateWithoutUserInput = {
    id?: number
    week: number
    day: number
    muscleGroup: string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutGymPlanInput
  }

  export type GymPlanCreateOrConnectWithoutUserInput = {
    where: GymPlanWhereUniqueInput
    create: XOR<GymPlanCreateWithoutUserInput, GymPlanUncheckedCreateWithoutUserInput>
  }

  export type GymPlanCreateManyUserInputEnvelope = {
    data: GymPlanCreateManyUserInput | GymPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RunUpsertWithWhereUniqueWithoutUserInput = {
    where: RunWhereUniqueInput
    update: XOR<RunUpdateWithoutUserInput, RunUncheckedUpdateWithoutUserInput>
    create: XOR<RunCreateWithoutUserInput, RunUncheckedCreateWithoutUserInput>
  }

  export type RunUpdateWithWhereUniqueWithoutUserInput = {
    where: RunWhereUniqueInput
    data: XOR<RunUpdateWithoutUserInput, RunUncheckedUpdateWithoutUserInput>
  }

  export type RunUpdateManyWithWhereWithoutUserInput = {
    where: RunScalarWhereInput
    data: XOR<RunUpdateManyMutationInput, RunUncheckedUpdateManyWithoutUserInput>
  }

  export type RunScalarWhereInput = {
    AND?: RunScalarWhereInput | RunScalarWhereInput[]
    OR?: RunScalarWhereInput[]
    NOT?: RunScalarWhereInput | RunScalarWhereInput[]
    id?: IntFilter<"Run"> | number
    stravaId?: StringNullableFilter<"Run"> | string | null
    date?: DateTimeFilter<"Run"> | Date | string
    distance?: FloatFilter<"Run"> | number
    duration?: FloatFilter<"Run"> | number
    pace?: FloatFilter<"Run"> | number
    notes?: StringNullableFilter<"Run"> | string | null
    userId?: IntFilter<"Run"> | number
  }

  export type RunPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: RunPlanWhereUniqueInput
    update: XOR<RunPlanUpdateWithoutUserInput, RunPlanUncheckedUpdateWithoutUserInput>
    create: XOR<RunPlanCreateWithoutUserInput, RunPlanUncheckedCreateWithoutUserInput>
  }

  export type RunPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: RunPlanWhereUniqueInput
    data: XOR<RunPlanUpdateWithoutUserInput, RunPlanUncheckedUpdateWithoutUserInput>
  }

  export type RunPlanUpdateManyWithWhereWithoutUserInput = {
    where: RunPlanScalarWhereInput
    data: XOR<RunPlanUpdateManyMutationInput, RunPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type RunPlanScalarWhereInput = {
    AND?: RunPlanScalarWhereInput | RunPlanScalarWhereInput[]
    OR?: RunPlanScalarWhereInput[]
    NOT?: RunPlanScalarWhereInput | RunPlanScalarWhereInput[]
    id?: IntFilter<"RunPlan"> | number
    week?: IntFilter<"RunPlan"> | number
    day?: IntFilter<"RunPlan"> | number
    type?: StringFilter<"RunPlan"> | string
    plannedTime?: FloatNullableFilter<"RunPlan"> | number | null
    plannedDistance?: FloatNullableFilter<"RunPlan"> | number | null
    completedRunId?: IntNullableFilter<"RunPlan"> | number | null
    userId?: IntFilter<"RunPlan"> | number
  }

  export type GymPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: GymPlanWhereUniqueInput
    update: XOR<GymPlanUpdateWithoutUserInput, GymPlanUncheckedUpdateWithoutUserInput>
    create: XOR<GymPlanCreateWithoutUserInput, GymPlanUncheckedCreateWithoutUserInput>
  }

  export type GymPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: GymPlanWhereUniqueInput
    data: XOR<GymPlanUpdateWithoutUserInput, GymPlanUncheckedUpdateWithoutUserInput>
  }

  export type GymPlanUpdateManyWithWhereWithoutUserInput = {
    where: GymPlanScalarWhereInput
    data: XOR<GymPlanUpdateManyMutationInput, GymPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type GymPlanScalarWhereInput = {
    AND?: GymPlanScalarWhereInput | GymPlanScalarWhereInput[]
    OR?: GymPlanScalarWhereInput[]
    NOT?: GymPlanScalarWhereInput | GymPlanScalarWhereInput[]
    id?: IntFilter<"GymPlan"> | number
    week?: IntFilter<"GymPlan"> | number
    day?: IntFilter<"GymPlan"> | number
    muscleGroup?: StringFilter<"GymPlan"> | string
    userId?: IntFilter<"GymPlan"> | number
  }

  export type UserCreateWithoutRunsInput = {
    email: string
    password: string
    runPlans?: RunPlanCreateNestedManyWithoutUserInput
    gymPlans?: GymPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRunsInput = {
    id?: number
    email: string
    password: string
    runPlans?: RunPlanUncheckedCreateNestedManyWithoutUserInput
    gymPlans?: GymPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
  }

  export type RunPlanCreateWithoutCompletedRunInput = {
    week: number
    day: number
    type: string
    plannedTime?: number | null
    plannedDistance?: number | null
    user: UserCreateNestedOneWithoutRunPlansInput
  }

  export type RunPlanUncheckedCreateWithoutCompletedRunInput = {
    id?: number
    week: number
    day: number
    type: string
    plannedTime?: number | null
    plannedDistance?: number | null
    userId: number
  }

  export type RunPlanCreateOrConnectWithoutCompletedRunInput = {
    where: RunPlanWhereUniqueInput
    create: XOR<RunPlanCreateWithoutCompletedRunInput, RunPlanUncheckedCreateWithoutCompletedRunInput>
  }

  export type UserUpsertWithoutRunsInput = {
    update: XOR<UserUpdateWithoutRunsInput, UserUncheckedUpdateWithoutRunsInput>
    create: XOR<UserCreateWithoutRunsInput, UserUncheckedCreateWithoutRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRunsInput, UserUncheckedUpdateWithoutRunsInput>
  }

  export type UserUpdateWithoutRunsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    runPlans?: RunPlanUpdateManyWithoutUserNestedInput
    gymPlans?: GymPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRunsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    runPlans?: RunPlanUncheckedUpdateManyWithoutUserNestedInput
    gymPlans?: GymPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RunPlanUpsertWithoutCompletedRunInput = {
    update: XOR<RunPlanUpdateWithoutCompletedRunInput, RunPlanUncheckedUpdateWithoutCompletedRunInput>
    create: XOR<RunPlanCreateWithoutCompletedRunInput, RunPlanUncheckedCreateWithoutCompletedRunInput>
    where?: RunPlanWhereInput
  }

  export type RunPlanUpdateToOneWithWhereWithoutCompletedRunInput = {
    where?: RunPlanWhereInput
    data: XOR<RunPlanUpdateWithoutCompletedRunInput, RunPlanUncheckedUpdateWithoutCompletedRunInput>
  }

  export type RunPlanUpdateWithoutCompletedRunInput = {
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutRunPlansNestedInput
  }

  export type RunPlanUncheckedUpdateWithoutCompletedRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RunCreateWithoutCompletedRunPlanInput = {
    stravaId?: string | null
    date: Date | string
    distance: number
    duration: number
    pace: number
    notes?: string | null
    user: UserCreateNestedOneWithoutRunsInput
  }

  export type RunUncheckedCreateWithoutCompletedRunPlanInput = {
    id?: number
    stravaId?: string | null
    date: Date | string
    distance: number
    duration: number
    pace: number
    notes?: string | null
    userId: number
  }

  export type RunCreateOrConnectWithoutCompletedRunPlanInput = {
    where: RunWhereUniqueInput
    create: XOR<RunCreateWithoutCompletedRunPlanInput, RunUncheckedCreateWithoutCompletedRunPlanInput>
  }

  export type UserCreateWithoutRunPlansInput = {
    email: string
    password: string
    runs?: RunCreateNestedManyWithoutUserInput
    gymPlans?: GymPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRunPlansInput = {
    id?: number
    email: string
    password: string
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    gymPlans?: GymPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRunPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRunPlansInput, UserUncheckedCreateWithoutRunPlansInput>
  }

  export type RunUpsertWithoutCompletedRunPlanInput = {
    update: XOR<RunUpdateWithoutCompletedRunPlanInput, RunUncheckedUpdateWithoutCompletedRunPlanInput>
    create: XOR<RunCreateWithoutCompletedRunPlanInput, RunUncheckedCreateWithoutCompletedRunPlanInput>
    where?: RunWhereInput
  }

  export type RunUpdateToOneWithWhereWithoutCompletedRunPlanInput = {
    where?: RunWhereInput
    data: XOR<RunUpdateWithoutCompletedRunPlanInput, RunUncheckedUpdateWithoutCompletedRunPlanInput>
  }

  export type RunUpdateWithoutCompletedRunPlanInput = {
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRunsNestedInput
  }

  export type RunUncheckedUpdateWithoutCompletedRunPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutRunPlansInput = {
    update: XOR<UserUpdateWithoutRunPlansInput, UserUncheckedUpdateWithoutRunPlansInput>
    create: XOR<UserCreateWithoutRunPlansInput, UserUncheckedCreateWithoutRunPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRunPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRunPlansInput, UserUncheckedUpdateWithoutRunPlansInput>
  }

  export type UserUpdateWithoutRunPlansInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    runs?: RunUpdateManyWithoutUserNestedInput
    gymPlans?: GymPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRunPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    gymPlans?: GymPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExerciseCreateWithoutGymPlanInput = {
    name: string
    sets: number
    reps: number
    weight: number
    completed?: CompletedExerciseCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutGymPlanInput = {
    id?: number
    name: string
    sets: number
    reps: number
    weight: number
    completed?: CompletedExerciseUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutGymPlanInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutGymPlanInput, ExerciseUncheckedCreateWithoutGymPlanInput>
  }

  export type ExerciseCreateManyGymPlanInputEnvelope = {
    data: ExerciseCreateManyGymPlanInput | ExerciseCreateManyGymPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGymPlansInput = {
    email: string
    password: string
    runs?: RunCreateNestedManyWithoutUserInput
    runPlans?: RunPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGymPlansInput = {
    id?: number
    email: string
    password: string
    runs?: RunUncheckedCreateNestedManyWithoutUserInput
    runPlans?: RunPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGymPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymPlansInput, UserUncheckedCreateWithoutGymPlansInput>
  }

  export type ExerciseUpsertWithWhereUniqueWithoutGymPlanInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutGymPlanInput, ExerciseUncheckedUpdateWithoutGymPlanInput>
    create: XOR<ExerciseCreateWithoutGymPlanInput, ExerciseUncheckedCreateWithoutGymPlanInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutGymPlanInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutGymPlanInput, ExerciseUncheckedUpdateWithoutGymPlanInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutGymPlanInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutGymPlanInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: IntFilter<"Exercise"> | number
    gymPlanId?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    sets?: IntFilter<"Exercise"> | number
    reps?: IntFilter<"Exercise"> | number
    weight?: FloatFilter<"Exercise"> | number
  }

  export type UserUpsertWithoutGymPlansInput = {
    update: XOR<UserUpdateWithoutGymPlansInput, UserUncheckedUpdateWithoutGymPlansInput>
    create: XOR<UserCreateWithoutGymPlansInput, UserUncheckedCreateWithoutGymPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGymPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGymPlansInput, UserUncheckedUpdateWithoutGymPlansInput>
  }

  export type UserUpdateWithoutGymPlansInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    runs?: RunUpdateManyWithoutUserNestedInput
    runPlans?: RunPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGymPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    runs?: RunUncheckedUpdateManyWithoutUserNestedInput
    runPlans?: RunPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompletedExerciseCreateWithoutExerciseInput = {
    actualSets: number
    actualReps: number
    actualWeight: number
    notes?: string | null
  }

  export type CompletedExerciseUncheckedCreateWithoutExerciseInput = {
    id?: number
    actualSets: number
    actualReps: number
    actualWeight: number
    notes?: string | null
  }

  export type CompletedExerciseCreateOrConnectWithoutExerciseInput = {
    where: CompletedExerciseWhereUniqueInput
    create: XOR<CompletedExerciseCreateWithoutExerciseInput, CompletedExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type CompletedExerciseCreateManyExerciseInputEnvelope = {
    data: CompletedExerciseCreateManyExerciseInput | CompletedExerciseCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type GymPlanCreateWithoutExercisesInput = {
    week: number
    day: number
    muscleGroup: string
    user: UserCreateNestedOneWithoutGymPlansInput
  }

  export type GymPlanUncheckedCreateWithoutExercisesInput = {
    id?: number
    week: number
    day: number
    muscleGroup: string
    userId: number
  }

  export type GymPlanCreateOrConnectWithoutExercisesInput = {
    where: GymPlanWhereUniqueInput
    create: XOR<GymPlanCreateWithoutExercisesInput, GymPlanUncheckedCreateWithoutExercisesInput>
  }

  export type CompletedExerciseUpsertWithWhereUniqueWithoutExerciseInput = {
    where: CompletedExerciseWhereUniqueInput
    update: XOR<CompletedExerciseUpdateWithoutExerciseInput, CompletedExerciseUncheckedUpdateWithoutExerciseInput>
    create: XOR<CompletedExerciseCreateWithoutExerciseInput, CompletedExerciseUncheckedCreateWithoutExerciseInput>
  }

  export type CompletedExerciseUpdateWithWhereUniqueWithoutExerciseInput = {
    where: CompletedExerciseWhereUniqueInput
    data: XOR<CompletedExerciseUpdateWithoutExerciseInput, CompletedExerciseUncheckedUpdateWithoutExerciseInput>
  }

  export type CompletedExerciseUpdateManyWithWhereWithoutExerciseInput = {
    where: CompletedExerciseScalarWhereInput
    data: XOR<CompletedExerciseUpdateManyMutationInput, CompletedExerciseUncheckedUpdateManyWithoutExerciseInput>
  }

  export type CompletedExerciseScalarWhereInput = {
    AND?: CompletedExerciseScalarWhereInput | CompletedExerciseScalarWhereInput[]
    OR?: CompletedExerciseScalarWhereInput[]
    NOT?: CompletedExerciseScalarWhereInput | CompletedExerciseScalarWhereInput[]
    id?: IntFilter<"CompletedExercise"> | number
    exerciseId?: IntFilter<"CompletedExercise"> | number
    actualSets?: IntFilter<"CompletedExercise"> | number
    actualReps?: IntFilter<"CompletedExercise"> | number
    actualWeight?: FloatFilter<"CompletedExercise"> | number
    notes?: StringNullableFilter<"CompletedExercise"> | string | null
  }

  export type GymPlanUpsertWithoutExercisesInput = {
    update: XOR<GymPlanUpdateWithoutExercisesInput, GymPlanUncheckedUpdateWithoutExercisesInput>
    create: XOR<GymPlanCreateWithoutExercisesInput, GymPlanUncheckedCreateWithoutExercisesInput>
    where?: GymPlanWhereInput
  }

  export type GymPlanUpdateToOneWithWhereWithoutExercisesInput = {
    where?: GymPlanWhereInput
    data: XOR<GymPlanUpdateWithoutExercisesInput, GymPlanUncheckedUpdateWithoutExercisesInput>
  }

  export type GymPlanUpdateWithoutExercisesInput = {
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGymPlansNestedInput
  }

  export type GymPlanUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseCreateWithoutCompletedInput = {
    name: string
    sets: number
    reps: number
    weight: number
    gymPlan: GymPlanCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateWithoutCompletedInput = {
    id?: number
    gymPlanId: number
    name: string
    sets: number
    reps: number
    weight: number
  }

  export type ExerciseCreateOrConnectWithoutCompletedInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutCompletedInput, ExerciseUncheckedCreateWithoutCompletedInput>
  }

  export type ExerciseUpsertWithoutCompletedInput = {
    update: XOR<ExerciseUpdateWithoutCompletedInput, ExerciseUncheckedUpdateWithoutCompletedInput>
    create: XOR<ExerciseCreateWithoutCompletedInput, ExerciseUncheckedCreateWithoutCompletedInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutCompletedInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutCompletedInput, ExerciseUncheckedUpdateWithoutCompletedInput>
  }

  export type ExerciseUpdateWithoutCompletedInput = {
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    gymPlan?: GymPlanUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutCompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    gymPlanId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type RunCreateManyUserInput = {
    id?: number
    stravaId?: string | null
    date: Date | string
    distance: number
    duration: number
    pace: number
    notes?: string | null
  }

  export type RunPlanCreateManyUserInput = {
    id?: number
    week: number
    day: number
    type: string
    plannedTime?: number | null
    plannedDistance?: number | null
    completedRunId?: number | null
  }

  export type GymPlanCreateManyUserInput = {
    id?: number
    week: number
    day: number
    muscleGroup: string
  }

  export type RunUpdateWithoutUserInput = {
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completedRunPlan?: RunPlanUpdateOneWithoutCompletedRunNestedInput
  }

  export type RunUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    completedRunPlan?: RunPlanUncheckedUpdateOneWithoutCompletedRunNestedInput
  }

  export type RunUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    stravaId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    distance?: FloatFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    pace?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RunPlanUpdateWithoutUserInput = {
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    completedRun?: RunUpdateOneWithoutCompletedRunPlanNestedInput
  }

  export type RunPlanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    completedRunId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RunPlanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    plannedTime?: NullableFloatFieldUpdateOperationsInput | number | null
    plannedDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    completedRunId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GymPlanUpdateWithoutUserInput = {
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUpdateManyWithoutGymPlanNestedInput
  }

  export type GymPlanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUncheckedUpdateManyWithoutGymPlanNestedInput
  }

  export type GymPlanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    muscleGroup?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseCreateManyGymPlanInput = {
    id?: number
    name: string
    sets: number
    reps: number
    weight: number
  }

  export type ExerciseUpdateWithoutGymPlanInput = {
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    completed?: CompletedExerciseUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutGymPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    completed?: CompletedExerciseUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutGymPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type CompletedExerciseCreateManyExerciseInput = {
    id?: number
    actualSets: number
    actualReps: number
    actualWeight: number
    notes?: string | null
  }

  export type CompletedExerciseUpdateWithoutExerciseInput = {
    actualSets?: IntFieldUpdateOperationsInput | number
    actualReps?: IntFieldUpdateOperationsInput | number
    actualWeight?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedExerciseUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    actualSets?: IntFieldUpdateOperationsInput | number
    actualReps?: IntFieldUpdateOperationsInput | number
    actualWeight?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompletedExerciseUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    actualSets?: IntFieldUpdateOperationsInput | number
    actualReps?: IntFieldUpdateOperationsInput | number
    actualWeight?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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