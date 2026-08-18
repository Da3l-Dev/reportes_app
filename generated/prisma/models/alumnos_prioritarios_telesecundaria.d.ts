import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model alumnos_prioritarios_telesecundaria
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type alumnos_prioritarios_telesecundariaModel = runtime.Types.Result.DefaultSelection<Prisma.$alumnos_prioritarios_telesecundariaPayload>;
export type AggregateAlumnos_prioritarios_telesecundaria = {
    _count: Alumnos_prioritarios_telesecundariaCountAggregateOutputType | null;
    _avg: Alumnos_prioritarios_telesecundariaAvgAggregateOutputType | null;
    _sum: Alumnos_prioritarios_telesecundariaSumAggregateOutputType | null;
    _min: Alumnos_prioritarios_telesecundariaMinAggregateOutputType | null;
    _max: Alumnos_prioritarios_telesecundariaMaxAggregateOutputType | null;
};
export type Alumnos_prioritarios_telesecundariaAvgAggregateOutputType = {
    ENT: runtime.Decimal | null;
    CVL_ALUMN: runtime.Decimal | null;
    ID_TURNO: runtime.Decimal | null;
    ID_NIVEL: runtime.Decimal | null;
    GRADO: runtime.Decimal | null;
    SA6DE1C5A1: runtime.Decimal | null;
    SA6DE1C5B1: runtime.Decimal | null;
    SA6DE1C5C1: runtime.Decimal | null;
    SA6DE2C4A1: runtime.Decimal | null;
    SA6EE1C4A1: runtime.Decimal | null;
    SA6EE1C4B1: runtime.Decimal | null;
    SA6EE2C3A1: runtime.Decimal | null;
    SA6EE2C3B1: runtime.Decimal | null;
    SA6EE2C3C1: runtime.Decimal | null;
    SA6LE1C3A1: runtime.Decimal | null;
    SA6LE2C1A1: runtime.Decimal | null;
    SA6LE2C1A2: runtime.Decimal | null;
    SA6SE1C1A1: runtime.Decimal | null;
    SA6SE1C1A2: runtime.Decimal | null;
    SA6SE1C1A3: runtime.Decimal | null;
    SA6SE1C2A1: runtime.Decimal | null;
    SA6SE1C2A2: runtime.Decimal | null;
    SA6SE2C2A1: runtime.Decimal | null;
    SA6SE2C2A2: runtime.Decimal | null;
    SA6SE2C2B1: runtime.Decimal | null;
    SA6SE2C2B2: runtime.Decimal | null;
    SB6DE1C4A1: runtime.Decimal | null;
    SB6DE1C4A2: runtime.Decimal | null;
    SB6DE2C4A1: runtime.Decimal | null;
    SB6DE2C4A2: runtime.Decimal | null;
    SB6EE1C3A1: runtime.Decimal | null;
    SB6EE1C3A2: runtime.Decimal | null;
    SB6EE2C3A1: runtime.Decimal | null;
    SB6EE2C3A2: runtime.Decimal | null;
    SB6EE2C3A3: runtime.Decimal | null;
    SB6LE1C1A1: runtime.Decimal | null;
    SB6LE1C1A2: runtime.Decimal | null;
    SB6LE1C1A3: runtime.Decimal | null;
    SB6LE2C1A1: runtime.Decimal | null;
    SB6LE2C1A2: runtime.Decimal | null;
    SB6LE2C1A3: runtime.Decimal | null;
    SB6SE1C2A1: runtime.Decimal | null;
    SB6SE1C2A2: runtime.Decimal | null;
    SB6SE1C2B1: runtime.Decimal | null;
    SB6SE2C2A1: runtime.Decimal | null;
    SB6SE2C2A2: runtime.Decimal | null;
    id: number | null;
};
export type Alumnos_prioritarios_telesecundariaSumAggregateOutputType = {
    ENT: runtime.Decimal | null;
    CVL_ALUMN: runtime.Decimal | null;
    ID_TURNO: runtime.Decimal | null;
    ID_NIVEL: runtime.Decimal | null;
    GRADO: runtime.Decimal | null;
    SA6DE1C5A1: runtime.Decimal | null;
    SA6DE1C5B1: runtime.Decimal | null;
    SA6DE1C5C1: runtime.Decimal | null;
    SA6DE2C4A1: runtime.Decimal | null;
    SA6EE1C4A1: runtime.Decimal | null;
    SA6EE1C4B1: runtime.Decimal | null;
    SA6EE2C3A1: runtime.Decimal | null;
    SA6EE2C3B1: runtime.Decimal | null;
    SA6EE2C3C1: runtime.Decimal | null;
    SA6LE1C3A1: runtime.Decimal | null;
    SA6LE2C1A1: runtime.Decimal | null;
    SA6LE2C1A2: runtime.Decimal | null;
    SA6SE1C1A1: runtime.Decimal | null;
    SA6SE1C1A2: runtime.Decimal | null;
    SA6SE1C1A3: runtime.Decimal | null;
    SA6SE1C2A1: runtime.Decimal | null;
    SA6SE1C2A2: runtime.Decimal | null;
    SA6SE2C2A1: runtime.Decimal | null;
    SA6SE2C2A2: runtime.Decimal | null;
    SA6SE2C2B1: runtime.Decimal | null;
    SA6SE2C2B2: runtime.Decimal | null;
    SB6DE1C4A1: runtime.Decimal | null;
    SB6DE1C4A2: runtime.Decimal | null;
    SB6DE2C4A1: runtime.Decimal | null;
    SB6DE2C4A2: runtime.Decimal | null;
    SB6EE1C3A1: runtime.Decimal | null;
    SB6EE1C3A2: runtime.Decimal | null;
    SB6EE2C3A1: runtime.Decimal | null;
    SB6EE2C3A2: runtime.Decimal | null;
    SB6EE2C3A3: runtime.Decimal | null;
    SB6LE1C1A1: runtime.Decimal | null;
    SB6LE1C1A2: runtime.Decimal | null;
    SB6LE1C1A3: runtime.Decimal | null;
    SB6LE2C1A1: runtime.Decimal | null;
    SB6LE2C1A2: runtime.Decimal | null;
    SB6LE2C1A3: runtime.Decimal | null;
    SB6SE1C2A1: runtime.Decimal | null;
    SB6SE1C2A2: runtime.Decimal | null;
    SB6SE1C2B1: runtime.Decimal | null;
    SB6SE2C2A1: runtime.Decimal | null;
    SB6SE2C2A2: runtime.Decimal | null;
    id: number | null;
};
export type Alumnos_prioritarios_telesecundariaMinAggregateOutputType = {
    IDENTIFICACION: string | null;
    ENT: runtime.Decimal | null;
    LLAVE: string | null;
    CVL_ALUMN: runtime.Decimal | null;
    NOMALUMNO: string | null;
    MATR_EDO: string | null;
    CCT: string | null;
    ID_TURNO: runtime.Decimal | null;
    CONTROL: string | null;
    ID_NIVEL: runtime.Decimal | null;
    opcion_educativa: string | null;
    TURNO: string | null;
    GRADO: runtime.Decimal | null;
    SEXO: string | null;
    GRUPO: string | null;
    ORIGEN_ARCHIVO: string | null;
    ORIGEN_HOJA: string | null;
    SA6DE1C5A1: runtime.Decimal | null;
    SA6DE1C5B1: runtime.Decimal | null;
    SA6DE1C5C1: runtime.Decimal | null;
    SA6DE2C4A1: runtime.Decimal | null;
    SA6EE1C4A1: runtime.Decimal | null;
    SA6EE1C4B1: runtime.Decimal | null;
    SA6EE2C3A1: runtime.Decimal | null;
    SA6EE2C3B1: runtime.Decimal | null;
    SA6EE2C3C1: runtime.Decimal | null;
    SA6LE1C3A1: runtime.Decimal | null;
    SA6LE2C1A1: runtime.Decimal | null;
    SA6LE2C1A2: runtime.Decimal | null;
    SA6SE1C1A1: runtime.Decimal | null;
    SA6SE1C1A2: runtime.Decimal | null;
    SA6SE1C1A3: runtime.Decimal | null;
    SA6SE1C2A1: runtime.Decimal | null;
    SA6SE1C2A2: runtime.Decimal | null;
    SA6SE2C2A1: runtime.Decimal | null;
    SA6SE2C2A2: runtime.Decimal | null;
    SA6SE2C2B1: runtime.Decimal | null;
    SA6SE2C2B2: runtime.Decimal | null;
    SB6DE1C4A1: runtime.Decimal | null;
    SB6DE1C4A2: runtime.Decimal | null;
    SB6DE2C4A1: runtime.Decimal | null;
    SB6DE2C4A2: runtime.Decimal | null;
    SB6EE1C3A1: runtime.Decimal | null;
    SB6EE1C3A2: runtime.Decimal | null;
    SB6EE2C3A1: runtime.Decimal | null;
    SB6EE2C3A2: runtime.Decimal | null;
    SB6EE2C3A3: runtime.Decimal | null;
    SB6LE1C1A1: runtime.Decimal | null;
    SB6LE1C1A2: runtime.Decimal | null;
    SB6LE1C1A3: runtime.Decimal | null;
    SB6LE2C1A1: runtime.Decimal | null;
    SB6LE2C1A2: runtime.Decimal | null;
    SB6LE2C1A3: runtime.Decimal | null;
    SB6SE1C2A1: runtime.Decimal | null;
    SB6SE1C2A2: runtime.Decimal | null;
    SB6SE1C2B1: runtime.Decimal | null;
    SB6SE2C2A1: runtime.Decimal | null;
    SB6SE2C2A2: runtime.Decimal | null;
    NIVEL_ETICA: string | null;
    NIVEL_HUMANO: string | null;
    NIVEL_LENGUAJES: string | null;
    NIVEL_SABERES: string | null;
    id: number | null;
};
export type Alumnos_prioritarios_telesecundariaMaxAggregateOutputType = {
    IDENTIFICACION: string | null;
    ENT: runtime.Decimal | null;
    LLAVE: string | null;
    CVL_ALUMN: runtime.Decimal | null;
    NOMALUMNO: string | null;
    MATR_EDO: string | null;
    CCT: string | null;
    ID_TURNO: runtime.Decimal | null;
    CONTROL: string | null;
    ID_NIVEL: runtime.Decimal | null;
    opcion_educativa: string | null;
    TURNO: string | null;
    GRADO: runtime.Decimal | null;
    SEXO: string | null;
    GRUPO: string | null;
    ORIGEN_ARCHIVO: string | null;
    ORIGEN_HOJA: string | null;
    SA6DE1C5A1: runtime.Decimal | null;
    SA6DE1C5B1: runtime.Decimal | null;
    SA6DE1C5C1: runtime.Decimal | null;
    SA6DE2C4A1: runtime.Decimal | null;
    SA6EE1C4A1: runtime.Decimal | null;
    SA6EE1C4B1: runtime.Decimal | null;
    SA6EE2C3A1: runtime.Decimal | null;
    SA6EE2C3B1: runtime.Decimal | null;
    SA6EE2C3C1: runtime.Decimal | null;
    SA6LE1C3A1: runtime.Decimal | null;
    SA6LE2C1A1: runtime.Decimal | null;
    SA6LE2C1A2: runtime.Decimal | null;
    SA6SE1C1A1: runtime.Decimal | null;
    SA6SE1C1A2: runtime.Decimal | null;
    SA6SE1C1A3: runtime.Decimal | null;
    SA6SE1C2A1: runtime.Decimal | null;
    SA6SE1C2A2: runtime.Decimal | null;
    SA6SE2C2A1: runtime.Decimal | null;
    SA6SE2C2A2: runtime.Decimal | null;
    SA6SE2C2B1: runtime.Decimal | null;
    SA6SE2C2B2: runtime.Decimal | null;
    SB6DE1C4A1: runtime.Decimal | null;
    SB6DE1C4A2: runtime.Decimal | null;
    SB6DE2C4A1: runtime.Decimal | null;
    SB6DE2C4A2: runtime.Decimal | null;
    SB6EE1C3A1: runtime.Decimal | null;
    SB6EE1C3A2: runtime.Decimal | null;
    SB6EE2C3A1: runtime.Decimal | null;
    SB6EE2C3A2: runtime.Decimal | null;
    SB6EE2C3A3: runtime.Decimal | null;
    SB6LE1C1A1: runtime.Decimal | null;
    SB6LE1C1A2: runtime.Decimal | null;
    SB6LE1C1A3: runtime.Decimal | null;
    SB6LE2C1A1: runtime.Decimal | null;
    SB6LE2C1A2: runtime.Decimal | null;
    SB6LE2C1A3: runtime.Decimal | null;
    SB6SE1C2A1: runtime.Decimal | null;
    SB6SE1C2A2: runtime.Decimal | null;
    SB6SE1C2B1: runtime.Decimal | null;
    SB6SE2C2A1: runtime.Decimal | null;
    SB6SE2C2A2: runtime.Decimal | null;
    NIVEL_ETICA: string | null;
    NIVEL_HUMANO: string | null;
    NIVEL_LENGUAJES: string | null;
    NIVEL_SABERES: string | null;
    id: number | null;
};
export type Alumnos_prioritarios_telesecundariaCountAggregateOutputType = {
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
    SA6DE1C5A1: number;
    SA6DE1C5B1: number;
    SA6DE1C5C1: number;
    SA6DE2C4A1: number;
    SA6EE1C4A1: number;
    SA6EE1C4B1: number;
    SA6EE2C3A1: number;
    SA6EE2C3B1: number;
    SA6EE2C3C1: number;
    SA6LE1C3A1: number;
    SA6LE2C1A1: number;
    SA6LE2C1A2: number;
    SA6SE1C1A1: number;
    SA6SE1C1A2: number;
    SA6SE1C1A3: number;
    SA6SE1C2A1: number;
    SA6SE1C2A2: number;
    SA6SE2C2A1: number;
    SA6SE2C2A2: number;
    SA6SE2C2B1: number;
    SA6SE2C2B2: number;
    SB6DE1C4A1: number;
    SB6DE1C4A2: number;
    SB6DE2C4A1: number;
    SB6DE2C4A2: number;
    SB6EE1C3A1: number;
    SB6EE1C3A2: number;
    SB6EE2C3A1: number;
    SB6EE2C3A2: number;
    SB6EE2C3A3: number;
    SB6LE1C1A1: number;
    SB6LE1C1A2: number;
    SB6LE1C1A3: number;
    SB6LE2C1A1: number;
    SB6LE2C1A2: number;
    SB6LE2C1A3: number;
    SB6SE1C2A1: number;
    SB6SE1C2A2: number;
    SB6SE1C2B1: number;
    SB6SE2C2A1: number;
    SB6SE2C2A2: number;
    NIVEL_ETICA: number;
    NIVEL_HUMANO: number;
    NIVEL_LENGUAJES: number;
    NIVEL_SABERES: number;
    id: number;
    _all: number;
};
export type Alumnos_prioritarios_telesecundariaAvgAggregateInputType = {
    ENT?: true;
    CVL_ALUMN?: true;
    ID_TURNO?: true;
    ID_NIVEL?: true;
    GRADO?: true;
    SA6DE1C5A1?: true;
    SA6DE1C5B1?: true;
    SA6DE1C5C1?: true;
    SA6DE2C4A1?: true;
    SA6EE1C4A1?: true;
    SA6EE1C4B1?: true;
    SA6EE2C3A1?: true;
    SA6EE2C3B1?: true;
    SA6EE2C3C1?: true;
    SA6LE1C3A1?: true;
    SA6LE2C1A1?: true;
    SA6LE2C1A2?: true;
    SA6SE1C1A1?: true;
    SA6SE1C1A2?: true;
    SA6SE1C1A3?: true;
    SA6SE1C2A1?: true;
    SA6SE1C2A2?: true;
    SA6SE2C2A1?: true;
    SA6SE2C2A2?: true;
    SA6SE2C2B1?: true;
    SA6SE2C2B2?: true;
    SB6DE1C4A1?: true;
    SB6DE1C4A2?: true;
    SB6DE2C4A1?: true;
    SB6DE2C4A2?: true;
    SB6EE1C3A1?: true;
    SB6EE1C3A2?: true;
    SB6EE2C3A1?: true;
    SB6EE2C3A2?: true;
    SB6EE2C3A3?: true;
    SB6LE1C1A1?: true;
    SB6LE1C1A2?: true;
    SB6LE1C1A3?: true;
    SB6LE2C1A1?: true;
    SB6LE2C1A2?: true;
    SB6LE2C1A3?: true;
    SB6SE1C2A1?: true;
    SB6SE1C2A2?: true;
    SB6SE1C2B1?: true;
    SB6SE2C2A1?: true;
    SB6SE2C2A2?: true;
    id?: true;
};
export type Alumnos_prioritarios_telesecundariaSumAggregateInputType = {
    ENT?: true;
    CVL_ALUMN?: true;
    ID_TURNO?: true;
    ID_NIVEL?: true;
    GRADO?: true;
    SA6DE1C5A1?: true;
    SA6DE1C5B1?: true;
    SA6DE1C5C1?: true;
    SA6DE2C4A1?: true;
    SA6EE1C4A1?: true;
    SA6EE1C4B1?: true;
    SA6EE2C3A1?: true;
    SA6EE2C3B1?: true;
    SA6EE2C3C1?: true;
    SA6LE1C3A1?: true;
    SA6LE2C1A1?: true;
    SA6LE2C1A2?: true;
    SA6SE1C1A1?: true;
    SA6SE1C1A2?: true;
    SA6SE1C1A3?: true;
    SA6SE1C2A1?: true;
    SA6SE1C2A2?: true;
    SA6SE2C2A1?: true;
    SA6SE2C2A2?: true;
    SA6SE2C2B1?: true;
    SA6SE2C2B2?: true;
    SB6DE1C4A1?: true;
    SB6DE1C4A2?: true;
    SB6DE2C4A1?: true;
    SB6DE2C4A2?: true;
    SB6EE1C3A1?: true;
    SB6EE1C3A2?: true;
    SB6EE2C3A1?: true;
    SB6EE2C3A2?: true;
    SB6EE2C3A3?: true;
    SB6LE1C1A1?: true;
    SB6LE1C1A2?: true;
    SB6LE1C1A3?: true;
    SB6LE2C1A1?: true;
    SB6LE2C1A2?: true;
    SB6LE2C1A3?: true;
    SB6SE1C2A1?: true;
    SB6SE1C2A2?: true;
    SB6SE1C2B1?: true;
    SB6SE2C2A1?: true;
    SB6SE2C2A2?: true;
    id?: true;
};
export type Alumnos_prioritarios_telesecundariaMinAggregateInputType = {
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
    SA6DE1C5A1?: true;
    SA6DE1C5B1?: true;
    SA6DE1C5C1?: true;
    SA6DE2C4A1?: true;
    SA6EE1C4A1?: true;
    SA6EE1C4B1?: true;
    SA6EE2C3A1?: true;
    SA6EE2C3B1?: true;
    SA6EE2C3C1?: true;
    SA6LE1C3A1?: true;
    SA6LE2C1A1?: true;
    SA6LE2C1A2?: true;
    SA6SE1C1A1?: true;
    SA6SE1C1A2?: true;
    SA6SE1C1A3?: true;
    SA6SE1C2A1?: true;
    SA6SE1C2A2?: true;
    SA6SE2C2A1?: true;
    SA6SE2C2A2?: true;
    SA6SE2C2B1?: true;
    SA6SE2C2B2?: true;
    SB6DE1C4A1?: true;
    SB6DE1C4A2?: true;
    SB6DE2C4A1?: true;
    SB6DE2C4A2?: true;
    SB6EE1C3A1?: true;
    SB6EE1C3A2?: true;
    SB6EE2C3A1?: true;
    SB6EE2C3A2?: true;
    SB6EE2C3A3?: true;
    SB6LE1C1A1?: true;
    SB6LE1C1A2?: true;
    SB6LE1C1A3?: true;
    SB6LE2C1A1?: true;
    SB6LE2C1A2?: true;
    SB6LE2C1A3?: true;
    SB6SE1C2A1?: true;
    SB6SE1C2A2?: true;
    SB6SE1C2B1?: true;
    SB6SE2C2A1?: true;
    SB6SE2C2A2?: true;
    NIVEL_ETICA?: true;
    NIVEL_HUMANO?: true;
    NIVEL_LENGUAJES?: true;
    NIVEL_SABERES?: true;
    id?: true;
};
export type Alumnos_prioritarios_telesecundariaMaxAggregateInputType = {
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
    SA6DE1C5A1?: true;
    SA6DE1C5B1?: true;
    SA6DE1C5C1?: true;
    SA6DE2C4A1?: true;
    SA6EE1C4A1?: true;
    SA6EE1C4B1?: true;
    SA6EE2C3A1?: true;
    SA6EE2C3B1?: true;
    SA6EE2C3C1?: true;
    SA6LE1C3A1?: true;
    SA6LE2C1A1?: true;
    SA6LE2C1A2?: true;
    SA6SE1C1A1?: true;
    SA6SE1C1A2?: true;
    SA6SE1C1A3?: true;
    SA6SE1C2A1?: true;
    SA6SE1C2A2?: true;
    SA6SE2C2A1?: true;
    SA6SE2C2A2?: true;
    SA6SE2C2B1?: true;
    SA6SE2C2B2?: true;
    SB6DE1C4A1?: true;
    SB6DE1C4A2?: true;
    SB6DE2C4A1?: true;
    SB6DE2C4A2?: true;
    SB6EE1C3A1?: true;
    SB6EE1C3A2?: true;
    SB6EE2C3A1?: true;
    SB6EE2C3A2?: true;
    SB6EE2C3A3?: true;
    SB6LE1C1A1?: true;
    SB6LE1C1A2?: true;
    SB6LE1C1A3?: true;
    SB6LE2C1A1?: true;
    SB6LE2C1A2?: true;
    SB6LE2C1A3?: true;
    SB6SE1C2A1?: true;
    SB6SE1C2A2?: true;
    SB6SE1C2B1?: true;
    SB6SE2C2A1?: true;
    SB6SE2C2A2?: true;
    NIVEL_ETICA?: true;
    NIVEL_HUMANO?: true;
    NIVEL_LENGUAJES?: true;
    NIVEL_SABERES?: true;
    id?: true;
};
export type Alumnos_prioritarios_telesecundariaCountAggregateInputType = {
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
    SA6DE1C5A1?: true;
    SA6DE1C5B1?: true;
    SA6DE1C5C1?: true;
    SA6DE2C4A1?: true;
    SA6EE1C4A1?: true;
    SA6EE1C4B1?: true;
    SA6EE2C3A1?: true;
    SA6EE2C3B1?: true;
    SA6EE2C3C1?: true;
    SA6LE1C3A1?: true;
    SA6LE2C1A1?: true;
    SA6LE2C1A2?: true;
    SA6SE1C1A1?: true;
    SA6SE1C1A2?: true;
    SA6SE1C1A3?: true;
    SA6SE1C2A1?: true;
    SA6SE1C2A2?: true;
    SA6SE2C2A1?: true;
    SA6SE2C2A2?: true;
    SA6SE2C2B1?: true;
    SA6SE2C2B2?: true;
    SB6DE1C4A1?: true;
    SB6DE1C4A2?: true;
    SB6DE2C4A1?: true;
    SB6DE2C4A2?: true;
    SB6EE1C3A1?: true;
    SB6EE1C3A2?: true;
    SB6EE2C3A1?: true;
    SB6EE2C3A2?: true;
    SB6EE2C3A3?: true;
    SB6LE1C1A1?: true;
    SB6LE1C1A2?: true;
    SB6LE1C1A3?: true;
    SB6LE2C1A1?: true;
    SB6LE2C1A2?: true;
    SB6LE2C1A3?: true;
    SB6SE1C2A1?: true;
    SB6SE1C2A2?: true;
    SB6SE1C2B1?: true;
    SB6SE2C2A1?: true;
    SB6SE2C2A2?: true;
    NIVEL_ETICA?: true;
    NIVEL_HUMANO?: true;
    NIVEL_LENGUAJES?: true;
    NIVEL_SABERES?: true;
    id?: true;
    _all?: true;
};
export type Alumnos_prioritarios_telesecundariaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos_prioritarios_telesecundaria to aggregate.
     */
    where?: Prisma.alumnos_prioritarios_telesecundariaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_telesecundarias to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_telesecundariaOrderByWithRelationInput | Prisma.alumnos_prioritarios_telesecundariaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_telesecundarias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_telesecundarias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned alumnos_prioritarios_telesecundarias
    **/
    _count?: true | Alumnos_prioritarios_telesecundariaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Alumnos_prioritarios_telesecundariaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Alumnos_prioritarios_telesecundariaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Alumnos_prioritarios_telesecundariaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Alumnos_prioritarios_telesecundariaMaxAggregateInputType;
};
export type GetAlumnos_prioritarios_telesecundariaAggregateType<T extends Alumnos_prioritarios_telesecundariaAggregateArgs> = {
    [P in keyof T & keyof AggregateAlumnos_prioritarios_telesecundaria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlumnos_prioritarios_telesecundaria[P]> : Prisma.GetScalarType<T[P], AggregateAlumnos_prioritarios_telesecundaria[P]>;
};
export type alumnos_prioritarios_telesecundariaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.alumnos_prioritarios_telesecundariaWhereInput;
    orderBy?: Prisma.alumnos_prioritarios_telesecundariaOrderByWithAggregationInput | Prisma.alumnos_prioritarios_telesecundariaOrderByWithAggregationInput[];
    by: Prisma.Alumnos_prioritarios_telesecundariaScalarFieldEnum[] | Prisma.Alumnos_prioritarios_telesecundariaScalarFieldEnum;
    having?: Prisma.alumnos_prioritarios_telesecundariaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Alumnos_prioritarios_telesecundariaCountAggregateInputType | true;
    _avg?: Alumnos_prioritarios_telesecundariaAvgAggregateInputType;
    _sum?: Alumnos_prioritarios_telesecundariaSumAggregateInputType;
    _min?: Alumnos_prioritarios_telesecundariaMinAggregateInputType;
    _max?: Alumnos_prioritarios_telesecundariaMaxAggregateInputType;
};
export type Alumnos_prioritarios_telesecundariaGroupByOutputType = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal;
    NOMALUMNO: string;
    MATR_EDO: string;
    CCT: string;
    ID_TURNO: runtime.Decimal;
    CONTROL: string;
    ID_NIVEL: runtime.Decimal;
    opcion_educativa: string;
    TURNO: string;
    GRADO: runtime.Decimal;
    SEXO: string;
    GRUPO: string;
    ORIGEN_ARCHIVO: string;
    ORIGEN_HOJA: string;
    SA6DE1C5A1: runtime.Decimal;
    SA6DE1C5B1: runtime.Decimal;
    SA6DE1C5C1: runtime.Decimal;
    SA6DE2C4A1: runtime.Decimal;
    SA6EE1C4A1: runtime.Decimal;
    SA6EE1C4B1: runtime.Decimal;
    SA6EE2C3A1: runtime.Decimal;
    SA6EE2C3B1: runtime.Decimal;
    SA6EE2C3C1: runtime.Decimal;
    SA6LE1C3A1: runtime.Decimal;
    SA6LE2C1A1: runtime.Decimal;
    SA6LE2C1A2: runtime.Decimal;
    SA6SE1C1A1: runtime.Decimal;
    SA6SE1C1A2: runtime.Decimal;
    SA6SE1C1A3: runtime.Decimal;
    SA6SE1C2A1: runtime.Decimal;
    SA6SE1C2A2: runtime.Decimal;
    SA6SE2C2A1: runtime.Decimal;
    SA6SE2C2A2: runtime.Decimal;
    SA6SE2C2B1: runtime.Decimal;
    SA6SE2C2B2: runtime.Decimal;
    SB6DE1C4A1: runtime.Decimal;
    SB6DE1C4A2: runtime.Decimal;
    SB6DE2C4A1: runtime.Decimal;
    SB6DE2C4A2: runtime.Decimal;
    SB6EE1C3A1: runtime.Decimal;
    SB6EE1C3A2: runtime.Decimal;
    SB6EE2C3A1: runtime.Decimal;
    SB6EE2C3A2: runtime.Decimal;
    SB6EE2C3A3: runtime.Decimal;
    SB6LE1C1A1: runtime.Decimal;
    SB6LE1C1A2: runtime.Decimal;
    SB6LE1C1A3: runtime.Decimal;
    SB6LE2C1A1: runtime.Decimal;
    SB6LE2C1A2: runtime.Decimal;
    SB6LE2C1A3: runtime.Decimal;
    SB6SE1C2A1: runtime.Decimal;
    SB6SE1C2A2: runtime.Decimal;
    SB6SE1C2B1: runtime.Decimal;
    SB6SE2C2A1: runtime.Decimal;
    SB6SE2C2A2: runtime.Decimal;
    NIVEL_ETICA: string;
    NIVEL_HUMANO: string;
    NIVEL_LENGUAJES: string;
    NIVEL_SABERES: string;
    id: number;
    _count: Alumnos_prioritarios_telesecundariaCountAggregateOutputType | null;
    _avg: Alumnos_prioritarios_telesecundariaAvgAggregateOutputType | null;
    _sum: Alumnos_prioritarios_telesecundariaSumAggregateOutputType | null;
    _min: Alumnos_prioritarios_telesecundariaMinAggregateOutputType | null;
    _max: Alumnos_prioritarios_telesecundariaMaxAggregateOutputType | null;
};
type GetAlumnos_prioritarios_telesecundariaGroupByPayload<T extends alumnos_prioritarios_telesecundariaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Alumnos_prioritarios_telesecundariaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Alumnos_prioritarios_telesecundariaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Alumnos_prioritarios_telesecundariaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Alumnos_prioritarios_telesecundariaGroupByOutputType[P]>;
}>>;
export type alumnos_prioritarios_telesecundariaWhereInput = {
    AND?: Prisma.alumnos_prioritarios_telesecundariaWhereInput | Prisma.alumnos_prioritarios_telesecundariaWhereInput[];
    OR?: Prisma.alumnos_prioritarios_telesecundariaWhereInput[];
    NOT?: Prisma.alumnos_prioritarios_telesecundariaWhereInput | Prisma.alumnos_prioritarios_telesecundariaWhereInput[];
    IDENTIFICACION?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ENT?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    CVL_ALUMN?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    MATR_EDO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    CCT?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ID_TURNO?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ID_NIVEL?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    TURNO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    GRADO?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    GRUPO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ORIGEN_HOJA?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    SA6DE1C5A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_HUMANO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_LENGUAJES?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_SABERES?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    id?: Prisma.IntFilter<"alumnos_prioritarios_telesecundaria"> | number;
};
export type alumnos_prioritarios_telesecundariaOrderByWithRelationInput = {
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
    SA6DE1C5A1?: Prisma.SortOrder;
    SA6DE1C5B1?: Prisma.SortOrder;
    SA6DE1C5C1?: Prisma.SortOrder;
    SA6DE2C4A1?: Prisma.SortOrder;
    SA6EE1C4A1?: Prisma.SortOrder;
    SA6EE1C4B1?: Prisma.SortOrder;
    SA6EE2C3A1?: Prisma.SortOrder;
    SA6EE2C3B1?: Prisma.SortOrder;
    SA6EE2C3C1?: Prisma.SortOrder;
    SA6LE1C3A1?: Prisma.SortOrder;
    SA6LE2C1A1?: Prisma.SortOrder;
    SA6LE2C1A2?: Prisma.SortOrder;
    SA6SE1C1A1?: Prisma.SortOrder;
    SA6SE1C1A2?: Prisma.SortOrder;
    SA6SE1C1A3?: Prisma.SortOrder;
    SA6SE1C2A1?: Prisma.SortOrder;
    SA6SE1C2A2?: Prisma.SortOrder;
    SA6SE2C2A1?: Prisma.SortOrder;
    SA6SE2C2A2?: Prisma.SortOrder;
    SA6SE2C2B1?: Prisma.SortOrder;
    SA6SE2C2B2?: Prisma.SortOrder;
    SB6DE1C4A1?: Prisma.SortOrder;
    SB6DE1C4A2?: Prisma.SortOrder;
    SB6DE2C4A1?: Prisma.SortOrder;
    SB6DE2C4A2?: Prisma.SortOrder;
    SB6EE1C3A1?: Prisma.SortOrder;
    SB6EE1C3A2?: Prisma.SortOrder;
    SB6EE2C3A1?: Prisma.SortOrder;
    SB6EE2C3A2?: Prisma.SortOrder;
    SB6EE2C3A3?: Prisma.SortOrder;
    SB6LE1C1A1?: Prisma.SortOrder;
    SB6LE1C1A2?: Prisma.SortOrder;
    SB6LE1C1A3?: Prisma.SortOrder;
    SB6LE2C1A1?: Prisma.SortOrder;
    SB6LE2C1A2?: Prisma.SortOrder;
    SB6LE2C1A3?: Prisma.SortOrder;
    SB6SE1C2A1?: Prisma.SortOrder;
    SB6SE1C2A2?: Prisma.SortOrder;
    SB6SE1C2B1?: Prisma.SortOrder;
    SB6SE2C2A1?: Prisma.SortOrder;
    SB6SE2C2A2?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_telesecundariaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.alumnos_prioritarios_telesecundariaWhereInput | Prisma.alumnos_prioritarios_telesecundariaWhereInput[];
    OR?: Prisma.alumnos_prioritarios_telesecundariaWhereInput[];
    NOT?: Prisma.alumnos_prioritarios_telesecundariaWhereInput | Prisma.alumnos_prioritarios_telesecundariaWhereInput[];
    IDENTIFICACION?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ENT?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    CVL_ALUMN?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    MATR_EDO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    CCT?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ID_TURNO?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ID_NIVEL?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    TURNO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    GRADO?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    GRUPO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ORIGEN_HOJA?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    SA6DE1C5A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_HUMANO?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_LENGUAJES?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_SABERES?: Prisma.StringFilter<"alumnos_prioritarios_telesecundaria"> | string;
}, "id">;
export type alumnos_prioritarios_telesecundariaOrderByWithAggregationInput = {
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
    SA6DE1C5A1?: Prisma.SortOrder;
    SA6DE1C5B1?: Prisma.SortOrder;
    SA6DE1C5C1?: Prisma.SortOrder;
    SA6DE2C4A1?: Prisma.SortOrder;
    SA6EE1C4A1?: Prisma.SortOrder;
    SA6EE1C4B1?: Prisma.SortOrder;
    SA6EE2C3A1?: Prisma.SortOrder;
    SA6EE2C3B1?: Prisma.SortOrder;
    SA6EE2C3C1?: Prisma.SortOrder;
    SA6LE1C3A1?: Prisma.SortOrder;
    SA6LE2C1A1?: Prisma.SortOrder;
    SA6LE2C1A2?: Prisma.SortOrder;
    SA6SE1C1A1?: Prisma.SortOrder;
    SA6SE1C1A2?: Prisma.SortOrder;
    SA6SE1C1A3?: Prisma.SortOrder;
    SA6SE1C2A1?: Prisma.SortOrder;
    SA6SE1C2A2?: Prisma.SortOrder;
    SA6SE2C2A1?: Prisma.SortOrder;
    SA6SE2C2A2?: Prisma.SortOrder;
    SA6SE2C2B1?: Prisma.SortOrder;
    SA6SE2C2B2?: Prisma.SortOrder;
    SB6DE1C4A1?: Prisma.SortOrder;
    SB6DE1C4A2?: Prisma.SortOrder;
    SB6DE2C4A1?: Prisma.SortOrder;
    SB6DE2C4A2?: Prisma.SortOrder;
    SB6EE1C3A1?: Prisma.SortOrder;
    SB6EE1C3A2?: Prisma.SortOrder;
    SB6EE2C3A1?: Prisma.SortOrder;
    SB6EE2C3A2?: Prisma.SortOrder;
    SB6EE2C3A3?: Prisma.SortOrder;
    SB6LE1C1A1?: Prisma.SortOrder;
    SB6LE1C1A2?: Prisma.SortOrder;
    SB6LE1C1A3?: Prisma.SortOrder;
    SB6LE2C1A1?: Prisma.SortOrder;
    SB6LE2C1A2?: Prisma.SortOrder;
    SB6LE2C1A3?: Prisma.SortOrder;
    SB6SE1C2A1?: Prisma.SortOrder;
    SB6SE1C2A2?: Prisma.SortOrder;
    SB6SE1C2B1?: Prisma.SortOrder;
    SB6SE2C2A1?: Prisma.SortOrder;
    SB6SE2C2A2?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    _count?: Prisma.alumnos_prioritarios_telesecundariaCountOrderByAggregateInput;
    _avg?: Prisma.alumnos_prioritarios_telesecundariaAvgOrderByAggregateInput;
    _max?: Prisma.alumnos_prioritarios_telesecundariaMaxOrderByAggregateInput;
    _min?: Prisma.alumnos_prioritarios_telesecundariaMinOrderByAggregateInput;
    _sum?: Prisma.alumnos_prioritarios_telesecundariaSumOrderByAggregateInput;
};
export type alumnos_prioritarios_telesecundariaScalarWhereWithAggregatesInput = {
    AND?: Prisma.alumnos_prioritarios_telesecundariaScalarWhereWithAggregatesInput | Prisma.alumnos_prioritarios_telesecundariaScalarWhereWithAggregatesInput[];
    OR?: Prisma.alumnos_prioritarios_telesecundariaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.alumnos_prioritarios_telesecundariaScalarWhereWithAggregatesInput | Prisma.alumnos_prioritarios_telesecundariaScalarWhereWithAggregatesInput[];
    IDENTIFICACION?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ENT?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    CVL_ALUMN?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    MATR_EDO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    CCT?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ID_TURNO?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ID_NIVEL?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    TURNO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    GRADO?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    GRUPO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ORIGEN_ARCHIVO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    ORIGEN_HOJA?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    SA6DE1C5A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_HUMANO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_LENGUAJES?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    NIVEL_SABERES?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | string;
    id?: Prisma.IntWithAggregatesFilter<"alumnos_prioritarios_telesecundaria"> | number;
};
export type alumnos_prioritarios_telesecundariaCreateInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO: string;
    CCT: string;
    ID_TURNO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL: string;
    ID_NIVEL: runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO: string;
    GRUPO: string;
    ORIGEN_ARCHIVO: string;
    ORIGEN_HOJA: string;
    SA6DE1C5A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA: string;
    NIVEL_HUMANO: string;
    NIVEL_LENGUAJES: string;
    NIVEL_SABERES: string;
};
export type alumnos_prioritarios_telesecundariaUncheckedCreateInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO: string;
    CCT: string;
    ID_TURNO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL: string;
    ID_NIVEL: runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO: string;
    GRUPO: string;
    ORIGEN_ARCHIVO: string;
    ORIGEN_HOJA: string;
    SA6DE1C5A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA: string;
    NIVEL_HUMANO: string;
    NIVEL_LENGUAJES: string;
    NIVEL_SABERES: string;
    id?: number;
};
export type alumnos_prioritarios_telesecundariaUpdateInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.StringFieldUpdateOperationsInput | string;
    CCT?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_TURNO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_NIVEL?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_ARCHIVO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_HOJA?: Prisma.StringFieldUpdateOperationsInput | string;
    SA6DE1C5A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_HUMANO?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_LENGUAJES?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_SABERES?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type alumnos_prioritarios_telesecundariaUncheckedUpdateInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.StringFieldUpdateOperationsInput | string;
    CCT?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_TURNO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_NIVEL?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_ARCHIVO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_HOJA?: Prisma.StringFieldUpdateOperationsInput | string;
    SA6DE1C5A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_HUMANO?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_LENGUAJES?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_SABERES?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type alumnos_prioritarios_telesecundariaCreateManyInput = {
    IDENTIFICACION: string;
    ENT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    CVL_ALUMN: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO: string;
    MATR_EDO: string;
    CCT: string;
    ID_TURNO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL: string;
    ID_NIVEL: runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO: string;
    GRUPO: string;
    ORIGEN_ARCHIVO: string;
    ORIGEN_HOJA: string;
    SA6DE1C5A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA: string;
    NIVEL_HUMANO: string;
    NIVEL_LENGUAJES: string;
    NIVEL_SABERES: string;
    id?: number;
};
export type alumnos_prioritarios_telesecundariaUpdateManyMutationInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.StringFieldUpdateOperationsInput | string;
    CCT?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_TURNO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_NIVEL?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_ARCHIVO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_HOJA?: Prisma.StringFieldUpdateOperationsInput | string;
    SA6DE1C5A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_HUMANO?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_LENGUAJES?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_SABERES?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type alumnos_prioritarios_telesecundariaUncheckedUpdateManyInput = {
    IDENTIFICACION?: Prisma.StringFieldUpdateOperationsInput | string;
    ENT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    CVL_ALUMN?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NOMALUMNO?: Prisma.StringFieldUpdateOperationsInput | string;
    MATR_EDO?: Prisma.StringFieldUpdateOperationsInput | string;
    CCT?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_TURNO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_NIVEL?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SEXO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_ARCHIVO?: Prisma.StringFieldUpdateOperationsInput | string;
    ORIGEN_HOJA?: Prisma.StringFieldUpdateOperationsInput | string;
    SA6DE1C5A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE1C5C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE1C4B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6EE2C3C1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6LE2C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SA6SE2C2B2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE1C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6DE2C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE1C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6EE2C3A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE1C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6LE2C1A3?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE1C2B1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    SB6SE2C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NIVEL_ETICA?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_HUMANO?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_LENGUAJES?: Prisma.StringFieldUpdateOperationsInput | string;
    NIVEL_SABERES?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type alumnos_prioritarios_telesecundariaCountOrderByAggregateInput = {
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
    SA6DE1C5A1?: Prisma.SortOrder;
    SA6DE1C5B1?: Prisma.SortOrder;
    SA6DE1C5C1?: Prisma.SortOrder;
    SA6DE2C4A1?: Prisma.SortOrder;
    SA6EE1C4A1?: Prisma.SortOrder;
    SA6EE1C4B1?: Prisma.SortOrder;
    SA6EE2C3A1?: Prisma.SortOrder;
    SA6EE2C3B1?: Prisma.SortOrder;
    SA6EE2C3C1?: Prisma.SortOrder;
    SA6LE1C3A1?: Prisma.SortOrder;
    SA6LE2C1A1?: Prisma.SortOrder;
    SA6LE2C1A2?: Prisma.SortOrder;
    SA6SE1C1A1?: Prisma.SortOrder;
    SA6SE1C1A2?: Prisma.SortOrder;
    SA6SE1C1A3?: Prisma.SortOrder;
    SA6SE1C2A1?: Prisma.SortOrder;
    SA6SE1C2A2?: Prisma.SortOrder;
    SA6SE2C2A1?: Prisma.SortOrder;
    SA6SE2C2A2?: Prisma.SortOrder;
    SA6SE2C2B1?: Prisma.SortOrder;
    SA6SE2C2B2?: Prisma.SortOrder;
    SB6DE1C4A1?: Prisma.SortOrder;
    SB6DE1C4A2?: Prisma.SortOrder;
    SB6DE2C4A1?: Prisma.SortOrder;
    SB6DE2C4A2?: Prisma.SortOrder;
    SB6EE1C3A1?: Prisma.SortOrder;
    SB6EE1C3A2?: Prisma.SortOrder;
    SB6EE2C3A1?: Prisma.SortOrder;
    SB6EE2C3A2?: Prisma.SortOrder;
    SB6EE2C3A3?: Prisma.SortOrder;
    SB6LE1C1A1?: Prisma.SortOrder;
    SB6LE1C1A2?: Prisma.SortOrder;
    SB6LE1C1A3?: Prisma.SortOrder;
    SB6LE2C1A1?: Prisma.SortOrder;
    SB6LE2C1A2?: Prisma.SortOrder;
    SB6LE2C1A3?: Prisma.SortOrder;
    SB6SE1C2A1?: Prisma.SortOrder;
    SB6SE1C2A2?: Prisma.SortOrder;
    SB6SE1C2B1?: Prisma.SortOrder;
    SB6SE2C2A1?: Prisma.SortOrder;
    SB6SE2C2A2?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_telesecundariaAvgOrderByAggregateInput = {
    ENT?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    ID_NIVEL?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SA6DE1C5A1?: Prisma.SortOrder;
    SA6DE1C5B1?: Prisma.SortOrder;
    SA6DE1C5C1?: Prisma.SortOrder;
    SA6DE2C4A1?: Prisma.SortOrder;
    SA6EE1C4A1?: Prisma.SortOrder;
    SA6EE1C4B1?: Prisma.SortOrder;
    SA6EE2C3A1?: Prisma.SortOrder;
    SA6EE2C3B1?: Prisma.SortOrder;
    SA6EE2C3C1?: Prisma.SortOrder;
    SA6LE1C3A1?: Prisma.SortOrder;
    SA6LE2C1A1?: Prisma.SortOrder;
    SA6LE2C1A2?: Prisma.SortOrder;
    SA6SE1C1A1?: Prisma.SortOrder;
    SA6SE1C1A2?: Prisma.SortOrder;
    SA6SE1C1A3?: Prisma.SortOrder;
    SA6SE1C2A1?: Prisma.SortOrder;
    SA6SE1C2A2?: Prisma.SortOrder;
    SA6SE2C2A1?: Prisma.SortOrder;
    SA6SE2C2A2?: Prisma.SortOrder;
    SA6SE2C2B1?: Prisma.SortOrder;
    SA6SE2C2B2?: Prisma.SortOrder;
    SB6DE1C4A1?: Prisma.SortOrder;
    SB6DE1C4A2?: Prisma.SortOrder;
    SB6DE2C4A1?: Prisma.SortOrder;
    SB6DE2C4A2?: Prisma.SortOrder;
    SB6EE1C3A1?: Prisma.SortOrder;
    SB6EE1C3A2?: Prisma.SortOrder;
    SB6EE2C3A1?: Prisma.SortOrder;
    SB6EE2C3A2?: Prisma.SortOrder;
    SB6EE2C3A3?: Prisma.SortOrder;
    SB6LE1C1A1?: Prisma.SortOrder;
    SB6LE1C1A2?: Prisma.SortOrder;
    SB6LE1C1A3?: Prisma.SortOrder;
    SB6LE2C1A1?: Prisma.SortOrder;
    SB6LE2C1A2?: Prisma.SortOrder;
    SB6LE2C1A3?: Prisma.SortOrder;
    SB6SE1C2A1?: Prisma.SortOrder;
    SB6SE1C2A2?: Prisma.SortOrder;
    SB6SE1C2B1?: Prisma.SortOrder;
    SB6SE2C2A1?: Prisma.SortOrder;
    SB6SE2C2A2?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_telesecundariaMaxOrderByAggregateInput = {
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
    SA6DE1C5A1?: Prisma.SortOrder;
    SA6DE1C5B1?: Prisma.SortOrder;
    SA6DE1C5C1?: Prisma.SortOrder;
    SA6DE2C4A1?: Prisma.SortOrder;
    SA6EE1C4A1?: Prisma.SortOrder;
    SA6EE1C4B1?: Prisma.SortOrder;
    SA6EE2C3A1?: Prisma.SortOrder;
    SA6EE2C3B1?: Prisma.SortOrder;
    SA6EE2C3C1?: Prisma.SortOrder;
    SA6LE1C3A1?: Prisma.SortOrder;
    SA6LE2C1A1?: Prisma.SortOrder;
    SA6LE2C1A2?: Prisma.SortOrder;
    SA6SE1C1A1?: Prisma.SortOrder;
    SA6SE1C1A2?: Prisma.SortOrder;
    SA6SE1C1A3?: Prisma.SortOrder;
    SA6SE1C2A1?: Prisma.SortOrder;
    SA6SE1C2A2?: Prisma.SortOrder;
    SA6SE2C2A1?: Prisma.SortOrder;
    SA6SE2C2A2?: Prisma.SortOrder;
    SA6SE2C2B1?: Prisma.SortOrder;
    SA6SE2C2B2?: Prisma.SortOrder;
    SB6DE1C4A1?: Prisma.SortOrder;
    SB6DE1C4A2?: Prisma.SortOrder;
    SB6DE2C4A1?: Prisma.SortOrder;
    SB6DE2C4A2?: Prisma.SortOrder;
    SB6EE1C3A1?: Prisma.SortOrder;
    SB6EE1C3A2?: Prisma.SortOrder;
    SB6EE2C3A1?: Prisma.SortOrder;
    SB6EE2C3A2?: Prisma.SortOrder;
    SB6EE2C3A3?: Prisma.SortOrder;
    SB6LE1C1A1?: Prisma.SortOrder;
    SB6LE1C1A2?: Prisma.SortOrder;
    SB6LE1C1A3?: Prisma.SortOrder;
    SB6LE2C1A1?: Prisma.SortOrder;
    SB6LE2C1A2?: Prisma.SortOrder;
    SB6LE2C1A3?: Prisma.SortOrder;
    SB6SE1C2A1?: Prisma.SortOrder;
    SB6SE1C2A2?: Prisma.SortOrder;
    SB6SE1C2B1?: Prisma.SortOrder;
    SB6SE2C2A1?: Prisma.SortOrder;
    SB6SE2C2A2?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_telesecundariaMinOrderByAggregateInput = {
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
    SA6DE1C5A1?: Prisma.SortOrder;
    SA6DE1C5B1?: Prisma.SortOrder;
    SA6DE1C5C1?: Prisma.SortOrder;
    SA6DE2C4A1?: Prisma.SortOrder;
    SA6EE1C4A1?: Prisma.SortOrder;
    SA6EE1C4B1?: Prisma.SortOrder;
    SA6EE2C3A1?: Prisma.SortOrder;
    SA6EE2C3B1?: Prisma.SortOrder;
    SA6EE2C3C1?: Prisma.SortOrder;
    SA6LE1C3A1?: Prisma.SortOrder;
    SA6LE2C1A1?: Prisma.SortOrder;
    SA6LE2C1A2?: Prisma.SortOrder;
    SA6SE1C1A1?: Prisma.SortOrder;
    SA6SE1C1A2?: Prisma.SortOrder;
    SA6SE1C1A3?: Prisma.SortOrder;
    SA6SE1C2A1?: Prisma.SortOrder;
    SA6SE1C2A2?: Prisma.SortOrder;
    SA6SE2C2A1?: Prisma.SortOrder;
    SA6SE2C2A2?: Prisma.SortOrder;
    SA6SE2C2B1?: Prisma.SortOrder;
    SA6SE2C2B2?: Prisma.SortOrder;
    SB6DE1C4A1?: Prisma.SortOrder;
    SB6DE1C4A2?: Prisma.SortOrder;
    SB6DE2C4A1?: Prisma.SortOrder;
    SB6DE2C4A2?: Prisma.SortOrder;
    SB6EE1C3A1?: Prisma.SortOrder;
    SB6EE1C3A2?: Prisma.SortOrder;
    SB6EE2C3A1?: Prisma.SortOrder;
    SB6EE2C3A2?: Prisma.SortOrder;
    SB6EE2C3A3?: Prisma.SortOrder;
    SB6LE1C1A1?: Prisma.SortOrder;
    SB6LE1C1A2?: Prisma.SortOrder;
    SB6LE1C1A3?: Prisma.SortOrder;
    SB6LE2C1A1?: Prisma.SortOrder;
    SB6LE2C1A2?: Prisma.SortOrder;
    SB6LE2C1A3?: Prisma.SortOrder;
    SB6SE1C2A1?: Prisma.SortOrder;
    SB6SE1C2A2?: Prisma.SortOrder;
    SB6SE1C2B1?: Prisma.SortOrder;
    SB6SE2C2A1?: Prisma.SortOrder;
    SB6SE2C2A2?: Prisma.SortOrder;
    NIVEL_ETICA?: Prisma.SortOrder;
    NIVEL_HUMANO?: Prisma.SortOrder;
    NIVEL_LENGUAJES?: Prisma.SortOrder;
    NIVEL_SABERES?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_telesecundariaSumOrderByAggregateInput = {
    ENT?: Prisma.SortOrder;
    CVL_ALUMN?: Prisma.SortOrder;
    ID_TURNO?: Prisma.SortOrder;
    ID_NIVEL?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SA6DE1C5A1?: Prisma.SortOrder;
    SA6DE1C5B1?: Prisma.SortOrder;
    SA6DE1C5C1?: Prisma.SortOrder;
    SA6DE2C4A1?: Prisma.SortOrder;
    SA6EE1C4A1?: Prisma.SortOrder;
    SA6EE1C4B1?: Prisma.SortOrder;
    SA6EE2C3A1?: Prisma.SortOrder;
    SA6EE2C3B1?: Prisma.SortOrder;
    SA6EE2C3C1?: Prisma.SortOrder;
    SA6LE1C3A1?: Prisma.SortOrder;
    SA6LE2C1A1?: Prisma.SortOrder;
    SA6LE2C1A2?: Prisma.SortOrder;
    SA6SE1C1A1?: Prisma.SortOrder;
    SA6SE1C1A2?: Prisma.SortOrder;
    SA6SE1C1A3?: Prisma.SortOrder;
    SA6SE1C2A1?: Prisma.SortOrder;
    SA6SE1C2A2?: Prisma.SortOrder;
    SA6SE2C2A1?: Prisma.SortOrder;
    SA6SE2C2A2?: Prisma.SortOrder;
    SA6SE2C2B1?: Prisma.SortOrder;
    SA6SE2C2B2?: Prisma.SortOrder;
    SB6DE1C4A1?: Prisma.SortOrder;
    SB6DE1C4A2?: Prisma.SortOrder;
    SB6DE2C4A1?: Prisma.SortOrder;
    SB6DE2C4A2?: Prisma.SortOrder;
    SB6EE1C3A1?: Prisma.SortOrder;
    SB6EE1C3A2?: Prisma.SortOrder;
    SB6EE2C3A1?: Prisma.SortOrder;
    SB6EE2C3A2?: Prisma.SortOrder;
    SB6EE2C3A3?: Prisma.SortOrder;
    SB6LE1C1A1?: Prisma.SortOrder;
    SB6LE1C1A2?: Prisma.SortOrder;
    SB6LE1C1A3?: Prisma.SortOrder;
    SB6LE2C1A1?: Prisma.SortOrder;
    SB6LE2C1A2?: Prisma.SortOrder;
    SB6LE2C1A3?: Prisma.SortOrder;
    SB6SE1C2A1?: Prisma.SortOrder;
    SB6SE1C2A2?: Prisma.SortOrder;
    SB6SE1C2B1?: Prisma.SortOrder;
    SB6SE2C2A1?: Prisma.SortOrder;
    SB6SE2C2A2?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_telesecundariaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
    SA6DE1C5A1?: boolean;
    SA6DE1C5B1?: boolean;
    SA6DE1C5C1?: boolean;
    SA6DE2C4A1?: boolean;
    SA6EE1C4A1?: boolean;
    SA6EE1C4B1?: boolean;
    SA6EE2C3A1?: boolean;
    SA6EE2C3B1?: boolean;
    SA6EE2C3C1?: boolean;
    SA6LE1C3A1?: boolean;
    SA6LE2C1A1?: boolean;
    SA6LE2C1A2?: boolean;
    SA6SE1C1A1?: boolean;
    SA6SE1C1A2?: boolean;
    SA6SE1C1A3?: boolean;
    SA6SE1C2A1?: boolean;
    SA6SE1C2A2?: boolean;
    SA6SE2C2A1?: boolean;
    SA6SE2C2A2?: boolean;
    SA6SE2C2B1?: boolean;
    SA6SE2C2B2?: boolean;
    SB6DE1C4A1?: boolean;
    SB6DE1C4A2?: boolean;
    SB6DE2C4A1?: boolean;
    SB6DE2C4A2?: boolean;
    SB6EE1C3A1?: boolean;
    SB6EE1C3A2?: boolean;
    SB6EE2C3A1?: boolean;
    SB6EE2C3A2?: boolean;
    SB6EE2C3A3?: boolean;
    SB6LE1C1A1?: boolean;
    SB6LE1C1A2?: boolean;
    SB6LE1C1A3?: boolean;
    SB6LE2C1A1?: boolean;
    SB6LE2C1A2?: boolean;
    SB6LE2C1A3?: boolean;
    SB6SE1C2A1?: boolean;
    SB6SE1C2A2?: boolean;
    SB6SE1C2B1?: boolean;
    SB6SE2C2A1?: boolean;
    SB6SE2C2A2?: boolean;
    NIVEL_ETICA?: boolean;
    NIVEL_HUMANO?: boolean;
    NIVEL_LENGUAJES?: boolean;
    NIVEL_SABERES?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_telesecundaria"]>;
export type alumnos_prioritarios_telesecundariaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
    SA6DE1C5A1?: boolean;
    SA6DE1C5B1?: boolean;
    SA6DE1C5C1?: boolean;
    SA6DE2C4A1?: boolean;
    SA6EE1C4A1?: boolean;
    SA6EE1C4B1?: boolean;
    SA6EE2C3A1?: boolean;
    SA6EE2C3B1?: boolean;
    SA6EE2C3C1?: boolean;
    SA6LE1C3A1?: boolean;
    SA6LE2C1A1?: boolean;
    SA6LE2C1A2?: boolean;
    SA6SE1C1A1?: boolean;
    SA6SE1C1A2?: boolean;
    SA6SE1C1A3?: boolean;
    SA6SE1C2A1?: boolean;
    SA6SE1C2A2?: boolean;
    SA6SE2C2A1?: boolean;
    SA6SE2C2A2?: boolean;
    SA6SE2C2B1?: boolean;
    SA6SE2C2B2?: boolean;
    SB6DE1C4A1?: boolean;
    SB6DE1C4A2?: boolean;
    SB6DE2C4A1?: boolean;
    SB6DE2C4A2?: boolean;
    SB6EE1C3A1?: boolean;
    SB6EE1C3A2?: boolean;
    SB6EE2C3A1?: boolean;
    SB6EE2C3A2?: boolean;
    SB6EE2C3A3?: boolean;
    SB6LE1C1A1?: boolean;
    SB6LE1C1A2?: boolean;
    SB6LE1C1A3?: boolean;
    SB6LE2C1A1?: boolean;
    SB6LE2C1A2?: boolean;
    SB6LE2C1A3?: boolean;
    SB6SE1C2A1?: boolean;
    SB6SE1C2A2?: boolean;
    SB6SE1C2B1?: boolean;
    SB6SE2C2A1?: boolean;
    SB6SE2C2A2?: boolean;
    NIVEL_ETICA?: boolean;
    NIVEL_HUMANO?: boolean;
    NIVEL_LENGUAJES?: boolean;
    NIVEL_SABERES?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_telesecundaria"]>;
export type alumnos_prioritarios_telesecundariaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
    SA6DE1C5A1?: boolean;
    SA6DE1C5B1?: boolean;
    SA6DE1C5C1?: boolean;
    SA6DE2C4A1?: boolean;
    SA6EE1C4A1?: boolean;
    SA6EE1C4B1?: boolean;
    SA6EE2C3A1?: boolean;
    SA6EE2C3B1?: boolean;
    SA6EE2C3C1?: boolean;
    SA6LE1C3A1?: boolean;
    SA6LE2C1A1?: boolean;
    SA6LE2C1A2?: boolean;
    SA6SE1C1A1?: boolean;
    SA6SE1C1A2?: boolean;
    SA6SE1C1A3?: boolean;
    SA6SE1C2A1?: boolean;
    SA6SE1C2A2?: boolean;
    SA6SE2C2A1?: boolean;
    SA6SE2C2A2?: boolean;
    SA6SE2C2B1?: boolean;
    SA6SE2C2B2?: boolean;
    SB6DE1C4A1?: boolean;
    SB6DE1C4A2?: boolean;
    SB6DE2C4A1?: boolean;
    SB6DE2C4A2?: boolean;
    SB6EE1C3A1?: boolean;
    SB6EE1C3A2?: boolean;
    SB6EE2C3A1?: boolean;
    SB6EE2C3A2?: boolean;
    SB6EE2C3A3?: boolean;
    SB6LE1C1A1?: boolean;
    SB6LE1C1A2?: boolean;
    SB6LE1C1A3?: boolean;
    SB6LE2C1A1?: boolean;
    SB6LE2C1A2?: boolean;
    SB6LE2C1A3?: boolean;
    SB6SE1C2A1?: boolean;
    SB6SE1C2A2?: boolean;
    SB6SE1C2B1?: boolean;
    SB6SE2C2A1?: boolean;
    SB6SE2C2A2?: boolean;
    NIVEL_ETICA?: boolean;
    NIVEL_HUMANO?: boolean;
    NIVEL_LENGUAJES?: boolean;
    NIVEL_SABERES?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_telesecundaria"]>;
export type alumnos_prioritarios_telesecundariaSelectScalar = {
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
    SA6DE1C5A1?: boolean;
    SA6DE1C5B1?: boolean;
    SA6DE1C5C1?: boolean;
    SA6DE2C4A1?: boolean;
    SA6EE1C4A1?: boolean;
    SA6EE1C4B1?: boolean;
    SA6EE2C3A1?: boolean;
    SA6EE2C3B1?: boolean;
    SA6EE2C3C1?: boolean;
    SA6LE1C3A1?: boolean;
    SA6LE2C1A1?: boolean;
    SA6LE2C1A2?: boolean;
    SA6SE1C1A1?: boolean;
    SA6SE1C1A2?: boolean;
    SA6SE1C1A3?: boolean;
    SA6SE1C2A1?: boolean;
    SA6SE1C2A2?: boolean;
    SA6SE2C2A1?: boolean;
    SA6SE2C2A2?: boolean;
    SA6SE2C2B1?: boolean;
    SA6SE2C2B2?: boolean;
    SB6DE1C4A1?: boolean;
    SB6DE1C4A2?: boolean;
    SB6DE2C4A1?: boolean;
    SB6DE2C4A2?: boolean;
    SB6EE1C3A1?: boolean;
    SB6EE1C3A2?: boolean;
    SB6EE2C3A1?: boolean;
    SB6EE2C3A2?: boolean;
    SB6EE2C3A3?: boolean;
    SB6LE1C1A1?: boolean;
    SB6LE1C1A2?: boolean;
    SB6LE1C1A3?: boolean;
    SB6LE2C1A1?: boolean;
    SB6LE2C1A2?: boolean;
    SB6LE2C1A3?: boolean;
    SB6SE1C2A1?: boolean;
    SB6SE1C2A2?: boolean;
    SB6SE1C2B1?: boolean;
    SB6SE2C2A1?: boolean;
    SB6SE2C2A2?: boolean;
    NIVEL_ETICA?: boolean;
    NIVEL_HUMANO?: boolean;
    NIVEL_LENGUAJES?: boolean;
    NIVEL_SABERES?: boolean;
    id?: boolean;
};
export type alumnos_prioritarios_telesecundariaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"IDENTIFICACION" | "ENT" | "LLAVE" | "CVL_ALUMN" | "NOMALUMNO" | "MATR_EDO" | "CCT" | "ID_TURNO" | "CONTROL" | "ID_NIVEL" | "opcion_educativa" | "TURNO" | "GRADO" | "SEXO" | "GRUPO" | "ORIGEN_ARCHIVO" | "ORIGEN_HOJA" | "SA6DE1C5A1" | "SA6DE1C5B1" | "SA6DE1C5C1" | "SA6DE2C4A1" | "SA6EE1C4A1" | "SA6EE1C4B1" | "SA6EE2C3A1" | "SA6EE2C3B1" | "SA6EE2C3C1" | "SA6LE1C3A1" | "SA6LE2C1A1" | "SA6LE2C1A2" | "SA6SE1C1A1" | "SA6SE1C1A2" | "SA6SE1C1A3" | "SA6SE1C2A1" | "SA6SE1C2A2" | "SA6SE2C2A1" | "SA6SE2C2A2" | "SA6SE2C2B1" | "SA6SE2C2B2" | "SB6DE1C4A1" | "SB6DE1C4A2" | "SB6DE2C4A1" | "SB6DE2C4A2" | "SB6EE1C3A1" | "SB6EE1C3A2" | "SB6EE2C3A1" | "SB6EE2C3A2" | "SB6EE2C3A3" | "SB6LE1C1A1" | "SB6LE1C1A2" | "SB6LE1C1A3" | "SB6LE2C1A1" | "SB6LE2C1A2" | "SB6LE2C1A3" | "SB6SE1C2A1" | "SB6SE1C2A2" | "SB6SE1C2B1" | "SB6SE2C2A1" | "SB6SE2C2A2" | "NIVEL_ETICA" | "NIVEL_HUMANO" | "NIVEL_LENGUAJES" | "NIVEL_SABERES" | "id", ExtArgs["result"]["alumnos_prioritarios_telesecundaria"]>;
export type $alumnos_prioritarios_telesecundariaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "alumnos_prioritarios_telesecundaria";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        IDENTIFICACION: string;
        ENT: runtime.Decimal;
        LLAVE: string;
        CVL_ALUMN: runtime.Decimal;
        NOMALUMNO: string;
        MATR_EDO: string;
        CCT: string;
        ID_TURNO: runtime.Decimal;
        CONTROL: string;
        ID_NIVEL: runtime.Decimal;
        opcion_educativa: string;
        TURNO: string;
        GRADO: runtime.Decimal;
        SEXO: string;
        GRUPO: string;
        ORIGEN_ARCHIVO: string;
        ORIGEN_HOJA: string;
        SA6DE1C5A1: runtime.Decimal;
        SA6DE1C5B1: runtime.Decimal;
        SA6DE1C5C1: runtime.Decimal;
        SA6DE2C4A1: runtime.Decimal;
        SA6EE1C4A1: runtime.Decimal;
        SA6EE1C4B1: runtime.Decimal;
        SA6EE2C3A1: runtime.Decimal;
        SA6EE2C3B1: runtime.Decimal;
        SA6EE2C3C1: runtime.Decimal;
        SA6LE1C3A1: runtime.Decimal;
        SA6LE2C1A1: runtime.Decimal;
        SA6LE2C1A2: runtime.Decimal;
        SA6SE1C1A1: runtime.Decimal;
        SA6SE1C1A2: runtime.Decimal;
        SA6SE1C1A3: runtime.Decimal;
        SA6SE1C2A1: runtime.Decimal;
        SA6SE1C2A2: runtime.Decimal;
        SA6SE2C2A1: runtime.Decimal;
        SA6SE2C2A2: runtime.Decimal;
        SA6SE2C2B1: runtime.Decimal;
        SA6SE2C2B2: runtime.Decimal;
        SB6DE1C4A1: runtime.Decimal;
        SB6DE1C4A2: runtime.Decimal;
        SB6DE2C4A1: runtime.Decimal;
        SB6DE2C4A2: runtime.Decimal;
        SB6EE1C3A1: runtime.Decimal;
        SB6EE1C3A2: runtime.Decimal;
        SB6EE2C3A1: runtime.Decimal;
        SB6EE2C3A2: runtime.Decimal;
        SB6EE2C3A3: runtime.Decimal;
        SB6LE1C1A1: runtime.Decimal;
        SB6LE1C1A2: runtime.Decimal;
        SB6LE1C1A3: runtime.Decimal;
        SB6LE2C1A1: runtime.Decimal;
        SB6LE2C1A2: runtime.Decimal;
        SB6LE2C1A3: runtime.Decimal;
        SB6SE1C2A1: runtime.Decimal;
        SB6SE1C2A2: runtime.Decimal;
        SB6SE1C2B1: runtime.Decimal;
        SB6SE2C2A1: runtime.Decimal;
        SB6SE2C2A2: runtime.Decimal;
        NIVEL_ETICA: string;
        NIVEL_HUMANO: string;
        NIVEL_LENGUAJES: string;
        NIVEL_SABERES: string;
        id: number;
    }, ExtArgs["result"]["alumnos_prioritarios_telesecundaria"]>;
    composites: {};
};
export type alumnos_prioritarios_telesecundariaGetPayload<S extends boolean | null | undefined | alumnos_prioritarios_telesecundariaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload, S>;
export type alumnos_prioritarios_telesecundariaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<alumnos_prioritarios_telesecundariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Alumnos_prioritarios_telesecundariaCountAggregateInputType | true;
};
export interface alumnos_prioritarios_telesecundariaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['alumnos_prioritarios_telesecundaria'];
        meta: {
            name: 'alumnos_prioritarios_telesecundaria';
        };
    };
    /**
     * Find zero or one Alumnos_prioritarios_telesecundaria that matches the filter.
     * @param {alumnos_prioritarios_telesecundariaFindUniqueArgs} args - Arguments to find a Alumnos_prioritarios_telesecundaria
     * @example
     * // Get one Alumnos_prioritarios_telesecundaria
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumnos_prioritarios_telesecundariaFindUniqueArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_telesecundariaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alumnos_prioritarios_telesecundaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumnos_prioritarios_telesecundariaFindUniqueOrThrowArgs} args - Arguments to find a Alumnos_prioritarios_telesecundaria
     * @example
     * // Get one Alumnos_prioritarios_telesecundaria
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumnos_prioritarios_telesecundariaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_telesecundariaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnos_prioritarios_telesecundaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_telesecundariaFindFirstArgs} args - Arguments to find a Alumnos_prioritarios_telesecundaria
     * @example
     * // Get one Alumnos_prioritarios_telesecundaria
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumnos_prioritarios_telesecundariaFindFirstArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaFindFirstArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_telesecundariaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnos_prioritarios_telesecundaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_telesecundariaFindFirstOrThrowArgs} args - Arguments to find a Alumnos_prioritarios_telesecundaria
     * @example
     * // Get one Alumnos_prioritarios_telesecundaria
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumnos_prioritarios_telesecundariaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_telesecundariaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alumnos_prioritarios_telesecundarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_telesecundariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos_prioritarios_telesecundarias
     * const alumnos_prioritarios_telesecundarias = await prisma.alumnos_prioritarios_telesecundaria.findMany()
     *
     * // Get first 10 Alumnos_prioritarios_telesecundarias
     * const alumnos_prioritarios_telesecundarias = await prisma.alumnos_prioritarios_telesecundaria.findMany({ take: 10 })
     *
     * // Only select the `IDENTIFICACION`
     * const alumnos_prioritarios_telesecundariaWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_telesecundaria.findMany({ select: { IDENTIFICACION: true } })
     *
     */
    findMany<T extends alumnos_prioritarios_telesecundariaFindManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alumnos_prioritarios_telesecundaria.
     * @param {alumnos_prioritarios_telesecundariaCreateArgs} args - Arguments to create a Alumnos_prioritarios_telesecundaria.
     * @example
     * // Create one Alumnos_prioritarios_telesecundaria
     * const Alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.create({
     *   data: {
     *     // ... data to create a Alumnos_prioritarios_telesecundaria
     *   }
     * })
     *
     */
    create<T extends alumnos_prioritarios_telesecundariaCreateArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaCreateArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_telesecundariaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alumnos_prioritarios_telesecundarias.
     * @param {alumnos_prioritarios_telesecundariaCreateManyArgs} args - Arguments to create many Alumnos_prioritarios_telesecundarias.
     * @example
     * // Create many Alumnos_prioritarios_telesecundarias
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends alumnos_prioritarios_telesecundariaCreateManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Alumnos_prioritarios_telesecundarias and returns the data saved in the database.
     * @param {alumnos_prioritarios_telesecundariaCreateManyAndReturnArgs} args - Arguments to create many Alumnos_prioritarios_telesecundarias.
     * @example
     * // Create many Alumnos_prioritarios_telesecundarias
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Alumnos_prioritarios_telesecundarias and only return the `IDENTIFICACION`
     * const alumnos_prioritarios_telesecundariaWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_telesecundaria.createManyAndReturn({
     *   select: { IDENTIFICACION: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends alumnos_prioritarios_telesecundariaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Alumnos_prioritarios_telesecundaria.
     * @param {alumnos_prioritarios_telesecundariaDeleteArgs} args - Arguments to delete one Alumnos_prioritarios_telesecundaria.
     * @example
     * // Delete one Alumnos_prioritarios_telesecundaria
     * const Alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.delete({
     *   where: {
     *     // ... filter to delete one Alumnos_prioritarios_telesecundaria
     *   }
     * })
     *
     */
    delete<T extends alumnos_prioritarios_telesecundariaDeleteArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaDeleteArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_telesecundariaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alumnos_prioritarios_telesecundaria.
     * @param {alumnos_prioritarios_telesecundariaUpdateArgs} args - Arguments to update one Alumnos_prioritarios_telesecundaria.
     * @example
     * // Update one Alumnos_prioritarios_telesecundaria
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends alumnos_prioritarios_telesecundariaUpdateArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaUpdateArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_telesecundariaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alumnos_prioritarios_telesecundarias.
     * @param {alumnos_prioritarios_telesecundariaDeleteManyArgs} args - Arguments to filter Alumnos_prioritarios_telesecundarias to delete.
     * @example
     * // Delete a few Alumnos_prioritarios_telesecundarias
     * const { count } = await prisma.alumnos_prioritarios_telesecundaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends alumnos_prioritarios_telesecundariaDeleteManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos_prioritarios_telesecundarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_telesecundariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos_prioritarios_telesecundarias
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends alumnos_prioritarios_telesecundariaUpdateManyArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos_prioritarios_telesecundarias and returns the data updated in the database.
     * @param {alumnos_prioritarios_telesecundariaUpdateManyAndReturnArgs} args - Arguments to update many Alumnos_prioritarios_telesecundarias.
     * @example
     * // Update many Alumnos_prioritarios_telesecundarias
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Alumnos_prioritarios_telesecundarias and only return the `IDENTIFICACION`
     * const alumnos_prioritarios_telesecundariaWithIDENTIFICACIONOnly = await prisma.alumnos_prioritarios_telesecundaria.updateManyAndReturn({
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
    updateManyAndReturn<T extends alumnos_prioritarios_telesecundariaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Alumnos_prioritarios_telesecundaria.
     * @param {alumnos_prioritarios_telesecundariaUpsertArgs} args - Arguments to update or create a Alumnos_prioritarios_telesecundaria.
     * @example
     * // Update or create a Alumnos_prioritarios_telesecundaria
     * const alumnos_prioritarios_telesecundaria = await prisma.alumnos_prioritarios_telesecundaria.upsert({
     *   create: {
     *     // ... data to create a Alumnos_prioritarios_telesecundaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumnos_prioritarios_telesecundaria we want to update
     *   }
     * })
     */
    upsert<T extends alumnos_prioritarios_telesecundariaUpsertArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_telesecundariaUpsertArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_telesecundariaClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_telesecundariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alumnos_prioritarios_telesecundarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_telesecundariaCountArgs} args - Arguments to filter Alumnos_prioritarios_telesecundarias to count.
     * @example
     * // Count the number of Alumnos_prioritarios_telesecundarias
     * const count = await prisma.alumnos_prioritarios_telesecundaria.count({
     *   where: {
     *     // ... the filter for the Alumnos_prioritarios_telesecundarias we want to count
     *   }
     * })
    **/
    count<T extends alumnos_prioritarios_telesecundariaCountArgs>(args?: Prisma.Subset<T, alumnos_prioritarios_telesecundariaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Alumnos_prioritarios_telesecundariaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alumnos_prioritarios_telesecundaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alumnos_prioritarios_telesecundariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alumnos_prioritarios_telesecundariaAggregateArgs>(args: Prisma.Subset<T, Alumnos_prioritarios_telesecundariaAggregateArgs>): Prisma.PrismaPromise<GetAlumnos_prioritarios_telesecundariaAggregateType<T>>;
    /**
     * Group by Alumnos_prioritarios_telesecundaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_telesecundariaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends alumnos_prioritarios_telesecundariaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: alumnos_prioritarios_telesecundariaGroupByArgs['orderBy'];
    } : {
        orderBy?: alumnos_prioritarios_telesecundariaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, alumnos_prioritarios_telesecundariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnos_prioritarios_telesecundariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the alumnos_prioritarios_telesecundaria model
     */
    readonly fields: alumnos_prioritarios_telesecundariaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for alumnos_prioritarios_telesecundaria.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__alumnos_prioritarios_telesecundariaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the alumnos_prioritarios_telesecundaria model
 */
export interface alumnos_prioritarios_telesecundariaFieldRefs {
    readonly IDENTIFICACION: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly ENT: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly LLAVE: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly CVL_ALUMN: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly NOMALUMNO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly MATR_EDO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly CCT: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly ID_TURNO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly CONTROL: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly ID_NIVEL: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly opcion_educativa: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly TURNO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly GRADO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SEXO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly GRUPO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly ORIGEN_ARCHIVO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly ORIGEN_HOJA: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly SA6DE1C5A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6DE1C5B1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6DE1C5C1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6DE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6EE1C4A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6EE1C4B1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6EE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6EE2C3B1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6EE2C3C1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6LE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6LE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6LE2C1A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE1C1A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE1C1A3: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE1C2A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE2C2A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE2C2B1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SA6SE2C2B2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6DE1C4A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6DE1C4A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6DE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6DE2C4A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6EE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6EE1C3A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6EE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6EE2C3A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6EE2C3A3: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6LE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6LE1C1A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6LE1C1A3: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6LE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6LE2C1A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6LE2C1A3: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6SE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6SE1C2A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6SE1C2B1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6SE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly SB6SE2C2A2: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Decimal'>;
    readonly NIVEL_ETICA: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly NIVEL_HUMANO: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly NIVEL_LENGUAJES: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly NIVEL_SABERES: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'String'>;
    readonly id: Prisma.FieldRef<"alumnos_prioritarios_telesecundaria", 'Int'>;
}
/**
 * alumnos_prioritarios_telesecundaria findUnique
 */
export type alumnos_prioritarios_telesecundariaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_telesecundaria to fetch.
     */
    where: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria findUniqueOrThrow
 */
export type alumnos_prioritarios_telesecundariaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_telesecundaria to fetch.
     */
    where: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria findFirst
 */
export type alumnos_prioritarios_telesecundariaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_telesecundaria to fetch.
     */
    where?: Prisma.alumnos_prioritarios_telesecundariaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_telesecundarias to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_telesecundariaOrderByWithRelationInput | Prisma.alumnos_prioritarios_telesecundariaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos_prioritarios_telesecundarias.
     */
    cursor?: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_telesecundarias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_telesecundarias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos_prioritarios_telesecundarias.
     */
    distinct?: Prisma.Alumnos_prioritarios_telesecundariaScalarFieldEnum | Prisma.Alumnos_prioritarios_telesecundariaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria findFirstOrThrow
 */
export type alumnos_prioritarios_telesecundariaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_telesecundaria to fetch.
     */
    where?: Prisma.alumnos_prioritarios_telesecundariaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_telesecundarias to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_telesecundariaOrderByWithRelationInput | Prisma.alumnos_prioritarios_telesecundariaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos_prioritarios_telesecundarias.
     */
    cursor?: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_telesecundarias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_telesecundarias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos_prioritarios_telesecundarias.
     */
    distinct?: Prisma.Alumnos_prioritarios_telesecundariaScalarFieldEnum | Prisma.Alumnos_prioritarios_telesecundariaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria findMany
 */
export type alumnos_prioritarios_telesecundariaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_telesecundarias to fetch.
     */
    where?: Prisma.alumnos_prioritarios_telesecundariaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_telesecundarias to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_telesecundariaOrderByWithRelationInput | Prisma.alumnos_prioritarios_telesecundariaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing alumnos_prioritarios_telesecundarias.
     */
    cursor?: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_telesecundarias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_telesecundarias.
     */
    skip?: number;
    distinct?: Prisma.Alumnos_prioritarios_telesecundariaScalarFieldEnum | Prisma.Alumnos_prioritarios_telesecundariaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria create
 */
export type alumnos_prioritarios_telesecundariaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * The data needed to create a alumnos_prioritarios_telesecundaria.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_telesecundariaCreateInput, Prisma.alumnos_prioritarios_telesecundariaUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria createMany
 */
export type alumnos_prioritarios_telesecundariaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumnos_prioritarios_telesecundarias.
     */
    data: Prisma.alumnos_prioritarios_telesecundariaCreateManyInput | Prisma.alumnos_prioritarios_telesecundariaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnos_prioritarios_telesecundaria createManyAndReturn
 */
export type alumnos_prioritarios_telesecundariaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * The data used to create many alumnos_prioritarios_telesecundarias.
     */
    data: Prisma.alumnos_prioritarios_telesecundariaCreateManyInput | Prisma.alumnos_prioritarios_telesecundariaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnos_prioritarios_telesecundaria update
 */
export type alumnos_prioritarios_telesecundariaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * The data needed to update a alumnos_prioritarios_telesecundaria.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_telesecundariaUpdateInput, Prisma.alumnos_prioritarios_telesecundariaUncheckedUpdateInput>;
    /**
     * Choose, which alumnos_prioritarios_telesecundaria to update.
     */
    where: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria updateMany
 */
export type alumnos_prioritarios_telesecundariaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update alumnos_prioritarios_telesecundarias.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_telesecundariaUpdateManyMutationInput, Prisma.alumnos_prioritarios_telesecundariaUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos_prioritarios_telesecundarias to update
     */
    where?: Prisma.alumnos_prioritarios_telesecundariaWhereInput;
    /**
     * Limit how many alumnos_prioritarios_telesecundarias to update.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_telesecundaria updateManyAndReturn
 */
export type alumnos_prioritarios_telesecundariaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * The data used to update alumnos_prioritarios_telesecundarias.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_telesecundariaUpdateManyMutationInput, Prisma.alumnos_prioritarios_telesecundariaUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos_prioritarios_telesecundarias to update
     */
    where?: Prisma.alumnos_prioritarios_telesecundariaWhereInput;
    /**
     * Limit how many alumnos_prioritarios_telesecundarias to update.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_telesecundaria upsert
 */
export type alumnos_prioritarios_telesecundariaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * The filter to search for the alumnos_prioritarios_telesecundaria to update in case it exists.
     */
    where: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    /**
     * In case the alumnos_prioritarios_telesecundaria found by the `where` argument doesn't exist, create a new alumnos_prioritarios_telesecundaria with this data.
     */
    create: Prisma.XOR<Prisma.alumnos_prioritarios_telesecundariaCreateInput, Prisma.alumnos_prioritarios_telesecundariaUncheckedCreateInput>;
    /**
     * In case the alumnos_prioritarios_telesecundaria was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.alumnos_prioritarios_telesecundariaUpdateInput, Prisma.alumnos_prioritarios_telesecundariaUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria delete
 */
export type alumnos_prioritarios_telesecundariaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
    /**
     * Filter which alumnos_prioritarios_telesecundaria to delete.
     */
    where: Prisma.alumnos_prioritarios_telesecundariaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_telesecundaria deleteMany
 */
export type alumnos_prioritarios_telesecundariaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos_prioritarios_telesecundarias to delete
     */
    where?: Prisma.alumnos_prioritarios_telesecundariaWhereInput;
    /**
     * Limit how many alumnos_prioritarios_telesecundarias to delete.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_telesecundaria without action
 */
export type alumnos_prioritarios_telesecundariaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_telesecundaria
     */
    select?: Prisma.alumnos_prioritarios_telesecundariaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_telesecundaria
     */
    omit?: Prisma.alumnos_prioritarios_telesecundariaOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=alumnos_prioritarios_telesecundaria.d.ts.map