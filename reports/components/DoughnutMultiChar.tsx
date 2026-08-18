import { DoughnutChart } from "./DoughnutChar";

type MultiDoughnutChartProps = {
  camposFormativos: string[];
  niveles: string[];
  datos: Record<string, Record<string, number>>; // [campo][nivel] = valor
  colores: Record<string, string>; // color por nivel o por campo
};

export function MultiDoughnutChart({
  camposFormativos,
  niveles,
  datos,
  colores,
}: MultiDoughnutChartProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      {camposFormativos.map((campo) => {
        // Crear segments para este campo
        const segments = niveles.map((nivel) => ({
          label: nivel,
          color: colores[nivel] || "#ccc",
          values: [datos[campo]?.[nivel] || 0],
        }));

        return (
          <div
            key={campo}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <h4
              style={{
                fontSize: "12px",
                marginBottom: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {campo}
            </h4>
            <div style={{ width: "100%", height: "200px" }}>
              <DoughnutChart labels={niveles} segments={segments} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
