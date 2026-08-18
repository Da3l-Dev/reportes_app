import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model analisis_sector
 *
 */
export type analisis_sectorModel = runtime.Types.Result.DefaultSelection<Prisma.$analisis_sectorPayload>;
export type AggregateAnalisis_sector = {
    _count: Analisis_sectorCountAggregateOutputType | null;
    _avg: Analisis_sectorAvgAggregateOutputType | null;
    _sum: Analisis_sectorSumAggregateOutputType | null;
    _min: Analisis_sectorMinAggregateOutputType | null;
    _max: Analisis_sectorMaxAggregateOutputType | null;
};
export type Analisis_sectorAvgAggregateOutputType = {
    id: number | null;
    sector: number | null;
    grado: number | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_cct_zona: number | null;
    matricula_cct_zona: number | null;
    escuelas_sector: number | null;
    porcentaje_cct_zona: runtime.Decimal | null;
    porcentaje_estudiantes: runtime.Decimal | null;
};
export type Analisis_sectorSumAggregateOutputType = {
    id: number | null;
    sector: number | null;
    grado: number | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_cct_zona: number | null;
    matricula_cct_zona: number | null;
    escuelas_sector: number | null;
    porcentaje_cct_zona: runtime.Decimal | null;
    porcentaje_estudiantes: runtime.Decimal | null;
};
export type Analisis_sectorMinAggregateOutputType = {
    id: number | null;
    cct_sector: string | null;
    sector: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: number | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_cct_zona: number | null;
    matricula_cct_zona: number | null;
    escuelas_sector: number | null;
    porcentaje_cct_zona: runtime.Decimal | null;
    porcentaje_participacion_escuela: string | null;
    porcentaje_estudiantes: runtime.Decimal | null;
};
export type Analisis_sectorMaxAggregateOutputType = {
    id: number | null;
    cct_sector: string | null;
    sector: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: number | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_cct_zona: number | null;
    matricula_cct_zona: number | null;
    escuelas_sector: number | null;
    porcentaje_cct_zona: runtime.Decimal | null;
    porcentaje_participacion_escuela: string | null;
    porcentaje_estudiantes: runtime.Decimal | null;
};
export type Analisis_sectorCountAggregateOutputType = {
    id: number;
    cct_sector: number;
    sector: number;
    campo_formativo: number;
    nivel_integracion: number;
    grado: number;
    opcion_educativa: number;
    tipo: number;
    estudiantes_sector: number;
    estudiantes_participantes: number;
    escuelas_participantes: number;
    escuelas_cct_zona: number;
    matricula_cct_zona: number;
    escuelas_sector: number;
    porcentaje_cct_zona: number;
    porcentaje_participacion_escuela: number;
    porcentaje_estudiantes: number;
    _all: number;
};
export type Analisis_sectorAvgAggregateInputType = {
    id?: true;
    sector?: true;
    grado?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_cct_zona?: true;
    matricula_cct_zona?: true;
    escuelas_sector?: true;
    porcentaje_cct_zona?: true;
    porcentaje_estudiantes?: true;
};
export type Analisis_sectorSumAggregateInputType = {
    id?: true;
    sector?: true;
    grado?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_cct_zona?: true;
    matricula_cct_zona?: true;
    escuelas_sector?: true;
    porcentaje_cct_zona?: true;
    porcentaje_estudiantes?: true;
};
export type Analisis_sectorMinAggregateInputType = {
    id?: true;
    cct_sector?: true;
    sector?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_cct_zona?: true;
    matricula_cct_zona?: true;
    escuelas_sector?: true;
    porcentaje_cct_zona?: true;
    porcentaje_participacion_escuela?: true;
    porcentaje_estudiantes?: true;
};
export type Analisis_sectorMaxAggregateInputType = {
    id?: true;
    cct_sector?: true;
    sector?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_cct_zona?: true;
    matricula_cct_zona?: true;
    escuelas_sector?: true;
    porcentaje_cct_zona?: true;
    porcentaje_participacion_escuela?: true;
    porcentaje_estudiantes?: true;
};
export type Analisis_sectorCountAggregateInputType = {
    id?: true;
    cct_sector?: true;
    sector?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    estudiantes_sector?: true;
    estudiantes_participantes?: true;
    escuelas_participantes?: true;
    escuelas_cct_zona?: true;
    matricula_cct_zona?: true;
    escuelas_sector?: true;
    porcentaje_cct_zona?: true;
    porcentaje_participacion_escuela?: true;
    porcentaje_estudiantes?: true;
    _all?: true;
};
export type Analisis_sectorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which analisis_sector to aggregate.
     */
    where?: Prisma.analisis_sectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_sectors to fetch.
     */
    orderBy?: Prisma.analisis_sectorOrderByWithRelationInput | Prisma.analisis_sectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.analisis_sectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_sectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_sectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned analisis_sectors
    **/
    _count?: true | Analisis_sectorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Analisis_sectorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Analisis_sectorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Analisis_sectorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Analisis_sectorMaxAggregateInputType;
};
export type GetAnalisis_sectorAggregateType<T extends Analisis_sectorAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalisis_sector]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalisis_sector[P]> : Prisma.GetScalarType<T[P], AggregateAnalisis_sector[P]>;
};
export type analisis_sectorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.analisis_sectorWhereInput;
    orderBy?: Prisma.analisis_sectorOrderByWithAggregationInput | Prisma.analisis_sectorOrderByWithAggregationInput[];
    by: Prisma.Analisis_sectorScalarFieldEnum[] | Prisma.Analisis_sectorScalarFieldEnum;
    having?: Prisma.analisis_sectorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Analisis_sectorCountAggregateInputType | true;
    _avg?: Analisis_sectorAvgAggregateInputType;
    _sum?: Analisis_sectorSumAggregateInputType;
    _min?: Analisis_sectorMinAggregateInputType;
    _max?: Analisis_sectorMaxAggregateInputType;
};
export type Analisis_sectorGroupByOutputType = {
    id: number;
    cct_sector: string | null;
    sector: number | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    grado: number | null;
    opcion_educativa: string | null;
    tipo: string | null;
    estudiantes_sector: number | null;
    estudiantes_participantes: number | null;
    escuelas_participantes: number | null;
    escuelas_cct_zona: number | null;
    matricula_cct_zona: number | null;
    escuelas_sector: number | null;
    porcentaje_cct_zona: runtime.Decimal | null;
    porcentaje_participacion_escuela: string | null;
    porcentaje_estudiantes: runtime.Decimal | null;
    _count: Analisis_sectorCountAggregateOutputType | null;
    _avg: Analisis_sectorAvgAggregateOutputType | null;
    _sum: Analisis_sectorSumAggregateOutputType | null;
    _min: Analisis_sectorMinAggregateOutputType | null;
    _max: Analisis_sectorMaxAggregateOutputType | null;
};
type GetAnalisis_sectorGroupByPayload<T extends analisis_sectorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Analisis_sectorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Analisis_sectorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Analisis_sectorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Analisis_sectorGroupByOutputType[P]>;
}>>;
export type analisis_sectorWhereInput = {
    AND?: Prisma.analisis_sectorWhereInput | Prisma.analisis_sectorWhereInput[];
    OR?: Prisma.analisis_sectorWhereInput[];
    NOT?: Prisma.analisis_sectorWhereInput | Prisma.analisis_sectorWhereInput[];
    id?: Prisma.IntFilter<"analisis_sector"> | number;
    cct_sector?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    sector?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    campo_formativo?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    grado?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    opcion_educativa?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    tipo?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    estudiantes_sector?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    escuelas_participantes?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    escuelas_cct_zona?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    matricula_cct_zona?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    escuelas_sector?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    porcentaje_cct_zona?: Prisma.DecimalNullableFilter<"analisis_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    porcentaje_estudiantes?: Prisma.DecimalNullableFilter<"analisis_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    matricula_cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_participacion_escuela?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type analisis_sectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.analisis_sectorWhereInput | Prisma.analisis_sectorWhereInput[];
    OR?: Prisma.analisis_sectorWhereInput[];
    NOT?: Prisma.analisis_sectorWhereInput | Prisma.analisis_sectorWhereInput[];
    cct_sector?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    sector?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    campo_formativo?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    grado?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    opcion_educativa?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    tipo?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    estudiantes_sector?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    escuelas_participantes?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    escuelas_cct_zona?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    matricula_cct_zona?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    escuelas_sector?: Prisma.IntNullableFilter<"analisis_sector"> | number | null;
    porcentaje_cct_zona?: Prisma.DecimalNullableFilter<"analisis_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: Prisma.StringNullableFilter<"analisis_sector"> | string | null;
    porcentaje_estudiantes?: Prisma.DecimalNullableFilter<"analisis_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "id">;
export type analisis_sectorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    matricula_cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_participacion_escuela?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.analisis_sectorCountOrderByAggregateInput;
    _avg?: Prisma.analisis_sectorAvgOrderByAggregateInput;
    _max?: Prisma.analisis_sectorMaxOrderByAggregateInput;
    _min?: Prisma.analisis_sectorMinOrderByAggregateInput;
    _sum?: Prisma.analisis_sectorSumOrderByAggregateInput;
};
export type analisis_sectorScalarWhereWithAggregatesInput = {
    AND?: Prisma.analisis_sectorScalarWhereWithAggregatesInput | Prisma.analisis_sectorScalarWhereWithAggregatesInput[];
    OR?: Prisma.analisis_sectorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.analisis_sectorScalarWhereWithAggregatesInput | Prisma.analisis_sectorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"analisis_sector"> | number;
    cct_sector?: Prisma.StringNullableWithAggregatesFilter<"analisis_sector"> | string | null;
    sector?: Prisma.IntNullableWithAggregatesFilter<"analisis_sector"> | number | null;
    campo_formativo?: Prisma.StringNullableWithAggregatesFilter<"analisis_sector"> | string | null;
    nivel_integracion?: Prisma.StringNullableWithAggregatesFilter<"analisis_sector"> | string | null;
    grado?: Prisma.IntNullableWithAggregatesFilter<"analisis_sector"> | number | null;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"analisis_sector"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"analisis_sector"> | string | null;
    estudiantes_sector?: Prisma.IntNullableWithAggregatesFilter<"analisis_sector"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableWithAggregatesFilter<"analisis_sector"> | number | null;
    escuelas_participantes?: Prisma.IntNullableWithAggregatesFilter<"analisis_sector"> | number | null;
    escuelas_cct_zona?: Prisma.IntNullableWithAggregatesFilter<"analisis_sector"> | number | null;
    matricula_cct_zona?: Prisma.IntNullableWithAggregatesFilter<"analisis_sector"> | number | null;
    escuelas_sector?: Prisma.IntNullableWithAggregatesFilter<"analisis_sector"> | number | null;
    porcentaje_cct_zona?: Prisma.DecimalNullableWithAggregatesFilter<"analisis_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: Prisma.StringNullableWithAggregatesFilter<"analisis_sector"> | string | null;
    porcentaje_estudiantes?: Prisma.DecimalNullableWithAggregatesFilter<"analisis_sector"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorCreateInput = {
    cct_sector?: string | null;
    sector?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: number | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_sector?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_participantes?: number | null;
    escuelas_cct_zona?: number | null;
    matricula_cct_zona?: number | null;
    escuelas_sector?: number | null;
    porcentaje_cct_zona?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: string | null;
    porcentaje_estudiantes?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorUncheckedCreateInput = {
    id?: number;
    cct_sector?: string | null;
    sector?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: number | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_sector?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_participantes?: number | null;
    escuelas_cct_zona?: number | null;
    matricula_cct_zona?: number | null;
    escuelas_sector?: number | null;
    porcentaje_cct_zona?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: string | null;
    porcentaje_estudiantes?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorUpdateInput = {
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_cct_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    matricula_cct_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_cct_zona?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentaje_estudiantes?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_cct_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    matricula_cct_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_cct_zona?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentaje_estudiantes?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorCreateManyInput = {
    id?: number;
    cct_sector?: string | null;
    sector?: number | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    grado?: number | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    estudiantes_sector?: number | null;
    estudiantes_participantes?: number | null;
    escuelas_participantes?: number | null;
    escuelas_cct_zona?: number | null;
    matricula_cct_zona?: number | null;
    escuelas_sector?: number | null;
    porcentaje_cct_zona?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: string | null;
    porcentaje_estudiantes?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorUpdateManyMutationInput = {
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_cct_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    matricula_cct_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_cct_zona?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentaje_estudiantes?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_cct_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    matricula_cct_zona?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    escuelas_sector?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje_cct_zona?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentaje_participacion_escuela?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentaje_estudiantes?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_sectorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_cct_zona?: Prisma.SortOrder;
    matricula_cct_zona?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    porcentaje_cct_zona?: Prisma.SortOrder;
    porcentaje_participacion_escuela?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_sectorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_cct_zona?: Prisma.SortOrder;
    matricula_cct_zona?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    porcentaje_cct_zona?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_sectorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_cct_zona?: Prisma.SortOrder;
    matricula_cct_zona?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    porcentaje_cct_zona?: Prisma.SortOrder;
    porcentaje_participacion_escuela?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_sectorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_cct_zona?: Prisma.SortOrder;
    matricula_cct_zona?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    porcentaje_cct_zona?: Prisma.SortOrder;
    porcentaje_participacion_escuela?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_sectorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    estudiantes_sector?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    escuelas_participantes?: Prisma.SortOrder;
    escuelas_cct_zona?: Prisma.SortOrder;
    matricula_cct_zona?: Prisma.SortOrder;
    escuelas_sector?: Prisma.SortOrder;
    porcentaje_cct_zona?: Prisma.SortOrder;
    porcentaje_estudiantes?: Prisma.SortOrder;
};
export type analisis_sectorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct_sector?: boolean;
    sector?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_sector?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_participantes?: boolean;
    escuelas_cct_zona?: boolean;
    matricula_cct_zona?: boolean;
    escuelas_sector?: boolean;
    porcentaje_cct_zona?: boolean;
    porcentaje_participacion_escuela?: boolean;
    porcentaje_estudiantes?: boolean;
}, ExtArgs["result"]["analisis_sector"]>;
export type analisis_sectorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct_sector?: boolean;
    sector?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_sector?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_participantes?: boolean;
    escuelas_cct_zona?: boolean;
    matricula_cct_zona?: boolean;
    escuelas_sector?: boolean;
    porcentaje_cct_zona?: boolean;
    porcentaje_participacion_escuela?: boolean;
    porcentaje_estudiantes?: boolean;
}, ExtArgs["result"]["analisis_sector"]>;
export type analisis_sectorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct_sector?: boolean;
    sector?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_sector?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_participantes?: boolean;
    escuelas_cct_zona?: boolean;
    matricula_cct_zona?: boolean;
    escuelas_sector?: boolean;
    porcentaje_cct_zona?: boolean;
    porcentaje_participacion_escuela?: boolean;
    porcentaje_estudiantes?: boolean;
}, ExtArgs["result"]["analisis_sector"]>;
export type analisis_sectorSelectScalar = {
    id?: boolean;
    cct_sector?: boolean;
    sector?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    estudiantes_sector?: boolean;
    estudiantes_participantes?: boolean;
    escuelas_participantes?: boolean;
    escuelas_cct_zona?: boolean;
    matricula_cct_zona?: boolean;
    escuelas_sector?: boolean;
    porcentaje_cct_zona?: boolean;
    porcentaje_participacion_escuela?: boolean;
    porcentaje_estudiantes?: boolean;
};
export type analisis_sectorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cct_sector" | "sector" | "campo_formativo" | "nivel_integracion" | "grado" | "opcion_educativa" | "tipo" | "estudiantes_sector" | "estudiantes_participantes" | "escuelas_participantes" | "escuelas_cct_zona" | "matricula_cct_zona" | "escuelas_sector" | "porcentaje_cct_zona" | "porcentaje_participacion_escuela" | "porcentaje_estudiantes", ExtArgs["result"]["analisis_sector"]>;
export type $analisis_sectorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "analisis_sector";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        cct_sector: string | null;
        sector: number | null;
        campo_formativo: string | null;
        nivel_integracion: string | null;
        grado: number | null;
        opcion_educativa: string | null;
        tipo: string | null;
        estudiantes_sector: number | null;
        estudiantes_participantes: number | null;
        escuelas_participantes: number | null;
        escuelas_cct_zona: number | null;
        matricula_cct_zona: number | null;
        escuelas_sector: number | null;
        porcentaje_cct_zona: runtime.Decimal | null;
        porcentaje_participacion_escuela: string | null;
        porcentaje_estudiantes: runtime.Decimal | null;
    }, ExtArgs["result"]["analisis_sector"]>;
    composites: {};
};
export type analisis_sectorGetPayload<S extends boolean | null | undefined | analisis_sectorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload, S>;
export type analisis_sectorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<analisis_sectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Analisis_sectorCountAggregateInputType | true;
};
export interface analisis_sectorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['analisis_sector'];
        meta: {
            name: 'analisis_sector';
        };
    };
    /**
     * Find zero or one Analisis_sector that matches the filter.
     * @param {analisis_sectorFindUniqueArgs} args - Arguments to find a Analisis_sector
     * @example
     * // Get one Analisis_sector
     * const analisis_sector = await prisma.analisis_sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends analisis_sectorFindUniqueArgs>(args: Prisma.SelectSubset<T, analisis_sectorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__analisis_sectorClient<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Analisis_sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {analisis_sectorFindUniqueOrThrowArgs} args - Arguments to find a Analisis_sector
     * @example
     * // Get one Analisis_sector
     * const analisis_sector = await prisma.analisis_sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends analisis_sectorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, analisis_sectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__analisis_sectorClient<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Analisis_sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_sectorFindFirstArgs} args - Arguments to find a Analisis_sector
     * @example
     * // Get one Analisis_sector
     * const analisis_sector = await prisma.analisis_sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends analisis_sectorFindFirstArgs>(args?: Prisma.SelectSubset<T, analisis_sectorFindFirstArgs<ExtArgs>>): Prisma.Prisma__analisis_sectorClient<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Analisis_sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_sectorFindFirstOrThrowArgs} args - Arguments to find a Analisis_sector
     * @example
     * // Get one Analisis_sector
     * const analisis_sector = await prisma.analisis_sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends analisis_sectorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, analisis_sectorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__analisis_sectorClient<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Analisis_sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_sectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analisis_sectors
     * const analisis_sectors = await prisma.analisis_sector.findMany()
     *
     * // Get first 10 Analisis_sectors
     * const analisis_sectors = await prisma.analisis_sector.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const analisis_sectorWithIdOnly = await prisma.analisis_sector.findMany({ select: { id: true } })
     *
     */
    findMany<T extends analisis_sectorFindManyArgs>(args?: Prisma.SelectSubset<T, analisis_sectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Analisis_sector.
     * @param {analisis_sectorCreateArgs} args - Arguments to create a Analisis_sector.
     * @example
     * // Create one Analisis_sector
     * const Analisis_sector = await prisma.analisis_sector.create({
     *   data: {
     *     // ... data to create a Analisis_sector
     *   }
     * })
     *
     */
    create<T extends analisis_sectorCreateArgs>(args: Prisma.SelectSubset<T, analisis_sectorCreateArgs<ExtArgs>>): Prisma.Prisma__analisis_sectorClient<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Analisis_sectors.
     * @param {analisis_sectorCreateManyArgs} args - Arguments to create many Analisis_sectors.
     * @example
     * // Create many Analisis_sectors
     * const analisis_sector = await prisma.analisis_sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends analisis_sectorCreateManyArgs>(args?: Prisma.SelectSubset<T, analisis_sectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Analisis_sectors and returns the data saved in the database.
     * @param {analisis_sectorCreateManyAndReturnArgs} args - Arguments to create many Analisis_sectors.
     * @example
     * // Create many Analisis_sectors
     * const analisis_sector = await prisma.analisis_sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Analisis_sectors and only return the `id`
     * const analisis_sectorWithIdOnly = await prisma.analisis_sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends analisis_sectorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, analisis_sectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Analisis_sector.
     * @param {analisis_sectorDeleteArgs} args - Arguments to delete one Analisis_sector.
     * @example
     * // Delete one Analisis_sector
     * const Analisis_sector = await prisma.analisis_sector.delete({
     *   where: {
     *     // ... filter to delete one Analisis_sector
     *   }
     * })
     *
     */
    delete<T extends analisis_sectorDeleteArgs>(args: Prisma.SelectSubset<T, analisis_sectorDeleteArgs<ExtArgs>>): Prisma.Prisma__analisis_sectorClient<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Analisis_sector.
     * @param {analisis_sectorUpdateArgs} args - Arguments to update one Analisis_sector.
     * @example
     * // Update one Analisis_sector
     * const analisis_sector = await prisma.analisis_sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends analisis_sectorUpdateArgs>(args: Prisma.SelectSubset<T, analisis_sectorUpdateArgs<ExtArgs>>): Prisma.Prisma__analisis_sectorClient<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Analisis_sectors.
     * @param {analisis_sectorDeleteManyArgs} args - Arguments to filter Analisis_sectors to delete.
     * @example
     * // Delete a few Analisis_sectors
     * const { count } = await prisma.analisis_sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends analisis_sectorDeleteManyArgs>(args?: Prisma.SelectSubset<T, analisis_sectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Analisis_sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_sectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analisis_sectors
     * const analisis_sector = await prisma.analisis_sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends analisis_sectorUpdateManyArgs>(args: Prisma.SelectSubset<T, analisis_sectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Analisis_sectors and returns the data updated in the database.
     * @param {analisis_sectorUpdateManyAndReturnArgs} args - Arguments to update many Analisis_sectors.
     * @example
     * // Update many Analisis_sectors
     * const analisis_sector = await prisma.analisis_sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Analisis_sectors and only return the `id`
     * const analisis_sectorWithIdOnly = await prisma.analisis_sector.updateManyAndReturn({
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
    updateManyAndReturn<T extends analisis_sectorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, analisis_sectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Analisis_sector.
     * @param {analisis_sectorUpsertArgs} args - Arguments to update or create a Analisis_sector.
     * @example
     * // Update or create a Analisis_sector
     * const analisis_sector = await prisma.analisis_sector.upsert({
     *   create: {
     *     // ... data to create a Analisis_sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analisis_sector we want to update
     *   }
     * })
     */
    upsert<T extends analisis_sectorUpsertArgs>(args: Prisma.SelectSubset<T, analisis_sectorUpsertArgs<ExtArgs>>): Prisma.Prisma__analisis_sectorClient<runtime.Types.Result.GetResult<Prisma.$analisis_sectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Analisis_sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_sectorCountArgs} args - Arguments to filter Analisis_sectors to count.
     * @example
     * // Count the number of Analisis_sectors
     * const count = await prisma.analisis_sector.count({
     *   where: {
     *     // ... the filter for the Analisis_sectors we want to count
     *   }
     * })
    **/
    count<T extends analisis_sectorCountArgs>(args?: Prisma.Subset<T, analisis_sectorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Analisis_sectorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Analisis_sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Analisis_sectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Analisis_sectorAggregateArgs>(args: Prisma.Subset<T, Analisis_sectorAggregateArgs>): Prisma.PrismaPromise<GetAnalisis_sectorAggregateType<T>>;
    /**
     * Group by Analisis_sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_sectorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends analisis_sectorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: analisis_sectorGroupByArgs['orderBy'];
    } : {
        orderBy?: analisis_sectorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, analisis_sectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalisis_sectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the analisis_sector model
     */
    readonly fields: analisis_sectorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for analisis_sector.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__analisis_sectorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the analisis_sector model
 */
export interface analisis_sectorFieldRefs {
    readonly id: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly cct_sector: Prisma.FieldRef<"analisis_sector", 'String'>;
    readonly sector: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly campo_formativo: Prisma.FieldRef<"analisis_sector", 'String'>;
    readonly nivel_integracion: Prisma.FieldRef<"analisis_sector", 'String'>;
    readonly grado: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly opcion_educativa: Prisma.FieldRef<"analisis_sector", 'String'>;
    readonly tipo: Prisma.FieldRef<"analisis_sector", 'String'>;
    readonly estudiantes_sector: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly estudiantes_participantes: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly escuelas_participantes: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly escuelas_cct_zona: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly matricula_cct_zona: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly escuelas_sector: Prisma.FieldRef<"analisis_sector", 'Int'>;
    readonly porcentaje_cct_zona: Prisma.FieldRef<"analisis_sector", 'Decimal'>;
    readonly porcentaje_participacion_escuela: Prisma.FieldRef<"analisis_sector", 'String'>;
    readonly porcentaje_estudiantes: Prisma.FieldRef<"analisis_sector", 'Decimal'>;
}
/**
 * analisis_sector findUnique
 */
export type analisis_sectorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_sector to fetch.
     */
    where: Prisma.analisis_sectorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector findUniqueOrThrow
 */
export type analisis_sectorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_sector to fetch.
     */
    where: Prisma.analisis_sectorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector findFirst
 */
export type analisis_sectorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_sector to fetch.
     */
    where?: Prisma.analisis_sectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_sectors to fetch.
     */
    orderBy?: Prisma.analisis_sectorOrderByWithRelationInput | Prisma.analisis_sectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for analisis_sectors.
     */
    cursor?: Prisma.analisis_sectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_sectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_sectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of analisis_sectors.
     */
    distinct?: Prisma.Analisis_sectorScalarFieldEnum | Prisma.Analisis_sectorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector findFirstOrThrow
 */
export type analisis_sectorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_sector to fetch.
     */
    where?: Prisma.analisis_sectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_sectors to fetch.
     */
    orderBy?: Prisma.analisis_sectorOrderByWithRelationInput | Prisma.analisis_sectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for analisis_sectors.
     */
    cursor?: Prisma.analisis_sectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_sectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_sectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of analisis_sectors.
     */
    distinct?: Prisma.Analisis_sectorScalarFieldEnum | Prisma.Analisis_sectorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector findMany
 */
export type analisis_sectorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_sectors to fetch.
     */
    where?: Prisma.analisis_sectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_sectors to fetch.
     */
    orderBy?: Prisma.analisis_sectorOrderByWithRelationInput | Prisma.analisis_sectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing analisis_sectors.
     */
    cursor?: Prisma.analisis_sectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_sectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_sectors.
     */
    skip?: number;
    distinct?: Prisma.Analisis_sectorScalarFieldEnum | Prisma.Analisis_sectorScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector create
 */
export type analisis_sectorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * The data needed to create a analisis_sector.
     */
    data?: Prisma.XOR<Prisma.analisis_sectorCreateInput, Prisma.analisis_sectorUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector createMany
 */
export type analisis_sectorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many analisis_sectors.
     */
    data: Prisma.analisis_sectorCreateManyInput | Prisma.analisis_sectorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * analisis_sector createManyAndReturn
 */
export type analisis_sectorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * The data used to create many analisis_sectors.
     */
    data: Prisma.analisis_sectorCreateManyInput | Prisma.analisis_sectorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * analisis_sector update
 */
export type analisis_sectorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * The data needed to update a analisis_sector.
     */
    data: Prisma.XOR<Prisma.analisis_sectorUpdateInput, Prisma.analisis_sectorUncheckedUpdateInput>;
    /**
     * Choose, which analisis_sector to update.
     */
    where: Prisma.analisis_sectorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector updateMany
 */
export type analisis_sectorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update analisis_sectors.
     */
    data: Prisma.XOR<Prisma.analisis_sectorUpdateManyMutationInput, Prisma.analisis_sectorUncheckedUpdateManyInput>;
    /**
     * Filter which analisis_sectors to update
     */
    where?: Prisma.analisis_sectorWhereInput;
    /**
     * Limit how many analisis_sectors to update.
     */
    limit?: number;
};
/**
 * analisis_sector updateManyAndReturn
 */
export type analisis_sectorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * The data used to update analisis_sectors.
     */
    data: Prisma.XOR<Prisma.analisis_sectorUpdateManyMutationInput, Prisma.analisis_sectorUncheckedUpdateManyInput>;
    /**
     * Filter which analisis_sectors to update
     */
    where?: Prisma.analisis_sectorWhereInput;
    /**
     * Limit how many analisis_sectors to update.
     */
    limit?: number;
};
/**
 * analisis_sector upsert
 */
export type analisis_sectorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * The filter to search for the analisis_sector to update in case it exists.
     */
    where: Prisma.analisis_sectorWhereUniqueInput;
    /**
     * In case the analisis_sector found by the `where` argument doesn't exist, create a new analisis_sector with this data.
     */
    create: Prisma.XOR<Prisma.analisis_sectorCreateInput, Prisma.analisis_sectorUncheckedCreateInput>;
    /**
     * In case the analisis_sector was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.analisis_sectorUpdateInput, Prisma.analisis_sectorUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector delete
 */
export type analisis_sectorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
    /**
     * Filter which analisis_sector to delete.
     */
    where: Prisma.analisis_sectorWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_sector deleteMany
 */
export type analisis_sectorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which analisis_sectors to delete
     */
    where?: Prisma.analisis_sectorWhereInput;
    /**
     * Limit how many analisis_sectors to delete.
     */
    limit?: number;
};
/**
 * analisis_sector without action
 */
export type analisis_sectorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_sector
     */
    select?: Prisma.analisis_sectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_sector
     */
    omit?: Prisma.analisis_sectorOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=analisis_sector.d.ts.map