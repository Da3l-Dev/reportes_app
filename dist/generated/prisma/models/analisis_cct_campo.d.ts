import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model analisis_cct_campo
 *
 */
export type analisis_cct_campoModel = runtime.Types.Result.DefaultSelection<Prisma.$analisis_cct_campoPayload>;
export type AggregateAnalisis_cct_campo = {
    _count: Analisis_cct_campoCountAggregateOutputType | null;
    _avg: Analisis_cct_campoAvgAggregateOutputType | null;
    _sum: Analisis_cct_campoSumAggregateOutputType | null;
    _min: Analisis_cct_campoMinAggregateOutputType | null;
    _max: Analisis_cct_campoMaxAggregateOutputType | null;
};
export type Analisis_cct_campoAvgAggregateOutputType = {
    id: number | null;
    grado: number | null;
    numero_alumnos: number | null;
    total_cct_grado: number | null;
    porcentaje: runtime.Decimal | null;
};
export type Analisis_cct_campoSumAggregateOutputType = {
    id: number | null;
    grado: number | null;
    numero_alumnos: number | null;
    total_cct_grado: number | null;
    porcentaje: runtime.Decimal | null;
};
export type Analisis_cct_campoMinAggregateOutputType = {
    id: number | null;
    cct: string | null;
    llave: string | null;
    cct_sector: string | null;
    cct_zona: string | null;
    turno: string | null;
    opcion_educativa: string | null;
    grado: number | null;
    nivel: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    numero_alumnos: number | null;
    total_cct_grado: number | null;
    porcentaje: runtime.Decimal | null;
};
export type Analisis_cct_campoMaxAggregateOutputType = {
    id: number | null;
    cct: string | null;
    llave: string | null;
    cct_sector: string | null;
    cct_zona: string | null;
    turno: string | null;
    opcion_educativa: string | null;
    grado: number | null;
    nivel: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    numero_alumnos: number | null;
    total_cct_grado: number | null;
    porcentaje: runtime.Decimal | null;
};
export type Analisis_cct_campoCountAggregateOutputType = {
    id: number;
    cct: number;
    llave: number;
    cct_sector: number;
    cct_zona: number;
    turno: number;
    opcion_educativa: number;
    grado: number;
    nivel: number;
    tipo: number;
    campo_formativo: number;
    nivel_integracion: number;
    numero_alumnos: number;
    total_cct_grado: number;
    porcentaje: number;
    _all: number;
};
export type Analisis_cct_campoAvgAggregateInputType = {
    id?: true;
    grado?: true;
    numero_alumnos?: true;
    total_cct_grado?: true;
    porcentaje?: true;
};
export type Analisis_cct_campoSumAggregateInputType = {
    id?: true;
    grado?: true;
    numero_alumnos?: true;
    total_cct_grado?: true;
    porcentaje?: true;
};
export type Analisis_cct_campoMinAggregateInputType = {
    id?: true;
    cct?: true;
    llave?: true;
    cct_sector?: true;
    cct_zona?: true;
    turno?: true;
    opcion_educativa?: true;
    grado?: true;
    nivel?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    numero_alumnos?: true;
    total_cct_grado?: true;
    porcentaje?: true;
};
export type Analisis_cct_campoMaxAggregateInputType = {
    id?: true;
    cct?: true;
    llave?: true;
    cct_sector?: true;
    cct_zona?: true;
    turno?: true;
    opcion_educativa?: true;
    grado?: true;
    nivel?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    numero_alumnos?: true;
    total_cct_grado?: true;
    porcentaje?: true;
};
export type Analisis_cct_campoCountAggregateInputType = {
    id?: true;
    cct?: true;
    llave?: true;
    cct_sector?: true;
    cct_zona?: true;
    turno?: true;
    opcion_educativa?: true;
    grado?: true;
    nivel?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    numero_alumnos?: true;
    total_cct_grado?: true;
    porcentaje?: true;
    _all?: true;
};
export type Analisis_cct_campoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which analisis_cct_campo to aggregate.
     */
    where?: Prisma.analisis_cct_campoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_cct_campos to fetch.
     */
    orderBy?: Prisma.analisis_cct_campoOrderByWithRelationInput | Prisma.analisis_cct_campoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.analisis_cct_campoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_cct_campos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_cct_campos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned analisis_cct_campos
    **/
    _count?: true | Analisis_cct_campoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Analisis_cct_campoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Analisis_cct_campoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Analisis_cct_campoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Analisis_cct_campoMaxAggregateInputType;
};
export type GetAnalisis_cct_campoAggregateType<T extends Analisis_cct_campoAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalisis_cct_campo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalisis_cct_campo[P]> : Prisma.GetScalarType<T[P], AggregateAnalisis_cct_campo[P]>;
};
export type analisis_cct_campoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.analisis_cct_campoWhereInput;
    orderBy?: Prisma.analisis_cct_campoOrderByWithAggregationInput | Prisma.analisis_cct_campoOrderByWithAggregationInput[];
    by: Prisma.Analisis_cct_campoScalarFieldEnum[] | Prisma.Analisis_cct_campoScalarFieldEnum;
    having?: Prisma.analisis_cct_campoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Analisis_cct_campoCountAggregateInputType | true;
    _avg?: Analisis_cct_campoAvgAggregateInputType;
    _sum?: Analisis_cct_campoSumAggregateInputType;
    _min?: Analisis_cct_campoMinAggregateInputType;
    _max?: Analisis_cct_campoMaxAggregateInputType;
};
export type Analisis_cct_campoGroupByOutputType = {
    id: number;
    cct: string | null;
    llave: string | null;
    cct_sector: string | null;
    cct_zona: string | null;
    turno: string | null;
    opcion_educativa: string | null;
    grado: number | null;
    nivel: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    numero_alumnos: number | null;
    total_cct_grado: number | null;
    porcentaje: runtime.Decimal | null;
    _count: Analisis_cct_campoCountAggregateOutputType | null;
    _avg: Analisis_cct_campoAvgAggregateOutputType | null;
    _sum: Analisis_cct_campoSumAggregateOutputType | null;
    _min: Analisis_cct_campoMinAggregateOutputType | null;
    _max: Analisis_cct_campoMaxAggregateOutputType | null;
};
type GetAnalisis_cct_campoGroupByPayload<T extends analisis_cct_campoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Analisis_cct_campoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Analisis_cct_campoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Analisis_cct_campoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Analisis_cct_campoGroupByOutputType[P]>;
}>>;
export type analisis_cct_campoWhereInput = {
    AND?: Prisma.analisis_cct_campoWhereInput | Prisma.analisis_cct_campoWhereInput[];
    OR?: Prisma.analisis_cct_campoWhereInput[];
    NOT?: Prisma.analisis_cct_campoWhereInput | Prisma.analisis_cct_campoWhereInput[];
    id?: Prisma.IntFilter<"analisis_cct_campo"> | number;
    cct?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    llave?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    cct_sector?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    cct_zona?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    turno?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    grado?: Prisma.IntNullableFilter<"analisis_cct_campo"> | number | null;
    nivel?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    tipo?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    campo_formativo?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    numero_alumnos?: Prisma.IntNullableFilter<"analisis_cct_campo"> | number | null;
    total_cct_grado?: Prisma.IntNullableFilter<"analisis_cct_campo"> | number | null;
    porcentaje?: Prisma.DecimalNullableFilter<"analisis_cct_campo"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cct?: Prisma.SortOrderInput | Prisma.SortOrder;
    llave?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    turno?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_alumnos?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_cct_grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type analisis_cct_campoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.analisis_cct_campoWhereInput | Prisma.analisis_cct_campoWhereInput[];
    OR?: Prisma.analisis_cct_campoWhereInput[];
    NOT?: Prisma.analisis_cct_campoWhereInput | Prisma.analisis_cct_campoWhereInput[];
    cct?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    llave?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    cct_sector?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    cct_zona?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    turno?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    grado?: Prisma.IntNullableFilter<"analisis_cct_campo"> | number | null;
    nivel?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    tipo?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    campo_formativo?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"analisis_cct_campo"> | string | null;
    numero_alumnos?: Prisma.IntNullableFilter<"analisis_cct_campo"> | number | null;
    total_cct_grado?: Prisma.IntNullableFilter<"analisis_cct_campo"> | number | null;
    porcentaje?: Prisma.DecimalNullableFilter<"analisis_cct_campo"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "id">;
export type analisis_cct_campoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cct?: Prisma.SortOrderInput | Prisma.SortOrder;
    llave?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    turno?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_alumnos?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_cct_grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.analisis_cct_campoCountOrderByAggregateInput;
    _avg?: Prisma.analisis_cct_campoAvgOrderByAggregateInput;
    _max?: Prisma.analisis_cct_campoMaxOrderByAggregateInput;
    _min?: Prisma.analisis_cct_campoMinOrderByAggregateInput;
    _sum?: Prisma.analisis_cct_campoSumOrderByAggregateInput;
};
export type analisis_cct_campoScalarWhereWithAggregatesInput = {
    AND?: Prisma.analisis_cct_campoScalarWhereWithAggregatesInput | Prisma.analisis_cct_campoScalarWhereWithAggregatesInput[];
    OR?: Prisma.analisis_cct_campoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.analisis_cct_campoScalarWhereWithAggregatesInput | Prisma.analisis_cct_campoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"analisis_cct_campo"> | number;
    cct?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    llave?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    cct_sector?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    cct_zona?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    turno?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    grado?: Prisma.IntNullableWithAggregatesFilter<"analisis_cct_campo"> | number | null;
    nivel?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    campo_formativo?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    nivel_integracion?: Prisma.StringNullableWithAggregatesFilter<"analisis_cct_campo"> | string | null;
    numero_alumnos?: Prisma.IntNullableWithAggregatesFilter<"analisis_cct_campo"> | number | null;
    total_cct_grado?: Prisma.IntNullableWithAggregatesFilter<"analisis_cct_campo"> | number | null;
    porcentaje?: Prisma.DecimalNullableWithAggregatesFilter<"analisis_cct_campo"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoCreateInput = {
    cct?: string | null;
    llave?: string | null;
    cct_sector?: string | null;
    cct_zona?: string | null;
    turno?: string | null;
    opcion_educativa?: string | null;
    grado?: number | null;
    nivel?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    numero_alumnos?: number | null;
    total_cct_grado?: number | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoUncheckedCreateInput = {
    id?: number;
    cct?: string | null;
    llave?: string | null;
    cct_sector?: string | null;
    cct_zona?: string | null;
    turno?: string | null;
    opcion_educativa?: string | null;
    grado?: number | null;
    nivel?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    numero_alumnos?: number | null;
    total_cct_grado?: number | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoUpdateInput = {
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_alumnos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_cct_grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_alumnos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_cct_grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoCreateManyInput = {
    id?: number;
    cct?: string | null;
    llave?: string | null;
    cct_sector?: string | null;
    cct_zona?: string | null;
    turno?: string | null;
    opcion_educativa?: string | null;
    grado?: number | null;
    nivel?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    numero_alumnos?: number | null;
    total_cct_grado?: number | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoUpdateManyMutationInput = {
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_alumnos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_cct_grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_alumnos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_cct_grado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type analisis_cct_campoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    numero_alumnos?: Prisma.SortOrder;
    total_cct_grado?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type analisis_cct_campoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    numero_alumnos?: Prisma.SortOrder;
    total_cct_grado?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type analisis_cct_campoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    numero_alumnos?: Prisma.SortOrder;
    total_cct_grado?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type analisis_cct_campoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cct?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    numero_alumnos?: Prisma.SortOrder;
    total_cct_grado?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type analisis_cct_campoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    numero_alumnos?: Prisma.SortOrder;
    total_cct_grado?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type analisis_cct_campoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct?: boolean;
    llave?: boolean;
    cct_sector?: boolean;
    cct_zona?: boolean;
    turno?: boolean;
    opcion_educativa?: boolean;
    grado?: boolean;
    nivel?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    numero_alumnos?: boolean;
    total_cct_grado?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["analisis_cct_campo"]>;
export type analisis_cct_campoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct?: boolean;
    llave?: boolean;
    cct_sector?: boolean;
    cct_zona?: boolean;
    turno?: boolean;
    opcion_educativa?: boolean;
    grado?: boolean;
    nivel?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    numero_alumnos?: boolean;
    total_cct_grado?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["analisis_cct_campo"]>;
export type analisis_cct_campoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cct?: boolean;
    llave?: boolean;
    cct_sector?: boolean;
    cct_zona?: boolean;
    turno?: boolean;
    opcion_educativa?: boolean;
    grado?: boolean;
    nivel?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    numero_alumnos?: boolean;
    total_cct_grado?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["analisis_cct_campo"]>;
export type analisis_cct_campoSelectScalar = {
    id?: boolean;
    cct?: boolean;
    llave?: boolean;
    cct_sector?: boolean;
    cct_zona?: boolean;
    turno?: boolean;
    opcion_educativa?: boolean;
    grado?: boolean;
    nivel?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    numero_alumnos?: boolean;
    total_cct_grado?: boolean;
    porcentaje?: boolean;
};
export type analisis_cct_campoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cct" | "llave" | "cct_sector" | "cct_zona" | "turno" | "opcion_educativa" | "grado" | "nivel" | "tipo" | "campo_formativo" | "nivel_integracion" | "numero_alumnos" | "total_cct_grado" | "porcentaje", ExtArgs["result"]["analisis_cct_campo"]>;
export type $analisis_cct_campoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "analisis_cct_campo";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        cct: string | null;
        llave: string | null;
        cct_sector: string | null;
        cct_zona: string | null;
        turno: string | null;
        opcion_educativa: string | null;
        grado: number | null;
        nivel: string | null;
        tipo: string | null;
        campo_formativo: string | null;
        nivel_integracion: string | null;
        numero_alumnos: number | null;
        total_cct_grado: number | null;
        porcentaje: runtime.Decimal | null;
    }, ExtArgs["result"]["analisis_cct_campo"]>;
    composites: {};
};
export type analisis_cct_campoGetPayload<S extends boolean | null | undefined | analisis_cct_campoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload, S>;
export type analisis_cct_campoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<analisis_cct_campoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Analisis_cct_campoCountAggregateInputType | true;
};
export interface analisis_cct_campoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['analisis_cct_campo'];
        meta: {
            name: 'analisis_cct_campo';
        };
    };
    /**
     * Find zero or one Analisis_cct_campo that matches the filter.
     * @param {analisis_cct_campoFindUniqueArgs} args - Arguments to find a Analisis_cct_campo
     * @example
     * // Get one Analisis_cct_campo
     * const analisis_cct_campo = await prisma.analisis_cct_campo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends analisis_cct_campoFindUniqueArgs>(args: Prisma.SelectSubset<T, analisis_cct_campoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__analisis_cct_campoClient<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Analisis_cct_campo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {analisis_cct_campoFindUniqueOrThrowArgs} args - Arguments to find a Analisis_cct_campo
     * @example
     * // Get one Analisis_cct_campo
     * const analisis_cct_campo = await prisma.analisis_cct_campo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends analisis_cct_campoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, analisis_cct_campoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__analisis_cct_campoClient<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Analisis_cct_campo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_cct_campoFindFirstArgs} args - Arguments to find a Analisis_cct_campo
     * @example
     * // Get one Analisis_cct_campo
     * const analisis_cct_campo = await prisma.analisis_cct_campo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends analisis_cct_campoFindFirstArgs>(args?: Prisma.SelectSubset<T, analisis_cct_campoFindFirstArgs<ExtArgs>>): Prisma.Prisma__analisis_cct_campoClient<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Analisis_cct_campo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_cct_campoFindFirstOrThrowArgs} args - Arguments to find a Analisis_cct_campo
     * @example
     * // Get one Analisis_cct_campo
     * const analisis_cct_campo = await prisma.analisis_cct_campo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends analisis_cct_campoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, analisis_cct_campoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__analisis_cct_campoClient<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Analisis_cct_campos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_cct_campoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analisis_cct_campos
     * const analisis_cct_campos = await prisma.analisis_cct_campo.findMany()
     *
     * // Get first 10 Analisis_cct_campos
     * const analisis_cct_campos = await prisma.analisis_cct_campo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const analisis_cct_campoWithIdOnly = await prisma.analisis_cct_campo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends analisis_cct_campoFindManyArgs>(args?: Prisma.SelectSubset<T, analisis_cct_campoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Analisis_cct_campo.
     * @param {analisis_cct_campoCreateArgs} args - Arguments to create a Analisis_cct_campo.
     * @example
     * // Create one Analisis_cct_campo
     * const Analisis_cct_campo = await prisma.analisis_cct_campo.create({
     *   data: {
     *     // ... data to create a Analisis_cct_campo
     *   }
     * })
     *
     */
    create<T extends analisis_cct_campoCreateArgs>(args: Prisma.SelectSubset<T, analisis_cct_campoCreateArgs<ExtArgs>>): Prisma.Prisma__analisis_cct_campoClient<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Analisis_cct_campos.
     * @param {analisis_cct_campoCreateManyArgs} args - Arguments to create many Analisis_cct_campos.
     * @example
     * // Create many Analisis_cct_campos
     * const analisis_cct_campo = await prisma.analisis_cct_campo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends analisis_cct_campoCreateManyArgs>(args?: Prisma.SelectSubset<T, analisis_cct_campoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Analisis_cct_campos and returns the data saved in the database.
     * @param {analisis_cct_campoCreateManyAndReturnArgs} args - Arguments to create many Analisis_cct_campos.
     * @example
     * // Create many Analisis_cct_campos
     * const analisis_cct_campo = await prisma.analisis_cct_campo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Analisis_cct_campos and only return the `id`
     * const analisis_cct_campoWithIdOnly = await prisma.analisis_cct_campo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends analisis_cct_campoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, analisis_cct_campoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Analisis_cct_campo.
     * @param {analisis_cct_campoDeleteArgs} args - Arguments to delete one Analisis_cct_campo.
     * @example
     * // Delete one Analisis_cct_campo
     * const Analisis_cct_campo = await prisma.analisis_cct_campo.delete({
     *   where: {
     *     // ... filter to delete one Analisis_cct_campo
     *   }
     * })
     *
     */
    delete<T extends analisis_cct_campoDeleteArgs>(args: Prisma.SelectSubset<T, analisis_cct_campoDeleteArgs<ExtArgs>>): Prisma.Prisma__analisis_cct_campoClient<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Analisis_cct_campo.
     * @param {analisis_cct_campoUpdateArgs} args - Arguments to update one Analisis_cct_campo.
     * @example
     * // Update one Analisis_cct_campo
     * const analisis_cct_campo = await prisma.analisis_cct_campo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends analisis_cct_campoUpdateArgs>(args: Prisma.SelectSubset<T, analisis_cct_campoUpdateArgs<ExtArgs>>): Prisma.Prisma__analisis_cct_campoClient<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Analisis_cct_campos.
     * @param {analisis_cct_campoDeleteManyArgs} args - Arguments to filter Analisis_cct_campos to delete.
     * @example
     * // Delete a few Analisis_cct_campos
     * const { count } = await prisma.analisis_cct_campo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends analisis_cct_campoDeleteManyArgs>(args?: Prisma.SelectSubset<T, analisis_cct_campoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Analisis_cct_campos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_cct_campoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analisis_cct_campos
     * const analisis_cct_campo = await prisma.analisis_cct_campo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends analisis_cct_campoUpdateManyArgs>(args: Prisma.SelectSubset<T, analisis_cct_campoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Analisis_cct_campos and returns the data updated in the database.
     * @param {analisis_cct_campoUpdateManyAndReturnArgs} args - Arguments to update many Analisis_cct_campos.
     * @example
     * // Update many Analisis_cct_campos
     * const analisis_cct_campo = await prisma.analisis_cct_campo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Analisis_cct_campos and only return the `id`
     * const analisis_cct_campoWithIdOnly = await prisma.analisis_cct_campo.updateManyAndReturn({
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
    updateManyAndReturn<T extends analisis_cct_campoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, analisis_cct_campoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Analisis_cct_campo.
     * @param {analisis_cct_campoUpsertArgs} args - Arguments to update or create a Analisis_cct_campo.
     * @example
     * // Update or create a Analisis_cct_campo
     * const analisis_cct_campo = await prisma.analisis_cct_campo.upsert({
     *   create: {
     *     // ... data to create a Analisis_cct_campo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analisis_cct_campo we want to update
     *   }
     * })
     */
    upsert<T extends analisis_cct_campoUpsertArgs>(args: Prisma.SelectSubset<T, analisis_cct_campoUpsertArgs<ExtArgs>>): Prisma.Prisma__analisis_cct_campoClient<runtime.Types.Result.GetResult<Prisma.$analisis_cct_campoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Analisis_cct_campos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_cct_campoCountArgs} args - Arguments to filter Analisis_cct_campos to count.
     * @example
     * // Count the number of Analisis_cct_campos
     * const count = await prisma.analisis_cct_campo.count({
     *   where: {
     *     // ... the filter for the Analisis_cct_campos we want to count
     *   }
     * })
    **/
    count<T extends analisis_cct_campoCountArgs>(args?: Prisma.Subset<T, analisis_cct_campoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Analisis_cct_campoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Analisis_cct_campo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Analisis_cct_campoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Analisis_cct_campoAggregateArgs>(args: Prisma.Subset<T, Analisis_cct_campoAggregateArgs>): Prisma.PrismaPromise<GetAnalisis_cct_campoAggregateType<T>>;
    /**
     * Group by Analisis_cct_campo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analisis_cct_campoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends analisis_cct_campoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: analisis_cct_campoGroupByArgs['orderBy'];
    } : {
        orderBy?: analisis_cct_campoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, analisis_cct_campoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalisis_cct_campoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the analisis_cct_campo model
     */
    readonly fields: analisis_cct_campoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for analisis_cct_campo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__analisis_cct_campoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the analisis_cct_campo model
 */
export interface analisis_cct_campoFieldRefs {
    readonly id: Prisma.FieldRef<"analisis_cct_campo", 'Int'>;
    readonly cct: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly llave: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly cct_sector: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly cct_zona: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly turno: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly opcion_educativa: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly grado: Prisma.FieldRef<"analisis_cct_campo", 'Int'>;
    readonly nivel: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly tipo: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly campo_formativo: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly nivel_integracion: Prisma.FieldRef<"analisis_cct_campo", 'String'>;
    readonly numero_alumnos: Prisma.FieldRef<"analisis_cct_campo", 'Int'>;
    readonly total_cct_grado: Prisma.FieldRef<"analisis_cct_campo", 'Int'>;
    readonly porcentaje: Prisma.FieldRef<"analisis_cct_campo", 'Decimal'>;
}
/**
 * analisis_cct_campo findUnique
 */
export type analisis_cct_campoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_cct_campo to fetch.
     */
    where: Prisma.analisis_cct_campoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo findUniqueOrThrow
 */
export type analisis_cct_campoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_cct_campo to fetch.
     */
    where: Prisma.analisis_cct_campoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo findFirst
 */
export type analisis_cct_campoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_cct_campo to fetch.
     */
    where?: Prisma.analisis_cct_campoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_cct_campos to fetch.
     */
    orderBy?: Prisma.analisis_cct_campoOrderByWithRelationInput | Prisma.analisis_cct_campoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for analisis_cct_campos.
     */
    cursor?: Prisma.analisis_cct_campoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_cct_campos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_cct_campos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of analisis_cct_campos.
     */
    distinct?: Prisma.Analisis_cct_campoScalarFieldEnum | Prisma.Analisis_cct_campoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo findFirstOrThrow
 */
export type analisis_cct_campoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_cct_campo to fetch.
     */
    where?: Prisma.analisis_cct_campoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_cct_campos to fetch.
     */
    orderBy?: Prisma.analisis_cct_campoOrderByWithRelationInput | Prisma.analisis_cct_campoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for analisis_cct_campos.
     */
    cursor?: Prisma.analisis_cct_campoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_cct_campos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_cct_campos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of analisis_cct_campos.
     */
    distinct?: Prisma.Analisis_cct_campoScalarFieldEnum | Prisma.Analisis_cct_campoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo findMany
 */
export type analisis_cct_campoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * Filter, which analisis_cct_campos to fetch.
     */
    where?: Prisma.analisis_cct_campoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analisis_cct_campos to fetch.
     */
    orderBy?: Prisma.analisis_cct_campoOrderByWithRelationInput | Prisma.analisis_cct_campoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing analisis_cct_campos.
     */
    cursor?: Prisma.analisis_cct_campoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analisis_cct_campos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analisis_cct_campos.
     */
    skip?: number;
    distinct?: Prisma.Analisis_cct_campoScalarFieldEnum | Prisma.Analisis_cct_campoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo create
 */
export type analisis_cct_campoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * The data needed to create a analisis_cct_campo.
     */
    data?: Prisma.XOR<Prisma.analisis_cct_campoCreateInput, Prisma.analisis_cct_campoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo createMany
 */
export type analisis_cct_campoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many analisis_cct_campos.
     */
    data: Prisma.analisis_cct_campoCreateManyInput | Prisma.analisis_cct_campoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * analisis_cct_campo createManyAndReturn
 */
export type analisis_cct_campoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * The data used to create many analisis_cct_campos.
     */
    data: Prisma.analisis_cct_campoCreateManyInput | Prisma.analisis_cct_campoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * analisis_cct_campo update
 */
export type analisis_cct_campoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * The data needed to update a analisis_cct_campo.
     */
    data: Prisma.XOR<Prisma.analisis_cct_campoUpdateInput, Prisma.analisis_cct_campoUncheckedUpdateInput>;
    /**
     * Choose, which analisis_cct_campo to update.
     */
    where: Prisma.analisis_cct_campoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo updateMany
 */
export type analisis_cct_campoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update analisis_cct_campos.
     */
    data: Prisma.XOR<Prisma.analisis_cct_campoUpdateManyMutationInput, Prisma.analisis_cct_campoUncheckedUpdateManyInput>;
    /**
     * Filter which analisis_cct_campos to update
     */
    where?: Prisma.analisis_cct_campoWhereInput;
    /**
     * Limit how many analisis_cct_campos to update.
     */
    limit?: number;
};
/**
 * analisis_cct_campo updateManyAndReturn
 */
export type analisis_cct_campoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * The data used to update analisis_cct_campos.
     */
    data: Prisma.XOR<Prisma.analisis_cct_campoUpdateManyMutationInput, Prisma.analisis_cct_campoUncheckedUpdateManyInput>;
    /**
     * Filter which analisis_cct_campos to update
     */
    where?: Prisma.analisis_cct_campoWhereInput;
    /**
     * Limit how many analisis_cct_campos to update.
     */
    limit?: number;
};
/**
 * analisis_cct_campo upsert
 */
export type analisis_cct_campoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * The filter to search for the analisis_cct_campo to update in case it exists.
     */
    where: Prisma.analisis_cct_campoWhereUniqueInput;
    /**
     * In case the analisis_cct_campo found by the `where` argument doesn't exist, create a new analisis_cct_campo with this data.
     */
    create: Prisma.XOR<Prisma.analisis_cct_campoCreateInput, Prisma.analisis_cct_campoUncheckedCreateInput>;
    /**
     * In case the analisis_cct_campo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.analisis_cct_campoUpdateInput, Prisma.analisis_cct_campoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo delete
 */
export type analisis_cct_campoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
    /**
     * Filter which analisis_cct_campo to delete.
     */
    where: Prisma.analisis_cct_campoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * analisis_cct_campo deleteMany
 */
export type analisis_cct_campoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which analisis_cct_campos to delete
     */
    where?: Prisma.analisis_cct_campoWhereInput;
    /**
     * Limit how many analisis_cct_campos to delete.
     */
    limit?: number;
};
/**
 * analisis_cct_campo without action
 */
export type analisis_cct_campoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analisis_cct_campo
     */
    select?: Prisma.analisis_cct_campoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the analisis_cct_campo
     */
    omit?: Prisma.analisis_cct_campoOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=analisis_cct_campo.d.ts.map