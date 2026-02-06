import { renderToStaticMarkup } from "react-dom/server";
import { ReportLayout } from "./components/ReportLayout";
import { Table } from "./components/Table";
import { BarChart } from "./components/BarChart";
import Header from "./components/Header";

/* =========================
   TIPOS Y CONSTANTES
========================= */

type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

const CAMPOS_FORMATIVOS = [
  "Lenguajes",
  "De lo humano y lo comunitario",
  "Ética, naturaleza y sociedades",
  "Saberes y pensamiento científico",
] as const;

const NIVELES: NivelIntegracion[] = ["AD", "EPD", "RA", "SE"];

const COLOR_MAP: Record<NivelIntegracion, string> = {
  AD: "#5FB3A2",
  EPD: "#E6C44A",
  RA: "#E09A5C",
  SE: "#D96C6C",
};

/* =========================
   AGRUPAR POR GRADO
========================= */

function agruparPorGrado(data: any[]) {
  const map = new Map<string, any[]>();

  data.forEach((item) => {
    // 👇 preescolar no tiene grado → "Único"
    const grado = item.grado != null ? String(item.grado) : "Único";

    if (!map.has(grado)) map.set(grado, []);
    map.get(grado)!.push(item);
  });

  // 👉 orden correcto: Único, 1, 2, 3...
  return Array.from(map.entries())
    .sort(([a], [b]) => {
      if (a === "Único") return -1;
      if (b === "Único") return 1;
      return Number(a) - Number(b);
    })
    .map(([grado, rows]) => ({ grado, rows }));
}

/* =========================
   SEGMENTOS POR GRADO
========================= */

function buildSegments(rows: any[]) {
  return NIVELES.map((nivel) => ({
    label: nivel,
    color: COLOR_MAP[nivel],
    values: CAMPOS_FORMATIVOS.map((campo) =>
      rows
        .filter(
          (r) => r.nivel_integracion === nivel && r.campo_formativo === campo,
        )
        .reduce((acc, r) => acc + Number(r.porcentaje_estudiantes || 0), 0),
    ),
  }));
}

/* =========================
   RENDER PRINCIPAL
========================= */

export function renderReportZona(data: any[]) {
  const grupos = agruparPorGrado(data);

  return renderToStaticMarkup(
    <ReportLayout>
      <Header title_report="Reporte por zonas" />

      {grupos.map(({ grado, rows }) => {
        const segments = buildSegments(rows).reverse();

        return (
          <div className="page" key={grado}>
            {/* COLUMNA IZQUIERDA */}
            <div className="first-column">
              <h3 style={{ marginBottom: "8px" }}>
                {grado === "Único" ? "Preescolar" : `Grado ${grado}`}
              </h3>

              <BarChart labels={[...CAMPOS_FORMATIVOS]} segments={segments} />
            </div>

            {/* COLUMNA DERECHA */}
            <div className="second-column">
              <Table
                rows={segments.map((s, i) => ({
                  id: i + 1,
                  name: s.label,
                  total:
                    Math.round(s.values.reduce((a, b) => a + b, 0) * 100) / 100,
                }))}
              />
            </div>
          </div>
        );
      })}
    </ReportLayout>,
  );
}
