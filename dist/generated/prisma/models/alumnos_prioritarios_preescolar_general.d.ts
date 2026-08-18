import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model alumnos_prioritarios_preescolar_general
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type alumnos_prioritarios_preescolar_generalModel = runtime.Types.Result.DefaultSelection<Prisma.$alumnos_prioritarios_preescolar_generalPayload>;
export type AggregateAlumnos_prioritarios_preescolar_general = {
    _count: Alumnos_prioritarios_preescolar_generalCountAggregateOutputType | null;
    _avg: Alumnos_prioritarios_preescolar_generalAvgAggregateOutputType | null;
    _sum: Alumnos_prioritarios_preescolar_generalSumAggregateOutputType | null;
    _min: Alumnos_prioritarios_preescolar_generalMinAggregateOutputType | null;
    _max: Alumnos_prioritarios_preescolar_generalMaxAggregateOutputType | null;
};
export type Alumnos_prioritarios_preescolar_generalAvgAggregateOutputType = {
    Ent: runtime.Decimal | null;
    GRADO: runtime.Decimal | null;
    SECTOR: runtime.Decimal | null;
    ZONA: runtime.Decimal | null;
    KX2LE1C1A1: runtime.Decimal | null;
    KX2DE1C1A2: runtime.Decimal | null;
    KX2LE1C2A1: runtime.Decimal | null;
    KX2SE1C2A2: runtime.Decimal | null;
    KX2LE1C3A1: runtime.Decimal | null;
    KX2EE1C3A2: runtime.Decimal | null;
    KX2SE2C1A1: runtime.Decimal | null;
    KX2LE2C2A1: runtime.Decimal | null;
    KX2EE2C3A1: runtime.Decimal | null;
    KX2LE2C4A1: runtime.Decimal | null;
    KX2DE2C4A2: runtime.Decimal | null;
    id: number | null;
};
export type Alumnos_prioritarios_preescolar_generalSumAggregateOutputType = {
    Ent: runtime.Decimal | null;
    GRADO: runtime.Decimal | null;
    SECTOR: runtime.Decimal | null;
    ZONA: runtime.Decimal | null;
    KX2LE1C1A1: runtime.Decimal | null;
    KX2DE1C1A2: runtime.Decimal | null;
    KX2LE1C2A1: runtime.Decimal | null;
    KX2SE1C2A2: runtime.Decimal | null;
    KX2LE1C3A1: runtime.Decimal | null;
    KX2EE1C3A2: runtime.Decimal | null;
    KX2SE2C1A1: runtime.Decimal | null;
    KX2LE2C2A1: runtime.Decimal | null;
    KX2EE2C3A1: runtime.Decimal | null;
    KX2LE2C4A1: runtime.Decimal | null;
    KX2DE2C4A2: runtime.Decimal | null;
    id: number | null;
};
export type Alumnos_prioritarios_preescolar_generalMinAggregateOutputType = {
    cv_cct: string | null;
    Ent: runtime.Decimal | null;
    LLAVE: string | null;
    Nombre_Alumno: string | null;
    Matr_Edo: boolean | null;
    Id_Turno: boolean | null;
    CONTROL: string | null;
    Id_Nivel: boolean | null;
    NIVEL: string | null;
    SUBNIVEL: string | null;
    OPCION_EDUCATIVA: string | null;
    TURNO: string | null;
    GRADO: runtime.Decimal | null;
    Sexo: string | null;
    GRUPO: string | null;
    CCT_SECTOR: string | null;
    SECTOR: runtime.Decimal | null;
    CCT_ZONA: string | null;
    ZONA: runtime.Decimal | null;
    KX2LE1C1A1: runtime.Decimal | null;
    KX2DE1C1A2: runtime.Decimal | null;
    KX2LE1C2A1: runtime.Decimal | null;
    KX2SE1C2A2: runtime.Decimal | null;
    KX2LE1C3A1: runtime.Decimal | null;
    KX2EE1C3A2: runtime.Decimal | null;
    KX2SE2C1A1: runtime.Decimal | null;
    KX2LE2C2A1: runtime.Decimal | null;
    KX2EE2C3A1: runtime.Decimal | null;
    KX2LE2C4A1: runtime.Decimal | null;
    KX2DE2C4A2: runtime.Decimal | null;
    Nivel_Lenguajes: string | null;
    Nivel_Saberes: string | null;
    Nivel_Humano: string | null;
    Nivel_Etica: string | null;
    Tipo: string | null;
    En_escuela_prioritaria: string | null;
    id: number | null;
};
export type Alumnos_prioritarios_preescolar_generalMaxAggregateOutputType = {
    cv_cct: string | null;
    Ent: runtime.Decimal | null;
    LLAVE: string | null;
    Nombre_Alumno: string | null;
    Matr_Edo: boolean | null;
    Id_Turno: boolean | null;
    CONTROL: string | null;
    Id_Nivel: boolean | null;
    NIVEL: string | null;
    SUBNIVEL: string | null;
    OPCION_EDUCATIVA: string | null;
    TURNO: string | null;
    GRADO: runtime.Decimal | null;
    Sexo: string | null;
    GRUPO: string | null;
    CCT_SECTOR: string | null;
    SECTOR: runtime.Decimal | null;
    CCT_ZONA: string | null;
    ZONA: runtime.Decimal | null;
    KX2LE1C1A1: runtime.Decimal | null;
    KX2DE1C1A2: runtime.Decimal | null;
    KX2LE1C2A1: runtime.Decimal | null;
    KX2SE1C2A2: runtime.Decimal | null;
    KX2LE1C3A1: runtime.Decimal | null;
    KX2EE1C3A2: runtime.Decimal | null;
    KX2SE2C1A1: runtime.Decimal | null;
    KX2LE2C2A1: runtime.Decimal | null;
    KX2EE2C3A1: runtime.Decimal | null;
    KX2LE2C4A1: runtime.Decimal | null;
    KX2DE2C4A2: runtime.Decimal | null;
    Nivel_Lenguajes: string | null;
    Nivel_Saberes: string | null;
    Nivel_Humano: string | null;
    Nivel_Etica: string | null;
    Tipo: string | null;
    En_escuela_prioritaria: string | null;
    id: number | null;
};
export type Alumnos_prioritarios_preescolar_generalCountAggregateOutputType = {
    cv_cct: number;
    Ent: number;
    LLAVE: number;
    Nombre_Alumno: number;
    Matr_Edo: number;
    Id_Turno: number;
    CONTROL: number;
    Id_Nivel: number;
    NIVEL: number;
    SUBNIVEL: number;
    OPCION_EDUCATIVA: number;
    TURNO: number;
    GRADO: number;
    Sexo: number;
    GRUPO: number;
    CCT_SECTOR: number;
    SECTOR: number;
    CCT_ZONA: number;
    ZONA: number;
    KX2LE1C1A1: number;
    KX2DE1C1A2: number;
    KX2LE1C2A1: number;
    KX2SE1C2A2: number;
    KX2LE1C3A1: number;
    KX2EE1C3A2: number;
    KX2SE2C1A1: number;
    KX2LE2C2A1: number;
    KX2EE2C3A1: number;
    KX2LE2C4A1: number;
    KX2DE2C4A2: number;
    Nivel_Lenguajes: number;
    Nivel_Saberes: number;
    Nivel_Humano: number;
    Nivel_Etica: number;
    Tipo: number;
    En_escuela_prioritaria: number;
    id: number;
    _all: number;
};
export type Alumnos_prioritarios_preescolar_generalAvgAggregateInputType = {
    Ent?: true;
    GRADO?: true;
    SECTOR?: true;
    ZONA?: true;
    KX2LE1C1A1?: true;
    KX2DE1C1A2?: true;
    KX2LE1C2A1?: true;
    KX2SE1C2A2?: true;
    KX2LE1C3A1?: true;
    KX2EE1C3A2?: true;
    KX2SE2C1A1?: true;
    KX2LE2C2A1?: true;
    KX2EE2C3A1?: true;
    KX2LE2C4A1?: true;
    KX2DE2C4A2?: true;
    id?: true;
};
export type Alumnos_prioritarios_preescolar_generalSumAggregateInputType = {
    Ent?: true;
    GRADO?: true;
    SECTOR?: true;
    ZONA?: true;
    KX2LE1C1A1?: true;
    KX2DE1C1A2?: true;
    KX2LE1C2A1?: true;
    KX2SE1C2A2?: true;
    KX2LE1C3A1?: true;
    KX2EE1C3A2?: true;
    KX2SE2C1A1?: true;
    KX2LE2C2A1?: true;
    KX2EE2C3A1?: true;
    KX2LE2C4A1?: true;
    KX2DE2C4A2?: true;
    id?: true;
};
export type Alumnos_prioritarios_preescolar_generalMinAggregateInputType = {
    cv_cct?: true;
    Ent?: true;
    LLAVE?: true;
    Nombre_Alumno?: true;
    Matr_Edo?: true;
    Id_Turno?: true;
    CONTROL?: true;
    Id_Nivel?: true;
    NIVEL?: true;
    SUBNIVEL?: true;
    OPCION_EDUCATIVA?: true;
    TURNO?: true;
    GRADO?: true;
    Sexo?: true;
    GRUPO?: true;
    CCT_SECTOR?: true;
    SECTOR?: true;
    CCT_ZONA?: true;
    ZONA?: true;
    KX2LE1C1A1?: true;
    KX2DE1C1A2?: true;
    KX2LE1C2A1?: true;
    KX2SE1C2A2?: true;
    KX2LE1C3A1?: true;
    KX2EE1C3A2?: true;
    KX2SE2C1A1?: true;
    KX2LE2C2A1?: true;
    KX2EE2C3A1?: true;
    KX2LE2C4A1?: true;
    KX2DE2C4A2?: true;
    Nivel_Lenguajes?: true;
    Nivel_Saberes?: true;
    Nivel_Humano?: true;
    Nivel_Etica?: true;
    Tipo?: true;
    En_escuela_prioritaria?: true;
    id?: true;
};
export type Alumnos_prioritarios_preescolar_generalMaxAggregateInputType = {
    cv_cct?: true;
    Ent?: true;
    LLAVE?: true;
    Nombre_Alumno?: true;
    Matr_Edo?: true;
    Id_Turno?: true;
    CONTROL?: true;
    Id_Nivel?: true;
    NIVEL?: true;
    SUBNIVEL?: true;
    OPCION_EDUCATIVA?: true;
    TURNO?: true;
    GRADO?: true;
    Sexo?: true;
    GRUPO?: true;
    CCT_SECTOR?: true;
    SECTOR?: true;
    CCT_ZONA?: true;
    ZONA?: true;
    KX2LE1C1A1?: true;
    KX2DE1C1A2?: true;
    KX2LE1C2A1?: true;
    KX2SE1C2A2?: true;
    KX2LE1C3A1?: true;
    KX2EE1C3A2?: true;
    KX2SE2C1A1?: true;
    KX2LE2C2A1?: true;
    KX2EE2C3A1?: true;
    KX2LE2C4A1?: true;
    KX2DE2C4A2?: true;
    Nivel_Lenguajes?: true;
    Nivel_Saberes?: true;
    Nivel_Humano?: true;
    Nivel_Etica?: true;
    Tipo?: true;
    En_escuela_prioritaria?: true;
    id?: true;
};
export type Alumnos_prioritarios_preescolar_generalCountAggregateInputType = {
    cv_cct?: true;
    Ent?: true;
    LLAVE?: true;
    Nombre_Alumno?: true;
    Matr_Edo?: true;
    Id_Turno?: true;
    CONTROL?: true;
    Id_Nivel?: true;
    NIVEL?: true;
    SUBNIVEL?: true;
    OPCION_EDUCATIVA?: true;
    TURNO?: true;
    GRADO?: true;
    Sexo?: true;
    GRUPO?: true;
    CCT_SECTOR?: true;
    SECTOR?: true;
    CCT_ZONA?: true;
    ZONA?: true;
    KX2LE1C1A1?: true;
    KX2DE1C1A2?: true;
    KX2LE1C2A1?: true;
    KX2SE1C2A2?: true;
    KX2LE1C3A1?: true;
    KX2EE1C3A2?: true;
    KX2SE2C1A1?: true;
    KX2LE2C2A1?: true;
    KX2EE2C3A1?: true;
    KX2LE2C4A1?: true;
    KX2DE2C4A2?: true;
    Nivel_Lenguajes?: true;
    Nivel_Saberes?: true;
    Nivel_Humano?: true;
    Nivel_Etica?: true;
    Tipo?: true;
    En_escuela_prioritaria?: true;
    id?: true;
    _all?: true;
};
export type Alumnos_prioritarios_preescolar_generalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos_prioritarios_preescolar_general to aggregate.
     */
    where?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_preescolar_generals to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_preescolar_generalOrderByWithRelationInput | Prisma.alumnos_prioritarios_preescolar_generalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_preescolar_generals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_preescolar_generals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned alumnos_prioritarios_preescolar_generals
    **/
    _count?: true | Alumnos_prioritarios_preescolar_generalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Alumnos_prioritarios_preescolar_generalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Alumnos_prioritarios_preescolar_generalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Alumnos_prioritarios_preescolar_generalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Alumnos_prioritarios_preescolar_generalMaxAggregateInputType;
};
export type GetAlumnos_prioritarios_preescolar_generalAggregateType<T extends Alumnos_prioritarios_preescolar_generalAggregateArgs> = {
    [P in keyof T & keyof AggregateAlumnos_prioritarios_preescolar_general]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlumnos_prioritarios_preescolar_general[P]> : Prisma.GetScalarType<T[P], AggregateAlumnos_prioritarios_preescolar_general[P]>;
};
export type alumnos_prioritarios_preescolar_generalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput;
    orderBy?: Prisma.alumnos_prioritarios_preescolar_generalOrderByWithAggregationInput | Prisma.alumnos_prioritarios_preescolar_generalOrderByWithAggregationInput[];
    by: Prisma.Alumnos_prioritarios_preescolar_generalScalarFieldEnum[] | Prisma.Alumnos_prioritarios_preescolar_generalScalarFieldEnum;
    having?: Prisma.alumnos_prioritarios_preescolar_generalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Alumnos_prioritarios_preescolar_generalCountAggregateInputType | true;
    _avg?: Alumnos_prioritarios_preescolar_generalAvgAggregateInputType;
    _sum?: Alumnos_prioritarios_preescolar_generalSumAggregateInputType;
    _min?: Alumnos_prioritarios_preescolar_generalMinAggregateInputType;
    _max?: Alumnos_prioritarios_preescolar_generalMaxAggregateInputType;
};
export type Alumnos_prioritarios_preescolar_generalGroupByOutputType = {
    cv_cct: string;
    Ent: runtime.Decimal;
    LLAVE: string;
    Nombre_Alumno: string;
    Matr_Edo: boolean;
    Id_Turno: boolean;
    CONTROL: string;
    Id_Nivel: boolean;
    NIVEL: string;
    SUBNIVEL: string;
    OPCION_EDUCATIVA: string;
    TURNO: string;
    GRADO: runtime.Decimal;
    Sexo: string;
    GRUPO: string;
    CCT_SECTOR: string;
    SECTOR: runtime.Decimal;
    CCT_ZONA: string;
    ZONA: runtime.Decimal;
    KX2LE1C1A1: runtime.Decimal;
    KX2DE1C1A2: runtime.Decimal;
    KX2LE1C2A1: runtime.Decimal;
    KX2SE1C2A2: runtime.Decimal;
    KX2LE1C3A1: runtime.Decimal;
    KX2EE1C3A2: runtime.Decimal;
    KX2SE2C1A1: runtime.Decimal;
    KX2LE2C2A1: runtime.Decimal;
    KX2EE2C3A1: runtime.Decimal;
    KX2LE2C4A1: runtime.Decimal;
    KX2DE2C4A2: runtime.Decimal;
    Nivel_Lenguajes: string;
    Nivel_Saberes: string;
    Nivel_Humano: string;
    Nivel_Etica: string;
    Tipo: string;
    En_escuela_prioritaria: string;
    id: number;
    _count: Alumnos_prioritarios_preescolar_generalCountAggregateOutputType | null;
    _avg: Alumnos_prioritarios_preescolar_generalAvgAggregateOutputType | null;
    _sum: Alumnos_prioritarios_preescolar_generalSumAggregateOutputType | null;
    _min: Alumnos_prioritarios_preescolar_generalMinAggregateOutputType | null;
    _max: Alumnos_prioritarios_preescolar_generalMaxAggregateOutputType | null;
};
type GetAlumnos_prioritarios_preescolar_generalGroupByPayload<T extends alumnos_prioritarios_preescolar_generalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Alumnos_prioritarios_preescolar_generalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Alumnos_prioritarios_preescolar_generalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Alumnos_prioritarios_preescolar_generalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Alumnos_prioritarios_preescolar_generalGroupByOutputType[P]>;
}>>;
export type alumnos_prioritarios_preescolar_generalWhereInput = {
    AND?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput | Prisma.alumnos_prioritarios_preescolar_generalWhereInput[];
    OR?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput[];
    NOT?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput | Prisma.alumnos_prioritarios_preescolar_generalWhereInput[];
    cv_cct?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Ent?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nombre_Alumno?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Matr_Edo?: Prisma.BoolFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    Id_Turno?: Prisma.BoolFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    CONTROL?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Id_Nivel?: Prisma.BoolFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    NIVEL?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    SUBNIVEL?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    OPCION_EDUCATIVA?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    TURNO?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    GRADO?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    GRUPO?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    CCT_SECTOR?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    SECTOR?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    ZONA?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Saberes?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Humano?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Etica?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Tipo?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    En_escuela_prioritaria?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    id?: Prisma.IntFilter<"alumnos_prioritarios_preescolar_general"> | number;
};
export type alumnos_prioritarios_preescolar_generalOrderByWithRelationInput = {
    cv_cct?: Prisma.SortOrder;
    Ent?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    Nombre_Alumno?: Prisma.SortOrder;
    Matr_Edo?: Prisma.SortOrder;
    Id_Turno?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    Id_Nivel?: Prisma.SortOrder;
    NIVEL?: Prisma.SortOrder;
    SUBNIVEL?: Prisma.SortOrder;
    OPCION_EDUCATIVA?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    Sexo?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    CCT_SECTOR?: Prisma.SortOrder;
    SECTOR?: Prisma.SortOrder;
    CCT_ZONA?: Prisma.SortOrder;
    ZONA?: Prisma.SortOrder;
    KX2LE1C1A1?: Prisma.SortOrder;
    KX2DE1C1A2?: Prisma.SortOrder;
    KX2LE1C2A1?: Prisma.SortOrder;
    KX2SE1C2A2?: Prisma.SortOrder;
    KX2LE1C3A1?: Prisma.SortOrder;
    KX2EE1C3A2?: Prisma.SortOrder;
    KX2SE2C1A1?: Prisma.SortOrder;
    KX2LE2C2A1?: Prisma.SortOrder;
    KX2EE2C3A1?: Prisma.SortOrder;
    KX2LE2C4A1?: Prisma.SortOrder;
    KX2DE2C4A2?: Prisma.SortOrder;
    Nivel_Lenguajes?: Prisma.SortOrder;
    Nivel_Saberes?: Prisma.SortOrder;
    Nivel_Humano?: Prisma.SortOrder;
    Nivel_Etica?: Prisma.SortOrder;
    Tipo?: Prisma.SortOrder;
    En_escuela_prioritaria?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_preescolar_generalWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput | Prisma.alumnos_prioritarios_preescolar_generalWhereInput[];
    OR?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput[];
    NOT?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput | Prisma.alumnos_prioritarios_preescolar_generalWhereInput[];
    cv_cct?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Ent?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nombre_Alumno?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Matr_Edo?: Prisma.BoolFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    Id_Turno?: Prisma.BoolFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    CONTROL?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Id_Nivel?: Prisma.BoolFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    NIVEL?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    SUBNIVEL?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    OPCION_EDUCATIVA?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    TURNO?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    GRADO?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    GRUPO?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    CCT_SECTOR?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    SECTOR?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    ZONA?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2?: Prisma.DecimalFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Saberes?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Humano?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Etica?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Tipo?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
    En_escuela_prioritaria?: Prisma.StringFilter<"alumnos_prioritarios_preescolar_general"> | string;
}, "id">;
export type alumnos_prioritarios_preescolar_generalOrderByWithAggregationInput = {
    cv_cct?: Prisma.SortOrder;
    Ent?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    Nombre_Alumno?: Prisma.SortOrder;
    Matr_Edo?: Prisma.SortOrder;
    Id_Turno?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    Id_Nivel?: Prisma.SortOrder;
    NIVEL?: Prisma.SortOrder;
    SUBNIVEL?: Prisma.SortOrder;
    OPCION_EDUCATIVA?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    Sexo?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    CCT_SECTOR?: Prisma.SortOrder;
    SECTOR?: Prisma.SortOrder;
    CCT_ZONA?: Prisma.SortOrder;
    ZONA?: Prisma.SortOrder;
    KX2LE1C1A1?: Prisma.SortOrder;
    KX2DE1C1A2?: Prisma.SortOrder;
    KX2LE1C2A1?: Prisma.SortOrder;
    KX2SE1C2A2?: Prisma.SortOrder;
    KX2LE1C3A1?: Prisma.SortOrder;
    KX2EE1C3A2?: Prisma.SortOrder;
    KX2SE2C1A1?: Prisma.SortOrder;
    KX2LE2C2A1?: Prisma.SortOrder;
    KX2EE2C3A1?: Prisma.SortOrder;
    KX2LE2C4A1?: Prisma.SortOrder;
    KX2DE2C4A2?: Prisma.SortOrder;
    Nivel_Lenguajes?: Prisma.SortOrder;
    Nivel_Saberes?: Prisma.SortOrder;
    Nivel_Humano?: Prisma.SortOrder;
    Nivel_Etica?: Prisma.SortOrder;
    Tipo?: Prisma.SortOrder;
    En_escuela_prioritaria?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    _count?: Prisma.alumnos_prioritarios_preescolar_generalCountOrderByAggregateInput;
    _avg?: Prisma.alumnos_prioritarios_preescolar_generalAvgOrderByAggregateInput;
    _max?: Prisma.alumnos_prioritarios_preescolar_generalMaxOrderByAggregateInput;
    _min?: Prisma.alumnos_prioritarios_preescolar_generalMinOrderByAggregateInput;
    _sum?: Prisma.alumnos_prioritarios_preescolar_generalSumOrderByAggregateInput;
};
export type alumnos_prioritarios_preescolar_generalScalarWhereWithAggregatesInput = {
    AND?: Prisma.alumnos_prioritarios_preescolar_generalScalarWhereWithAggregatesInput | Prisma.alumnos_prioritarios_preescolar_generalScalarWhereWithAggregatesInput[];
    OR?: Prisma.alumnos_prioritarios_preescolar_generalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.alumnos_prioritarios_preescolar_generalScalarWhereWithAggregatesInput | Prisma.alumnos_prioritarios_preescolar_generalScalarWhereWithAggregatesInput[];
    cv_cct?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Ent?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nombre_Alumno?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Matr_Edo?: Prisma.BoolWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    Id_Turno?: Prisma.BoolWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    CONTROL?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Id_Nivel?: Prisma.BoolWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | boolean;
    NIVEL?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    SUBNIVEL?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    OPCION_EDUCATIVA?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    TURNO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    GRADO?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    GRUPO?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    CCT_SECTOR?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    SECTOR?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    ZONA?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2?: Prisma.DecimalWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Saberes?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Humano?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Nivel_Etica?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    Tipo?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    En_escuela_prioritaria?: Prisma.StringWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | string;
    id?: Prisma.IntWithAggregatesFilter<"alumnos_prioritarios_preescolar_general"> | number;
};
export type alumnos_prioritarios_preescolar_generalCreateInput = {
    cv_cct: string;
    Ent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    Nombre_Alumno: string;
    Matr_Edo: boolean;
    Id_Turno: boolean;
    CONTROL: string;
    Id_Nivel: boolean;
    NIVEL: string;
    SUBNIVEL: string;
    OPCION_EDUCATIVA: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo: string;
    GRUPO: string;
    CCT_SECTOR: string;
    SECTOR: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA: string;
    ZONA: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes: string;
    Nivel_Saberes: string;
    Nivel_Humano: string;
    Nivel_Etica: string;
    Tipo: string;
    En_escuela_prioritaria: string;
};
export type alumnos_prioritarios_preescolar_generalUncheckedCreateInput = {
    cv_cct: string;
    Ent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    Nombre_Alumno: string;
    Matr_Edo: boolean;
    Id_Turno: boolean;
    CONTROL: string;
    Id_Nivel: boolean;
    NIVEL: string;
    SUBNIVEL: string;
    OPCION_EDUCATIVA: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo: string;
    GRUPO: string;
    CCT_SECTOR: string;
    SECTOR: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA: string;
    ZONA: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes: string;
    Nivel_Saberes: string;
    Nivel_Humano: string;
    Nivel_Etica: string;
    Tipo: string;
    En_escuela_prioritaria: string;
    id?: number;
};
export type alumnos_prioritarios_preescolar_generalUpdateInput = {
    cv_cct?: Prisma.StringFieldUpdateOperationsInput | string;
    Ent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    Nombre_Alumno?: Prisma.StringFieldUpdateOperationsInput | string;
    Matr_Edo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Id_Turno?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    Id_Nivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NIVEL?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBNIVEL?: Prisma.StringFieldUpdateOperationsInput | string;
    OPCION_EDUCATIVA?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    CCT_SECTOR?: Prisma.StringFieldUpdateOperationsInput | string;
    SECTOR?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA?: Prisma.StringFieldUpdateOperationsInput | string;
    ZONA?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Saberes?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Humano?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Etica?: Prisma.StringFieldUpdateOperationsInput | string;
    Tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    En_escuela_prioritaria?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type alumnos_prioritarios_preescolar_generalUncheckedUpdateInput = {
    cv_cct?: Prisma.StringFieldUpdateOperationsInput | string;
    Ent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    Nombre_Alumno?: Prisma.StringFieldUpdateOperationsInput | string;
    Matr_Edo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Id_Turno?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    Id_Nivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NIVEL?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBNIVEL?: Prisma.StringFieldUpdateOperationsInput | string;
    OPCION_EDUCATIVA?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    CCT_SECTOR?: Prisma.StringFieldUpdateOperationsInput | string;
    SECTOR?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA?: Prisma.StringFieldUpdateOperationsInput | string;
    ZONA?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Saberes?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Humano?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Etica?: Prisma.StringFieldUpdateOperationsInput | string;
    Tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    En_escuela_prioritaria?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type alumnos_prioritarios_preescolar_generalCreateManyInput = {
    cv_cct: string;
    Ent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE: string;
    Nombre_Alumno: string;
    Matr_Edo: boolean;
    Id_Turno: boolean;
    CONTROL: string;
    Id_Nivel: boolean;
    NIVEL: string;
    SUBNIVEL: string;
    OPCION_EDUCATIVA: string;
    TURNO: string;
    GRADO: runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo: string;
    GRUPO: string;
    CCT_SECTOR: string;
    SECTOR: runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA: string;
    ZONA: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1: runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2: runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes: string;
    Nivel_Saberes: string;
    Nivel_Humano: string;
    Nivel_Etica: string;
    Tipo: string;
    En_escuela_prioritaria: string;
    id?: number;
};
export type alumnos_prioritarios_preescolar_generalUpdateManyMutationInput = {
    cv_cct?: Prisma.StringFieldUpdateOperationsInput | string;
    Ent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    Nombre_Alumno?: Prisma.StringFieldUpdateOperationsInput | string;
    Matr_Edo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Id_Turno?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    Id_Nivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NIVEL?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBNIVEL?: Prisma.StringFieldUpdateOperationsInput | string;
    OPCION_EDUCATIVA?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    CCT_SECTOR?: Prisma.StringFieldUpdateOperationsInput | string;
    SECTOR?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA?: Prisma.StringFieldUpdateOperationsInput | string;
    ZONA?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Saberes?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Humano?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Etica?: Prisma.StringFieldUpdateOperationsInput | string;
    Tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    En_escuela_prioritaria?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type alumnos_prioritarios_preescolar_generalUncheckedUpdateManyInput = {
    cv_cct?: Prisma.StringFieldUpdateOperationsInput | string;
    Ent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    LLAVE?: Prisma.StringFieldUpdateOperationsInput | string;
    Nombre_Alumno?: Prisma.StringFieldUpdateOperationsInput | string;
    Matr_Edo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Id_Turno?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    CONTROL?: Prisma.StringFieldUpdateOperationsInput | string;
    Id_Nivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    NIVEL?: Prisma.StringFieldUpdateOperationsInput | string;
    SUBNIVEL?: Prisma.StringFieldUpdateOperationsInput | string;
    OPCION_EDUCATIVA?: Prisma.StringFieldUpdateOperationsInput | string;
    TURNO?: Prisma.StringFieldUpdateOperationsInput | string;
    GRADO?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Sexo?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPO?: Prisma.StringFieldUpdateOperationsInput | string;
    CCT_SECTOR?: Prisma.StringFieldUpdateOperationsInput | string;
    SECTOR?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    CCT_ZONA?: Prisma.StringFieldUpdateOperationsInput | string;
    ZONA?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE1C1A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE1C2A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE1C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE1C3A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2SE2C1A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C2A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2EE2C3A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2LE2C4A1?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    KX2DE2C4A2?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    Nivel_Lenguajes?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Saberes?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Humano?: Prisma.StringFieldUpdateOperationsInput | string;
    Nivel_Etica?: Prisma.StringFieldUpdateOperationsInput | string;
    Tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    En_escuela_prioritaria?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type alumnos_prioritarios_preescolar_generalCountOrderByAggregateInput = {
    cv_cct?: Prisma.SortOrder;
    Ent?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    Nombre_Alumno?: Prisma.SortOrder;
    Matr_Edo?: Prisma.SortOrder;
    Id_Turno?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    Id_Nivel?: Prisma.SortOrder;
    NIVEL?: Prisma.SortOrder;
    SUBNIVEL?: Prisma.SortOrder;
    OPCION_EDUCATIVA?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    Sexo?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    CCT_SECTOR?: Prisma.SortOrder;
    SECTOR?: Prisma.SortOrder;
    CCT_ZONA?: Prisma.SortOrder;
    ZONA?: Prisma.SortOrder;
    KX2LE1C1A1?: Prisma.SortOrder;
    KX2DE1C1A2?: Prisma.SortOrder;
    KX2LE1C2A1?: Prisma.SortOrder;
    KX2SE1C2A2?: Prisma.SortOrder;
    KX2LE1C3A1?: Prisma.SortOrder;
    KX2EE1C3A2?: Prisma.SortOrder;
    KX2SE2C1A1?: Prisma.SortOrder;
    KX2LE2C2A1?: Prisma.SortOrder;
    KX2EE2C3A1?: Prisma.SortOrder;
    KX2LE2C4A1?: Prisma.SortOrder;
    KX2DE2C4A2?: Prisma.SortOrder;
    Nivel_Lenguajes?: Prisma.SortOrder;
    Nivel_Saberes?: Prisma.SortOrder;
    Nivel_Humano?: Prisma.SortOrder;
    Nivel_Etica?: Prisma.SortOrder;
    Tipo?: Prisma.SortOrder;
    En_escuela_prioritaria?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_preescolar_generalAvgOrderByAggregateInput = {
    Ent?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SECTOR?: Prisma.SortOrder;
    ZONA?: Prisma.SortOrder;
    KX2LE1C1A1?: Prisma.SortOrder;
    KX2DE1C1A2?: Prisma.SortOrder;
    KX2LE1C2A1?: Prisma.SortOrder;
    KX2SE1C2A2?: Prisma.SortOrder;
    KX2LE1C3A1?: Prisma.SortOrder;
    KX2EE1C3A2?: Prisma.SortOrder;
    KX2SE2C1A1?: Prisma.SortOrder;
    KX2LE2C2A1?: Prisma.SortOrder;
    KX2EE2C3A1?: Prisma.SortOrder;
    KX2LE2C4A1?: Prisma.SortOrder;
    KX2DE2C4A2?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_preescolar_generalMaxOrderByAggregateInput = {
    cv_cct?: Prisma.SortOrder;
    Ent?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    Nombre_Alumno?: Prisma.SortOrder;
    Matr_Edo?: Prisma.SortOrder;
    Id_Turno?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    Id_Nivel?: Prisma.SortOrder;
    NIVEL?: Prisma.SortOrder;
    SUBNIVEL?: Prisma.SortOrder;
    OPCION_EDUCATIVA?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    Sexo?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    CCT_SECTOR?: Prisma.SortOrder;
    SECTOR?: Prisma.SortOrder;
    CCT_ZONA?: Prisma.SortOrder;
    ZONA?: Prisma.SortOrder;
    KX2LE1C1A1?: Prisma.SortOrder;
    KX2DE1C1A2?: Prisma.SortOrder;
    KX2LE1C2A1?: Prisma.SortOrder;
    KX2SE1C2A2?: Prisma.SortOrder;
    KX2LE1C3A1?: Prisma.SortOrder;
    KX2EE1C3A2?: Prisma.SortOrder;
    KX2SE2C1A1?: Prisma.SortOrder;
    KX2LE2C2A1?: Prisma.SortOrder;
    KX2EE2C3A1?: Prisma.SortOrder;
    KX2LE2C4A1?: Prisma.SortOrder;
    KX2DE2C4A2?: Prisma.SortOrder;
    Nivel_Lenguajes?: Prisma.SortOrder;
    Nivel_Saberes?: Prisma.SortOrder;
    Nivel_Humano?: Prisma.SortOrder;
    Nivel_Etica?: Prisma.SortOrder;
    Tipo?: Prisma.SortOrder;
    En_escuela_prioritaria?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_preescolar_generalMinOrderByAggregateInput = {
    cv_cct?: Prisma.SortOrder;
    Ent?: Prisma.SortOrder;
    LLAVE?: Prisma.SortOrder;
    Nombre_Alumno?: Prisma.SortOrder;
    Matr_Edo?: Prisma.SortOrder;
    Id_Turno?: Prisma.SortOrder;
    CONTROL?: Prisma.SortOrder;
    Id_Nivel?: Prisma.SortOrder;
    NIVEL?: Prisma.SortOrder;
    SUBNIVEL?: Prisma.SortOrder;
    OPCION_EDUCATIVA?: Prisma.SortOrder;
    TURNO?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    Sexo?: Prisma.SortOrder;
    GRUPO?: Prisma.SortOrder;
    CCT_SECTOR?: Prisma.SortOrder;
    SECTOR?: Prisma.SortOrder;
    CCT_ZONA?: Prisma.SortOrder;
    ZONA?: Prisma.SortOrder;
    KX2LE1C1A1?: Prisma.SortOrder;
    KX2DE1C1A2?: Prisma.SortOrder;
    KX2LE1C2A1?: Prisma.SortOrder;
    KX2SE1C2A2?: Prisma.SortOrder;
    KX2LE1C3A1?: Prisma.SortOrder;
    KX2EE1C3A2?: Prisma.SortOrder;
    KX2SE2C1A1?: Prisma.SortOrder;
    KX2LE2C2A1?: Prisma.SortOrder;
    KX2EE2C3A1?: Prisma.SortOrder;
    KX2LE2C4A1?: Prisma.SortOrder;
    KX2DE2C4A2?: Prisma.SortOrder;
    Nivel_Lenguajes?: Prisma.SortOrder;
    Nivel_Saberes?: Prisma.SortOrder;
    Nivel_Humano?: Prisma.SortOrder;
    Nivel_Etica?: Prisma.SortOrder;
    Tipo?: Prisma.SortOrder;
    En_escuela_prioritaria?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_preescolar_generalSumOrderByAggregateInput = {
    Ent?: Prisma.SortOrder;
    GRADO?: Prisma.SortOrder;
    SECTOR?: Prisma.SortOrder;
    ZONA?: Prisma.SortOrder;
    KX2LE1C1A1?: Prisma.SortOrder;
    KX2DE1C1A2?: Prisma.SortOrder;
    KX2LE1C2A1?: Prisma.SortOrder;
    KX2SE1C2A2?: Prisma.SortOrder;
    KX2LE1C3A1?: Prisma.SortOrder;
    KX2EE1C3A2?: Prisma.SortOrder;
    KX2SE2C1A1?: Prisma.SortOrder;
    KX2LE2C2A1?: Prisma.SortOrder;
    KX2EE2C3A1?: Prisma.SortOrder;
    KX2LE2C4A1?: Prisma.SortOrder;
    KX2DE2C4A2?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type alumnos_prioritarios_preescolar_generalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cv_cct?: boolean;
    Ent?: boolean;
    LLAVE?: boolean;
    Nombre_Alumno?: boolean;
    Matr_Edo?: boolean;
    Id_Turno?: boolean;
    CONTROL?: boolean;
    Id_Nivel?: boolean;
    NIVEL?: boolean;
    SUBNIVEL?: boolean;
    OPCION_EDUCATIVA?: boolean;
    TURNO?: boolean;
    GRADO?: boolean;
    Sexo?: boolean;
    GRUPO?: boolean;
    CCT_SECTOR?: boolean;
    SECTOR?: boolean;
    CCT_ZONA?: boolean;
    ZONA?: boolean;
    KX2LE1C1A1?: boolean;
    KX2DE1C1A2?: boolean;
    KX2LE1C2A1?: boolean;
    KX2SE1C2A2?: boolean;
    KX2LE1C3A1?: boolean;
    KX2EE1C3A2?: boolean;
    KX2SE2C1A1?: boolean;
    KX2LE2C2A1?: boolean;
    KX2EE2C3A1?: boolean;
    KX2LE2C4A1?: boolean;
    KX2DE2C4A2?: boolean;
    Nivel_Lenguajes?: boolean;
    Nivel_Saberes?: boolean;
    Nivel_Humano?: boolean;
    Nivel_Etica?: boolean;
    Tipo?: boolean;
    En_escuela_prioritaria?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_preescolar_general"]>;
export type alumnos_prioritarios_preescolar_generalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cv_cct?: boolean;
    Ent?: boolean;
    LLAVE?: boolean;
    Nombre_Alumno?: boolean;
    Matr_Edo?: boolean;
    Id_Turno?: boolean;
    CONTROL?: boolean;
    Id_Nivel?: boolean;
    NIVEL?: boolean;
    SUBNIVEL?: boolean;
    OPCION_EDUCATIVA?: boolean;
    TURNO?: boolean;
    GRADO?: boolean;
    Sexo?: boolean;
    GRUPO?: boolean;
    CCT_SECTOR?: boolean;
    SECTOR?: boolean;
    CCT_ZONA?: boolean;
    ZONA?: boolean;
    KX2LE1C1A1?: boolean;
    KX2DE1C1A2?: boolean;
    KX2LE1C2A1?: boolean;
    KX2SE1C2A2?: boolean;
    KX2LE1C3A1?: boolean;
    KX2EE1C3A2?: boolean;
    KX2SE2C1A1?: boolean;
    KX2LE2C2A1?: boolean;
    KX2EE2C3A1?: boolean;
    KX2LE2C4A1?: boolean;
    KX2DE2C4A2?: boolean;
    Nivel_Lenguajes?: boolean;
    Nivel_Saberes?: boolean;
    Nivel_Humano?: boolean;
    Nivel_Etica?: boolean;
    Tipo?: boolean;
    En_escuela_prioritaria?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_preescolar_general"]>;
export type alumnos_prioritarios_preescolar_generalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cv_cct?: boolean;
    Ent?: boolean;
    LLAVE?: boolean;
    Nombre_Alumno?: boolean;
    Matr_Edo?: boolean;
    Id_Turno?: boolean;
    CONTROL?: boolean;
    Id_Nivel?: boolean;
    NIVEL?: boolean;
    SUBNIVEL?: boolean;
    OPCION_EDUCATIVA?: boolean;
    TURNO?: boolean;
    GRADO?: boolean;
    Sexo?: boolean;
    GRUPO?: boolean;
    CCT_SECTOR?: boolean;
    SECTOR?: boolean;
    CCT_ZONA?: boolean;
    ZONA?: boolean;
    KX2LE1C1A1?: boolean;
    KX2DE1C1A2?: boolean;
    KX2LE1C2A1?: boolean;
    KX2SE1C2A2?: boolean;
    KX2LE1C3A1?: boolean;
    KX2EE1C3A2?: boolean;
    KX2SE2C1A1?: boolean;
    KX2LE2C2A1?: boolean;
    KX2EE2C3A1?: boolean;
    KX2LE2C4A1?: boolean;
    KX2DE2C4A2?: boolean;
    Nivel_Lenguajes?: boolean;
    Nivel_Saberes?: boolean;
    Nivel_Humano?: boolean;
    Nivel_Etica?: boolean;
    Tipo?: boolean;
    En_escuela_prioritaria?: boolean;
    id?: boolean;
}, ExtArgs["result"]["alumnos_prioritarios_preescolar_general"]>;
export type alumnos_prioritarios_preescolar_generalSelectScalar = {
    cv_cct?: boolean;
    Ent?: boolean;
    LLAVE?: boolean;
    Nombre_Alumno?: boolean;
    Matr_Edo?: boolean;
    Id_Turno?: boolean;
    CONTROL?: boolean;
    Id_Nivel?: boolean;
    NIVEL?: boolean;
    SUBNIVEL?: boolean;
    OPCION_EDUCATIVA?: boolean;
    TURNO?: boolean;
    GRADO?: boolean;
    Sexo?: boolean;
    GRUPO?: boolean;
    CCT_SECTOR?: boolean;
    SECTOR?: boolean;
    CCT_ZONA?: boolean;
    ZONA?: boolean;
    KX2LE1C1A1?: boolean;
    KX2DE1C1A2?: boolean;
    KX2LE1C2A1?: boolean;
    KX2SE1C2A2?: boolean;
    KX2LE1C3A1?: boolean;
    KX2EE1C3A2?: boolean;
    KX2SE2C1A1?: boolean;
    KX2LE2C2A1?: boolean;
    KX2EE2C3A1?: boolean;
    KX2LE2C4A1?: boolean;
    KX2DE2C4A2?: boolean;
    Nivel_Lenguajes?: boolean;
    Nivel_Saberes?: boolean;
    Nivel_Humano?: boolean;
    Nivel_Etica?: boolean;
    Tipo?: boolean;
    En_escuela_prioritaria?: boolean;
    id?: boolean;
};
export type alumnos_prioritarios_preescolar_generalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cv_cct" | "Ent" | "LLAVE" | "Nombre_Alumno" | "Matr_Edo" | "Id_Turno" | "CONTROL" | "Id_Nivel" | "NIVEL" | "SUBNIVEL" | "OPCION_EDUCATIVA" | "TURNO" | "GRADO" | "Sexo" | "GRUPO" | "CCT_SECTOR" | "SECTOR" | "CCT_ZONA" | "ZONA" | "KX2LE1C1A1" | "KX2DE1C1A2" | "KX2LE1C2A1" | "KX2SE1C2A2" | "KX2LE1C3A1" | "KX2EE1C3A2" | "KX2SE2C1A1" | "KX2LE2C2A1" | "KX2EE2C3A1" | "KX2LE2C4A1" | "KX2DE2C4A2" | "Nivel_Lenguajes" | "Nivel_Saberes" | "Nivel_Humano" | "Nivel_Etica" | "Tipo" | "En_escuela_prioritaria" | "id", ExtArgs["result"]["alumnos_prioritarios_preescolar_general"]>;
export type $alumnos_prioritarios_preescolar_generalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "alumnos_prioritarios_preescolar_general";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cv_cct: string;
        Ent: runtime.Decimal;
        LLAVE: string;
        Nombre_Alumno: string;
        Matr_Edo: boolean;
        Id_Turno: boolean;
        CONTROL: string;
        Id_Nivel: boolean;
        NIVEL: string;
        SUBNIVEL: string;
        OPCION_EDUCATIVA: string;
        TURNO: string;
        GRADO: runtime.Decimal;
        Sexo: string;
        GRUPO: string;
        CCT_SECTOR: string;
        SECTOR: runtime.Decimal;
        CCT_ZONA: string;
        ZONA: runtime.Decimal;
        KX2LE1C1A1: runtime.Decimal;
        KX2DE1C1A2: runtime.Decimal;
        KX2LE1C2A1: runtime.Decimal;
        KX2SE1C2A2: runtime.Decimal;
        KX2LE1C3A1: runtime.Decimal;
        KX2EE1C3A2: runtime.Decimal;
        KX2SE2C1A1: runtime.Decimal;
        KX2LE2C2A1: runtime.Decimal;
        KX2EE2C3A1: runtime.Decimal;
        KX2LE2C4A1: runtime.Decimal;
        KX2DE2C4A2: runtime.Decimal;
        Nivel_Lenguajes: string;
        Nivel_Saberes: string;
        Nivel_Humano: string;
        Nivel_Etica: string;
        Tipo: string;
        En_escuela_prioritaria: string;
        id: number;
    }, ExtArgs["result"]["alumnos_prioritarios_preescolar_general"]>;
    composites: {};
};
export type alumnos_prioritarios_preescolar_generalGetPayload<S extends boolean | null | undefined | alumnos_prioritarios_preescolar_generalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload, S>;
export type alumnos_prioritarios_preescolar_generalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<alumnos_prioritarios_preescolar_generalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Alumnos_prioritarios_preescolar_generalCountAggregateInputType | true;
};
export interface alumnos_prioritarios_preescolar_generalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['alumnos_prioritarios_preescolar_general'];
        meta: {
            name: 'alumnos_prioritarios_preescolar_general';
        };
    };
    /**
     * Find zero or one Alumnos_prioritarios_preescolar_general that matches the filter.
     * @param {alumnos_prioritarios_preescolar_generalFindUniqueArgs} args - Arguments to find a Alumnos_prioritarios_preescolar_general
     * @example
     * // Get one Alumnos_prioritarios_preescolar_general
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumnos_prioritarios_preescolar_generalFindUniqueArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_preescolar_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alumnos_prioritarios_preescolar_general that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumnos_prioritarios_preescolar_generalFindUniqueOrThrowArgs} args - Arguments to find a Alumnos_prioritarios_preescolar_general
     * @example
     * // Get one Alumnos_prioritarios_preescolar_general
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumnos_prioritarios_preescolar_generalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_preescolar_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnos_prioritarios_preescolar_general that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_preescolar_generalFindFirstArgs} args - Arguments to find a Alumnos_prioritarios_preescolar_general
     * @example
     * // Get one Alumnos_prioritarios_preescolar_general
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumnos_prioritarios_preescolar_generalFindFirstArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalFindFirstArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_preescolar_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnos_prioritarios_preescolar_general that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_preescolar_generalFindFirstOrThrowArgs} args - Arguments to find a Alumnos_prioritarios_preescolar_general
     * @example
     * // Get one Alumnos_prioritarios_preescolar_general
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumnos_prioritarios_preescolar_generalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_preescolar_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alumnos_prioritarios_preescolar_generals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_preescolar_generalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos_prioritarios_preescolar_generals
     * const alumnos_prioritarios_preescolar_generals = await prisma.alumnos_prioritarios_preescolar_general.findMany()
     *
     * // Get first 10 Alumnos_prioritarios_preescolar_generals
     * const alumnos_prioritarios_preescolar_generals = await prisma.alumnos_prioritarios_preescolar_general.findMany({ take: 10 })
     *
     * // Only select the `cv_cct`
     * const alumnos_prioritarios_preescolar_generalWithCv_cctOnly = await prisma.alumnos_prioritarios_preescolar_general.findMany({ select: { cv_cct: true } })
     *
     */
    findMany<T extends alumnos_prioritarios_preescolar_generalFindManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alumnos_prioritarios_preescolar_general.
     * @param {alumnos_prioritarios_preescolar_generalCreateArgs} args - Arguments to create a Alumnos_prioritarios_preescolar_general.
     * @example
     * // Create one Alumnos_prioritarios_preescolar_general
     * const Alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.create({
     *   data: {
     *     // ... data to create a Alumnos_prioritarios_preescolar_general
     *   }
     * })
     *
     */
    create<T extends alumnos_prioritarios_preescolar_generalCreateArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalCreateArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_preescolar_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alumnos_prioritarios_preescolar_generals.
     * @param {alumnos_prioritarios_preescolar_generalCreateManyArgs} args - Arguments to create many Alumnos_prioritarios_preescolar_generals.
     * @example
     * // Create many Alumnos_prioritarios_preescolar_generals
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends alumnos_prioritarios_preescolar_generalCreateManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Alumnos_prioritarios_preescolar_generals and returns the data saved in the database.
     * @param {alumnos_prioritarios_preescolar_generalCreateManyAndReturnArgs} args - Arguments to create many Alumnos_prioritarios_preescolar_generals.
     * @example
     * // Create many Alumnos_prioritarios_preescolar_generals
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Alumnos_prioritarios_preescolar_generals and only return the `cv_cct`
     * const alumnos_prioritarios_preescolar_generalWithCv_cctOnly = await prisma.alumnos_prioritarios_preescolar_general.createManyAndReturn({
     *   select: { cv_cct: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends alumnos_prioritarios_preescolar_generalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Alumnos_prioritarios_preescolar_general.
     * @param {alumnos_prioritarios_preescolar_generalDeleteArgs} args - Arguments to delete one Alumnos_prioritarios_preescolar_general.
     * @example
     * // Delete one Alumnos_prioritarios_preescolar_general
     * const Alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.delete({
     *   where: {
     *     // ... filter to delete one Alumnos_prioritarios_preescolar_general
     *   }
     * })
     *
     */
    delete<T extends alumnos_prioritarios_preescolar_generalDeleteArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalDeleteArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_preescolar_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alumnos_prioritarios_preescolar_general.
     * @param {alumnos_prioritarios_preescolar_generalUpdateArgs} args - Arguments to update one Alumnos_prioritarios_preescolar_general.
     * @example
     * // Update one Alumnos_prioritarios_preescolar_general
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends alumnos_prioritarios_preescolar_generalUpdateArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalUpdateArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_preescolar_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alumnos_prioritarios_preescolar_generals.
     * @param {alumnos_prioritarios_preescolar_generalDeleteManyArgs} args - Arguments to filter Alumnos_prioritarios_preescolar_generals to delete.
     * @example
     * // Delete a few Alumnos_prioritarios_preescolar_generals
     * const { count } = await prisma.alumnos_prioritarios_preescolar_general.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends alumnos_prioritarios_preescolar_generalDeleteManyArgs>(args?: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos_prioritarios_preescolar_generals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_preescolar_generalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos_prioritarios_preescolar_generals
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends alumnos_prioritarios_preescolar_generalUpdateManyArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos_prioritarios_preescolar_generals and returns the data updated in the database.
     * @param {alumnos_prioritarios_preescolar_generalUpdateManyAndReturnArgs} args - Arguments to update many Alumnos_prioritarios_preescolar_generals.
     * @example
     * // Update many Alumnos_prioritarios_preescolar_generals
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Alumnos_prioritarios_preescolar_generals and only return the `cv_cct`
     * const alumnos_prioritarios_preescolar_generalWithCv_cctOnly = await prisma.alumnos_prioritarios_preescolar_general.updateManyAndReturn({
     *   select: { cv_cct: true },
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
    updateManyAndReturn<T extends alumnos_prioritarios_preescolar_generalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Alumnos_prioritarios_preescolar_general.
     * @param {alumnos_prioritarios_preescolar_generalUpsertArgs} args - Arguments to update or create a Alumnos_prioritarios_preescolar_general.
     * @example
     * // Update or create a Alumnos_prioritarios_preescolar_general
     * const alumnos_prioritarios_preescolar_general = await prisma.alumnos_prioritarios_preescolar_general.upsert({
     *   create: {
     *     // ... data to create a Alumnos_prioritarios_preescolar_general
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumnos_prioritarios_preescolar_general we want to update
     *   }
     * })
     */
    upsert<T extends alumnos_prioritarios_preescolar_generalUpsertArgs>(args: Prisma.SelectSubset<T, alumnos_prioritarios_preescolar_generalUpsertArgs<ExtArgs>>): Prisma.Prisma__alumnos_prioritarios_preescolar_generalClient<runtime.Types.Result.GetResult<Prisma.$alumnos_prioritarios_preescolar_generalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alumnos_prioritarios_preescolar_generals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_preescolar_generalCountArgs} args - Arguments to filter Alumnos_prioritarios_preescolar_generals to count.
     * @example
     * // Count the number of Alumnos_prioritarios_preescolar_generals
     * const count = await prisma.alumnos_prioritarios_preescolar_general.count({
     *   where: {
     *     // ... the filter for the Alumnos_prioritarios_preescolar_generals we want to count
     *   }
     * })
    **/
    count<T extends alumnos_prioritarios_preescolar_generalCountArgs>(args?: Prisma.Subset<T, alumnos_prioritarios_preescolar_generalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Alumnos_prioritarios_preescolar_generalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alumnos_prioritarios_preescolar_general.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Alumnos_prioritarios_preescolar_generalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Alumnos_prioritarios_preescolar_generalAggregateArgs>(args: Prisma.Subset<T, Alumnos_prioritarios_preescolar_generalAggregateArgs>): Prisma.PrismaPromise<GetAlumnos_prioritarios_preescolar_generalAggregateType<T>>;
    /**
     * Group by Alumnos_prioritarios_preescolar_general.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnos_prioritarios_preescolar_generalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends alumnos_prioritarios_preescolar_generalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: alumnos_prioritarios_preescolar_generalGroupByArgs['orderBy'];
    } : {
        orderBy?: alumnos_prioritarios_preescolar_generalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, alumnos_prioritarios_preescolar_generalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnos_prioritarios_preescolar_generalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the alumnos_prioritarios_preescolar_general model
     */
    readonly fields: alumnos_prioritarios_preescolar_generalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for alumnos_prioritarios_preescolar_general.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__alumnos_prioritarios_preescolar_generalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the alumnos_prioritarios_preescolar_general model
 */
export interface alumnos_prioritarios_preescolar_generalFieldRefs {
    readonly cv_cct: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly Ent: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly LLAVE: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly Nombre_Alumno: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly Matr_Edo: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Boolean'>;
    readonly Id_Turno: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Boolean'>;
    readonly CONTROL: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly Id_Nivel: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Boolean'>;
    readonly NIVEL: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly SUBNIVEL: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly OPCION_EDUCATIVA: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly TURNO: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly GRADO: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly Sexo: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly GRUPO: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly CCT_SECTOR: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly SECTOR: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly CCT_ZONA: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly ZONA: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2LE1C1A1: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2DE1C1A2: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2LE1C2A1: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2SE1C2A2: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2LE1C3A1: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2EE1C3A2: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2SE2C1A1: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2LE2C2A1: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2EE2C3A1: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2LE2C4A1: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly KX2DE2C4A2: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Decimal'>;
    readonly Nivel_Lenguajes: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly Nivel_Saberes: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly Nivel_Humano: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly Nivel_Etica: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly Tipo: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly En_escuela_prioritaria: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'String'>;
    readonly id: Prisma.FieldRef<"alumnos_prioritarios_preescolar_general", 'Int'>;
}
/**
 * alumnos_prioritarios_preescolar_general findUnique
 */
export type alumnos_prioritarios_preescolar_generalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_preescolar_general to fetch.
     */
    where: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general findUniqueOrThrow
 */
export type alumnos_prioritarios_preescolar_generalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_preescolar_general to fetch.
     */
    where: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general findFirst
 */
export type alumnos_prioritarios_preescolar_generalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_preescolar_general to fetch.
     */
    where?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_preescolar_generals to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_preescolar_generalOrderByWithRelationInput | Prisma.alumnos_prioritarios_preescolar_generalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos_prioritarios_preescolar_generals.
     */
    cursor?: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_preescolar_generals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_preescolar_generals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos_prioritarios_preescolar_generals.
     */
    distinct?: Prisma.Alumnos_prioritarios_preescolar_generalScalarFieldEnum | Prisma.Alumnos_prioritarios_preescolar_generalScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general findFirstOrThrow
 */
export type alumnos_prioritarios_preescolar_generalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_preescolar_general to fetch.
     */
    where?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_preescolar_generals to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_preescolar_generalOrderByWithRelationInput | Prisma.alumnos_prioritarios_preescolar_generalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos_prioritarios_preescolar_generals.
     */
    cursor?: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_preescolar_generals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_preescolar_generals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos_prioritarios_preescolar_generals.
     */
    distinct?: Prisma.Alumnos_prioritarios_preescolar_generalScalarFieldEnum | Prisma.Alumnos_prioritarios_preescolar_generalScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general findMany
 */
export type alumnos_prioritarios_preescolar_generalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * Filter, which alumnos_prioritarios_preescolar_generals to fetch.
     */
    where?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos_prioritarios_preescolar_generals to fetch.
     */
    orderBy?: Prisma.alumnos_prioritarios_preescolar_generalOrderByWithRelationInput | Prisma.alumnos_prioritarios_preescolar_generalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing alumnos_prioritarios_preescolar_generals.
     */
    cursor?: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos_prioritarios_preescolar_generals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos_prioritarios_preescolar_generals.
     */
    skip?: number;
    distinct?: Prisma.Alumnos_prioritarios_preescolar_generalScalarFieldEnum | Prisma.Alumnos_prioritarios_preescolar_generalScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general create
 */
export type alumnos_prioritarios_preescolar_generalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * The data needed to create a alumnos_prioritarios_preescolar_general.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_preescolar_generalCreateInput, Prisma.alumnos_prioritarios_preescolar_generalUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general createMany
 */
export type alumnos_prioritarios_preescolar_generalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumnos_prioritarios_preescolar_generals.
     */
    data: Prisma.alumnos_prioritarios_preescolar_generalCreateManyInput | Prisma.alumnos_prioritarios_preescolar_generalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnos_prioritarios_preescolar_general createManyAndReturn
 */
export type alumnos_prioritarios_preescolar_generalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * The data used to create many alumnos_prioritarios_preescolar_generals.
     */
    data: Prisma.alumnos_prioritarios_preescolar_generalCreateManyInput | Prisma.alumnos_prioritarios_preescolar_generalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnos_prioritarios_preescolar_general update
 */
export type alumnos_prioritarios_preescolar_generalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * The data needed to update a alumnos_prioritarios_preescolar_general.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_preescolar_generalUpdateInput, Prisma.alumnos_prioritarios_preescolar_generalUncheckedUpdateInput>;
    /**
     * Choose, which alumnos_prioritarios_preescolar_general to update.
     */
    where: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general updateMany
 */
export type alumnos_prioritarios_preescolar_generalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update alumnos_prioritarios_preescolar_generals.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_preescolar_generalUpdateManyMutationInput, Prisma.alumnos_prioritarios_preescolar_generalUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos_prioritarios_preescolar_generals to update
     */
    where?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput;
    /**
     * Limit how many alumnos_prioritarios_preescolar_generals to update.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_preescolar_general updateManyAndReturn
 */
export type alumnos_prioritarios_preescolar_generalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * The data used to update alumnos_prioritarios_preescolar_generals.
     */
    data: Prisma.XOR<Prisma.alumnos_prioritarios_preescolar_generalUpdateManyMutationInput, Prisma.alumnos_prioritarios_preescolar_generalUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos_prioritarios_preescolar_generals to update
     */
    where?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput;
    /**
     * Limit how many alumnos_prioritarios_preescolar_generals to update.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_preescolar_general upsert
 */
export type alumnos_prioritarios_preescolar_generalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * The filter to search for the alumnos_prioritarios_preescolar_general to update in case it exists.
     */
    where: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    /**
     * In case the alumnos_prioritarios_preescolar_general found by the `where` argument doesn't exist, create a new alumnos_prioritarios_preescolar_general with this data.
     */
    create: Prisma.XOR<Prisma.alumnos_prioritarios_preescolar_generalCreateInput, Prisma.alumnos_prioritarios_preescolar_generalUncheckedCreateInput>;
    /**
     * In case the alumnos_prioritarios_preescolar_general was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.alumnos_prioritarios_preescolar_generalUpdateInput, Prisma.alumnos_prioritarios_preescolar_generalUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general delete
 */
export type alumnos_prioritarios_preescolar_generalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
    /**
     * Filter which alumnos_prioritarios_preescolar_general to delete.
     */
    where: Prisma.alumnos_prioritarios_preescolar_generalWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * alumnos_prioritarios_preescolar_general deleteMany
 */
export type alumnos_prioritarios_preescolar_generalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos_prioritarios_preescolar_generals to delete
     */
    where?: Prisma.alumnos_prioritarios_preescolar_generalWhereInput;
    /**
     * Limit how many alumnos_prioritarios_preescolar_generals to delete.
     */
    limit?: number;
};
/**
 * alumnos_prioritarios_preescolar_general without action
 */
export type alumnos_prioritarios_preescolar_generalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnos_prioritarios_preescolar_general
     */
    select?: Prisma.alumnos_prioritarios_preescolar_generalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnos_prioritarios_preescolar_general
     */
    omit?: Prisma.alumnos_prioritarios_preescolar_generalOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=alumnos_prioritarios_preescolar_general.d.ts.map