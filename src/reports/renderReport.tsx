import { renderToStaticMarkup } from "react-dom/server";
import { ReportLayout } from "./components/ReportLayout";
import { BarChart } from "./components/BarChart";
import BarChartSmall from "./components/BarChartSmall";
import Header from "./components/Header";
import { TablePorGrado } from "./components/TablePorGrado";

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
   UTILIDAD
========================= */

/**
 * Determina si el dataset corresponde a preescolar.
 * Regla: solo existe un grado (o ninguno).
 */
function esPreescolar(data: any[]) {
  const grados = new Set(
    data.filter((r) => r.grado != null).map((r) => String(r.grado)),
  );

  return grados.size <= 1;
}

/* =========================
   PREESCOLAR
========================= */

/**
 * Preescolar:
 * Eje X → campos formativos
 * Barras → niveles de integración
 */
function buildSegmentsPreescolar(data: any[]) {
  return NIVELES.map((nivel) => ({
    label: nivel,
    color: COLOR_MAP[nivel],
    values: CAMPOS_FORMATIVOS.map((campo) =>
      data
        .filter(
          (r) => r.campo_formativo === campo && r.nivel_integracion === nivel,
        )
        .reduce((acc, r) => acc + Number(r.porcentaje_estudiantes || 0), 0),
    ),
  }));
}

/* =========================
   PRIMARIA / SECUNDARIA
========================= */

/**
 * Una gráfica por campo formativo.
 * Eje X → grados
 * Barras → niveles de integración
 */
function buildSegmentsPorCampo(data: any[], campo: string) {
  const grados = Array.from(
    new Set(
      data
        .filter((r) => r.campo_formativo === campo && r.grado != null)
        .map((r) => String(r.grado)),
    ),
  ).sort((a, b) => Number(a) - Number(b));

  const segments = NIVELES.map((nivel) => ({
    label: nivel,
    color: COLOR_MAP[nivel],
    values: grados.map((grado) =>
      data
        .filter(
          (r) =>
            r.campo_formativo === campo &&
            String(r.grado) === grado &&
            r.nivel_integracion === nivel,
        )
        .reduce((acc, r) => acc + Number(r.porcentaje_estudiantes || 0), 0),
    ),
  }));

  return { grados, segments };
}

function buildTablePorGrado(data: any[]) {
  const grados = Array.from(
    new Set(data.filter((r) => r.grado != null).map((r) => String(r.grado))),
  ).sort((a, b) => Number(a) - Number(b));

  return grados.map((grado) => {
    const conteo = {
      AD: 0,
      EPD: 0,
      RA: 0,
      SE: 0,
    };

    const registrosDelGrado = data.filter((r) => String(r.grado) === grado);

    registrosDelGrado.forEach((r) => {
      const nivel = r.nivel_integracion as NivelIntegracion;
      conteo[nivel]++;
    });

    const total = registrosDelGrado.length || 1;

    const valores = {
      AD: Math.round((conteo.AD / total) * 100),
      EPD: Math.round((conteo.EPD / total) * 100),
      RA: Math.round((conteo.RA / total) * 100),
      SE: Math.round((conteo.SE / total) * 100),
    };

    return {
      grado,
      valores,
      totalAlumnos: total,
    };
  });
}

/* =========================
   RENDER PRINCIPAL
========================= */

export function renderReportZona(data: any[]) {
  const preescolar = esPreescolar(data);

  return renderToStaticMarkup(
    <ReportLayout>
      <Header title_report="Reporte por zonas" />

      <div className="page">
        {/* COLUMNA IZQUIERDA */}
        <div className="first-column">
          {/* =====================
             PREESCOLAR
          ===================== */}
          {preescolar && (
            <>
              <h3 style={{ marginBottom: "8px" }}>Preescolar</h3>

              <BarChart
                labels={[...CAMPOS_FORMATIVOS]}
                segments={buildSegmentsPreescolar(data)}
              />
            </>
          )}

          {/* =====================
             PRIMARIA / SECUNDARIA
          ===================== */}
          {!preescolar && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10mm",
                pageBreakInside: "avoid",
                breakInside: "avoid",
              }}
            >
              {CAMPOS_FORMATIVOS.map((campo) => {
                const { grados, segments } = buildSegmentsPorCampo(data, campo);

                return (
                  <div
                    key={campo}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "11px",
                        marginBottom: "4px",
                        textAlign: "center",
                      }}
                    >
                      {campo}
                    </h4>

                    <BarChartSmall labels={grados} segments={segments} />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* COLUMNA DERECHA */}
        <div className="second-column">
          <TablePorGrado rows={buildTablePorGrado(data)} />
        </div>
      </div>
    </ReportLayout>,
  );
}
