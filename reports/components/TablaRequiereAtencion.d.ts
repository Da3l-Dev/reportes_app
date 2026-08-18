export type DatosReporte = {
    id: number;
    cct: string;
    llave: string;
    cct_sector: string;
    cct_zona: string;
    turno: string;
    opcion_educativa: string;
    grado: number;
    nivel: string;
    tipo: string;
    campo_formativo: string;
    nivel_integracion: "AD" | "EPD" | "RA" | "SE";
    numero_alumnos: number;
    total_cct_grado: number;
    porcentaje: string;
};
type TablaAtencionProps = {
    data: DatosReporte[];
    umbral?: number;
    showHeader?: boolean;
    pageInfo?: {
        current: number;
        total: number;
        totalAreas?: number;
    };
};
export declare function TablaRequiereAtencion({ data, umbral, showHeader, pageInfo, }: TablaAtencionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TablaRequiereAtencion.d.ts.map