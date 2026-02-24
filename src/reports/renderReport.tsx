import { renderToStaticMarkup } from "react-dom/server";
import { ReportLayout } from "./components/ReportLayout";
import { BarChart } from "./components/BarChart";
import BarChartSmall from "./components/BarChartSmall";
import Header from "./components/Header";
import { TablePorEscuela } from "./components/TablePorEscuela";
import ReportQueryPanel from "./components/ReportQueryPanel";

/* =========================
   TIPOS
========================= */

type NivelIntegracion = "AD" | "EPD" | "RA" | "SE";

/* =========================
   CONSTANTES
========================= */

const CAMPOS_FORMATIVOS = [
  "Lenguajes",
  "De lo humano y lo comunitario",
  "Ética, naturaleza y sociedades",
  "Saberes y pensamiento científico",
] as const;

const ORDEN_VISUAL: NivelIntegracion[] = ["AD", "EPD", "RA", "SE"];

const COLOR_MAP: Record<NivelIntegracion, string> = {
  AD: "#369445",
  EPD: "#FACA58",
  RA: "#F38C2D",
  SE: "#A71D27",
};

/* =========================
   HEADER
========================= */

function calcularTotalesHeader(data: any[]) {
  if (!data || data.length === 0) {
    return {
      cct_sector: "",
      cct_zona: "",
      estudiantes_zona: 0,
      estudiantes_participantes: 0,
      escuelas_zona: 0,
      opcion_educativa: "",
      nombre_sup_zona: "",
      nombre_sup_sector: "",
    };
  }

  const totalEstudiantes = data.reduce(
    (acc, r) => acc + (Number(r.matricula) || 0),
    0,
  );

  const totalParticipantes = data.reduce(
    (acc, r) => acc + (Number(r.estudiantes_participantes) || 0),
    0,
  );

  return {
    cct_sector: data[0].cct_sector || "",
    cct_zona: data[0].cct_zona,
    estudiantes_zona: totalEstudiantes,
    estudiantes_participantes: totalParticipantes,
    escuelas_zona: data.length,
    escuelas_participantes: totalParticipantes > 0 ? data.length : 0,
    opcion_educativa: data[0].opcion_educativa || "",
    nombre_sup_zona: data[0].nombre_sup_zona,
    nombre_sup_sector: data[0].nombre_sup_sector,
  };
}

/* =========================
   UTILIDADES
========================= */

function esPreescolar(data: any[]) {
  const grados = new Set(
    data.filter((r) => r.grado != null).map((r) => String(r.grado)),
  );
  return grados.size <= 1;
}

function buildSegments(valuesBuilder: (nivel: NivelIntegracion) => number[]) {
  return ORDEN_VISUAL.map((nivel) => ({
    label: nivel,
    color: COLOR_MAP[nivel],
    values: valuesBuilder(nivel),
  }));
}

function getPorcentajeValue(registro: any): number {
  if (!registro) return 0;

  // Caso zona / sector
  if (registro.porcentaje_estudiantes != null) {
    return Number(registro.porcentaje_estudiantes) || 0;
  }

  // Caso opción educativa (viene con coma decimal)
  if (registro.porcentaje != null) {
    return Number(String(registro.porcentaje).replace(",", ".")) || 0;
  }

  return 0;
}

/* =========================
   BUILDERS
========================= */

function buildSegmentsResumen(data: any[]) {
  return buildSegments((nivel) =>
    CAMPOS_FORMATIVOS.map((campo) => {
      const registro = data.find((r) => {
        if (!r.campo_formativo) return false;

        const backendCampo = r.campo_formativo.trim().toLowerCase();
        const constanteCampo = campo.trim().toLowerCase();

        return backendCampo === constanteCampo && r.nivel_integracion === nivel;
      });
      return getPorcentajeValue(registro);
    }),
  );
}

function buildSegmentsPorCampo(data: any[], campo: string) {
  const grados = Array.from(
    new Set(
      data
        .filter((r) => r.campo_formativo === campo && r.grado != null)
        .map((r) => String(r.grado)),
    ),
  ).sort((a, b) => Number(a) - Number(b));

  const segments = buildSegments((nivel) =>
    grados.map((grado) => {
      const registro = data.find(
        (r) =>
          r.campo_formativo === campo &&
          String(r.grado) === grado &&
          r.nivel_integracion === nivel,
      );

      return getPorcentajeValue(registro);
    }),
  );

  return { grados, segments };
}

/* =========================
   BLOQUE UNIVERSAL GRÁFICAS
========================= */

