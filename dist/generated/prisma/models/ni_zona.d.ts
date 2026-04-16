import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ni_zona
 *
 */
export type ni_zonaModel = runtime.Types.Result.DefaultSelection<Prisma.$ni_zonaPayload>;
export type AggregateNi_zona = {
    _count: Ni_zonaCountAggregateOutputType | null;
    _avg: Ni_zonaAvgAggregateOutputType | null;
    _sum: Ni_zonaSumAggregateOutputType | null;
    _min: Ni_zonaMinAggregateOutputType | null;
    _max: Ni_zonaMaxAggregateOutputType | null;
};
export type Ni_zonaAvgAggregateOutputType = {
    id: number | null;
    zona: number | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_zona: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_zonaSumAggregateOutputType = {
    id: number | null;
    zona: number | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_zona: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_zonaMinAggregateOutputType = {
    id: number | null;
    ctt_zona: string | null;
    zona: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_zona: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_zonaMaxAggregateOutputType = {
    id: number | null;
    ctt_zona: string | null;
    zona: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_zona: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_zonaCountAggregateOutputType = {
    id: number;
    ctt_zona: number;
    zona: number;
    campo_formativo: number;
    nivel_integracion: number;
    grado: number;
    opcion_educativa: number;
    tipo: number;
    estudiantes_zona: number;
    estudiantes_participantes: number;
    escuelas_zona: number;
    escuelas_participantes: number;
    porcentaje_escuelas_participacion: number;
    porcentaje: number;
    _all: number;
};
export type Ni_zonaAvgAggregateInputType = {
    id?: true;
    zona?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_zona?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
};
export type Ni_zonaSumAggregateInputType = {
    id?: true;
    zona?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_zona?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
};
export type Ni_zonaMinAggregateInputType = {
    id?: true;
    ctt_zona?: true;
    zona?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_zona?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
};
export type Ni_zonaMaxAggregateInputType = {
    id?: true;
    ctt_zona?: true;
    zona?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_zona?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
};
export type Ni_zonaCountAggregateInputType = {
    id?: true;
    ctt_zona?: true;
    zona?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_zona?: true;
    escuelas_participantes?: true;
    porcentaje_escuelas_participacion?: true;
    porcentaje?: true;
    _all?: true;
};
export type Ni_zonaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_zona to aggregate.
     */
    where?: Prisma.ni_zonaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_zonas to fetch.
     */
    orderBy?: Prisma.ni_zonaOrderByWithRelationInput | Prisma.ni_zonaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ni_zonaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_zonas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_zonas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ni_zonas
    **/
    _count?: true | Ni_zonaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Ni_zonaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Ni_zonaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Ni_zonaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Ni_zonaMaxAggregateInputType;
};
export type GetNi_zonaAggregateType<T extends Ni_zonaAggregateArgs> = {
    [P in keyof T & keyof AggregateNi_zona]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNi_zona[P]> : Prisma.GetScalarType<T[P], AggregateNi_zona[P]>;
};
export type ni_zonaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ni_zonaWhereInput;
    orderBy?: Prisma.ni_zonaOrderByWithAggregationInput | Prisma.ni_zonaOrderByWithAggregationInput[];
    by: Prisma.Ni_zonaScalarFieldEnum[] | Prisma.Ni_zonaScalarFieldEnum;
    having?: Prisma.ni_zonaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ni_zonaCountAggregateInputType | true;
    _avg?: Ni_zonaAvgAggregateInputType;
    _sum?: Ni_zonaSumAggregateInputType;
    _min?: Ni_zonaMinAggregateInputType;
    _max?: Ni_zonaMaxAggregateInputType;
};
export type Ni_zonaGroupByOutputType = {
    id: number;
    ctt_zona: string | null;
    zona: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_zona: number | null;
    escuelas_participantes: number | null;
    porcentaje_escuelas_participacion: runtime.Decimal | null;
    porcentaje: runtime.Decimal | null;
    _count: Ni_zonaCountAggregateOutputType | null;
    _avg: Ni_zonaAvgAggregateOutputType | null;
    _sum: Ni_zonaSumAggregateOutputType | null;
    _min: Ni_zonaMinAggregateOutputType | null;
    _max: Ni_zonaMaxAggregateOutputType | null;
};
type GetNi_zonaGroupByPayload<T extends ni_zonaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ni_zonaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ni_zonaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ni_zonaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ni_zonaGroupByOutputType[P]>;
}>>;
export type ni_zonaWhereInput = {
    AND?: Prisma.ni_zonaWhereInput | Prisma.ni_zonaWhereInput[];
    OR?: Prisma.ni_zonaWhereInput[];
    NOT?: Prisma.ni_zonaWhereInput | Prisma.ni_zonaWhereInput[];
    id?: Prisma.IntFilter<"ni_zona"> | number;
    ctt_zona?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    zona?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    campo_formativo?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    estudiantes_zona?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    escuelas_zona?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    escuelas_participantes?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    porcentaje_escuelas_participacion?: Prisma.DecimalNullableFilter<"ni_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.DecimalNullableFilter<"ni_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ctt_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ni_zonaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ni_zonaWhereInput | Prisma.ni_zonaWhereInput[];
    OR?: Prisma.ni_zonaWhereInput[];
    NOT?: Prisma.ni_zonaWhereInput | Prisma.ni_zonaWhereInput[];
    ctt_zona?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    zona?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    campo_formativo?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_zona"> | string | null;
    estudiantes_zona?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    escuelas_zona?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    escuelas_participantes?: Prisma.IntNullableFilter<"ni_zona"> | number | null;
    porcentaje_escuelas_participacion?: Prisma.DecimalNullableFilter<"ni_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.DecimalNullableFilter<"ni_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "id">;
export type ni_zonaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ctt_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ni_zonaCountOrderByAggregateInput;
    _avg?: Prisma.ni_zonaAvgOrderByAggregateInput;
    _max?: Prisma.ni_zonaMaxOrderByAggregateInput;
    _min?: Prisma.ni_zonaMinOrderByAggregateInput;
    _sum?: Prisma.ni_zonaSumOrderByAggregateInput;
};
export type ni_zonaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ni_zonaScalarWhereWithAggregatesInput | Prisma.ni_zonaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ni_zonaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ni_zonaScalarWhereWithAggregatesInput | Prisma.ni_zonaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ni_zona"> | number;
    ctt_zona?: Prisma.StringNullableWithAggregatesFilter<"ni_zona"> | string | null;
    zona?: Prisma.IntNullableWithAggregatesFilter<"ni_zona"> | number | null;
    campo_formativo?: Prisma.StringNullableWithAggregatesFilter<"ni_zona"> | string | null;
    nivel_integracion?: Prisma.StringNullableWithAggregatesFilter<"ni_zona"> | string | null;
    grado?: Prisma.StringNullableWithAggregatesFilter<"ni_zona"> | string | null;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"ni_zona"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"ni_zona"> | string | null;
    estudiantes_zona?: Prisma.IntNullableWithAggregatesFilter<"ni_zona"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableWithAggregatesFilter<"ni_zona"> | number | null;
    escuelas_zona?: Prisma.IntNullableWithAggregatesFilter<"ni_zona"> | number | null;
    escuelas_participantes?: Prisma.IntNullableWithAggregatesFilter<"ni_zona"> | number | null;
    porcentaje_escuelas_participacion?: Prisma.DecimalNullableWithAggregatesFilter<"ni_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.DecimalNullableWithAggregatesFilter<"ni_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaCreateInput = {
    ctt_zona?: string | null;
    zona?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_zona?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_zona?: number | null;
    escuelas_participantes?: number | null;
    porcentaje_escuelas_participacion?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaUncheckedCreateInput = {
    id?: number;
    ctt_zona?: string | null;
    zona?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_zona?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_zona?: number | null;
    escuelas_participantes?: number | null;
    porcentaje_escuelas_participacion?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaUpdateInput = {
    ctt_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuelas_participacion?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ctt_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuelas_participacion?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaCreateManyInput = {
    id?: number;
    ctt_zona?: string | null;
    zona?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_zona?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_zona?: number | null;
    escuelas_participantes?: number | null;
    porcentaje_escuelas_participacion?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaUpdateManyMutationInput = {
    ctt_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuelas_participacion?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ctt_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuelas_participacion?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_zonaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_zonaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_zonaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_zonaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_zonaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    porcentaje_escuelas_participacion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_zonaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt_zona?: boolean;
    zona?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_zona?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_zona?: boolean;
    escuelas_participantes?: boolean;
    porcentaje_escuelas_participacion?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_zona"]>;
export type ni_zonaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt_zona?: boolean;
    zona?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_zona?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_zona?: boolean;
    escuelas_participantes?: boolean;
    porcentaje_escuelas_participacion?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_zona"]>;
export type ni_zonaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt_zona?: boolean;
    zona?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_zona?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_zona?: boolean;
    escuelas_participantes?: boolean;
    porcentaje_escuelas_participacion?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_zona"]>;
export type ni_zonaSelectScalar = {
    id?: boolean;
    ctt_zona?: boolean;
    zona?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_zona?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_zona?: boolean;
    escuelas_participantes?: boolean;
    porcentaje_escuelas_participacion?: boolean;
    porcentaje?: boolean;
};
export type ni_zonaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ctt_zona" | "zona" | "campo_formativo" | "nivel_integracion" | "grado" | "opcion_educativa" | "tipo" | "estudiantes_zona" | "estudiantes_participantes" | "escuelas_zona" | "escuelas_participantes" | "porcentaje_escuelas_participacion" | "porcentaje", ExtArgs["result"]["ni_zona"]>;
export type $ni_zonaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ni_zona";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ctt_zona: string | null;
        zona: number | null;
        campo_formativo: string | null;
        nivel_integracion: string | null;
        grado: string | null;
        opcion_educativa: string | null;
        tipo: string | null;
        estudiantes_zona: number | null;
        estudiantes_participantes: number | null;
        escuelas_zona: number | null;
        escuelas_participantes: number | null;
        porcentaje_escuelas_participacion: runtime.Decimal | null;
        porcentaje: runtime.Decimal | null;
    }, ExtArgs["result"]["ni_zona"]>;
    composites: {};
};
export type ni_zonaGetPayload<S extends boolean | null | undefined | ni_zonaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload, S>;
export type ni_zonaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ni_zonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Ni_zonaCountAggregateInputType | true;
};
export interface ni_zonaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ni_zona'];
        meta: {
            name: 'ni_zona';
        };
    };
    /**
     * Find zero or one Ni_zona that matches the filter.
     * @param {ni_zonaFindUniqueArgs} args - Arguments to find a Ni_zona
     * @example
     * // Get one Ni_zona
     * const ni_zona = await prisma.ni_zona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ni_zonaFindUniqueArgs>(args: Prisma.SelectSubset<T, ni_zonaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ni_zonaClient<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ni_zona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ni_zonaFindUniqueOrThrowArgs} args - Arguments to find a Ni_zona
     * @example
     * // Get one Ni_zona
     * const ni_zona = await prisma.ni_zona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ni_zonaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ni_zonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_zonaClient<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_zona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_zonaFindFirstArgs} args - Arguments to find a Ni_zona
     * @example
     * // Get one Ni_zona
     * const ni_zona = await prisma.ni_zona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ni_zonaFindFirstArgs>(args?: Prisma.SelectSubset<T, ni_zonaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ni_zonaClient<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_zona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_zonaFindFirstOrThrowArgs} args - Arguments to find a Ni_zona
     * @example
     * // Get one Ni_zona
     * const ni_zona = await prisma.ni_zona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ni_zonaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ni_zonaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_zonaClient<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ni_zonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_zonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ni_zonas
     * const ni_zonas = await prisma.ni_zona.findMany()
     *
     * // Get first 10 Ni_zonas
     * const ni_zonas = await prisma.ni_zona.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ni_zonaWithIdOnly = await prisma.ni_zona.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ni_zonaFindManyArgs>(args?: Prisma.SelectSubset<T, ni_zonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ni_zona.
     * @param {ni_zonaCreateArgs} args - Arguments to create a Ni_zona.
     * @example
     * // Create one Ni_zona
     * const Ni_zona = await prisma.ni_zona.create({
     *   data: {
     *     // ... data to create a Ni_zona
     *   }
     * })
     *
     */
    create<T extends ni_zonaCreateArgs>(args: Prisma.SelectSubset<T, ni_zonaCreateArgs<ExtArgs>>): Prisma.Prisma__ni_zonaClient<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ni_zonas.
     * @param {ni_zonaCreateManyArgs} args - Arguments to create many Ni_zonas.
     * @example
     * // Create many Ni_zonas
     * const ni_zona = await prisma.ni_zona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ni_zonaCreateManyArgs>(args?: Prisma.SelectSubset<T, ni_zonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Ni_zonas and returns the data saved in the database.
     * @param {ni_zonaCreateManyAndReturnArgs} args - Arguments to create many Ni_zonas.
     * @example
     * // Create many Ni_zonas
     * const ni_zona = await prisma.ni_zona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ni_zonas and only return the `id`
     * const ni_zonaWithIdOnly = await prisma.ni_zona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ni_zonaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ni_zonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Ni_zona.
     * @param {ni_zonaDeleteArgs} args - Arguments to delete one Ni_zona.
     * @example
     * // Delete one Ni_zona
     * const Ni_zona = await prisma.ni_zona.delete({
     *   where: {
     *     // ... filter to delete one Ni_zona
     *   }
     * })
     *
     */
    delete<T extends ni_zonaDeleteArgs>(args: Prisma.SelectSubset<T, ni_zonaDeleteArgs<ExtArgs>>): Prisma.Prisma__ni_zonaClient<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ni_zona.
     * @param {ni_zonaUpdateArgs} args - Arguments to update one Ni_zona.
     * @example
     * // Update one Ni_zona
     * const ni_zona = await prisma.ni_zona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ni_zonaUpdateArgs>(args: Prisma.SelectSubset<T, ni_zonaUpdateArgs<ExtArgs>>): Prisma.Prisma__ni_zonaClient<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ni_zonas.
     * @param {ni_zonaDeleteManyArgs} args - Arguments to filter Ni_zonas to delete.
     * @example
     * // Delete a few Ni_zonas
     * const { count } = await prisma.ni_zona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ni_zonaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ni_zonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_zonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_zonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ni_zonas
     * const ni_zona = await prisma.ni_zona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ni_zonaUpdateManyArgs>(args: Prisma.SelectSubset<T, ni_zonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_zonas and returns the data updated in the database.
     * @param {ni_zonaUpdateManyAndReturnArgs} args - Arguments to update many Ni_zonas.
     * @example
     * // Update many Ni_zonas
     * const ni_zona = await prisma.ni_zona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ni_zonas and only return the `id`
     * const ni_zonaWithIdOnly = await prisma.ni_zona.updateManyAndReturn({
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
    updateManyAndReturn<T extends ni_zonaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ni_zonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Ni_zona.
     * @param {ni_zonaUpsertArgs} args - Arguments to update or create a Ni_zona.
     * @example
     * // Update or create a Ni_zona
     * const ni_zona = await prisma.ni_zona.upsert({
     *   create: {
     *     // ... data to create a Ni_zona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ni_zona we want to update
     *   }
     * })
     */
    upsert<T extends ni_zonaUpsertArgs>(args: Prisma.SelectSubset<T, ni_zonaUpsertArgs<ExtArgs>>): Prisma.Prisma__ni_zonaClient<runtime.Types.Result.GetResult<Prisma.$ni_zonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ni_zonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_zonaCountArgs} args - Arguments to filter Ni_zonas to count.
     * @example
     * // Count the number of Ni_zonas
     * const count = await prisma.ni_zona.count({
     *   where: {
     *     // ... the filter for the Ni_zonas we want to count
     *   }
     * })
    **/
    count<T extends ni_zonaCountArgs>(args?: Prisma.Subset<T, ni_zonaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ni_zonaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ni_zona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ni_zonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ni_zonaAggregateArgs>(args: Prisma.Subset<T, Ni_zonaAggregateArgs>): Prisma.PrismaPromise<GetNi_zonaAggregateType<T>>;
    /**
     * Group by Ni_zona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_zonaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ni_zonaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ni_zonaGroupByArgs['orderBy'];
    } : {
        orderBy?: ni_zonaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ni_zonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNi_zonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ni_zona model
     */
    readonly fields: ni_zonaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ni_zona.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ni_zonaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ni_zona model
 */
export interface ni_zonaFieldRefs {
    readonly id: Prisma.FieldRef<"ni_zona", 'Int'>;
    readonly ctt_zona: Prisma.FieldRef<"ni_zona", 'String'>;
    readonly zona: Prisma.FieldRef<"ni_zona", 'Int'>;
    readonly campo_formativo: Prisma.FieldRef<"ni_zona", 'String'>;
    readonly nivel_integracion: Prisma.FieldRef<"ni_zona", 'String'>;
    readonly grado: Prisma.FieldRef<"ni_zona", 'String'>;
    readonly opcion_educativa: Prisma.FieldRef<"ni_zona", 'String'>;
    readonly tipo: Prisma.FieldRef<"ni_zona", 'String'>;
    readonly estudiantes_zona: Prisma.FieldRef<"ni_zona", 'Int'>;
    readonly estudiantes_participantes: Prisma.FieldRef<"ni_zona", 'Int'>;
    readonly escuelas_zona: Prisma.FieldRef<"ni_zona", 'Int'>;
    readonly escuelas_participantes: Prisma.FieldRef<"ni_zona", 'Int'>;
    readonly porcentaje_escuelas_participacion: Prisma.FieldRef<"ni_zona", 'Decimal'>;
    readonly porcentaje: Prisma.FieldRef<"ni_zona", 'Decimal'>;
}
/**
 * ni_zona findUnique
 */
export type ni_zonaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_zona to fetch.
     */
    where: Prisma.ni_zonaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona findUniqueOrThrow
 */
export type ni_zonaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_zona to fetch.
     */
    where: Prisma.ni_zonaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona findFirst
 */
export type ni_zonaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_zona to fetch.
     */
    where?: Prisma.ni_zonaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_zonas to fetch.
     */
    orderBy?: Prisma.ni_zonaOrderByWithRelationInput | Prisma.ni_zonaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_zonas.
     */
    cursor?: Prisma.ni_zonaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_zonas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_zonas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_zonas.
     */
    distinct?: Prisma.Ni_zonaScalarFieldEnum | Prisma.Ni_zonaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona findFirstOrThrow
 */
export type ni_zonaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_zona to fetch.
     */
    where?: Prisma.ni_zonaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_zonas to fetch.
     */
    orderBy?: Prisma.ni_zonaOrderByWithRelationInput | Prisma.ni_zonaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_zonas.
     */
    cursor?: Prisma.ni_zonaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_zonas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_zonas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_zonas.
     */
    distinct?: Prisma.Ni_zonaScalarFieldEnum | Prisma.Ni_zonaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona findMany
 */
export type ni_zonaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_zonas to fetch.
     */
    where?: Prisma.ni_zonaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_zonas to fetch.
     */
    orderBy?: Prisma.ni_zonaOrderByWithRelationInput | Prisma.ni_zonaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ni_zonas.
     */
    cursor?: Prisma.ni_zonaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_zonas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_zonas.
     */
    skip?: number;
    distinct?: Prisma.Ni_zonaScalarFieldEnum | Prisma.Ni_zonaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona create
 */
export type ni_zonaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * The data needed to create a ni_zona.
     */
    data?: Prisma.XOR<Prisma.ni_zonaCreateInput, Prisma.ni_zonaUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona createMany
 */
export type ni_zonaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ni_zonas.
     */
    data: Prisma.ni_zonaCreateManyInput | Prisma.ni_zonaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_zona createManyAndReturn
 */
export type ni_zonaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * The data used to create many ni_zonas.
     */
    data: Prisma.ni_zonaCreateManyInput | Prisma.ni_zonaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_zona update
 */
export type ni_zonaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * The data needed to update a ni_zona.
     */
    data: Prisma.XOR<Prisma.ni_zonaUpdateInput, Prisma.ni_zonaUncheckedUpdateInput>;
    /**
     * Choose, which ni_zona to update.
     */
    where: Prisma.ni_zonaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona updateMany
 */
export type ni_zonaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ni_zonas.
     */
    data: Prisma.XOR<Prisma.ni_zonaUpdateManyMutationInput, Prisma.ni_zonaUncheckedUpdateManyInput>;
    /**
     * Filter which ni_zonas to update
     */
    where?: Prisma.ni_zonaWhereInput;
    /**
     * Limit how many ni_zonas to update.
     */
    limit?: number;
};
/**
 * ni_zona updateManyAndReturn
 */
export type ni_zonaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * The data used to update ni_zonas.
     */
    data: Prisma.XOR<Prisma.ni_zonaUpdateManyMutationInput, Prisma.ni_zonaUncheckedUpdateManyInput>;
    /**
     * Filter which ni_zonas to update
     */
    where?: Prisma.ni_zonaWhereInput;
    /**
     * Limit how many ni_zonas to update.
     */
    limit?: number;
};
/**
 * ni_zona upsert
 */
export type ni_zonaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * The filter to search for the ni_zona to update in case it exists.
     */
    where: Prisma.ni_zonaWhereUniqueInput;
    /**
     * In case the ni_zona found by the `where` argument doesn't exist, create a new ni_zona with this data.
     */
    create: Prisma.XOR<Prisma.ni_zonaCreateInput, Prisma.ni_zonaUncheckedCreateInput>;
    /**
     * In case the ni_zona was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ni_zonaUpdateInput, Prisma.ni_zonaUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona delete
 */
export type ni_zonaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
    /**
     * Filter which ni_zona to delete.
     */
    where: Prisma.ni_zonaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_zona deleteMany
 */
export type ni_zonaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_zonas to delete
     */
    where?: Prisma.ni_zonaWhereInput;
    /**
     * Limit how many ni_zonas to delete.
     */
    limit?: number;
};
/**
 * ni_zona without action
 */
export type ni_zonaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_zona
     */
    select?: Prisma.ni_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_zona
     */
    omit?: Prisma.ni_zonaOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ni_zona.d.ts.map