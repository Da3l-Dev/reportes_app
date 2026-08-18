type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";
type Alumno = {
    NOMALUMNO?: string;
    Nombre_Alumno?: string;
    GRADO?: string;
    GRUPO?: string;
    NIVEL_ETICA?: NivelIntegracion;
    Nivel_Etica?: NivelIntegracion;
    NIVEL_HUMANO?: NivelIntegracion;
    Nivel_Humano?: NivelIntegracion;
    NIVEL_LENGUAJES?: NivelIntegracion;
    Nivel_Lenguajes?: NivelIntegracion;
    NIVEL_SABERES?: NivelIntegracion;
    Nivel_Saberes?: NivelIntegracion;
};
export default function TablaPrioridad({ data }: {
    data?: Alumno[];
}): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=TablaPrioridad.d.ts.map