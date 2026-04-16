import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model alumnos_prioritarios_primaria_general
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type alumnos_prioritarios_primaria_generalModel = runtime.Types.Result.DefaultSelection<Prisma.$alumnos_prioritarios_primaria_generalPayload>;
export type AggregateAlumnos_prioritarios_primaria_general = {
    _count: Alumnos_prioritarios_primaria_generalCountAggregateOutputType | null;
    _avg: Alumnos_prioritarios_primaria_generalAvgAggregateOutputType | null;
    _sum: Alumnos_prioritarios_primaria_generalSumAggregateOutputType | null;
    _min: Alumnos_prioritarios_primaria_generalMinAggregateOutputType | null;
    _max: Alumnos_prioritarios_primaria_generalMaxAggregateOutputType | null;
};
export type Alumnos_prioritarios_primaria_generalAvgAggregateOutputType = {
    ENT: runtime.Decimal | null;
    CVL_ALUMN: runtime.Decimal | null;
    ID_TURNO: runtime.Decimal | null;
    GRADO: runtime.Decimal | null;
    PX3DE1C4A1: runtime.Decimal | null;
    PX3DE2C4A1: runtime.Decimal | null;
    PX3EE1C3A1: runtime.Decimal | null;
    PX3EE2C1A1: runtime.Decimal | null;
    PX3EE2C3A2: runtime.Decimal | null;
    PX3LE1C1A1: runtime.Decimal | null;
    PX3LE2C3A1: runtime.Decimal | null;
    PX3SE1C2A1: runtime.Decimal | null;
    PX3SE1C2A2: runtime.Decimal | null;
    PX3SE2C2A1: runtime.Decimal | null;
    PX4DE1C3A1: runtime.Decimal | null;
    PX4DE1C3B1: runtime.Decimal | null;
    PX4DE2C3A1: runtime.Decimal | null;
    PX4DE2C3B1: runtime.Decimal | null;
    PX4DE2C3C1: runtime.Decimal | null;
    PX4DE2C3C2: runtime.Decimal | null;
    PX4EE1C2A1: runtime.Decimal | null;
    PX4EE1C2A2: runtime.Decimal | null;
    PX4EE1C2A3: runtime.Decimal | null;
    PX4EE1C2B1: runtime.Decimal | null;
    PX4EE2C2A1: runtime.Decimal | null;
    PX4LE1C4A1: runtime.Decimal | null;
    PX4LE1C4A2: runtime.Decimal | null;
    PX4LE1C4A3: runtime.Decimal | null;
    PX4LE2C5A1: runtime.Decimal | null;
    PX4LE2C5A2: runtime.Decimal | null;
    PX4LE2C5A3: runtime.Decimal | null;
    PX4SE1C1A1: runtime.Decimal | null;
    PX4SE1C1A2: runtime.Decimal | null;
    PX4SE1C1B1: runtime.Decimal | null;
    PX4SE1C1B2: runtime.Decimal | null;
    PX4SE1C1B3: runtime.Decimal | null;
    PX4SE2C1A1: runtime.Decimal | null;
    PX4SE2C1B1: runtime.Decimal | null;
    PX4SE2C4A1: runtime.Decimal | null;
    PX4SE2C4B1: runtime.Decimal | null;
    PX5DE1C1A1: runtime.Decimal | null;
    PX5DE1C1B1: runtime.Decimal | null;
    PX5DE1C1B2: runtime.Decimal | null;
    PX5DE2C2A1: runtime.Decimal | null;
    PX5DE2C2B1: runtime.Decimal | null;
    PX5DE2C2C1: runtime.Decimal | null;
    PX5DE2C2D1: runtime.Decimal | null;
    PX5EE1C2A1: runtime.Decimal | null;
    PX5EE1C2B1: runtime.Decimal | null;
    PX5EE1C2C1: runtime.Decimal | null;
    PX5EE2C4A1: runtime.Decimal | null;
    PX5EE2C4B1: runtime.Decimal | null;
    PX5LE1C4A1: runtime.Decimal | null;
    PX5LE1C4B1: runtime.Decimal | null;
    PX5LE2C3A1: runtime.Decimal | null;
    PX5LE2C3A2: runtime.Decimal | null;
    PX5LE2C3B1: runtime.Decimal | null;
    PX5LE2C3C1: runtime.Decimal | null;
    PX5SE1C3A1: runtime.Decimal | null;
    PX5SE1C3B1: runtime.Decimal | null;
    PX5SE2C1A1: runtime.Decimal | null;
    PX5SE2C1B1: runtime.Decimal | null;
    PX5SE2C1C1: runtime.Decimal | null;
    PX5SE2C1C2: runtime.Decimal | null;
    PX5SE2C1C3: runtime.Decimal | null;
    id: number | null;
};
export type Alumnos_prioritarios_primaria_generalSumAggregateOutputType = {
    ENT: runtime.Decimal | null;
    CVL_ALUMN: runtime.Decimal | null;
    ID_TURNO: runtime.Decimal | null;
    GRADO: runtime.Decimal | null;
    PX3DE1C4A1: runtime.Decimal | null;
    PX3DE2C4A1: runtime.Decimal | null;
    PX3EE1C3A1: runtime.Decimal | null;
    PX3EE2C1A1: runtime.Decimal | null;
    PX3EE2C3A2: runtime.Decimal | null;
    PX3LE1C1A1: runtime.Decimal | null;
    PX3LE2C3A1: runtime.Decimal | null;
    PX3SE1C2A1: runtime.Decimal | null;
    PX3SE1C2A2: runtime.Decimal | null;
    PX3SE2C2A1: runtime.Decimal | null;
    PX4DE1C3A1: runtime.Decimal | null;
    PX4DE1C3B1: runtime.Decimal | null;
    PX4DE2C3A1: runtime.Decimal | null;
    PX4DE2C3B1: runtime.Decimal | null;
    PX4DE2C3C1: runtime.Decimal | null;
    PX4DE2C3C2: runtime.Decimal | null;
    PX4EE1C2A1: runtime.Decimal | null;
    PX4EE1C2A2: runtime.Decimal | null;
    PX4EE1C2A3: runtime.Decimal | null;
    PX4EE1C2B1: runtime.Decimal | null;
    PX4EE2C2A1: runtime.Decimal | null;
    PX4LE1C4A1: runtime.Decimal | null;
    PX4LE1C4A2: runtime.Decimal | null;
    PX4LE1C4A3: runtime.Decimal | null;
    PX4LE2C5A1: runtime.Decimal | null;
    PX4LE2C5A2: runtime.Decimal | null;
    PX4LE2C5A3: runtime.Decimal | null;
    PX4SE1C1A1: runtime.Decimal | null;
    PX4SE1C1A2: runtime.Decimal | null;
    PX4SE1C1B1: runtime.Decimal | null;
    PX4SE1C1B2: runtime.Decimal | null;
    PX4SE1C1B3: runtime.Decimal | null;
    PX4SE2C1A1: runtime.Decimal | null;
    PX4SE2C1B1: runtime.Decimal | null;
    PX4SE2C4A1: runtime.Decimal | null;
    PX4SE2C4B1: runtime.Decimal | null;
    PX5DE1C1A1: runtime.Decimal | null;
    PX5DE1C1B1: runtime.Decimal | null;
    PX5DE1C1B2: runtime.Decimal | null;
    PX5DE2C2A1: runtime.Decimal | null;
    PX5DE2C2B1: runtime.Decimal | null;
    PX5DE2C2C1: runtime.Decimal | null;
    PX5DE2C2D1: runtime.Decimal | null;
    PX5EE1C2A1: runtime.Decimal | null;
    PX5EE1C2B1: runtime.Decimal | null;
    PX5EE1C2C1: runtime.Decimal | null;
    PX5EE2C4A1: runtime.Decimal | null;
    PX5EE2C4B1: runtime.Decimal | null;
    PX5LE1C4A1: runtime.Decimal | null;
    PX5LE1C4B1: runtime.Decimal | null;
    PX5LE2C3A1: runtime.Decimal | null;
    PX5LE2C3A2: runtime.Decimal | null;
    PX5LE2C3B1: runtime.Decimal | null;
    PX5LE2C3C1: runtime.Decimal | null;
    PX5SE1C3A1: runtime.Decimal | null;
    PX5SE1C3B1: runtime.Decimal | null;
    PX5SE2C1A1: runtime.Decimal | null;
    PX5SE2C1B1: runtime.Decimal | null;
    PX5SE2C1C1: runtime.Decimal | null;
    PX5SE2C1C2: runtime.Decimal | null;
    PX5SE2C1C3: runtime.Decimal | null;
    id: number | null;
};
export type Alumnos_prioritarios_primaria_generalMinAggregateOutputType = {
    IDENTIFICACION: string | null;
    ENT: runtime.Decimal | null;
    LLAVE: string | null;
    CVL_ALUMN: runtime.Decimal | null;
    NOMALUMNO: string | null;
    MATR_EDO: string | null;
    CCT: string | null;
    ID_TURNO: runtime.Decimal | null;
    CONTROL: string | null;
    ID_NIVEL: boolean | null;
    opcion_educativa: string | null;
    TURNO: string | null;
    GRADO: runtime.Decimal | null;
    SEXO: string | null;
    GRUPO: string | null;
    ORIGEN_ARCHIVO: string | null;
    ORIGEN_HOJA: string | null;
    PX3DE1C4A1: runtime.Decimal | null;
    PX3DE2C4A1: runtime.Decimal | null;
    PX3EE1C3A1: runtime.Decimal | null;
    PX3EE2C1A1: runtime.Decimal | null;
    PX3EE2C3A2: runtime.Decimal | null;
    PX3LE1C1A1: runtime.Decimal | null;
    PX3LE2C3A1: runtime.Decimal | null;
    PX3SE1C2A1: runtime.Decimal | null;
    PX3SE1C2A2: runtime.Decimal | null;
    PX3SE2C2A1: runtime.Decimal | null;
    PX4DE1C3A1: runtime.Decimal | null;
    PX4DE1C3B1: runtime.Decimal | null;
    PX4DE2C3A1: runtime.Decimal | null;
    PX4DE2C3B1: runtime.Decimal | null;
    PX4DE2C3C1: runtime.Decimal | null;
    PX4DE2C3C2: runtime.Decimal | null;
    PX4EE1C2A1: runtime.Decimal | null;
    PX4EE1C2A2: runtime.Decimal | null;
    PX4EE1C2A3: runtime.Decimal | null;
    PX4EE1C2B1: runtime.Decimal | null;
    PX4EE2C2A1: runtime.Decimal | null;
    PX4LE1C4A1: runtime.Decimal | null;
    PX4LE1C4A2: runtime.Decimal | null;
    PX4LE1C4A3: runtime.Decimal | null;
    PX4LE2C5A1: runtime.Decimal | null;
    PX4LE2C5A2: runtime.Decimal | null;
    PX4LE2C5A3: runtime.Decimal | null;
    PX4SE1C1A1: runtime.Decimal | null;
    PX4SE1C1A2: runtime.Decimal | null;
    PX4SE1C1B1: runtime.Decimal | null;
    PX4SE1C1B2: runtime.Decimal | null;
    PX4SE1C1B3: runtime.Decimal | null;
    PX4SE2C1A1: runtime.Decimal | null;
    PX4SE2C1B1: runtime.Decimal | null;
    PX4SE2C4A1: runtime.Decimal | null;
    PX4SE2C4B1: runtime.Decimal | null;
    PX5DE1C1A1: runtime.Decimal | null;
    PX5DE1C1B1: runtime.Decimal | null;
    PX5DE1C1B2: runtime.Decimal | null;
    PX5DE2C2A1: runtime.Decimal | null;
    PX5DE2C2B1: runtime.Decimal | null;
    PX5DE2C2C1: runtime.Decimal | null;
    PX5DE2C2D1: runtime.Decimal | null;
    PX5EE1C2A1: runtime.Decimal | null;
    PX5EE1C2B1: runtime.Decimal | null;
    PX5EE1C2C1: runtime.Decimal | null;
    PX5EE2C4A1: runtime.Decimal | null;
    PX5EE2C4B1: runtime.Decimal | null;
    PX5LE1C4A1: runtime.Decimal | null;
    PX5LE1C4B1: runtime.Decimal | null;
    PX5LE2C3A1: runtime.Decimal | null;
    PX5LE2C3A2: runtime.Decimal | null;
    PX5LE2C3B1: runtime.Decimal | null;
    PX5LE2C3C1: runtime.Decimal | null;
    PX5SE1C3A1: runtime.Decimal | null;
    PX5SE1C3B1: runtime.Decimal | null;
    PX5SE2C1A1: runtime.Decimal | null;
    PX5SE2C1B1: runtime.Decimal | null;
    PX5SE2C1C1: runtime.Decimal | null;
    PX5SE2C1C2: runtime.Decimal | null;
    PX5SE2C1C3: runtime.Decimal | null;
    NIVEL_ETICA: string | null;
    NIVEL_HUMANO: string | null;
    NIVEL_LENGUAJES: string | null;
    NIVEL_SABERES: string | null;
    id: number | null;
};
export type Alumnos_prioritarios_primaria_generalMaxAggregateOutputType = {
    IDENTIFICACION: string | null;
    ENT: runtime.Decimal | null;
    LLAVE: string | null;
    CVL_ALUMN: runtime.Decimal | null;
    NOMALUMNO: string | null;
    MATR_EDO: string | null;
    CCT: string | null;
    ID_TURNO: runtime.Decimal | null;
    CONTROL: string | null;
    ID_NIVEL: boolean | null;
    opcion_educativa: string | null;
    TURNO: string | null;
    GRADO: runtime.Decimal | null;
    SEXO: string | null;
    GRUPO: string | null;
    ORIGEN_ARCHIVO: string | null;
    ORIGEN_HOJA: string | null;
    PX3DE1C4A1: runtime.Decimal | null;
    PX3DE2C4A1: runtime.Decimal | null;
    PX3EE1C3A1: runtime.Decimal | null;
    PX3EE2C1A1: runtime.Decimal | null;
    PX3EE2C3A2: runtime.Decimal | null;
    PX3LE1C1A1: runtime.Decimal | null;
    PX3LE2C3A1: runtime.Decimal | null;
    PX3SE1C2A1: runtime.Decimal | null;
    PX3SE1C2A2: runtime.Decimal | null;
    PX3SE2C2A1: runtime.Decimal | null;
    PX4DE1C3A1: runtime.Decimal | null;
    PX4DE1C3B1: runtime.Decimal | null;
    PX4DE2C3A1: runtime.Decimal | null;
    PX4DE2C3B1: runtime.Decimal | null;
    PX4DE2C3C1: runtime.Decimal | null;
    PX4DE2C3C2: runtime.Decimal | null;
    PX4EE1C2A1: runtime.Decimal | null;
    PX4EE1C2A2: runtime.Decimal | null;
    PX4EE1C2A3: runtime.Decimal | null;
    PX4EE1C2B1: runtime.Decimal | null;
    PX4EE2C2A1: runtime.Decimal | null;
    PX4LE1C4A1: runtime.Decimal | null;
    PX4LE1C4A2: runtime.Decimal | null;
    PX4LE1C4A3: runtime.Decimal | null;
    PX4LE2C5A1: runtime.Decimal | null;
    PX4LE2C5A2: runtime.Decimal | null;
    PX4LE2C5A3: runtime.Decimal | null;
    PX4SE1C1A1: runtime.Decimal | null;
    PX4SE1C1A2: runtime.Decimal | null;
    PX4SE1C1B1: runtime.Decimal | null;
    PX4SE1C1B2: runtime.Decimal | null;
    PX4SE1C1B3: runtime.Decimal | null;
    PX4SE2C1A1: runtime.Decimal | null;
    PX4SE2C1B1: runtime.Decimal | null;
    PX4SE2C4A1: runtime.Decimal | null;
    PX4SE2C4B1: runtime.Decimal | null;
    PX5DE1C1A1: runtime.Decimal | null;
    PX5DE1C1B1: runtime.Decimal | null;
    PX5DE1C1B2: runtime.Decimal | null;
    PX5DE2C2A1: runtime.Decimal | null;
    PX5DE2C2B1: runtime.Decimal | null;
    PX5DE2C2C1: runtime.Decimal | null;
    PX5DE2C2D1: runtime.Decimal | null;
    PX5EE1C2A1: runtime.Decimal | null;
    PX5EE1C2B1: runtime.Decimal | null;
    PX5EE1C2C1: runtime.Decimal | null;
    PX5EE2C4A1: runtime.Decimal | null;
    PX5EE2C4B1: runtime.Decimal | null;
    PX5LE1C4A1: runtime.Decimal | null;
    PX5LE1C4B1: runtime.Decimal | null;
    PX5LE2C3A1: runtime.Decimal | null;
    PX5LE2C3A2: runtime.Decimal | null;
    PX5LE2C3B1: runtime.Decimal | null;
    PX5LE2C3C1: runtime.Decimal | null;
    PX5SE1C3A1: runtime.Decimal | null;
    PX5SE1C3B1: runtime.Decimal | null;
    PX5SE2C1A1: runtime.Decimal | null;
    PX5SE2C1B1: runtime.Decimal | null;
    PX5SE2C1C1: runtime.Decimal | null;
    PX5SE2C1C2: runtime.Decimal | null;
    PX5SE2C1C3: runtime.Decimal | null;
    NIVEL_ETICA: string | null;
    NIVEL_HUMANO: string | null;
    NIVEL_LENGUAJES: string | null;
    NIVEL_SABERES: string | null;
    id: number | null;
};
export type Alumnos_prioritarios_primaria_generalCountAggregateOutputType = {
    IDENTIFICACION: number;
    ENT: number;
    LLAVE: number;
    CVL_ALUMN: number;
    NOMALUMNO: number;
    MATR_EDO: number;
    CCT: number;
    ID_TURNO: number;
    CONTROL: number;
    ID_NIVEL: number;
    opcion_educativa: number;
    TURNO: number;
    GRADO: number;
    SEXO: number;
    GRUPO: number;
    ORIGEN_ARCHIVO: number;
    ORIGEN_HOJA: number;
    PX3DE1C4A1: number;
    PX3DE2C4A1: number;
    PX3EE1C3A1: number;
    PX3EE2C1A1: number;
    PX3EE2C3A2: number;
    PX3LE1C1A1: number;
    PX3LE2C3A1: number;
    PX3SE1C2A1: number;
    PX3SE1C2A2: number;
    PX3SE2C2A1: number;
    PX4DE1C3A1: number;
    PX4DE1C3B1: number;
    PX4DE2C3A1: number;
    PX4DE2C3B1: number;
    PX4DE2C3C1: number;
    PX4DE2C3C2: number;
    PX4EE1C2A1: number;
    PX4EE1C2A2: number;
    PX4EE1C2A3: number;
    PX4EE1C2B1: number;
    PX4EE2C2A1: number;
    PX4LE1C4A1: number;
    PX4LE1C4A2: number;
    PX4LE1C4A3: number;
    PX4LE2C5A1: number;
    PX4LE2C5A2: number;
    PX4LE2C5A3: number;
    PX4SE1C1A1: number;
    PX4SE1C1A2: number;
    PX4SE1C1B1: number;
    PX4SE1C1B2: number;
    PX4SE1C1B3: number;
    PX4SE2C1A1: number;
    PX4SE2C1B1: number;
    PX4SE2C4A1: number;
    PX4SE2C4B1: number;
    PX5DE1C1A1: number;
    PX5DE1C1B1: number;
    PX5DE1C1B2: number;
    PX5DE2C2A1: number;
    PX5DE2C2B1: number;
    PX5DE2C2C1: number;
    PX5DE2C2D1: number;
    PX5EE1C2A1: number;
    PX5EE1C2B1: number;
    PX5EE1C2C1: number;
    PX5EE2C4A1: number;
    PX5EE2C4B1: number;
    PX5LE1C4A1: number;
    PX5LE1C4B1: number;
    PX5LE2C3A1: number;
    PX5LE2C3A2: number;
    PX5LE2C3B1: number;
    PX5LE2C3C1: number;
    PX5SE1C3A1: number;
    PX5SE1C3B1: number;
    PX5SE2C1A1: number;
    PX5SE2C1B1: number;
    PX5SE2C1C1: number;
    PX5SE2C1C2: number;
    PX5SE2C1C3: number;
    NIVEL_ETICA: number;
    NIVEL_HUMANO: number;
    NIVEL_LENGUAJES: number;
    NIVEL_SABERES: number;
    id: number;
    _all: number;
};
export type Alumnos_prioritarios_primaria_generalAvgAggregateInputType = {
    ENT?: true;
    CVL_ALUMN?: true;
    ID_TURNO?: true;
    GRADO?: true;
    PX3DE1C4A1?: true;
    PX3DE2C4A1?: true;
    PX3EE1C3A1?: true;
    PX3EE2C1A1?: true;
    PX3EE2C3A2?: true;
    PX3LE1C1A1?: true;
    PX3LE2C3A1?: true;
    PX3SE1C2A1?: true;
    PX3SE1C2A2?: true;
    PX3SE2C2A1?: true;
    PX4DE1C3A1?: true;
    PX4DE1C3B1?: true;
    PX4DE2C3A1?: true;
    PX4DE2C3B1?: true;
    PX4DE2C3C1?: true;
    PX4DE2C3C2?: true;
    PX4EE1C2A1?: true;
    PX4EE1C2A2?: true;
    PX4EE1C2A3?: true;
    PX4EE1C2B1?: true;
    PX4EE2C2A1?: true;
    PX4LE1C4A1?: true;
    PX4LE1C4A2?: true;
    PX4LE1C4A3?: true;
    PX4LE2C5A1?: true;
    PX4LE2C5A2?: true;
    PX4LE2C5A3?: true;
    PX4SE1C1A1?: true;
    PX4SE1C1A2?: true;
    PX4SE1C1B1?: true;
    PX4SE1C1B2?: true;
    PX4SE1C1B3?: true;
    PX4SE2C1A1?: true;
    PX4SE2C1B1?: true;
    PX4SE2C4A1?: true;
    PX4SE2C4B1?: true;
    PX5DE1C1A1?: true;
    PX5DE1C1B1?: true;
    PX5DE1C1B2?: true;
    PX5DE2C2A1?: true;
    PX5DE2C2B1?: true;
    PX5DE2C2C1?: true;
    PX5DE2C2D1?: true;
    PX5EE1C2A1?: true;
    PX5EE1C2B1?: true;
    PX5EE1C2C1?: true;
    PX5EE2C4A1?: true;
    PX5EE2C4B1?: true;
    PX5LE1C4A1?: true;
    PX5LE1C4B1?: true;
    PX5LE2C3A1?: true;
    PX5LE2C3A2?: true;
    PX5LE2C3B1?: true;
    PX5LE2C3C1?: true;
    PX5SE1C3A1?: true;
    PX5SE1C3B1?: true;
    PX5SE2C1A1?: true;
    PX5SE2C1B1?: true;
    PX5SE2C1C1?: true;
    PX5SE2C1C2?: true;
    PX5SE2C1C3?: true;
    id?: true;
};
export type Alumnos_prioritarios_primaria_generalSumAggregateInputType = {
    ENT?: true;
    CVL_ALUMN?: true;
    ID_TURNO?: true;
    GRADO?: true;
    PX3DE1C4A1?: true;
    PX3DE2C4A1?: true;
    PX3EE1C3A1?: true;
    PX3EE2C1A1?: true;
    PX3EE2C3A2?: true;
    PX3LE1C1A1?: true;
    PX3LE2C3A1?: true;
    PX3SE1C2A1?: true;
    PX3SE1C2A2?: true;
    PX3SE2C2A1?: true;
    PX4DE1C3A1?: true;
    PX4DE1C3B1?: true;
    PX4DE2C3A1?: true;
    PX4DE2C3B1?: true;
    PX4DE2C3C1?: true;
    PX4DE2C3C2?: true;
    PX4EE1C2A1?: true;
    PX4EE1C2A2?: true;
    PX4EE1C2A3?: true;
    PX4EE1C2B1?: true;
    PX4EE2C2A1?: true;
    PX4LE1C4A1?: true;
    PX4LE1C4A2?: true;
    PX4LE1C4A3?: true;
    PX4LE2C5A1?: true;
    PX4LE2C5A2?: true;
    PX4LE2C5A3?: true;
    PX4SE1C1A1?: true;
    PX4SE1C1A2?: true;
    PX4SE1C1B1?: true;
    PX4SE1C1B2?: true;
    PX4SE1C1B3?: true;
    PX4SE2C1A1?: true;
    PX4SE2C1B1?: true;
    PX4SE2C4A1?: true;
    PX4SE2C4B1?: true;
    PX5DE1C1A1?: true;
    PX5DE1C1B1?: true;
    PX5DE1C1B2?: true;
    PX5DE2C2A1?: true;
    PX5DE2C2B1?: true;
    PX5DE2C2C1?: true;
    PX5DE2C2D1?: true;
    PX5EE1C2A1?: true;
    PX5EE1C2B1?: true;
    PX5EE1C2C1?: true;
    PX5EE2C4A1?: true;
    PX5EE2C4B1?: true;
    PX5LE1C4A1?: true;
    PX5LE1C4B1?: true;
    PX5LE2C3A1?: true;
    PX5LE2C3A2?: true;
    PX5LE2C3B1?: true;
    PX5LE2C3C1?: true;
    PX5SE1C3A1?: true;
    PX5SE1C3B1?: true;
    PX5SE2C1A1?: true;
    PX5SE2C1B1?: true;
    PX5SE2C1C1?: true;
    PX5SE2C1C2?: true;
    PX5SE2C1C3?: true;
    id?: true;
};
export type Alumnos_prioritarios_primaria_generalMinAggregateInputType = {
    IDENTIFICACION?: true;
    ENT?: true;
    LLAVE?: true;
    CVL_ALUMN?: true;
    NOMALUMNO?: true;
    MATR_EDO?: true;
    CCT?: true;
    ID_TURNO?: true;
    CONTROL?: true;
    ID_NIVEL?: true;
    opcion_educativa?: true;
    TURNO?: true;
    GRADO?: true;
    SEXO?: true;
    GRUPO?: true;
    ORIGEN_ARCHIVO?: true;
    ORIGEN_HOJA?: true;
    PX3DE1C4A1?: true;
    PX3DE2C4A1?: true;
    PX3EE1C3A1?: true;
    PX3EE2C1A1?: true;
    PX3EE2C3A2?: true;
    PX3LE1C1A1?: true;
    PX3LE2C3A1?: true;
    PX3SE1C2A1?: true;
    PX3SE1C2A2?: true;
    PX3SE2C2A1?: true;
    PX4DE1C3A1?: true;
    PX4DE1C3B1?: true;
    PX4DE2C3A1?: true;
    PX4DE2C3B1?: true;
    PX4DE2C3C1?: true;
    PX4DE2C3C2?: true;
    PX4EE1C2A1?: true;
    PX4EE1C2A2?: true;
    PX4EE1C2A3?: true;
    PX4EE1C2B1?: true;
    PX4EE2C2A1?: true;
    PX4LE1C4A1?: true;
    PX4LE1C4A2?: true;
    PX4LE1C4A3?: true;
    PX4LE2C5A1?: true;
    PX4LE2C5A2?: true;
    PX4LE2C5A3?: true;
    PX4SE1C1A1?: true;
    PX4SE1C1A2?: true;
    PX4SE1C1B1?: true;
    PX4SE1C1B2?: true;
    PX4SE1C1B3?: true;
    PX4SE2C1A1?: true;
    PX4SE2C1B1?: true;
    PX4SE2C4A1?: true;
    PX4SE2C4B1?: true;
    PX5DE1C1A1?: true;
    PX5DE1C1B1?: true;
    PX5DE1C1B2?: true;
    PX5DE2C2A1?: true;
    PX5DE2C2B1?: true;
    PX5DE2C2C1?: true;
    PX5DE2C2D1?: true;
    PX5EE1C2A1?: true;
    PX5EE1C2B1?: true;
    PX5EE1C2C1?: true;
    PX5EE2C4A1?: true;
    PX5EE2C4B1?: true;
    PX5LE1C4A1?: true;
    PX5LE1C4B1?: true;
    PX5LE2C3A1?: true;
    PX5LE2C3A2?: true;
    PX5LE2C3B1?: true;
    PX5LE2C3C1?: true;
    PX5SE1C3A1?: true;
    PX5SE1C3B1?: true;
    PX5SE2C1A1?: true;
    PX5SE2C1B1?: true;
    PX5SE2C1C1?: true;
    PX5SE2C1C2?: true;
    PX5SE2C1C3?: true;
    NIVEL_ETICA?: true;
    NIVEL_HUMANO?: true;
    NIVEL_LENGUAJES?: true;
    NIVEL_SABERES?: true;
    id?: true;
};
export type Alumnos_prioritarios_primaria_generalMaxAggregateInputType = {
    IDENTIFICACION?: true;
    ENT?: true;
    LLAVE?: true;
    CVL_ALUMN?: true;
    NOMALUMNO?: true;
    MATR_EDO?: true;
    CCT?: true;
    ID_TURNO?: true;
    CONTROL?: true;
    ID_NIVEL?: true;
    opcion_educativa?: true;
    TURNO?: true;
    GRADO?: true;
    SEXO?: true;
    GRUPO?: true;
    ORIGEN_ARCHIVO?: true;
    ORIGEN_HOJA?: true;
    PX3DE1C4A1?: true;
    PX3DE2C4A1?: true;
    PX3EE1C3A1?: true;
    PX3EE2C1A1?: true;
    PX3EE2C3A2?: true;
    PX3LE1C1A1?: true;
    PX3LE2C3A1?: true;
    PX3SE1C2A1?: true;
    PX3SE1C2A2?: true;
    PX3SE2C2A1?: true;
    PX4DE1C3A1?: true;
    PX4DE1C3B1?: true;
    PX4DE2C3A1?: true;
    PX4DE2C3B1?: true;
    PX4DE2C3C1?: true;
    PX4DE2C3C2?: true;
    PX4EE1C2A1?: true;
    PX4EE1C2A2?: true;
    PX4EE1C2A3?: true;
    PX4EE1C2B1?: true;
    PX4EE2C2A1?: true;
    PX4LE1C4A1?: true;
    PX4LE1C4A2?: true;
    PX4LE1C4A3?: true;
    PX4LE2C5A1?: true;
    PX4LE2C5A2?: true;
    PX4LE2C5A3?: true;
    PX4SE1C1A1?: true;
    PX4SE1C1A2?: true;
    PX4SE1C1B1?: true;
    PX4SE1C1B2?: true;
    PX4SE1C1B3?: true;
    PX4SE2C1A1?: true;
    PX4SE2C1B1?: true;
    PX4SE2C4A1?: true;
    PX4SE2C4B1?: true;
    PX5DE1C1A1?: true;
    PX5DE1C1B1?: true;
    PX5DE1C1B2?: true;
    PX5DE2C2A1?: true;
    PX5DE2C2B1?: true;
    PX5DE2C2C1?: true;
    PX5DE2C2D1?: true;
    PX5EE1C2A1?: true;
    PX5EE1C2B1?: true;
    PX5EE1C2C1?: true;
    PX5EE2C4A1?: true;
    PX5EE2C4B1?: true;
    PX5LE1C4A1?: true;
    PX5LE1C4B1?: true;
    PX5LE2C3A1?: true;
    PX5LE2C3A2?: true;
    PX5LE2C3B1?: true;
    PX5LE2C3C1?: true;
    PX5SE1C3A1?: true;
    PX5SE1C3B1?: true;
    PX5SE2C1A1?: true;
    PX5SE2C1B1?: true;
    PX5SE2C1C1?: true;
    PX5SE2C1C2?: true;
    PX5SE2C1C3?: true;
    NIVEL_ETICA?: true;
    NIVEL_HUMANO?: true;
    NIVEL_LENGUAJES?: true;
    NIVEL_SABERES?: true;
    id?: true;
};
export type Alumnos_prioritarios_primaria_generalCountAggregateInputType = {
    IDENTIFICACION?: true;
    ENT?: true;
    LLAVE?: true;
    CVL_ALUMN?: true;
    NOMALUMNO?: true;
    MATR_EDO?: true;
    CCT?: true;
    ID_TURNO?: true;
    CONTROL?: true;
    ID_NIVEL?: true;
    opcion_educativa?: true;
    TURNO?: true;
    GRADO?: true;
    SEXO?: true;
    GRUPO?: true;
    ORIGEN_ARCHIVO?: true;
    ORIGEN_HOJA?: true;
    PX3DE1C4A1?: true;
    PX3DE2C4A1?: true;
    PX3EE1C3A1?: true;
    PX3EE2C1A1?: true;
    PX3EE2C3A2?: true;
    PX3LE1C1A1?: true;
    PX3LE2C3A1?: true;
    PX3SE1C2A1?: true;
    PX3SE1C2A2?: true;
    PX3SE2C2A1?: true;
    PX4DE1C3A1?: true;
    PX4DE1C3B1?: true;
    PX4DE2C3A1?: true;
    PX4DE2C3B1?: true;
    PX4DE2C3C1?: true;
    PX4DE2C3C2?: true;
    PX4EE1C2A1?: true;
    PX4EE1C2A2?: true;
    PX4EE1C2A3?: true;
    PX4EE1C2B1?: true;
    PX4EE2C2A1?: true;
    PX4LE1C4A1?: true;
    PX4LE1C4A2?: true;
    PX4LE1C4A3?: true;
    PX4LE2C5A1?: true;
    PX4LE2C5A2?: true;
    PX4LE2C5A3?: true;
    PX4SE1C1A1?: true;
    PX4SE1C1A2?: true;
    PX4SE1C1B1?: true;
    PX4SE1C1B2?: true;
    PX4SE1C1B3?: true;
    PX4SE2C1A1?: true;
    PX4SE2C1B1?: true;
    PX4SE2C4A1?: true;
    PX4SE2C4B1?: true;
    PX5DE1C1A1?: true;
    PX5DE1C1B1?: true;
    PX5DE1C1B2?: true;
    PX5DE2C2A1?: true;
    PX5DE2C2B1?: true;
    PX5DE2C2C1?: true;
    PX5DE2C2D1?: true;
    PX5EE1C2A1?: true;
    PX5EE1C2B1?: true;
    PX5EE1C2C1?: true;
    PX5EE2C4A1?: true;
    PX5EE2C4B1?: true;
    PX5LE1C4A1?: true;
    PX5LE1C4B1?: true;
    PX5LE2C3A1?: true;
    PX5LE2C3A2?: true;
    PX5LE2C3B1?: true;
    PX5LE2C3C1?: true;
    PX5SE1C3A1?: true;
    PX5SE1C3B1?: true;
    PX5SE2C1A1?: true;
    PX5SE2C1B1?: true;
    PX5SE2C1C1?: true;
    PX5SE2C1C2?: true;
    PX5SE2C1C3?: true;
    NIVEL_ETICA?: true;
    NIVEL_HUMANO?: true;
    NIVEL_LENGUAJES?: true;
    NIVEL_SABERES?: true;
    id?: true;
    _all?: true;
};
export type Alumnos_prioritarios_primaria_generalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos_prioritarios_primaria_general to aggregate.
     */
    where?: Prisma.alumnos_prioritarios_primaria_generalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_primaria_generals to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_primaria_generalOrderByWithRelationInput | Prisma.alumnos_prioritarios_primaria_generalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_primaria_generals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_primaria_generals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned alumnos_prioritarios_primaria_generals
    **/
    _count?: true | Alumnos_prioritarios_primaria_generalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Alumnos_prioritarios_primaria_generalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Alumnos_prioritarios_primaria_generalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Alumnos_prioritarios_primaria_generalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Alumnos_prioritarios_primaria_generalMaxAggregateInputType;
};
export type GetAlumnos_prioritarios_primaria_generalAggregateType<T extends Alumnos_prioritarios_primaria_generalAggregateArgs> = {
    [P in keyof T & keyof AggregateAlumnos_prioritarios_primaria_general]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlumnos_prioritarios_primaria_general[P]> : Prisma.GetScalarType<T[P], AggregateAlumnos_prioritarios_primaria_general[P]>;
};
export type alumnos_prioritarios_primaria_generalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.alumnos_prioritarios_primaria_generalWhereInput;
    orderBy?: Prisma.alumnos_prioritarios_primaria_generalOrderByWithAggregationInput | Prisma.alumnos_prioritarios_primaria_generalOrderByWithAggregationInput[];
    by: Prisma.Alumnos_prioritarios_primaria_generalScalarFieldEnum[] | Prisma.Alumnos_prioritarios_primaria_generalScalarFieldEnum;
    having?: Prisma.alumnos_prioritarios_primaria_generalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Alumnos_prioritarios_primaria_generalCountAggregateInputType | true;
    _avg?: Alumnos_prioritarios_primaria_generalAvgAggregateInputType;
    _sum?: Alumnos_prioritarios_primaria_generalSumAggregateInputType;
    _min?: Alumnos_prioritarios_primaria_generalMinAggregateInputType;
    _max?: Alumnos_prioritarios_primaria_generalMaxAggregateInputType;
};
export type Alumnos_prioritarios_primaria_generalGroupByOutputType = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal;
    NOMALUMNO: string;
    MATR_EDO: string | null;
    CCT: string;
    ID_TURNO: runtime.Decimal;
    CONTROL: string;
    ID_NIVEL: boolean;
    opcion_educativa: string;
    TURNO: string;
    GRADO: runtime.Decimal;
    SEXO: string;
    GRUPO: string;
    ORIGEN_ARCHIVO: string;
    ORIGEN_HOJA: string;
    PX3DE1C4A1: runtime.Decimal;
    PX3DE2C4A1: runtime.Decimal;
    PX3EE1C3A1: runtime.Decimal;
    PX3EE2C1A1: runtime.Decimal;
    PX3EE2C3A2: runtime.Decimal;
    PX3LE1C1A1: runtime.Decimal;
    PX3LE2C3A1: runtime.Decimal;
    PX3SE1C2A1: runtime.Decimal;
    PX3SE1C2A2: runtime.Decimal;
    PX3SE2C2A1: runtime.Decimal;
    PX4DE1C3A1: runtime.Decimal;
    PX4DE1C3B1: runtime.Decimal;
    PX4DE2C3A1: runtime.Decimal;
    PX4DE2C3B1: runtime.Decimal;
    PX4DE2C3C1: runtime.Decimal;
    PX4DE2C3C2: runtime.Decimal;
    PX4EE1C2A1: runtime.Decimal;
    PX4EE1C2A2: runtime.Decimal;
    PX4EE1C2A3: runtime.Decimal;
    PX4EE1C2B1: runtime.Decimal;
    PX4EE2C2A1: runtime.Decimal;
    PX4LE1C4A1: runtime.Decimal;
    PX4LE1C4A2: runtime.Decimal;
    PX4LE1C4A3: runtime.Decimal;
    PX4LE2C5A1: runtime.Decimal;
    PX4LE2C5A2: runtime.Decimal;
    PX4LE2C5A3: runtime.Decimal;
    PX4SE1C1A1: runtime.Decimal;
    PX4SE1C1A2: runtime.Decimal;
    PX4SE1C1B1: runtime.Decimal;
    PX4SE1C1B2: runtime.Decimal;
    PX4SE1C1B3: runtime.Decimal;
    PX4SE2C1A1: runtime.Decimal;
    PX4SE2C1B1: runtime.Decimal;
    PX4SE2C4A1: runtime.Decimal;
    PX4SE2C4B1: runtime.Decimal;
    PX5DE1C1A1: runtime.Decimal;
    PX5DE1C1B1: runtime.Decimal;
    PX5DE1C1B2: runtime.Decimal;
    PX5DE2C2A1: runtime.Decimal;
    PX5DE2C2B1: runtime.Decimal;
    PX5DE2C2C1: runtime.Decimal;
    PX5DE2C2D1: runtime.Decimal;
    PX5EE1C2A1: runtime.Decimal;
    PX5EE1C2B1: runtime.Decimal;
    PX5EE1C2C1: runtime.Decimal;
    PX5EE2C4A1: runtime.Decimal;
    PX5EE2C4B1: runtime.Decimal;
    PX5LE1C4A1: runtime.Decimal;
    PX5LE1C4B1: runtime.Decimal;
    PX5LE2C3A1: runtime.Decimal;
    PX5LE2C3A2: runtime.Decimal;
    PX5LE2C3B1: runtime.Decimal;
    PX5LE2C3C1: runtime.Decimal;
    PX5SE1C3A1: runtime.Decimal;
    PX5SE1C3B1: runtime.Decimal;
    PX5SE2C1A1: runtime.Decimal;
    PX5SE2C1B1: runtime.Decimal;
    PX5SE2C1C1: runtime.Decimal;
    PX5SE2C1C2: runtime.Decimal;
    PX5SE2C1C3: runtime.Decimal;
    NIVEL_ETICA: string;
    NIVEL_HUMANO: string;
    NIVEL_LENGUAJES: string;
    NIVEL_SABERES: string;
    id: number;
    _count: Alumnos_prioritarios_primaria_generalCountAggregateOutputType | null;
    _avg: Alumnos_prioritarios_primaria_generalAvgAggregateOutputType | null;
    _sum: Alumnos_prioritarios_primaria_generalSumAggregateOutputType | null;
    _min: Alumnos_prioritarios_primaria_generalMinAggregateOutputType | null;
    _max: Alumnos_prioritarios_primaria_generalMaxAggregateOutputType | null;
};
type GetAlumnos_prioritarios_primaria_generalGroupByPayload<T extends alumnos_prioritarios_primaria_generalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Alumnos_prioritarios_primaria_generalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Alumnos_prioritarios_primaria_generalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Alumnos_prioritarios_primaria_generalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Alumnos_prioritarios_primaria_generalGroupByOutputType[P]>;
}>>;
export type alumnos_prioritarios_primaria_generalWhereInput = {
    AND?: Prisma.alumnos_prioritarios_primaria_generalWhereInput | Prisma.alumnos_prioritarios_primaria_generalWhereInput[];
    OR?: Prisma.alumnos_prioritarios_primaria_generalWhereInput[];
    NOT?: Prisma.alumnos_prioritarios_primaria_generalWhereInput | Prisma.alumnos_prioritarios_primaria_generalWhereInput[];
    IDENTIFICACION?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ENT?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    CVL_ALUMN?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    MATR_EDO?: Prisma.StringNullableFilter<"alumnos_prioritarios_primaria_general"> | string | null;
    CCT?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ID_TURNO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ID_NIVEL?: Prisma.BoolFilter<"alumnos_prioritarios_primaria_general"> | boolean;
    opcion_educativa?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    TURNO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    GRADO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    GRUPO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ORIGEN_HOJA?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    PX3DE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_HUMANO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_LENGUAJES?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_SABERES?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    id?: Prisma.IntFilter<"alumnos_prioritarios_primaria_general"> | number;
};
export type alumnos_prioritarios_primaria_generalOrderByWithRelationInput = {
    IDENTIFICACION?: Prisma.SortOrder;
    ENT?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    NOMALUMNO?: Prisma.SortOrder;
    MATR_EDO?: Prisma.SortOrderInput | Prisma.SortOrder;
    CCT?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    ID_NIVEL?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SEXO?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    ORIGEN_ARCHIVO?: Prisma.SortOrder;
    ORIGEN_HOJA?: Prisma.SortOrder;
    PX3DE1C4A1?: Prisma.SortOrder;
    PX3DE2C4A1?: Prisma.SortOrder;
    PX3EE1C3A1?: Prisma.SortOrder;
    PX3EE2C1A1?: Prisma.SortOrder;
    PX3EE2C3A2?: Prisma.SortOrder;
    PX3LE1C1A1?: Prisma.SortOrder;
    PX3LE2C3A1?: Prisma.SortOrder;
    PX3SE1C2A1?: Prisma.SortOrder;
    PX3SE1C2A2?: Prisma.SortOrder;
    PX3SE2C2A1?: Prisma.SortOrder;
    PX4DE1C3A1?: Prisma.SortOrder;
    PX4DE1C3B1?: Prisma.SortOrder;
    PX4DE2C3A1?: Prisma.SortOrder;
    PX4DE2C3B1?: Prisma.SortOrder;
    PX4DE2C3C1?: Prisma.SortOrder;
    PX4DE2C3C2?: Prisma.SortOrder;
    PX4EE1C2A1?: Prisma.SortOrder;
    PX4EE1C2A2?: Prisma.SortOrder;
    PX4EE1C2A3?: Prisma.SortOrder;
    PX4EE1C2B1?: Prisma.SortOrder;
    PX4EE2C2A1?: Prisma.SortOrder;
    PX4LE1C4A1?: Prisma.SortOrder;
    PX4LE1C4A2?: Prisma.SortOrder;
    PX4LE1C4A3?: Prisma.SortOrder;
    PX4LE2C5A1?: Prisma.SortOrder;
    PX4LE2C5A2?: Prisma.SortOrder;
    PX4LE2C5A3?: Prisma.SortOrder;
    PX4SE1C1A1?: Prisma.SortOrder;
    PX4SE1C1A2?: Prisma.SortOrder;
    PX4SE1C1B1?: Prisma.SortOrder;
    PX4SE1C1B2?: Prisma.SortOrder;
    PX4SE1C1B3?: Prisma.SortOrder;
    PX4SE2C1A1?: Prisma.SortOrder;
    PX4SE2C1B1?: Prisma.SortOrder;
    PX4SE2C4A1?: Prisma.SortOrder;
    PX4SE2C4B1?: Prisma.SortOrder;
    PX5DE1C1A1?: Prisma.SortOrder;
    PX5DE1C1B1?: Prisma.SortOrder;
    PX5DE1C1B2?: Prisma.SortOrder;
    PX5DE2C2A1?: Prisma.SortOrder;
    PX5DE2C2B1?: Prisma.SortOrder;
    PX5DE2C2C1?: Prisma.SortOrder;
    PX5DE2C2D1?: Prisma.SortOrder;
    PX5EE1C2A1?: Prisma.SortOrder;
    PX5EE1C2B1?: Prisma.SortOrder;
    PX5EE1C2C1?: Prisma.SortOrder;
    PX5EE2C4A1?: Prisma.SortOrder;
    PX5EE2C4B1?: Prisma.SortOrder;
    PX5LE1C4A1?: Prisma.SortOrder;
    PX5LE1C4B1?: Prisma.SortOrder;
    PX5LE2C3A1?: Prisma.SortOrder;
    PX5LE2C3A2?: Prisma.SortOrder;
    PX5LE2C3B1?: Prisma.SortOrder;
    PX5LE2C3C1?: Prisma.SortOrder;
    PX5SE1C3A1?: Prisma.SortOrder;
    PX5SE1C3B1?: Prisma.SortOrder;
    PX5SE2C1A1?: Prisma.SortOrder;
    PX5SE2C1B1?: Prisma.SortOrder;
    PX5SE2C1C1?: Prisma.SortOrder;
    PX5SE2C1C2?: Prisma.SortOrder;
    PX5SE2C1C3?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_primaria_generalWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.alumnos_prioritarios_primaria_generalWhereInput | Prisma.alumnos_prioritarios_primaria_generalWhereInput[];
    OR?: Prisma.alumnos_prioritarios_primaria_generalWhereInput[];
    NOT?: Prisma.alumnos_prioritarios_primaria_generalWhereInput | Prisma.alumnos_prioritarios_primaria_generalWhereInput[];
    IDENTIFICACION?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ENT?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    CVL_ALUMN?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    MATR_EDO?: Prisma.StringNullableFilter<"alumnos_prioritarios_primaria_general"> | string | null;
    CCT?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ID_TURNO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ID_NIVEL?: Prisma.BoolFilter<"alumnos_prioritarios_primaria_general"> | boolean;
    opcion_educativa?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    TURNO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    GRADO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    GRUPO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    ORIGEN_HOJA?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    PX3DE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_HUMANO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_LENGUAJES?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_SABERES?: Prisma.StringFilter<"alumnos_prioritarios_primaria_general"> | string;
}, "id">;
export type alumnos_prioritarios_primaria_generalOrderByWithAggregationInput = {
    IDENTIFICACION?: Prisma.SortOrder;
    ENT?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    NOMALUMNO?: Prisma.SortOrder;
    MATR_EDO?: Prisma.SortOrderInput | Prisma.SortOrder;
    CCT?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    ID_NIVEL?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SEXO?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    ORIGEN_ARCHIVO?: Prisma.SortOrder;
    ORIGEN_HOJA?: Prisma.SortOrder;
    PX3DE1C4A1?: Prisma.SortOrder;
    PX3DE2C4A1?: Prisma.SortOrder;
    PX3EE1C3A1?: Prisma.SortOrder;
    PX3EE2C1A1?: Prisma.SortOrder;
    PX3EE2C3A2?: Prisma.SortOrder;
    PX3LE1C1A1?: Prisma.SortOrder;
    PX3LE2C3A1?: Prisma.SortOrder;
    PX3SE1C2A1?: Prisma.SortOrder;
    PX3SE1C2A2?: Prisma.SortOrder;
    PX3SE2C2A1?: Prisma.SortOrder;
    PX4DE1C3A1?: Prisma.SortOrder;
    PX4DE1C3B1?: Prisma.SortOrder;
    PX4DE2C3A1?: Prisma.SortOrder;
    PX4DE2C3B1?: Prisma.SortOrder;
    PX4DE2C3C1?: Prisma.SortOrder;
    PX4DE2C3C2?: Prisma.SortOrder;
    PX4EE1C2A1?: Prisma.SortOrder;
    PX4EE1C2A2?: Prisma.SortOrder;
    PX4EE1C2A3?: Prisma.SortOrder;
    PX4EE1C2B1?: Prisma.SortOrder;
    PX4EE2C2A1?: Prisma.SortOrder;
    PX4LE1C4A1?: Prisma.SortOrder;
    PX4LE1C4A2?: Prisma.SortOrder;
    PX4LE1C4A3?: Prisma.SortOrder;
    PX4LE2C5A1?: Prisma.SortOrder;
    PX4LE2C5A2?: Prisma.SortOrder;
    PX4LE2C5A3?: Prisma.SortOrder;
    PX4SE1C1A1?: Prisma.SortOrder;
    PX4SE1C1A2?: Prisma.SortOrder;
    PX4SE1C1B1?: Prisma.SortOrder;
    PX4SE1C1B2?: Prisma.SortOrder;
    PX4SE1C1B3?: Prisma.SortOrder;
    PX4SE2C1A1?: Prisma.SortOrder;
    PX4SE2C1B1?: Prisma.SortOrder;
    PX4SE2C4A1?: Prisma.SortOrder;
    PX4SE2C4B1?: Prisma.SortOrder;
    PX5DE1C1A1?: Prisma.SortOrder;
    PX5DE1C1B1?: Prisma.SortOrder;
    PX5DE1C1B2?: Prisma.SortOrder;
    PX5DE2C2A1?: Prisma.SortOrder;
    PX5DE2C2B1?: Prisma.SortOrder;
    PX5DE2C2C1?: Prisma.SortOrder;
    PX5DE2C2D1?: Prisma.SortOrder;
    PX5EE1C2A1?: Prisma.SortOrder;
    PX5EE1C2B1?: Prisma.SortOrder;
    PX5EE1C2C1?: Prisma.SortOrder;
    PX5EE2C4A1?: Prisma.SortOrder;
    PX5EE2C4B1?: Prisma.SortOrder;
    PX5LE1C4A1?: Prisma.SortOrder;
    PX5LE1C4B1?: Prisma.SortOrder;
    PX5LE2C3A1?: Prisma.SortOrder;
    PX5LE2C3A2?: Prisma.SortOrder;
    PX5LE2C3B1?: Prisma.SortOrder;
    PX5LE2C3C1?: Prisma.SortOrder;
    PX5SE1C3A1?: Prisma.SortOrder;
    PX5SE1C3B1?: Prisma.SortOrder;
    PX5SE2C1A1?: Prisma.SortOrder;
    PX5SE2C1B1?: Prisma.SortOrder;
    PX5SE2C1C1?: Prisma.SortOrder;
    PX5SE2C1C2?: Prisma.SortOrder;
    PX5SE2C1C3?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    _count?: Prisma.alumnos_prioritarios_primaria_generalCountOrderByAggregateInput;
    _avg?: Prisma.alumnos_prioritarios_primaria_generalAvgOrderByAggregateInput;
    _max?: Prisma.alumnos_prioritarios_primaria_generalMaxOrderByAggregateInput;
    _min?: Prisma.alumnos_prioritarios_primaria_generalMinOrderByAggregateInput;
    _sum?: Prisma.alumnos_prioritarios_primaria_generalSumOrderByAggregateInput;
};
export type alumnos_prioritarios_primaria_generalScalarWhereWithAggregatesInput = {
    AND?: Prisma.alumnos_prioritarios_primaria_generalScalarWhereWithAggregatesInput | Prisma.alumnos_prioritarios_primaria_generalScalarWhereWithAggregatesInput[];
    OR?: Prisma.alumnos_prioritarios_primaria_generalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.alumnos_prioritarios_primaria_generalScalarWhereWithAggregatesInput | Prisma.alumnos_prioritarios_primaria_generalScalarWhereWithAggregatesInput[];
    IDENTIFICACION?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    ENT?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    CVL_ALUMN?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    MATR_EDO?: Prisma.StringNullableWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string | null;
    CCT?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    ID_TURNO?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    ID_NIVEL?: Prisma.BoolWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | boolean;
    opcion_educativa?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    TURNO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    GRADO?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    GRUPO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    ORIGEN_HOJA?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    PX3DE1C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_HUMANO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_LENGUAJES?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    NIVEL_SABERES?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | string;
    id?: Prisma.IntWithAggregatesFilter<"alumnos_prioritarios_primaria_general"> | number;
};
export type alumnos_prioritarios_primaria_generalCreateInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO?: string | null;
    CCT: string;
    ID_TURNO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL: string;
    ID_NIVEL: boolean;
    opcion_educativa: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO: string;
    GRUPO: string;
    ORIGEN_ARCHIVO: string;
    ORIGEN_HOJA: string;
    PX3DE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA: string;
    NIVEL_HUMANO: string;
    NIVEL_LENGUAJES: string;
    NIVEL_SABERES: string;
};
export type alumnos_prioritarios_primaria_generalUncheckedCreateInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO?: string | null;
    CCT: string;
    ID_TURNO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL: string;
    ID_NIVEL: boolean;
    opcion_educativa: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO: string;
    GRUPO: string;
    ORIGEN_ARCHIVO: string;
    ORIGEN_HOJA: string;
    PX3DE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA: string;
    NIVEL_HUMANO: string;
    NIVEL_LENGUAJES: string;
    NIVEL_SABERES: string;
    id?: number;
};
export type alumnos_prioritarios_primaria_generalUpdateInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CCT?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_TURNO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_NIVEL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_ARCHIVO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_HOJA?: Prisma.StringFieldUpdateOperationsInput | string;
    PX3DE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_HUMANO?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_LENGUAJES?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_SABERES?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type alumnos_prioritarios_primaria_generalUncheckedUpdateInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CCT?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_TURNO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_NIVEL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_ARCHIVO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_HOJA?: Prisma.StringFieldUpdateOperationsInput | string;
    PX3DE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_HUMANO?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_LENGUAJES?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_SABERES?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type alumnos_prioritarios_primaria_generalCreateManyInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO?: string | null;
    CCT: string;
    ID_TURNO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL: string;
    ID_NIVEL: boolean;
    opcion_educativa: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO: string;
    GRUPO: string;
    ORIGEN_ARCHIVO: string;
    ORIGEN_HOJA: string;
    PX3DE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA: string;
    NIVEL_HUMANO: string;
    NIVEL_LENGUAJES: string;
    NIVEL_SABERES: string;
    id?: number;
};
export type alumnos_prioritarios_primaria_generalUpdateManyMutationInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CCT?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_TURNO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_NIVEL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_ARCHIVO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_HOJA?: Prisma.StringFieldUpdateOperationsInput | string;
    PX3DE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_HUMANO?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_LENGUAJES?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_SABERES?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type alumnos_prioritarios_primaria_generalUncheckedUpdateManyInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CCT?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_TURNO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_NIVEL?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_ARCHIVO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_HOJA?: Prisma.StringFieldUpdateOperationsInput | string;
    PX3DE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_HUMANO?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_LENGUAJES?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_SABERES?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type alumnos_prioritarios_primaria_generalCountOrderByAggregateInput = {
    IDENTIFICACION?: Prisma.SortOrder;
    ENT?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    NOMALUMNO?: Prisma.SortOrder;
    MATR_EDO?: Prisma.SortOrder;
    CCT?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    ID_NIVEL?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SEXO?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    ORIGEN_ARCHIVO?: Prisma.SortOrder;
    ORIGEN_HOJA?: Prisma.SortOrder;
    PX3DE1C4A1?: Prisma.SortOrder;
    PX3DE2C4A1?: Prisma.SortOrder;
    PX3EE1C3A1?: Prisma.SortOrder;
    PX3EE2C1A1?: Prisma.SortOrder;
    PX3EE2C3A2?: Prisma.SortOrder;
    PX3LE1C1A1?: Prisma.SortOrder;
    PX3LE2C3A1?: Prisma.SortOrder;
    PX3SE1C2A1?: Prisma.SortOrder;
    PX3SE1C2A2?: Prisma.SortOrder;
    PX3SE2C2A1?: Prisma.SortOrder;
    PX4DE1C3A1?: Prisma.SortOrder;
    PX4DE1C3B1?: Prisma.SortOrder;
    PX4DE2C3A1?: Prisma.SortOrder;
    PX4DE2C3B1?: Prisma.SortOrder;
    PX4DE2C3C1?: Prisma.SortOrder;
    PX4DE2C3C2?: Prisma.SortOrder;
    PX4EE1C2A1?: Prisma.SortOrder;
    PX4EE1C2A2?: Prisma.SortOrder;
    PX4EE1C2A3?: Prisma.SortOrder;
    PX4EE1C2B1?: Prisma.SortOrder;
    PX4EE2C2A1?: Prisma.SortOrder;
    PX4LE1C4A1?: Prisma.SortOrder;
    PX4LE1C4A2?: Prisma.SortOrder;
    PX4LE1C4A3?: Prisma.SortOrder;
    PX4LE2C5A1?: Prisma.SortOrder;
    PX4LE2C5A2?: Prisma.SortOrder;
    PX4LE2C5A3?: Prisma.SortOrder;
    PX4SE1C1A1?: Prisma.SortOrder;
    PX4SE1C1A2?: Prisma.SortOrder;
    PX4SE1C1B1?: Prisma.SortOrder;
    PX4SE1C1B2?: Prisma.SortOrder;
    PX4SE1C1B3?: Prisma.SortOrder;
    PX4SE2C1A1?: Prisma.SortOrder;
    PX4SE2C1B1?: Prisma.SortOrder;
    PX4SE2C4A1?: Prisma.SortOrder;
    PX4SE2C4B1?: Prisma.SortOrder;
    PX5DE1C1A1?: Prisma.SortOrder;
    PX5DE1C1B1?: Prisma.SortOrder;
    PX5DE1C1B2?: Prisma.SortOrder;
    PX5DE2C2A1?: Prisma.SortOrder;
    PX5DE2C2B1?: Prisma.SortOrder;
    PX5DE2C2C1?: Prisma.SortOrder;
    PX5DE2C2D1?: Prisma.SortOrder;
    PX5EE1C2A1?: Prisma.SortOrder;
    PX5EE1C2B1?: Prisma.SortOrder;
    PX5EE1C2C1?: Prisma.SortOrder;
    PX5EE2C4A1?: Prisma.SortOrder;
    PX5EE2C4B1?: Prisma.SortOrder;
    PX5LE1C4A1?: Prisma.SortOrder;
    PX5LE1C4B1?: Prisma.SortOrder;
    PX5LE2C3A1?: Prisma.SortOrder;
    PX5LE2C3A2?: Prisma.SortOrder;
    PX5LE2C3B1?: Prisma.SortOrder;
    PX5LE2C3C1?: Prisma.SortOrder;
    PX5SE1C3A1?: Prisma.SortOrder;
    PX5SE1C3B1?: Prisma.SortOrder;
    PX5SE2C1A1?: Prisma.SortOrder;
    PX5SE2C1B1?: Prisma.SortOrder;
    PX5SE2C1C1?: Prisma.SortOrder;
    PX5SE2C1C2?: Prisma.SortOrder;
    PX5SE2C1C3?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_primaria_generalAvgOrderByAggregateInput = {
    ENT?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    PX3DE1C4A1?: Prisma.SortOrder;
    PX3DE2C4A1?: Prisma.SortOrder;
    PX3EE1C3A1?: Prisma.SortOrder;
    PX3EE2C1A1?: Prisma.SortOrder;
    PX3EE2C3A2?: Prisma.SortOrder;
    PX3LE1C1A1?: Prisma.SortOrder;
    PX3LE2C3A1?: Prisma.SortOrder;
    PX3SE1C2A1?: Prisma.SortOrder;
    PX3SE1C2A2?: Prisma.SortOrder;
    PX3SE2C2A1?: Prisma.SortOrder;
    PX4DE1C3A1?: Prisma.SortOrder;
    PX4DE1C3B1?: Prisma.SortOrder;
    PX4DE2C3A1?: Prisma.SortOrder;
    PX4DE2C3B1?: Prisma.SortOrder;
    PX4DE2C3C1?: Prisma.SortOrder;
    PX4DE2C3C2?: Prisma.SortOrder;
    PX4EE1C2A1?: Prisma.SortOrder;
    PX4EE1C2A2?: Prisma.SortOrder;
    PX4EE1C2A3?: Prisma.SortOrder;
    PX4EE1C2B1?: Prisma.SortOrder;
    PX4EE2C2A1?: Prisma.SortOrder;
    PX4LE1C4A1?: Prisma.SortOrder;
    PX4LE1C4A2?: Prisma.SortOrder;
    PX4LE1C4A3?: Prisma.SortOrder;
    PX4LE2C5A1?: Prisma.SortOrder;
    PX4LE2C5A2?: Prisma.SortOrder;
    PX4LE2C5A3?: Prisma.SortOrder;
    PX4SE1C1A1?: Prisma.SortOrder;
    PX4SE1C1A2?: Prisma.SortOrder;
    PX4SE1C1B1?: Prisma.SortOrder;
    PX4SE1C1B2?: Prisma.SortOrder;
    PX4SE1C1B3?: Prisma.SortOrder;
    PX4SE2C1A1?: Prisma.SortOrder;
    PX4SE2C1B1?: Prisma.SortOrder;
    PX4SE2C4A1?: Prisma.SortOrder;
    PX4SE2C4B1?: Prisma.SortOrder;
    PX5DE1C1A1?: Prisma.SortOrder;
    PX5DE1C1B1?: Prisma.SortOrder;
    PX5DE1C1B2?: Prisma.SortOrder;
    PX5DE2C2A1?: Prisma.SortOrder;
    PX5DE2C2B1?: Prisma.SortOrder;
    PX5DE2C2C1?: Prisma.SortOrder;
    PX5DE2C2D1?: Prisma.SortOrder;
    PX5EE1C2A1?: Prisma.SortOrder;
    PX5EE1C2B1?: Prisma.SortOrder;
    PX5EE1C2C1?: Prisma.SortOrder;
    PX5EE2C4A1?: Prisma.SortOrder;
    PX5EE2C4B1?: Prisma.SortOrder;
    PX5LE1C4A1?: Prisma.SortOrder;
    PX5LE1C4B1?: Prisma.SortOrder;
    PX5LE2C3A1?: Prisma.SortOrder;
    PX5LE2C3A2?: Prisma.SortOrder;
    PX5LE2C3B1?: Prisma.SortOrder;
    PX5LE2C3C1?: Prisma.SortOrder;
    PX5SE1C3A1?: Prisma.SortOrder;
    PX5SE1C3B1?: Prisma.SortOrder;
    PX5SE2C1A1?: Prisma.SortOrder;
    PX5SE2C1B1?: Prisma.SortOrder;
    PX5SE2C1C1?: Prisma.SortOrder;
    PX5SE2C1C2?: Prisma.SortOrder;
    PX5SE2C1C3?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_primaria_generalMaxOrderByAggregateInput = {
    IDENTIFICACION?: Prisma.SortOrder;
    ENT?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    NOMALUMNO?: Prisma.SortOrder;
    MATR_EDO?: Prisma.SortOrder;
    CCT?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    ID_NIVEL?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SEXO?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    ORIGEN_ARCHIVO?: Prisma.SortOrder;
    ORIGEN_HOJA?: Prisma.SortOrder;
    PX3DE1C4A1?: Prisma.SortOrder;
    PX3DE2C4A1?: Prisma.SortOrder;
    PX3EE1C3A1?: Prisma.SortOrder;
    PX3EE2C1A1?: Prisma.SortOrder;
    PX3EE2C3A2?: Prisma.SortOrder;
    PX3LE1C1A1?: Prisma.SortOrder;
    PX3LE2C3A1?: Prisma.SortOrder;
    PX3SE1C2A1?: Prisma.SortOrder;
    PX3SE1C2A2?: Prisma.SortOrder;
    PX3SE2C2A1?: Prisma.SortOrder;
    PX4DE1C3A1?: Prisma.SortOrder;
    PX4DE1C3B1?: Prisma.SortOrder;
    PX4DE2C3A1?: Prisma.SortOrder;
    PX4DE2C3B1?: Prisma.SortOrder;
    PX4DE2C3C1?: Prisma.SortOrder;
    PX4DE2C3C2?: Prisma.SortOrder;
    PX4EE1C2A1?: Prisma.SortOrder;
    PX4EE1C2A2?: Prisma.SortOrder;
    PX4EE1C2A3?: Prisma.SortOrder;
    PX4EE1C2B1?: Prisma.SortOrder;
    PX4EE2C2A1?: Prisma.SortOrder;
    PX4LE1C4A1?: Prisma.SortOrder;
    PX4LE1C4A2?: Prisma.SortOrder;
    PX4LE1C4A3?: Prisma.SortOrder;
    PX4LE2C5A1?: Prisma.SortOrder;
    PX4LE2C5A2?: Prisma.SortOrder;
    PX4LE2C5A3?: Prisma.SortOrder;
    PX4SE1C1A1?: Prisma.SortOrder;
    PX4SE1C1A2?: Prisma.SortOrder;
    PX4SE1C1B1?: Prisma.SortOrder;
    PX4SE1C1B2?: Prisma.SortOrder;
    PX4SE1C1B3?: Prisma.SortOrder;
    PX4SE2C1A1?: Prisma.SortOrder;
    PX4SE2C1B1?: Prisma.SortOrder;
    PX4SE2C4A1?: Prisma.SortOrder;
    PX4SE2C4B1?: Prisma.SortOrder;
    PX5DE1C1A1?: Prisma.SortOrder;
    PX5DE1C1B1?: Prisma.SortOrder;
    PX5DE1C1B2?: Prisma.SortOrder;
    PX5DE2C2A1?: Prisma.SortOrder;
    PX5DE2C2B1?: Prisma.SortOrder;
    PX5DE2C2C1?: Prisma.SortOrder;
    PX5DE2C2D1?: Prisma.SortOrder;
    PX5EE1C2A1?: Prisma.SortOrder;
    PX5EE1C2B1?: Prisma.SortOrder;
    PX5EE1C2C1?: Prisma.SortOrder;
    PX5EE2C4A1?: Prisma.SortOrder;
    PX5EE2C4B1?: Prisma.SortOrder;
    PX5LE1C4A1?: Prisma.SortOrder;
    PX5LE1C4B1?: Prisma.SortOrder;
    PX5LE2C3A1?: Prisma.SortOrder;
    PX5LE2C3A2?: Prisma.SortOrder;
    PX5LE2C3B1?: Prisma.SortOrder;
    PX5LE2C3C1?: Prisma.SortOrder;
    PX5SE1C3A1?: Prisma.SortOrder;
    PX5SE1C3B1?: Prisma.SortOrder;
    PX5SE2C1A1?: Prisma.SortOrder;
    PX5SE2C1B1?: Prisma.SortOrder;
    PX5SE2C1C1?: Prisma.SortOrder;
    PX5SE2C1C2?: Prisma.SortOrder;
    PX5SE2C1C3?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_primaria_generalMinOrderByAggregateInput = {
    IDENTIFICACION?: Prisma.SortOrder;
    ENT?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    NOMALUMNO?: Prisma.SortOrder;
    MATR_EDO?: Prisma.SortOrder;
    CCT?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    ID_NIVEL?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SEXO?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    ORIGEN_ARCHIVO?: Prisma.SortOrder;
    ORIGEN_HOJA?: Prisma.SortOrder;
    PX3DE1C4A1?: Prisma.SortOrder;
    PX3DE2C4A1?: Prisma.SortOrder;
    PX3EE1C3A1?: Prisma.SortOrder;
    PX3EE2C1A1?: Prisma.SortOrder;
    PX3EE2C3A2?: Prisma.SortOrder;
    PX3LE1C1A1?: Prisma.SortOrder;
    PX3LE2C3A1?: Prisma.SortOrder;
    PX3SE1C2A1?: Prisma.SortOrder;
    PX3SE1C2A2?: Prisma.SortOrder;
    PX3SE2C2A1?: Prisma.SortOrder;
    PX4DE1C3A1?: Prisma.SortOrder;
    PX4DE1C3B1?: Prisma.SortOrder;
    PX4DE2C3A1?: Prisma.SortOrder;
    PX4DE2C3B1?: Prisma.SortOrder;
    PX4DE2C3C1?: Prisma.SortOrder;
    PX4DE2C3C2?: Prisma.SortOrder;
    PX4EE1C2A1?: Prisma.SortOrder;
    PX4EE1C2A2?: Prisma.SortOrder;
    PX4EE1C2A3?: Prisma.SortOrder;
    PX4EE1C2B1?: Prisma.SortOrder;
    PX4EE2C2A1?: Prisma.SortOrder;
    PX4LE1C4A1?: Prisma.SortOrder;
    PX4LE1C4A2?: Prisma.SortOrder;
    PX4LE1C4A3?: Prisma.SortOrder;
    PX4LE2C5A1?: Prisma.SortOrder;
    PX4LE2C5A2?: Prisma.SortOrder;
    PX4LE2C5A3?: Prisma.SortOrder;
    PX4SE1C1A1?: Prisma.SortOrder;
    PX4SE1C1A2?: Prisma.SortOrder;
    PX4SE1C1B1?: Prisma.SortOrder;
    PX4SE1C1B2?: Prisma.SortOrder;
    PX4SE1C1B3?: Prisma.SortOrder;
    PX4SE2C1A1?: Prisma.SortOrder;
    PX4SE2C1B1?: Prisma.SortOrder;
    PX4SE2C4A1?: Prisma.SortOrder;
    PX4SE2C4B1?: Prisma.SortOrder;
    PX5DE1C1A1?: Prisma.SortOrder;
    PX5DE1C1B1?: Prisma.SortOrder;
    PX5DE1C1B2?: Prisma.SortOrder;
    PX5DE2C2A1?: Prisma.SortOrder;
    PX5DE2C2B1?: Prisma.SortOrder;
    PX5DE2C2C1?: Prisma.SortOrder;
    PX5DE2C2D1?: Prisma.SortOrder;
    PX5EE1C2A1?: Prisma.SortOrder;
    PX5EE1C2B1?: Prisma.SortOrder;
    PX5EE1C2C1?: Prisma.SortOrder;
    PX5EE2C4A1?: Prisma.SortOrder;
    PX5EE2C4B1?: Prisma.SortOrder;
    PX5LE1C4A1?: Prisma.SortOrder;
    PX5LE1C4B1?: Prisma.SortOrder;
    PX5LE2C3A1?: Prisma.SortOrder;
    PX5LE2C3A2?: Prisma.SortOrder;
    PX5LE2C3B1?: Prisma.SortOrder;
    PX5LE2C3C1?: Prisma.SortOrder;
    PX5SE1C3A1?: Prisma.SortOrder;
    PX5SE1C3B1?: Prisma.SortOrder;
    PX5SE2C1A1?: Prisma.SortOrder;
    PX5SE2C1B1?: Prisma.SortOrder;
    PX5SE2C1C1?: Prisma.SortOrder;
    PX5SE2C1C2?: Prisma.SortOrder;
    PX5SE2C1C3?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_primaria_generalSumOrderByAggregateInput = {
    ENT?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    PX3DE1C4A1?: Prisma.SortOrder;
    PX3DE2C4A1?: Prisma.SortOrder;
    PX3EE1C3A1?: Prisma.SortOrder;
    PX3EE2C1A1?: Prisma.SortOrder;
    PX3EE2C3A2?: Prisma.SortOrder;
    PX3LE1C1A1?: Prisma.SortOrder;
    PX3LE2C3A1?: Prisma.SortOrder;
    PX3SE1C2A1?: Prisma.SortOrder;
    PX3SE1C2A2?: Prisma.SortOrder;
    PX3SE2C2A1?: Prisma.SortOrder;
    PX4DE1C3A1?: Prisma.SortOrder;
    PX4DE1C3B1?: Prisma.SortOrder;
    PX4DE2C3A1?: Prisma.SortOrder;
    PX4DE2C3B1?: Prisma.SortOrder;
    PX4DE2C3C1?: Prisma.SortOrder;
    PX4DE2C3C2?: Prisma.SortOrder;
    PX4EE1C2A1?: Prisma.SortOrder;
    PX4EE1C2A2?: Prisma.SortOrder;
    PX4EE1C2A3?: Prisma.SortOrder;
    PX4EE1C2B1?: Prisma.SortOrder;
    PX4EE2C2A1?: Prisma.SortOrder;
    PX4LE1C4A1?: Prisma.SortOrder;
    PX4LE1C4A2?: Prisma.SortOrder;
    PX4LE1C4A3?: Prisma.SortOrder;
    PX4LE2C5A1?: Prisma.SortOrder;
    PX4LE2C5A2?: Prisma.SortOrder;
    PX4LE2C5A3?: Prisma.SortOrder;
    PX4SE1C1A1?: Prisma.SortOrder;
    PX4SE1C1A2?: Prisma.SortOrder;
    PX4SE1C1B1?: Prisma.SortOrder;
    PX4SE1C1B2?: Prisma.SortOrder;
    PX4SE1C1B3?: Prisma.SortOrder;
    PX4SE2C1A1?: Prisma.SortOrder;
    PX4SE2C1B1?: Prisma.SortOrder;
    PX4SE2C4A1?: Prisma.SortOrder;
    PX4SE2C4B1?: Prisma.SortOrder;
    PX5DE1C1A1?: Prisma.SortOrder;
    PX5DE1C1B1?: Prisma.SortOrder;
    PX5DE1C1B2?: Prisma.SortOrder;
    PX5DE2C2A1?: Prisma.SortOrder;
    PX5DE2C2B1?: Prisma.SortOrder;
    PX5DE2C2C1?: Prisma.SortOrder;
    PX5DE2C2D1?: Prisma.SortOrder;
    PX5EE1C2A1?: Prisma.SortOrder;
    PX5EE1C2B1?: Prisma.SortOrder;
    PX5EE1C2C1?: Prisma.SortOrder;
    PX5EE2C4A1?: Prisma.SortOrder;
    PX5EE2C4B1?: Prisma.SortOrder;
    PX5LE1C4A1?: Prisma.SortOrder;
    PX5LE1C4B1?: Prisma.SortOrder;
    PX5LE2C3A1?: Prisma.SortOrder;
    PX5LE2C3A2?: Prisma.SortOrder;
    PX5LE2C3B1?: Prisma.SortOrder;
    PX5LE2C3C1?: Prisma.SortOrder;
    PX5SE1C3A1?: Prisma.SortOrder;
    PX5SE1C3B1?: Prisma.SortOrder;
    PX5SE2C1A1?: Prisma.SortOrder;
    PX5SE2C1B1?: Prisma.SortOrder;
    PX5SE2C1C1?: Prisma.SortOrder;
    PX5SE2C1C2?: Prisma.SortOrder;
    PX5SE2C1C3?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_primaria_generalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IDENTIFICACION?: boolean;
    ENT?: boolean;
    LLAVE?: boolean;
    CVL_ALUMN?: boolean;
    NOMALUMNO?: boolean;
    MATR_EDO?: boolean;
    CCT?: boolean;
    ID_TURNO?: boolean;
    CONTROL?: boolean;
    ID_NIVEL?: boolean;
    opcion_educativa?: boolean;
    TURNO?: boolean;
    GRADO?: boolean;
    SEXO?: boolean;
    GRUPO?: boolean;
    ORIGEN_ARCHIVO?: boolean;
    ORIGEN_HOJA?: boolean;
    PX3DE1C4A1?: boolean;
    PX3DE2C4A1?: boolean;
    PX3EE1C3A1?: boolean;
    PX3EE2C1A1?: boolean;
    PX3EE2C3A2?: boolean;
    PX3LE1C1A1?: boolean;
    PX3LE2C3A1?: boolean;
    PX3SE1C2A1?: boolean;
    PX3SE1C2A2?: boolean;
    PX3SE2C2A1?: boolean;
    PX4DE1C3A1?: boolean;
    PX4DE1C3B1?: boolean;
    PX4DE2C3A1?: boolean;
    PX4DE2C3B1?: boolean;
    PX4DE2C3C1?: boolean;
    PX4DE2C3C2?: boolean;
    PX4EE1C2A1?: boolean;
    PX4EE1C2A2?: boolean;
    PX4EE1C2A3?: boolean;
    PX4EE1C2B1?: boolean;
    PX4EE2C2A1?: boolean;
    PX4LE1C4A1?: boolean;
    PX4LE1C4A2?: boolean;
    PX4LE1C4A3?: boolean;
    PX4LE2C5A1?: boolean;
    PX4LE2C5A2?: boolean;
    PX4LE2C5A3?: boolean;
    PX4SE1C1A1?: boolean;
    PX4SE1C1A2?: boolean;
    PX4SE1C1B1?: boolean;
    PX4SE1C1B2?: boolean;
    PX4SE1C1B3?: boolean;
    PX4SE2C1A1?: boolean;
    PX4SE2C1B1?: boolean;
    PX4SE2C4A1?: boolean;
    PX4SE2C4B1?: boolean;
    PX5DE1C1A1?: boolean;
    PX5DE1C1B1?: boolean;
    PX5DE1C1B2?: boolean;
    PX5DE2C2A1?: boolean;
    PX5DE2C2B1?: boolean;
    PX5DE2C2C1?: boolean;
    PX5DE2C2D1?: boolean;
    PX5EE1C2A1?: boolean;
    PX5EE1C2B1?: boolean;
    PX5EE1C2C1?: boolean;
    PX5EE2C4A1?: boolean;
    PX5EE2C4B1?: boolean;
    PX5LE1C4A1?: boolean;
    PX5LE1C4B1?: boolean;
    PX5LE2C3A1?: boolean;
    PX5LE2C3A2?: boolean;
    PX5LE2C3B1?: boolean;
    PX5LE2C3C1?: boolean;
    PX5SE1C3A1?: boolean;
    PX5SE1C3B1?: boolean;
    PX5SE2C1A1?: boolean;
    PX5SE2C1B1?: boolean;
    PX5SE2C1C1?: boolean;
    PX5SE2C1C2?: boolean;
    PX5SE2C1C3?: boolean;
    NIVEL_ETICA?: boolean;
    NIVEL_HUMANO?: boolean;
    NIVEL_LENGUAJES?: boolean;
    NIVEL_SABERES?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_primaria_general"]>;
export type alumnos_prioritarios_primaria_generalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IDENTIFICACION?: boolean;
    ENT?: boolean;
    LLAVE?: boolean;
    CVL_ALUMN?: boolean;
    NOMALUMNO?: boolean;
    MATR_EDO?: boolean;
    CCT?: boolean;
    ID_TURNO?: boolean;
    CONTROL?: boolean;
    ID_NIVEL?: boolean;
    opcion_educativa?: boolean;
    TURNO?: boolean;
    GRADO?: boolean;
    SEXO?: boolean;
    GRUPO?: boolean;
    ORIGEN_ARCHIVO?: boolean;
    ORIGEN_HOJA?: boolean;
    PX3DE1C4A1?: boolean;
    PX3DE2C4A1?: boolean;
    PX3EE1C3A1?: boolean;
    PX3EE2C1A1?: boolean;
    PX3EE2C3A2?: boolean;
    PX3LE1C1A1?: boolean;
    PX3LE2C3A1?: boolean;
    PX3SE1C2A1?: boolean;
    PX3SE1C2A2?: boolean;
    PX3SE2C2A1?: boolean;
    PX4DE1C3A1?: boolean;
    PX4DE1C3B1?: boolean;
    PX4DE2C3A1?: boolean;
    PX4DE2C3B1?: boolean;
    PX4DE2C3C1?: boolean;
    PX4DE2C3C2?: boolean;
    PX4EE1C2A1?: boolean;
    PX4EE1C2A2?: boolean;
    PX4EE1C2A3?: boolean;
    PX4EE1C2B1?: boolean;
    PX4EE2C2A1?: boolean;
    PX4LE1C4A1?: boolean;
    PX4LE1C4A2?: boolean;
    PX4LE1C4A3?: boolean;
    PX4LE2C5A1?: boolean;
    PX4LE2C5A2?: boolean;
    PX4LE2C5A3?: boolean;
    PX4SE1C1A1?: boolean;
    PX4SE1C1A2?: boolean;
    PX4SE1C1B1?: boolean;
    PX4SE1C1B2?: boolean;
    PX4SE1C1B3?: boolean;
    PX4SE2C1A1?: boolean;
    PX4SE2C1B1?: boolean;
    PX4SE2C4A1?: boolean;
    PX4SE2C4B1?: boolean;
    PX5DE1C1A1?: boolean;
    PX5DE1C1B1?: boolean;
    PX5DE1C1B2?: boolean;
    PX5DE2C2A1?: boolean;
    PX5DE2C2B1?: boolean;
    PX5DE2C2C1?: boolean;
    PX5DE2C2D1?: boolean;
    PX5EE1C2A1?: boolean;
    PX5EE1C2B1?: boolean;
    PX5EE1C2C1?: boolean;
    PX5EE2C4A1?: boolean;
    PX5EE2C4B1?: boolean;
    PX5LE1C4A1?: boolean;
    PX5LE1C4B1?: boolean;
    PX5LE2C3A1?: boolean;
    PX5LE2C3A2?: boolean;
    PX5LE2C3B1?: boolean;
    PX5LE2C3C1?: boolean;
    PX5SE1C3A1?: boolean;
    PX5SE1C3B1?: boolean;
    PX5SE2C1A1?: boolean;
    PX5SE2C1B1?: boolean;
    PX5SE2C1C1?: boolean;
    PX5SE2C1C2?: boolean;
    PX5SE2C1C3?: boolean;
    NIVEL_ETICA?: boolean;
    NIVEL_HUMANO?: boolean;
    NIVEL_LENGUAJES?: boolean;
    NIVEL_SABERES?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_primaria_general"]>;
export type alumnos_prioritarios_primaria_generalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    IDENTIFICACION?: boolean;
    ENT?: boolean;
    LLAVE?: boolean;
    CVL_ALUMN?: boolean;
    NOMALUMNO?: boolean;
    MATR_EDO?: boolean;
    CCT?: boolean;
    ID_TURNO?: boolean;
    CONTROL?: boolean;
    ID_NIVEL?: boolean;
    opcion_educativa?: boolean;
    TURNO?: boolean;
    GRADO?: boolean;
    SEXO?: boolean;
    GRUPO?: boolean;
    ORIGEN_ARCHIVO?: boolean;
    ORIGEN_HOJA?: boolean;
    PX3DE1C4A1?: boolean;
    PX3DE2C4A1?: boolean;
    PX3EE1C3A1?: boolean;
    PX3EE2C1A1?: boolean;
    PX3EE2C3A2?: boolean;
    PX3LE1C1A1?: boolean;
    PX3LE2C3A1?: boolean;
    PX3SE1C2A1?: boolean;
    PX3SE1C2A2?: boolean;
    PX3SE2C2A1?: boolean;
    PX4DE1C3A1?: boolean;
    PX4DE1C3B1?: boolean;
    PX4DE2C3A1?: boolean;
    PX4DE2C3B1?: boolean;
    PX4DE2C3C1?: boolean;
    PX4DE2C3C2?: boolean;
    PX4EE1C2A1?: boolean;
    PX4EE1C2A2?: boolean;
    PX4EE1C2A3?: boolean;
    PX4EE1C2B1?: boolean;
    PX4EE2C2A1?: boolean;
    PX4LE1C4A1?: boolean;
    PX4LE1C4A2?: boolean;
    PX4LE1C4A3?: boolean;
    PX4LE2C5A1?: boolean;
    PX4LE2C5A2?: boolean;
    PX4LE2C5A3?: boolean;
    PX4SE1C1A1?: boolean;
    PX4SE1C1A2?: boolean;
    PX4SE1C1B1?: boolean;
    PX4SE1C1B2?: boolean;
    PX4SE1C1B3?: boolean;
    PX4SE2C1A1?: boolean;
    PX4SE2C1B1?: boolean;
    PX4SE2C4A1?: boolean;
    PX4SE2C4B1?: boolean;
    PX5DE1C1A1?: boolean;
    PX5DE1C1B1?: boolean;
    PX5DE1C1B2?: boolean;
    PX5DE2C2A1?: boolean;
    PX5DE2C2B1?: boolean;
    PX5DE2C2C1?: boolean;
    PX5DE2C2D1?: boolean;
    PX5EE1C2A1?: boolean;
    PX5EE1C2B1?: boolean;
    PX5EE1C2C1?: boolean;
    PX5EE2C4A1?: boolean;
    PX5EE2C4B1?: boolean;
    PX5LE1C4A1?: boolean;
    PX5LE1C4B1?: boolean;
    PX5LE2C3A1?: boolean;
    PX5LE2C3A2?: boolean;
    PX5LE2C3B1?: boolean;
    PX5LE2C3C1?: boolean;
    PX5SE1C3A1?: boolean;
    PX5SE1C3B1?: boolean;
    PX5SE2C1A1?: boolean;
    PX5SE2C1B1?: boolean;
    PX5SE2C1C1?: boolean;
    PX5SE2C1C2?: boolean;
    PX5SE2C1C3?: boolean;
    NIVEL_ETICA?: boolean;
    NIVEL_HUMANO?: boolean;
    NIVEL_LENGUAJES?: boolean;
    NIVEL_SABERES?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_primaria_general"]>;
export type alumnos_prioritarios_primaria_generalSelectScalar = {
    IDENTIFICACION?: boolean;
    ENT?: boolean;
    LLAVE?: boolean;
    CVL_ALUMN?: boolean;
    NOMALUMNO?: boolean;
    MATR_EDO?: boolean;
    CCT?: boolean;
    ID_TURNO?: boolean;
    CONTROL?: boolean;
    ID_NIVEL?: boolean;
    opcion_educativa?: boolean;
    TURNO?: boolean;
    GRADO?: boolean;
    SEXO?: boolean;
    GRUPO?: boolean;
    ORIGEN_ARCHIVO?: boolean;
    ORIGEN_HOJA?: boolean;
    PX3DE1C4A1?: boolean;
    PX3DE2C4A1?: boolean;
    PX3EE1C3A1?: boolean;
    PX3EE2C1A1?: boolean;
    PX3EE2C3A2?: boolean;
    PX3LE1C1A1?: boolean;
    PX3LE2C3A1?: boolean;
    PX3SE1C2A1?: boolean;
    PX3SE1C2A2?: boolean;
    PX3SE2C2A1?: boolean;
    PX4DE1C3A1?: boolean;
    PX4DE1C3B1?: boolean;
    PX4DE2C3A1?: boolean;
    PX4DE2C3B1?: boolean;
    PX4DE2C3C1?: boolean;
    PX4DE2C3C2?: boolean;
    PX4EE1C2A1?: boolean;
    PX4EE1C2A2?: boolean;
    PX4EE1C2A3?: boolean;
    PX4EE1C2B1?: boolean;
    PX4EE2C2A1?: boolean;
    PX4LE1C4A1?: boolean;
    PX4LE1C4A2?: boolean;
    PX4LE1C4A3?: boolean;
    PX4LE2C5A1?: boolean;
    PX4LE2C5A2?: boolean;
    PX4LE2C5A3?: boolean;
    PX4SE1C1A1?: boolean;
    PX4SE1C1A2?: boolean;
    PX4SE1C1B1?: boolean;
    PX4SE1C1B2?: boolean;
    PX4SE1C1B3?: boolean;
    PX4SE2C1A1?: boolean;
    PX4SE2C1B1?: boolean;
    PX4SE2C4A1?: boolean;
    PX4SE2C4B1?: boolean;
    PX5DE1C1A1?: boolean;
    PX5DE1C1B1?: boolean;
    PX5DE1C1B2?: boolean;
    PX5DE2C2A1?: boolean;
    PX5DE2C2B1?: boolean;
    PX5DE2C2C1?: boolean;
    PX5DE2C2D1?: boolean;
    PX5EE1C2A1?: boolean;
    PX5EE1C2B1?: boolean;
    PX5EE1C2C1?: boolean;
    PX5EE2C4A1?: boolean;
    PX5EE2C4B1?: boolean;
    PX5LE1C4A1?: boolean;
    PX5LE1C4B1?: boolean;
    PX5LE2C3A1?: boolean;
    PX5LE2C3A2?: boolean;
    PX5LE2C3B1?: boolean;
    PX5LE2C3C1?: boolean;
    PX5SE1C3A1?: boolean;
    PX5SE1C3B1?: boolean;
    PX5SE2C1A1?: boolean;
    PX5SE2C1B1?: boolean;
    PX5SE2C1C1?: boolean;
    PX5SE2C1C2?: boolean;
    PX5SE2C1C3?: boolean;
    NIVEL_ETICA?: boolean;
    NIVEL_HUMANO?: boolean;
    NIVEL_LENGUAJES?: boolean;
    NIVEL_SABERES?: boolean;
    id?: boolean;
};
export type alumnos_prioritarios_primaria_generalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IDENTIFICACION" | "ENT" | "LLAVE" | "CVL_ALUMN" | "NOMALUMNO" | "MATR_EDO" | "CCT" | "ID_TURNO" | "CONTROL" | "ID_NIVEL" | "opcion_educativa" | "TURNO" | "GRADO" | "SEXO" | "GRUPO" | "ORIGEN_ARCHIVO" | "ORIGEN_HOJA" | "PX3DE1C4A1" | "PX3DE2C4A1" | "PX3EE1C3A1" | "PX3EE2C1A1" | "PX3EE2C3A2" | "PX3LE1C1A1" | "PX3LE2C3A1" | "PX3SE1C2A1" | "PX3SE1C2A2" | "PX3SE2C2A1" | "PX4DE1C3A1" | "PX4DE1C3B1" | "PX4DE2C3A1" | "PX4DE2C3B1" | "PX4DE2C3C1" | "PX4DE2C3C2" | "PX4EE1C2A1" | "PX4EE1C2A2" | "PX4EE1C2A3" | "PX4EE1C2B1" | "PX4EE2C2A1" | "PX4LE1C4A1" | "PX4LE1C4A2" | "PX4LE1C4A3" | "PX4LE2C5A1" | "PX4LE2C5A2" | "PX4LE2C5A3" | "PX4SE1C1A1" | "PX4SE1C1A2" | "PX4SE1C1B1" | "PX4SE1C1B2" | "PX4SE1C1B3" | "PX4SE2C1A1" | "PX4SE2C1B1" | "PX4SE2C4A1" | "PX4SE2C4B1" | "PX5DE1C1A1" | "PX5DE1C1B1" | "PX5DE1C1B2" | "PX5DE2C2A1" | "PX5DE2C2B1" | "PX5DE2C2C1" | "PX5DE2C2D1" | "PX5EE1C2A1" | "PX5EE1C2B1" | "PX5EE1C2C1" | "PX5EE2C4A1" | "PX5EE2C4B1" | "PX5LE1C4A1" | "PX5LE1C4B1" | "PX5LE2C3A1" | "PX5LE2C3A2" | "PX5LE2C3B1" | "PX5LE2C3C1" | "PX5SE1C3A1" | "PX5SE1C3B1" | "PX5SE2C1A1" | "PX5SE2C1B1" | "PX5SE2C1C1" | "PX5SE2C1C2" | "PX5SE2C1C3" | "NIVEL_ETICA" | "NIVEL_HUMANO" | "NIVEL_LENGUAJES" | "NIVEL_SABERES" | "id", ExtArgs["result"]["alumnos_prioritarios_primaria_general"]>;
export type $alumnos_prioritarios_primaria_generalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "alumnos_prioritarios_primaria_general";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IDENTIFICACION: string;
        ENT: runtime.Decimal;
        LLAVE: string;
        CVL_ALUMN: runtime.Decimal;
        NOMALUMNO: string;
        MATR_EDO: string | null;
        CCT: string;
        ID_TURNO: runtime.Decimal;
        CONTROL: string;
        ID_NIVEL: boolean;
        opcion_educativa: string;
        TURNO: string;
        GRADO: runtime.Decimal;
        SEXO: string;
        GRUPO: string;
        ORIGEN_ARCHIVO: string;
        ORIGEN_HOJA: string;
        PX3DE1C4A1: runtime.Decimal;
        PX3DE2C4A1: runtime.Decimal;
        PX3EE1C3A1: runtime.Decimal;
        PX3EE2C1A1: runtime.Decimal;
        PX3EE2C3A2: runtime.Decimal;
        PX3LE1C1A1: runtime.Decimal;
        PX3LE2C3A1: runtime.Decimal;
        PX3SE1C2A1: runtime.Decimal;
        PX3SE1C2A2: runtime.Decimal;
        PX3SE2C2A1: runtime.Decimal;
        PX4DE1C3A1: runtime.Decimal;
        PX4DE1C3B1: runtime.Decimal;
        PX4DE2C3A1: runtime.Decimal;
        PX4DE2C3B1: runtime.Decimal;
        PX4DE2C3C1: runtime.Decimal;
        PX4DE2C3C2: runtime.Decimal;
        PX4EE1C2A1: runtime.Decimal;
        PX4EE1C2A2: runtime.Decimal;
        PX4EE1C2A3: runtime.Decimal;
        PX4EE1C2B1: runtime.Decimal;
        PX4EE2C2A1: runtime.Decimal;
        PX4LE1C4A1: runtime.Decimal;
        PX4LE1C4A2: runtime.Decimal;
        PX4LE1C4A3: runtime.Decimal;
        PX4LE2C5A1: runtime.Decimal;
        PX4LE2C5A2: runtime.Decimal;
        PX4LE2C5A3: runtime.Decimal;
        PX4SE1C1A1: runtime.Decimal;
        PX4SE1C1A2: runtime.Decimal;
        PX4SE1C1B1: runtime.Decimal;
        PX4SE1C1B2: runtime.Decimal;
        PX4SE1C1B3: runtime.Decimal;
        PX4SE2C1A1: runtime.Decimal;
        PX4SE2C1B1: runtime.Decimal;
        PX4SE2C4A1: runtime.Decimal;
        PX4SE2C4B1: runtime.Decimal;
        PX5DE1C1A1: runtime.Decimal;
        PX5DE1C1B1: runtime.Decimal;
        PX5DE1C1B2: runtime.Decimal;
        PX5DE2C2A1: runtime.Decimal;
        PX5DE2C2B1: runtime.Decimal;
        PX5DE2C2C1: runtime.Decimal;
        PX5DE2C2D1: runtime.Decimal;
        PX5EE1C2A1: runtime.Decimal;
        PX5EE1C2B1: runtime.Decimal;
        PX5EE1C2C1: runtime.Decimal;
        PX5EE2C4A1: runtime.Decimal;
        PX5EE2C4B1: runtime.Decimal;
        PX5LE1C4A1: runtime.Decimal;
        PX5LE1C4B1: runtime.Decimal;
        PX5LE2C3A1: runtime.Decimal;
        PX5LE2C3A2: runtime.Decimal;
        PX5LE2C3B1: runtime.Decimal;
        PX5LE2C3C1: runtime.Decimal;
        PX5SE1C3A1: runtime.Decimal;
        PX5SE1C3B1: runtime.Decimal;
        PX5SE2C1A1: runtime.Decimal;
        PX5SE2C1B1: runtime.Decimal;
        PX5SE2C1C1: runtime.Decimal;
        PX5SE2C1C2: runtime.Decimal;
        PX5SE2C1C3: runtime.Decimal;
        NIVEL_ETICA: string;
        NIVEL_HUMANO: string;
        NIVEL_LENGUAJES: string;
        NIVEL_SABERES: string;
        id: number;
    }, ExtArgs["result"]["alumnos_prioritarios_primaria_general"]>;
    composites: {};
};
export type alumnos_prioritarios_primaria_generalGetPayload<S extends boolean | null | undefined | alumnos_prioritarios_primaria_generalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload, S>;
export type alumnos_prioritarios_primaria_generalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<alumnos_prioritarios_primaria_generalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Alumnos_prioritarios_primaria_generalCountAggregateInputType | true;
};
export interface alumnos_prioritarios_primaria_generalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['alumnos_prioritarios_primaria_general'];
        meta: {
            name: 'alumnos_prioritarios_primaria_general';
        };
    };
    /**
     * Find zero or one Alumnos_prioritarios_primaria_general that matches the filter.
     * @param {alumnos_prioritarios_primaria_generalFindUniqueArgs} args - Arguments to find a Alumnos_prioritarios_primaria_general
     * @example
     * // Get one Alumnos_prioritarios_primaria_general
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumnos_prioritarios_primaria_generalFindUniqueArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alumnos_prioritarios_primaria_general that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumnos_prioritarios_primaria_generalFindUniqueOrThrowArgs} args - Arguments to find a Alumnos_prioritarios_primaria_general
     * @example
     * // Get one Alumnos_prioritarios_primaria_general
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumnos_prioritarios_primaria_generalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnos_prioritarios_primaria_general that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_generalFindFirstArgs} args - Arguments to find a Alumnos_prioritarios_primaria_general
     * @example
     * // Get one Alumnos_prioritarios_primaria_general
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumnos_prioritarios_primaria_generalFindFirstArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalFindFirstArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnos_prioritarios_primaria_general that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_generalFindFirstOrThrowArgs} args - Arguments to find a Alumnos_prioritarios_primaria_general
     * @example
     * // Get one Alumnos_prioritarios_primaria_general
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumnos_prioritarios_primaria_generalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alumnos_prioritarios_primaria_generals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_generalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos_prioritarios_primaria_generals
     * const alumnos_prioritarios_primaria_generals = await prisma.alumnos_prioritarios_primaria_general.findMany()
     *
     * // Get first 10 Alumnos_prioritarios_primaria_generals
     * const alumnos_prioritarios_primaria_generals = await prisma.alumnos_prioritarios_primaria_general.findMany({ take: 10 })
     *
     * // Only select the `IDENTIFICACION`
     * const alumnos_prioritarios_primaria_generalWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_primaria_general.findMany({ select: { IDENTIFICACION: true } })
     *
     */
    findMany<T extends alumnos_prioritarios_primaria_generalFindManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alumnos_prioritarios_primaria_general.
     * @param {alumnos_prioritarios_primaria_generalCreateArgs} args - Arguments to create a Alumnos_prioritarios_primaria_general.
     * @example
     * // Create one Alumnos_prioritarios_primaria_general
     * const Alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.create({
     *   data: {
     *     // ... data to create a Alumnos_prioritarios_primaria_general
     *   }
     * })
     *
     */
    create<T extends alumnos_prioritarios_primaria_generalCreateArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalCreateArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alumnos_prioritarios_primaria_generals.
     * @param {alumnos_prioritarios_primaria_generalCreateManyArgs} args - Arguments to create many Alumnos_prioritarios_primaria_generals.
     * @example
     * // Create many Alumnos_prioritarios_primaria_generals
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends alumnos_prioritarios_primaria_generalCreateManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Alumnos_prioritarios_primaria_generals and returns the data saved in the database.
     * @param {alumnos_prioritarios_primaria_generalCreateManyAndReturnArgs} args - Arguments to create many Alumnos_prioritarios_primaria_generals.
     * @example
     * // Create many Alumnos_prioritarios_primaria_generals
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Alumnos_prioritarios_primaria_generals and only return the `IDENTIFICACION`
     * const alumnos_prioritarios_primaria_generalWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_primaria_general.createManyAndReturn({
     *   select: { IDENTIFICACION: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends alumnos_prioritarios_primaria_generalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Alumnos_prioritarios_primaria_general.
     * @param {alumnos_prioritarios_primaria_generalDeleteArgs} args - Arguments to delete one Alumnos_prioritarios_primaria_general.
     * @example
     * // Delete one Alumnos_prioritarios_primaria_general
     * const Alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.delete({
     *   where: {
     *     // ... filter to delete one Alumnos_prioritarios_primaria_general
     *   }
     * })
     *
     */
    delete<T extends alumnos_prioritarios_primaria_generalDeleteArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalDeleteArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alumnos_prioritarios_primaria_general.
     * @param {alumnos_prioritarios_primaria_generalUpdateArgs} args - Arguments to update one Alumnos_prioritarios_primaria_general.
     * @example
     * // Update one Alumnos_prioritarios_primaria_general
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends alumnos_prioritarios_primaria_generalUpdateArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalUpdateArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alumnos_prioritarios_primaria_generals.
     * @param {alumnos_prioritarios_primaria_generalDeleteManyArgs} args - Arguments to filter Alumnos_prioritarios_primaria_generals to delete.
     * @example
     * // Delete a few Alumnos_prioritarios_primaria_generals
     * const { count } = await prisma.alumnos_prioritarios_primaria_general.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends alumnos_prioritarios_primaria_generalDeleteManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos_prioritarios_primaria_generals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_generalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos_prioritarios_primaria_generals
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends alumnos_prioritarios_primaria_generalUpdateManyArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos_prioritarios_primaria_generals and returns the data updated in the database.
     * @param {alumnos_prioritarios_primaria_generalUpdateManyAndReturnArgs} args - Arguments to update many Alumnos_prioritarios_primaria_generals.
     * @example
     * // Update many Alumnos_prioritarios_primaria_generals
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Alumnos_prioritarios_primaria_generals and only return the `IDENTIFICACION`
     * const alumnos_prioritarios_primaria_generalWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_primaria_general.updateManyAndReturn({
     *   select: { IDENTIFICACION: true },
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
    updateManyAndReturn<T extends alumnos_prioritarios_primaria_generalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Alumnos_prioritarios_primaria_general.
     * @param {alumnos_prioritarios_primaria_generalUpsertArgs} args - Arguments to update or create a Alumnos_prioritarios_primaria_general.
     * @example
     * // Update or create a Alumnos_prioritarios_primaria_general
     * const alumnos_prioritarios_primaria_general = await prisma.alumnos_prioritarios_primaria_general.upsert({
     *   create: {
     *     // ... data to create a Alumnos_prioritarios_primaria_general
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumnos_prioritarios_primaria_general we want to update
     *   }
     * })
     */
    upsert<T extends alumnos_prioritarios_primaria_generalUpsertArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_generalUpsertArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_generalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alumnos_prioritarios_primaria_generals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_generalCountArgs} args - Arguments to filter Alumnos_prioritarios_primaria_generals to count.
     * @example
     * // Count the number of Alumnos_prioritarios_primaria_generals
     * const count = await prisma.alumnos_prioritarios_primaria_general.count({
     *   where: {
     *     // ... the filter for the Alumnos_prioritarios_primaria_generals we want to count
     *   }
     * })
    **/
    count<T extends alumnos_prioritarios_primaria_generalCountArgs>(args?: Prisma.Subset<T, alumnos_prioritarios_primaria_generalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Alumnos_prioritarios_primaria_generalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alumnos_prioritarios_primaria_general.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alumnos_prioritarios_primaria_generalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alumnos_prioritarios_primaria_generalAggregateArgs>(args: Prisma.Subset<T, Alumnos_prioritarios_primaria_generalAggregateArgs>): Prisma.PrismaPromise<GetAlumnos_prioritarios_primaria_generalAggregateType<T>>;
    /**
     * Group by Alumnos_prioritarios_primaria_general.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_generalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends alumnos_prioritarios_primaria_generalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: alumnos_prioritarios_primaria_generalGroupByArgs['orderBy'];
    } : {
        orderBy?: alumnos_prioritarios_primaria_generalGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, alumnos_prioritarios_primaria_generalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnos_prioritarios_primaria_generalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the alumnos_prioritarios_primaria_general model
     */
    readonly fields: alumnos_prioritarios_primaria_generalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for alumnos_prioritarios_primaria_general.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__alumnos_prioritarios_primaria_generalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the alumnos_prioritarios_primaria_general model
 */
export interface alumnos_prioritarios_primaria_generalFieldRefs {
    readonly IDENTIFICACION: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly ENT: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly LLAVE: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly CVL_ALUMN: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly NOMALUMNO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly MATR_EDO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly CCT: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly ID_TURNO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly CONTROL: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly ID_NIVEL: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Boolean'>;
    readonly opcion_educativa: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly TURNO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly GRADO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly SEXO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly GRUPO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly ORIGEN_ARCHIVO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly ORIGEN_HOJA: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly PX3DE1C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3DE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3EE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3EE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3EE2C3A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3LE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3LE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3SE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3SE1C2A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX3SE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4DE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4DE1C3B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4DE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4DE2C3B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4DE2C3C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4DE2C3C2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4EE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4EE1C2A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4EE1C2A3: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4EE1C2B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4EE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4LE1C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4LE1C4A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4LE1C4A3: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4LE2C5A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4LE2C5A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4LE2C5A3: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE1C1A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE1C1B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE1C1B2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE1C1B3: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE2C1B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX4SE2C4B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5DE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5DE1C1B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5DE1C1B2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5DE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5DE2C2B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5DE2C2C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5DE2C2D1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5EE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5EE1C2B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5EE1C2C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5EE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5EE2C4B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5LE1C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5LE1C4B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5LE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5LE2C3A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5LE2C3B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5LE2C3C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5SE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5SE1C3B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5SE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5SE2C1B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5SE2C1C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5SE2C1C2: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly PX5SE2C1C3: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Decimal'>;
    readonly NIVEL_ETICA: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly NIVEL_HUMANO: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly NIVEL_LENGUAJES: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly NIVEL_SABERES: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'String'>;
    readonly id: Prisma.FieldRef<"alumnos_prioritarios_primaria_general", 'Int'>;
}
/**
 * alumnos_prioritarios_primaria_general findUnique
 */
export type alumnos_prioritarios_primaria_generalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_general to fetch.
     */
    where: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general findUniqueOrThrow
 */
export type alumnos_prioritarios_primaria_generalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_general to fetch.
     */
    where: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general findFirst
 */
export type alumnos_prioritarios_primaria_generalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_general to fetch.
     */
    where?: Prisma.alumnos_prioritarios_primaria_generalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_primaria_generals to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_primaria_generalOrderByWithRelationInput | Prisma.alumnos_prioritarios_primaria_generalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos_prioritarios_primaria_generals.
     */
    cursor?: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_primaria_generals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_primaria_generals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos_prioritarios_primaria_generals.
     */
    distinct?: Prisma.Alumnos_prioritarios_primaria_generalScalarFieldEnum | Prisma.Alumnos_prioritarios_primaria_generalScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general findFirstOrThrow
 */
export type alumnos_prioritarios_primaria_generalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_general to fetch.
     */
    where?: Prisma.alumnos_prioritarios_primaria_generalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_primaria_generals to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_primaria_generalOrderByWithRelationInput | Prisma.alumnos_prioritarios_primaria_generalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos_prioritarios_primaria_generals.
     */
    cursor?: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_primaria_generals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_primaria_generals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos_prioritarios_primaria_generals.
     */
    distinct?: Prisma.Alumnos_prioritarios_primaria_generalScalarFieldEnum | Prisma.Alumnos_prioritarios_primaria_generalScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general findMany
 */
export type alumnos_prioritarios_primaria_generalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_generals to fetch.
     */
    where?: Prisma.alumnos_prioritarios_primaria_generalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_primaria_generals to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_primaria_generalOrderByWithRelationInput | Prisma.alumnos_prioritarios_primaria_generalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing alumnos_prioritarios_primaria_generals.
     */
    cursor?: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_primaria_generals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_primaria_generals.
     */
    skip?: number;
    distinct?: Prisma.Alumnos_prioritarios_primaria_generalScalarFieldEnum | Prisma.Alumnos_prioritarios_primaria_generalScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general create
 */
export type alumnos_prioritarios_primaria_generalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * The data needed to create a alumnos_prioritarios_primaria_general.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_generalCreateInput, Prisma.alumnos_prioritarios_primaria_generalUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general createMany
 */
export type alumnos_prioritarios_primaria_generalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumnos_prioritarios_primaria_generals.
     */
    data: Prisma.alumnos_prioritarios_primaria_generalCreateManyInput | Prisma.alumnos_prioritarios_primaria_generalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnos_prioritarios_primaria_general createManyAndReturn
 */
export type alumnos_prioritarios_primaria_generalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * The data used to create many alumnos_prioritarios_primaria_generals.
     */
    data: Prisma.alumnos_prioritarios_primaria_generalCreateManyInput | Prisma.alumnos_prioritarios_primaria_generalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnos_prioritarios_primaria_general update
 */
export type alumnos_prioritarios_primaria_generalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * The data needed to update a alumnos_prioritarios_primaria_general.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_generalUpdateInput, Prisma.alumnos_prioritarios_primaria_generalUncheckedUpdateInput>;
    /**
     * Choose, which alumnos_prioritarios_primaria_general to update.
     */
    where: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general updateMany
 */
export type alumnos_prioritarios_primaria_generalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update alumnos_prioritarios_primaria_generals.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_generalUpdateManyMutationInput, Prisma.alumnos_prioritarios_primaria_generalUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos_prioritarios_primaria_generals to update
     */
    where?: Prisma.alumnos_prioritarios_primaria_generalWhereInput;
    /**
     * Limit how many alumnos_prioritarios_primaria_generals to update.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_primaria_general updateManyAndReturn
 */
export type alumnos_prioritarios_primaria_generalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * The data used to update alumnos_prioritarios_primaria_generals.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_generalUpdateManyMutationInput, Prisma.alumnos_prioritarios_primaria_generalUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos_prioritarios_primaria_generals to update
     */
    where?: Prisma.alumnos_prioritarios_primaria_generalWhereInput;
    /**
     * Limit how many alumnos_prioritarios_primaria_generals to update.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_primaria_general upsert
 */
export type alumnos_prioritarios_primaria_generalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * The filter to search for the alumnos_prioritarios_primaria_general to update in case it exists.
     */
    where: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    /**
     * In case the alumnos_prioritarios_primaria_general found by the `where` argument doesn't exist, create a new alumnos_prioritarios_primaria_general with this data.
     */
    create: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_generalCreateInput, Prisma.alumnos_prioritarios_primaria_generalUncheckedCreateInput>;
    /**
     * In case the alumnos_prioritarios_primaria_general was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_generalUpdateInput, Prisma.alumnos_prioritarios_primaria_generalUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general delete
 */
export type alumnos_prioritarios_primaria_generalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
    /**
     * Filter which alumnos_prioritarios_primaria_general to delete.
     */
    where: Prisma.alumnos_prioritarios_primaria_generalWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_general deleteMany
 */
export type alumnos_prioritarios_primaria_generalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos_prioritarios_primaria_generals to delete
     */
    where?: Prisma.alumnos_prioritarios_primaria_generalWhereInput;
    /**
     * Limit how many alumnos_prioritarios_primaria_generals to delete.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_primaria_general without action
 */
export type alumnos_prioritarios_primaria_generalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_general
     */
    select?: Prisma.alumnos_prioritarios_primaria_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_general
     */
    omit?: Prisma.alumnos_prioritarios_primaria_generalOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=alumnos_prioritarios_primaria_general.d.ts.map