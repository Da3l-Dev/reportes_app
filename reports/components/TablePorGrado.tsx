type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

const NIVELES: NivelIntegracion[] = ["AD", "EPD", "RA", "SE"];

const COLOR_MAP: Record<NivelIntegracion, string> = {
  AD: "#5FB3A2",
  EPD: "#E6C44A",
  RA: "#E09A5C",
  SE: "#D96C6C",
};

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
export function TablePorGrado({ rows }: TablePorGradoProps) {
  return (
    <table className="report-table">
      <thead>
        <tr>
          <th>Grado</th>
          {NIVELES.map((nivel) => (
            <th key={nivel}>{nivel}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.grado}>
            <td className="grado-cell">{row.grado}</td>

            {NIVELES.map((nivel) => (
              <td key={nivel}>
                <span
                  className="nivel-pill"
                  style={{
                    backgroundColor: COLOR_MAP[nivel],
                  }}
                >
                  {row.valores[nivel].toFixed(1)}%
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
