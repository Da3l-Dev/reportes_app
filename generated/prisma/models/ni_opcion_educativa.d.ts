import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ni_opcion_educativa
 *
 */
export type ni_opcion_educativaModel = runtime.Types.Result.DefaultSelection<Prisma.$ni_opcion_educativaPayload>;
export type AggregateNi_opcion_educativa = {
    _count: Ni_opcion_educativaCountAggregateOutputType | null;
    _avg: Ni_opcion_educativaAvgAggregateOutputType | null;
    _sum: Ni_opcion_educativaSumAggregateOutputType | null;
    _min: Ni_opcion_educativaMinAggregateOutputType | null;
    _max: Ni_opcion_educativaMaxAggregateOutputType | null;
};
export type Ni_opcion_educativaAvgAggregateOutputType = {
    id: number | null;
    total: number | null;
};
export type Ni_opcion_educativaSumAggregateOutputType = {
    id: number | null;
    total: number | null;
};
export type Ni_opcion_educativaMinAggregateOutputType = {
    id: number | null;
    opcion_educativa: string | null;
    grado: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    total: number | null;
    porcentaje: string | null;
};
export type Ni_opcion_educativaMaxAggregateOutputType = {
    id: number | null;
    opcion_educativa: string | null;
    grado: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    total: number | null;
    porcentaje: string | null;
};
export type Ni_opcion_educativaCountAggregateOutputType = {
    id: number;
    opcion_educativa: number;
    grado: number;
    tipo: number;
    campo_formativo: number;
    nivel_integracion: number;
    total: number;
    porcentaje: number;
    _all: number;
};
export type Ni_opcion_educativaAvgAggregateInputType = {
    id?: true;
    total?: true;
};
export type Ni_opcion_educativaSumAggregateInputType = {
    id?: true;
    total?: true;
};
export type Ni_opcion_educativaMinAggregateInputType = {
    id?: true;
    opcion_educativa?: true;
    grado?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    total?: true;
    porcentaje?: true;
};
export type Ni_opcion_educativaMaxAggregateInputType = {
    id?: true;
    opcion_educativa?: true;
    grado?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    total?: true;
    porcentaje?: true;
};
export type Ni_opcion_educativaCountAggregateInputType = {
    id?: true;
    opcion_educativa?: true;
    grado?: true;
    tipo?: true;
    campo_formativo?: true;
    nivel_integracion?: true;
    total?: true;
    porcentaje?: true;
    _all?: true;
};
export type Ni_opcion_educativaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_opcion_educativa to aggregate.
     */
    where?: Prisma.ni_opcion_educativaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_opcion_educativas to fetch.
     */
    orderBy?: Prisma.ni_opcion_educativaOrderByWithRelationInput | Prisma.ni_opcion_educativaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ni_opcion_educativaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_opcion_educativas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_opcion_educativas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ni_opcion_educativas
    **/
    _count?: true | Ni_opcion_educativaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Ni_opcion_educativaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Ni_opcion_educativaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Ni_opcion_educativaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Ni_opcion_educativaMaxAggregateInputType;
};
export type GetNi_opcion_educativaAggregateType<T extends Ni_opcion_educativaAggregateArgs> = {
    [P in keyof T & keyof AggregateNi_opcion_educativa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNi_opcion_educativa[P]> : Prisma.GetScalarType<T[P], AggregateNi_opcion_educativa[P]>;
};
export type ni_opcion_educativaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ni_opcion_educativaWhereInput;
    orderBy?: Prisma.ni_opcion_educativaOrderByWithAggregationInput | Prisma.ni_opcion_educativaOrderByWithAggregationInput[];
    by: Prisma.Ni_opcion_educativaScalarFieldEnum[] | Prisma.Ni_opcion_educativaScalarFieldEnum;
    having?: Prisma.ni_opcion_educativaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ni_opcion_educativaCountAggregateInputType | true;
    _avg?: Ni_opcion_educativaAvgAggregateInputType;
    _sum?: Ni_opcion_educativaSumAggregateInputType;
    _min?: Ni_opcion_educativaMinAggregateInputType;
    _max?: Ni_opcion_educativaMaxAggregateInputType;
};
export type Ni_opcion_educativaGroupByOutputType = {
    id: number;
    opcion_educativa: string | null;
    grado: string | null;
    tipo: string | null;
    campo_formativo: string | null;
    nivel_integracion: string | null;
    total: number | null;
    porcentaje: string | null;
    _count: Ni_opcion_educativaCountAggregateOutputType | null;
    _avg: Ni_opcion_educativaAvgAggregateOutputType | null;
    _sum: Ni_opcion_educativaSumAggregateOutputType | null;
    _min: Ni_opcion_educativaMinAggregateOutputType | null;
    _max: Ni_opcion_educativaMaxAggregateOutputType | null;
};
type GetNi_opcion_educativaGroupByPayload<T extends ni_opcion_educativaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ni_opcion_educativaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ni_opcion_educativaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ni_opcion_educativaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ni_opcion_educativaGroupByOutputType[P]>;
}>>;
export type ni_opcion_educativaWhereInput = {
    AND?: Prisma.ni_opcion_educativaWhereInput | Prisma.ni_opcion_educativaWhereInput[];
    OR?: Prisma.ni_opcion_educativaWhereInput[];
    NOT?: Prisma.ni_opcion_educativaWhereInput | Prisma.ni_opcion_educativaWhereInput[];
    id?: Prisma.IntFilter<"ni_opcion_educativa"> | number;
    opcion_educativa?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    campo_formativo?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    total?: Prisma.IntNullableFilter<"ni_opcion_educativa"> | number | null;
    porcentaje?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
};
export type ni_opcion_educativaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    total?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ni_opcion_educativaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ni_opcion_educativaWhereInput | Prisma.ni_opcion_educativaWhereInput[];
    OR?: Prisma.ni_opcion_educativaWhereInput[];
    NOT?: Prisma.ni_opcion_educativaWhereInput | Prisma.ni_opcion_educativaWhereInput[];
    opcion_educativa?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    campo_formativo?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
    total?: Prisma.IntNullableFilter<"ni_opcion_educativa"> | number | null;
    porcentaje?: Prisma.StringNullableFilter<"ni_opcion_educativa"> | string | null;
}, "id">;
export type ni_opcion_educativaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    total?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ni_opcion_educativaCountOrderByAggregateInput;
    _avg?: Prisma.ni_opcion_educativaAvgOrderByAggregateInput;
    _max?: Prisma.ni_opcion_educativaMaxOrderByAggregateInput;
    _min?: Prisma.ni_opcion_educativaMinOrderByAggregateInput;
    _sum?: Prisma.ni_opcion_educativaSumOrderByAggregateInput;
};
export type ni_opcion_educativaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ni_opcion_educativaScalarWhereWithAggregatesInput | Prisma.ni_opcion_educativaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ni_opcion_educativaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ni_opcion_educativaScalarWhereWithAggregatesInput | Prisma.ni_opcion_educativaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ni_opcion_educativa"> | number;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"ni_opcion_educativa"> | string | null;
    grado?: Prisma.StringNullableWithAggregatesFilter<"ni_opcion_educativa"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"ni_opcion_educativa"> | string | null;
    campo_formativo?: Prisma.StringNullableWithAggregatesFilter<"ni_opcion_educativa"> | string | null;
    nivel_integracion?: Prisma.StringNullableWithAggregatesFilter<"ni_opcion_educativa"> | string | null;
    total?: Prisma.IntNullableWithAggregatesFilter<"ni_opcion_educativa"> | number | null;
    porcentaje?: Prisma.StringNullableWithAggregatesFilter<"ni_opcion_educativa"> | string | null;
};
export type ni_opcion_educativaCreateInput = {
    opcion_educativa?: string | null;
    grado?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    total?: number | null;
    porcentaje?: string | null;
};
export type ni_opcion_educativaUncheckedCreateInput = {
    id?: number;
    opcion_educativa?: string | null;
    grado?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    total?: number | null;
    porcentaje?: string | null;
};
export type ni_opcion_educativaUpdateInput = {
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ni_opcion_educativaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ni_opcion_educativaCreateManyInput = {
    id?: number;
    opcion_educativa?: string | null;
    grado?: string | null;
    tipo?: string | null;
    campo_formativo?: string | null;
    nivel_integracion?: string | null;
    total?: number | null;
    porcentaje?: string | null;
};
export type ni_opcion_educativaUpdateManyMutationInput = {
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ni_opcion_educativaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentaje?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ni_opcion_educativaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_opcion_educativaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type ni_opcion_educativaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_opcion_educativaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type ni_opcion_educativaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type ni_opcion_educativaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    opcion_educativa?: boolean;
    grado?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    total?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_opcion_educativa"]>;
export type ni_opcion_educativaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    opcion_educativa?: boolean;
    grado?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    total?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_opcion_educativa"]>;
export type ni_opcion_educativaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    opcion_educativa?: boolean;
    grado?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    total?: boolean;
    porcentaje?: boolean;
}, ExtArgs["result"]["ni_opcion_educativa"]>;
export type ni_opcion_educativaSelectScalar = {
    id?: boolean;
    opcion_educativa?: boolean;
    grado?: boolean;
    tipo?: boolean;
    campo_formativo?: boolean;
    nivel_integracion?: boolean;
    total?: boolean;
    porcentaje?: boolean;
};
export type ni_opcion_educativaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "opcion_educativa" | "grado" | "tipo" | "campo_formativo" | "nivel_integracion" | "total" | "porcentaje", ExtArgs["result"]["ni_opcion_educativa"]>;
export type $ni_opcion_educativaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ni_opcion_educativa";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        opcion_educativa: string | null;
        grado: string | null;
        tipo: string | null;
        campo_formativo: string | null;
        nivel_integracion: string | null;
        total: number | null;
        porcentaje: string | null;
    }, ExtArgs["result"]["ni_opcion_educativa"]>;
    composites: {};
};
export type ni_opcion_educativaGetPayload<S extends boolean | null | undefined | ni_opcion_educativaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload, S>;
export type ni_opcion_educativaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ni_opcion_educativaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Ni_opcion_educativaCountAggregateInputType | true;
};
export interface ni_opcion_educativaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ni_opcion_educativa'];
        meta: {
            name: 'ni_opcion_educativa';
        };
    };
    /**
     * Find zero or one Ni_opcion_educativa that matches the filter.
     * @param {ni_opcion_educativaFindUniqueArgs} args - Arguments to find a Ni_opcion_educativa
     * @example
     * // Get one Ni_opcion_educativa
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ni_opcion_educativaFindUniqueArgs>(args: Prisma.SelectSubset<T, ni_opcion_educativaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ni_opcion_educativaClient<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ni_opcion_educativa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ni_opcion_educativaFindUniqueOrThrowArgs} args - Arguments to find a Ni_opcion_educativa
     * @example
     * // Get one Ni_opcion_educativa
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ni_opcion_educativaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ni_opcion_educativaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_opcion_educativaClient<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_opcion_educativa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_opcion_educativaFindFirstArgs} args - Arguments to find a Ni_opcion_educativa
     * @example
     * // Get one Ni_opcion_educativa
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ni_opcion_educativaFindFirstArgs>(args?: Prisma.SelectSubset<T, ni_opcion_educativaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ni_opcion_educativaClient<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_opcion_educativa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_opcion_educativaFindFirstOrThrowArgs} args - Arguments to find a Ni_opcion_educativa
     * @example
     * // Get one Ni_opcion_educativa
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ni_opcion_educativaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ni_opcion_educativaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_opcion_educativaClient<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ni_opcion_educativas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_opcion_educativaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ni_opcion_educativas
     * const ni_opcion_educativas = await prisma.ni_opcion_educativa.findMany()
     *
     * // Get first 10 Ni_opcion_educativas
     * const ni_opcion_educativas = await prisma.ni_opcion_educativa.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ni_opcion_educativaWithIdOnly = await prisma.ni_opcion_educativa.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ni_opcion_educativaFindManyArgs>(args?: Prisma.SelectSubset<T, ni_opcion_educativaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ni_opcion_educativa.
     * @param {ni_opcion_educativaCreateArgs} args - Arguments to create a Ni_opcion_educativa.
     * @example
     * // Create one Ni_opcion_educativa
     * const Ni_opcion_educativa = await prisma.ni_opcion_educativa.create({
     *   data: {
     *     // ... data to create a Ni_opcion_educativa
     *   }
     * })
     *
     */
    create<T extends ni_opcion_educativaCreateArgs>(args: Prisma.SelectSubset<T, ni_opcion_educativaCreateArgs<ExtArgs>>): Prisma.Prisma__ni_opcion_educativaClient<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ni_opcion_educativas.
     * @param {ni_opcion_educativaCreateManyArgs} args - Arguments to create many Ni_opcion_educativas.
     * @example
     * // Create many Ni_opcion_educativas
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ni_opcion_educativaCreateManyArgs>(args?: Prisma.SelectSubset<T, ni_opcion_educativaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Ni_opcion_educativas and returns the data saved in the database.
     * @param {ni_opcion_educativaCreateManyAndReturnArgs} args - Arguments to create many Ni_opcion_educativas.
     * @example
     * // Create many Ni_opcion_educativas
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ni_opcion_educativas and only return the `id`
     * const ni_opcion_educativaWithIdOnly = await prisma.ni_opcion_educativa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ni_opcion_educativaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ni_opcion_educativaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Ni_opcion_educativa.
     * @param {ni_opcion_educativaDeleteArgs} args - Arguments to delete one Ni_opcion_educativa.
     * @example
     * // Delete one Ni_opcion_educativa
     * const Ni_opcion_educativa = await prisma.ni_opcion_educativa.delete({
     *   where: {
     *     // ... filter to delete one Ni_opcion_educativa
     *   }
     * })
     *
     */
    delete<T extends ni_opcion_educativaDeleteArgs>(args: Prisma.SelectSubset<T, ni_opcion_educativaDeleteArgs<ExtArgs>>): Prisma.Prisma__ni_opcion_educativaClient<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ni_opcion_educativa.
     * @param {ni_opcion_educativaUpdateArgs} args - Arguments to update one Ni_opcion_educativa.
     * @example
     * // Update one Ni_opcion_educativa
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ni_opcion_educativaUpdateArgs>(args: Prisma.SelectSubset<T, ni_opcion_educativaUpdateArgs<ExtArgs>>): Prisma.Prisma__ni_opcion_educativaClient<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ni_opcion_educativas.
     * @param {ni_opcion_educativaDeleteManyArgs} args - Arguments to filter Ni_opcion_educativas to delete.
     * @example
     * // Delete a few Ni_opcion_educativas
     * const { count } = await prisma.ni_opcion_educativa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ni_opcion_educativaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ni_opcion_educativaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_opcion_educativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_opcion_educativaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ni_opcion_educativas
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ni_opcion_educativaUpdateManyArgs>(args: Prisma.SelectSubset<T, ni_opcion_educativaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_opcion_educativas and returns the data updated in the database.
     * @param {ni_opcion_educativaUpdateManyAndReturnArgs} args - Arguments to update many Ni_opcion_educativas.
     * @example
     * // Update many Ni_opcion_educativas
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ni_opcion_educativas and only return the `id`
     * const ni_opcion_educativaWithIdOnly = await prisma.ni_opcion_educativa.updateManyAndReturn({
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
    updateManyAndReturn<T extends ni_opcion_educativaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ni_opcion_educativaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Ni_opcion_educativa.
     * @param {ni_opcion_educativaUpsertArgs} args - Arguments to update or create a Ni_opcion_educativa.
     * @example
     * // Update or create a Ni_opcion_educativa
     * const ni_opcion_educativa = await prisma.ni_opcion_educativa.upsert({
     *   create: {
     *     // ... data to create a Ni_opcion_educativa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ni_opcion_educativa we want to update
     *   }
     * })
     */
    upsert<T extends ni_opcion_educativaUpsertArgs>(args: Prisma.SelectSubset<T, ni_opcion_educativaUpsertArgs<ExtArgs>>): Prisma.Prisma__ni_opcion_educativaClient<runtime.Types.Result.GetResult<Prisma.$ni_opcion_educativaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ni_opcion_educativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_opcion_educativaCountArgs} args - Arguments to filter Ni_opcion_educativas to count.
     * @example
     * // Count the number of Ni_opcion_educativas
     * const count = await prisma.ni_opcion_educativa.count({
     *   where: {
     *     // ... the filter for the Ni_opcion_educativas we want to count
     *   }
     * })
    **/
    count<T extends ni_opcion_educativaCountArgs>(args?: Prisma.Subset<T, ni_opcion_educativaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ni_opcion_educativaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ni_opcion_educativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ni_opcion_educativaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ni_opcion_educativaAggregateArgs>(args: Prisma.Subset<T, Ni_opcion_educativaAggregateArgs>): Prisma.PrismaPromise<GetNi_opcion_educativaAggregateType<T>>;
    /**
     * Group by Ni_opcion_educativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_opcion_educativaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ni_opcion_educativaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ni_opcion_educativaGroupByArgs['orderBy'];
    } : {
        orderBy?: ni_opcion_educativaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ni_opcion_educativaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNi_opcion_educativaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ni_opcion_educativa model
     */
    readonly fields: ni_opcion_educativaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ni_opcion_educativa.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ni_opcion_educativaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ni_opcion_educativa model
 */
export interface ni_opcion_educativaFieldRefs {
    readonly id: Prisma.FieldRef<"ni_opcion_educativa", 'Int'>;
    readonly opcion_educativa: Prisma.FieldRef<"ni_opcion_educativa", 'String'>;
    readonly grado: Prisma.FieldRef<"ni_opcion_educativa", 'String'>;
    readonly tipo: Prisma.FieldRef<"ni_opcion_educativa", 'String'>;
    readonly campo_formativo: Prisma.FieldRef<"ni_opcion_educativa", 'String'>;
    readonly nivel_integracion: Prisma.FieldRef<"ni_opcion_educativa", 'String'>;
    readonly total: Prisma.FieldRef<"ni_opcion_educativa", 'Int'>;
    readonly porcentaje: Prisma.FieldRef<"ni_opcion_educativa", 'String'>;
}
/**
 * ni_opcion_educativa findUnique
 */
export type ni_opcion_educativaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_opcion_educativa to fetch.
     */
    where: Prisma.ni_opcion_educativaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa findUniqueOrThrow
 */
export type ni_opcion_educativaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_opcion_educativa to fetch.
     */
    where: Prisma.ni_opcion_educativaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa findFirst
 */
export type ni_opcion_educativaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_opcion_educativa to fetch.
     */
    where?: Prisma.ni_opcion_educativaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_opcion_educativas to fetch.
     */
    orderBy?: Prisma.ni_opcion_educativaOrderByWithRelationInput | Prisma.ni_opcion_educativaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_opcion_educativas.
     */
    cursor?: Prisma.ni_opcion_educativaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_opcion_educativas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_opcion_educativas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_opcion_educativas.
     */
    distinct?: Prisma.Ni_opcion_educativaScalarFieldEnum | Prisma.Ni_opcion_educativaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa findFirstOrThrow
 */
export type ni_opcion_educativaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_opcion_educativa to fetch.
     */
    where?: Prisma.ni_opcion_educativaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_opcion_educativas to fetch.
     */
    orderBy?: Prisma.ni_opcion_educativaOrderByWithRelationInput | Prisma.ni_opcion_educativaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_opcion_educativas.
     */
    cursor?: Prisma.ni_opcion_educativaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_opcion_educativas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_opcion_educativas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_opcion_educativas.
     */
    distinct?: Prisma.Ni_opcion_educativaScalarFieldEnum | Prisma.Ni_opcion_educativaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa findMany
 */
export type ni_opcion_educativaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * Filter, which ni_opcion_educativas to fetch.
     */
    where?: Prisma.ni_opcion_educativaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_opcion_educativas to fetch.
     */
    orderBy?: Prisma.ni_opcion_educativaOrderByWithRelationInput | Prisma.ni_opcion_educativaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ni_opcion_educativas.
     */
    cursor?: Prisma.ni_opcion_educativaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_opcion_educativas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_opcion_educativas.
     */
    skip?: number;
    distinct?: Prisma.Ni_opcion_educativaScalarFieldEnum | Prisma.Ni_opcion_educativaScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa create
 */
export type ni_opcion_educativaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * The data needed to create a ni_opcion_educativa.
     */
    data?: Prisma.XOR<Prisma.ni_opcion_educativaCreateInput, Prisma.ni_opcion_educativaUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa createMany
 */
export type ni_opcion_educativaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ni_opcion_educativas.
     */
    data: Prisma.ni_opcion_educativaCreateManyInput | Prisma.ni_opcion_educativaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_opcion_educativa createManyAndReturn
 */
export type ni_opcion_educativaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * The data used to create many ni_opcion_educativas.
     */
    data: Prisma.ni_opcion_educativaCreateManyInput | Prisma.ni_opcion_educativaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_opcion_educativa update
 */
export type ni_opcion_educativaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * The data needed to update a ni_opcion_educativa.
     */
    data: Prisma.XOR<Prisma.ni_opcion_educativaUpdateInput, Prisma.ni_opcion_educativaUncheckedUpdateInput>;
    /**
     * Choose, which ni_opcion_educativa to update.
     */
    where: Prisma.ni_opcion_educativaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa updateMany
 */
export type ni_opcion_educativaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ni_opcion_educativas.
     */
    data: Prisma.XOR<Prisma.ni_opcion_educativaUpdateManyMutationInput, Prisma.ni_opcion_educativaUncheckedUpdateManyInput>;
    /**
     * Filter which ni_opcion_educativas to update
     */
    where?: Prisma.ni_opcion_educativaWhereInput;
    /**
     * Limit how many ni_opcion_educativas to update.
     */
    limit?: number;
};
/**
 * ni_opcion_educativa updateManyAndReturn
 */
export type ni_opcion_educativaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * The data used to update ni_opcion_educativas.
     */
    data: Prisma.XOR<Prisma.ni_opcion_educativaUpdateManyMutationInput, Prisma.ni_opcion_educativaUncheckedUpdateManyInput>;
    /**
     * Filter which ni_opcion_educativas to update
     */
    where?: Prisma.ni_opcion_educativaWhereInput;
    /**
     * Limit how many ni_opcion_educativas to update.
     */
    limit?: number;
};
/**
 * ni_opcion_educativa upsert
 */
export type ni_opcion_educativaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * The filter to search for the ni_opcion_educativa to update in case it exists.
     */
    where: Prisma.ni_opcion_educativaWhereUniqueInput;
    /**
     * In case the ni_opcion_educativa found by the `where` argument doesn't exist, create a new ni_opcion_educativa with this data.
     */
    create: Prisma.XOR<Prisma.ni_opcion_educativaCreateInput, Prisma.ni_opcion_educativaUncheckedCreateInput>;
    /**
     * In case the ni_opcion_educativa was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ni_opcion_educativaUpdateInput, Prisma.ni_opcion_educativaUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa delete
 */
export type ni_opcion_educativaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
    /**
     * Filter which ni_opcion_educativa to delete.
     */
    where: Prisma.ni_opcion_educativaWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_opcion_educativa deleteMany
 */
export type ni_opcion_educativaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_opcion_educativas to delete
     */
    where?: Prisma.ni_opcion_educativaWhereInput;
    /**
     * Limit how many ni_opcion_educativas to delete.
     */
    limit?: number;
};
/**
 * ni_opcion_educativa without action
 */
export type ni_opcion_educativaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_opcion_educativa
     */
    select?: Prisma.ni_opcion_educativaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_opcion_educativa
     */
    omit?: Prisma.ni_opcion_educativaOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ni_opcion_educativa.d.ts.map