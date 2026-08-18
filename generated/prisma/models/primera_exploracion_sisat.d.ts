import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model primera_exploracion_sisat
 *
 */
export type primera_exploracion_sisatModel = runtime.Types.Result.DefaultSelection<Prisma.$primera_exploracion_sisatPayload>;
export type AggregatePrimera_exploracion_sisat = {
    _count: Primera_exploracion_sisatCountAggregateOutputType | null;
    _avg: Primera_exploracion_sisatAvgAggregateOutputType | null;
    _sum: Primera_exploracion_sisatSumAggregateOutputType | null;
    _min: Primera_exploracion_sisatMinAggregateOutputType | null;
    _max: Primera_exploracion_sisatMaxAggregateOutputType | null;
};
export type Primera_exploracion_sisatAvgAggregateOutputType = {
    grado: number | null;
    matricula: number | null;
    primera_exploracion: number | null;
    sin_registro: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    participacion: number | null;
    id: number | null;
};
export type Primera_exploracion_sisatSumAggregateOutputType = {
    grado: number | null;
    matricula: number | null;
    primera_exploracion: number | null;
    sin_registro: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    participacion: number | null;
    id: number | null;
};
export type Primera_exploracion_sisatMinAggregateOutputType = {
    cct: string | null;
    nombre: string | null;
    opcion_educativa: string | null;
    prioritaria: string | null;
    ambito: string | null;
    grado: number | null;
    materia: string | null;
    matricula: number | null;
    primera_exploracion: number | null;
    sin_registro: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    participacion: number | null;
    id: number | null;
};
export type Primera_exploracion_sisatMaxAggregateOutputType = {
    cct: string | null;
    nombre: string | null;
    opcion_educativa: string | null;
    prioritaria: string | null;
    ambito: string | null;
    grado: number | null;
    materia: string | null;
    matricula: number | null;
    primera_exploracion: number | null;
    sin_registro: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    participacion: number | null;
    id: number | null;
};
export type Primera_exploracion_sisatCountAggregateOutputType = {
    cct: number;
    nombre: number;
    opcion_educativa: number;
    prioritaria: number;
    ambito: number;
    grado: number;
    materia: number;
    matricula: number;
    primera_exploracion: number;
    sin_registro: number;
    total_ra: number;
    porcentaje_ra: number;
    total_ed: number;
    porcentaje_ed: number;
    total_ne: number;
    porcentaje_ne: number;
    participacion: number;
    id: number;
    _all: number;
};
export type Primera_exploracion_sisatAvgAggregateInputType = {
    grado?: true;
    matricula?: true;
    primera_exploracion?: true;
    sin_registro?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    participacion?: true;
    id?: true;
};
export type Primera_exploracion_sisatSumAggregateInputType = {
    grado?: true;
    matricula?: true;
    primera_exploracion?: true;
    sin_registro?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    participacion?: true;
    id?: true;
};
export type Primera_exploracion_sisatMinAggregateInputType = {
    cct?: true;
    nombre?: true;
    opcion_educativa?: true;
    prioritaria?: true;
    ambito?: true;
    grado?: true;
    materia?: true;
    matricula?: true;
    primera_exploracion?: true;
    sin_registro?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    participacion?: true;
    id?: true;
};
export type Primera_exploracion_sisatMaxAggregateInputType = {
    cct?: true;
    nombre?: true;
    opcion_educativa?: true;
    prioritaria?: true;
    ambito?: true;
    grado?: true;
    materia?: true;
    matricula?: true;
    primera_exploracion?: true;
    sin_registro?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    participacion?: true;
    id?: true;
};
export type Primera_exploracion_sisatCountAggregateInputType = {
    cct?: true;
    nombre?: true;
    opcion_educativa?: true;
    prioritaria?: true;
    ambito?: true;
    grado?: true;
    materia?: true;
    matricula?: true;
    primera_exploracion?: true;
    sin_registro?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    participacion?: true;
    id?: true;
    _all?: true;
};
export type Primera_exploracion_sisatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which primera_exploracion_sisat to aggregate.
     */
    where?: Prisma.primera_exploracion_sisatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of primera_exploracion_sisats to fetch.
     */
    orderBy?: Prisma.primera_exploracion_sisatOrderByWithRelationInput | Prisma.primera_exploracion_sisatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.primera_exploracion_sisatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` primera_exploracion_sisats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` primera_exploracion_sisats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned primera_exploracion_sisats
    **/
    _count?: true | Primera_exploracion_sisatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Primera_exploracion_sisatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Primera_exploracion_sisatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Primera_exploracion_sisatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Primera_exploracion_sisatMaxAggregateInputType;
};
export type GetPrimera_exploracion_sisatAggregateType<T extends Primera_exploracion_sisatAggregateArgs> = {
    [P in keyof T & keyof AggregatePrimera_exploracion_sisat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrimera_exploracion_sisat[P]> : Prisma.GetScalarType<T[P], AggregatePrimera_exploracion_sisat[P]>;
};
export type primera_exploracion_sisatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.primera_exploracion_sisatWhereInput;
    orderBy?: Prisma.primera_exploracion_sisatOrderByWithAggregationInput | Prisma.primera_exploracion_sisatOrderByWithAggregationInput[];
    by: Prisma.Primera_exploracion_sisatScalarFieldEnum[] | Prisma.Primera_exploracion_sisatScalarFieldEnum;
    having?: Prisma.primera_exploracion_sisatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Primera_exploracion_sisatCountAggregateInputType | true;
    _avg?: Primera_exploracion_sisatAvgAggregateInputType;
    _sum?: Primera_exploracion_sisatSumAggregateInputType;
    _min?: Primera_exploracion_sisatMinAggregateInputType;
    _max?: Primera_exploracion_sisatMaxAggregateInputType;
};
export type Primera_exploracion_sisatGroupByOutputType = {
    cct: string | null;
    nombre: string | null;
    opcion_educativa: string | null;
    prioritaria: string | null;
    ambito: string | null;
    grado: number | null;
    materia: string | null;
    matricula: number | null;
    primera_exploracion: number | null;
    sin_registro: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    participacion: number | null;
    id: number;
    _count: Primera_exploracion_sisatCountAggregateOutputType | null;
    _avg: Primera_exploracion_sisatAvgAggregateOutputType | null;
    _sum: Primera_exploracion_sisatSumAggregateOutputType | null;
    _min: Primera_exploracion_sisatMinAggregateOutputType | null;
    _max: Primera_exploracion_sisatMaxAggregateOutputType | null;
};
type GetPrimera_exploracion_sisatGroupByPayload<T extends primera_exploracion_sisatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Primera_exploracion_sisatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Primera_exploracion_sisatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Primera_exploracion_sisatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Primera_exploracion_sisatGroupByOutputType[P]>;
}>>;
export type primera_exploracion_sisatWhereInput = {
    AND?: Prisma.primera_exploracion_sisatWhereInput | Prisma.primera_exploracion_sisatWhereInput[];
    OR?: Prisma.primera_exploracion_sisatWhereInput[];
    NOT?: Prisma.primera_exploracion_sisatWhereInput | Prisma.primera_exploracion_sisatWhereInput[];
    cct?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    nombre?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    prioritaria?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    ambito?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    grado?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    materia?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    matricula?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    primera_exploracion?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    sin_registro?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    total_ra?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ra?: Prisma.DecimalNullableFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ed?: Prisma.DecimalNullableFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ne?: Prisma.DecimalNullableFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    id?: Prisma.IntFilter<"primera_exploracion_sisat"> | number;
};
export type primera_exploracion_sisatOrderByWithRelationInput = {
    cct?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    prioritaria?: Prisma.SortOrderInput | Prisma.SortOrder;
    ambito?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    materia?: Prisma.SortOrderInput | Prisma.SortOrder;
    matricula?: Prisma.SortOrderInput | Prisma.SortOrder;
    primera_exploracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    sin_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_ra?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_ed?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_ne?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrderInput | Prisma.SortOrder;
    participacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type primera_exploracion_sisatWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.primera_exploracion_sisatWhereInput | Prisma.primera_exploracion_sisatWhereInput[];
    OR?: Prisma.primera_exploracion_sisatWhereInput[];
    NOT?: Prisma.primera_exploracion_sisatWhereInput | Prisma.primera_exploracion_sisatWhereInput[];
    cct?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    nombre?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    prioritaria?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    ambito?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    grado?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    materia?: Prisma.StringNullableFilter<"primera_exploracion_sisat"> | string | null;
    matricula?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    primera_exploracion?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    sin_registro?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    total_ra?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ra?: Prisma.DecimalNullableFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ed?: Prisma.DecimalNullableFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ne?: Prisma.DecimalNullableFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: Prisma.IntNullableFilter<"primera_exploracion_sisat"> | number | null;
}, "id">;
export type primera_exploracion_sisatOrderByWithAggregationInput = {
    cct?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    prioritaria?: Prisma.SortOrderInput | Prisma.SortOrder;
    ambito?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    materia?: Prisma.SortOrderInput | Prisma.SortOrder;
    matricula?: Prisma.SortOrderInput | Prisma.SortOrder;
    primera_exploracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    sin_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_ra?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_ed?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_ne?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrderInput | Prisma.SortOrder;
    participacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    _count?: Prisma.primera_exploracion_sisatCountOrderByAggregateInput;
    _avg?: Prisma.primera_exploracion_sisatAvgOrderByAggregateInput;
    _max?: Prisma.primera_exploracion_sisatMaxOrderByAggregateInput;
    _min?: Prisma.primera_exploracion_sisatMinOrderByAggregateInput;
    _sum?: Prisma.primera_exploracion_sisatSumOrderByAggregateInput;
};
export type primera_exploracion_sisatScalarWhereWithAggregatesInput = {
    AND?: Prisma.primera_exploracion_sisatScalarWhereWithAggregatesInput | Prisma.primera_exploracion_sisatScalarWhereWithAggregatesInput[];
    OR?: Prisma.primera_exploracion_sisatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.primera_exploracion_sisatScalarWhereWithAggregatesInput | Prisma.primera_exploracion_sisatScalarWhereWithAggregatesInput[];
    cct?: Prisma.StringNullableWithAggregatesFilter<"primera_exploracion_sisat"> | string | null;
    nombre?: Prisma.StringNullableWithAggregatesFilter<"primera_exploracion_sisat"> | string | null;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"primera_exploracion_sisat"> | string | null;
    prioritaria?: Prisma.StringNullableWithAggregatesFilter<"primera_exploracion_sisat"> | string | null;
    ambito?: Prisma.StringNullableWithAggregatesFilter<"primera_exploracion_sisat"> | string | null;
    grado?: Prisma.IntNullableWithAggregatesFilter<"primera_exploracion_sisat"> | number | null;
    materia?: Prisma.StringNullableWithAggregatesFilter<"primera_exploracion_sisat"> | string | null;
    matricula?: Prisma.IntNullableWithAggregatesFilter<"primera_exploracion_sisat"> | number | null;
    primera_exploracion?: Prisma.IntNullableWithAggregatesFilter<"primera_exploracion_sisat"> | number | null;
    sin_registro?: Prisma.IntNullableWithAggregatesFilter<"primera_exploracion_sisat"> | number | null;
    total_ra?: Prisma.IntNullableWithAggregatesFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ra?: Prisma.DecimalNullableWithAggregatesFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: Prisma.IntNullableWithAggregatesFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ed?: Prisma.DecimalNullableWithAggregatesFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: Prisma.IntNullableWithAggregatesFilter<"primera_exploracion_sisat"> | number | null;
    porcentaje_ne?: Prisma.DecimalNullableWithAggregatesFilter<"primera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: Prisma.IntNullableWithAggregatesFilter<"primera_exploracion_sisat"> | number | null;
    id?: Prisma.IntWithAggregatesFilter<"primera_exploracion_sisat"> | number;
};
export type primera_exploracion_sisatCreateInput = {
    cct?: string | null;
    nombre?: string | null;
    opcion_educativa?: string | null;
    prioritaria?: string | null;
    ambito?: string | null;
    grado?: number | null;
    materia?: string | null;
    matricula?: number | null;
    primera_exploracion?: number | null;
    sin_registro?: number | null;
    total_ra?: number | null;
    porcentaje_ra?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: number | null;
    porcentaje_ed?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: number | null;
    porcentaje_ne?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: number | null;
};
export type primera_exploracion_sisatUncheckedCreateInput = {
    cct?: string | null;
    nombre?: string | null;
    opcion_educativa?: string | null;
    prioritaria?: string | null;
    ambito?: string | null;
    grado?: number | null;
    materia?: string | null;
    matricula?: number | null;
    primera_exploracion?: number | null;
    sin_registro?: number | null;
    total_ra?: number | null;
    porcentaje_ra?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: number | null;
    porcentaje_ed?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: number | null;
    porcentaje_ne?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: number | null;
    id?: number;
};
export type primera_exploracion_sisatUpdateInput = {
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioritaria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambito?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    materia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    primera_exploracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sin_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_ra?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ra?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ed?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ne?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type primera_exploracion_sisatUncheckedUpdateInput = {
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioritaria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambito?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    materia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    primera_exploracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sin_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_ra?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ra?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ed?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ne?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type primera_exploracion_sisatCreateManyInput = {
    cct?: string | null;
    nombre?: string | null;
    opcion_educativa?: string | null;
    prioritaria?: string | null;
    ambito?: string | null;
    grado?: number | null;
    materia?: string | null;
    matricula?: number | null;
    primera_exploracion?: number | null;
    sin_registro?: number | null;
    total_ra?: number | null;
    porcentaje_ra?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: number | null;
    porcentaje_ed?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: number | null;
    porcentaje_ne?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: number | null;
    id?: number;
};
export type primera_exploracion_sisatUpdateManyMutationInput = {
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioritaria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambito?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    materia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    primera_exploracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sin_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_ra?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ra?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ed?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ne?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type primera_exploracion_sisatUncheckedUpdateManyInput = {
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioritaria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambito?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    materia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    primera_exploracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sin_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_ra?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ra?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ed?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_ne?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_ne?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    participacion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type primera_exploracion_sisatCountOrderByAggregateInput = {
    cct?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    prioritaria?: Prisma.SortOrder;
    ambito?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    primera_exploracion?: Prisma.SortOrder;
    sin_registro?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    participacion?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type primera_exploracion_sisatAvgOrderByAggregateInput = {
    grado?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    primera_exploracion?: Prisma.SortOrder;
    sin_registro?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    participacion?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type primera_exploracion_sisatMaxOrderByAggregateInput = {
    cct?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    prioritaria?: Prisma.SortOrder;
    ambito?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    primera_exploracion?: Prisma.SortOrder;
    sin_registro?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    participacion?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type primera_exploracion_sisatMinOrderByAggregateInput = {
    cct?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    prioritaria?: Prisma.SortOrder;
    ambito?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    primera_exploracion?: Prisma.SortOrder;
    sin_registro?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    participacion?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type primera_exploracion_sisatSumOrderByAggregateInput = {
    grado?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    primera_exploracion?: Prisma.SortOrder;
    sin_registro?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    participacion?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type primera_exploracion_sisatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cct?: boolean;
    nombre?: boolean;
    opcion_educativa?: boolean;
    prioritaria?: boolean;
    ambito?: boolean;
    grado?: boolean;
    materia?: boolean;
    matricula?: boolean;
    primera_exploracion?: boolean;
    sin_registro?: boolean;
    total_ra?: boolean;
    porcentaje_ra?: boolean;
    total_ed?: boolean;
    porcentaje_ed?: boolean;
    total_ne?: boolean;
    porcentaje_ne?: boolean;
    participacion?: boolean;
    id?: boolean;
}, ExtArgs["result"]["primera_exploracion_sisat"]>;
export type primera_exploracion_sisatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cct?: boolean;
    nombre?: boolean;
    opcion_educativa?: boolean;
    prioritaria?: boolean;
    ambito?: boolean;
    grado?: boolean;
    materia?: boolean;
    matricula?: boolean;
    primera_exploracion?: boolean;
    sin_registro?: boolean;
    total_ra?: boolean;
    porcentaje_ra?: boolean;
    total_ed?: boolean;
    porcentaje_ed?: boolean;
    total_ne?: boolean;
    porcentaje_ne?: boolean;
    participacion?: boolean;
    id?: boolean;
}, ExtArgs["result"]["primera_exploracion_sisat"]>;
export type primera_exploracion_sisatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cct?: boolean;
    nombre?: boolean;
    opcion_educativa?: boolean;
    prioritaria?: boolean;
    ambito?: boolean;
    grado?: boolean;
    materia?: boolean;
    matricula?: boolean;
    primera_exploracion?: boolean;
    sin_registro?: boolean;
    total_ra?: boolean;
    porcentaje_ra?: boolean;
    total_ed?: boolean;
    porcentaje_ed?: boolean;
    total_ne?: boolean;
    porcentaje_ne?: boolean;
    participacion?: boolean;
    id?: boolean;
}, ExtArgs["result"]["primera_exploracion_sisat"]>;
export type primera_exploracion_sisatSelectScalar = {
    cct?: boolean;
    nombre?: boolean;
    opcion_educativa?: boolean;
    prioritaria?: boolean;
    ambito?: boolean;
    grado?: boolean;
    materia?: boolean;
    matricula?: boolean;
    primera_exploracion?: boolean;
    sin_registro?: boolean;
    total_ra?: boolean;
    porcentaje_ra?: boolean;
    total_ed?: boolean;
    porcentaje_ed?: boolean;
    total_ne?: boolean;
    porcentaje_ne?: boolean;
    participacion?: boolean;
    id?: boolean;
};
export type primera_exploracion_sisatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cct" | "nombre" | "opcion_educativa" | "prioritaria" | "ambito" | "grado" | "materia" | "matricula" | "primera_exploracion" | "sin_registro" | "total_ra" | "porcentaje_ra" | "total_ed" | "porcentaje_ed" | "total_ne" | "porcentaje_ne" | "participacion" | "id", ExtArgs["result"]["primera_exploracion_sisat"]>;
export type $primera_exploracion_sisatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "primera_exploracion_sisat";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cct: string | null;
        nombre: string | null;
        opcion_educativa: string | null;
        prioritaria: string | null;
        ambito: string | null;
        grado: number | null;
        materia: string | null;
        matricula: number | null;
        primera_exploracion: number | null;
        sin_registro: number | null;
        total_ra: number | null;
        porcentaje_ra: runtime.Decimal | null;
        total_ed: number | null;
        porcentaje_ed: runtime.Decimal | null;
        total_ne: number | null;
        porcentaje_ne: runtime.Decimal | null;
        participacion: number | null;
        id: number;
    }, ExtArgs["result"]["primera_exploracion_sisat"]>;
    composites: {};
};
export type primera_exploracion_sisatGetPayload<S extends boolean | null | undefined | primera_exploracion_sisatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload, S>;
export type primera_exploracion_sisatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<primera_exploracion_sisatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Primera_exploracion_sisatCountAggregateInputType | true;
};
export interface primera_exploracion_sisatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['primera_exploracion_sisat'];
        meta: {
            name: 'primera_exploracion_sisat';
        };
    };
    /**
     * Find zero or one Primera_exploracion_sisat that matches the filter.
     * @param {primera_exploracion_sisatFindUniqueArgs} args - Arguments to find a Primera_exploracion_sisat
     * @example
     * // Get one Primera_exploracion_sisat
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends primera_exploracion_sisatFindUniqueArgs>(args: Prisma.SelectSubset<T, primera_exploracion_sisatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__primera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Primera_exploracion_sisat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {primera_exploracion_sisatFindUniqueOrThrowArgs} args - Arguments to find a Primera_exploracion_sisat
     * @example
     * // Get one Primera_exploracion_sisat
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends primera_exploracion_sisatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, primera_exploracion_sisatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__primera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Primera_exploracion_sisat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primera_exploracion_sisatFindFirstArgs} args - Arguments to find a Primera_exploracion_sisat
     * @example
     * // Get one Primera_exploracion_sisat
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends primera_exploracion_sisatFindFirstArgs>(args?: Prisma.SelectSubset<T, primera_exploracion_sisatFindFirstArgs<ExtArgs>>): Prisma.Prisma__primera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Primera_exploracion_sisat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primera_exploracion_sisatFindFirstOrThrowArgs} args - Arguments to find a Primera_exploracion_sisat
     * @example
     * // Get one Primera_exploracion_sisat
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends primera_exploracion_sisatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, primera_exploracion_sisatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__primera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Primera_exploracion_sisats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primera_exploracion_sisatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Primera_exploracion_sisats
     * const primera_exploracion_sisats = await prisma.primera_exploracion_sisat.findMany()
     *
     * // Get first 10 Primera_exploracion_sisats
     * const primera_exploracion_sisats = await prisma.primera_exploracion_sisat.findMany({ take: 10 })
     *
     * // Only select the `cct`
     * const primera_exploracion_sisatWithCctOnly = await prisma.primera_exploracion_sisat.findMany({ select: { cct: true } })
     *
     */
    findMany<T extends primera_exploracion_sisatFindManyArgs>(args?: Prisma.SelectSubset<T, primera_exploracion_sisatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Primera_exploracion_sisat.
     * @param {primera_exploracion_sisatCreateArgs} args - Arguments to create a Primera_exploracion_sisat.
     * @example
     * // Create one Primera_exploracion_sisat
     * const Primera_exploracion_sisat = await prisma.primera_exploracion_sisat.create({
     *   data: {
     *     // ... data to create a Primera_exploracion_sisat
     *   }
     * })
     *
     */
    create<T extends primera_exploracion_sisatCreateArgs>(args: Prisma.SelectSubset<T, primera_exploracion_sisatCreateArgs<ExtArgs>>): Prisma.Prisma__primera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Primera_exploracion_sisats.
     * @param {primera_exploracion_sisatCreateManyArgs} args - Arguments to create many Primera_exploracion_sisats.
     * @example
     * // Create many Primera_exploracion_sisats
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends primera_exploracion_sisatCreateManyArgs>(args?: Prisma.SelectSubset<T, primera_exploracion_sisatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Primera_exploracion_sisats and returns the data saved in the database.
     * @param {primera_exploracion_sisatCreateManyAndReturnArgs} args - Arguments to create many Primera_exploracion_sisats.
     * @example
     * // Create many Primera_exploracion_sisats
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Primera_exploracion_sisats and only return the `cct`
     * const primera_exploracion_sisatWithCctOnly = await prisma.primera_exploracion_sisat.createManyAndReturn({
     *   select: { cct: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends primera_exploracion_sisatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, primera_exploracion_sisatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Primera_exploracion_sisat.
     * @param {primera_exploracion_sisatDeleteArgs} args - Arguments to delete one Primera_exploracion_sisat.
     * @example
     * // Delete one Primera_exploracion_sisat
     * const Primera_exploracion_sisat = await prisma.primera_exploracion_sisat.delete({
     *   where: {
     *     // ... filter to delete one Primera_exploracion_sisat
     *   }
     * })
     *
     */
    delete<T extends primera_exploracion_sisatDeleteArgs>(args: Prisma.SelectSubset<T, primera_exploracion_sisatDeleteArgs<ExtArgs>>): Prisma.Prisma__primera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Primera_exploracion_sisat.
     * @param {primera_exploracion_sisatUpdateArgs} args - Arguments to update one Primera_exploracion_sisat.
     * @example
     * // Update one Primera_exploracion_sisat
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends primera_exploracion_sisatUpdateArgs>(args: Prisma.SelectSubset<T, primera_exploracion_sisatUpdateArgs<ExtArgs>>): Prisma.Prisma__primera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Primera_exploracion_sisats.
     * @param {primera_exploracion_sisatDeleteManyArgs} args - Arguments to filter Primera_exploracion_sisats to delete.
     * @example
     * // Delete a few Primera_exploracion_sisats
     * const { count } = await prisma.primera_exploracion_sisat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends primera_exploracion_sisatDeleteManyArgs>(args?: Prisma.SelectSubset<T, primera_exploracion_sisatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Primera_exploracion_sisats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primera_exploracion_sisatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Primera_exploracion_sisats
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends primera_exploracion_sisatUpdateManyArgs>(args: Prisma.SelectSubset<T, primera_exploracion_sisatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Primera_exploracion_sisats and returns the data updated in the database.
     * @param {primera_exploracion_sisatUpdateManyAndReturnArgs} args - Arguments to update many Primera_exploracion_sisats.
     * @example
     * // Update many Primera_exploracion_sisats
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Primera_exploracion_sisats and only return the `cct`
     * const primera_exploracion_sisatWithCctOnly = await prisma.primera_exploracion_sisat.updateManyAndReturn({
     *   select: { cct: true },
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
    updateManyAndReturn<T extends primera_exploracion_sisatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, primera_exploracion_sisatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Primera_exploracion_sisat.
     * @param {primera_exploracion_sisatUpsertArgs} args - Arguments to update or create a Primera_exploracion_sisat.
     * @example
     * // Update or create a Primera_exploracion_sisat
     * const primera_exploracion_sisat = await prisma.primera_exploracion_sisat.upsert({
     *   create: {
     *     // ... data to create a Primera_exploracion_sisat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Primera_exploracion_sisat we want to update
     *   }
     * })
     */
    upsert<T extends primera_exploracion_sisatUpsertArgs>(args: Prisma.SelectSubset<T, primera_exploracion_sisatUpsertArgs<ExtArgs>>): Prisma.Prisma__primera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$primera_exploracion_sisatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Primera_exploracion_sisats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primera_exploracion_sisatCountArgs} args - Arguments to filter Primera_exploracion_sisats to count.
     * @example
     * // Count the number of Primera_exploracion_sisats
     * const count = await prisma.primera_exploracion_sisat.count({
     *   where: {
     *     // ... the filter for the Primera_exploracion_sisats we want to count
     *   }
     * })
    **/
    count<T extends primera_exploracion_sisatCountArgs>(args?: Prisma.Subset<T, primera_exploracion_sisatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Primera_exploracion_sisatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Primera_exploracion_sisat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Primera_exploracion_sisatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Primera_exploracion_sisatAggregateArgs>(args: Prisma.Subset<T, Primera_exploracion_sisatAggregateArgs>): Prisma.PrismaPromise<GetPrimera_exploracion_sisatAggregateType<T>>;
    /**
     * Group by Primera_exploracion_sisat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primera_exploracion_sisatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends primera_exploracion_sisatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: primera_exploracion_sisatGroupByArgs['orderBy'];
    } : {
        orderBy?: primera_exploracion_sisatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, primera_exploracion_sisatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrimera_exploracion_sisatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the primera_exploracion_sisat model
     */
    readonly fields: primera_exploracion_sisatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for primera_exploracion_sisat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__primera_exploracion_sisatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the primera_exploracion_sisat model
 */
export interface primera_exploracion_sisatFieldRefs {
    readonly cct: Prisma.FieldRef<"primera_exploracion_sisat", 'String'>;
    readonly nombre: Prisma.FieldRef<"primera_exploracion_sisat", 'String'>;
    readonly opcion_educativa: Prisma.FieldRef<"primera_exploracion_sisat", 'String'>;
    readonly prioritaria: Prisma.FieldRef<"primera_exploracion_sisat", 'String'>;
    readonly ambito: Prisma.FieldRef<"primera_exploracion_sisat", 'String'>;
    readonly grado: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
    readonly materia: Prisma.FieldRef<"primera_exploracion_sisat", 'String'>;
    readonly matricula: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
    readonly primera_exploracion: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
    readonly sin_registro: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
    readonly total_ra: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
    readonly porcentaje_ra: Prisma.FieldRef<"primera_exploracion_sisat", 'Decimal'>;
    readonly total_ed: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
    readonly porcentaje_ed: Prisma.FieldRef<"primera_exploracion_sisat", 'Decimal'>;
    readonly total_ne: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
    readonly porcentaje_ne: Prisma.FieldRef<"primera_exploracion_sisat", 'Decimal'>;
    readonly participacion: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
    readonly id: Prisma.FieldRef<"primera_exploracion_sisat", 'Int'>;
}
/**
 * primera_exploracion_sisat findUnique
 */
export type primera_exploracion_sisatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which primera_exploracion_sisat to fetch.
     */
    where: Prisma.primera_exploracion_sisatWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat findUniqueOrThrow
 */
export type primera_exploracion_sisatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which primera_exploracion_sisat to fetch.
     */
    where: Prisma.primera_exploracion_sisatWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat findFirst
 */
export type primera_exploracion_sisatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which primera_exploracion_sisat to fetch.
     */
    where?: Prisma.primera_exploracion_sisatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of primera_exploracion_sisats to fetch.
     */
    orderBy?: Prisma.primera_exploracion_sisatOrderByWithRelationInput | Prisma.primera_exploracion_sisatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for primera_exploracion_sisats.
     */
    cursor?: Prisma.primera_exploracion_sisatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` primera_exploracion_sisats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` primera_exploracion_sisats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of primera_exploracion_sisats.
     */
    distinct?: Prisma.Primera_exploracion_sisatScalarFieldEnum | Prisma.Primera_exploracion_sisatScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat findFirstOrThrow
 */
export type primera_exploracion_sisatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which primera_exploracion_sisat to fetch.
     */
    where?: Prisma.primera_exploracion_sisatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of primera_exploracion_sisats to fetch.
     */
    orderBy?: Prisma.primera_exploracion_sisatOrderByWithRelationInput | Prisma.primera_exploracion_sisatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for primera_exploracion_sisats.
     */
    cursor?: Prisma.primera_exploracion_sisatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` primera_exploracion_sisats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` primera_exploracion_sisats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of primera_exploracion_sisats.
     */
    distinct?: Prisma.Primera_exploracion_sisatScalarFieldEnum | Prisma.Primera_exploracion_sisatScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat findMany
 */
export type primera_exploracion_sisatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which primera_exploracion_sisats to fetch.
     */
    where?: Prisma.primera_exploracion_sisatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of primera_exploracion_sisats to fetch.
     */
    orderBy?: Prisma.primera_exploracion_sisatOrderByWithRelationInput | Prisma.primera_exploracion_sisatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing primera_exploracion_sisats.
     */
    cursor?: Prisma.primera_exploracion_sisatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` primera_exploracion_sisats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` primera_exploracion_sisats.
     */
    skip?: number;
    distinct?: Prisma.Primera_exploracion_sisatScalarFieldEnum | Prisma.Primera_exploracion_sisatScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat create
 */
export type primera_exploracion_sisatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The data needed to create a primera_exploracion_sisat.
     */
    data?: Prisma.XOR<Prisma.primera_exploracion_sisatCreateInput, Prisma.primera_exploracion_sisatUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat createMany
 */
export type primera_exploracion_sisatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many primera_exploracion_sisats.
     */
    data: Prisma.primera_exploracion_sisatCreateManyInput | Prisma.primera_exploracion_sisatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * primera_exploracion_sisat createManyAndReturn
 */
export type primera_exploracion_sisatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The data used to create many primera_exploracion_sisats.
     */
    data: Prisma.primera_exploracion_sisatCreateManyInput | Prisma.primera_exploracion_sisatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * primera_exploracion_sisat update
 */
export type primera_exploracion_sisatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The data needed to update a primera_exploracion_sisat.
     */
    data: Prisma.XOR<Prisma.primera_exploracion_sisatUpdateInput, Prisma.primera_exploracion_sisatUncheckedUpdateInput>;
    /**
     * Choose, which primera_exploracion_sisat to update.
     */
    where: Prisma.primera_exploracion_sisatWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat updateMany
 */
export type primera_exploracion_sisatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update primera_exploracion_sisats.
     */
    data: Prisma.XOR<Prisma.primera_exploracion_sisatUpdateManyMutationInput, Prisma.primera_exploracion_sisatUncheckedUpdateManyInput>;
    /**
     * Filter which primera_exploracion_sisats to update
     */
    where?: Prisma.primera_exploracion_sisatWhereInput;
    /**
     * Limit how many primera_exploracion_sisats to update.
     */
    limit?: number;
};
/**
 * primera_exploracion_sisat updateManyAndReturn
 */
export type primera_exploracion_sisatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The data used to update primera_exploracion_sisats.
     */
    data: Prisma.XOR<Prisma.primera_exploracion_sisatUpdateManyMutationInput, Prisma.primera_exploracion_sisatUncheckedUpdateManyInput>;
    /**
     * Filter which primera_exploracion_sisats to update
     */
    where?: Prisma.primera_exploracion_sisatWhereInput;
    /**
     * Limit how many primera_exploracion_sisats to update.
     */
    limit?: number;
};
/**
 * primera_exploracion_sisat upsert
 */
export type primera_exploracion_sisatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The filter to search for the primera_exploracion_sisat to update in case it exists.
     */
    where: Prisma.primera_exploracion_sisatWhereUniqueInput;
    /**
     * In case the primera_exploracion_sisat found by the `where` argument doesn't exist, create a new primera_exploracion_sisat with this data.
     */
    create: Prisma.XOR<Prisma.primera_exploracion_sisatCreateInput, Prisma.primera_exploracion_sisatUncheckedCreateInput>;
    /**
     * In case the primera_exploracion_sisat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.primera_exploracion_sisatUpdateInput, Prisma.primera_exploracion_sisatUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat delete
 */
export type primera_exploracion_sisatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter which primera_exploracion_sisat to delete.
     */
    where: Prisma.primera_exploracion_sisatWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * primera_exploracion_sisat deleteMany
 */
export type primera_exploracion_sisatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which primera_exploracion_sisats to delete
     */
    where?: Prisma.primera_exploracion_sisatWhereInput;
    /**
     * Limit how many primera_exploracion_sisats to delete.
     */
    limit?: number;
};
/**
 * primera_exploracion_sisat without action
 */
export type primera_exploracion_sisatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primera_exploracion_sisat
     */
    select?: Prisma.primera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the primera_exploracion_sisat
     */
    omit?: Prisma.primera_exploracion_sisatOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=primera_exploracion_sisat.d.ts.map