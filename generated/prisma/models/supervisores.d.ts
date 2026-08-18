import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model supervisores
 *
 */
export type supervisoresModel = runtime.Types.Result.DefaultSelection<Prisma.$supervisoresPayload>;
export type AggregateSupervisores = {
    _count: SupervisoresCountAggregateOutputType | null;
    _avg: SupervisoresAvgAggregateOutputType | null;
    _sum: SupervisoresSumAggregateOutputType | null;
    _min: SupervisoresMinAggregateOutputType | null;
    _max: SupervisoresMaxAggregateOutputType | null;
};
export type SupervisoresAvgAggregateOutputType = {
    id: number | null;
};
export type SupervisoresSumAggregateOutputType = {
    id: number | null;
};
export type SupervisoresMinAggregateOutputType = {
    id: number | null;
    clavecct: string | null;
    nombre_cct: string | null;
    nombre_sup_zona: string | null;
    jefatura: string | null;
    nombre_sup_sector: string | null;
};
export type SupervisoresMaxAggregateOutputType = {
    id: number | null;
    clavecct: string | null;
    nombre_cct: string | null;
    nombre_sup_zona: string | null;
    jefatura: string | null;
    nombre_sup_sector: string | null;
};
export type SupervisoresCountAggregateOutputType = {
    id: number;
    clavecct: number;
    nombre_cct: number;
    nombre_sup_zona: number;
    jefatura: number;
    nombre_sup_sector: number;
    _all: number;
};
export type SupervisoresAvgAggregateInputType = {
    id?: true;
};
export type SupervisoresSumAggregateInputType = {
    id?: true;
};
export type SupervisoresMinAggregateInputType = {
    id?: true;
    clavecct?: true;
    nombre_cct?: true;
    nombre_sup_zona?: true;
    jefatura?: true;
    nombre_sup_sector?: true;
};
export type SupervisoresMaxAggregateInputType = {
    id?: true;
    clavecct?: true;
    nombre_cct?: true;
    nombre_sup_zona?: true;
    jefatura?: true;
    nombre_sup_sector?: true;
};
export type SupervisoresCountAggregateInputType = {
    id?: true;
    clavecct?: true;
    nombre_cct?: true;
    nombre_sup_zona?: true;
    jefatura?: true;
    nombre_sup_sector?: true;
    _all?: true;
};
export type SupervisoresAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which supervisores to aggregate.
     */
    where?: Prisma.supervisoresWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supervisores to fetch.
     */
    orderBy?: Prisma.supervisoresOrderByWithRelationInput | Prisma.supervisoresOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.supervisoresWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supervisores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supervisores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned supervisores
    **/
    _count?: true | SupervisoresCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupervisoresAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupervisoresSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupervisoresMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupervisoresMaxAggregateInputType;
};
export type GetSupervisoresAggregateType<T extends SupervisoresAggregateArgs> = {
    [P in keyof T & keyof AggregateSupervisores]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupervisores[P]> : Prisma.GetScalarType<T[P], AggregateSupervisores[P]>;
};
export type supervisoresGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.supervisoresWhereInput;
    orderBy?: Prisma.supervisoresOrderByWithAggregationInput | Prisma.supervisoresOrderByWithAggregationInput[];
    by: Prisma.SupervisoresScalarFieldEnum[] | Prisma.SupervisoresScalarFieldEnum;
    having?: Prisma.supervisoresScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupervisoresCountAggregateInputType | true;
    _avg?: SupervisoresAvgAggregateInputType;
    _sum?: SupervisoresSumAggregateInputType;
    _min?: SupervisoresMinAggregateInputType;
    _max?: SupervisoresMaxAggregateInputType;
};
export type SupervisoresGroupByOutputType = {
    id: number;
    clavecct: string | null;
    nombre_cct: string | null;
    nombre_sup_zona: string | null;
    jefatura: string | null;
    nombre_sup_sector: string | null;
    _count: SupervisoresCountAggregateOutputType | null;
    _avg: SupervisoresAvgAggregateOutputType | null;
    _sum: SupervisoresSumAggregateOutputType | null;
    _min: SupervisoresMinAggregateOutputType | null;
    _max: SupervisoresMaxAggregateOutputType | null;
};
type GetSupervisoresGroupByPayload<T extends supervisoresGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupervisoresGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupervisoresGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupervisoresGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupervisoresGroupByOutputType[P]>;
}>>;
export type supervisoresWhereInput = {
    AND?: Prisma.supervisoresWhereInput | Prisma.supervisoresWhereInput[];
    OR?: Prisma.supervisoresWhereInput[];
    NOT?: Prisma.supervisoresWhereInput | Prisma.supervisoresWhereInput[];
    id?: Prisma.IntFilter<"supervisores"> | number;
    clavecct?: Prisma.StringNullableFilter<"supervisores"> | string | null;
    nombre_cct?: Prisma.StringNullableFilter<"supervisores"> | string | null;
    nombre_sup_zona?: Prisma.StringNullableFilter<"supervisores"> | string | null;
    jefatura?: Prisma.StringNullableFilter<"supervisores"> | string | null;
    nombre_sup_sector?: Prisma.StringNullableFilter<"supervisores"> | string | null;
};
export type supervisoresOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clavecct?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_cct?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_sup_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    jefatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_sup_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type supervisoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.supervisoresWhereInput | Prisma.supervisoresWhereInput[];
    OR?: Prisma.supervisoresWhereInput[];
    NOT?: Prisma.supervisoresWhereInput | Prisma.supervisoresWhereInput[];
    clavecct?: Prisma.StringNullableFilter<"supervisores"> | string | null;
    nombre_cct?: Prisma.StringNullableFilter<"supervisores"> | string | null;
    nombre_sup_zona?: Prisma.StringNullableFilter<"supervisores"> | string | null;
    jefatura?: Prisma.StringNullableFilter<"supervisores"> | string | null;
    nombre_sup_sector?: Prisma.StringNullableFilter<"supervisores"> | string | null;
}, "id">;
export type supervisoresOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clavecct?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_cct?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_sup_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    jefatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_sup_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.supervisoresCountOrderByAggregateInput;
    _avg?: Prisma.supervisoresAvgOrderByAggregateInput;
    _max?: Prisma.supervisoresMaxOrderByAggregateInput;
    _min?: Prisma.supervisoresMinOrderByAggregateInput;
    _sum?: Prisma.supervisoresSumOrderByAggregateInput;
};
export type supervisoresScalarWhereWithAggregatesInput = {
    AND?: Prisma.supervisoresScalarWhereWithAggregatesInput | Prisma.supervisoresScalarWhereWithAggregatesInput[];
    OR?: Prisma.supervisoresScalarWhereWithAggregatesInput[];
    NOT?: Prisma.supervisoresScalarWhereWithAggregatesInput | Prisma.supervisoresScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"supervisores"> | number;
    clavecct?: Prisma.StringNullableWithAggregatesFilter<"supervisores"> | string | null;
    nombre_cct?: Prisma.StringNullableWithAggregatesFilter<"supervisores"> | string | null;
    nombre_sup_zona?: Prisma.StringNullableWithAggregatesFilter<"supervisores"> | string | null;
    jefatura?: Prisma.StringNullableWithAggregatesFilter<"supervisores"> | string | null;
    nombre_sup_sector?: Prisma.StringNullableWithAggregatesFilter<"supervisores"> | string | null;
};
export type supervisoresCreateInput = {
    clavecct?: string | null;
    nombre_cct?: string | null;
    nombre_sup_zona?: string | null;
    jefatura?: string | null;
    nombre_sup_sector?: string | null;
};
export type supervisoresUncheckedCreateInput = {
    id?: number;
    clavecct?: string | null;
    nombre_cct?: string | null;
    nombre_sup_zona?: string | null;
    jefatura?: string | null;
    nombre_sup_sector?: string | null;
};
export type supervisoresUpdateInput = {
    clavecct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_sup_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jefatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_sup_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type supervisoresUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clavecct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_sup_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jefatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_sup_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type supervisoresCreateManyInput = {
    id?: number;
    clavecct?: string | null;
    nombre_cct?: string | null;
    nombre_sup_zona?: string | null;
    jefatura?: string | null;
    nombre_sup_sector?: string | null;
};
export type supervisoresUpdateManyMutationInput = {
    clavecct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_sup_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jefatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_sup_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type supervisoresUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clavecct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_sup_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    jefatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_sup_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type supervisoresCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clavecct?: Prisma.SortOrder;
    nombre_cct?: Prisma.SortOrder;
    nombre_sup_zona?: Prisma.SortOrder;
    jefatura?: Prisma.SortOrder;
    nombre_sup_sector?: Prisma.SortOrder;
};
export type supervisoresAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type supervisoresMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clavecct?: Prisma.SortOrder;
    nombre_cct?: Prisma.SortOrder;
    nombre_sup_zona?: Prisma.SortOrder;
    jefatura?: Prisma.SortOrder;
    nombre_sup_sector?: Prisma.SortOrder;
};
export type supervisoresMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clavecct?: Prisma.SortOrder;
    nombre_cct?: Prisma.SortOrder;
    nombre_sup_zona?: Prisma.SortOrder;
    jefatura?: Prisma.SortOrder;
    nombre_sup_sector?: Prisma.SortOrder;
};
export type supervisoresSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type supervisoresSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clavecct?: boolean;
    nombre_cct?: boolean;
    nombre_sup_zona?: boolean;
    jefatura?: boolean;
    nombre_sup_sector?: boolean;
}, ExtArgs["result"]["supervisores"]>;
export type supervisoresSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clavecct?: boolean;
    nombre_cct?: boolean;
    nombre_sup_zona?: boolean;
    jefatura?: boolean;
    nombre_sup_sector?: boolean;
}, ExtArgs["result"]["supervisores"]>;
export type supervisoresSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clavecct?: boolean;
    nombre_cct?: boolean;
    nombre_sup_zona?: boolean;
    jefatura?: boolean;
    nombre_sup_sector?: boolean;
}, ExtArgs["result"]["supervisores"]>;
export type supervisoresSelectScalar = {
    id?: boolean;
    clavecct?: boolean;
    nombre_cct?: boolean;
    nombre_sup_zona?: boolean;
    jefatura?: boolean;
    nombre_sup_sector?: boolean;
};
export type supervisoresOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clavecct" | "nombre_cct" | "nombre_sup_zona" | "jefatura" | "nombre_sup_sector", ExtArgs["result"]["supervisores"]>;
export type $supervisoresPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "supervisores";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clavecct: string | null;
        nombre_cct: string | null;
        nombre_sup_zona: string | null;
        jefatura: string | null;
        nombre_sup_sector: string | null;
    }, ExtArgs["result"]["supervisores"]>;
    composites: {};
};
export type supervisoresGetPayload<S extends boolean | null | undefined | supervisoresDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$supervisoresPayload, S>;
export type supervisoresCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<supervisoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: SupervisoresCountAggregateInputType | true;
};
export interface supervisoresDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['supervisores'];
        meta: {
            name: 'supervisores';
        };
    };
    /**
     * Find zero or one Supervisores that matches the filter.
     * @param {supervisoresFindUniqueArgs} args - Arguments to find a Supervisores
     * @example
     * // Get one Supervisores
     * const supervisores = await prisma.supervisores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supervisoresFindUniqueArgs>(args: Prisma.SelectSubset<T, supervisoresFindUniqueArgs<ExtArgs>>): Prisma.Prisma__supervisoresClient<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Supervisores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supervisoresFindUniqueOrThrowArgs} args - Arguments to find a Supervisores
     * @example
     * // Get one Supervisores
     * const supervisores = await prisma.supervisores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supervisoresFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, supervisoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__supervisoresClient<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Supervisores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisoresFindFirstArgs} args - Arguments to find a Supervisores
     * @example
     * // Get one Supervisores
     * const supervisores = await prisma.supervisores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supervisoresFindFirstArgs>(args?: Prisma.SelectSubset<T, supervisoresFindFirstArgs<ExtArgs>>): Prisma.Prisma__supervisoresClient<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Supervisores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisoresFindFirstOrThrowArgs} args - Arguments to find a Supervisores
     * @example
     * // Get one Supervisores
     * const supervisores = await prisma.supervisores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supervisoresFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, supervisoresFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__supervisoresClient<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Supervisores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supervisores
     * const supervisores = await prisma.supervisores.findMany()
     *
     * // Get first 10 Supervisores
     * const supervisores = await prisma.supervisores.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const supervisoresWithIdOnly = await prisma.supervisores.findMany({ select: { id: true } })
     *
     */
    findMany<T extends supervisoresFindManyArgs>(args?: Prisma.SelectSubset<T, supervisoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Supervisores.
     * @param {supervisoresCreateArgs} args - Arguments to create a Supervisores.
     * @example
     * // Create one Supervisores
     * const Supervisores = await prisma.supervisores.create({
     *   data: {
     *     // ... data to create a Supervisores
     *   }
     * })
     *
     */
    create<T extends supervisoresCreateArgs>(args: Prisma.SelectSubset<T, supervisoresCreateArgs<ExtArgs>>): Prisma.Prisma__supervisoresClient<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Supervisores.
     * @param {supervisoresCreateManyArgs} args - Arguments to create many Supervisores.
     * @example
     * // Create many Supervisores
     * const supervisores = await prisma.supervisores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends supervisoresCreateManyArgs>(args?: Prisma.SelectSubset<T, supervisoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Supervisores and returns the data saved in the database.
     * @param {supervisoresCreateManyAndReturnArgs} args - Arguments to create many Supervisores.
     * @example
     * // Create many Supervisores
     * const supervisores = await prisma.supervisores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Supervisores and only return the `id`
     * const supervisoresWithIdOnly = await prisma.supervisores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends supervisoresCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, supervisoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Supervisores.
     * @param {supervisoresDeleteArgs} args - Arguments to delete one Supervisores.
     * @example
     * // Delete one Supervisores
     * const Supervisores = await prisma.supervisores.delete({
     *   where: {
     *     // ... filter to delete one Supervisores
     *   }
     * })
     *
     */
    delete<T extends supervisoresDeleteArgs>(args: Prisma.SelectSubset<T, supervisoresDeleteArgs<ExtArgs>>): Prisma.Prisma__supervisoresClient<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Supervisores.
     * @param {supervisoresUpdateArgs} args - Arguments to update one Supervisores.
     * @example
     * // Update one Supervisores
     * const supervisores = await prisma.supervisores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends supervisoresUpdateArgs>(args: Prisma.SelectSubset<T, supervisoresUpdateArgs<ExtArgs>>): Prisma.Prisma__supervisoresClient<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Supervisores.
     * @param {supervisoresDeleteManyArgs} args - Arguments to filter Supervisores to delete.
     * @example
     * // Delete a few Supervisores
     * const { count } = await prisma.supervisores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends supervisoresDeleteManyArgs>(args?: Prisma.SelectSubset<T, supervisoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Supervisores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supervisores
     * const supervisores = await prisma.supervisores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends supervisoresUpdateManyArgs>(args: Prisma.SelectSubset<T, supervisoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Supervisores and returns the data updated in the database.
     * @param {supervisoresUpdateManyAndReturnArgs} args - Arguments to update many Supervisores.
     * @example
     * // Update many Supervisores
     * const supervisores = await prisma.supervisores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Supervisores and only return the `id`
     * const supervisoresWithIdOnly = await prisma.supervisores.updateManyAndReturn({
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
    updateManyAndReturn<T extends supervisoresUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, supervisoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Supervisores.
     * @param {supervisoresUpsertArgs} args - Arguments to update or create a Supervisores.
     * @example
     * // Update or create a Supervisores
     * const supervisores = await prisma.supervisores.upsert({
     *   create: {
     *     // ... data to create a Supervisores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supervisores we want to update
     *   }
     * })
     */
    upsert<T extends supervisoresUpsertArgs>(args: Prisma.SelectSubset<T, supervisoresUpsertArgs<ExtArgs>>): Prisma.Prisma__supervisoresClient<runtime.Types.Result.GetResult<Prisma.$supervisoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Supervisores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisoresCountArgs} args - Arguments to filter Supervisores to count.
     * @example
     * // Count the number of Supervisores
     * const count = await prisma.supervisores.count({
     *   where: {
     *     // ... the filter for the Supervisores we want to count
     *   }
     * })
    **/
    count<T extends supervisoresCountArgs>(args?: Prisma.Subset<T, supervisoresCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupervisoresCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Supervisores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupervisoresAggregateArgs>(args: Prisma.Subset<T, SupervisoresAggregateArgs>): Prisma.PrismaPromise<GetSupervisoresAggregateType<T>>;
    /**
     * Group by Supervisores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisoresGroupByArgs} args - Group by arguments.
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
    groupBy<T extends supervisoresGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: supervisoresGroupByArgs['orderBy'];
    } : {
        orderBy?: supervisoresGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, supervisoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the supervisores model
     */
    readonly fields: supervisoresFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for supervisores.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__supervisoresClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the supervisores model
 */
export interface supervisoresFieldRefs {
    readonly id: Prisma.FieldRef<"supervisores", 'Int'>;
    readonly clavecct: Prisma.FieldRef<"supervisores", 'String'>;
    readonly nombre_cct: Prisma.FieldRef<"supervisores", 'String'>;
    readonly nombre_sup_zona: Prisma.FieldRef<"supervisores", 'String'>;
    readonly jefatura: Prisma.FieldRef<"supervisores", 'String'>;
    readonly nombre_sup_sector: Prisma.FieldRef<"supervisores", 'String'>;
}
/**
 * supervisores findUnique
 */
export type supervisoresFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * Filter, which supervisores to fetch.
     */
    where: Prisma.supervisoresWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores findUniqueOrThrow
 */
export type supervisoresFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * Filter, which supervisores to fetch.
     */
    where: Prisma.supervisoresWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores findFirst
 */
export type supervisoresFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * Filter, which supervisores to fetch.
     */
    where?: Prisma.supervisoresWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supervisores to fetch.
     */
    orderBy?: Prisma.supervisoresOrderByWithRelationInput | Prisma.supervisoresOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for supervisores.
     */
    cursor?: Prisma.supervisoresWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supervisores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supervisores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of supervisores.
     */
    distinct?: Prisma.SupervisoresScalarFieldEnum | Prisma.SupervisoresScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores findFirstOrThrow
 */
export type supervisoresFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * Filter, which supervisores to fetch.
     */
    where?: Prisma.supervisoresWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supervisores to fetch.
     */
    orderBy?: Prisma.supervisoresOrderByWithRelationInput | Prisma.supervisoresOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for supervisores.
     */
    cursor?: Prisma.supervisoresWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supervisores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supervisores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of supervisores.
     */
    distinct?: Prisma.SupervisoresScalarFieldEnum | Prisma.SupervisoresScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores findMany
 */
export type supervisoresFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * Filter, which supervisores to fetch.
     */
    where?: Prisma.supervisoresWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supervisores to fetch.
     */
    orderBy?: Prisma.supervisoresOrderByWithRelationInput | Prisma.supervisoresOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing supervisores.
     */
    cursor?: Prisma.supervisoresWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supervisores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supervisores.
     */
    skip?: number;
    distinct?: Prisma.SupervisoresScalarFieldEnum | Prisma.SupervisoresScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores create
 */
export type supervisoresCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * The data needed to create a supervisores.
     */
    data?: Prisma.XOR<Prisma.supervisoresCreateInput, Prisma.supervisoresUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores createMany
 */
export type supervisoresCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many supervisores.
     */
    data: Prisma.supervisoresCreateManyInput | Prisma.supervisoresCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * supervisores createManyAndReturn
 */
export type supervisoresCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * The data used to create many supervisores.
     */
    data: Prisma.supervisoresCreateManyInput | Prisma.supervisoresCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * supervisores update
 */
export type supervisoresUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * The data needed to update a supervisores.
     */
    data: Prisma.XOR<Prisma.supervisoresUpdateInput, Prisma.supervisoresUncheckedUpdateInput>;
    /**
     * Choose, which supervisores to update.
     */
    where: Prisma.supervisoresWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores updateMany
 */
export type supervisoresUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update supervisores.
     */
    data: Prisma.XOR<Prisma.supervisoresUpdateManyMutationInput, Prisma.supervisoresUncheckedUpdateManyInput>;
    /**
     * Filter which supervisores to update
     */
    where?: Prisma.supervisoresWhereInput;
    /**
     * Limit how many supervisores to update.
     */
    limit?: number;
};
/**
 * supervisores updateManyAndReturn
 */
export type supervisoresUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * The data used to update supervisores.
     */
    data: Prisma.XOR<Prisma.supervisoresUpdateManyMutationInput, Prisma.supervisoresUncheckedUpdateManyInput>;
    /**
     * Filter which supervisores to update
     */
    where?: Prisma.supervisoresWhereInput;
    /**
     * Limit how many supervisores to update.
     */
    limit?: number;
};
/**
 * supervisores upsert
 */
export type supervisoresUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * The filter to search for the supervisores to update in case it exists.
     */
    where: Prisma.supervisoresWhereUniqueInput;
    /**
     * In case the supervisores found by the `where` argument doesn't exist, create a new supervisores with this data.
     */
    create: Prisma.XOR<Prisma.supervisoresCreateInput, Prisma.supervisoresUncheckedCreateInput>;
    /**
     * In case the supervisores was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.supervisoresUpdateInput, Prisma.supervisoresUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores delete
 */
export type supervisoresDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
    /**
     * Filter which supervisores to delete.
     */
    where: Prisma.supervisoresWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * supervisores deleteMany
 */
export type supervisoresDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which supervisores to delete
     */
    where?: Prisma.supervisoresWhereInput;
    /**
     * Limit how many supervisores to delete.
     */
    limit?: number;
};
/**
 * supervisores without action
 */
export type supervisoresDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisores
     */
    select?: Prisma.supervisoresSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the supervisores
     */
    omit?: Prisma.supervisoresOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=supervisores.d.ts.map