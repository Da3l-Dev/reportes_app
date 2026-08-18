import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.3.0
 * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
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
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly item_cct: "item_cct";
    readonly item_opc_educativa: "item_opc_educativa";
    readonly mapa_base: "mapa_base";
    readonly ni_grado_control: "ni_grado_control";
    readonly ni_grado_turno: "ni_grado_turno";
    readonly ni_opcion_educativa: "ni_opcion_educativa";
    readonly ni_sector: "ni_sector";
    readonly ni_sostenimiento: "ni_sostenimiento";
    readonly ni_zona: "ni_zona";
    readonly analisis_zona: "analisis_zona";
    readonly analisis_cct_campo: "analisis_cct_campo";
    readonly analisis_sector: "analisis_sector";
    readonly supervisores: "supervisores";
    readonly totales_opedu: "totales_opedu";
    readonly alumnos_prioritarios_primaria_indigena: "alumnos_prioritarios_primaria_indigena";
    readonly alumnos_prioritarios_preescolar_general: "alumnos_prioritarios_preescolar_general";
    readonly alumnos_prioritarios_preescolar_indigena: "alumnos_prioritarios_preescolar_indigena";
    readonly alumnos_prioritarios_primaria_general: "alumnos_prioritarios_primaria_general";
    readonly alumnos_prioritarios_secundaria_general: "alumnos_prioritarios_secundaria_general";
    readonly alumnos_prioritarios_secundaria_tecnica: "alumnos_prioritarios_secundaria_tecnica";
    readonly alumnos_prioritarios_telesecundaria: "alumnos_prioritarios_telesecundaria";
    readonly primera_exploracion_sisat: "primera_exploracion_sisat";
    readonly segunda_exploracion_sisat: "segunda_exploracion_sisat";
    readonly ni_cct: "ni_cct";
    readonly tercera_exploracion_sisat: "tercera_exploracion_sisat";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "item_cct" | "item_opc_educativa" | "mapa_base" | "ni_grado_control" | "ni_grado_turno" | "ni_opcion_educativa" | "ni_sector" | "ni_sostenimiento" | "ni_zona" | "analisis_zona" | "analisis_cct_campo" | "analisis_sector" | "supervisores" | "totales_opedu" | "alumnos_prioritarios_primaria_indigena" | "alumnos_prioritarios_preescolar_general" | "alumnos_prioritarios_preescolar_indigena" | "alumnos_prioritarios_primaria_general" | "alumnos_prioritarios_secundaria_general" | "alumnos_prioritarios_secundaria_tecnica" | "alumnos_prioritarios_telesecundaria" | "primera_exploracion_sisat" | "segunda_exploracion_sisat" | "ni_cct" | "tercera_exploracion_sisat";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        item_cct: {
            payload: Prisma.$item_cctPayload<ExtArgs>;
            fields: Prisma.item_cctFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.item_cctFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.item_cctFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>;
                };
                findFirst: {
                    args: Prisma.item_cctFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.item_cctFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>;
                };
                findMany: {
                    args: Prisma.item_cctFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>[];
                };
                create: {
                    args: Prisma.item_cctCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>;
                };
                createMany: {
                    args: Prisma.item_cctCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.item_cctCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>[];
                };
                delete: {
                    args: Prisma.item_cctDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>;
                };
                update: {
                    args: Prisma.item_cctUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>;
                };
                deleteMany: {
                    args: Prisma.item_cctDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.item_cctUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.item_cctUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>[];
                };
                upsert: {
                    args: Prisma.item_cctUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_cctPayload>;
                };
                aggregate: {
                    args: Prisma.Item_cctAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateItem_cct>;
                };
                groupBy: {
                    args: Prisma.item_cctGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Item_cctGroupByOutputType>[];
                };
                count: {
                    args: Prisma.item_cctCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Item_cctCountAggregateOutputType> | number;
                };
            };
        };
        item_opc_educativa: {
            payload: Prisma.$item_opc_educativaPayload<ExtArgs>;
            fields: Prisma.item_opc_educativaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.item_opc_educativaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.item_opc_educativaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>;
                };
                findFirst: {
                    args: Prisma.item_opc_educativaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.item_opc_educativaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>;
                };
                findMany: {
                    args: Prisma.item_opc_educativaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>[];
                };
                create: {
                    args: Prisma.item_opc_educativaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>;
                };
                createMany: {
                    args: Prisma.item_opc_educativaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.item_opc_educativaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>[];
                };
                delete: {
                    args: Prisma.item_opc_educativaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>;
                };
                update: {
                    args: Prisma.item_opc_educativaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>;
                };
                deleteMany: {
                    args: Prisma.item_opc_educativaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.item_opc_educativaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.item_opc_educativaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>[];
                };
                upsert: {
                    args: Prisma.item_opc_educativaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$item_opc_educativaPayload>;
                };
                aggregate: {
                    args: Prisma.Item_opc_educativaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateItem_opc_educativa>;
                };
                groupBy: {
                    args: Prisma.item_opc_educativaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Item_opc_educativaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.item_opc_educativaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Item_opc_educativaCountAggregateOutputType> | number;
                };
            };
        };
        mapa_base: {
            payload: Prisma.$mapa_basePayload<ExtArgs>;
            fields: Prisma.mapa_baseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mapa_baseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mapa_baseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>;
                };
                findFirst: {
                    args: Prisma.mapa_baseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mapa_baseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>;
                };
                findMany: {
                    args: Prisma.mapa_baseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>[];
                };
                create: {
                    args: Prisma.mapa_baseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>;
                };
                createMany: {
                    args: Prisma.mapa_baseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.mapa_baseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>[];
                };
                delete: {
                    args: Prisma.mapa_baseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>;
                };
                update: {
                    args: Prisma.mapa_baseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>;
                };
                deleteMany: {
                    args: Prisma.mapa_baseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mapa_baseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.mapa_baseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>[];
                };
                upsert: {
                    args: Prisma.mapa_baseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mapa_basePayload>;
                };
                aggregate: {
                    args: Prisma.Mapa_baseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMapa_base>;
                };
                groupBy: {
                    args: Prisma.mapa_baseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mapa_baseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mapa_baseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mapa_baseCountAggregateOutputType> | number;
                };
            };
        };
        ni_grado_control: {
            payload: Prisma.$ni_grado_controlPayload<ExtArgs>;
            fields: Prisma.ni_grado_controlFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ni_grado_controlFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ni_grado_controlFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>;
                };
                findFirst: {
                    args: Prisma.ni_grado_controlFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ni_grado_controlFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>;
                };
                findMany: {
                    args: Prisma.ni_grado_controlFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>[];
                };
                create: {
                    args: Prisma.ni_grado_controlCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>;
                };
                createMany: {
                    args: Prisma.ni_grado_controlCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ni_grado_controlCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>[];
                };
                delete: {
                    args: Prisma.ni_grado_controlDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>;
                };
                update: {
                    args: Prisma.ni_grado_controlUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>;
                };
                deleteMany: {
                    args: Prisma.ni_grado_controlDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ni_grado_controlUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ni_grado_controlUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>[];
                };
                upsert: {
                    args: Prisma.ni_grado_controlUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_controlPayload>;
                };
                aggregate: {
                    args: Prisma.Ni_grado_controlAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNi_grado_control>;
                };
                groupBy: {
                    args: Prisma.ni_grado_controlGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_grado_controlGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ni_grado_controlCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_grado_controlCountAggregateOutputType> | number;
                };
            };
        };
        ni_grado_turno: {
            payload: Prisma.$ni_grado_turnoPayload<ExtArgs>;
            fields: Prisma.ni_grado_turnoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ni_grado_turnoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ni_grado_turnoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>;
                };
                findFirst: {
                    args: Prisma.ni_grado_turnoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ni_grado_turnoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>;
                };
                findMany: {
                    args: Prisma.ni_grado_turnoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>[];
                };
                create: {
                    args: Prisma.ni_grado_turnoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>;
                };
                createMany: {
                    args: Prisma.ni_grado_turnoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ni_grado_turnoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>[];
                };
                delete: {
                    args: Prisma.ni_grado_turnoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>;
                };
                update: {
                    args: Prisma.ni_grado_turnoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>;
                };
                deleteMany: {
                    args: Prisma.ni_grado_turnoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ni_grado_turnoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ni_grado_turnoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>[];
                };
                upsert: {
                    args: Prisma.ni_grado_turnoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_grado_turnoPayload>;
                };
                aggregate: {
                    args: Prisma.Ni_grado_turnoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNi_grado_turno>;
                };
                groupBy: {
                    args: Prisma.ni_grado_turnoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_grado_turnoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ni_grado_turnoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_grado_turnoCountAggregateOutputType> | number;
                };
            };
        };
        ni_opcion_educativa: {
            payload: Prisma.$ni_opcion_educativaPayload<ExtArgs>;
            fields: Prisma.ni_opcion_educativaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ni_opcion_educativaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ni_opcion_educativaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>;
                };
                findFirst: {
                    args: Prisma.ni_opcion_educativaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ni_opcion_educativaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>;
                };
                findMany: {
                    args: Prisma.ni_opcion_educativaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>[];
                };
                create: {
                    args: Prisma.ni_opcion_educativaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>;
                };
                createMany: {
                    args: Prisma.ni_opcion_educativaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ni_opcion_educativaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>[];
                };
                delete: {
                    args: Prisma.ni_opcion_educativaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>;
                };
                update: {
                    args: Prisma.ni_opcion_educativaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>;
                };
                deleteMany: {
                    args: Prisma.ni_opcion_educativaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ni_opcion_educativaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ni_opcion_educativaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>[];
                };
                upsert: {
                    args: Prisma.ni_opcion_educativaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_opcion_educativaPayload>;
                };
                aggregate: {
                    args: Prisma.Ni_opcion_educativaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNi_opcion_educativa>;
                };
                groupBy: {
                    args: Prisma.ni_opcion_educativaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_opcion_educativaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ni_opcion_educativaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_opcion_educativaCountAggregateOutputType> | number;
                };
            };
        };
        ni_sector: {
            payload: Prisma.$ni_sectorPayload<ExtArgs>;
            fields: Prisma.ni_sectorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ni_sectorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ni_sectorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>;
                };
                findFirst: {
                    args: Prisma.ni_sectorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ni_sectorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>;
                };
                findMany: {
                    args: Prisma.ni_sectorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>[];
                };
                create: {
                    args: Prisma.ni_sectorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>;
                };
                createMany: {
                    args: Prisma.ni_sectorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ni_sectorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>[];
                };
                delete: {
                    args: Prisma.ni_sectorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>;
                };
                update: {
                    args: Prisma.ni_sectorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>;
                };
                deleteMany: {
                    args: Prisma.ni_sectorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ni_sectorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ni_sectorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>[];
                };
                upsert: {
                    args: Prisma.ni_sectorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sectorPayload>;
                };
                aggregate: {
                    args: Prisma.Ni_sectorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNi_sector>;
                };
                groupBy: {
                    args: Prisma.ni_sectorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_sectorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ni_sectorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_sectorCountAggregateOutputType> | number;
                };
            };
        };
        ni_sostenimiento: {
            payload: Prisma.$ni_sostenimientoPayload<ExtArgs>;
            fields: Prisma.ni_sostenimientoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ni_sostenimientoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ni_sostenimientoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>;
                };
                findFirst: {
                    args: Prisma.ni_sostenimientoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ni_sostenimientoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>;
                };
                findMany: {
                    args: Prisma.ni_sostenimientoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>[];
                };
                create: {
                    args: Prisma.ni_sostenimientoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>;
                };
                createMany: {
                    args: Prisma.ni_sostenimientoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ni_sostenimientoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>[];
                };
                delete: {
                    args: Prisma.ni_sostenimientoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>;
                };
                update: {
                    args: Prisma.ni_sostenimientoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>;
                };
                deleteMany: {
                    args: Prisma.ni_sostenimientoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ni_sostenimientoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ni_sostenimientoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>[];
                };
                upsert: {
                    args: Prisma.ni_sostenimientoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_sostenimientoPayload>;
                };
                aggregate: {
                    args: Prisma.Ni_sostenimientoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNi_sostenimiento>;
                };
                groupBy: {
                    args: Prisma.ni_sostenimientoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_sostenimientoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ni_sostenimientoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_sostenimientoCountAggregateOutputType> | number;
                };
            };
        };
        ni_zona: {
            payload: Prisma.$ni_zonaPayload<ExtArgs>;
            fields: Prisma.ni_zonaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ni_zonaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ni_zonaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>;
                };
                findFirst: {
                    args: Prisma.ni_zonaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ni_zonaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>;
                };
                findMany: {
                    args: Prisma.ni_zonaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>[];
                };
                create: {
                    args: Prisma.ni_zonaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>;
                };
                createMany: {
                    args: Prisma.ni_zonaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ni_zonaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>[];
                };
                delete: {
                    args: Prisma.ni_zonaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>;
                };
                update: {
                    args: Prisma.ni_zonaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>;
                };
                deleteMany: {
                    args: Prisma.ni_zonaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ni_zonaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ni_zonaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>[];
                };
                upsert: {
                    args: Prisma.ni_zonaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_zonaPayload>;
                };
                aggregate: {
                    args: Prisma.Ni_zonaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNi_zona>;
                };
                groupBy: {
                    args: Prisma.ni_zonaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_zonaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ni_zonaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_zonaCountAggregateOutputType> | number;
                };
            };
        };
        analisis_zona: {
            payload: Prisma.$analisis_zonaPayload<ExtArgs>;
            fields: Prisma.analisis_zonaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.analisis_zonaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.analisis_zonaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>;
                };
                findFirst: {
                    args: Prisma.analisis_zonaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.analisis_zonaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>;
                };
                findMany: {
                    args: Prisma.analisis_zonaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>[];
                };
                create: {
                    args: Prisma.analisis_zonaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>;
                };
                createMany: {
                    args: Prisma.analisis_zonaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.analisis_zonaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>[];
                };
                delete: {
                    args: Prisma.analisis_zonaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>;
                };
                update: {
                    args: Prisma.analisis_zonaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>;
                };
                deleteMany: {
                    args: Prisma.analisis_zonaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.analisis_zonaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.analisis_zonaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>[];
                };
                upsert: {
                    args: Prisma.analisis_zonaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_zonaPayload>;
                };
                aggregate: {
                    args: Prisma.Analisis_zonaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalisis_zona>;
                };
                groupBy: {
                    args: Prisma.analisis_zonaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Analisis_zonaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.analisis_zonaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Analisis_zonaCountAggregateOutputType> | number;
                };
            };
        };
        analisis_cct_campo: {
            payload: Prisma.$analisis_cct_campoPayload<ExtArgs>;
            fields: Prisma.analisis_cct_campoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.analisis_cct_campoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.analisis_cct_campoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>;
                };
                findFirst: {
                    args: Prisma.analisis_cct_campoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.analisis_cct_campoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>;
                };
                findMany: {
                    args: Prisma.analisis_cct_campoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>[];
                };
                create: {
                    args: Prisma.analisis_cct_campoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>;
                };
                createMany: {
                    args: Prisma.analisis_cct_campoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.analisis_cct_campoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>[];
                };
                delete: {
                    args: Prisma.analisis_cct_campoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>;
                };
                update: {
                    args: Prisma.analisis_cct_campoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>;
                };
                deleteMany: {
                    args: Prisma.analisis_cct_campoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.analisis_cct_campoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.analisis_cct_campoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>[];
                };
                upsert: {
                    args: Prisma.analisis_cct_campoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_cct_campoPayload>;
                };
                aggregate: {
                    args: Prisma.Analisis_cct_campoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalisis_cct_campo>;
                };
                groupBy: {
                    args: Prisma.analisis_cct_campoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Analisis_cct_campoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.analisis_cct_campoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Analisis_cct_campoCountAggregateOutputType> | number;
                };
            };
        };
        analisis_sector: {
            payload: Prisma.$analisis_sectorPayload<ExtArgs>;
            fields: Prisma.analisis_sectorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.analisis_sectorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.analisis_sectorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>;
                };
                findFirst: {
                    args: Prisma.analisis_sectorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.analisis_sectorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>;
                };
                findMany: {
                    args: Prisma.analisis_sectorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>[];
                };
                create: {
                    args: Prisma.analisis_sectorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>;
                };
                createMany: {
                    args: Prisma.analisis_sectorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.analisis_sectorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>[];
                };
                delete: {
                    args: Prisma.analisis_sectorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>;
                };
                update: {
                    args: Prisma.analisis_sectorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>;
                };
                deleteMany: {
                    args: Prisma.analisis_sectorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.analisis_sectorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.analisis_sectorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>[];
                };
                upsert: {
                    args: Prisma.analisis_sectorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$analisis_sectorPayload>;
                };
                aggregate: {
                    args: Prisma.Analisis_sectorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalisis_sector>;
                };
                groupBy: {
                    args: Prisma.analisis_sectorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Analisis_sectorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.analisis_sectorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Analisis_sectorCountAggregateOutputType> | number;
                };
            };
        };
        supervisores: {
            payload: Prisma.$supervisoresPayload<ExtArgs>;
            fields: Prisma.supervisoresFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.supervisoresFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.supervisoresFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>;
                };
                findFirst: {
                    args: Prisma.supervisoresFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.supervisoresFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>;
                };
                findMany: {
                    args: Prisma.supervisoresFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>[];
                };
                create: {
                    args: Prisma.supervisoresCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>;
                };
                createMany: {
                    args: Prisma.supervisoresCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.supervisoresCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>[];
                };
                delete: {
                    args: Prisma.supervisoresDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>;
                };
                update: {
                    args: Prisma.supervisoresUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>;
                };
                deleteMany: {
                    args: Prisma.supervisoresDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.supervisoresUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.supervisoresUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>[];
                };
                upsert: {
                    args: Prisma.supervisoresUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$supervisoresPayload>;
                };
                aggregate: {
                    args: Prisma.SupervisoresAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupervisores>;
                };
                groupBy: {
                    args: Prisma.supervisoresGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupervisoresGroupByOutputType>[];
                };
                count: {
                    args: Prisma.supervisoresCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupervisoresCountAggregateOutputType> | number;
                };
            };
        };
        totales_opedu: {
            payload: Prisma.$totales_opeduPayload<ExtArgs>;
            fields: Prisma.totales_opeduFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.totales_opeduFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.totales_opeduFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>;
                };
                findFirst: {
                    args: Prisma.totales_opeduFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.totales_opeduFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>;
                };
                findMany: {
                    args: Prisma.totales_opeduFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>[];
                };
                create: {
                    args: Prisma.totales_opeduCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>;
                };
                createMany: {
                    args: Prisma.totales_opeduCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.totales_opeduCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>[];
                };
                delete: {
                    args: Prisma.totales_opeduDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>;
                };
                update: {
                    args: Prisma.totales_opeduUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>;
                };
                deleteMany: {
                    args: Prisma.totales_opeduDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.totales_opeduUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.totales_opeduUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>[];
                };
                upsert: {
                    args: Prisma.totales_opeduUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$totales_opeduPayload>;
                };
                aggregate: {
                    args: Prisma.Totales_opeduAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTotales_opedu>;
                };
                groupBy: {
                    args: Prisma.totales_opeduGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Totales_opeduGroupByOutputType>[];
                };
                count: {
                    args: Prisma.totales_opeduCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Totales_opeduCountAggregateOutputType> | number;
                };
            };
        };
        alumnos_prioritarios_primaria_indigena: {
            payload: Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>;
            fields: Prisma.alumnos_prioritarios_primaria_indigenaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>;
                };
                findFirst: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>;
                };
                findMany: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>[];
                };
                create: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>;
                };
                createMany: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>[];
                };
                delete: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>;
                };
                update: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>[];
                };
                upsert: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>;
                };
                aggregate: {
                    args: Prisma.Alumnos_prioritarios_primaria_indigenaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumnos_prioritarios_primaria_indigena>;
                };
                groupBy: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_primaria_indigenaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnos_prioritarios_primaria_indigenaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_primaria_indigenaCountAggregateOutputType> | number;
                };
            };
        };
        alumnos_prioritarios_preescolar_general: {
            payload: Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>;
            fields: Prisma.alumnos_prioritarios_preescolar_generalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>;
                };
                findFirst: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>;
                };
                findMany: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>[];
                };
                create: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>;
                };
                createMany: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>[];
                };
                delete: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>;
                };
                update: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>[];
                };
                upsert: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload>;
                };
                aggregate: {
                    args: Prisma.Alumnos_prioritarios_preescolar_generalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumnos_prioritarios_preescolar_general>;
                };
                groupBy: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_preescolar_generalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnos_prioritarios_preescolar_generalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_preescolar_generalCountAggregateOutputType> | number;
                };
            };
        };
        alumnos_prioritarios_preescolar_indigena: {
            payload: Prisma.$alumnos_prioritarios_preescolar_indigenaPayload<ExtArgs>;
            fields: Prisma.alumnos_prioritarios_preescolar_indigenaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>;
                };
                findFirst: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>;
                };
                findMany: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>[];
                };
                create: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>;
                };
                createMany: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>[];
                };
                delete: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>;
                };
                update: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>[];
                };
                upsert: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_preescolar_indigenaPayload>;
                };
                aggregate: {
                    args: Prisma.Alumnos_prioritarios_preescolar_indigenaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumnos_prioritarios_preescolar_indigena>;
                };
                groupBy: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_preescolar_indigenaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnos_prioritarios_preescolar_indigenaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_preescolar_indigenaCountAggregateOutputType> | number;
                };
            };
        };
        alumnos_prioritarios_primaria_general: {
            payload: Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>;
            fields: Prisma.alumnos_prioritarios_primaria_generalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnos_prioritarios_primaria_generalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnos_prioritarios_primaria_generalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>;
                };
                findFirst: {
                    args: Prisma.alumnos_prioritarios_primaria_generalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnos_prioritarios_primaria_generalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>;
                };
                findMany: {
                    args: Prisma.alumnos_prioritarios_primaria_generalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>[];
                };
                create: {
                    args: Prisma.alumnos_prioritarios_primaria_generalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>;
                };
                createMany: {
                    args: Prisma.alumnos_prioritarios_primaria_generalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_primaria_generalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>[];
                };
                delete: {
                    args: Prisma.alumnos_prioritarios_primaria_generalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>;
                };
                update: {
                    args: Prisma.alumnos_prioritarios_primaria_generalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnos_prioritarios_primaria_generalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnos_prioritarios_primaria_generalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_primaria_generalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>[];
                };
                upsert: {
                    args: Prisma.alumnos_prioritarios_primaria_generalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_primaria_generalPayload>;
                };
                aggregate: {
                    args: Prisma.Alumnos_prioritarios_primaria_generalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumnos_prioritarios_primaria_general>;
                };
                groupBy: {
                    args: Prisma.alumnos_prioritarios_primaria_generalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_primaria_generalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnos_prioritarios_primaria_generalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_primaria_generalCountAggregateOutputType> | number;
                };
            };
        };
        alumnos_prioritarios_secundaria_general: {
            payload: Prisma.$alumnos_prioritarios_secundaria_generalPayload<ExtArgs>;
            fields: Prisma.alumnos_prioritarios_secundaria_generalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>;
                };
                findFirst: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>;
                };
                findMany: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>[];
                };
                create: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>;
                };
                createMany: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>[];
                };
                delete: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>;
                };
                update: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>[];
                };
                upsert: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_generalPayload>;
                };
                aggregate: {
                    args: Prisma.Alumnos_prioritarios_secundaria_generalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumnos_prioritarios_secundaria_general>;
                };
                groupBy: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_secundaria_generalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnos_prioritarios_secundaria_generalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_secundaria_generalCountAggregateOutputType> | number;
                };
            };
        };
        alumnos_prioritarios_secundaria_tecnica: {
            payload: Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload<ExtArgs>;
            fields: Prisma.alumnos_prioritarios_secundaria_tecnicaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>;
                };
                findFirst: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>;
                };
                findMany: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>[];
                };
                create: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>;
                };
                createMany: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>[];
                };
                delete: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>;
                };
                update: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>[];
                };
                upsert: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_secundaria_tecnicaPayload>;
                };
                aggregate: {
                    args: Prisma.Alumnos_prioritarios_secundaria_tecnicaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumnos_prioritarios_secundaria_tecnica>;
                };
                groupBy: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_secundaria_tecnicaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnos_prioritarios_secundaria_tecnicaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_secundaria_tecnicaCountAggregateOutputType> | number;
                };
            };
        };
        alumnos_prioritarios_telesecundaria: {
            payload: Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>;
            fields: Prisma.alumnos_prioritarios_telesecundariaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnos_prioritarios_telesecundariaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnos_prioritarios_telesecundariaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>;
                };
                findFirst: {
                    args: Prisma.alumnos_prioritarios_telesecundariaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnos_prioritarios_telesecundariaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>;
                };
                findMany: {
                    args: Prisma.alumnos_prioritarios_telesecundariaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>[];
                };
                create: {
                    args: Prisma.alumnos_prioritarios_telesecundariaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>;
                };
                createMany: {
                    args: Prisma.alumnos_prioritarios_telesecundariaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_telesecundariaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>[];
                };
                delete: {
                    args: Prisma.alumnos_prioritarios_telesecundariaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>;
                };
                update: {
                    args: Prisma.alumnos_prioritarios_telesecundariaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnos_prioritarios_telesecundariaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnos_prioritarios_telesecundariaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.alumnos_prioritarios_telesecundariaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>[];
                };
                upsert: {
                    args: Prisma.alumnos_prioritarios_telesecundariaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnos_prioritarios_telesecundariaPayload>;
                };
                aggregate: {
                    args: Prisma.Alumnos_prioritarios_telesecundariaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumnos_prioritarios_telesecundaria>;
                };
                groupBy: {
                    args: Prisma.alumnos_prioritarios_telesecundariaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_telesecundariaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnos_prioritarios_telesecundariaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Alumnos_prioritarios_telesecundariaCountAggregateOutputType> | number;
                };
            };
        };
        primera_exploracion_sisat: {
            payload: Prisma.$primera_exploracion_sisatPayload<ExtArgs>;
            fields: Prisma.primera_exploracion_sisatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.primera_exploracion_sisatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.primera_exploracion_sisatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>;
                };
                findFirst: {
                    args: Prisma.primera_exploracion_sisatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.primera_exploracion_sisatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>;
                };
                findMany: {
                    args: Prisma.primera_exploracion_sisatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>[];
                };
                create: {
                    args: Prisma.primera_exploracion_sisatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>;
                };
                createMany: {
                    args: Prisma.primera_exploracion_sisatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.primera_exploracion_sisatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>[];
                };
                delete: {
                    args: Prisma.primera_exploracion_sisatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>;
                };
                update: {
                    args: Prisma.primera_exploracion_sisatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>;
                };
                deleteMany: {
                    args: Prisma.primera_exploracion_sisatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.primera_exploracion_sisatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.primera_exploracion_sisatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>[];
                };
                upsert: {
                    args: Prisma.primera_exploracion_sisatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$primera_exploracion_sisatPayload>;
                };
                aggregate: {
                    args: Prisma.Primera_exploracion_sisatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrimera_exploracion_sisat>;
                };
                groupBy: {
                    args: Prisma.primera_exploracion_sisatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Primera_exploracion_sisatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.primera_exploracion_sisatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Primera_exploracion_sisatCountAggregateOutputType> | number;
                };
            };
        };
        segunda_exploracion_sisat: {
            payload: Prisma.$segunda_exploracion_sisatPayload<ExtArgs>;
            fields: Prisma.segunda_exploracion_sisatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.segunda_exploracion_sisatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.segunda_exploracion_sisatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>;
                };
                findFirst: {
                    args: Prisma.segunda_exploracion_sisatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.segunda_exploracion_sisatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>;
                };
                findMany: {
                    args: Prisma.segunda_exploracion_sisatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>[];
                };
                create: {
                    args: Prisma.segunda_exploracion_sisatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>;
                };
                createMany: {
                    args: Prisma.segunda_exploracion_sisatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.segunda_exploracion_sisatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>[];
                };
                delete: {
                    args: Prisma.segunda_exploracion_sisatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>;
                };
                update: {
                    args: Prisma.segunda_exploracion_sisatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>;
                };
                deleteMany: {
                    args: Prisma.segunda_exploracion_sisatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.segunda_exploracion_sisatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.segunda_exploracion_sisatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>[];
                };
                upsert: {
                    args: Prisma.segunda_exploracion_sisatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segunda_exploracion_sisatPayload>;
                };
                aggregate: {
                    args: Prisma.Segunda_exploracion_sisatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSegunda_exploracion_sisat>;
                };
                groupBy: {
                    args: Prisma.segunda_exploracion_sisatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Segunda_exploracion_sisatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.segunda_exploracion_sisatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Segunda_exploracion_sisatCountAggregateOutputType> | number;
                };
            };
        };
        ni_cct: {
            payload: Prisma.$ni_cctPayload<ExtArgs>;
            fields: Prisma.ni_cctFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ni_cctFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ni_cctFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>;
                };
                findFirst: {
                    args: Prisma.ni_cctFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ni_cctFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>;
                };
                findMany: {
                    args: Prisma.ni_cctFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>[];
                };
                create: {
                    args: Prisma.ni_cctCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>;
                };
                createMany: {
                    args: Prisma.ni_cctCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ni_cctCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>[];
                };
                delete: {
                    args: Prisma.ni_cctDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>;
                };
                update: {
                    args: Prisma.ni_cctUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>;
                };
                deleteMany: {
                    args: Prisma.ni_cctDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ni_cctUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ni_cctUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>[];
                };
                upsert: {
                    args: Prisma.ni_cctUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ni_cctPayload>;
                };
                aggregate: {
                    args: Prisma.Ni_cctAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNi_cct>;
                };
                groupBy: {
                    args: Prisma.ni_cctGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_cctGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ni_cctCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Ni_cctCountAggregateOutputType> | number;
                };
            };
        };
        tercera_exploracion_sisat: {
            payload: Prisma.$tercera_exploracion_sisatPayload<ExtArgs>;
            fields: Prisma.tercera_exploracion_sisatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tercera_exploracion_sisatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tercera_exploracion_sisatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>;
                };
                findFirst: {
                    args: Prisma.tercera_exploracion_sisatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tercera_exploracion_sisatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>;
                };
                findMany: {
                    args: Prisma.tercera_exploracion_sisatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>[];
                };
                create: {
                    args: Prisma.tercera_exploracion_sisatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>;
                };
                createMany: {
                    args: Prisma.tercera_exploracion_sisatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tercera_exploracion_sisatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>[];
                };
                delete: {
                    args: Prisma.tercera_exploracion_sisatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>;
                };
                update: {
                    args: Prisma.tercera_exploracion_sisatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>;
                };
                deleteMany: {
                    args: Prisma.tercera_exploracion_sisatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tercera_exploracion_sisatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tercera_exploracion_sisatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>[];
                };
                upsert: {
                    args: Prisma.tercera_exploracion_sisatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tercera_exploracion_sisatPayload>;
                };
                aggregate: {
                    args: Prisma.Tercera_exploracion_sisatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTercera_exploracion_sisat>;
                };
                groupBy: {
                    args: Prisma.tercera_exploracion_sisatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tercera_exploracion_sisatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tercera_exploracion_sisatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tercera_exploracion_sisatCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Item_cctScalarFieldEnum: {
    readonly id: "id";
    readonly cct: "cct";
    readonly no_cct: "no_cct";
    readonly llave: "llave";
    readonly turno: "turno";
    readonly control: "control";
    readonly grado: "grado";
    readonly nivel: "nivel";
    readonly subnivel: "subnivel";
    readonly opcion_educativa: "opcion_educativa";
    readonly tipo: "tipo";
    readonly item: "item";
    readonly campo_formativo: "campo_formativo";
    readonly opcion_respuesta: "opcion_respuesta";
    readonly estudiantes: "estudiantes";
    readonly porcentaje: "porcentaje";
    readonly eia: "eia";
    readonly pda: "pda";
    readonly criterio: "criterio";
};
export type Item_cctScalarFieldEnum = (typeof Item_cctScalarFieldEnum)[keyof typeof Item_cctScalarFieldEnum];
export declare const RelationLoadStrategy: {
    readonly query: "query";
    readonly join: "join";
};
export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy];
export declare const Item_opc_educativaScalarFieldEnum: {
    readonly id: "id";
    readonly control: "control";
    readonly turno: "turno";
    readonly grado: "grado";
    readonly nivel: "nivel";
    readonly subnivel: "subnivel";
    readonly opcion_educativa: "opcion_educativa";
    readonly item: "item";
    readonly campo_formativo: "campo_formativo";
    readonly opcion_respuesta: "opcion_respuesta";
    readonly estudiantes: "estudiantes";
    readonly porcentaje: "porcentaje";
    readonly eia: "eia";
    readonly pda: "pda";
    readonly criterio: "criterio";
};
export type Item_opc_educativaScalarFieldEnum = (typeof Item_opc_educativaScalarFieldEnum)[keyof typeof Item_opc_educativaScalarFieldEnum];
export declare const Mapa_baseScalarFieldEnum: {
    readonly id: "id";
    readonly llave: "llave";
    readonly cct: "cct";
    readonly sostenimiento: "sostenimiento";
    readonly turno: "turno";
    readonly tipo: "tipo";
    readonly nivel: "nivel";
    readonly subnivel: "subnivel";
    readonly opcion_educativa: "opcion_educativa";
    readonly nombre: "nombre";
    readonly matricula: "matricula";
    readonly estudiantes_participantes: "estudiantes_participantes";
    readonly localidad: "localidad";
    readonly municipio: "municipio";
    readonly cct_sector: "cct_sector";
    readonly sector: "sector";
    readonly cct_zona: "cct_zona";
    readonly zona: "zona";
    readonly seguimiento: "seguimiento";
    readonly latitud: "latitud";
    readonly longitud: "longitud";
};
export type Mapa_baseScalarFieldEnum = (typeof Mapa_baseScalarFieldEnum)[keyof typeof Mapa_baseScalarFieldEnum];
export declare const Ni_grado_controlScalarFieldEnum: {
    readonly id: "id";
    readonly campo_formativo: "campo_formativo";
    readonly opcion_educativa: "opcion_educativa";
    readonly control: "control";
    readonly grado: "grado";
    readonly tipo: "tipo";
    readonly nivel_integracion: "nivel_integracion";
    readonly total: "total";
    readonly porcentaje: "porcentaje";
};
export type Ni_grado_controlScalarFieldEnum = (typeof Ni_grado_controlScalarFieldEnum)[keyof typeof Ni_grado_controlScalarFieldEnum];
export declare const Ni_grado_turnoScalarFieldEnum: {
    readonly id: "id";
    readonly nivel: "nivel";
    readonly grado: "grado";
    readonly tipo: "tipo";
    readonly turno: "turno";
    readonly nivel_integracion: "nivel_integracion";
    readonly campo_formativo: "campo_formativo";
    readonly estudiantes_participantes: "estudiantes_participantes";
    readonly porcentaje: "porcentaje";
};
export type Ni_grado_turnoScalarFieldEnum = (typeof Ni_grado_turnoScalarFieldEnum)[keyof typeof Ni_grado_turnoScalarFieldEnum];
export declare const Ni_opcion_educativaScalarFieldEnum: {
    readonly id: "id";
    readonly opcion_educativa: "opcion_educativa";
    readonly grado: "grado";
    readonly tipo: "tipo";
    readonly campo_formativo: "campo_formativo";
    readonly nivel_integracion: "nivel_integracion";
    readonly total: "total";
    readonly porcentaje: "porcentaje";
};
export type Ni_opcion_educativaScalarFieldEnum = (typeof Ni_opcion_educativaScalarFieldEnum)[keyof typeof Ni_opcion_educativaScalarFieldEnum];
export declare const Ni_sectorScalarFieldEnum: {
    readonly id: "id";
    readonly ctt_sector: "ctt_sector";
    readonly no_sector: "no_sector";
    readonly campo_formativo: "campo_formativo";
    readonly nivel_integracion: "nivel_integracion";
    readonly grado: "grado";
    readonly opcion_educativa: "opcion_educativa";
    readonly tipo: "tipo";
    readonly estudiantes_sector: "estudiantes_sector";
    readonly estudiantes_participantes: "estudiantes_participantes";
    readonly escuelas_sector: "escuelas_sector";
    readonly escuelas_participantes: "escuelas_participantes";
    readonly porcentaje_escuelas_participacion: "porcentaje_escuelas_participacion";
    readonly porcentaje: "porcentaje";
};
export type Ni_sectorScalarFieldEnum = (typeof Ni_sectorScalarFieldEnum)[keyof typeof Ni_sectorScalarFieldEnum];
export declare const Ni_sostenimientoScalarFieldEnum: {
    readonly id: "id";
    readonly campo_formativo: "campo_formativo";
    readonly nivel: "nivel";
    readonly control: "control";
    readonly tipo: "tipo";
    readonly grado: "grado";
    readonly nivel_integracion: "nivel_integracion";
    readonly porcentaje: "porcentaje";
    readonly absoluto: "absoluto";
};
export type Ni_sostenimientoScalarFieldEnum = (typeof Ni_sostenimientoScalarFieldEnum)[keyof typeof Ni_sostenimientoScalarFieldEnum];
export declare const Ni_zonaScalarFieldEnum: {
    readonly id: "id";
    readonly ctt_zona: "ctt_zona";
    readonly zona: "zona";
    readonly campo_formativo: "campo_formativo";
    readonly nivel_integracion: "nivel_integracion";
    readonly grado: "grado";
    readonly opcion_educativa: "opcion_educativa";
    readonly tipo: "tipo";
    readonly estudiantes_zona: "estudiantes_zona";
    readonly estudiantes_participantes: "estudiantes_participantes";
    readonly escuelas_zona: "escuelas_zona";
    readonly escuelas_participantes: "escuelas_participantes";
    readonly porcentaje_escuelas_participacion: "porcentaje_escuelas_participacion";
    readonly porcentaje: "porcentaje";
};
export type Ni_zonaScalarFieldEnum = (typeof Ni_zonaScalarFieldEnum)[keyof typeof Ni_zonaScalarFieldEnum];
export declare const Analisis_zonaScalarFieldEnum: {
    readonly id: "id";
    readonly cct_zona: "cct_zona";
    readonly zona: "zona";
    readonly campo_formativo: "campo_formativo";
    readonly nivel_integracion: "nivel_integracion";
    readonly grado: "grado";
    readonly opcion_educativa: "opcion_educativa";
    readonly tipo: "tipo";
    readonly estudiantes_zona: "estudiantes_zona";
    readonly estudiantes_participantes: "estudiantes_participantes";
    readonly escuelas_participantes: "escuelas_participantes";
    readonly escuelas_zona: "escuelas_zona";
    readonly porcentaje_escuela: "porcentaje_escuela";
    readonly porcentaje_estudiantes: "porcentaje_estudiantes";
};
export type Analisis_zonaScalarFieldEnum = (typeof Analisis_zonaScalarFieldEnum)[keyof typeof Analisis_zonaScalarFieldEnum];
export declare const Analisis_cct_campoScalarFieldEnum: {
    readonly id: "id";
    readonly cct: "cct";
    readonly llave: "llave";
    readonly cct_sector: "cct_sector";
    readonly cct_zona: "cct_zona";
    readonly turno: "turno";
    readonly opcion_educativa: "opcion_educativa";
    readonly grado: "grado";
    readonly nivel: "nivel";
    readonly tipo: "tipo";
    readonly campo_formativo: "campo_formativo";
    readonly nivel_integracion: "nivel_integracion";
    readonly numero_alumnos: "numero_alumnos";
    readonly total_cct_grado: "total_cct_grado";
    readonly porcentaje: "porcentaje";
};
export type Analisis_cct_campoScalarFieldEnum = (typeof Analisis_cct_campoScalarFieldEnum)[keyof typeof Analisis_cct_campoScalarFieldEnum];
export declare const Analisis_sectorScalarFieldEnum: {
    readonly id: "id";
    readonly cct_sector: "cct_sector";
    readonly sector: "sector";
    readonly campo_formativo: "campo_formativo";
    readonly nivel_integracion: "nivel_integracion";
    readonly grado: "grado";
    readonly opcion_educativa: "opcion_educativa";
    readonly tipo: "tipo";
    readonly estudiantes_sector: "estudiantes_sector";
    readonly estudiantes_participantes: "estudiantes_participantes";
    readonly escuelas_participantes: "escuelas_participantes";
    readonly escuelas_cct_zona: "escuelas_cct_zona";
    readonly matricula_cct_zona: "matricula_cct_zona";
    readonly escuelas_sector: "escuelas_sector";
    readonly porcentaje_cct_zona: "porcentaje_cct_zona";
    readonly porcentaje_participacion_escuela: "porcentaje_participacion_escuela";
    readonly porcentaje_estudiantes: "porcentaje_estudiantes";
};
export type Analisis_sectorScalarFieldEnum = (typeof Analisis_sectorScalarFieldEnum)[keyof typeof Analisis_sectorScalarFieldEnum];
export declare const SupervisoresScalarFieldEnum: {
    readonly id: "id";
    readonly clavecct: "clavecct";
    readonly nombre_cct: "nombre_cct";
    readonly nombre_sup_zona: "nombre_sup_zona";
    readonly jefatura: "jefatura";
    readonly nombre_sup_sector: "nombre_sup_sector";
};
export type SupervisoresScalarFieldEnum = (typeof SupervisoresScalarFieldEnum)[keyof typeof SupervisoresScalarFieldEnum];
export declare const Totales_opeduScalarFieldEnum: {
    readonly id: "id";
    readonly opcion_educativa: "opcion_educativa";
    readonly total_escuelas_participantes: "total_escuelas_participantes";
    readonly total_alumnos: "total_alumnos";
    readonly total_escuela_absoluto: "total_escuela_absoluto";
};
export type Totales_opeduScalarFieldEnum = (typeof Totales_opeduScalarFieldEnum)[keyof typeof Totales_opeduScalarFieldEnum];
export declare const Alumnos_prioritarios_primaria_indigenaScalarFieldEnum: {
    readonly IDENTIFICACION: "IDENTIFICACION";
    readonly ENT: "ENT";
    readonly LLAVE: "LLAVE";
    readonly CVL_ALUMN: "CVL_ALUMN";
    readonly NOMALUMNO: "NOMALUMNO";
    readonly MATR_EDO: "MATR_EDO";
    readonly CCT: "CCT";
    readonly ID_TURNO: "ID_TURNO";
    readonly CONTROL: "CONTROL";
    readonly ID_NIVEL: "ID_NIVEL";
    readonly opcion_educativa: "opcion_educativa";
    readonly TURNO: "TURNO";
    readonly GRADO: "GRADO";
    readonly SEXO: "SEXO";
    readonly GRUPO: "GRUPO";
    readonly ORIGEN_ARCHIVO: "ORIGEN_ARCHIVO";
    readonly ORIGEN_HOJA: "ORIGEN_HOJA";
    readonly PX3DE1C4A1: "PX3DE1C4A1";
    readonly PX3DE2C4A1: "PX3DE2C4A1";
    readonly PX3EE1C3A1: "PX3EE1C3A1";
    readonly PX3EE2C1A1: "PX3EE2C1A1";
    readonly PX3EE2C3A2: "PX3EE2C3A2";
    readonly PX3LE1C1A1: "PX3LE1C1A1";
    readonly PX3LE2C3A1: "PX3LE2C3A1";
    readonly PX3SE1C2A1: "PX3SE1C2A1";
    readonly PX3SE1C2A2: "PX3SE1C2A2";
    readonly PX3SE2C2A1: "PX3SE2C2A1";
    readonly PX4DE1C3A1: "PX4DE1C3A1";
    readonly PX4DE1C3B1: "PX4DE1C3B1";
    readonly PX4DE2C3A1: "PX4DE2C3A1";
    readonly PX4DE2C3B1: "PX4DE2C3B1";
    readonly PX4DE2C3C1: "PX4DE2C3C1";
    readonly PX4DE2C3C2: "PX4DE2C3C2";
    readonly PX4EE1C2A1: "PX4EE1C2A1";
    readonly PX4EE1C2A2: "PX4EE1C2A2";
    readonly PX4EE1C2A3: "PX4EE1C2A3";
    readonly PX4EE1C2B1: "PX4EE1C2B1";
    readonly PX4EE2C2A1: "PX4EE2C2A1";
    readonly PX4LE1C4A1: "PX4LE1C4A1";
    readonly PX4LE1C4A2: "PX4LE1C4A2";
    readonly PX4LE1C4A3: "PX4LE1C4A3";
    readonly PX4LE2C5A1: "PX4LE2C5A1";
    readonly PX4LE2C5A2: "PX4LE2C5A2";
    readonly PX4LE2C5A3: "PX4LE2C5A3";
    readonly PX4SE1C1A1: "PX4SE1C1A1";
    readonly PX4SE1C1A2: "PX4SE1C1A2";
    readonly PX4SE1C1B1: "PX4SE1C1B1";
    readonly PX4SE1C1B2: "PX4SE1C1B2";
    readonly PX4SE1C1B3: "PX4SE1C1B3";
    readonly PX4SE2C1A1: "PX4SE2C1A1";
    readonly PX4SE2C1B1: "PX4SE2C1B1";
    readonly PX4SE2C4A1: "PX4SE2C4A1";
    readonly PX4SE2C4B1: "PX4SE2C4B1";
    readonly PX5DE1C1A1: "PX5DE1C1A1";
    readonly PX5DE1C1B1: "PX5DE1C1B1";
    readonly PX5DE1C1B2: "PX5DE1C1B2";
    readonly PX5DE2C2A1: "PX5DE2C2A1";
    readonly PX5DE2C2B1: "PX5DE2C2B1";
    readonly PX5DE2C2C1: "PX5DE2C2C1";
    readonly PX5DE2C2D1: "PX5DE2C2D1";
    readonly PX5EE1C2A1: "PX5EE1C2A1";
    readonly PX5EE1C2B1: "PX5EE1C2B1";
    readonly PX5EE1C2C1: "PX5EE1C2C1";
    readonly PX5EE2C4A1: "PX5EE2C4A1";
    readonly PX5EE2C4B1: "PX5EE2C4B1";
    readonly PX5LE1C4A1: "PX5LE1C4A1";
    readonly PX5LE1C4B1: "PX5LE1C4B1";
    readonly PX5LE2C3A1: "PX5LE2C3A1";
    readonly PX5LE2C3A2: "PX5LE2C3A2";
    readonly PX5LE2C3B1: "PX5LE2C3B1";
    readonly PX5LE2C3C1: "PX5LE2C3C1";
    readonly PX5SE1C3A1: "PX5SE1C3A1";
    readonly PX5SE1C3B1: "PX5SE1C3B1";
    readonly PX5SE2C1A1: "PX5SE2C1A1";
    readonly PX5SE2C1B1: "PX5SE2C1B1";
    readonly PX5SE2C1C1: "PX5SE2C1C1";
    readonly PX5SE2C1C2: "PX5SE2C1C2";
    readonly PX5SE2C1C3: "PX5SE2C1C3";
    readonly NIVEL_ETICA: "NIVEL_ETICA";
    readonly NIVEL_HUMANO: "NIVEL_HUMANO";
    readonly NIVEL_LENGUAJES: "NIVEL_LENGUAJES";
    readonly NIVEL_SABERES: "NIVEL_SABERES";
    readonly id: "id";
};
export type Alumnos_prioritarios_primaria_indigenaScalarFieldEnum = (typeof Alumnos_prioritarios_primaria_indigenaScalarFieldEnum)[keyof typeof Alumnos_prioritarios_primaria_indigenaScalarFieldEnum];
export declare const Alumnos_prioritarios_preescolar_generalScalarFieldEnum: {
    readonly cv_cct: "cv_cct";
    readonly Ent: "Ent";
    readonly LLAVE: "LLAVE";
    readonly Nombre_Alumno: "Nombre_Alumno";
    readonly Matr_Edo: "Matr_Edo";
    readonly Id_Turno: "Id_Turno";
    readonly CONTROL: "CONTROL";
    readonly Id_Nivel: "Id_Nivel";
    readonly NIVEL: "NIVEL";
    readonly SUBNIVEL: "SUBNIVEL";
    readonly OPCION_EDUCATIVA: "OPCION_EDUCATIVA";
    readonly TURNO: "TURNO";
    readonly GRADO: "GRADO";
    readonly Sexo: "Sexo";
    readonly GRUPO: "GRUPO";
    readonly CCT_SECTOR: "CCT_SECTOR";
    readonly SECTOR: "SECTOR";
    readonly CCT_ZONA: "CCT_ZONA";
    readonly ZONA: "ZONA";
    readonly KX2LE1C1A1: "KX2LE1C1A1";
    readonly KX2DE1C1A2: "KX2DE1C1A2";
    readonly KX2LE1C2A1: "KX2LE1C2A1";
    readonly KX2SE1C2A2: "KX2SE1C2A2";
    readonly KX2LE1C3A1: "KX2LE1C3A1";
    readonly KX2EE1C3A2: "KX2EE1C3A2";
    readonly KX2SE2C1A1: "KX2SE2C1A1";
    readonly KX2LE2C2A1: "KX2LE2C2A1";
    readonly KX2EE2C3A1: "KX2EE2C3A1";
    readonly KX2LE2C4A1: "KX2LE2C4A1";
    readonly KX2DE2C4A2: "KX2DE2C4A2";
    readonly Nivel_Lenguajes: "Nivel_Lenguajes";
    readonly Nivel_Saberes: "Nivel_Saberes";
    readonly Nivel_Humano: "Nivel_Humano";
    readonly Nivel_Etica: "Nivel_Etica";
    readonly Tipo: "Tipo";
    readonly En_escuela_prioritaria: "En_escuela_prioritaria";
    readonly id: "id";
};
export type Alumnos_prioritarios_preescolar_generalScalarFieldEnum = (typeof Alumnos_prioritarios_preescolar_generalScalarFieldEnum)[keyof typeof Alumnos_prioritarios_preescolar_generalScalarFieldEnum];
export declare const Alumnos_prioritarios_preescolar_indigenaScalarFieldEnum: {
    readonly cv_cct: "cv_cct";
    readonly Ent: "Ent";
    readonly LLAVE: "LLAVE";
    readonly Nombre_Alumno: "Nombre_Alumno";
    readonly Matr_Edo: "Matr_Edo";
    readonly Id_Turno: "Id_Turno";
    readonly CONTROL: "CONTROL";
    readonly Id_Nivel: "Id_Nivel";
    readonly NIVEL: "NIVEL";
    readonly SUBNIVEL: "SUBNIVEL";
    readonly OPCION_EDUCATIVA: "OPCION_EDUCATIVA";
    readonly TURNO: "TURNO";
    readonly GRADO: "GRADO";
    readonly Sexo: "Sexo";
    readonly GRUPO: "GRUPO";
    readonly CCT_SECTOR: "CCT_SECTOR";
    readonly SECTOR: "SECTOR";
    readonly CCT_ZONA: "CCT_ZONA";
    readonly ZONA: "ZONA";
    readonly KX2LE1C1A1: "KX2LE1C1A1";
    readonly KX2DE1C1A2: "KX2DE1C1A2";
    readonly KX2LE1C2A1: "KX2LE1C2A1";
    readonly KX2SE1C2A2: "KX2SE1C2A2";
    readonly KX2LE1C3A1: "KX2LE1C3A1";
    readonly KX2EE1C3A2: "KX2EE1C3A2";
    readonly KX2SE2C1A1: "KX2SE2C1A1";
    readonly KX2LE2C2A1: "KX2LE2C2A1";
    readonly KX2EE2C3A1: "KX2EE2C3A1";
    readonly KX2LE2C4A1: "KX2LE2C4A1";
    readonly KX2DE2C4A2: "KX2DE2C4A2";
    readonly Nivel_Lenguajes: "Nivel_Lenguajes";
    readonly Nivel_Saberes: "Nivel_Saberes";
    readonly Nivel_Humano: "Nivel_Humano";
    readonly Nivel_Etica: "Nivel_Etica";
    readonly Tipo: "Tipo";
    readonly En_escuela_prioritaria: "En_escuela_prioritaria";
    readonly id: "id";
};
export type Alumnos_prioritarios_preescolar_indigenaScalarFieldEnum = (typeof Alumnos_prioritarios_preescolar_indigenaScalarFieldEnum)[keyof typeof Alumnos_prioritarios_preescolar_indigenaScalarFieldEnum];
export declare const Alumnos_prioritarios_primaria_generalScalarFieldEnum: {
    readonly IDENTIFICACION: "IDENTIFICACION";
    readonly ENT: "ENT";
    readonly LLAVE: "LLAVE";
    readonly CVL_ALUMN: "CVL_ALUMN";
    readonly NOMALUMNO: "NOMALUMNO";
    readonly MATR_EDO: "MATR_EDO";
    readonly CCT: "CCT";
    readonly ID_TURNO: "ID_TURNO";
    readonly CONTROL: "CONTROL";
    readonly ID_NIVEL: "ID_NIVEL";
    readonly opcion_educativa: "opcion_educativa";
    readonly TURNO: "TURNO";
    readonly GRADO: "GRADO";
    readonly SEXO: "SEXO";
    readonly GRUPO: "GRUPO";
    readonly ORIGEN_ARCHIVO: "ORIGEN_ARCHIVO";
    readonly ORIGEN_HOJA: "ORIGEN_HOJA";
    readonly PX3DE1C4A1: "PX3DE1C4A1";
    readonly PX3DE2C4A1: "PX3DE2C4A1";
    readonly PX3EE1C3A1: "PX3EE1C3A1";
    readonly PX3EE2C1A1: "PX3EE2C1A1";
    readonly PX3EE2C3A2: "PX3EE2C3A2";
    readonly PX3LE1C1A1: "PX3LE1C1A1";
    readonly PX3LE2C3A1: "PX3LE2C3A1";
    readonly PX3SE1C2A1: "PX3SE1C2A1";
    readonly PX3SE1C2A2: "PX3SE1C2A2";
    readonly PX3SE2C2A1: "PX3SE2C2A1";
    readonly PX4DE1C3A1: "PX4DE1C3A1";
    readonly PX4DE1C3B1: "PX4DE1C3B1";
    readonly PX4DE2C3A1: "PX4DE2C3A1";
    readonly PX4DE2C3B1: "PX4DE2C3B1";
    readonly PX4DE2C3C1: "PX4DE2C3C1";
    readonly PX4DE2C3C2: "PX4DE2C3C2";
    readonly PX4EE1C2A1: "PX4EE1C2A1";
    readonly PX4EE1C2A2: "PX4EE1C2A2";
    readonly PX4EE1C2A3: "PX4EE1C2A3";
    readonly PX4EE1C2B1: "PX4EE1C2B1";
    readonly PX4EE2C2A1: "PX4EE2C2A1";
    readonly PX4LE1C4A1: "PX4LE1C4A1";
    readonly PX4LE1C4A2: "PX4LE1C4A2";
    readonly PX4LE1C4A3: "PX4LE1C4A3";
    readonly PX4LE2C5A1: "PX4LE2C5A1";
    readonly PX4LE2C5A2: "PX4LE2C5A2";
    readonly PX4LE2C5A3: "PX4LE2C5A3";
    readonly PX4SE1C1A1: "PX4SE1C1A1";
    readonly PX4SE1C1A2: "PX4SE1C1A2";
    readonly PX4SE1C1B1: "PX4SE1C1B1";
    readonly PX4SE1C1B2: "PX4SE1C1B2";
    readonly PX4SE1C1B3: "PX4SE1C1B3";
    readonly PX4SE2C1A1: "PX4SE2C1A1";
    readonly PX4SE2C1B1: "PX4SE2C1B1";
    readonly PX4SE2C4A1: "PX4SE2C4A1";
    readonly PX4SE2C4B1: "PX4SE2C4B1";
    readonly PX5DE1C1A1: "PX5DE1C1A1";
    readonly PX5DE1C1B1: "PX5DE1C1B1";
    readonly PX5DE1C1B2: "PX5DE1C1B2";
    readonly PX5DE2C2A1: "PX5DE2C2A1";
    readonly PX5DE2C2B1: "PX5DE2C2B1";
    readonly PX5DE2C2C1: "PX5DE2C2C1";
    readonly PX5DE2C2D1: "PX5DE2C2D1";
    readonly PX5EE1C2A1: "PX5EE1C2A1";
    readonly PX5EE1C2B1: "PX5EE1C2B1";
    readonly PX5EE1C2C1: "PX5EE1C2C1";
    readonly PX5EE2C4A1: "PX5EE2C4A1";
    readonly PX5EE2C4B1: "PX5EE2C4B1";
    readonly PX5LE1C4A1: "PX5LE1C4A1";
    readonly PX5LE1C4B1: "PX5LE1C4B1";
    readonly PX5LE2C3A1: "PX5LE2C3A1";
    readonly PX5LE2C3A2: "PX5LE2C3A2";
    readonly PX5LE2C3B1: "PX5LE2C3B1";
    readonly PX5LE2C3C1: "PX5LE2C3C1";
    readonly PX5SE1C3A1: "PX5SE1C3A1";
    readonly PX5SE1C3B1: "PX5SE1C3B1";
    readonly PX5SE2C1A1: "PX5SE2C1A1";
    readonly PX5SE2C1B1: "PX5SE2C1B1";
    readonly PX5SE2C1C1: "PX5SE2C1C1";
    readonly PX5SE2C1C2: "PX5SE2C1C2";
    readonly PX5SE2C1C3: "PX5SE2C1C3";
    readonly NIVEL_ETICA: "NIVEL_ETICA";
    readonly NIVEL_HUMANO: "NIVEL_HUMANO";
    readonly NIVEL_LENGUAJES: "NIVEL_LENGUAJES";
    readonly NIVEL_SABERES: "NIVEL_SABERES";
    readonly id: "id";
};
export type Alumnos_prioritarios_primaria_generalScalarFieldEnum = (typeof Alumnos_prioritarios_primaria_generalScalarFieldEnum)[keyof typeof Alumnos_prioritarios_primaria_generalScalarFieldEnum];
export declare const Alumnos_prioritarios_secundaria_generalScalarFieldEnum: {
    readonly IDENTIFICACION: "IDENTIFICACION";
    readonly ENT: "ENT";
    readonly LLAVE: "LLAVE";
    readonly CVL_ALUMN: "CVL_ALUMN";
    readonly NOMALUMNO: "NOMALUMNO";
    readonly MATR_EDO: "MATR_EDO";
    readonly CCT: "CCT";
    readonly ID_TURNO: "ID_TURNO";
    readonly CONTROL: "CONTROL";
    readonly ID_NIVEL: "ID_NIVEL";
    readonly opcion_educativa: "opcion_educativa";
    readonly TURNO: "TURNO";
    readonly GRADO: "GRADO";
    readonly SEXO: "SEXO";
    readonly GRUPO: "GRUPO";
    readonly SA6DE1C5A1: "SA6DE1C5A1";
    readonly SA6DE1C5B1: "SA6DE1C5B1";
    readonly SA6DE1C5C1: "SA6DE1C5C1";
    readonly SA6DE2C4A1: "SA6DE2C4A1";
    readonly SA6EE1C4A1: "SA6EE1C4A1";
    readonly SA6EE1C4B1: "SA6EE1C4B1";
    readonly SA6EE2C3A1: "SA6EE2C3A1";
    readonly SA6EE2C3B1: "SA6EE2C3B1";
    readonly SA6EE2C3C1: "SA6EE2C3C1";
    readonly SA6LE1C3A1: "SA6LE1C3A1";
    readonly SA6LE2C1A1: "SA6LE2C1A1";
    readonly SA6LE2C1A2: "SA6LE2C1A2";
    readonly SA6SE1C1A1: "SA6SE1C1A1";
    readonly SA6SE1C1A2: "SA6SE1C1A2";
    readonly SA6SE1C1A3: "SA6SE1C1A3";
    readonly SA6SE1C2A1: "SA6SE1C2A1";
    readonly SA6SE1C2A2: "SA6SE1C2A2";
    readonly SA6SE2C2A1: "SA6SE2C2A1";
    readonly SA6SE2C2A2: "SA6SE2C2A2";
    readonly SA6SE2C2B1: "SA6SE2C2B1";
    readonly SA6SE2C2B2: "SA6SE2C2B2";
    readonly SB6DE1C4A1: "SB6DE1C4A1";
    readonly SB6DE1C4A2: "SB6DE1C4A2";
    readonly SB6DE2C4A1: "SB6DE2C4A1";
    readonly SB6DE2C4A2: "SB6DE2C4A2";
    readonly SB6EE1C3A1: "SB6EE1C3A1";
    readonly SB6EE1C3A2: "SB6EE1C3A2";
    readonly SB6EE2C3A1: "SB6EE2C3A1";
    readonly SB6EE2C3A2: "SB6EE2C3A2";
    readonly SB6EE2C3A3: "SB6EE2C3A3";
    readonly SB6LE1C1A1: "SB6LE1C1A1";
    readonly SB6LE1C1A2: "SB6LE1C1A2";
    readonly SB6LE1C1A3: "SB6LE1C1A3";
    readonly SB6LE2C1A1: "SB6LE2C1A1";
    readonly SB6LE2C1A2: "SB6LE2C1A2";
    readonly SB6LE2C1A3: "SB6LE2C1A3";
    readonly SB6SE1C2A1: "SB6SE1C2A1";
    readonly SB6SE1C2A2: "SB6SE1C2A2";
    readonly SB6SE1C2B1: "SB6SE1C2B1";
    readonly SB6SE2C2A1: "SB6SE2C2A1";
    readonly SB6SE2C2A2: "SB6SE2C2A2";
    readonly NIVEL_ETICA: "NIVEL_ETICA";
    readonly NIVEL_HUMANO: "NIVEL_HUMANO";
    readonly NIVEL_LENGUAJES: "NIVEL_LENGUAJES";
    readonly NIVEL_SABERES: "NIVEL_SABERES";
    readonly id: "id";
};
export type Alumnos_prioritarios_secundaria_generalScalarFieldEnum = (typeof Alumnos_prioritarios_secundaria_generalScalarFieldEnum)[keyof typeof Alumnos_prioritarios_secundaria_generalScalarFieldEnum];
export declare const Alumnos_prioritarios_secundaria_tecnicaScalarFieldEnum: {
    readonly IDENTIFICACION: "IDENTIFICACION";
    readonly ENT: "ENT";
    readonly LLAVE: "LLAVE";
    readonly CVL_ALUMN: "CVL_ALUMN";
    readonly NOMALUMNO: "NOMALUMNO";
    readonly MATR_EDO: "MATR_EDO";
    readonly CCT: "CCT";
    readonly ID_TURNO: "ID_TURNO";
    readonly CONTROL: "CONTROL";
    readonly ID_NIVEL: "ID_NIVEL";
    readonly opcion_educativa: "opcion_educativa";
    readonly TURNO: "TURNO";
    readonly GRADO: "GRADO";
    readonly SEXO: "SEXO";
    readonly GRUPO: "GRUPO";
    readonly ORIGEN_ARCHIVO: "ORIGEN_ARCHIVO";
    readonly ORIGEN_HOJA: "ORIGEN_HOJA";
    readonly SA6DE1C5A1: "SA6DE1C5A1";
    readonly SA6DE1C5B1: "SA6DE1C5B1";
    readonly SA6DE1C5C1: "SA6DE1C5C1";
    readonly SA6DE2C4A1: "SA6DE2C4A1";
    readonly SA6EE1C4A1: "SA6EE1C4A1";
    readonly SA6EE1C4B1: "SA6EE1C4B1";
    readonly SA6EE2C3A1: "SA6EE2C3A1";
    readonly SA6EE2C3B1: "SA6EE2C3B1";
    readonly SA6EE2C3C1: "SA6EE2C3C1";
    readonly SA6LE1C3A1: "SA6LE1C3A1";
    readonly SA6LE2C1A1: "SA6LE2C1A1";
    readonly SA6LE2C1A2: "SA6LE2C1A2";
    readonly SA6SE1C1A1: "SA6SE1C1A1";
    readonly SA6SE1C1A2: "SA6SE1C1A2";
    readonly SA6SE1C1A3: "SA6SE1C1A3";
    readonly SA6SE1C2A1: "SA6SE1C2A1";
    readonly SA6SE1C2A2: "SA6SE1C2A2";
    readonly SA6SE2C2A1: "SA6SE2C2A1";
    readonly SA6SE2C2A2: "SA6SE2C2A2";
    readonly SA6SE2C2B1: "SA6SE2C2B1";
    readonly SA6SE2C2B2: "SA6SE2C2B2";
    readonly SB6DE1C4A1: "SB6DE1C4A1";
    readonly SB6DE1C4A2: "SB6DE1C4A2";
    readonly SB6DE2C4A1: "SB6DE2C4A1";
    readonly SB6DE2C4A2: "SB6DE2C4A2";
    readonly SB6EE1C3A1: "SB6EE1C3A1";
    readonly SB6EE1C3A2: "SB6EE1C3A2";
    readonly SB6EE2C3A1: "SB6EE2C3A1";
    readonly SB6EE2C3A2: "SB6EE2C3A2";
    readonly SB6EE2C3A3: "SB6EE2C3A3";
    readonly SB6LE1C1A1: "SB6LE1C1A1";
    readonly SB6LE1C1A2: "SB6LE1C1A2";
    readonly SB6LE1C1A3: "SB6LE1C1A3";
    readonly SB6LE2C1A1: "SB6LE2C1A1";
    readonly SB6LE2C1A2: "SB6LE2C1A2";
    readonly SB6LE2C1A3: "SB6LE2C1A3";
    readonly SB6SE1C2A1: "SB6SE1C2A1";
    readonly SB6SE1C2A2: "SB6SE1C2A2";
    readonly SB6SE1C2B1: "SB6SE1C2B1";
    readonly SB6SE2C2A1: "SB6SE2C2A1";
    readonly SB6SE2C2A2: "SB6SE2C2A2";
    readonly NIVEL_ETICA: "NIVEL_ETICA";
    readonly NIVEL_HUMANO: "NIVEL_HUMANO";
    readonly NIVEL_LENGUAJES: "NIVEL_LENGUAJES";
    readonly NIVEL_SABERES: "NIVEL_SABERES";
    readonly id: "id";
};
export type Alumnos_prioritarios_secundaria_tecnicaScalarFieldEnum = (typeof Alumnos_prioritarios_secundaria_tecnicaScalarFieldEnum)[keyof typeof Alumnos_prioritarios_secundaria_tecnicaScalarFieldEnum];
export declare const Alumnos_prioritarios_telesecundariaScalarFieldEnum: {
    readonly IDENTIFICACION: "IDENTIFICACION";
    readonly ENT: "ENT";
    readonly LLAVE: "LLAVE";
    readonly CVL_ALUMN: "CVL_ALUMN";
    readonly NOMALUMNO: "NOMALUMNO";
    readonly MATR_EDO: "MATR_EDO";
    readonly CCT: "CCT";
    readonly ID_TURNO: "ID_TURNO";
    readonly CONTROL: "CONTROL";
    readonly ID_NIVEL: "ID_NIVEL";
    readonly opcion_educativa: "opcion_educativa";
    readonly TURNO: "TURNO";
    readonly GRADO: "GRADO";
    readonly SEXO: "SEXO";
    readonly GRUPO: "GRUPO";
    readonly ORIGEN_ARCHIVO: "ORIGEN_ARCHIVO";
    readonly ORIGEN_HOJA: "ORIGEN_HOJA";
    readonly SA6DE1C5A1: "SA6DE1C5A1";
    readonly SA6DE1C5B1: "SA6DE1C5B1";
    readonly SA6DE1C5C1: "SA6DE1C5C1";
    readonly SA6DE2C4A1: "SA6DE2C4A1";
    readonly SA6EE1C4A1: "SA6EE1C4A1";
    readonly SA6EE1C4B1: "SA6EE1C4B1";
    readonly SA6EE2C3A1: "SA6EE2C3A1";
    readonly SA6EE2C3B1: "SA6EE2C3B1";
    readonly SA6EE2C3C1: "SA6EE2C3C1";
    readonly SA6LE1C3A1: "SA6LE1C3A1";
    readonly SA6LE2C1A1: "SA6LE2C1A1";
    readonly SA6LE2C1A2: "SA6LE2C1A2";
    readonly SA6SE1C1A1: "SA6SE1C1A1";
    readonly SA6SE1C1A2: "SA6SE1C1A2";
    readonly SA6SE1C1A3: "SA6SE1C1A3";
    readonly SA6SE1C2A1: "SA6SE1C2A1";
    readonly SA6SE1C2A2: "SA6SE1C2A2";
    readonly SA6SE2C2A1: "SA6SE2C2A1";
    readonly SA6SE2C2A2: "SA6SE2C2A2";
    readonly SA6SE2C2B1: "SA6SE2C2B1";
    readonly SA6SE2C2B2: "SA6SE2C2B2";
    readonly SB6DE1C4A1: "SB6DE1C4A1";
    readonly SB6DE1C4A2: "SB6DE1C4A2";
    readonly SB6DE2C4A1: "SB6DE2C4A1";
    readonly SB6DE2C4A2: "SB6DE2C4A2";
    readonly SB6EE1C3A1: "SB6EE1C3A1";
    readonly SB6EE1C3A2: "SB6EE1C3A2";
    readonly SB6EE2C3A1: "SB6EE2C3A1";
    readonly SB6EE2C3A2: "SB6EE2C3A2";
    readonly SB6EE2C3A3: "SB6EE2C3A3";
    readonly SB6LE1C1A1: "SB6LE1C1A1";
    readonly SB6LE1C1A2: "SB6LE1C1A2";
    readonly SB6LE1C1A3: "SB6LE1C1A3";
    readonly SB6LE2C1A1: "SB6LE2C1A1";
    readonly SB6LE2C1A2: "SB6LE2C1A2";
    readonly SB6LE2C1A3: "SB6LE2C1A3";
    readonly SB6SE1C2A1: "SB6SE1C2A1";
    readonly SB6SE1C2A2: "SB6SE1C2A2";
    readonly SB6SE1C2B1: "SB6SE1C2B1";
    readonly SB6SE2C2A1: "SB6SE2C2A1";
    readonly SB6SE2C2A2: "SB6SE2C2A2";
    readonly NIVEL_ETICA: "NIVEL_ETICA";
    readonly NIVEL_HUMANO: "NIVEL_HUMANO";
    readonly NIVEL_LENGUAJES: "NIVEL_LENGUAJES";
    readonly NIVEL_SABERES: "NIVEL_SABERES";
    readonly id: "id";
};
export type Alumnos_prioritarios_telesecundariaScalarFieldEnum = (typeof Alumnos_prioritarios_telesecundariaScalarFieldEnum)[keyof typeof Alumnos_prioritarios_telesecundariaScalarFieldEnum];
export declare const Primera_exploracion_sisatScalarFieldEnum: {
    readonly cct: "cct";
    readonly nombre: "nombre";
    readonly opcion_educativa: "opcion_educativa";
    readonly prioritaria: "prioritaria";
    readonly ambito: "ambito";
    readonly grado: "grado";
    readonly materia: "materia";
    readonly matricula: "matricula";
    readonly primera_exploracion: "primera_exploracion";
    readonly sin_registro: "sin_registro";
    readonly total_ra: "total_ra";
    readonly porcentaje_ra: "porcentaje_ra";
    readonly total_ed: "total_ed";
    readonly porcentaje_ed: "porcentaje_ed";
    readonly total_ne: "total_ne";
    readonly porcentaje_ne: "porcentaje_ne";
    readonly participacion: "participacion";
    readonly id: "id";
};
export type Primera_exploracion_sisatScalarFieldEnum = (typeof Primera_exploracion_sisatScalarFieldEnum)[keyof typeof Primera_exploracion_sisatScalarFieldEnum];
export declare const Segunda_exploracion_sisatScalarFieldEnum: {
    readonly cct: "cct";
    readonly nombre: "nombre";
    readonly opcion_educativa: "opcion_educativa";
    readonly prioritaria: "prioritaria";
    readonly ambito: "ambito";
    readonly grado: "grado";
    readonly materia: "materia";
    readonly matricula: "matricula";
    readonly primera_exploracion: "primera_exploracion";
    readonly sin_registro: "sin_registro";
    readonly total_ra: "total_ra";
    readonly porcentaje_ra: "porcentaje_ra";
    readonly total_ed: "total_ed";
    readonly porcentaje_ed: "porcentaje_ed";
    readonly total_ne: "total_ne";
    readonly porcentaje_ne: "porcentaje_ne";
    readonly participacion: "participacion";
    readonly id: "id";
};
export type Segunda_exploracion_sisatScalarFieldEnum = (typeof Segunda_exploracion_sisatScalarFieldEnum)[keyof typeof Segunda_exploracion_sisatScalarFieldEnum];
export declare const Ni_cctScalarFieldEnum: {
    readonly id: "id";
    readonly cct: "cct";
    readonly nombre: "nombre";
    readonly llave: "llave";
    readonly cct_sector: "cct_sector";
    readonly cct_zona: "cct_zona";
    readonly turno: "turno";
    readonly opcion_educativa: "opcion_educativa";
    readonly grado: "grado";
    readonly tipo: "tipo";
    readonly campo_formativo: "campo_formativo";
    readonly nivel_integracion: "nivel_integracion";
    readonly numero_alumnos: "numero_alumnos";
    readonly total_cct_grado: "total_cct_grado";
    readonly porcentaje: "porcentaje";
};
export type Ni_cctScalarFieldEnum = (typeof Ni_cctScalarFieldEnum)[keyof typeof Ni_cctScalarFieldEnum];
export declare const Tercera_exploracion_sisatScalarFieldEnum: {
    readonly cct: "cct";
    readonly nombre: "nombre";
    readonly opcion_educativa: "opcion_educativa";
    readonly prioritaria: "prioritaria";
    readonly ambito: "ambito";
    readonly grado: "grado";
    readonly materia: "materia";
    readonly participantes: "participantes";
    readonly total_ra: "total_ra";
    readonly porcentaje_ra: "porcentaje_ra";
    readonly total_ed: "total_ed";
    readonly porcentaje_ed: "porcentaje_ed";
    readonly total_ne: "total_ne";
    readonly porcentaje_ne: "porcentaje_ne";
    readonly id: "id";
};
export type Tercera_exploracion_sisatScalarFieldEnum = (typeof Tercera_exploracion_sisatScalarFieldEnum)[keyof typeof Tercera_exploracion_sisatScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
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
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    item_cct?: Prisma.item_cctOmit;
    item_opc_educativa?: Prisma.item_opc_educativaOmit;
    mapa_base?: Prisma.mapa_baseOmit;
    ni_grado_control?: Prisma.ni_grado_controlOmit;
    ni_grado_turno?: Prisma.ni_grado_turnoOmit;
    ni_opcion_educativa?: Prisma.ni_opcion_educativaOmit;
    ni_sector?: Prisma.ni_sectorOmit;
    ni_sostenimiento?: Prisma.ni_sostenimientoOmit;
    ni_zona?: Prisma.ni_zonaOmit;
    analisis_zona?: Prisma.analisis_zonaOmit;
    analisis_cct_campo?: Prisma.analisis_cct_campoOmit;
    analisis_sector?: Prisma.analisis_sectorOmit;
    supervisores?: Prisma.supervisoresOmit;
    totales_opedu?: Prisma.totales_opeduOmit;
    alumnos_prioritarios_primaria_indigena?: Prisma.alumnos_prioritarios_primaria_indigenaOmit;
    alumnos_prioritarios_preescolar_general?: Prisma.alumnos_prioritarios_preescolar_generalOmit;
    alumnos_prioritarios_preescolar_indigena?: Prisma.alumnos_prioritarios_preescolar_indigenaOmit;
    alumnos_prioritarios_primaria_general?: Prisma.alumnos_prioritarios_primaria_generalOmit;
    alumnos_prioritarios_secundaria_general?: Prisma.alumnos_prioritarios_secundaria_generalOmit;
    alumnos_prioritarios_secundaria_tecnica?: Prisma.alumnos_prioritarios_secundaria_tecnicaOmit;
    alumnos_prioritarios_telesecundaria?: Prisma.alumnos_prioritarios_telesecundariaOmit;
    primera_exploracion_sisat?: Prisma.primera_exploracion_sisatOmit;
    segunda_exploracion_sisat?: Prisma.segunda_exploracion_sisatOmit;
    ni_cct?: Prisma.ni_cctOmit;
    tercera_exploracion_sisat?: Prisma.tercera_exploracion_sisatOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map