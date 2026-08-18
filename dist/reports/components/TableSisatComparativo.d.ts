type Registro = {
    llave?: string;
    cct?: string;
    grado: number;
    materia: string;
    porcentaje_ra: string;
    porcentaje_ed: string;
    porcentaje_ne: string;
};
type Escuela = {
    llave?: string;
    cct: string;
    nombre: string;
    turno?: string;
    municipio?: string;
    localidad?: string;
    cct_zona?: string;
    cct_sector?: string;
    zona?: string;
    sector?: string;
    nombre_sup_zona?: string;
    nombre_sup_sector?: string;
};
type Props = {
    primera: Registro[];
    segunda: Registro[];
    tercera: Registro[];
    dataEscuelas: Escuela[];
};
export default function SisatTablaPro({ primera, segunda, tercera, // 👈 NUEVO
dataEscuelas, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TableSisatComparativo.d.ts.map