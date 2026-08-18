import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ni_sostenimiento
 *
 */
export type ni_sostenimientoModel = runtime.Types.Result.DefaultSelection<Prisma.$ni_sostenimientoPayload>;
export type AggregateNi_sostenimiento = {
    _count: Ni_sostenimientoCountAggregateOutputType | null;
    _avg: Ni_sostenimientoAvgAggregateOutputType | null;
    _sum: Ni_sostenimientoSumAggregateOutputType | null;
    _min: Ni_sostenimientoMinAggregateOutputType | null;
    _max: Ni_sostenimientoMaxAggregateOutputType | null;
};
export type Ni_sostenimientoAvgAggregateOutputType = {
    id: number | null;
    porcentaje: runtime.Decimal | null;
    absoluto: runtime.Decimal | null;
};
export type Ni_sostenimientoSumAggregateOutputType = {
    id: number | null;
    porcentaje: runtime.Decimal | null;
    absoluto: runtime.Decimal | null;
};
export type Ni_sostenimientoMinAggregateOutputType = {
    id: number | null;
    campo_formativo: string | null;
    nivel: string | null;
    control: string | null;
    tipo: string | null;
    grado: string | null;
    nivel_integracion: string | null;
    porcentaje: runtime.Decimal | null;
    absoluto: runtime.Decimal | null;
};
export type Ni_sostenimientoMaxAggregateOutputType = {
    id: number | null;
    campo_formativo: string | null;
    nivel: string | null;
    control: string | null;
    tipo: string | null;
    grado: string | null;
    nivel_integracion: string | null;
    porcentaje: runtime.Decimal | null;
    absoluto: runtime.Decimal | null;
};
export type Ni_sostenimientoCountAggregateOutputType = {
    id: number;
    campo_formativo: number;
    nivel: number;
    control: number;
    tipo: number;
    grado: number;
    nivel_integracion: number;
    porcentaje: number;
    absoluto: number;
    _all: number;
};
export type Ni_sostenimientoAvgAggregateInputType = {
    id?: true;
    porcentaje?: true;
    absoluto?: true;
};
export type Ni_sostenimientoSumAggregateInputType = {
    id?: true;
    porcentaje?: true;
    absoluto?: true;
};
export type Ni_sostenimientoMinAggregateInputType = {
    id?: true;
    campo_formativo?: true;
    nivel?: true;
    control?: true;
    tipo?: true;
    grado?: true;
    nivel_integracion?: true;
    porcentaje?: true;
    absoluto?: true;
};
export type Ni_sostenimientoMaxAggregateInputType = {
    id?: true;
    campo_formativo?: true;
    nivel?: true;
    control?: true;
    tipo?: true;
    grado?: true;
    nivel_integracion?: true;
    porcentaje?: true;
    absoluto?: true;
};
export type Ni_sostenimientoCountAggregateInputType = {
    id?: true;
    campo_formativo?: true;
    nivel?: true;
    control?: true;
    tipo?: true;
    grado?: true;
    nivel_integracion?: true;
    porcentaje?: true;
    absoluto?: true;
    _all?: true;
};
export type Ni_sostenimientoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_sostenimiento to aggregate.
     */
    where?: Prisma.ni_sostenimientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_sostenimientos to fetch.
     */
    orderBy?: Prisma.ni_sostenimientoOrderByWithRelationInput | Prisma.ni_sostenimientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ni_sostenimientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_sostenimientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_sostenimientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ni_sostenimientos
    **/
    _count?: true | Ni_sostenimientoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Ni_sostenimientoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Ni_sostenimientoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Ni_sostenimientoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Ni_sostenimientoMaxAggregateInputType;
};
export type GetNi_sostenimientoAggregateType<T extends Ni_sostenimientoAggregateArgs> = {
    [P in keyof T & keyof AggregateNi_sostenimiento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNi_sostenimiento[P]> : Prisma.GetScalarType<T[P], AggregateNi_sostenimiento[P]>;
};
export type ni_sostenimientoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ni_sostenimientoWhereInput;
    orderBy?: Prisma.ni_sostenimientoOrderByWithAggregationInput | Prisma.ni_sostenimientoOrderByWithAggregationInput[];
    by: Prisma.Ni_sostenimientoScalarFieldEnum[] | Prisma.Ni_sostenimientoScalarFieldEnum;
    having?: Prisma.ni_sostenimientoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ni_sostenimientoCountAggregateInputType | true;
    _avg?: Ni_sostenimientoAvgAggregateInputType;
    _sum?: Ni_sostenimientoSumAggregateInputType;
    _min?: Ni_sostenimientoMinAggregateInputType;
    _max?: Ni_sostenimientoMaxAggregateInputType;
};
export type Ni_sostenimientoGroupByOutputType = {
    id: number;
    campo_formativo: string | null;
    nivel: string | null;
    control: string | null;
    tipo: string | null;
    grado: string | null;
    nivel_integracion: string | null;
    porcentaje: runtime.Decimal | null;
    absoluto: runtime.Decimal | null;
    _count: Ni_sostenimientoCountAggregateOutputType | null;
    _avg: Ni_sostenimientoAvgAggregateOutputType | null;
    _sum: Ni_sostenimientoSumAggregateOutputType | null;
    _min: Ni_sostenimientoMinAggregateOutputType | null;
    _max: Ni_sostenimientoMaxAggregateOutputType | null;
};
type GetNi_sostenimientoGroupByPayload<T extends ni_sostenimientoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Ni_sostenimientoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Ni_sostenimientoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Ni_sostenimientoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Ni_sostenimientoGroupByOutputType[P]>;
}>>;
export type ni_sostenimientoWhereInput = {
    AND?: Prisma.ni_sostenimientoWhereInput | Prisma.ni_sostenimientoWhereInput[];
    OR?: Prisma.ni_sostenimientoWhereInput[];
    NOT?: Prisma.ni_sostenimientoWhereInput | Prisma.ni_sostenimientoWhereInput[];
    id?: Prisma.IntFilter<"ni_sostenimiento"> | number;
    campo_formativo?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    nivel?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    control?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    porcentaje?: Prisma.DecimalNullableFilter<"ni_sostenimiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: Prisma.DecimalNullableFilter<"ni_sostenimiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel?: Prisma.SortOrderInput | Prisma.SortOrder;
    control?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
    absoluto?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ni_sostenimientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ni_sostenimientoWhereInput | Prisma.ni_sostenimientoWhereInput[];
    OR?: Prisma.ni_sostenimientoWhereInput[];
    NOT?: Prisma.ni_sostenimientoWhereInput | Prisma.ni_sostenimientoWhereInput[];
    campo_formativo?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    nivel?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    control?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    tipo?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    grado?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    nivel_integracion?: Prisma.StringNullableFilter<"ni_sostenimiento"> | string | null;
    porcentaje?: Prisma.DecimalNullableFilter<"ni_sostenimiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: Prisma.DecimalNullableFilter<"ni_sostenimiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "id">;
export type ni_sostenimientoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel?: Prisma.SortOrderInput | Prisma.SortOrder;
    control?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    grado?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentaje?: Prisma.SortOrderInput | Prisma.SortOrder;
    absoluto?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ni_sostenimientoCountOrderByAggregateInput;
    _avg?: Prisma.ni_sostenimientoAvgOrderByAggregateInput;
    _max?: Prisma.ni_sostenimientoMaxOrderByAggregateInput;
    _min?: Prisma.ni_sostenimientoMinOrderByAggregateInput;
    _sum?: Prisma.ni_sostenimientoSumOrderByAggregateInput;
};
export type ni_sostenimientoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ni_sostenimientoScalarWhereWithAggregatesInput | Prisma.ni_sostenimientoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ni_sostenimientoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ni_sostenimientoScalarWhereWithAggregatesInput | Prisma.ni_sostenimientoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ni_sostenimiento"> | number;
    campo_formativo?: Prisma.StringNullableWithAggregatesFilter<"ni_sostenimiento"> | string | null;
    nivel?: Prisma.StringNullableWithAggregatesFilter<"ni_sostenimiento"> | string | null;
    control?: Prisma.StringNullableWithAggregatesFilter<"ni_sostenimiento"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"ni_sostenimiento"> | string | null;
    grado?: Prisma.StringNullableWithAggregatesFilter<"ni_sostenimiento"> | string | null;
    nivel_integracion?: Prisma.StringNullableWithAggregatesFilter<"ni_sostenimiento"> | string | null;
    porcentaje?: Prisma.DecimalNullableWithAggregatesFilter<"ni_sostenimiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: Prisma.DecimalNullableWithAggregatesFilter<"ni_sostenimiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoCreateInput = {
    campo_formativo?: string | null;
    nivel?: string | null;
    control?: string | null;
    tipo?: string | null;
    grado?: string | null;
    nivel_integracion?: string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoUncheckedCreateInput = {
    id?: number;
    campo_formativo?: string | null;
    nivel?: string | null;
    control?: string | null;
    tipo?: string | null;
    grado?: string | null;
    nivel_integracion?: string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoUpdateInput = {
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    control?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    control?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoCreateManyInput = {
    id?: number;
    campo_formativo?: string | null;
    nivel?: string | null;
    control?: string | null;
    tipo?: string | null;
    grado?: string | null;
    nivel_integracion?: string | null;
    porcentaje?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoUpdateManyMutationInput = {
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    control?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    campo_formativo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    control?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel_integracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    porcentaje?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    absoluto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ni_sostenimientoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    control?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    absoluto?: Prisma.SortOrder;
};
export type ni_sostenimientoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    absoluto?: Prisma.SortOrder;
};
export type ni_sostenimientoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    control?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    absoluto?: Prisma.SortOrder;
};
export type ni_sostenimientoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    campo_formativo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    control?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    nivel_integracion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    absoluto?: Prisma.SortOrder;
};
export type ni_sostenimientoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    absoluto?: Prisma.SortOrder;
};
export type ni_sostenimientoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campo_formativo?: boolean;
    nivel?: boolean;
    control?: boolean;
    tipo?: boolean;
    grado?: boolean;
    nivel_integracion?: boolean;
    porcentaje?: boolean;
    absoluto?: boolean;
}, ExtArgs["result"]["ni_sostenimiento"]>;
export type ni_sostenimientoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campo_formativo?: boolean;
    nivel?: boolean;
    control?: boolean;
    tipo?: boolean;
    grado?: boolean;
    nivel_integracion?: boolean;
    porcentaje?: boolean;
    absoluto?: boolean;
}, ExtArgs["result"]["ni_sostenimiento"]>;
export type ni_sostenimientoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    campo_formativo?: boolean;
    nivel?: boolean;
    control?: boolean;
    tipo?: boolean;
    grado?: boolean;
    nivel_integracion?: boolean;
    porcentaje?: boolean;
    absoluto?: boolean;
}, ExtArgs["result"]["ni_sostenimiento"]>;
export type ni_sostenimientoSelectScalar = {
    id?: boolean;
    campo_formativo?: boolean;
    nivel?: boolean;
    control?: boolean;
    tipo?: boolean;
    grado?: boolean;
    nivel_integracion?: boolean;
    porcentaje?: boolean;
    absoluto?: boolean;
};
export type ni_sostenimientoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "campo_formativo" | "nivel" | "control" | "tipo" | "grado" | "nivel_integracion" | "porcentaje" | "absoluto", ExtArgs["result"]["ni_sostenimiento"]>;
export type $ni_sostenimientoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ni_sostenimiento";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        campo_formativo: string | null;
        nivel: string | null;
        control: string | null;
        tipo: string | null;
        grado: string | null;
        nivel_integracion: string | null;
        porcentaje: runtime.Decimal | null;
        absoluto: runtime.Decimal | null;
    }, ExtArgs["result"]["ni_sostenimiento"]>;
    composites: {};
};
export type ni_sostenimientoGetPayload<S extends boolean | null | undefined | ni_sostenimientoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload, S>;
export type ni_sostenimientoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ni_sostenimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Ni_sostenimientoCountAggregateInputType | true;
};
export interface ni_sostenimientoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ni_sostenimiento'];
        meta: {
            name: 'ni_sostenimiento';
        };
    };
    /**
     * Find zero or one Ni_sostenimiento that matches the filter.
     * @param {ni_sostenimientoFindUniqueArgs} args - Arguments to find a Ni_sostenimiento
     * @example
     * // Get one Ni_sostenimiento
     * const ni_sostenimiento = await prisma.ni_sostenimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ni_sostenimientoFindUniqueArgs>(args: Prisma.SelectSubset<T, ni_sostenimientoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ni_sostenimientoClient<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ni_sostenimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ni_sostenimientoFindUniqueOrThrowArgs} args - Arguments to find a Ni_sostenimiento
     * @example
     * // Get one Ni_sostenimiento
     * const ni_sostenimiento = await prisma.ni_sostenimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ni_sostenimientoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ni_sostenimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_sostenimientoClient<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_sostenimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sostenimientoFindFirstArgs} args - Arguments to find a Ni_sostenimiento
     * @example
     * // Get one Ni_sostenimiento
     * const ni_sostenimiento = await prisma.ni_sostenimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ni_sostenimientoFindFirstArgs>(args?: Prisma.SelectSubset<T, ni_sostenimientoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ni_sostenimientoClient<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ni_sostenimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sostenimientoFindFirstOrThrowArgs} args - Arguments to find a Ni_sostenimiento
     * @example
     * // Get one Ni_sostenimiento
     * const ni_sostenimiento = await prisma.ni_sostenimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ni_sostenimientoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ni_sostenimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ni_sostenimientoClient<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ni_sostenimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sostenimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ni_sostenimientos
     * const ni_sostenimientos = await prisma.ni_sostenimiento.findMany()
     *
     * // Get first 10 Ni_sostenimientos
     * const ni_sostenimientos = await prisma.ni_sostenimiento.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ni_sostenimientoWithIdOnly = await prisma.ni_sostenimiento.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ni_sostenimientoFindManyArgs>(args?: Prisma.SelectSubset<T, ni_sostenimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ni_sostenimiento.
     * @param {ni_sostenimientoCreateArgs} args - Arguments to create a Ni_sostenimiento.
     * @example
     * // Create one Ni_sostenimiento
     * const Ni_sostenimiento = await prisma.ni_sostenimiento.create({
     *   data: {
     *     // ... data to create a Ni_sostenimiento
     *   }
     * })
     *
     */
    create<T extends ni_sostenimientoCreateArgs>(args: Prisma.SelectSubset<T, ni_sostenimientoCreateArgs<ExtArgs>>): Prisma.Prisma__ni_sostenimientoClient<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ni_sostenimientos.
     * @param {ni_sostenimientoCreateManyArgs} args - Arguments to create many Ni_sostenimientos.
     * @example
     * // Create many Ni_sostenimientos
     * const ni_sostenimiento = await prisma.ni_sostenimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ni_sostenimientoCreateManyArgs>(args?: Prisma.SelectSubset<T, ni_sostenimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Ni_sostenimientos and returns the data saved in the database.
     * @param {ni_sostenimientoCreateManyAndReturnArgs} args - Arguments to create many Ni_sostenimientos.
     * @example
     * // Create many Ni_sostenimientos
     * const ni_sostenimiento = await prisma.ni_sostenimiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ni_sostenimientos and only return the `id`
     * const ni_sostenimientoWithIdOnly = await prisma.ni_sostenimiento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ni_sostenimientoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ni_sostenimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Ni_sostenimiento.
     * @param {ni_sostenimientoDeleteArgs} args - Arguments to delete one Ni_sostenimiento.
     * @example
     * // Delete one Ni_sostenimiento
     * const Ni_sostenimiento = await prisma.ni_sostenimiento.delete({
     *   where: {
     *     // ... filter to delete one Ni_sostenimiento
     *   }
     * })
     *
     */
    delete<T extends ni_sostenimientoDeleteArgs>(args: Prisma.SelectSubset<T, ni_sostenimientoDeleteArgs<ExtArgs>>): Prisma.Prisma__ni_sostenimientoClient<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ni_sostenimiento.
     * @param {ni_sostenimientoUpdateArgs} args - Arguments to update one Ni_sostenimiento.
     * @example
     * // Update one Ni_sostenimiento
     * const ni_sostenimiento = await prisma.ni_sostenimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ni_sostenimientoUpdateArgs>(args: Prisma.SelectSubset<T, ni_sostenimientoUpdateArgs<ExtArgs>>): Prisma.Prisma__ni_sostenimientoClient<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ni_sostenimientos.
     * @param {ni_sostenimientoDeleteManyArgs} args - Arguments to filter Ni_sostenimientos to delete.
     * @example
     * // Delete a few Ni_sostenimientos
     * const { count } = await prisma.ni_sostenimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ni_sostenimientoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ni_sostenimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_sostenimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sostenimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ni_sostenimientos
     * const ni_sostenimiento = await prisma.ni_sostenimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ni_sostenimientoUpdateManyArgs>(args: Prisma.SelectSubset<T, ni_sostenimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ni_sostenimientos and returns the data updated in the database.
     * @param {ni_sostenimientoUpdateManyAndReturnArgs} args - Arguments to update many Ni_sostenimientos.
     * @example
     * // Update many Ni_sostenimientos
     * const ni_sostenimiento = await prisma.ni_sostenimiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ni_sostenimientos and only return the `id`
     * const ni_sostenimientoWithIdOnly = await prisma.ni_sostenimiento.updateManyAndReturn({
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
    updateManyAndReturn<T extends ni_sostenimientoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ni_sostenimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Ni_sostenimiento.
     * @param {ni_sostenimientoUpsertArgs} args - Arguments to update or create a Ni_sostenimiento.
     * @example
     * // Update or create a Ni_sostenimiento
     * const ni_sostenimiento = await prisma.ni_sostenimiento.upsert({
     *   create: {
     *     // ... data to create a Ni_sostenimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ni_sostenimiento we want to update
     *   }
     * })
     */
    upsert<T extends ni_sostenimientoUpsertArgs>(args: Prisma.SelectSubset<T, ni_sostenimientoUpsertArgs<ExtArgs>>): Prisma.Prisma__ni_sostenimientoClient<runtime.Types.Result.GetResult<Prisma.$ni_sostenimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ni_sostenimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sostenimientoCountArgs} args - Arguments to filter Ni_sostenimientos to count.
     * @example
     * // Count the number of Ni_sostenimientos
     * const count = await prisma.ni_sostenimiento.count({
     *   where: {
     *     // ... the filter for the Ni_sostenimientos we want to count
     *   }
     * })
    **/
    count<T extends ni_sostenimientoCountArgs>(args?: Prisma.Subset<T, ni_sostenimientoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Ni_sostenimientoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ni_sostenimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ni_sostenimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ni_sostenimientoAggregateArgs>(args: Prisma.Subset<T, Ni_sostenimientoAggregateArgs>): Prisma.PrismaPromise<GetNi_sostenimientoAggregateType<T>>;
    /**
     * Group by Ni_sostenimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ni_sostenimientoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ni_sostenimientoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ni_sostenimientoGroupByArgs['orderBy'];
    } : {
        orderBy?: ni_sostenimientoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ni_sostenimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNi_sostenimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ni_sostenimiento model
     */
    readonly fields: ni_sostenimientoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ni_sostenimiento.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ni_sostenimientoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ni_sostenimiento model
 */
export interface ni_sostenimientoFieldRefs {
    readonly id: Prisma.FieldRef<"ni_sostenimiento", 'Int'>;
    readonly campo_formativo: Prisma.FieldRef<"ni_sostenimiento", 'String'>;
    readonly nivel: Prisma.FieldRef<"ni_sostenimiento", 'String'>;
    readonly control: Prisma.FieldRef<"ni_sostenimiento", 'String'>;
    readonly tipo: Prisma.FieldRef<"ni_sostenimiento", 'String'>;
    readonly grado: Prisma.FieldRef<"ni_sostenimiento", 'String'>;
    readonly nivel_integracion: Prisma.FieldRef<"ni_sostenimiento", 'String'>;
    readonly porcentaje: Prisma.FieldRef<"ni_sostenimiento", 'Decimal'>;
    readonly absoluto: Prisma.FieldRef<"ni_sostenimiento", 'Decimal'>;
}
/**
 * ni_sostenimiento findUnique
 */
export type ni_sostenimientoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sostenimiento to fetch.
     */
    where: Prisma.ni_sostenimientoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento findUniqueOrThrow
 */
export type ni_sostenimientoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sostenimiento to fetch.
     */
    where: Prisma.ni_sostenimientoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento findFirst
 */
export type ni_sostenimientoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sostenimiento to fetch.
     */
    where?: Prisma.ni_sostenimientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_sostenimientos to fetch.
     */
    orderBy?: Prisma.ni_sostenimientoOrderByWithRelationInput | Prisma.ni_sostenimientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_sostenimientos.
     */
    cursor?: Prisma.ni_sostenimientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_sostenimientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_sostenimientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_sostenimientos.
     */
    distinct?: Prisma.Ni_sostenimientoScalarFieldEnum | Prisma.Ni_sostenimientoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento findFirstOrThrow
 */
export type ni_sostenimientoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sostenimiento to fetch.
     */
    where?: Prisma.ni_sostenimientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_sostenimientos to fetch.
     */
    orderBy?: Prisma.ni_sostenimientoOrderByWithRelationInput | Prisma.ni_sostenimientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ni_sostenimientos.
     */
    cursor?: Prisma.ni_sostenimientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_sostenimientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_sostenimientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ni_sostenimientos.
     */
    distinct?: Prisma.Ni_sostenimientoScalarFieldEnum | Prisma.Ni_sostenimientoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento findMany
 */
export type ni_sostenimientoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * Filter, which ni_sostenimientos to fetch.
     */
    where?: Prisma.ni_sostenimientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ni_sostenimientos to fetch.
     */
    orderBy?: Prisma.ni_sostenimientoOrderByWithRelationInput | Prisma.ni_sostenimientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ni_sostenimientos.
     */
    cursor?: Prisma.ni_sostenimientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ni_sostenimientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ni_sostenimientos.
     */
    skip?: number;
    distinct?: Prisma.Ni_sostenimientoScalarFieldEnum | Prisma.Ni_sostenimientoScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento create
 */
export type ni_sostenimientoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * The data needed to create a ni_sostenimiento.
     */
    data?: Prisma.XOR<Prisma.ni_sostenimientoCreateInput, Prisma.ni_sostenimientoUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento createMany
 */
export type ni_sostenimientoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ni_sostenimientos.
     */
    data: Prisma.ni_sostenimientoCreateManyInput | Prisma.ni_sostenimientoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_sostenimiento createManyAndReturn
 */
export type ni_sostenimientoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * The data used to create many ni_sostenimientos.
     */
    data: Prisma.ni_sostenimientoCreateManyInput | Prisma.ni_sostenimientoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ni_sostenimiento update
 */
export type ni_sostenimientoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * The data needed to update a ni_sostenimiento.
     */
    data: Prisma.XOR<Prisma.ni_sostenimientoUpdateInput, Prisma.ni_sostenimientoUncheckedUpdateInput>;
    /**
     * Choose, which ni_sostenimiento to update.
     */
    where: Prisma.ni_sostenimientoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento updateMany
 */
export type ni_sostenimientoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ni_sostenimientos.
     */
    data: Prisma.XOR<Prisma.ni_sostenimientoUpdateManyMutationInput, Prisma.ni_sostenimientoUncheckedUpdateManyInput>;
    /**
     * Filter which ni_sostenimientos to update
     */
    where?: Prisma.ni_sostenimientoWhereInput;
    /**
     * Limit how many ni_sostenimientos to update.
     */
    limit?: number;
};
/**
 * ni_sostenimiento updateManyAndReturn
 */
export type ni_sostenimientoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * The data used to update ni_sostenimientos.
     */
    data: Prisma.XOR<Prisma.ni_sostenimientoUpdateManyMutationInput, Prisma.ni_sostenimientoUncheckedUpdateManyInput>;
    /**
     * Filter which ni_sostenimientos to update
     */
    where?: Prisma.ni_sostenimientoWhereInput;
    /**
     * Limit how many ni_sostenimientos to update.
     */
    limit?: number;
};
/**
 * ni_sostenimiento upsert
 */
export type ni_sostenimientoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * The filter to search for the ni_sostenimiento to update in case it exists.
     */
    where: Prisma.ni_sostenimientoWhereUniqueInput;
    /**
     * In case the ni_sostenimiento found by the `where` argument doesn't exist, create a new ni_sostenimiento with this data.
     */
    create: Prisma.XOR<Prisma.ni_sostenimientoCreateInput, Prisma.ni_sostenimientoUncheckedCreateInput>;
    /**
     * In case the ni_sostenimiento was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ni_sostenimientoUpdateInput, Prisma.ni_sostenimientoUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento delete
 */
export type ni_sostenimientoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
    /**
     * Filter which ni_sostenimiento to delete.
     */
    where: Prisma.ni_sostenimientoWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * ni_sostenimiento deleteMany
 */
export type ni_sostenimientoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ni_sostenimientos to delete
     */
    where?: Prisma.ni_sostenimientoWhereInput;
    /**
     * Limit how many ni_sostenimientos to delete.
     */
    limit?: number;
};
/**
 * ni_sostenimiento without action
 */
export type ni_sostenimientoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ni_sostenimiento
     */
    select?: Prisma.ni_sostenimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ni_sostenimiento
     */
    omit?: Prisma.ni_sostenimientoOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ni_sostenimiento.d.ts.map