function renderGraficas(data: any[]) {
  const preescolar = esPreescolar(data);

  if (preescolar) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "80%",
        }}
      >
        <BarChart
          labels={[...CAMPOS_FORMATIVOS]}
          segments={[...buildSegmentsResumen(data)].reverse()}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10mm",
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
            <h4 style={{ fontSize: "11px", textAlign: "center" }}>{campo}</h4>

            <BarChartSmall labels={grados} segments={[...segments].reverse()} />
          </div>
        );
      })}
    </div>
  );
}

/* =========================
   REPORTES
========================= */

export function renderReportZona(
  dataZona: any[],
  dataMapaZona: any[],
  dataZonaPorEscuela: any[],
) {
  const totalesHeader = calcularTotalesHeader(dataMapaZona);

  totalesHeader.escuelas_zona = Math.max(
    ...dataZona.map((item) => item.escuelas_zona ?? 0),
  );

  return renderToStaticMarkup(
    <ReportLayout>
      <div className="page page-break">
        <Header title="Reporte de supervisión por zona" data={totalesHeader} />
        {renderGraficas(dataZona)}
      </div>

      <div className="page table_page">
        <Header
          title="Reporte de supervisión por zona"
          data={totalesHeader}
          viewText={false}
        />
        <div style={{ padding: "5mm 10mm" }}>
          <TablePorEscuela
            dataMapaZona={dataMapaZona}
            dataZona={dataZonaPorEscuela}
          />
        </div>
      </div>
    </ReportLayout>,
  );
}

export function renderReportSector(
  dataSector: any[],
  dataEscuelas: any[],
  dataZonaPorEscuela: any[],
) {
  const totalesHeader = calcularTotalesHeader(dataEscuelas);

  return renderToStaticMarkup(
    <ReportLayout>
      <div className="page page-break">
        <Header
          title="Reporte de supervisión por sector"
          data={totalesHeader}
        />
        {renderGraficas(dataSector)}
      </div>

      <div className="page page-break">
        <Header
          title="Reporte de supervisión por sector"
          data={totalesHeader}
          viewText={false}
          isZona={false}
        />
        <div style={{ marginTop: "10mm" }}>
          <TablePorEscuela
            dataMapaZona={dataEscuelas}
            dataZona={dataZonaPorEscuela}
            agruparPorZona={true}
          />
        </div>
      </div>
    </ReportLayout>,
  );
}

export async function renderReportGeneral(
  dataGeneral: any[],
  dataEscuelas: any[],
  dataZonaPorEscuela: any[],
) {
  const totalesHeader = calcularTotalesHeader(dataGeneral);

  return renderToStaticMarkup(
    <ReportLayout>
      <div className="page page-break">
        <Header data={totalesHeader} />
        {renderGraficas(dataGeneral)}
      </div>

      <div className="page page-break">
        <Header data={totalesHeader} />
        <TablePorEscuela
          dataMapaZona={dataEscuelas}
          dataZona={dataZonaPorEscuela}
        />
      </div>
    </ReportLayout>,
  );
}

export async function renderOpcionEduReport(
  dataOpcion: any[],
  dataEscuelas: any[],
  dataZonaPorEscuela: any[],
) {
  const totalesHeader = calcularTotalesHeader(dataEscuelas);

  return renderToStaticMarkup(
    <ReportLayout>
      {/* ===== PAGINA 1: GRÁFICAS ===== */}
      <div className="page page-break">
        <Header
          title="Reporte de supervisión por opción educativa"
          data={totalesHeader}
          isOpEdu={true}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <p>Estudiantes totales: 55,748</p>
            <p>Estudiantes participantes: 47,811</p>
            <p>Escuelas totales:759</p>
            <p>Escuelas participantes: 671</p>
          </div>
          <p style={{ marginTop: "10px" }}>
            <strong>Nota: </strong>El número de escuelas y de matrícula se
            obtuvieron del sistema de Control Escolar, con corte al mes de
            diciembre de 2025.
          </p>
        </Header>
        {renderGraficas(dataOpcion)}
      </div>

      {/* ===== PAGINA 2: TABLA DE ESCUELAS ===== */}
      <div className="page page-break">
        <Header
          title="Reporte por opción educativa"
          data={totalesHeader}
          viewText={false}
          isOpEdu={true}
        />
        <div style={{ marginTop: "10mm", padding: "0 10mm" }}>
          <TablePorEscuela
            dataMapaZona={dataEscuelas}
            dataZona={dataZonaPorEscuela}
            agruparPorSector={true}
          />
        </div>
      </div>
    </ReportLayout>,
  );
}

export async function renderMainView() {
  return renderToStaticMarkup(
    <ReportLayout>
      <ReportQueryPanel />
    </ReportLayout>,
  );
}
