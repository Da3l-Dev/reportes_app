import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ni_ctt
 *
 */
export type ni_cttModel = runtime.Types.Result.DefaultSelection<Prisma.$ni_cttPayload>;
export type AggregateNi_ctt = {
    _count: Ni_cttCountAggregateOutputType | null;
    _avg: Ni_cttAvgAggregateOutputType | null;
    _sum: Ni_cttSumAggregateOutputType | null;
    _min: Ni_cttMinAggregateOutputType | null;
    _max: Ni_cttMaxAggregateOutputType | null;
};
export type Ni_cttAvgAggregateOutputType = {
    id: number | null;
    estudiantes_participantes: number | null;
    matricula: number | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_cttSumAggregateOutputType = {
    id: number | null;
    estudiantes_participantes: number | null;
    matricula: number | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_cttMinAggregateOutputType = {
    id: number | null;
    ctt: string | null;
    llave: string | null;
    turno: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    estudiantes_participantes: number | null;
    matricula: number | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_cttMaxAggregateOutputType = {
    id: number | null;
    ctt: string | null;
    llave: string | null;
    turno: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    estudiantes_participantes: number | null;
    matricula: number | null;
    porcentaje: runtime.Decimal | null;
};
export type Ni_cttCountAggregateOutputType = {
    id: number;
    ctt: number;
    llave: number;
    turno: number;
    grado: number;
    opcion_educativa: number;
    tipo: number;
    campo_formativo: number;
    nivel_integracion: number;
    estudiantes_participantes: number;
    matricula: number;
    porcentaje: number;
    _all: number;
};
export type Ni_cttAvgAggregateInputType = {
    id?: true;
    estudiantes_participantes?: true;
    matricula?: true;
    porcentaje?: true;
};
export type Ni_cttSumAggregateInputType = {
    id?: true;
    estudiantes_participantes?: true;
    matricula?: true;
    porcentaje?: true;
};
export type Ni_cttMinAggregateInputType = {
    id?: true;
    ctt?: true;
    llave?: true;
    turno?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    estudiantes_participantes?: true;
    matricula?: true;
    porcentaje?: true;
};
export type Ni_cttMaxAggregateInputType = {
    id?: true;
    ctt?: true;
    llave?: true;
    turno?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    estudiantes_participantes?: true;
    matricula?: true;
    porcentaje?: true;
};
export type Ni_cttCountAggregateInputType = {
    id?: true;
    ctt?: true;
    llave?: true;
    turno?: true;
    grado?: true;
    opcion_educativa?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    estudiantes_participantes?: true;
    matricula?: true;
    porcentaje?: true;
    _all?: true;
};
export type Ni_cttAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_ctt to aggregate.
     */
    where?: Prisma.ni_cttWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_ctts to fetch.
     */
    orderBy?: Prisma.ni_cttOrderByWithRelationInput | Prisma.ni_cttOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ni_cttWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_ctts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_ctts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ni_ctts
    **/
    _count?: true | Ni_cttCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Ni_cttAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Ni_cttSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Ni_cttMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Ni_cttMaxAggregateInputType;
};
export type GetNi_cttAggregateType<T extends Ni_cttAggregateArgs> = {
    [P in keyof T & keyof AggregateNi_ctt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNi_ctt[P]> : Prisma.GetScalarType<T[P], AggregateNi_ctt[P]>;
};
export type ni_cttGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ni_cttWhereInput;
    orderBy?: Prisma.ni_cttOrderByWithAggregationInput | Prisma.ni_cttOrderByWithAggregationInput[];
    by: Prisma.Ni_cttScalarFieldEnum[] | Prisma.Ni_cttScalarFieldEnum;
    having?: Prisma.ni_cttScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ni_cttCountAggregateInputType | true;
    _avg?: Ni_cttAvgAggregateInputType;
    _sum?: Ni_cttSumAggregateInputType;
    _min?: Ni_cttMinAggregateInputType;
    _max?: Ni_cttMaxAggregateInputType;
};
export type Ni_cttGroupByOutputType = {
    id: number;
    ctt: string | null;
    llave: string | null;
    turno: string | null;
    grado: string | null;
    opcion_educativa: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    estudiantes_participantes: number | null;
    matricula: number | null;
    porcentaje: runtime.Decimal | null;
    _count: Ni_cttCountAggregateOutputType | null;
    _avg: Ni_cttAvgAggregateOutputType | null;
    _sum: Ni_cttSumAggregateOutputType | null;
    _min: Ni_cttMinAggregateOutputType | null;
    _max: Ni_cttMaxAggregateOutputType | null;
};
type GetNi_cttGroupByPayload<T extends ni_cttGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ni_cttGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ni_cttGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ni_cttGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ni_cttGroupByOutputType[P]>;
}>>;
export type ni_cttWhereInput = {
    AND?: Prisma.ni_cttWhereInput | Prisma.ni_cttWhereInput[];
    OR?: Prisma.ni_cttWhereInput[];
    NOT?: Prisma.ni_cttWhereInput | Prisma.ni_cttWhereInput[];
    id?: Prisma.IntFilter<"ni_ctt"> | number;
    ctt?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    llave?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    turno?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    campo_formativo?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"ni_ctt"> | number | null;
    matricula?: Prisma.IntNullableFilter<"ni_ctt"> | number | null;
    porcentaje?: Prisma.DecimalNullableFilter<"ni_ctt"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ctt?: Prisma.SortOrderInput | Prisma.SortOrder;
    llave?: Prisma.SortOrderInput | Prisma.SortOrder;
    turno?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    matricula?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ni_cttWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ni_cttWhereInput | Prisma.ni_cttWhereInput[];
    OR?: Prisma.ni_cttWhereInput[];
    NOT?: Prisma.ni_cttWhereInput | Prisma.ni_cttWhereInput[];
    ctt?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    llave?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    turno?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    campo_formativo?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_ctt"> | string | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"ni_ctt"> | number | null;
    matricula?: Prisma.IntNullableFilter<"ni_ctt"> | number | null;
    porcentaje?: Prisma.DecimalNullableFilter<"ni_ctt"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "id">;
export type ni_cttOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ctt?: Prisma.SortOrderInput | Prisma.SortOrder;
    llave?: Prisma.SortOrderInput | Prisma.SortOrder;
    turno?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    matricula?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ni_cttCountOrderByAggregateInput;
    _avg?: Prisma.ni_cttAvgOrderByAggregateInput;
    _max?: Prisma.ni_cttMaxOrderByAggregateInput;
    _min?: Prisma.ni_cttMinOrderByAggregateInput;
    _sum?: Prisma.ni_cttSumOrderByAggregateInput;
};
export type ni_cttScalarWhereWithAggregatesInput = {
    AND?: Prisma.ni_cttScalarWhereWithAggregatesInput | Prisma.ni_cttScalarWhereWithAggregatesInput[];
    OR?: Prisma.ni_cttScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ni_cttScalarWhereWithAggregatesInput | Prisma.ni_cttScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ni_ctt"> | number;
    ctt?: Prisma.StringNullableWithAggregatesFilter<"ni_ctt"> | string | null;
    llave?: Prisma.StringNullableWithAggregatesFilter<"ni_ctt"> | string | null;
    turno?: Prisma.StringNullableWithAggregatesFilter<"ni_ctt"> | string | null;
    grado?: Prisma.StringNullableWithAggregatesFilter<"ni_ctt"> | string | null;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"ni_ctt"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"ni_ctt"> | string | null;
    campo_formativo?: Prisma.StringNullableWithAggregatesFilter<"ni_ctt"> | string | null;
    nivel_integracion?: Prisma.StringNullableWithAggregatesFilter<"ni_ctt"> | string | null;
    estudiantes_participantes?: Prisma.IntNullableWithAggregatesFilter<"ni_ctt"> | number | null;
    matricula?: Prisma.IntNullableWithAggregatesFilter<"ni_ctt"> | number | null;
    porcentaje?: Prisma.DecimalNullableWithAggregatesFilter<"ni_ctt"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttCreateInput = {
    ctt?: string | null;
    llave?: string | null;
    turno?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    estudiantes_participantes?: number | null;
    matricula?: number | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttUncheckedCreateInput = {
    id?: number;
    ctt?: string | null;
    llave?: string | null;
    turno?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    estudiantes_participantes?: number | null;
    matricula?: number | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttUpdateInput = {
    ctt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ctt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttCreateManyInput = {
    id?: number;
    ctt?: string | null;
    llave?: string | null;
    turno?: string | null;
    grado?: string | null;
    opcion_educativa?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    estudiantes_participantes?: number | null;
    matricula?: number | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttUpdateManyMutationInput = {
    ctt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ctt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_cttCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_cttAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_cttMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_cttMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ctt?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_cttSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_cttSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt?: boolean;
    llave?: boolean;
    turno?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    estudiantes_participantes?: boolean;
    matricula?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_ctt"]>;
export type ni_cttSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt?: boolean;
    llave?: boolean;
    turno?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    estudiantes_participantes?: boolean;
    matricula?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_ctt"]>;
export type ni_cttSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ctt?: boolean;
    llave?: boolean;
    turno?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    estudiantes_participantes?: boolean;
    matricula?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_ctt"]>;
export type ni_cttSelectScalar = {
    id?: boolean;
    ctt?: boolean;
    llave?: boolean;
    turno?: boolean;
    grado?: boolean;
    opcion_educativa?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    estudiantes_participantes?: boolean;
    matricula?: boolean;
    porcentaje?: boolean;
};
export type ni_cttOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ctt" | "llave" | "turno" | "grado" | "opcion_educativa" | "tipo" | "campo_formativo" | "nivel_integracion" | "estudiantes_participantes" | "matricula" | "porcentaje", ExtArgs["result"]["ni_ctt"]>;
export type $ni_cttPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ni_ctt";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ctt: string | null;
        llave: string | null;
        turno: string | null;
        grado: string | null;
        opcion_educativa: string | null;
        tipo: string | null;
        campo_formativo: string | null;
        nivel_integracion: string | null;
        estudiantes_participantes: number | null;
        matricula: number | null;
        porcentaje: runtime.Decimal | null;
    }, ExtArgs["result"]["ni_ctt"]>;
    composites: {};
};
export type ni_cttGetPayload<S extends boolean | null | undefined | ni_cttDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ni_cttPayload, S>;
export type ni_cttCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ni_cttFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Ni_cttCountAggregateInputType | true;
};
export interface ni_cttDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ni_ctt'];
        meta: {
            name: 'ni_ctt';
        };
    };
    /**
     * Find zero or one Ni_ctt that matches the filter.
     * @param {ni_cttFindUniqueArgs} args - Arguments to find a Ni_ctt
     * @example
     * // Get one Ni_ctt
     * const ni_ctt = await prisma.ni_ctt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ni_cttFindUniqueArgs>(args: Prisma.SelectSubset<T, ni_cttFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ni_cttClient<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ni_ctt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ni_cttFindUniqueOrThrowArgs} args - Arguments to find a Ni_ctt
     * @example
     * // Get one Ni_ctt
     * const ni_ctt = await prisma.ni_ctt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ni_cttFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ni_cttFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_cttClient<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_ctt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_cttFindFirstArgs} args - Arguments to find a Ni_ctt
     * @example
     * // Get one Ni_ctt
     * const ni_ctt = await prisma.ni_ctt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ni_cttFindFirstArgs>(args?: Prisma.SelectSubset<T, ni_cttFindFirstArgs<ExtArgs>>): Prisma.Prisma__ni_cttClient<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_ctt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_cttFindFirstOrThrowArgs} args - Arguments to find a Ni_ctt
     * @example
     * // Get one Ni_ctt
     * const ni_ctt = await prisma.ni_ctt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ni_cttFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ni_cttFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_cttClient<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ni_ctts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_cttFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ni_ctts
     * const ni_ctts = await prisma.ni_ctt.findMany()
     *
     * // Get first 10 Ni_ctts
     * const ni_ctts = await prisma.ni_ctt.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ni_cttWithIdOnly = await prisma.ni_ctt.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ni_cttFindManyArgs>(args?: Prisma.SelectSubset<T, ni_cttFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ni_ctt.
     * @param {ni_cttCreateArgs} args - Arguments to create a Ni_ctt.
     * @example
     * // Create one Ni_ctt
     * const Ni_ctt = await prisma.ni_ctt.create({
     *   data: {
     *     // ... data to create a Ni_ctt
     *   }
     * })
     *
     */
    create<T extends ni_cttCreateArgs>(args: Prisma.SelectSubset<T, ni_cttCreateArgs<ExtArgs>>): Prisma.Prisma__ni_cttClient<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ni_ctts.
     * @param {ni_cttCreateManyArgs} args - Arguments to create many Ni_ctts.
     * @example
     * // Create many Ni_ctts
     * const ni_ctt = await prisma.ni_ctt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ni_cttCreateManyArgs>(args?: Prisma.SelectSubset<T, ni_cttCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Ni_ctts and returns the data saved in the database.
     * @param {ni_cttCreateManyAndReturnArgs} args - Arguments to create many Ni_ctts.
     * @example
     * // Create many Ni_ctts
     * const ni_ctt = await prisma.ni_ctt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ni_ctts and only return the `id`
     * const ni_cttWithIdOnly = await prisma.ni_ctt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ni_cttCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ni_cttCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Ni_ctt.
     * @param {ni_cttDeleteArgs} args - Arguments to delete one Ni_ctt.
     * @example
     * // Delete one Ni_ctt
     * const Ni_ctt = await prisma.ni_ctt.delete({
     *   where: {
     *     // ... filter to delete one Ni_ctt
     *   }
     * })
     *
     */
    delete<T extends ni_cttDeleteArgs>(args: Prisma.SelectSubset<T, ni_cttDeleteArgs<ExtArgs>>): Prisma.Prisma__ni_cttClient<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ni_ctt.
     * @param {ni_cttUpdateArgs} args - Arguments to update one Ni_ctt.
     * @example
     * // Update one Ni_ctt
     * const ni_ctt = await prisma.ni_ctt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ni_cttUpdateArgs>(args: Prisma.SelectSubset<T, ni_cttUpdateArgs<ExtArgs>>): Prisma.Prisma__ni_cttClient<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ni_ctts.
     * @param {ni_cttDeleteManyArgs} args - Arguments to filter Ni_ctts to delete.
     * @example
     * // Delete a few Ni_ctts
     * const { count } = await prisma.ni_ctt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ni_cttDeleteManyArgs>(args?: Prisma.SelectSubset<T, ni_cttDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_ctts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_cttUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ni_ctts
     * const ni_ctt = await prisma.ni_ctt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ni_cttUpdateManyArgs>(args: Prisma.SelectSubset<T, ni_cttUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_ctts and returns the data updated in the database.
     * @param {ni_cttUpdateManyAndReturnArgs} args - Arguments to update many Ni_ctts.
     * @example
     * // Update many Ni_ctts
     * const ni_ctt = await prisma.ni_ctt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ni_ctts and only return the `id`
     * const ni_cttWithIdOnly = await prisma.ni_ctt.updateManyAndReturn({
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
    updateManyAndReturn<T extends ni_cttUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ni_cttUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Ni_ctt.
     * @param {ni_cttUpsertArgs} args - Arguments to update or create a Ni_ctt.
     * @example
     * // Update or create a Ni_ctt
     * const ni_ctt = await prisma.ni_ctt.upsert({
     *   create: {
     *     // ... data to create a Ni_ctt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ni_ctt we want to update
     *   }
     * })
     */
    upsert<T extends ni_cttUpsertArgs>(args: Prisma.SelectSubset<T, ni_cttUpsertArgs<ExtArgs>>): Prisma.Prisma__ni_cttClient<runtime.Types.Result.GetResult<Prisma.$ni_cttPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ni_ctts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_cttCountArgs} args - Arguments to filter Ni_ctts to count.
     * @example
     * // Count the number of Ni_ctts
     * const count = await prisma.ni_ctt.count({
     *   where: {
     *     // ... the filter for the Ni_ctts we want to count
     *   }
     * })
    **/
    count<T extends ni_cttCountArgs>(args?: Prisma.Subset<T, ni_cttCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ni_cttCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ni_ctt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ni_cttAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ni_cttAggregateArgs>(args: Prisma.Subset<T, Ni_cttAggregateArgs>): Prisma.PrismaPromise<GetNi_cttAggregateType<T>>;
    /**
     * Group by Ni_ctt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_cttGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ni_cttGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ni_cttGroupByArgs['orderBy'];
    } : {
        orderBy?: ni_cttGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ni_cttGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNi_cttGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ni_ctt model
     */
    readonly fields: ni_cttFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ni_ctt.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ni_cttClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ni_ctt model
 */
export interface ni_cttFieldRefs {
    readonly id: Prisma.FieldRef<"ni_ctt", 'Int'>;
    readonly ctt: Prisma.FieldRef<"ni_ctt", 'String'>;
    readonly llave: Prisma.FieldRef<"ni_ctt", 'String'>;
    readonly turno: Prisma.FieldRef<"ni_ctt", 'String'>;
    readonly grado: Prisma.FieldRef<"ni_ctt", 'String'>;
    readonly opcion_educativa: Prisma.FieldRef<"ni_ctt", 'String'>;
    readonly tipo: Prisma.FieldRef<"ni_ctt", 'String'>;
    readonly campo_formativo: Prisma.FieldRef<"ni_ctt", 'String'>;
    readonly nivel_integracion: Prisma.FieldRef<"ni_ctt", 'String'>;
    readonly estudiantes_participantes: Prisma.FieldRef<"ni_ctt", 'Int'>;
    readonly matricula: Prisma.FieldRef<"ni_ctt", 'Int'>;
    readonly porcentaje: Prisma.FieldRef<"ni_ctt", 'Decimal'>;
}
/**
 * ni_ctt findUnique
 */
export type ni_cttFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * Filter, which ni_ctt to fetch.
     */
    where: Prisma.ni_cttWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt findUniqueOrThrow
 */
export type ni_cttFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * Filter, which ni_ctt to fetch.
     */
    where: Prisma.ni_cttWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt findFirst
 */
export type ni_cttFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * Filter, which ni_ctt to fetch.
     */
    where?: Prisma.ni_cttWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_ctts to fetch.
     */
    orderBy?: Prisma.ni_cttOrderByWithRelationInput | Prisma.ni_cttOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_ctts.
     */
    cursor?: Prisma.ni_cttWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_ctts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_ctts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_ctts.
     */
    distinct?: Prisma.Ni_cttScalarFieldEnum | Prisma.Ni_cttScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt findFirstOrThrow
 */
export type ni_cttFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * Filter, which ni_ctt to fetch.
     */
    where?: Prisma.ni_cttWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_ctts to fetch.
     */
    orderBy?: Prisma.ni_cttOrderByWithRelationInput | Prisma.ni_cttOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_ctts.
     */
    cursor?: Prisma.ni_cttWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_ctts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_ctts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_ctts.
     */
    distinct?: Prisma.Ni_cttScalarFieldEnum | Prisma.Ni_cttScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt findMany
 */
export type ni_cttFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * Filter, which ni_ctts to fetch.
     */
    where?: Prisma.ni_cttWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_ctts to fetch.
     */
    orderBy?: Prisma.ni_cttOrderByWithRelationInput | Prisma.ni_cttOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ni_ctts.
     */
    cursor?: Prisma.ni_cttWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_ctts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_ctts.
     */
    skip?: number;
    distinct?: Prisma.Ni_cttScalarFieldEnum | Prisma.Ni_cttScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt create
 */
export type ni_cttCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * The data needed to create a ni_ctt.
     */
    data?: Prisma.XOR<Prisma.ni_cttCreateInput, Prisma.ni_cttUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt createMany
 */
export type ni_cttCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ni_ctts.
     */
    data: Prisma.ni_cttCreateManyInput | Prisma.ni_cttCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_ctt createManyAndReturn
 */
export type ni_cttCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * The data used to create many ni_ctts.
     */
    data: Prisma.ni_cttCreateManyInput | Prisma.ni_cttCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_ctt update
 */
export type ni_cttUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * The data needed to update a ni_ctt.
     */
    data: Prisma.XOR<Prisma.ni_cttUpdateInput, Prisma.ni_cttUncheckedUpdateInput>;
    /**
     * Choose, which ni_ctt to update.
     */
    where: Prisma.ni_cttWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt updateMany
 */
export type ni_cttUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ni_ctts.
     */
    data: Prisma.XOR<Prisma.ni_cttUpdateManyMutationInput, Prisma.ni_cttUncheckedUpdateManyInput>;
    /**
     * Filter which ni_ctts to update
     */
    where?: Prisma.ni_cttWhereInput;
    /**
     * Limit how many ni_ctts to update.
     */
    limit?: number;
};
/**
 * ni_ctt updateManyAndReturn
 */
export type ni_cttUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * The data used to update ni_ctts.
     */
    data: Prisma.XOR<Prisma.ni_cttUpdateManyMutationInput, Prisma.ni_cttUncheckedUpdateManyInput>;
    /**
     * Filter which ni_ctts to update
     */
    where?: Prisma.ni_cttWhereInput;
    /**
     * Limit how many ni_ctts to update.
     */
    limit?: number;
};
/**
 * ni_ctt upsert
 */
export type ni_cttUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * The filter to search for the ni_ctt to update in case it exists.
     */
    where: Prisma.ni_cttWhereUniqueInput;
    /**
     * In case the ni_ctt found by the `where` argument doesn't exist, create a new ni_ctt with this data.
     */
    create: Prisma.XOR<Prisma.ni_cttCreateInput, Prisma.ni_cttUncheckedCreateInput>;
    /**
     * In case the ni_ctt was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ni_cttUpdateInput, Prisma.ni_cttUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt delete
 */
export type ni_cttDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
    /**
     * Filter which ni_ctt to delete.
     */
    where: Prisma.ni_cttWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_ctt deleteMany
 */
export type ni_cttDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_ctts to delete
     */
    where?: Prisma.ni_cttWhereInput;
    /**
     * Limit how many ni_ctts to delete.
     */
    limit?: number;
};
/**
 * ni_ctt without action
 */
export type ni_cttDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_ctt
     */
    select?: Prisma.ni_cttSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_ctt
     */
    omit?: Prisma.ni_cttOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ni_ctt.d.ts.map