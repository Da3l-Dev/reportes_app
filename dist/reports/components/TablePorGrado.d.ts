type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";
type TableRow = {
    grado: string;
    valores: Record<NivelIntegracion, number>;
};
type TablePorGradoProps = {
    rows: TableRow[];
};
/**
 * Tabla de porcentajes por grado y nivel de integración
 */
export declare function TablePorGrado({ rows }: TablePorGradoProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TablePorGrado.d.ts.map