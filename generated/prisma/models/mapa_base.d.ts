import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model mapa_base
 *
 */
export type mapa_baseModel = runtime.Types.Result.DefaultSelection<Prisma.$mapa_basePayload>;
export type AggregateMapa_base = {
    _count: Mapa_baseCountAggregateOutputType | null;
    _avg: Mapa_baseAvgAggregateOutputType | null;
    _sum: Mapa_baseSumAggregateOutputType | null;
    _min: Mapa_baseMinAggregateOutputType | null;
    _max: Mapa_baseMaxAggregateOutputType | null;
};
export type Mapa_baseAvgAggregateOutputType = {
    id: number | null;
    matricula: number | null;
    estudiantes_participantes: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type Mapa_baseSumAggregateOutputType = {
    id: number | null;
    matricula: number | null;
    estudiantes_participantes: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type Mapa_baseMinAggregateOutputType = {
    id: number | null;
    llave: string | null;
    cct: string | null;
    sostenimiento: string | null;
    turno: string | null;
    tipo: string | null;
    nivel: string | null;
    subnivel: string | null;
    opcion_educativa: string | null;
    nombre: string | null;
    matricula: number | null;
    estudiantes_participantes: number | null;
    localidad: string | null;
    municipio: string | null;
    cct_sector: string | null;
    sector: string | null;
    cct_zona: string | null;
    zona: string | null;
    seguimiento: string | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type Mapa_baseMaxAggregateOutputType = {
    id: number | null;
    llave: string | null;
    cct: string | null;
    sostenimiento: string | null;
    turno: string | null;
    tipo: string | null;
    nivel: string | null;
    subnivel: string | null;
    opcion_educativa: string | null;
    nombre: string | null;
    matricula: number | null;
    estudiantes_participantes: number | null;
    localidad: string | null;
    municipio: string | null;
    cct_sector: string | null;
    sector: string | null;
    cct_zona: string | null;
    zona: string | null;
    seguimiento: string | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type Mapa_baseCountAggregateOutputType = {
    id: number;
    llave: number;
    cct: number;
    sostenimiento: number;
    turno: number;
    tipo: number;
    nivel: number;
    subnivel: number;
    opcion_educativa: number;
    nombre: number;
    matricula: number;
    estudiantes_participantes: number;
    localidad: number;
    municipio: number;
    cct_sector: number;
    sector: number;
    cct_zona: number;
    zona: number;
    seguimiento: number;
    latitud: number;
    longitud: number;
    _all: number;
};
export type Mapa_baseAvgAggregateInputType = {
    id?: true;
    matricula?: true;
    estudiantes_participantes?: true;
    latitud?: true;
    longitud?: true;
};
export type Mapa_baseSumAggregateInputType = {
    id?: true;
    matricula?: true;
    estudiantes_participantes?: true;
    latitud?: true;
    longitud?: true;
};
export type Mapa_baseMinAggregateInputType = {
    id?: true;
    llave?: true;
    cct?: true;
    sostenimiento?: true;
    turno?: true;
    tipo?: true;
    nivel?: true;
    subnivel?: true;
    opcion_educativa?: true;
    nombre?: true;
    matricula?: true;
    estudiantes_participantes?: true;
    localidad?: true;
    municipio?: true;
    cct_sector?: true;
    sector?: true;
    cct_zona?: true;
    zona?: true;
    seguimiento?: true;
    latitud?: true;
    longitud?: true;
};
export type Mapa_baseMaxAggregateInputType = {
    id?: true;
    llave?: true;
    cct?: true;
    sostenimiento?: true;
    turno?: true;
    tipo?: true;
    nivel?: true;
    subnivel?: true;
    opcion_educativa?: true;
    nombre?: true;
    matricula?: true;
    estudiantes_participantes?: true;
    localidad?: true;
    municipio?: true;
    cct_sector?: true;
    sector?: true;
    cct_zona?: true;
    zona?: true;
    seguimiento?: true;
    latitud?: true;
    longitud?: true;
};
export type Mapa_baseCountAggregateInputType = {
    id?: true;
    llave?: true;
    cct?: true;
    sostenimiento?: true;
    turno?: true;
    tipo?: true;
    nivel?: true;
    subnivel?: true;
    opcion_educativa?: true;
    nombre?: true;
    matricula?: true;
    estudiantes_participantes?: true;
    localidad?: true;
    municipio?: true;
    cct_sector?: true;
    sector?: true;
    cct_zona?: true;
    zona?: true;
    seguimiento?: true;
    latitud?: true;
    longitud?: true;
    _all?: true;
};
export type Mapa_baseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which mapa_base to aggregate.
     */
    where?: Prisma.mapa_baseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mapa_bases to fetch.
     */
    orderBy?: Prisma.mapa_baseOrderByWithRelationInput | Prisma.mapa_baseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.mapa_baseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mapa_bases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mapa_bases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned mapa_bases
    **/
    _count?: true | Mapa_baseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Mapa_baseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Mapa_baseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Mapa_baseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Mapa_baseMaxAggregateInputType;
};
export type GetMapa_baseAggregateType<T extends Mapa_baseAggregateArgs> = {
    [P in keyof T & keyof AggregateMapa_base]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMapa_base[P]> : Prisma.GetScalarType<T[P], AggregateMapa_base[P]>;
};
export type mapa_baseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mapa_baseWhereInput;
    orderBy?: Prisma.mapa_baseOrderByWithAggregationInput | Prisma.mapa_baseOrderByWithAggregationInput[];
    by: Prisma.Mapa_baseScalarFieldEnum[] | Prisma.Mapa_baseScalarFieldEnum;
    having?: Prisma.mapa_baseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Mapa_baseCountAggregateInputType | true;
    _avg?: Mapa_baseAvgAggregateInputType;
    _sum?: Mapa_baseSumAggregateInputType;
    _min?: Mapa_baseMinAggregateInputType;
    _max?: Mapa_baseMaxAggregateInputType;
};
export type Mapa_baseGroupByOutputType = {
    id: number;
    llave: string | null;
    cct: string | null;
    sostenimiento: string | null;
    turno: string | null;
    tipo: string | null;
    nivel: string | null;
    subnivel: string | null;
    opcion_educativa: string | null;
    nombre: string | null;
    matricula: number | null;
    estudiantes_participantes: number | null;
    localidad: string | null;
    municipio: string | null;
    cct_sector: string | null;
    sector: string | null;
    cct_zona: string | null;
    zona: string | null;
    seguimiento: string | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    _count: Mapa_baseCountAggregateOutputType | null;
    _avg: Mapa_baseAvgAggregateOutputType | null;
    _sum: Mapa_baseSumAggregateOutputType | null;
    _min: Mapa_baseMinAggregateOutputType | null;
    _max: Mapa_baseMaxAggregateOutputType | null;
};
type GetMapa_baseGroupByPayload<T extends mapa_baseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Mapa_baseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Mapa_baseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Mapa_baseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Mapa_baseGroupByOutputType[P]>;
}>>;
export type mapa_baseWhereInput = {
    AND?: Prisma.mapa_baseWhereInput | Prisma.mapa_baseWhereInput[];
    OR?: Prisma.mapa_baseWhereInput[];
    NOT?: Prisma.mapa_baseWhereInput | Prisma.mapa_baseWhereInput[];
    id?: Prisma.IntFilter<"mapa_base"> | number;
    llave?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    cct?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    sostenimiento?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    turno?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    tipo?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    nivel?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    subnivel?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    nombre?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    matricula?: Prisma.IntNullableFilter<"mapa_base"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"mapa_base"> | number | null;
    localidad?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    municipio?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    cct_sector?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    sector?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    cct_zona?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    zona?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    seguimiento?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    latitud?: Prisma.DecimalNullableFilter<"mapa_base"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableFilter<"mapa_base"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    llave?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct?: Prisma.SortOrderInput | Prisma.SortOrder;
    sostenimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    turno?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel?: Prisma.SortOrderInput | Prisma.SortOrder;
    subnivel?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    matricula?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    localidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    municipio?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    seguimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitud?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type mapa_baseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.mapa_baseWhereInput | Prisma.mapa_baseWhereInput[];
    OR?: Prisma.mapa_baseWhereInput[];
    NOT?: Prisma.mapa_baseWhereInput | Prisma.mapa_baseWhereInput[];
    llave?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    cct?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    sostenimiento?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    turno?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    tipo?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    nivel?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    subnivel?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    opcion_educativa?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    nombre?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    matricula?: Prisma.IntNullableFilter<"mapa_base"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableFilter<"mapa_base"> | number | null;
    localidad?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    municipio?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    cct_sector?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    sector?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    cct_zona?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    zona?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    seguimiento?: Prisma.StringNullableFilter<"mapa_base"> | string | null;
    latitud?: Prisma.DecimalNullableFilter<"mapa_base"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableFilter<"mapa_base"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
}, "id">;
export type mapa_baseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    llave?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct?: Prisma.SortOrderInput | Prisma.SortOrder;
    sostenimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    turno?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    nivel?: Prisma.SortOrderInput | Prisma.SortOrder;
    subnivel?: Prisma.SortOrderInput | Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    matricula?: Prisma.SortOrderInput | Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrderInput | Prisma.SortOrder;
    localidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    municipio?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct_sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    sector?: Prisma.SortOrderInput | Prisma.SortOrder;
    cct_zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    seguimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.mapa_baseCountOrderByAggregateInput;
    _avg?: Prisma.mapa_baseAvgOrderByAggregateInput;
    _max?: Prisma.mapa_baseMaxOrderByAggregateInput;
    _min?: Prisma.mapa_baseMinOrderByAggregateInput;
    _sum?: Prisma.mapa_baseSumOrderByAggregateInput;
};
export type mapa_baseScalarWhereWithAggregatesInput = {
    AND?: Prisma.mapa_baseScalarWhereWithAggregatesInput | Prisma.mapa_baseScalarWhereWithAggregatesInput[];
    OR?: Prisma.mapa_baseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mapa_baseScalarWhereWithAggregatesInput | Prisma.mapa_baseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"mapa_base"> | number;
    llave?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    cct?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    sostenimiento?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    turno?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    nivel?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    subnivel?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    opcion_educativa?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    nombre?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    matricula?: Prisma.IntNullableWithAggregatesFilter<"mapa_base"> | number | null;
    estudiantes_participantes?: Prisma.IntNullableWithAggregatesFilter<"mapa_base"> | number | null;
    localidad?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    municipio?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    cct_sector?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    sector?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    cct_zona?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    zona?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    seguimiento?: Prisma.StringNullableWithAggregatesFilter<"mapa_base"> | string | null;
    latitud?: Prisma.DecimalNullableWithAggregatesFilter<"mapa_base"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableWithAggregatesFilter<"mapa_base"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseCreateInput = {
    llave?: string | null;
    cct?: string | null;
    sostenimiento?: string | null;
    turno?: string | null;
    tipo?: string | null;
    nivel?: string | null;
    subnivel?: string | null;
    opcion_educativa?: string | null;
    nombre?: string | null;
    matricula?: number | null;
    estudiantes_participantes?: number | null;
    localidad?: string | null;
    municipio?: string | null;
    cct_sector?: string | null;
    sector?: string | null;
    cct_zona?: string | null;
    zona?: string | null;
    seguimiento?: string | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseUncheckedCreateInput = {
    id?: number;
    llave?: string | null;
    cct?: string | null;
    sostenimiento?: string | null;
    turno?: string | null;
    tipo?: string | null;
    nivel?: string | null;
    subnivel?: string | null;
    opcion_educativa?: string | null;
    nombre?: string | null;
    matricula?: number | null;
    estudiantes_participantes?: number | null;
    localidad?: string | null;
    municipio?: string | null;
    cct_sector?: string | null;
    sector?: string | null;
    cct_zona?: string | null;
    zona?: string | null;
    seguimiento?: string | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseUpdateInput = {
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sostenimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subnivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    municipio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sostenimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subnivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    municipio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseCreateManyInput = {
    id?: number;
    llave?: string | null;
    cct?: string | null;
    sostenimiento?: string | null;
    turno?: string | null;
    tipo?: string | null;
    nivel?: string | null;
    subnivel?: string | null;
    opcion_educativa?: string | null;
    nombre?: string | null;
    matricula?: number | null;
    estudiantes_participantes?: number | null;
    localidad?: string | null;
    municipio?: string | null;
    cct_sector?: string | null;
    sector?: string | null;
    cct_zona?: string | null;
    zona?: string | null;
    seguimiento?: string | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseUpdateManyMutationInput = {
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sostenimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subnivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    municipio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    llave?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sostenimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    turno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subnivel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    opcion_educativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matricula?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estudiantes_participantes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    municipio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sector?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cct_zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type mapa_baseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    cct?: Prisma.SortOrder;
    sostenimiento?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    subnivel?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    municipio?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    seguimiento?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type mapa_baseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type mapa_baseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    cct?: Prisma.SortOrder;
    sostenimiento?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    subnivel?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    municipio?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    seguimiento?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type mapa_baseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    llave?: Prisma.SortOrder;
    cct?: Prisma.SortOrder;
    sostenimiento?: Prisma.SortOrder;
    turno?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    subnivel?: Prisma.SortOrder;
    opcion_educativa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    municipio?: Prisma.SortOrder;
    cct_sector?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    cct_zona?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    seguimiento?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type mapa_baseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    estudiantes_participantes?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type mapa_baseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    llave?: boolean;
    cct?: boolean;
    sostenimiento?: boolean;
    turno?: boolean;
    tipo?: boolean;
    nivel?: boolean;
    subnivel?: boolean;
    opcion_educativa?: boolean;
    nombre?: boolean;
    matricula?: boolean;
    estudiantes_participantes?: boolean;
    localidad?: boolean;
    municipio?: boolean;
    cct_sector?: boolean;
    sector?: boolean;
    cct_zona?: boolean;
    zona?: boolean;
    seguimiento?: boolean;
    latitud?: boolean;
    longitud?: boolean;
}, ExtArgs["result"]["mapa_base"]>;
export type mapa_baseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    llave?: boolean;
    cct?: boolean;
    sostenimiento?: boolean;
    turno?: boolean;
    tipo?: boolean;
    nivel?: boolean;
    subnivel?: boolean;
    opcion_educativa?: boolean;
    nombre?: boolean;
    matricula?: boolean;
    estudiantes_participantes?: boolean;
    localidad?: boolean;
    municipio?: boolean;
    cct_sector?: boolean;
    sector?: boolean;
    cct_zona?: boolean;
    zona?: boolean;
    seguimiento?: boolean;
    latitud?: boolean;
    longitud?: boolean;
}, ExtArgs["result"]["mapa_base"]>;
export type mapa_baseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    llave?: boolean;
    cct?: boolean;
    sostenimiento?: boolean;
    turno?: boolean;
    tipo?: boolean;
    nivel?: boolean;
    subnivel?: boolean;
    opcion_educativa?: boolean;
    nombre?: boolean;
    matricula?: boolean;
    estudiantes_participantes?: boolean;
    localidad?: boolean;
    municipio?: boolean;
    cct_sector?: boolean;
    sector?: boolean;
    cct_zona?: boolean;
    zona?: boolean;
    seguimiento?: boolean;
    latitud?: boolean;
    longitud?: boolean;
}, ExtArgs["result"]["mapa_base"]>;
export type mapa_baseSelectScalar = {
    id?: boolean;
    llave?: boolean;
    cct?: boolean;
    sostenimiento?: boolean;
    turno?: boolean;
    tipo?: boolean;
    nivel?: boolean;
    subnivel?: boolean;
    opcion_educativa?: boolean;
    nombre?: boolean;
    matricula?: boolean;
    estudiantes_participantes?: boolean;
    localidad?: boolean;
    municipio?: boolean;
    cct_sector?: boolean;
    sector?: boolean;
    cct_zona?: boolean;
    zona?: boolean;
    seguimiento?: boolean;
    latitud?: boolean;
    longitud?: boolean;
};
export type mapa_baseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "llave" | "cct" | "sostenimiento" | "turno" | "tipo" | "nivel" | "subnivel" | "opcion_educativa" | "nombre" | "matricula" | "estudiantes_participantes" | "localidad" | "municipio" | "cct_sector" | "sector" | "cct_zona" | "zona" | "seguimiento" | "latitud" | "longitud", ExtArgs["result"]["mapa_base"]>;
export type $mapa_basePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "mapa_base";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        llave: string | null;
        cct: string | null;
        sostenimiento: string | null;
        turno: string | null;
        tipo: string | null;
        nivel: string | null;
        subnivel: string | null;
        opcion_educativa: string | null;
        nombre: string | null;
        matricula: number | null;
        estudiantes_participantes: number | null;
        localidad: string | null;
        municipio: string | null;
        cct_sector: string | null;
        sector: string | null;
        cct_zona: string | null;
        zona: string | null;
        seguimiento: string | null;
        latitud: runtime.Decimal | null;
        longitud: runtime.Decimal | null;
    }, ExtArgs["result"]["mapa_base"]>;
    composites: {};
};
export type mapa_baseGetPayload<S extends boolean | null | undefined | mapa_baseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mapa_basePayload, S>;
export type mapa_baseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mapa_baseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
    select?: Mapa_baseCountAggregateInputType | true;
};
export interface mapa_baseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['mapa_base'];
        meta: {
            name: 'mapa_base';
        };
    };
    /**
     * Find zero or one Mapa_base that matches the filter.
     * @param {mapa_baseFindUniqueArgs} args - Arguments to find a Mapa_base
     * @example
     * // Get one Mapa_base
     * const mapa_base = await prisma.mapa_base.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mapa_baseFindUniqueArgs>(args: Prisma.SelectSubset<T, mapa_baseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mapa_baseClient<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Mapa_base that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mapa_baseFindUniqueOrThrowArgs} args - Arguments to find a Mapa_base
     * @example
     * // Get one Mapa_base
     * const mapa_base = await prisma.mapa_base.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mapa_baseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mapa_baseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mapa_baseClient<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Mapa_base that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapa_baseFindFirstArgs} args - Arguments to find a Mapa_base
     * @example
     * // Get one Mapa_base
     * const mapa_base = await prisma.mapa_base.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mapa_baseFindFirstArgs>(args?: Prisma.SelectSubset<T, mapa_baseFindFirstArgs<ExtArgs>>): Prisma.Prisma__mapa_baseClient<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Mapa_base that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapa_baseFindFirstOrThrowArgs} args - Arguments to find a Mapa_base
     * @example
     * // Get one Mapa_base
     * const mapa_base = await prisma.mapa_base.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mapa_baseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mapa_baseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mapa_baseClient<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Mapa_bases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapa_baseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mapa_bases
     * const mapa_bases = await prisma.mapa_base.findMany()
     *
     * // Get first 10 Mapa_bases
     * const mapa_bases = await prisma.mapa_base.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mapa_baseWithIdOnly = await prisma.mapa_base.findMany({ select: { id: true } })
     *
     */
    findMany<T extends mapa_baseFindManyArgs>(args?: Prisma.SelectSubset<T, mapa_baseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Mapa_base.
     * @param {mapa_baseCreateArgs} args - Arguments to create a Mapa_base.
     * @example
     * // Create one Mapa_base
     * const Mapa_base = await prisma.mapa_base.create({
     *   data: {
     *     // ... data to create a Mapa_base
     *   }
     * })
     *
     */
    create<T extends mapa_baseCreateArgs>(args: Prisma.SelectSubset<T, mapa_baseCreateArgs<ExtArgs>>): Prisma.Prisma__mapa_baseClient<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Mapa_bases.
     * @param {mapa_baseCreateManyArgs} args - Arguments to create many Mapa_bases.
     * @example
     * // Create many Mapa_bases
     * const mapa_base = await prisma.mapa_base.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends mapa_baseCreateManyArgs>(args?: Prisma.SelectSubset<T, mapa_baseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Mapa_bases and returns the data saved in the database.
     * @param {mapa_baseCreateManyAndReturnArgs} args - Arguments to create many Mapa_bases.
     * @example
     * // Create many Mapa_bases
     * const mapa_base = await prisma.mapa_base.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Mapa_bases and only return the `id`
     * const mapa_baseWithIdOnly = await prisma.mapa_base.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends mapa_baseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, mapa_baseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Mapa_base.
     * @param {mapa_baseDeleteArgs} args - Arguments to delete one Mapa_base.
     * @example
     * // Delete one Mapa_base
     * const Mapa_base = await prisma.mapa_base.delete({
     *   where: {
     *     // ... filter to delete one Mapa_base
     *   }
     * })
     *
     */
    delete<T extends mapa_baseDeleteArgs>(args: Prisma.SelectSubset<T, mapa_baseDeleteArgs<ExtArgs>>): Prisma.Prisma__mapa_baseClient<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Mapa_base.
     * @param {mapa_baseUpdateArgs} args - Arguments to update one Mapa_base.
     * @example
     * // Update one Mapa_base
     * const mapa_base = await prisma.mapa_base.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends mapa_baseUpdateArgs>(args: Prisma.SelectSubset<T, mapa_baseUpdateArgs<ExtArgs>>): Prisma.Prisma__mapa_baseClient<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Mapa_bases.
     * @param {mapa_baseDeleteManyArgs} args - Arguments to filter Mapa_bases to delete.
     * @example
     * // Delete a few Mapa_bases
     * const { count } = await prisma.mapa_base.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends mapa_baseDeleteManyArgs>(args?: Prisma.SelectSubset<T, mapa_baseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Mapa_bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapa_baseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mapa_bases
     * const mapa_base = await prisma.mapa_base.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends mapa_baseUpdateManyArgs>(args: Prisma.SelectSubset<T, mapa_baseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Mapa_bases and returns the data updated in the database.
     * @param {mapa_baseUpdateManyAndReturnArgs} args - Arguments to update many Mapa_bases.
     * @example
     * // Update many Mapa_bases
     * const mapa_base = await prisma.mapa_base.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Mapa_bases and only return the `id`
     * const mapa_baseWithIdOnly = await prisma.mapa_base.updateManyAndReturn({
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
    updateManyAndReturn<T extends mapa_baseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, mapa_baseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Mapa_base.
     * @param {mapa_baseUpsertArgs} args - Arguments to update or create a Mapa_base.
     * @example
     * // Update or create a Mapa_base
     * const mapa_base = await prisma.mapa_base.upsert({
     *   create: {
     *     // ... data to create a Mapa_base
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mapa_base we want to update
     *   }
     * })
     */
    upsert<T extends mapa_baseUpsertArgs>(args: Prisma.SelectSubset<T, mapa_baseUpsertArgs<ExtArgs>>): Prisma.Prisma__mapa_baseClient<runtime.Types.Result.GetResult<Prisma.$mapa_basePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Mapa_bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapa_baseCountArgs} args - Arguments to filter Mapa_bases to count.
     * @example
     * // Count the number of Mapa_bases
     * const count = await prisma.mapa_base.count({
     *   where: {
     *     // ... the filter for the Mapa_bases we want to count
     *   }
     * })
    **/
    count<T extends mapa_baseCountArgs>(args?: Prisma.Subset<T, mapa_baseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Mapa_baseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Mapa_base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mapa_baseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mapa_baseAggregateArgs>(args: Prisma.Subset<T, Mapa_baseAggregateArgs>): Prisma.PrismaPromise<GetMapa_baseAggregateType<T>>;
    /**
     * Group by Mapa_base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapa_baseGroupByArgs} args - Group by arguments.
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
    groupBy<T extends mapa_baseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mapa_baseGroupByArgs['orderBy'];
    } : {
        orderBy?: mapa_baseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mapa_baseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapa_baseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the mapa_base model
     */
    readonly fields: mapa_baseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for mapa_base.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__mapa_baseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the mapa_base model
 */
export interface mapa_baseFieldRefs {
    readonly id: Prisma.FieldRef<"mapa_base", 'Int'>;
    readonly llave: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly cct: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly sostenimiento: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly turno: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly tipo: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly nivel: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly subnivel: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly opcion_educativa: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly nombre: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly matricula: Prisma.FieldRef<"mapa_base", 'Int'>;
    readonly estudiantes_participantes: Prisma.FieldRef<"mapa_base", 'Int'>;
    readonly localidad: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly municipio: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly cct_sector: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly sector: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly cct_zona: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly zona: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly seguimiento: Prisma.FieldRef<"mapa_base", 'String'>;
    readonly latitud: Prisma.FieldRef<"mapa_base", 'Decimal'>;
    readonly longitud: Prisma.FieldRef<"mapa_base", 'Decimal'>;
}
/**
 * mapa_base findUnique
 */
export type mapa_baseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * Filter, which mapa_base to fetch.
     */
    where: Prisma.mapa_baseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base findUniqueOrThrow
 */
export type mapa_baseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * Filter, which mapa_base to fetch.
     */
    where: Prisma.mapa_baseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base findFirst
 */
export type mapa_baseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * Filter, which mapa_base to fetch.
     */
    where?: Prisma.mapa_baseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mapa_bases to fetch.
     */
    orderBy?: Prisma.mapa_baseOrderByWithRelationInput | Prisma.mapa_baseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mapa_bases.
     */
    cursor?: Prisma.mapa_baseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mapa_bases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mapa_bases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mapa_bases.
     */
    distinct?: Prisma.Mapa_baseScalarFieldEnum | Prisma.Mapa_baseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base findFirstOrThrow
 */
export type mapa_baseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * Filter, which mapa_base to fetch.
     */
    where?: Prisma.mapa_baseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mapa_bases to fetch.
     */
    orderBy?: Prisma.mapa_baseOrderByWithRelationInput | Prisma.mapa_baseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mapa_bases.
     */
    cursor?: Prisma.mapa_baseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mapa_bases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mapa_bases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mapa_bases.
     */
    distinct?: Prisma.Mapa_baseScalarFieldEnum | Prisma.Mapa_baseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base findMany
 */
export type mapa_baseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * Filter, which mapa_bases to fetch.
     */
    where?: Prisma.mapa_baseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mapa_bases to fetch.
     */
    orderBy?: Prisma.mapa_baseOrderByWithRelationInput | Prisma.mapa_baseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing mapa_bases.
     */
    cursor?: Prisma.mapa_baseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mapa_bases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mapa_bases.
     */
    skip?: number;
    distinct?: Prisma.Mapa_baseScalarFieldEnum | Prisma.Mapa_baseScalarFieldEnum[];
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base create
 */
export type mapa_baseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * The data needed to create a mapa_base.
     */
    data?: Prisma.XOR<Prisma.mapa_baseCreateInput, Prisma.mapa_baseUncheckedCreateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base createMany
 */
export type mapa_baseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many mapa_bases.
     */
    data: Prisma.mapa_baseCreateManyInput | Prisma.mapa_baseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * mapa_base createManyAndReturn
 */
export type mapa_baseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * The data used to create many mapa_bases.
     */
    data: Prisma.mapa_baseCreateManyInput | Prisma.mapa_baseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * mapa_base update
 */
export type mapa_baseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * The data needed to update a mapa_base.
     */
    data: Prisma.XOR<Prisma.mapa_baseUpdateInput, Prisma.mapa_baseUncheckedUpdateInput>;
    /**
     * Choose, which mapa_base to update.
     */
    where: Prisma.mapa_baseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base updateMany
 */
export type mapa_baseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update mapa_bases.
     */
    data: Prisma.XOR<Prisma.mapa_baseUpdateManyMutationInput, Prisma.mapa_baseUncheckedUpdateManyInput>;
    /**
     * Filter which mapa_bases to update
     */
    where?: Prisma.mapa_baseWhereInput;
    /**
     * Limit how many mapa_bases to update.
     */
    limit?: number;
};
/**
 * mapa_base updateManyAndReturn
 */
export type mapa_baseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * The data used to update mapa_bases.
     */
    data: Prisma.XOR<Prisma.mapa_baseUpdateManyMutationInput, Prisma.mapa_baseUncheckedUpdateManyInput>;
    /**
     * Filter which mapa_bases to update
     */
    where?: Prisma.mapa_baseWhereInput;
    /**
     * Limit how many mapa_bases to update.
     */
    limit?: number;
};
/**
 * mapa_base upsert
 */
export type mapa_baseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * The filter to search for the mapa_base to update in case it exists.
     */
    where: Prisma.mapa_baseWhereUniqueInput;
    /**
     * In case the mapa_base found by the `where` argument doesn't exist, create a new mapa_base with this data.
     */
    create: Prisma.XOR<Prisma.mapa_baseCreateInput, Prisma.mapa_baseUncheckedCreateInput>;
    /**
     * In case the mapa_base was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.mapa_baseUpdateInput, Prisma.mapa_baseUncheckedUpdateInput>;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base delete
 */
export type mapa_baseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
    /**
     * Filter which mapa_base to delete.
     */
    where: Prisma.mapa_baseWhereUniqueInput;
    relationLoadStrategy?: Prisma.RelationLoadStrategy;
};
/**
 * mapa_base deleteMany
 */
export type mapa_baseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which mapa_bases to delete
     */
    where?: Prisma.mapa_baseWhereInput;
    /**
     * Limit how many mapa_bases to delete.
     */
    limit?: number;
};
/**
 * mapa_base without action
 */
export type mapa_baseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapa_base
     */
    select?: Prisma.mapa_baseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the mapa_base
     */
    omit?: Prisma.mapa_baseOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=mapa_base.d.ts.map