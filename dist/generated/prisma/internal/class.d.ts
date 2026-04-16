import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Item_ccts
   * const item_ccts = await prisma.item_cct.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Item_ccts
 * const item_ccts = await prisma.item_cct.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
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
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
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
     * Read more in our [docs](https://pris.ly/d/raw-queries).
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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.item_cct`: Exposes CRUD operations for the **item_cct** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Item_ccts
  * const item_ccts = await prisma.item_cct.findMany()
  * ```
  */
    get item_cct(): Prisma.item_cctDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.item_opc_educativa`: Exposes CRUD operations for the **item_opc_educativa** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Item_opc_educativas
      * const item_opc_educativas = await prisma.item_opc_educativa.findMany()
      * ```
      */
    get item_opc_educativa(): Prisma.item_opc_educativaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mapa_base`: Exposes CRUD operations for the **mapa_base** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Mapa_bases
      * const mapa_bases = await prisma.mapa_base.findMany()
      * ```
      */
    get mapa_base(): Prisma.mapa_baseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ni_ctt`: Exposes CRUD operations for the **ni_ctt** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ni_ctts
      * const ni_ctts = await prisma.ni_ctt.findMany()
      * ```
      */
    get ni_ctt(): Prisma.ni_cttDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ni_grado_control`: Exposes CRUD operations for the **ni_grado_control** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ni_grado_controls
      * const ni_grado_controls = await prisma.ni_grado_control.findMany()
      * ```
      */
    get ni_grado_control(): Prisma.ni_grado_controlDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ni_grado_turno`: Exposes CRUD operations for the **ni_grado_turno** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ni_grado_turnos
      * const ni_grado_turnos = await prisma.ni_grado_turno.findMany()
      * ```
      */
    get ni_grado_turno(): Prisma.ni_grado_turnoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ni_opcion_educativa`: Exposes CRUD operations for the **ni_opcion_educativa** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ni_opcion_educativas
      * const ni_opcion_educativas = await prisma.ni_opcion_educativa.findMany()
      * ```
      */
    get ni_opcion_educativa(): Prisma.ni_opcion_educativaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ni_sector`: Exposes CRUD operations for the **ni_sector** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ni_sectors
      * const ni_sectors = await prisma.ni_sector.findMany()
      * ```
      */
    get ni_sector(): Prisma.ni_sectorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ni_sostenimiento`: Exposes CRUD operations for the **ni_sostenimiento** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ni_sostenimientos
      * const ni_sostenimientos = await prisma.ni_sostenimiento.findMany()
      * ```
      */
    get ni_sostenimiento(): Prisma.ni_sostenimientoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ni_zona`: Exposes CRUD operations for the **ni_zona** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ni_zonas
      * const ni_zonas = await prisma.ni_zona.findMany()
      * ```
      */
    get ni_zona(): Prisma.ni_zonaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.analisis_zona`: Exposes CRUD operations for the **analisis_zona** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Analisis_zonas
      * const analisis_zonas = await prisma.analisis_zona.findMany()
      * ```
      */
    get analisis_zona(): Prisma.analisis_zonaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.analisis_cct_campo`: Exposes CRUD operations for the **analisis_cct_campo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Analisis_cct_campos
      * const analisis_cct_campos = await prisma.analisis_cct_campo.findMany()
      * ```
      */
    get analisis_cct_campo(): Prisma.analisis_cct_campoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.analisis_sector`: Exposes CRUD operations for the **analisis_sector** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Analisis_sectors
      * const analisis_sectors = await prisma.analisis_sector.findMany()
      * ```
      */
    get analisis_sector(): Prisma.analisis_sectorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supervisores`: Exposes CRUD operations for the **supervisores** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Supervisores
      * const supervisores = await prisma.supervisores.findMany()
      * ```
      */
    get supervisores(): Prisma.supervisoresDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.totales_opedu`: Exposes CRUD operations for the **totales_opedu** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Totales_opedus
      * const totales_opedus = await prisma.totales_opedu.findMany()
      * ```
      */
    get totales_opedu(): Prisma.totales_opeduDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumnos_prioritarios_primaria_indigena`: Exposes CRUD operations for the **alumnos_prioritarios_primaria_indigena** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnos_prioritarios_primaria_indigenas
      * const alumnos_prioritarios_primaria_indigenas = await prisma.alumnos_prioritarios_primaria_indigena.findMany()
      * ```
      */
    get alumnos_prioritarios_primaria_indigena(): Prisma.alumnos_prioritarios_primaria_indigenaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumnos_prioritarios_preescolar_general`: Exposes CRUD operations for the **alumnos_prioritarios_preescolar_general** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnos_prioritarios_preescolar_generals
      * const alumnos_prioritarios_preescolar_generals = await prisma.alumnos_prioritarios_preescolar_general.findMany()
      * ```
      */
    get alumnos_prioritarios_preescolar_general(): Prisma.alumnos_prioritarios_preescolar_generalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumnos_prioritarios_preescolar_indigena`: Exposes CRUD operations for the **alumnos_prioritarios_preescolar_indigena** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnos_prioritarios_preescolar_indigenas
      * const alumnos_prioritarios_preescolar_indigenas = await prisma.alumnos_prioritarios_preescolar_indigena.findMany()
      * ```
      */
    get alumnos_prioritarios_preescolar_indigena(): Prisma.alumnos_prioritarios_preescolar_indigenaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumnos_prioritarios_primaria_general`: Exposes CRUD operations for the **alumnos_prioritarios_primaria_general** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnos_prioritarios_primaria_generals
      * const alumnos_prioritarios_primaria_generals = await prisma.alumnos_prioritarios_primaria_general.findMany()
      * ```
      */
    get alumnos_prioritarios_primaria_general(): Prisma.alumnos_prioritarios_primaria_generalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumnos_prioritarios_secundaria_general`: Exposes CRUD operations for the **alumnos_prioritarios_secundaria_general** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnos_prioritarios_secundaria_generals
      * const alumnos_prioritarios_secundaria_generals = await prisma.alumnos_prioritarios_secundaria_general.findMany()
      * ```
      */
    get alumnos_prioritarios_secundaria_general(): Prisma.alumnos_prioritarios_secundaria_generalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumnos_prioritarios_secundaria_tecnica`: Exposes CRUD operations for the **alumnos_prioritarios_secundaria_tecnica** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnos_prioritarios_secundaria_tecnicas
      * const alumnos_prioritarios_secundaria_tecnicas = await prisma.alumnos_prioritarios_secundaria_tecnica.findMany()
      * ```
      */
    get alumnos_prioritarios_secundaria_tecnica(): Prisma.alumnos_prioritarios_secundaria_tecnicaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumnos_prioritarios_telesecundaria`: Exposes CRUD operations for the **alumnos_prioritarios_telesecundaria** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnos_prioritarios_telesecundarias
      * const alumnos_prioritarios_telesecundarias = await prisma.alumnos_prioritarios_telesecundaria.findMany()
      * ```
      */
    get alumnos_prioritarios_telesecundaria(): Prisma.alumnos_prioritarios_telesecundariaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map