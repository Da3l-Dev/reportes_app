import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model alumnos_prioritarios_primaria_indigena
 *
 */
export type alumnos_prioritarios_primaria_indigenaModel = runtime.Types.Result.DefaultSelection<Prisma.$alumnos_prioritarios_primaria_indigenaPayload>;
export type AggregateAlumnos_prioritarios_primaria_indigena = {
    _count: Alumnos_prioritarios_primaria_indigenaCountAggregateOutputType | null;
    _avg: Alumnos_prioritarios_primaria_indigenaAvgAggregateOutputType | null;
    _sum: Alumnos_prioritarios_primaria_indigenaSumAggregateOutputType | null;
    _min: Alumnos_prioritarios_primaria_indigenaMinAggregateOutputType | null;
    _max: Alumnos_prioritarios_primaria_indigenaMaxAggregateOutputType | null;
};
export type Alumnos_prioritarios_primaria_indigenaAvgAggregateOutputType = {
    ENT: runtime.Decimal | null;
    CVL_ALUMN: runtime.Decimal | null;
    MATR_EDO: runtime.Decimal | null;
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
export type Alumnos_prioritarios_primaria_indigenaSumAggregateOutputType = {
    ENT: runtime.Decimal | null;
    CVL_ALUMN: runtime.Decimal | null;
    MATR_EDO: runtime.Decimal | null;
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
export type Alumnos_prioritarios_primaria_indigenaMinAggregateOutputType = {
    IDENTIFICACION: string | null;
    ENT: runtime.Decimal | null;
    LLAVE: string | null;
    CVL_ALUMN: runtime.Decimal | null;
    NOMALUMNO: string | null;
    MATR_EDO: runtime.Decimal | null;
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
export type Alumnos_prioritarios_primaria_indigenaMaxAggregateOutputType = {
    IDENTIFICACION: string | null;
    ENT: runtime.Decimal | null;
    LLAVE: string | null;
    CVL_ALUMN: runtime.Decimal | null;
    NOMALUMNO: string | null;
    MATR_EDO: runtime.Decimal | null;
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
export type Alumnos_prioritarios_primaria_indigenaCountAggregateOutputType = {
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
export type Alumnos_prioritarios_primaria_indigenaAvgAggregateInputType = {
    ENT?: true;
    CVL_ALUMN?: true;
    MATR_EDO?: true;
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
export type Alumnos_prioritarios_primaria_indigenaSumAggregateInputType = {
    ENT?: true;
    CVL_ALUMN?: true;
    MATR_EDO?: true;
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
export type Alumnos_prioritarios_primaria_indigenaMinAggregateInputType = {
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
export type Alumnos_prioritarios_primaria_indigenaMaxAggregateInputType = {
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
export type Alumnos_prioritarios_primaria_indigenaCountAggregateInputType = {
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
export type Alumnos_prioritarios_primaria_indigenaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos_prioritarios_primaria_indigena to aggregate.
     */
    where?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_primaria_indigenas to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput | Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_primaria_indigenas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_primaria_indigenas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned alumnos_prioritarios_primaria_indigenas
    **/
    _count?: true | Alumnos_prioritarios_primaria_indigenaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Alumnos_prioritarios_primaria_indigenaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Alumnos_prioritarios_primaria_indigenaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Alumnos_prioritarios_primaria_indigenaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Alumnos_prioritarios_primaria_indigenaMaxAggregateInputType;
};
export type GetAlumnos_prioritarios_primaria_indigenaAggregateType<T extends Alumnos_prioritarios_primaria_indigenaAggregateArgs> = {
    [P in keyof T & keyof AggregateAlumnos_prioritarios_primaria_indigena]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlumnos_prioritarios_primaria_indigena[P]> : Prisma.GetScalarType<T[P], AggregateAlumnos_prioritarios_primaria_indigena[P]>;
};
export type alumnos_prioritarios_primaria_indigenaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput;
    orderBy?: Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithAggregationInput | Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithAggregationInput[];
    by: Prisma.Alumnos_prioritarios_primaria_indigenaScalarFieldEnum[] | Prisma.Alumnos_prioritarios_primaria_indigenaScalarFieldEnum;
    having?: Prisma.alumnos_prioritarios_primaria_indigenaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Alumnos_prioritarios_primaria_indigenaCountAggregateInputType | true;
    _avg?: Alumnos_prioritarios_primaria_indigenaAvgAggregateInputType;
    _sum?: Alumnos_prioritarios_primaria_indigenaSumAggregateInputType;
    _min?: Alumnos_prioritarios_primaria_indigenaMinAggregateInputType;
    _max?: Alumnos_prioritarios_primaria_indigenaMaxAggregateInputType;
};
export type Alumnos_prioritarios_primaria_indigenaGroupByOutputType = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal;
    NOMALUMNO: string;
    MATR_EDO: runtime.Decimal;
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
    _count: Alumnos_prioritarios_primaria_indigenaCountAggregateOutputType | null;
    _avg: Alumnos_prioritarios_primaria_indigenaAvgAggregateOutputType | null;
    _sum: Alumnos_prioritarios_primaria_indigenaSumAggregateOutputType | null;
    _min: Alumnos_prioritarios_primaria_indigenaMinAggregateOutputType | null;
    _max: Alumnos_prioritarios_primaria_indigenaMaxAggregateOutputType | null;
};
type GetAlumnos_prioritarios_primaria_indigenaGroupByPayload<T extends alumnos_prioritarios_primaria_indigenaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Alumnos_prioritarios_primaria_indigenaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Alumnos_prioritarios_primaria_indigenaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Alumnos_prioritarios_primaria_indigenaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Alumnos_prioritarios_primaria_indigenaGroupByOutputType[P]>;
}>>;
export type alumnos_prioritarios_primaria_indigenaWhereInput = {
    AND?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput | Prisma.alumnos_prioritarios_primaria_indigenaWhereInput[];
    OR?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput[];
    NOT?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput | Prisma.alumnos_prioritarios_primaria_indigenaWhereInput[];
    IDENTIFICACION?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ENT?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    CVL_ALUMN?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    MATR_EDO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ID_TURNO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ID_NIVEL?: Prisma.BoolFilter<"alumnos_prioritarios_primaria_indigena"> | boolean;
    opcion_educativa?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    TURNO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    GRADO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    GRUPO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ORIGEN_HOJA?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    PX3DE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_HUMANO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_LENGUAJES?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_SABERES?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    id?: Prisma.IntFilter<"alumnos_prioritarios_primaria_indigena"> | number;
};
export type alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput = {
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
export type alumnos_prioritarios_primaria_indigenaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput | Prisma.alumnos_prioritarios_primaria_indigenaWhereInput[];
    OR?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput[];
    NOT?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput | Prisma.alumnos_prioritarios_primaria_indigenaWhereInput[];
    IDENTIFICACION?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ENT?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    CVL_ALUMN?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    MATR_EDO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ID_TURNO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ID_NIVEL?: Prisma.BoolFilter<"alumnos_prioritarios_primaria_indigena"> | boolean;
    opcion_educativa?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    TURNO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    GRADO?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    GRUPO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ORIGEN_HOJA?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    PX3DE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_HUMANO?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_LENGUAJES?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_SABERES?: Prisma.StringFilter<"alumnos_prioritarios_primaria_indigena"> | string;
}, "id">;
export type alumnos_prioritarios_primaria_indigenaOrderByWithAggregationInput = {
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
    _count?: Prisma.alumnos_prioritarios_primaria_indigenaCountOrderByAggregateInput;
    _avg?: Prisma.alumnos_prioritarios_primaria_indigenaAvgOrderByAggregateInput;
    _max?: Prisma.alumnos_prioritarios_primaria_indigenaMaxOrderByAggregateInput;
    _min?: Prisma.alumnos_prioritarios_primaria_indigenaMinOrderByAggregateInput;
    _sum?: Prisma.alumnos_prioritarios_primaria_indigenaSumOrderByAggregateInput;
};
export type alumnos_prioritarios_primaria_indigenaScalarWhereWithAggregatesInput = {
    AND?: Prisma.alumnos_prioritarios_primaria_indigenaScalarWhereWithAggregatesInput | Prisma.alumnos_prioritarios_primaria_indigenaScalarWhereWithAggregatesInput[];
    OR?: Prisma.alumnos_prioritarios_primaria_indigenaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.alumnos_prioritarios_primaria_indigenaScalarWhereWithAggregatesInput | Prisma.alumnos_prioritarios_primaria_indigenaScalarWhereWithAggregatesInput[];
    IDENTIFICACION?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ENT?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    CVL_ALUMN?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    MATR_EDO?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ID_TURNO?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ID_NIVEL?: Prisma.BoolWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | boolean;
    opcion_educativa?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    TURNO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    GRADO?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    GRUPO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    ORIGEN_HOJA?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    PX3DE1C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3DE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3EE2C3A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3LE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE1C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX3SE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE1C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4DE2C3C2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE1C2B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4EE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE1C4A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4LE2C5A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE1C1B3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C1B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX4SE2C4B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE1C1B2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5DE2C2D1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE1C2C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5EE2C4B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE1C4B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5LE2C3C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE1C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    PX5SE2C1C3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_HUMANO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_LENGUAJES?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    NIVEL_SABERES?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | string;
    id?: Prisma.IntWithAggregatesFilter<"alumnos_prioritarios_primaria_indigena"> | number;
};
export type alumnos_prioritarios_primaria_indigenaCreateInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO: runtime.Decimal | runtime.DecimalJsLike | number | string;
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
export type alumnos_prioritarios_primaria_indigenaUncheckedCreateInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO: runtime.Decimal | runtime.DecimalJsLike | number | string;
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
export type alumnos_prioritarios_primaria_indigenaUpdateInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
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
export type alumnos_prioritarios_primaria_indigenaUncheckedUpdateInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
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
export type alumnos_prioritarios_primaria_indigenaCreateManyInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO: runtime.Decimal | runtime.DecimalJsLike | number | string;
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
export type alumnos_prioritarios_primaria_indigenaUpdateManyMutationInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
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
export type alumnos_prioritarios_primaria_indigenaUncheckedUpdateManyInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
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
export type alumnos_prioritarios_primaria_indigenaCountOrderByAggregateInput = {
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
export type alumnos_prioritarios_primaria_indigenaAvgOrderByAggregateInput = {
    ENT?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    MATR_EDO?: Prisma.SortOrder;
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
export type alumnos_prioritarios_primaria_indigenaMaxOrderByAggregateInput = {
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
export type alumnos_prioritarios_primaria_indigenaMinOrderByAggregateInput = {
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
export type alumnos_prioritarios_primaria_indigenaSumOrderByAggregateInput = {
    ENT?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    MATR_EDO?: Prisma.SortOrder;
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
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type alumnos_prioritarios_primaria_indigenaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
}, ExtArgs["result"]["alumnos_prioritarios_primaria_indigena"]>;
export type alumnos_prioritarios_primaria_indigenaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
}, ExtArgs["result"]["alumnos_prioritarios_primaria_indigena"]>;
export type alumnos_prioritarios_primaria_indigenaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
}, ExtArgs["result"]["alumnos_prioritarios_primaria_indigena"]>;
export type alumnos_prioritarios_primaria_indigenaSelectScalar = {
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
export type alumnos_prioritarios_primaria_indigenaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IDENTIFICACION" | "ENT" | "LLAVE" | "CVL_ALUMN" | "NOMALUMNO" | "MATR_EDO" | "CCT" | "ID_TURNO" | "CONTROL" | "ID_NIVEL" | "opcion_educativa" | "TURNO" | "GRADO" | "SEXO" | "GRUPO" | "ORIGEN_ARCHIVO" | "ORIGEN_HOJA" | "PX3DE1C4A1" | "PX3DE2C4A1" | "PX3EE1C3A1" | "PX3EE2C1A1" | "PX3EE2C3A2" | "PX3LE1C1A1" | "PX3LE2C3A1" | "PX3SE1C2A1" | "PX3SE1C2A2" | "PX3SE2C2A1" | "PX4DE1C3A1" | "PX4DE1C3B1" | "PX4DE2C3A1" | "PX4DE2C3B1" | "PX4DE2C3C1" | "PX4DE2C3C2" | "PX4EE1C2A1" | "PX4EE1C2A2" | "PX4EE1C2A3" | "PX4EE1C2B1" | "PX4EE2C2A1" | "PX4LE1C4A1" | "PX4LE1C4A2" | "PX4LE1C4A3" | "PX4LE2C5A1" | "PX4LE2C5A2" | "PX4LE2C5A3" | "PX4SE1C1A1" | "PX4SE1C1A2" | "PX4SE1C1B1" | "PX4SE1C1B2" | "PX4SE1C1B3" | "PX4SE2C1A1" | "PX4SE2C1B1" | "PX4SE2C4A1" | "PX4SE2C4B1" | "PX5DE1C1A1" | "PX5DE1C1B1" | "PX5DE1C1B2" | "PX5DE2C2A1" | "PX5DE2C2B1" | "PX5DE2C2C1" | "PX5DE2C2D1" | "PX5EE1C2A1" | "PX5EE1C2B1" | "PX5EE1C2C1" | "PX5EE2C4A1" | "PX5EE2C4B1" | "PX5LE1C4A1" | "PX5LE1C4B1" | "PX5LE2C3A1" | "PX5LE2C3A2" | "PX5LE2C3B1" | "PX5LE2C3C1" | "PX5SE1C3A1" | "PX5SE1C3B1" | "PX5SE2C1A1" | "PX5SE2C1B1" | "PX5SE2C1C1" | "PX5SE2C1C2" | "PX5SE2C1C3" | "NIVEL_ETICA" | "NIVEL_HUMANO" | "NIVEL_LENGUAJES" | "NIVEL_SABERES" | "id", ExtArgs["result"]["alumnos_prioritarios_primaria_indigena"]>;
export type $alumnos_prioritarios_primaria_indigenaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "alumnos_prioritarios_primaria_indigena";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IDENTIFICACION: string;
        ENT: runtime.Decimal;
        LLAVE: string;
        CVL_ALUMN: runtime.Decimal;
        NOMALUMNO: string;
        MATR_EDO: runtime.Decimal;
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
    }, ExtArgs["result"]["alumnos_prioritarios_primaria_indigena"]>;
    composites: {};
};
export type alumnos_prioritarios_primaria_indigenaGetPayload<S extends boolean | null | undefined | alumnos_prioritarios_primaria_indigenaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload, S>;
export type alumnos_prioritarios_primaria_indigenaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<alumnos_prioritarios_primaria_indigenaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Alumnos_prioritarios_primaria_indigenaCountAggregateInputType | true;
};
export interface alumnos_prioritarios_primaria_indigenaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['alumnos_prioritarios_primaria_indigena'];
        meta: {
            name: 'alumnos_prioritarios_primaria_indigena';
        };
    };
    /**
     * Find zero or one Alumnos_prioritarios_primaria_indigena that matches the filter.
     * @param {alumnos_prioritarios_primaria_indigenaFindUniqueArgs} args - Arguments to find a Alumnos_prioritarios_primaria_indigena
     * @example
     * // Get one Alumnos_prioritarios_primaria_indigena
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumnos_prioritarios_primaria_indigenaFindUniqueArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_indigenaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alumnos_prioritarios_primaria_indigena that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumnos_prioritarios_primaria_indigenaFindUniqueOrThrowArgs} args - Arguments to find a Alumnos_prioritarios_primaria_indigena
     * @example
     * // Get one Alumnos_prioritarios_primaria_indigena
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumnos_prioritarios_primaria_indigenaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_indigenaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnos_prioritarios_primaria_indigena that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_indigenaFindFirstArgs} args - Arguments to find a Alumnos_prioritarios_primaria_indigena
     * @example
     * // Get one Alumnos_prioritarios_primaria_indigena
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumnos_prioritarios_primaria_indigenaFindFirstArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaFindFirstArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_indigenaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnos_prioritarios_primaria_indigena that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_indigenaFindFirstOrThrowArgs} args - Arguments to find a Alumnos_prioritarios_primaria_indigena
     * @example
     * // Get one Alumnos_prioritarios_primaria_indigena
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumnos_prioritarios_primaria_indigenaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_indigenaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alumnos_prioritarios_primaria_indigenas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_indigenaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos_prioritarios_primaria_indigenas
     * const alumnos_prioritarios_primaria_indigenas = await prisma.alumnos_prioritarios_primaria_indigena.findMany()
     *
     * // Get first 10 Alumnos_prioritarios_primaria_indigenas
     * const alumnos_prioritarios_primaria_indigenas = await prisma.alumnos_prioritarios_primaria_indigena.findMany({ take: 10 })
     *
     * // Only select the `IDENTIFICACION`
     * const alumnos_prioritarios_primaria_indigenaWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_primaria_indigena.findMany({ select: { IDENTIFICACION: true } })
     *
     */
    findMany<T extends alumnos_prioritarios_primaria_indigenaFindManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alumnos_prioritarios_primaria_indigena.
     * @param {alumnos_prioritarios_primaria_indigenaCreateArgs} args - Arguments to create a Alumnos_prioritarios_primaria_indigena.
     * @example
     * // Create one Alumnos_prioritarios_primaria_indigena
     * const Alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.create({
     *   data: {
     *     // ... data to create a Alumnos_prioritarios_primaria_indigena
     *   }
     * })
     *
     */
    create<T extends alumnos_prioritarios_primaria_indigenaCreateArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaCreateArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_indigenaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alumnos_prioritarios_primaria_indigenas.
     * @param {alumnos_prioritarios_primaria_indigenaCreateManyArgs} args - Arguments to create many Alumnos_prioritarios_primaria_indigenas.
     * @example
     * // Create many Alumnos_prioritarios_primaria_indigenas
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends alumnos_prioritarios_primaria_indigenaCreateManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Alumnos_prioritarios_primaria_indigenas and returns the data saved in the database.
     * @param {alumnos_prioritarios_primaria_indigenaCreateManyAndReturnArgs} args - Arguments to create many Alumnos_prioritarios_primaria_indigenas.
     * @example
     * // Create many Alumnos_prioritarios_primaria_indigenas
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Alumnos_prioritarios_primaria_indigenas and only return the `IDENTIFICACION`
     * const alumnos_prioritarios_primaria_indigenaWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_primaria_indigena.createManyAndReturn({
     *   select: { IDENTIFICACION: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends alumnos_prioritarios_primaria_indigenaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Alumnos_prioritarios_primaria_indigena.
     * @param {alumnos_prioritarios_primaria_indigenaDeleteArgs} args - Arguments to delete one Alumnos_prioritarios_primaria_indigena.
     * @example
     * // Delete one Alumnos_prioritarios_primaria_indigena
     * const Alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.delete({
     *   where: {
     *     // ... filter to delete one Alumnos_prioritarios_primaria_indigena
     *   }
     * })
     *
     */
    delete<T extends alumnos_prioritarios_primaria_indigenaDeleteArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaDeleteArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_indigenaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alumnos_prioritarios_primaria_indigena.
     * @param {alumnos_prioritarios_primaria_indigenaUpdateArgs} args - Arguments to update one Alumnos_prioritarios_primaria_indigena.
     * @example
     * // Update one Alumnos_prioritarios_primaria_indigena
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends alumnos_prioritarios_primaria_indigenaUpdateArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaUpdateArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_indigenaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alumnos_prioritarios_primaria_indigenas.
     * @param {alumnos_prioritarios_primaria_indigenaDeleteManyArgs} args - Arguments to filter Alumnos_prioritarios_primaria_indigenas to delete.
     * @example
     * // Delete a few Alumnos_prioritarios_primaria_indigenas
     * const { count } = await prisma.alumnos_prioritarios_primaria_indigena.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends alumnos_prioritarios_primaria_indigenaDeleteManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos_prioritarios_primaria_indigenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_indigenaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos_prioritarios_primaria_indigenas
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends alumnos_prioritarios_primaria_indigenaUpdateManyArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos_prioritarios_primaria_indigenas and returns the data updated in the database.
     * @param {alumnos_prioritarios_primaria_indigenaUpdateManyAndReturnArgs} args - Arguments to update many Alumnos_prioritarios_primaria_indigenas.
     * @example
     * // Update many Alumnos_prioritarios_primaria_indigenas
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Alumnos_prioritarios_primaria_indigenas and only return the `IDENTIFICACION`
     * const alumnos_prioritarios_primaria_indigenaWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_primaria_indigena.updateManyAndReturn({
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
    updateManyAndReturn<T extends alumnos_prioritarios_primaria_indigenaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Alumnos_prioritarios_primaria_indigena.
     * @param {alumnos_prioritarios_primaria_indigenaUpsertArgs} args - Arguments to update or create a Alumnos_prioritarios_primaria_indigena.
     * @example
     * // Update or create a Alumnos_prioritarios_primaria_indigena
     * const alumnos_prioritarios_primaria_indigena = await prisma.alumnos_prioritarios_primaria_indigena.upsert({
     *   create: {
     *     // ... data to create a Alumnos_prioritarios_primaria_indigena
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumnos_prioritarios_primaria_indigena we want to update
     *   }
     * })
     */
    upsert<T extends alumnos_prioritarios_primaria_indigenaUpsertArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_primaria_indigenaUpsertArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_primaria_indigenaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_primaria_indigenaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alumnos_prioritarios_primaria_indigenas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_indigenaCountArgs} args - Arguments to filter Alumnos_prioritarios_primaria_indigenas to count.
     * @example
     * // Count the number of Alumnos_prioritarios_primaria_indigenas
     * const count = await prisma.alumnos_prioritarios_primaria_indigena.count({
     *   where: {
     *     // ... the filter for the Alumnos_prioritarios_primaria_indigenas we want to count
     *   }
     * })
    **/
    count<T extends alumnos_prioritarios_primaria_indigenaCountArgs>(args?: Prisma.Subset<T, alumnos_prioritarios_primaria_indigenaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Alumnos_prioritarios_primaria_indigenaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alumnos_prioritarios_primaria_indigena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alumnos_prioritarios_primaria_indigenaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alumnos_prioritarios_primaria_indigenaAggregateArgs>(args: Prisma.Subset<T, Alumnos_prioritarios_primaria_indigenaAggregateArgs>): Prisma.PrismaPromise<GetAlumnos_prioritarios_primaria_indigenaAggregateType<T>>;
    /**
     * Group by Alumnos_prioritarios_primaria_indigena.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_primaria_indigenaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends alumnos_prioritarios_primaria_indigenaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: alumnos_prioritarios_primaria_indigenaGroupByArgs['orderBy'];
    } : {
        orderBy?: alumnos_prioritarios_primaria_indigenaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, alumnos_prioritarios_primaria_indigenaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnos_prioritarios_primaria_indigenaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the alumnos_prioritarios_primaria_indigena model
     */
    readonly fields: alumnos_prioritarios_primaria_indigenaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for alumnos_prioritarios_primaria_indigena.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__alumnos_prioritarios_primaria_indigenaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the alumnos_prioritarios_primaria_indigena model
 */
export interface alumnos_prioritarios_primaria_indigenaFieldRefs {
    readonly IDENTIFICACION: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly ENT: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly LLAVE: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly CVL_ALUMN: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly NOMALUMNO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly MATR_EDO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly CCT: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly ID_TURNO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly CONTROL: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly ID_NIVEL: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Boolean'>;
    readonly opcion_educativa: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly TURNO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly GRADO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly SEXO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly GRUPO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly ORIGEN_ARCHIVO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly ORIGEN_HOJA: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly PX3DE1C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3DE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3EE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3EE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3EE2C3A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3LE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3LE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3SE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3SE1C2A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX3SE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4DE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4DE1C3B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4DE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4DE2C3B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4DE2C3C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4DE2C3C2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4EE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4EE1C2A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4EE1C2A3: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4EE1C2B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4EE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4LE1C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4LE1C4A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4LE1C4A3: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4LE2C5A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4LE2C5A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4LE2C5A3: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE1C1A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE1C1B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE1C1B2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE1C1B3: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE2C1B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX4SE2C4B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5DE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5DE1C1B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5DE1C1B2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5DE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5DE2C2B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5DE2C2C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5DE2C2D1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5EE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5EE1C2B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5EE1C2C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5EE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5EE2C4B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5LE1C4A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5LE1C4B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5LE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5LE2C3A2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5LE2C3B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5LE2C3C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5SE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5SE1C3B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5SE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5SE2C1B1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5SE2C1C1: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5SE2C1C2: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly PX5SE2C1C3: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Decimal'>;
    readonly NIVEL_ETICA: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly NIVEL_HUMANO: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly NIVEL_LENGUAJES: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly NIVEL_SABERES: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'String'>;
    readonly id: Prisma.FieldRef<"alumnos_prioritarios_primaria_indigena", 'Int'>;
}
/**
 * alumnos_prioritarios_primaria_indigena findUnique
 */
export type alumnos_prioritarios_primaria_indigenaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_indigena to fetch.
     */
    where: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena findUniqueOrThrow
 */
export type alumnos_prioritarios_primaria_indigenaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_indigena to fetch.
     */
    where: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena findFirst
 */
export type alumnos_prioritarios_primaria_indigenaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_indigena to fetch.
     */
    where?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_primaria_indigenas to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput | Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos_prioritarios_primaria_indigenas.
     */
    cursor?: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_primaria_indigenas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_primaria_indigenas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos_prioritarios_primaria_indigenas.
     */
    distinct?: Prisma.Alumnos_prioritarios_primaria_indigenaScalarFieldEnum | Prisma.Alumnos_prioritarios_primaria_indigenaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena findFirstOrThrow
 */
export type alumnos_prioritarios_primaria_indigenaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_indigena to fetch.
     */
    where?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_primaria_indigenas to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput | Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos_prioritarios_primaria_indigenas.
     */
    cursor?: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_primaria_indigenas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_primaria_indigenas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos_prioritarios_primaria_indigenas.
     */
    distinct?: Prisma.Alumnos_prioritarios_primaria_indigenaScalarFieldEnum | Prisma.Alumnos_prioritarios_primaria_indigenaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena findMany
 */
export type alumnos_prioritarios_primaria_indigenaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_primaria_indigenas to fetch.
     */
    where?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_primaria_indigenas to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput | Prisma.alumnos_prioritarios_primaria_indigenaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing alumnos_prioritarios_primaria_indigenas.
     */
    cursor?: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_primaria_indigenas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_primaria_indigenas.
     */
    skip?: number;
    distinct?: Prisma.Alumnos_prioritarios_primaria_indigenaScalarFieldEnum | Prisma.Alumnos_prioritarios_primaria_indigenaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena create
 */
export type alumnos_prioritarios_primaria_indigenaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * The data needed to create a alumnos_prioritarios_primaria_indigena.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_indigenaCreateInput, Prisma.alumnos_prioritarios_primaria_indigenaUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena createMany
 */
export type alumnos_prioritarios_primaria_indigenaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumnos_prioritarios_primaria_indigenas.
     */
    data: Prisma.alumnos_prioritarios_primaria_indigenaCreateManyInput | Prisma.alumnos_prioritarios_primaria_indigenaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnos_prioritarios_primaria_indigena createManyAndReturn
 */
export type alumnos_prioritarios_primaria_indigenaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * The data used to create many alumnos_prioritarios_primaria_indigenas.
     */
    data: Prisma.alumnos_prioritarios_primaria_indigenaCreateManyInput | Prisma.alumnos_prioritarios_primaria_indigenaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnos_prioritarios_primaria_indigena update
 */
export type alumnos_prioritarios_primaria_indigenaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * The data needed to update a alumnos_prioritarios_primaria_indigena.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_indigenaUpdateInput, Prisma.alumnos_prioritarios_primaria_indigenaUncheckedUpdateInput>;
    /**
     * Choose, which alumnos_prioritarios_primaria_indigena to update.
     */
    where: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena updateMany
 */
export type alumnos_prioritarios_primaria_indigenaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update alumnos_prioritarios_primaria_indigenas.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_indigenaUpdateManyMutationInput, Prisma.alumnos_prioritarios_primaria_indigenaUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos_prioritarios_primaria_indigenas to update
     */
    where?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput;
    /**
     * Limit how many alumnos_prioritarios_primaria_indigenas to update.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_primaria_indigena updateManyAndReturn
 */
export type alumnos_prioritarios_primaria_indigenaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * The data used to update alumnos_prioritarios_primaria_indigenas.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_indigenaUpdateManyMutationInput, Prisma.alumnos_prioritarios_primaria_indigenaUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos_prioritarios_primaria_indigenas to update
     */
    where?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput;
    /**
     * Limit how many alumnos_prioritarios_primaria_indigenas to update.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_primaria_indigena upsert
 */
export type alumnos_prioritarios_primaria_indigenaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * The filter to search for the alumnos_prioritarios_primaria_indigena to update in case it exists.
     */
    where: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    /**
     * In case the alumnos_prioritarios_primaria_indigena found by the `where` argument doesn't exist, create a new alumnos_prioritarios_primaria_indigena with this data.
     */
    create: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_indigenaCreateInput, Prisma.alumnos_prioritarios_primaria_indigenaUncheckedCreateInput>;
    /**
     * In case the alumnos_prioritarios_primaria_indigena was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.alumnos_prioritarios_primaria_indigenaUpdateInput, Prisma.alumnos_prioritarios_primaria_indigenaUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena delete
 */
export type alumnos_prioritarios_primaria_indigenaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
    /**
     * Filter which alumnos_prioritarios_primaria_indigena to delete.
     */
    where: Prisma.alumnos_prioritarios_primaria_indigenaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_primaria_indigena deleteMany
 */
export type alumnos_prioritarios_primaria_indigenaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos_prioritarios_primaria_indigenas to delete
     */
    where?: Prisma.alumnos_prioritarios_primaria_indigenaWhereInput;
    /**
     * Limit how many alumnos_prioritarios_primaria_indigenas to delete.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_primaria_indigena without action
 */
export type alumnos_prioritarios_primaria_indigenaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_primaria_indigena
     */
    select?: Prisma.alumnos_prioritarios_primaria_indigenaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_primaria_indigena
     */
    omit?: Prisma.alumnos_prioritarios_primaria_indigenaOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=alumnos_prioritarios_primaria_indigena.d.ts.map