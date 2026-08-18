import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model tercera_exploracion_sisat
 *
 */
export type tercera_exploracion_sisatModel = runtime.Types.Result.DefaultSelection<Prisma.$tercera_exploracion_sisatPayload>;
export type AggregateTercera_exploracion_sisat = {
    _count: Tercera_exploracion_sisatCountAggregateOutputType | null;
    _avg: Tercera_exploracion_sisatAvgAggregateOutputType | null;
    _sum: Tercera_exploracion_sisatSumAggregateOutputType | null;
    _min: Tercera_exploracion_sisatMinAggregateOutputType | null;
    _max: Tercera_exploracion_sisatMaxAggregateOutputType | null;
};
export type Tercera_exploracion_sisatAvgAggregateOutputType = {
    grado: number | null;
    participantes: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    id: number | null;
};
export type Tercera_exploracion_sisatSumAggregateOutputType = {
    grado: number | null;
    participantes: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    id: number | null;
};
export type Tercera_exploracion_sisatMinAggregateOutputType = {
    cct: string | null;
    nombre: string | null;
    opcion_educativa: string | null;
    prioritaria: string | null;
    ambito: string | null;
    grado: number | null;
    materia: string | null;
    participantes: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    id: number | null;
};
export type Tercera_exploracion_sisatMaxAggregateOutputType = {
    cct: string | null;
    nombre: string | null;
    opcion_educativa: string | null;
    prioritaria: string | null;
    ambito: string | null;
    grado: number | null;
    materia: string | null;
    participantes: number | null;
    total_ra: number | null;
    porcentaje_ra: runtime.Decimal | null;
    total_ed: number | null;
    porcentaje_ed: runtime.Decimal | null;
    total_ne: number | null;
    porcentaje_ne: runtime.Decimal | null;
    id: number | null;
};
export type Tercera_exploracion_sisatCountAggregateOutputType = {
    cct: number;
    nombre: number;
    opcion_educativa: number;
    prioritaria: number;
    ambito: number;
    grado: number;
    materia: number;
    participantes: number;
    total_ra: number;
    porcentaje_ra: number;
    total_ed: number;
    porcentaje_ed: number;
    total_ne: number;
    porcentaje_ne: number;
    id: number;
    _all: number;
};
export type Tercera_exploracion_sisatAvgAggregateInputType = {
    grado?: true;
    participantes?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    id?: true;
};
export type Tercera_exploracion_sisatSumAggregateInputType = {
    grado?: true;
    participantes?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    id?: true;
};
export type Tercera_exploracion_sisatMinAggregateInputType = {
    cct?: true;
    nombre?: true;
    opcion_educativa?: true;
    prioritaria?: true;
    ambito?: true;
    grado?: true;
    materia?: true;
    participantes?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    id?: true;
};
export type Tercera_exploracion_sisatMaxAggregateInputType = {
    cct?: true;
    nombre?: true;
    opcion_educativa?: true;
    prioritaria?: true;
    ambito?: true;
    grado?: true;
    materia?: true;
    participantes?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    id?: true;
};
export type Tercera_exploracion_sisatCountAggregateInputType = {
    cct?: true;
    nombre?: true;
    opcion_educativa?: true;
    prioritaria?: true;
    ambito?: true;
    grado?: true;
    materia?: true;
    participantes?: true;
    total_ra?: true;
    porcentaje_ra?: true;
    total_ed?: true;
    porcentaje_ed?: true;
    total_ne?: true;
    porcentaje_ne?: true;
    id?: true;
    _all?: true;
};
export type Tercera_exploracion_sisatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tercera_exploracion_sisat to aggregate.
     */
    where?: Prisma.tercera_exploracion_sisatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tercera_exploracion_sisats to fetch.
     */
    orderBy?: Prisma.tercera_exploracion_sisatOrderByWithRelationInput | Prisma.tercera_exploracion_sisatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tercera_exploracion_sisats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tercera_exploracion_sisats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tercera_exploracion_sisats
    **/
    _count?: true | Tercera_exploracion_sisatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Tercera_exploracion_sisatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Tercera_exploracion_sisatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Tercera_exploracion_sisatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Tercera_exploracion_sisatMaxAggregateInputType;
};
export type GetTercera_exploracion_sisatAggregateType<T extends Tercera_exploracion_sisatAggregateArgs> = {
    [P in keyof T & keyof AggregateTercera_exploracion_sisat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTercera_exploracion_sisat[P]> : Prisma.GetScalarType<T[P], AggregateTercera_exploracion_sisat[P]>;
};
export type tercera_exploracion_sisatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tercera_exploracion_sisatWhereInput;
    orderBy?: Prisma.tercera_exploracion_sisatOrderByWithAggregationInput | Prisma.tercera_exploracion_sisatOrderByWithAggregationInput[];
    by: Prisma.Tercera_exploracion_sisatScalarFieldEnum[] | Prisma.Tercera_exploracion_sisatScalarFieldEnum;
    having?: Prisma.tercera_exploracion_sisatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tercera_exploracion_sisatCountAggregateInputType | true;
    _avg?: Tercera_exploracion_sisatAvgAggregateInputType;
    _sum?: Tercera_exploracion_sisatSumAggregateInputType;
    _min?: Tercera_exploracion_sisatMinAggregateInputType;
    _max?: Tercera_exploracion_sisatMaxAggregateInputType;
};
export type Tercera_exploracion_sisatGroupByOutputType = {
    cct: string;
    nombre: string;
    opcion_educativa: string;
    prioritaria: string;
    ambito: string;
    grado: number;
    materia: string;
    participantes: number;
    total_ra: number;
    porcentaje_ra: runtime.Decimal;
    total_ed: number;
    porcentaje_ed: runtime.Decimal;
    total_ne: number;
    porcentaje_ne: runtime.Decimal;
    id: number;
    _count: Tercera_exploracion_sisatCountAggregateOutputType | null;
    _avg: Tercera_exploracion_sisatAvgAggregateOutputType | null;
    _sum: Tercera_exploracion_sisatSumAggregateOutputType | null;
    _min: Tercera_exploracion_sisatMinAggregateOutputType | null;
    _max: Tercera_exploracion_sisatMaxAggregateOutputType | null;
};
type GetTercera_exploracion_sisatGroupByPayload<T extends tercera_exploracion_sisatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tercera_exploracion_sisatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tercera_exploracion_sisatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tercera_exploracion_sisatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tercera_exploracion_sisatGroupByOutputType[P]>;
}>>;
export type tercera_exploracion_sisatWhereInput = {
    AND?: Prisma.tercera_exploracion_sisatWhereInput | Prisma.tercera_exploracion_sisatWhereInput[];
    OR?: Prisma.tercera_exploracion_sisatWhereInput[];
    NOT?: Prisma.tercera_exploracion_sisatWhereInput | Prisma.tercera_exploracion_sisatWhereInput[];
    cct?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    nombre?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    opcion_educativa?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    prioritaria?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    ambito?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    grado?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    materia?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    participantes?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    total_ra?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ra?: Prisma.DecimalFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ed?: Prisma.DecimalFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ne?: Prisma.DecimalFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
};
export type tercera_exploracion_sisatOrderByWithRelationInput = {
    cct?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    prioritaria?: Prisma.SortOrder;
    ambito?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    participantes?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type tercera_exploracion_sisatWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.tercera_exploracion_sisatWhereInput | Prisma.tercera_exploracion_sisatWhereInput[];
    OR?: Prisma.tercera_exploracion_sisatWhereInput[];
    NOT?: Prisma.tercera_exploracion_sisatWhereInput | Prisma.tercera_exploracion_sisatWhereInput[];
    cct?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    nombre?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    opcion_educativa?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    prioritaria?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    ambito?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    grado?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    materia?: Prisma.StringFilter<"tercera_exploracion_sisat"> | string;
    participantes?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    total_ra?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ra?: Prisma.DecimalFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ed?: Prisma.DecimalFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne?: Prisma.IntFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ne?: Prisma.DecimalFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
}, "id">;
export type tercera_exploracion_sisatOrderByWithAggregationInput = {
    cct?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    prioritaria?: Prisma.SortOrder;
    ambito?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    participantes?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    _count?: Prisma.tercera_exploracion_sisatCountOrderByAggregateInput;
    _avg?: Prisma.tercera_exploracion_sisatAvgOrderByAggregateInput;
    _max?: Prisma.tercera_exploracion_sisatMaxOrderByAggregateInput;
    _min?: Prisma.tercera_exploracion_sisatMinOrderByAggregateInput;
    _sum?: Prisma.tercera_exploracion_sisatSumOrderByAggregateInput;
};
export type tercera_exploracion_sisatScalarWhereWithAggregatesInput = {
    AND?: Prisma.tercera_exploracion_sisatScalarWhereWithAggregatesInput | Prisma.tercera_exploracion_sisatScalarWhereWithAggregatesInput[];
    OR?: Prisma.tercera_exploracion_sisatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tercera_exploracion_sisatScalarWhereWithAggregatesInput | Prisma.tercera_exploracion_sisatScalarWhereWithAggregatesInput[];
    cct?: Prisma.StringWithAggregatesFilter<"tercera_exploracion_sisat"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"tercera_exploracion_sisat"> | string;
    opcion_educativa?: Prisma.StringWithAggregatesFilter<"tercera_exploracion_sisat"> | string;
    prioritaria?: Prisma.StringWithAggregatesFilter<"tercera_exploracion_sisat"> | string;
    ambito?: Prisma.StringWithAggregatesFilter<"tercera_exploracion_sisat"> | string;
    grado?: Prisma.IntWithAggregatesFilter<"tercera_exploracion_sisat"> | number;
    materia?: Prisma.StringWithAggregatesFilter<"tercera_exploracion_sisat"> | string;
    participantes?: Prisma.IntWithAggregatesFilter<"tercera_exploracion_sisat"> | number;
    total_ra?: Prisma.IntWithAggregatesFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ra?: Prisma.DecimalWithAggregatesFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed?: Prisma.IntWithAggregatesFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ed?: Prisma.DecimalWithAggregatesFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne?: Prisma.IntWithAggregatesFilter<"tercera_exploracion_sisat"> | number;
    porcentaje_ne?: Prisma.DecimalWithAggregatesFilter<"tercera_exploracion_sisat"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id?: Prisma.IntWithAggregatesFilter<"tercera_exploracion_sisat"> | number;
};
export type tercera_exploracion_sisatCreateInput = {
    cct: string;
    nombre: string;
    opcion_educativa: string;
    prioritaria: string;
    ambito: string;
    grado: number;
    materia: string;
    participantes: number;
    total_ra: number;
    porcentaje_ra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed: number;
    porcentaje_ed: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne: number;
    porcentaje_ne: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type tercera_exploracion_sisatUncheckedCreateInput = {
    cct: string;
    nombre: string;
    opcion_educativa: string;
    prioritaria: string;
    ambito: string;
    grado: number;
    materia: string;
    participantes: number;
    total_ra: number;
    porcentaje_ra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed: number;
    porcentaje_ed: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne: number;
    porcentaje_ne: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id?: number;
};
export type tercera_exploracion_sisatUpdateInput = {
    cct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    prioritaria?: Prisma.StringFieldUpdateOperationsInput | string;
    ambito?: Prisma.StringFieldUpdateOperationsInput | string;
    grado?: Prisma.IntFieldUpdateOperationsInput | number;
    materia?: Prisma.StringFieldUpdateOperationsInput | string;
    participantes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_ra?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ed?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ne?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type tercera_exploracion_sisatUncheckedUpdateInput = {
    cct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    prioritaria?: Prisma.StringFieldUpdateOperationsInput | string;
    ambito?: Prisma.StringFieldUpdateOperationsInput | string;
    grado?: Prisma.IntFieldUpdateOperationsInput | number;
    materia?: Prisma.StringFieldUpdateOperationsInput | string;
    participantes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_ra?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ed?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ne?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type tercera_exploracion_sisatCreateManyInput = {
    cct: string;
    nombre: string;
    opcion_educativa: string;
    prioritaria: string;
    ambito: string;
    grado: number;
    materia: string;
    participantes: number;
    total_ra: number;
    porcentaje_ra: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed: number;
    porcentaje_ed: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne: number;
    porcentaje_ne: runtime.Decimal | runtime.DecimalJsLike | number | string;
    id?: number;
};
export type tercera_exploracion_sisatUpdateManyMutationInput = {
    cct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    prioritaria?: Prisma.StringFieldUpdateOperationsInput | string;
    ambito?: Prisma.StringFieldUpdateOperationsInput | string;
    grado?: Prisma.IntFieldUpdateOperationsInput | number;
    materia?: Prisma.StringFieldUpdateOperationsInput | string;
    participantes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_ra?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ed?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ne?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type tercera_exploracion_sisatUncheckedUpdateManyInput = {
    cct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    opcion_educativa?: Prisma.StringFieldUpdateOperationsInput | string;
    prioritaria?: Prisma.StringFieldUpdateOperationsInput | string;
    ambito?: Prisma.StringFieldUpdateOperationsInput | string;
    grado?: Prisma.IntFieldUpdateOperationsInput | number;
    materia?: Prisma.StringFieldUpdateOperationsInput | string;
    participantes?: Prisma.IntFieldUpdateOperationsInput | number;
    total_ra?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ra?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ed?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ed?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_ne?: Prisma.IntFieldUpdateOperationsInput | number;
    porcentaje_ne?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type tercera_exploracion_sisatCountOrderByAggregateInput = {
    cct?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    prioritaria?: Prisma.SortOrder;
    ambito?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    participantes?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type tercera_exploracion_sisatAvgOrderByAggregateInput = {
    grado?: Prisma.SortOrder;
    participantes?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type tercera_exploracion_sisatMaxOrderByAggregateInput = {
    cct?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    prioritaria?: Prisma.SortOrder;
    ambito?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    participantes?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type tercera_exploracion_sisatMinOrderByAggregateInput = {
    cct?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    prioritaria?: Prisma.SortOrder;
    ambito?: Prisma.SortOrder;
    grado?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    participantes?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type tercera_exploracion_sisatSumOrderByAggregateInput = {
    grado?: Prisma.SortOrder;
    participantes?: Prisma.SortOrder;
    total_ra?: Prisma.SortOrder;
    porcentaje_ra?: Prisma.SortOrder;
    total_ed?: Prisma.SortOrder;
    porcentaje_ed?: Prisma.SortOrder;
    total_ne?: Prisma.SortOrder;
    porcentaje_ne?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type tercera_exploracion_sisatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cct?: boolean;
    nombre?: boolean;
    opcion_educativa?: boolean;
    prioritaria?: boolean;
    ambito?: boolean;
    grado?: boolean;
    materia?: boolean;
    participantes?: boolean;
    total_ra?: boolean;
    porcentaje_ra?: boolean;
    total_ed?: boolean;
    porcentaje_ed?: boolean;
    total_ne?: boolean;
    porcentaje_ne?: boolean;
    id?: boolean;
}, ExtArgs["result"]["tercera_exploracion_sisat"]>;
export type tercera_exploracion_sisatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cct?: boolean;
    nombre?: boolean;
    opcion_educativa?: boolean;
    prioritaria?: boolean;
    ambito?: boolean;
    grado?: boolean;
    materia?: boolean;
    participantes?: boolean;
    total_ra?: boolean;
    porcentaje_ra?: boolean;
    total_ed?: boolean;
    porcentaje_ed?: boolean;
    total_ne?: boolean;
    porcentaje_ne?: boolean;
    id?: boolean;
}, ExtArgs["result"]["tercera_exploracion_sisat"]>;
export type tercera_exploracion_sisatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cct?: boolean;
    nombre?: boolean;
    opcion_educativa?: boolean;
    prioritaria?: boolean;
    ambito?: boolean;
    grado?: boolean;
    materia?: boolean;
    participantes?: boolean;
    total_ra?: boolean;
    porcentaje_ra?: boolean;
    total_ed?: boolean;
    porcentaje_ed?: boolean;
    total_ne?: boolean;
    porcentaje_ne?: boolean;
    id?: boolean;
}, ExtArgs["result"]["tercera_exploracion_sisat"]>;
export type tercera_exploracion_sisatSelectScalar = {
    cct?: boolean;
    nombre?: boolean;
    opcion_educativa?: boolean;
    prioritaria?: boolean;
    ambito?: boolean;
    grado?: boolean;
    materia?: boolean;
    participantes?: boolean;
    total_ra?: boolean;
    porcentaje_ra?: boolean;
    total_ed?: boolean;
    porcentaje_ed?: boolean;
    total_ne?: boolean;
    porcentaje_ne?: boolean;
    id?: boolean;
};
export type tercera_exploracion_sisatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cct" | "nombre" | "opcion_educativa" | "prioritaria" | "ambito" | "grado" | "materia" | "participantes" | "total_ra" | "porcentaje_ra" | "total_ed" | "porcentaje_ed" | "total_ne" | "porcentaje_ne" | "id", ExtArgs["result"]["tercera_exploracion_sisat"]>;
export type $tercera_exploracion_sisatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tercera_exploracion_sisat";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cct: string;
        nombre: string;
        opcion_educativa: string;
        prioritaria: string;
        ambito: string;
        grado: number;
        materia: string;
        participantes: number;
        total_ra: number;
        porcentaje_ra: runtime.Decimal;
        total_ed: number;
        porcentaje_ed: runtime.Decimal;
        total_ne: number;
        porcentaje_ne: runtime.Decimal;
        id: number;
    }, ExtArgs["result"]["tercera_exploracion_sisat"]>;
    composites: {};
};
export type tercera_exploracion_sisatGetPayload<S extends boolean | null | undefined | tercera_exploracion_sisatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload, S>;
export type tercera_exploracion_sisatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tercera_exploracion_sisatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Tercera_exploracion_sisatCountAggregateInputType | true;
};
export interface tercera_exploracion_sisatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tercera_exploracion_sisat'];
        meta: {
            name: 'tercera_exploracion_sisat';
        };
    };
    /**
     * Find zero or one Tercera_exploracion_sisat that matches the filter.
     * @param {tercera_exploracion_sisatFindUniqueArgs} args - Arguments to find a Tercera_exploracion_sisat
     * @example
     * // Get one Tercera_exploracion_sisat
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tercera_exploracion_sisatFindUniqueArgs>(args: Prisma.SelectSubset<T, tercera_exploracion_sisatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tercera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Tercera_exploracion_sisat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tercera_exploracion_sisatFindUniqueOrThrowArgs} args - Arguments to find a Tercera_exploracion_sisat
     * @example
     * // Get one Tercera_exploracion_sisat
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tercera_exploracion_sisatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tercera_exploracion_sisatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tercera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tercera_exploracion_sisat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tercera_exploracion_sisatFindFirstArgs} args - Arguments to find a Tercera_exploracion_sisat
     * @example
     * // Get one Tercera_exploracion_sisat
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tercera_exploracion_sisatFindFirstArgs>(args?: Prisma.SelectSubset<T, tercera_exploracion_sisatFindFirstArgs<ExtArgs>>): Prisma.Prisma__tercera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Tercera_exploracion_sisat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tercera_exploracion_sisatFindFirstOrThrowArgs} args - Arguments to find a Tercera_exploracion_sisat
     * @example
     * // Get one Tercera_exploracion_sisat
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tercera_exploracion_sisatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tercera_exploracion_sisatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tercera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Tercera_exploracion_sisats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tercera_exploracion_sisatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tercera_exploracion_sisats
     * const tercera_exploracion_sisats = await prisma.tercera_exploracion_sisat.findMany()
     *
     * // Get first 10 Tercera_exploracion_sisats
     * const tercera_exploracion_sisats = await prisma.tercera_exploracion_sisat.findMany({ take: 10 })
     *
     * // Only select the `cct`
     * const tercera_exploracion_sisatWithCctOnly = await prisma.tercera_exploracion_sisat.findMany({ select: { cct: true } })
     *
     */
    findMany<T extends tercera_exploracion_sisatFindManyArgs>(args?: Prisma.SelectSubset<T, tercera_exploracion_sisatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Tercera_exploracion_sisat.
     * @param {tercera_exploracion_sisatCreateArgs} args - Arguments to create a Tercera_exploracion_sisat.
     * @example
     * // Create one Tercera_exploracion_sisat
     * const Tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.create({
     *   data: {
     *     // ... data to create a Tercera_exploracion_sisat
     *   }
     * })
     *
     */
    create<T extends tercera_exploracion_sisatCreateArgs>(args: Prisma.SelectSubset<T, tercera_exploracion_sisatCreateArgs<ExtArgs>>): Prisma.Prisma__tercera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Tercera_exploracion_sisats.
     * @param {tercera_exploracion_sisatCreateManyArgs} args - Arguments to create many Tercera_exploracion_sisats.
     * @example
     * // Create many Tercera_exploracion_sisats
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tercera_exploracion_sisatCreateManyArgs>(args?: Prisma.SelectSubset<T, tercera_exploracion_sisatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Tercera_exploracion_sisats and returns the data saved in the database.
     * @param {tercera_exploracion_sisatCreateManyAndReturnArgs} args - Arguments to create many Tercera_exploracion_sisats.
     * @example
     * // Create many Tercera_exploracion_sisats
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tercera_exploracion_sisats and only return the `cct`
     * const tercera_exploracion_sisatWithCctOnly = await prisma.tercera_exploracion_sisat.createManyAndReturn({
     *   select: { cct: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tercera_exploracion_sisatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tercera_exploracion_sisatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Tercera_exploracion_sisat.
     * @param {tercera_exploracion_sisatDeleteArgs} args - Arguments to delete one Tercera_exploracion_sisat.
     * @example
     * // Delete one Tercera_exploracion_sisat
     * const Tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.delete({
     *   where: {
     *     // ... filter to delete one Tercera_exploracion_sisat
     *   }
     * })
     *
     */
    delete<T extends tercera_exploracion_sisatDeleteArgs>(args: Prisma.SelectSubset<T, tercera_exploracion_sisatDeleteArgs<ExtArgs>>): Prisma.Prisma__tercera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Tercera_exploracion_sisat.
     * @param {tercera_exploracion_sisatUpdateArgs} args - Arguments to update one Tercera_exploracion_sisat.
     * @example
     * // Update one Tercera_exploracion_sisat
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tercera_exploracion_sisatUpdateArgs>(args: Prisma.SelectSubset<T, tercera_exploracion_sisatUpdateArgs<ExtArgs>>): Prisma.Prisma__tercera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Tercera_exploracion_sisats.
     * @param {tercera_exploracion_sisatDeleteManyArgs} args - Arguments to filter Tercera_exploracion_sisats to delete.
     * @example
     * // Delete a few Tercera_exploracion_sisats
     * const { count } = await prisma.tercera_exploracion_sisat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tercera_exploracion_sisatDeleteManyArgs>(args?: Prisma.SelectSubset<T, tercera_exploracion_sisatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tercera_exploracion_sisats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tercera_exploracion_sisatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tercera_exploracion_sisats
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tercera_exploracion_sisatUpdateManyArgs>(args: Prisma.SelectSubset<T, tercera_exploracion_sisatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Tercera_exploracion_sisats and returns the data updated in the database.
     * @param {tercera_exploracion_sisatUpdateManyAndReturnArgs} args - Arguments to update many Tercera_exploracion_sisats.
     * @example
     * // Update many Tercera_exploracion_sisats
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tercera_exploracion_sisats and only return the `cct`
     * const tercera_exploracion_sisatWithCctOnly = await prisma.tercera_exploracion_sisat.updateManyAndReturn({
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
    updateManyAndReturn<T extends tercera_exploracion_sisatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tercera_exploracion_sisatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Tercera_exploracion_sisat.
     * @param {tercera_exploracion_sisatUpsertArgs} args - Arguments to update or create a Tercera_exploracion_sisat.
     * @example
     * // Update or create a Tercera_exploracion_sisat
     * const tercera_exploracion_sisat = await prisma.tercera_exploracion_sisat.upsert({
     *   create: {
     *     // ... data to create a Tercera_exploracion_sisat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tercera_exploracion_sisat we want to update
     *   }
     * })
     */
    upsert<T extends tercera_exploracion_sisatUpsertArgs>(args: Prisma.SelectSubset<T, tercera_exploracion_sisatUpsertArgs<ExtArgs>>): Prisma.Prisma__tercera_exploracion_sisatClient<runtime.Types.Result.GetResult<Prisma.$tercera_exploracion_sisatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Tercera_exploracion_sisats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tercera_exploracion_sisatCountArgs} args - Arguments to filter Tercera_exploracion_sisats to count.
     * @example
     * // Count the number of Tercera_exploracion_sisats
     * const count = await prisma.tercera_exploracion_sisat.count({
     *   where: {
     *     // ... the filter for the Tercera_exploracion_sisats we want to count
     *   }
     * })
    **/
    count<T extends tercera_exploracion_sisatCountArgs>(args?: Prisma.Subset<T, tercera_exploracion_sisatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tercera_exploracion_sisatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Tercera_exploracion_sisat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tercera_exploracion_sisatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tercera_exploracion_sisatAggregateArgs>(args: Prisma.Subset<T, Tercera_exploracion_sisatAggregateArgs>): Prisma.PrismaPromise<GetTercera_exploracion_sisatAggregateType<T>>;
    /**
     * Group by Tercera_exploracion_sisat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tercera_exploracion_sisatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends tercera_exploracion_sisatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tercera_exploracion_sisatGroupByArgs['orderBy'];
    } : {
        orderBy?: tercera_exploracion_sisatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tercera_exploracion_sisatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTercera_exploracion_sisatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tercera_exploracion_sisat model
     */
    readonly fields: tercera_exploracion_sisatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for tercera_exploracion_sisat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__tercera_exploracion_sisatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the tercera_exploracion_sisat model
 */
export interface tercera_exploracion_sisatFieldRefs {
    readonly cct: Prisma.FieldRef<"tercera_exploracion_sisat", 'String'>;
    readonly nombre: Prisma.FieldRef<"tercera_exploracion_sisat", 'String'>;
    readonly opcion_educativa: Prisma.FieldRef<"tercera_exploracion_sisat", 'String'>;
    readonly prioritaria: Prisma.FieldRef<"tercera_exploracion_sisat", 'String'>;
    readonly ambito: Prisma.FieldRef<"tercera_exploracion_sisat", 'String'>;
    readonly grado: Prisma.FieldRef<"tercera_exploracion_sisat", 'Int'>;
    readonly materia: Prisma.FieldRef<"tercera_exploracion_sisat", 'String'>;
    readonly participantes: Prisma.FieldRef<"tercera_exploracion_sisat", 'Int'>;
    readonly total_ra: Prisma.FieldRef<"tercera_exploracion_sisat", 'Int'>;
    readonly porcentaje_ra: Prisma.FieldRef<"tercera_exploracion_sisat", 'Decimal'>;
    readonly total_ed: Prisma.FieldRef<"tercera_exploracion_sisat", 'Int'>;
    readonly porcentaje_ed: Prisma.FieldRef<"tercera_exploracion_sisat", 'Decimal'>;
    readonly total_ne: Prisma.FieldRef<"tercera_exploracion_sisat", 'Int'>;
    readonly porcentaje_ne: Prisma.FieldRef<"tercera_exploracion_sisat", 'Decimal'>;
    readonly id: Prisma.FieldRef<"tercera_exploracion_sisat", 'Int'>;
}
/**
 * tercera_exploracion_sisat findUnique
 */
export type tercera_exploracion_sisatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which tercera_exploracion_sisat to fetch.
     */
    where: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat findUniqueOrThrow
 */
export type tercera_exploracion_sisatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which tercera_exploracion_sisat to fetch.
     */
    where: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat findFirst
 */
export type tercera_exploracion_sisatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which tercera_exploracion_sisat to fetch.
     */
    where?: Prisma.tercera_exploracion_sisatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tercera_exploracion_sisats to fetch.
     */
    orderBy?: Prisma.tercera_exploracion_sisatOrderByWithRelationInput | Prisma.tercera_exploracion_sisatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tercera_exploracion_sisats.
     */
    cursor?: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tercera_exploracion_sisats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tercera_exploracion_sisats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tercera_exploracion_sisats.
     */
    distinct?: Prisma.Tercera_exploracion_sisatScalarFieldEnum | Prisma.Tercera_exploracion_sisatScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat findFirstOrThrow
 */
export type tercera_exploracion_sisatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which tercera_exploracion_sisat to fetch.
     */
    where?: Prisma.tercera_exploracion_sisatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tercera_exploracion_sisats to fetch.
     */
    orderBy?: Prisma.tercera_exploracion_sisatOrderByWithRelationInput | Prisma.tercera_exploracion_sisatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tercera_exploracion_sisats.
     */
    cursor?: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tercera_exploracion_sisats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tercera_exploracion_sisats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tercera_exploracion_sisats.
     */
    distinct?: Prisma.Tercera_exploracion_sisatScalarFieldEnum | Prisma.Tercera_exploracion_sisatScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat findMany
 */
export type tercera_exploracion_sisatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter, which tercera_exploracion_sisats to fetch.
     */
    where?: Prisma.tercera_exploracion_sisatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tercera_exploracion_sisats to fetch.
     */
    orderBy?: Prisma.tercera_exploracion_sisatOrderByWithRelationInput | Prisma.tercera_exploracion_sisatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tercera_exploracion_sisats.
     */
    cursor?: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tercera_exploracion_sisats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tercera_exploracion_sisats.
     */
    skip?: number;
    distinct?: Prisma.Tercera_exploracion_sisatScalarFieldEnum | Prisma.Tercera_exploracion_sisatScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat create
 */
export type tercera_exploracion_sisatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The data needed to create a tercera_exploracion_sisat.
     */
    data: Prisma.XOR<Prisma.tercera_exploracion_sisatCreateInput, Prisma.tercera_exploracion_sisatUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat createMany
 */
export type tercera_exploracion_sisatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many tercera_exploracion_sisats.
     */
    data: Prisma.tercera_exploracion_sisatCreateManyInput | Prisma.tercera_exploracion_sisatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tercera_exploracion_sisat createManyAndReturn
 */
export type tercera_exploracion_sisatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The data used to create many tercera_exploracion_sisats.
     */
    data: Prisma.tercera_exploracion_sisatCreateManyInput | Prisma.tercera_exploracion_sisatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * tercera_exploracion_sisat update
 */
export type tercera_exploracion_sisatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The data needed to update a tercera_exploracion_sisat.
     */
    data: Prisma.XOR<Prisma.tercera_exploracion_sisatUpdateInput, Prisma.tercera_exploracion_sisatUncheckedUpdateInput>;
    /**
     * Choose, which tercera_exploracion_sisat to update.
     */
    where: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat updateMany
 */
export type tercera_exploracion_sisatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update tercera_exploracion_sisats.
     */
    data: Prisma.XOR<Prisma.tercera_exploracion_sisatUpdateManyMutationInput, Prisma.tercera_exploracion_sisatUncheckedUpdateManyInput>;
    /**
     * Filter which tercera_exploracion_sisats to update
     */
    where?: Prisma.tercera_exploracion_sisatWhereInput;
    /**
     * Limit how many tercera_exploracion_sisats to update.
     */
    limit?: number;
};
/**
 * tercera_exploracion_sisat updateManyAndReturn
 */
export type tercera_exploracion_sisatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The data used to update tercera_exploracion_sisats.
     */
    data: Prisma.XOR<Prisma.tercera_exploracion_sisatUpdateManyMutationInput, Prisma.tercera_exploracion_sisatUncheckedUpdateManyInput>;
    /**
     * Filter which tercera_exploracion_sisats to update
     */
    where?: Prisma.tercera_exploracion_sisatWhereInput;
    /**
     * Limit how many tercera_exploracion_sisats to update.
     */
    limit?: number;
};
/**
 * tercera_exploracion_sisat upsert
 */
export type tercera_exploracion_sisatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * The filter to search for the tercera_exploracion_sisat to update in case it exists.
     */
    where: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    /**
     * In case the tercera_exploracion_sisat found by the `where` argument doesn't exist, create a new tercera_exploracion_sisat with this data.
     */
    create: Prisma.XOR<Prisma.tercera_exploracion_sisatCreateInput, Prisma.tercera_exploracion_sisatUncheckedCreateInput>;
    /**
     * In case the tercera_exploracion_sisat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.tercera_exploracion_sisatUpdateInput, Prisma.tercera_exploracion_sisatUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat delete
 */
export type tercera_exploracion_sisatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
    /**
     * Filter which tercera_exploracion_sisat to delete.
     */
    where: Prisma.tercera_exploracion_sisatWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * tercera_exploracion_sisat deleteMany
 */
export type tercera_exploracion_sisatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which tercera_exploracion_sisats to delete
     */
    where?: Prisma.tercera_exploracion_sisatWhereInput;
    /**
     * Limit how many tercera_exploracion_sisats to delete.
     */
    limit?: number;
};
/**
 * tercera_exploracion_sisat without action
 */
export type tercera_exploracion_sisatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tercera_exploracion_sisat
     */
    select?: Prisma.tercera_exploracion_sisatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the tercera_exploracion_sisat
     */
    omit?: Prisma.tercera_exploracion_sisatOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=tercera_exploracion_sisat.d.ts.map