import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model analisis_zona
 *
 */
export type analisis_zonaModel = runtime.Types.Result.DefaultSelection<Prisma.$analisis_zonaPayload>;
export type AggregateAnalisis_zona = {
    _count: Analisis_zonaCountAggregateOutputType | null;
    _avg: Analisis_zonaAvgAggregateOutputType | null;
    _sum: Analisis_zonaSumAggregateOutputType | null;
    _min: Analisis_zonaMinAggregateOutputType | null;
    _max: Analisis_zonaMaxAggregateOutputType | null;
};
export type Analisis_zonaAvgAggregateOutputType = {
    id: number | null;
    zona: number | null;
    grado: number | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_zona: number | null;
    porcentaje_escuela: runtime.Decimal | null;
    porcentaje_estudiantes: runtime.Decimal | null;
};
export type Analisis_zonaSumAggregateOutputType = {
    id: number | null;
    zona: number | null;
    grado: number | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_zona: number | null;
    porcentaje_escuela: runtime.Decimal | null;
    porcentaje_estudiantes: runtime.Decimal | null;
};
export type Analisis_zonaMinAggregateOutputType = {
    id: number | null;
    cct_zona: string | null;
    zona: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: number | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_zona: number | null;
    porcentaje_escuela: runtime.Decimal | null;
    porcentaje_estudiantes: runtime.Decimal | null;
};
export type Analisis_zonaMaxAggregateOutputType = {
    id: number | null;
    cct_zona: string | null;
    zona: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: number | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_zona: number | null;
    porcentaje_escuela: runtime.Decimal | null;
    porcentaje_estudiantes: runtime.Decimal | null;
};
export type Analisis_zonaCountAggregateOutputType = {
    id: number;
    cct_zona: number;
    zona: number;
    campo_formativo: number;
    nivel_integracion: number;
    grado: number;
    opcion_educativa: number;
    tipo: number;
    estudiantes_zona: number;
    estudiantes_participantes: number;
    escuelas_participantes: number;
    escuelas_zona: number;
    porcentaje_escuela: number;
    porcentaje_estudiantes: number;
    _all: number;
};
export type Analisis_zonaAvgAggregateInputType = {
    id?: true;
    zona?: true;
    grado?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_zona?: true;
    porcentaje_escuela?: true;
    porcentaje_estudiantes?: true;
};
export type Analisis_zonaSumAggregateInputType = {
    id?: true;
    zona?: true;
    grado?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_zona?: true;
    porcentaje_escuela?: true;
    porcentaje_estudiantes?: true;
};
export type Analisis_zonaMinAggregateInputType = {
    id?: true;
    cct_zona?: true;
    zona?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_zona?: true;
    porcentaje_escuela?: true;
    porcentaje_estudiantes?: true;
};
export type Analisis_zonaMaxAggregateInputType = {
    id?: true;
    cct_zona?: true;
    zona?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_zona?: true;
    porcentaje_escuela?: true;
    porcentaje_estudiantes?: true;
};
export type Analisis_zonaCountAggregateInputType = {
    id?: true;
    cct_zona?: true;
    zona?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_zona?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_zona?: true;
    porcentaje_escuela?: true;
    porcentaje_estudiantes?: true;
    _all?: true;
};
export type Analisis_zonaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which analisis_zona to aggregate.
     */
    where?: Prisma.analisis_zonaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_zonas to fetch.
     */
    orderBy?: Prisma.analisis_zonaOrderByWithRelationInput | Prisma.analisis_zonaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.analisis_zonaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_zonas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_zonas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned analisis_zonas
    **/
    _count?: true | Analisis_zonaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Analisis_zonaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Analisis_zonaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Analisis_zonaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Analisis_zonaMaxAggregateInputType;
};
export type GetAnalisis_zonaAggregateType<T extends Analisis_zonaAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalisis_zona]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalisis_zona[P]> : Prisma.GetScalarType<T[P], AggregateAnalisis_zona[P]>;
};
export type analisis_zonaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.analisis_zonaWhereInput;
    orderBy?: Prisma.analisis_zonaOrderByWithAggregationInput | Prisma.analisis_zonaOrderByWithAggregationInput[];
    by: Prisma.Analisis_zonaScalarFieldEnum[] | Prisma.Analisis_zonaScalarFieldEnum;
    having?: Prisma.analisis_zonaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Analisis_zonaCountAggregateInputType | true;
    _avg?: Analisis_zonaAvgAggregateInputType;
    _sum?: Analisis_zonaSumAggregateInputType;
    _min?: Analisis_zonaMinAggregateInputType;
    _max?: Analisis_zonaMaxAggregateInputType;
};
export type Analisis_zonaGroupByOutputType = {
    id: number;
    cct_zona: string | null;
    zona: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: number | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_zona: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_zona: number | null;
    porcentaje_escuela: runtime.Decimal | null;
    porcentaje_estudiantes: runtime.Decimal | null;
    _count: Analisis_zonaCountAggregateOutputType | null;
    _avg: Analisis_zonaAvgAggregateOutputType | null;
    _sum: Analisis_zonaSumAggregateOutputType | null;
    _min: Analisis_zonaMinAggregateOutputType | null;
    _max: Analisis_zonaMaxAggregateOutputType | null;
};
type GetAnalisis_zonaGroupByPayload<T extends analisis_zonaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Analisis_zonaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Analisis_zonaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Analisis_zonaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Analisis_zonaGroupByOutputType[P]>;
}>>;
export type analisis_zonaWhereInput = {
    AND?: Prisma.analisis_zonaWhereInput | Prisma.analisis_zonaWhereInput[];
    OR?: Prisma.analisis_zonaWhereInput[];
    NOT?: Prisma.analisis_zonaWhereInput | Prisma.analisis_zonaWhereInput[];
    id?: Prisma.IntFilter<"analisis_zona"> | number;
    cct_zona?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    zona?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    campo_formativo?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    grado?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    opcion_educativa?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    tipo?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    estudiantes_zona?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    escuelas_participantes?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    escuelas_zona?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    porcentaje_escuela?: Prisma.DecimalNullableFilter<"analisis_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: Prisma.DecimalNullableFilter<"analisis_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_escuela?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type analisis_zonaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.analisis_zonaWhereInput | Prisma.analisis_zonaWhereInput[];
    OR?: Prisma.analisis_zonaWhereInput[];
    NOT?: Prisma.analisis_zonaWhereInput | Prisma.analisis_zonaWhereInput[];
    cct_zona?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    zona?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    campo_formativo?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    grado?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    opcion_educativa?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    tipo?: Prisma.StringNullableFilter<"analisis_zona"> | string | null;
    estudiantes_zona?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    escuelas_participantes?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    escuelas_zona?: Prisma.IntNullableFilter<"analisis_zona"> | number | null;
    porcentaje_escuela?: Prisma.DecimalNullableFilter<"analisis_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: Prisma.DecimalNullableFilter<"analisis_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "id">;
export type analisis_zonaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_escuela?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.analisis_zonaCountOrderByAggregateInput;
    _avg?: Prisma.analisis_zonaAvgOrderByAggregateInput;
    _max?: Prisma.analisis_zonaMaxOrderByAggregateInput;
    _min?: Prisma.analisis_zonaMinOrderByAggregateInput;
    _sum?: Prisma.analisis_zonaSumOrderByAggregateInput;
};
export type analisis_zonaScalarWhereWithAggregatesInput = {
    AND?: Prisma.analisis_zonaScalarWhereWithAggregatesInput | Prisma.analisis_zonaScalarWhereWithAggregatesInput[];
    OR?: Prisma.analisis_zonaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.analisis_zonaScalarWhereWithAggregatesInput | Prisma.analisis_zonaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"analisis_zona"> | number;
    cct_zona?: Prisma.StringNullableWithAggregatesFilter<"analisis_zona"> | string | null;
    zona?: Prisma.IntNullableWithAggregatesFilter<"analisis_zona"> | number | null;
    campo_formativo?: Prisma.StringNullableWithAggregatesFilter<"analisis_zona"> | string | null;
    nivel_integracion?: Prisma.StringNullableWithAggregatesFilter<"analisis_zona"> | string | null;
    grado?: Prisma.IntNullableWithAggregatesFilter<"analisis_zona"> | number | null;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"analisis_zona"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"analisis_zona"> | string | null;
    estudiantes_zona?: Prisma.IntNullableWithAggregatesFilter<"analisis_zona"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableWithAggregatesFilter<"analisis_zona"> | number | null;
    escuelas_participantes?: Prisma.IntNullableWithAggregatesFilter<"analisis_zona"> | number | null;
    escuelas_zona?: Prisma.IntNullableWithAggregatesFilter<"analisis_zona"> | number | null;
    porcentaje_escuela?: Prisma.DecimalNullableWithAggregatesFilter<"analisis_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: Prisma.DecimalNullableWithAggregatesFilter<"analisis_zona"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaCreateInput = {
    cct_zona?: string | null;
    zona?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: number | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_zona?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_participantes?: number | null;
    escuelas_zona?: number | null;
    porcentaje_escuela?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaUncheckedCreateInput = {
    id?: number;
    cct_zona?: string | null;
    zona?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: number | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_zona?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_participantes?: number | null;
    escuelas_zona?: number | null;
    porcentaje_escuela?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaUpdateInput = {
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuela?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuela?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaCreateManyInput = {
    id?: number;
    cct_zona?: string | null;
    zona?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: number | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_zona?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_participantes?: number | null;
    escuelas_zona?: number | null;
    porcentaje_escuela?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaUpdateManyMutationInput = {
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuela?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_escuela?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_estudiantes?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_zonaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    porcentaje_escuela?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_zonaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    porcentaje_escuela?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_zonaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    porcentaje_escuela?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_zonaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    porcentaje_escuela?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_zonaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    estudiantes_zona?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_zona?: Prisma.SortOrder;
    porcentaje_escuela?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_zonaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct_zona?: boolean;
    zona?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_zona?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_participantes?: boolean;
    escuelas_zona?: boolean;
    porcentaje_escuela?: boolean;
    porcentaje_estudiantes?: boolean;
}, ExtArgs["result"]["analisis_zona"]>;
export type analisis_zonaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct_zona?: boolean;
    zona?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_zona?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_participantes?: boolean;
    escuelas_zona?: boolean;
    porcentaje_escuela?: boolean;
    porcentaje_estudiantes?: boolean;
}, ExtArgs["result"]["analisis_zona"]>;
export type analisis_zonaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct_zona?: boolean;
    zona?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_zona?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_participantes?: boolean;
    escuelas_zona?: boolean;
    porcentaje_escuela?: boolean;
    porcentaje_estudiantes?: boolean;
}, ExtArgs["result"]["analisis_zona"]>;
export type analisis_zonaSelectScalar = {
    id?: boolean;
    cct_zona?: boolean;
    zona?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_zona?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_participantes?: boolean;
    escuelas_zona?: boolean;
    porcentaje_escuela?: boolean;
    porcentaje_estudiantes?: boolean;
};
export type analisis_zonaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cct_zona" | "zona" | "campo_formativo" | "nivel_integracion" | "grado" | "opcion_educativa" | "tipo" | "estudiantes_zona" | "estudiantes_participantes" | "escuelas_participantes" | "escuelas_zona" | "porcentaje_escuela" | "porcentaje_estudiantes", ExtArgs["result"]["analisis_zona"]>;
export type $analisis_zonaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "analisis_zona";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        cct_zona: string | null;
        zona: number | null;
        campo_formativo: string | null;
        nivel_integracion: string | null;
        grado: number | null;
        opcion_educativa: string | null;
        tipo: string | null;
        estudiantes_zona: number | null;
        estudiantes_participantes: number | null;
        escuelas_participantes: number | null;
        escuelas_zona: number | null;
        porcentaje_escuela: runtime.Decimal | null;
        porcentaje_estudiantes: runtime.Decimal | null;
    }, ExtArgs["result"]["analisis_zona"]>;
    composites: {};
};
export type analisis_zonaGetPayload<S extends boolean | null | undefined | analisis_zonaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload, S>;
export type analisis_zonaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<analisis_zonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Analisis_zonaCountAggregateInputType | true;
};
export interface analisis_zonaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['analisis_zona'];
        meta: {
            name: 'analisis_zona';
        };
    };
    /**
     * Find zero or one Analisis_zona that matches the filter.
     * @param {analisis_zonaFindUniqueArgs} args - Arguments to find a Analisis_zona
     * @example
     * // Get one Analisis_zona
     * const analisis_zona = await prisma.analisis_zona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends analisis_zonaFindUniqueArgs>(args: Prisma.SelectSubset<T, analisis_zonaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__analisis_zonaClient<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Analisis_zona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {analisis_zonaFindUniqueOrThrowArgs} args - Arguments to find a Analisis_zona
     * @example
     * // Get one Analisis_zona
     * const analisis_zona = await prisma.analisis_zona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends analisis_zonaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, analisis_zonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__analisis_zonaClient<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Analisis_zona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_zonaFindFirstArgs} args - Arguments to find a Analisis_zona
     * @example
     * // Get one Analisis_zona
     * const analisis_zona = await prisma.analisis_zona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends analisis_zonaFindFirstArgs>(args?: Prisma.SelectSubset<T, analisis_zonaFindFirstArgs<ExtArgs>>): Prisma.Prisma__analisis_zonaClient<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Analisis_zona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_zonaFindFirstOrThrowArgs} args - Arguments to find a Analisis_zona
     * @example
     * // Get one Analisis_zona
     * const analisis_zona = await prisma.analisis_zona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends analisis_zonaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, analisis_zonaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__analisis_zonaClient<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Analisis_zonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_zonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analisis_zonas
     * const analisis_zonas = await prisma.analisis_zona.findMany()
     *
     * // Get first 10 Analisis_zonas
     * const analisis_zonas = await prisma.analisis_zona.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const analisis_zonaWithIdOnly = await prisma.analisis_zona.findMany({ select: { id: true } })
     *
     */
    findMany<T extends analisis_zonaFindManyArgs>(args?: Prisma.SelectSubset<T, analisis_zonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Analisis_zona.
     * @param {analisis_zonaCreateArgs} args - Arguments to create a Analisis_zona.
     * @example
     * // Create one Analisis_zona
     * const Analisis_zona = await prisma.analisis_zona.create({
     *   data: {
     *     // ... data to create a Analisis_zona
     *   }
     * })
     *
     */
    create<T extends analisis_zonaCreateArgs>(args: Prisma.SelectSubset<T, analisis_zonaCreateArgs<ExtArgs>>): Prisma.Prisma__analisis_zonaClient<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Analisis_zonas.
     * @param {analisis_zonaCreateManyArgs} args - Arguments to create many Analisis_zonas.
     * @example
     * // Create many Analisis_zonas
     * const analisis_zona = await prisma.analisis_zona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends analisis_zonaCreateManyArgs>(args?: Prisma.SelectSubset<T, analisis_zonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Analisis_zonas and returns the data saved in the database.
     * @param {analisis_zonaCreateManyAndReturnArgs} args - Arguments to create many Analisis_zonas.
     * @example
     * // Create many Analisis_zonas
     * const analisis_zona = await prisma.analisis_zona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Analisis_zonas and only return the `id`
     * const analisis_zonaWithIdOnly = await prisma.analisis_zona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends analisis_zonaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, analisis_zonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Analisis_zona.
     * @param {analisis_zonaDeleteArgs} args - Arguments to delete one Analisis_zona.
     * @example
     * // Delete one Analisis_zona
     * const Analisis_zona = await prisma.analisis_zona.delete({
     *   where: {
     *     // ... filter to delete one Analisis_zona
     *   }
     * })
     *
     */
    delete<T extends analisis_zonaDeleteArgs>(args: Prisma.SelectSubset<T, analisis_zonaDeleteArgs<ExtArgs>>): Prisma.Prisma__analisis_zonaClient<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Analisis_zona.
     * @param {analisis_zonaUpdateArgs} args - Arguments to update one Analisis_zona.
     * @example
     * // Update one Analisis_zona
     * const analisis_zona = await prisma.analisis_zona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends analisis_zonaUpdateArgs>(args: Prisma.SelectSubset<T, analisis_zonaUpdateArgs<ExtArgs>>): Prisma.Prisma__analisis_zonaClient<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Analisis_zonas.
     * @param {analisis_zonaDeleteManyArgs} args - Arguments to filter Analisis_zonas to delete.
     * @example
     * // Delete a few Analisis_zonas
     * const { count } = await prisma.analisis_zona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends analisis_zonaDeleteManyArgs>(args?: Prisma.SelectSubset<T, analisis_zonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Analisis_zonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_zonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analisis_zonas
     * const analisis_zona = await prisma.analisis_zona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends analisis_zonaUpdateManyArgs>(args: Prisma.SelectSubset<T, analisis_zonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Analisis_zonas and returns the data updated in the database.
     * @param {analisis_zonaUpdateManyAndReturnArgs} args - Arguments to update many Analisis_zonas.
     * @example
     * // Update many Analisis_zonas
     * const analisis_zona = await prisma.analisis_zona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Analisis_zonas and only return the `id`
     * const analisis_zonaWithIdOnly = await prisma.analisis_zona.updateManyAndReturn({
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
    updateManyAndReturn<T extends analisis_zonaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, analisis_zonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Analisis_zona.
     * @param {analisis_zonaUpsertArgs} args - Arguments to update or create a Analisis_zona.
     * @example
     * // Update or create a Analisis_zona
     * const analisis_zona = await prisma.analisis_zona.upsert({
     *   create: {
     *     // ... data to create a Analisis_zona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analisis_zona we want to update
     *   }
     * })
     */
    upsert<T extends analisis_zonaUpsertArgs>(args: Prisma.SelectSubset<T, analisis_zonaUpsertArgs<ExtArgs>>): Prisma.Prisma__analisis_zonaClient<runtime.Types.Result.GetResult<Prisma.$analisis_zonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Analisis_zonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_zonaCountArgs} args - Arguments to filter Analisis_zonas to count.
     * @example
     * // Count the number of Analisis_zonas
     * const count = await prisma.analisis_zona.count({
     *   where: {
     *     // ... the filter for the Analisis_zonas we want to count
     *   }
     * })
    **/
    count<T extends analisis_zonaCountArgs>(args?: Prisma.Subset<T, analisis_zonaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Analisis_zonaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Analisis_zona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Analisis_zonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Analisis_zonaAggregateArgs>(args: Prisma.Subset<T, Analisis_zonaAggregateArgs>): Prisma.PrismaPromise<GetAnalisis_zonaAggregateType<T>>;
    /**
     * Group by Analisis_zona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_zonaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends analisis_zonaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: analisis_zonaGroupByArgs['orderBy'];
    } : {
        orderBy?: analisis_zonaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, analisis_zonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalisis_zonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the analisis_zona model
     */
    readonly fields: analisis_zonaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for analisis_zona.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__analisis_zonaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the analisis_zona model
 */
export interface analisis_zonaFieldRefs {
    readonly id: Prisma.FieldRef<"analisis_zona", 'Int'>;
    readonly cct_zona: Prisma.FieldRef<"analisis_zona", 'String'>;
    readonly zona: Prisma.FieldRef<"analisis_zona", 'Int'>;
    readonly campo_formativo: Prisma.FieldRef<"analisis_zona", 'String'>;
    readonly nivel_integracion: Prisma.FieldRef<"analisis_zona", 'String'>;
    readonly grado: Prisma.FieldRef<"analisis_zona", 'Int'>;
    readonly opcion_educativa: Prisma.FieldRef<"analisis_zona", 'String'>;
    readonly tipo: Prisma.FieldRef<"analisis_zona", 'String'>;
    readonly estudiantes_zona: Prisma.FieldRef<"analisis_zona", 'Int'>;
    readonly estudiantes_participantes: Prisma.FieldRef<"analisis_zona", 'Int'>;
    readonly escuelas_participantes: Prisma.FieldRef<"analisis_zona", 'Int'>;
    readonly escuelas_zona: Prisma.FieldRef<"analisis_zona", 'Int'>;
    readonly porcentaje_escuela: Prisma.FieldRef<"analisis_zona", 'Decimal'>;
    readonly porcentaje_estudiantes: Prisma.FieldRef<"analisis_zona", 'Decimal'>;
}
/**
 * analisis_zona findUnique
 */
export type analisis_zonaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_zona to fetch.
     */
    where: Prisma.analisis_zonaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona findUniqueOrThrow
 */
export type analisis_zonaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_zona to fetch.
     */
    where: Prisma.analisis_zonaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona findFirst
 */
export type analisis_zonaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_zona to fetch.
     */
    where?: Prisma.analisis_zonaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_zonas to fetch.
     */
    orderBy?: Prisma.analisis_zonaOrderByWithRelationInput | Prisma.analisis_zonaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for analisis_zonas.
     */
    cursor?: Prisma.analisis_zonaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_zonas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_zonas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of analisis_zonas.
     */
    distinct?: Prisma.Analisis_zonaScalarFieldEnum | Prisma.Analisis_zonaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona findFirstOrThrow
 */
export type analisis_zonaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_zona to fetch.
     */
    where?: Prisma.analisis_zonaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_zonas to fetch.
     */
    orderBy?: Prisma.analisis_zonaOrderByWithRelationInput | Prisma.analisis_zonaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for analisis_zonas.
     */
    cursor?: Prisma.analisis_zonaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_zonas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_zonas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of analisis_zonas.
     */
    distinct?: Prisma.Analisis_zonaScalarFieldEnum | Prisma.Analisis_zonaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona findMany
 */
export type analisis_zonaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_zonas to fetch.
     */
    where?: Prisma.analisis_zonaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_zonas to fetch.
     */
    orderBy?: Prisma.analisis_zonaOrderByWithRelationInput | Prisma.analisis_zonaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing analisis_zonas.
     */
    cursor?: Prisma.analisis_zonaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_zonas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_zonas.
     */
    skip?: number;
    distinct?: Prisma.Analisis_zonaScalarFieldEnum | Prisma.Analisis_zonaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona create
 */
export type analisis_zonaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * The data needed to create a analisis_zona.
     */
    data?: Prisma.XOR<Prisma.analisis_zonaCreateInput, Prisma.analisis_zonaUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona createMany
 */
export type analisis_zonaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many analisis_zonas.
     */
    data: Prisma.analisis_zonaCreateManyInput | Prisma.analisis_zonaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * analisis_zona createManyAndReturn
 */
export type analisis_zonaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * The data used to create many analisis_zonas.
     */
    data: Prisma.analisis_zonaCreateManyInput | Prisma.analisis_zonaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * analisis_zona update
 */
export type analisis_zonaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * The data needed to update a analisis_zona.
     */
    data: Prisma.XOR<Prisma.analisis_zonaUpdateInput, Prisma.analisis_zonaUncheckedUpdateInput>;
    /**
     * Choose, which analisis_zona to update.
     */
    where: Prisma.analisis_zonaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona updateMany
 */
export type analisis_zonaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update analisis_zonas.
     */
    data: Prisma.XOR<Prisma.analisis_zonaUpdateManyMutationInput, Prisma.analisis_zonaUncheckedUpdateManyInput>;
    /**
     * Filter which analisis_zonas to update
     */
    where?: Prisma.analisis_zonaWhereInput;
    /**
     * Limit how many analisis_zonas to update.
     */
    limit?: number;
};
/**
 * analisis_zona updateManyAndReturn
 */
export type analisis_zonaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * The data used to update analisis_zonas.
     */
    data: Prisma.XOR<Prisma.analisis_zonaUpdateManyMutationInput, Prisma.analisis_zonaUncheckedUpdateManyInput>;
    /**
     * Filter which analisis_zonas to update
     */
    where?: Prisma.analisis_zonaWhereInput;
    /**
     * Limit how many analisis_zonas to update.
     */
    limit?: number;
};
/**
 * analisis_zona upsert
 */
export type analisis_zonaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * The filter to search for the analisis_zona to update in case it exists.
     */
    where: Prisma.analisis_zonaWhereUniqueInput;
    /**
     * In case the analisis_zona found by the `where` argument doesn't exist, create a new analisis_zona with this data.
     */
    create: Prisma.XOR<Prisma.analisis_zonaCreateInput, Prisma.analisis_zonaUncheckedCreateInput>;
    /**
     * In case the analisis_zona was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.analisis_zonaUpdateInput, Prisma.analisis_zonaUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona delete
 */
export type analisis_zonaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
    /**
     * Filter which analisis_zona to delete.
     */
    where: Prisma.analisis_zonaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_zona deleteMany
 */
export type analisis_zonaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which analisis_zonas to delete
     */
    where?: Prisma.analisis_zonaWhereInput;
    /**
     * Limit how many analisis_zonas to delete.
     */
    limit?: number;
};
/**
 * analisis_zona without action
 */
export type analisis_zonaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_zona
     */
    select?: Prisma.analisis_zonaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_zona
     */
    omit?: Prisma.analisis_zonaOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=analisis_zona.d.ts.map