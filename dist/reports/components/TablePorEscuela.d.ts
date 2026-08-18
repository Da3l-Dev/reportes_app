type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";
type Escuela = {
    llave: string;
    cct: string;
    nombre: string;
    opcion_educativa: string;
    cct_zona?: string;
    cct_sector?: string;
    nivel?: string;
    subnivel?: string;
    zona?: number;
    sector?: number;
    nombre_sup_zona?: string;
    nombre_sup_sector?: string;
    turno?: string;
    municipio?: string;
    localidad?: string;
};
type RegistroZona = {
    llave: string;
    cct: string;
    grado: number;
    campo_formativo: string;
    nivel_integracion: NivelIntegracion;
    porcentaje: string;
    nombre_sup_zona?: string;
    nombre_sup_sector?: string;
};
type Props = {
    dataMapaZona: Escuela[];
    dataZona: RegistroZona[];
    agruparPorZona?: boolean;
    agruparPorSector?: boolean;
};
export declare function TablePorEscuela({ dataMapaZona, dataZona, agruparPorZona, agruparPorSector, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TablePorEscuela.d.ts.map