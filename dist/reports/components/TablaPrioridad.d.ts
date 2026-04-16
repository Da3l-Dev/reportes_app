type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";
type Alumno = {
    NOMALUMNO: string;
    GRADO: string;
    GRUPO: string;
    NIVEL_ETICA: NivelIntegracion;
    NIVEL_HUMANO: NivelIntegracion;
    NIVEL_LENGUAJES: NivelIntegracion;
    NIVEL_SABERES: NivelIntegracion;
};
export default function TablaPrioridad({ data }: {
    data: Alumno[];
}): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=TablaPrioridad.d.ts.map