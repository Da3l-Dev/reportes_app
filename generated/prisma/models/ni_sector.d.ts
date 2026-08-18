import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ni_sector
 *
 */
export type ni_sectorModel = runtime.Types.Result.DefaultSelection<Prisma.$ni_sectorPayload>;
export type AggregateNi_sector = {
    _count: Ni_sectorCountAggregateOutputType | null;
    _avg: Ni_sectorAvgAggregateOutputType | null;
    _sum: Ni_sectorSumAggregateOutputType | null;
    _min: Ni_sectorMinAggregateOutputType | null;
    _max: Ni_sectorMaxAggregateOutputType | null;
};
export type Ni_sectorAvgAggregateOutputType = {
    id: number | null;
    no_sector: number | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_sector: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_sectorSumAggregateOutputType = {
    id: number | null;
    no_sector: number | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_sector: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_sectorMinAggregateOutputType = {
    id: number | null;
    ctt_sector: string | null;
    no_sector: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_sector: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_sectorMaxAggregateOutputType = {
    id: number | null;
    ctt_sector: string | null;
    no_sector: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_sector: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_sectorCountAggregateOutputType = {
    id: number;
    ctt_sector: number;
    no_sector: number;
    campo_formativo: number;
    nivel_integracion: number;
    grado: number;
    opcion_educativa: number;
    tipo: number;
    estudiantes_sector: number;
    estudiantes_participantes: number;
    escuelas_sector: number;
    escuelas_participantes: number;
    porcentaje_escuelas_participacion: number;
    porcentaje: number;
    _all: number;
};
export type Ni_sectorAvgAggregateInputType = {
    id?: true;
    no_sector?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_sector?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
};
export type Ni_sectorSumAggregateInputType = {
    id?: true;
    no_sector?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_sector?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
};
export type Ni_sectorMinAggregateInputType = {
    id?: true;
    ctt_sector?: true;
    no_sector?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_sector?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
};
export type Ni_sectorMaxAggregateInputType = {
    id?: true;
    ctt_sector?: true;
    no_sector?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_sector?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
};
export type Ni_sectorCountAggregateInputType = {
    id?: true;
    ctt_sector?: true;
    no_sector?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_sector?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
    _all?: true;
};
export type Ni_sectorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_sector to aggregate.
     */
    where?: Prisma.ni_sectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_sectors to fetch.
     */
    orderBy?: Prisma.ni_sectorOrderByWithRelationInput | Prisma.ni_sectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ni_sectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_sectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_sectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ni_sectors
    **/
    _count?: true | Ni_sectorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Ni_sectorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Ni_sectorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Ni_sectorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Ni_sectorMaxAggregateInputType;
};
export type GetNi_sectorAggregateType<T extends Ni_sectorAggregateArgs> = {
    [P in keyof T & keyof AggregateNi_sector]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNi_sector[P]> : Prisma.GetScalarType<T[P], AggregateNi_sector[P]>;
};
export type ni_sectorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ni_sectorWhereInput;
    orderBy?: Prisma.ni_sectorOrderByWithAggregationInput | Prisma.ni_sectorOrderByWithAggregationInput[];
    by: Prisma.Ni_sectorScalarFieldEnum[] | Prisma.Ni_sectorScalarFieldEnum;
    having?: Prisma.ni_sectorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ni_sectorCountAggregateInputType | true;
    _avg?: Ni_sectorAvgAggregateInputType;
    _sum?: Ni_sectorSumAggregateInputType;
    _min?: Ni_sectorMinAggregateInputType;
    _max?: Ni_sectorMaxAggregateInputType;
};
export type Ni_sectorGroupByOutputType = {
    id: number;
    ctt_sector: string | null;
    no_sector: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_sector: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
    _count: Ni_sectorCountAggregateOutputType | null;
    _avg: Ni_sectorAvgAggregateOutputType | null;
    _sum: Ni_sectorSumAggregateOutputType | null;
    _min: Ni_sectorMinAggregateOutputType | null;
    _max: Ni_sectorMaxAggregateOutputType | null;
};
type GetNi_sectorGroupByPayload<T extends ni_sectorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ni_sectorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ni_sectorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ni_sectorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ni_sectorGroupByOutputType[P]>;
}>>;
export type ni_sectorWhereInput = {
    AND?: Prisma.ni_sectorWhereInput | Prisma.ni_sectorWhereInput[];
    OR?: Prisma.ni_sectorWhereInput[];
    NOT?: Prisma.ni_sectorWhereInput | Prisma.ni_sectorWhereInput[];
    id?: Prisma.IntFilter<"ni_sector"> | number;
    ctt_sector?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    no_sector?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    campo_formativo?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    estudiantes_sector?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    escuelas_sector?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    escuelas_participantes?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    porcentaje_escuelas_participacion?: Prisma.DecimalNullableFilter<"ni_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.DecimalNullableFilter<"ni_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ctt_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    no_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ni_sectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ni_sectorWhereInput | Prisma.ni_sectorWhereInput[];
    OR?: Prisma.ni_sectorWhereInput[];
    NOT?: Prisma.ni_sectorWhereInput | Prisma.ni_sectorWhereInput[];
    ctt_sector?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    no_sector?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    campo_formativo?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_sector"> | string | null;
    estudiantes_sector?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    escuelas_sector?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    escuelas_participantes?: Prisma.IntNullableFilter<"ni_sector"> | number | null;
    porcentaje_escuelas_participacion?: Prisma.DecimalNullableFilter<"ni_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.DecimalNullableFilter<"ni_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "id">;
export type ni_sectorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ctt_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    no_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ni_sectorCountOrderByAggregateInput;
    _avg?: Prisma.ni_sectorAvgOrderByAggregateInput;
    _max?: Prisma.ni_sectorMaxOrderByAggregateInput;
    _min?: Prisma.ni_sectorMinOrderByAggregateInput;
    _sum?: Prisma.ni_sectorSumOrderByAggregateInput;
};
export type ni_sectorScalarWhereWithAggregatesInput = {
    AND?: Prisma.ni_sectorScalarWhereWithAggregatesInput | Prisma.ni_sectorScalarWhereWithAggregatesInput[];
    OR?: Prisma.ni_sectorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ni_sectorScalarWhereWithAggregatesInput | Prisma.ni_sectorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ni_sector"> | number;
    ctt_sector?: Prisma.StringNullableWithAggregatesFilter<"ni_sector"> | string | null;
    no_sector?: Prisma.IntNullableWithAggregatesFilter<"ni_sector"> | number | null;
    campo_formativo?: Prisma.StringNullableWithAggregatesFilter<"ni_sector"> | string | null;
    nivel_integracion?: Prisma.StringNullableWithAggregatesFilter<"ni_sector"> | string | null;
    grado?: Prisma.StringNullableWithAggregatesFilter<"ni_sector"> | string | null;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"ni_sector"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"ni_sector"> | string | null;
    estudiantes_sector?: Prisma.IntNullableWithAggregatesFilter<"ni_sector"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableWithAggregatesFilter<"ni_sector"> | number | null;
    escuelas_sector?: Prisma.IntNullableWithAggregatesFilter<"ni_sector"> | number | null;
    escuelas_participantes?: Prisma.IntNullableWithAggregatesFilter<"ni_sector"> | number | null;
    porcentaje_escuelas_participacion?: Prisma.DecimalNullableWithAggregatesFilter<"ni_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.DecimalNullableWithAggregatesFilter<"ni_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorCreateInput = {
    ctt_sector?: string | null;
    no_sector?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_sector?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_sector?: number | null;
    escuelas_participantes?: number | null;
    porcentaje_escuelas_participacion?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorUncheckedCreateInput = {
    id?: number;
    ctt_sector?: string | null;
    no_sector?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_sector?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_sector?: number | null;
    escuelas_participantes?: number | null;
    porcentaje_escuelas_participacion?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorUpdateInput = {
    ctt_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuelas_participacion?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ctt_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuelas_participacion?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorCreateManyInput = {
    id?: number;
    ctt_sector?: string | null;
    no_sector?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_sector?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_sector?: number | null;
    escuelas_participantes?: number | null;
    porcentaje_escuelas_participacion?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorUpdateManyMutationInput = {
    ctt_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuelas_participacion?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ctt_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuelas_participacion?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sectorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt_sector?: Prisma.SortOrder;
    no_sector?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_sectorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    no_sector?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_sectorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt_sector?: Prisma.SortOrder;
    no_sector?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_sectorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt_sector?: Prisma.SortOrder;
    no_sector?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_sectorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    no_sector?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_sectorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt_sector?: boolean;
    no_sector?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_sector?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_sector?: boolean;
    escuelas_participantes?: boolean;
    porcentaje_escuelas_participacion?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_sector"]>;
export type ni_sectorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt_sector?: boolean;
    no_sector?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_sector?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_sector?: boolean;
    escuelas_participantes?: boolean;
    porcentaje_escuelas_participacion?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_sector"]>;
export type ni_sectorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt_sector?: boolean;
    no_sector?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_sector?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_sector?: boolean;
    escuelas_participantes?: boolean;
    porcentaje_escuelas_participacion?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_sector"]>;
export type ni_sectorSelectScalar = {
    id?: boolean;
    ctt_sector?: boolean;
    no_sector?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_sector?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_sector?: boolean;
    escuelas_participantes?: boolean;
    porcentaje_escuelas_participacion?: boolean;
    porcentaje?: boolean;
};
export type ni_sectorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ctt_sector" | "no_sector" | "campo_formativo" | "nivel_integracion" | "grado" | "opcion_educativa" | "tipo" | "estudiantes_sector" | "estudiantes_participantes" | "escuelas_sector" | "escuelas_participantes" | "porcentaje_escuelas_participacion" | "porcentaje", ExtArgs["result"]["ni_sector"]>;
export type $ni_sectorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ni_sector";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ctt_sector: string | null;
        no_sector: number | null;
        campo_formativo: string | null;
        nivel_integracion: string | null;
        grado: string | null;
        opcion_educativa: string | null;
        tipo: string | null;
        estudiantes_sector: number | null;
        estudiantes_participantes: number | null;
        escuelas_sector: number | null;
        escuelas_participantes: number | null;
        porcentaje_escuelas_participacion: runtime.Decimal | null;
        porcentaje: runtime.Decimal | null;
    }, ExtArgs["result"]["ni_sector"]>;
    composites: {};
};
export type ni_sectorGetPayload<S extends boolean | null | undefined | ni_sectorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload, S>;
export type ni_sectorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ni_sectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Ni_sectorCountAggregateInputType | true;
};
export interface ni_sectorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ni_sector'];
        meta: {
            name: 'ni_sector';
        };
    };
    /**
     * Find zero or one Ni_sector that matches the filter.
     * @param {ni_sectorFindUniqueArgs} args - Arguments to find a Ni_sector
     * @example
     * // Get one Ni_sector
     * const ni_sector = await prisma.ni_sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ni_sectorFindUniqueArgs>(args: Prisma.SelectSubset<T, ni_sectorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ni_sectorClient<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ni_sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ni_sectorFindUniqueOrThrowArgs} args - Arguments to find a Ni_sector
     * @example
     * // Get one Ni_sector
     * const ni_sector = await prisma.ni_sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ni_sectorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ni_sectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_sectorClient<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sectorFindFirstArgs} args - Arguments to find a Ni_sector
     * @example
     * // Get one Ni_sector
     * const ni_sector = await prisma.ni_sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ni_sectorFindFirstArgs>(args?: Prisma.SelectSubset<T, ni_sectorFindFirstArgs<ExtArgs>>): Prisma.Prisma__ni_sectorClient<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sectorFindFirstOrThrowArgs} args - Arguments to find a Ni_sector
     * @example
     * // Get one Ni_sector
     * const ni_sector = await prisma.ni_sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ni_sectorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ni_sectorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_sectorClient<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ni_sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ni_sectors
     * const ni_sectors = await prisma.ni_sector.findMany()
     *
     * // Get first 10 Ni_sectors
     * const ni_sectors = await prisma.ni_sector.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ni_sectorWithIdOnly = await prisma.ni_sector.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ni_sectorFindManyArgs>(args?: Prisma.SelectSubset<T, ni_sectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ni_sector.
     * @param {ni_sectorCreateArgs} args - Arguments to create a Ni_sector.
     * @example
     * // Create one Ni_sector
     * const Ni_sector = await prisma.ni_sector.create({
     *   data: {
     *     // ... data to create a Ni_sector
     *   }
     * })
     *
     */
    create<T extends ni_sectorCreateArgs>(args: Prisma.SelectSubset<T, ni_sectorCreateArgs<ExtArgs>>): Prisma.Prisma__ni_sectorClient<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ni_sectors.
     * @param {ni_sectorCreateManyArgs} args - Arguments to create many Ni_sectors.
     * @example
     * // Create many Ni_sectors
     * const ni_sector = await prisma.ni_sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ni_sectorCreateManyArgs>(args?: Prisma.SelectSubset<T, ni_sectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Ni_sectors and returns the data saved in the database.
     * @param {ni_sectorCreateManyAndReturnArgs} args - Arguments to create many Ni_sectors.
     * @example
     * // Create many Ni_sectors
     * const ni_sector = await prisma.ni_sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ni_sectors and only return the `id`
     * const ni_sectorWithIdOnly = await prisma.ni_sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ni_sectorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ni_sectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Ni_sector.
     * @param {ni_sectorDeleteArgs} args - Arguments to delete one Ni_sector.
     * @example
     * // Delete one Ni_sector
     * const Ni_sector = await prisma.ni_sector.delete({
     *   where: {
     *     // ... filter to delete one Ni_sector
     *   }
     * })
     *
     */
    delete<T extends ni_sectorDeleteArgs>(args: Prisma.SelectSubset<T, ni_sectorDeleteArgs<ExtArgs>>): Prisma.Prisma__ni_sectorClient<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ni_sector.
     * @param {ni_sectorUpdateArgs} args - Arguments to update one Ni_sector.
     * @example
     * // Update one Ni_sector
     * const ni_sector = await prisma.ni_sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ni_sectorUpdateArgs>(args: Prisma.SelectSubset<T, ni_sectorUpdateArgs<ExtArgs>>): Prisma.Prisma__ni_sectorClient<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ni_sectors.
     * @param {ni_sectorDeleteManyArgs} args - Arguments to filter Ni_sectors to delete.
     * @example
     * // Delete a few Ni_sectors
     * const { count } = await prisma.ni_sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ni_sectorDeleteManyArgs>(args?: Prisma.SelectSubset<T, ni_sectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ni_sectors
     * const ni_sector = await prisma.ni_sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ni_sectorUpdateManyArgs>(args: Prisma.SelectSubset<T, ni_sectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_sectors and returns the data updated in the database.
     * @param {ni_sectorUpdateManyAndReturnArgs} args - Arguments to update many Ni_sectors.
     * @example
     * // Update many Ni_sectors
     * const ni_sector = await prisma.ni_sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ni_sectors and only return the `id`
     * const ni_sectorWithIdOnly = await prisma.ni_sector.updateManyAndReturn({
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
    updateManyAndReturn<T extends ni_sectorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ni_sectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Ni_sector.
     * @param {ni_sectorUpsertArgs} args - Arguments to update or create a Ni_sector.
     * @example
     * // Update or create a Ni_sector
     * const ni_sector = await prisma.ni_sector.upsert({
     *   create: {
     *     // ... data to create a Ni_sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ni_sector we want to update
     *   }
     * })
     */
    upsert<T extends ni_sectorUpsertArgs>(args: Prisma.SelectSubset<T, ni_sectorUpsertArgs<ExtArgs>>): Prisma.Prisma__ni_sectorClient<runtime.Types.Result.GetResult<Prisma.$ni_sectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ni_sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sectorCountArgs} args - Arguments to filter Ni_sectors to count.
     * @example
     * // Count the number of Ni_sectors
     * const count = await prisma.ni_sector.count({
     *   where: {
     *     // ... the filter for the Ni_sectors we want to count
     *   }
     * })
    **/
    count<T extends ni_sectorCountArgs>(args?: Prisma.Subset<T, ni_sectorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ni_sectorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ni_sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ni_sectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ni_sectorAggregateArgs>(args: Prisma.Subset<T, Ni_sectorAggregateArgs>): Prisma.PrismaPromise<GetNi_sectorAggregateType<T>>;
    /**
     * Group by Ni_sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sectorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ni_sectorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ni_sectorGroupByArgs['orderBy'];
    } : {
        orderBy?: ni_sectorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ni_sectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNi_sectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ni_sector model
     */
    readonly fields: ni_sectorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ni_sector.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ni_sectorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ni_sector model
 */
export interface ni_sectorFieldRefs {
    readonly id: Prisma.FieldRef<"ni_sector", 'Int'>;
    readonly ctt_sector: Prisma.FieldRef<"ni_sector", 'String'>;
    readonly no_sector: Prisma.FieldRef<"ni_sector", 'Int'>;
    readonly campo_formativo: Prisma.FieldRef<"ni_sector", 'String'>;
    readonly nivel_integracion: Prisma.FieldRef<"ni_sector", 'String'>;
    readonly grado: Prisma.FieldRef<"ni_sector", 'String'>;
    readonly opcion_educativa: Prisma.FieldRef<"ni_sector", 'String'>;
    readonly tipo: Prisma.FieldRef<"ni_sector", 'String'>;
    readonly estudiantes_sector: Prisma.FieldRef<"ni_sector", 'Int'>;
    readonly estudiantes_participantes: Prisma.FieldRef<"ni_sector", 'Int'>;
    readonly escuelas_sector: Prisma.FieldRef<"ni_sector", 'Int'>;
    readonly escuelas_participantes: Prisma.FieldRef<"ni_sector", 'Int'>;
    readonly porcentaje_escuelas_participacion: Prisma.FieldRef<"ni_sector", 'Decimal'>;
    readonly porcentaje: Prisma.FieldRef<"ni_sector", 'Decimal'>;
}
/**
 * ni_sector findUnique
 */
export type ni_sectorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sector to fetch.
     */
    where: Prisma.ni_sectorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector findUniqueOrThrow
 */
export type ni_sectorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sector to fetch.
     */
    where: Prisma.ni_sectorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector findFirst
 */
export type ni_sectorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sector to fetch.
     */
    where?: Prisma.ni_sectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_sectors to fetch.
     */
    orderBy?: Prisma.ni_sectorOrderByWithRelationInput | Prisma.ni_sectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_sectors.
     */
    cursor?: Prisma.ni_sectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_sectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_sectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_sectors.
     */
    distinct?: Prisma.Ni_sectorScalarFieldEnum | Prisma.Ni_sectorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector findFirstOrThrow
 */
export type ni_sectorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sector to fetch.
     */
    where?: Prisma.ni_sectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_sectors to fetch.
     */
    orderBy?: Prisma.ni_sectorOrderByWithRelationInput | Prisma.ni_sectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_sectors.
     */
    cursor?: Prisma.ni_sectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_sectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_sectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_sectors.
     */
    distinct?: Prisma.Ni_sectorScalarFieldEnum | Prisma.Ni_sectorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector findMany
 */
export type ni_sectorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sectors to fetch.
     */
    where?: Prisma.ni_sectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_sectors to fetch.
     */
    orderBy?: Prisma.ni_sectorOrderByWithRelationInput | Prisma.ni_sectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ni_sectors.
     */
    cursor?: Prisma.ni_sectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_sectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_sectors.
     */
    skip?: number;
    distinct?: Prisma.Ni_sectorScalarFieldEnum | Prisma.Ni_sectorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector create
 */
export type ni_sectorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * The data needed to create a ni_sector.
     */
    data?: Prisma.XOR<Prisma.ni_sectorCreateInput, Prisma.ni_sectorUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector createMany
 */
export type ni_sectorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ni_sectors.
     */
    data: Prisma.ni_sectorCreateManyInput | Prisma.ni_sectorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_sector createManyAndReturn
 */
export type ni_sectorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * The data used to create many ni_sectors.
     */
    data: Prisma.ni_sectorCreateManyInput | Prisma.ni_sectorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_sector update
 */
export type ni_sectorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * The data needed to update a ni_sector.
     */
    data: Prisma.XOR<Prisma.ni_sectorUpdateInput, Prisma.ni_sectorUncheckedUpdateInput>;
    /**
     * Choose, which ni_sector to update.
     */
    where: Prisma.ni_sectorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector updateMany
 */
export type ni_sectorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ni_sectors.
     */
    data: Prisma.XOR<Prisma.ni_sectorUpdateManyMutationInput, Prisma.ni_sectorUncheckedUpdateManyInput>;
    /**
     * Filter which ni_sectors to update
     */
    where?: Prisma.ni_sectorWhereInput;
    /**
     * Limit how many ni_sectors to update.
     */
    limit?: number;
};
/**
 * ni_sector updateManyAndReturn
 */
export type ni_sectorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * The data used to update ni_sectors.
     */
    data: Prisma.XOR<Prisma.ni_sectorUpdateManyMutationInput, Prisma.ni_sectorUncheckedUpdateManyInput>;
    /**
     * Filter which ni_sectors to update
     */
    where?: Prisma.ni_sectorWhereInput;
    /**
     * Limit how many ni_sectors to update.
     */
    limit?: number;
};
/**
 * ni_sector upsert
 */
export type ni_sectorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * The filter to search for the ni_sector to update in case it exists.
     */
    where: Prisma.ni_sectorWhereUniqueInput;
    /**
     * In case the ni_sector found by the `where` argument doesn't exist, create a new ni_sector with this data.
     */
    create: Prisma.XOR<Prisma.ni_sectorCreateInput, Prisma.ni_sectorUncheckedCreateInput>;
    /**
     * In case the ni_sector was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ni_sectorUpdateInput, Prisma.ni_sectorUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector delete
 */
export type ni_sectorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
    /**
     * Filter which ni_sector to delete.
     */
    where: Prisma.ni_sectorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sector deleteMany
 */
export type ni_sectorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_sectors to delete
     */
    where?: Prisma.ni_sectorWhereInput;
    /**
     * Limit how many ni_sectors to delete.
     */
    limit?: number;
};
/**
 * ni_sector without action
 */
export type ni_sectorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sector
     */
    select?: Prisma.ni_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sector
     */
    omit?: Prisma.ni_sectorOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ni_sector.d.ts.map