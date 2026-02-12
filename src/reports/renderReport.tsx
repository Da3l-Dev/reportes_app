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
   CALCULOS GENERALES 
========================= */

function calcularTotalesHeader(dataZona: any[]) {
  if (!dataZona || dataZona.length === 0) {
    return {
      cct_sector: "",
      cct_zona: "",
      estudiantes_zona: 0,
      estudiantes_participantes: 0,
      escuelas_zona: 0,
      opcion_educativa: "",
    };
  }

  const totalEstudiantes = dataZona.reduce(
    (acc, r) => acc + (Number(r.matricula) || 0),
    0,
  );

  const totalParticipantes = dataZona.reduce(
    (acc, r) => acc + (Number(r.estudiantes_participantes) || 0),
    0,
  );

  const totalEscuelas = dataZona.length;

  const opcion_educativa = dataZona[0].opcion_educativa || "";

  return {
    cct_sector: dataZona[0].cct_sector || "",
    cct_zona: dataZona[0].cct_zona,
    estudiantes_zona: totalEstudiantes,
    estudiantes_participantes: totalParticipantes,
    escuelas_zona: totalEscuelas,
    escuelas_participantes: totalParticipantes > 0 ? totalEscuelas : 0, // opcional si quieres diferenciar
    opcion_educativa: opcion_educativa,
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

/* =========================
   GRÁFICAS
========================= */

function buildSegmentsPreescolar(data: any[]) {
  return buildSegments((nivel) =>
    CAMPOS_FORMATIVOS.map((campo) =>
      data
        .filter(
          (r) => r.campo_formativo === campo && r.nivel_integracion === nivel,
        )
        .reduce((acc, r) => acc + Number(r.porcentaje_estudiantes || 0), 0),
    ),
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
    grados.map((grado) =>
      data
        .filter(
          (r) =>
            r.campo_formativo === campo &&
            String(r.grado) === grado &&
            r.nivel_integracion === nivel,
        )
        .reduce((acc, r) => acc + Number(r.porcentaje_estudiantes || 0), 0),
    ),
  );

  return { grados, segments };
}

function buildSegmentsSector(data: any[]) {
  return buildSegments((nivel) =>
    CAMPOS_FORMATIVOS.map((campo) =>
      data
        .filter(
          (r) => r.campo_formativo === campo && r.nivel_integracion === nivel,
        )
        .reduce((acc, r) => acc + Number(r.porcentaje_estudiantes || 0), 0),
    ),
  );
}

function buildSegmentsSectorPorCampo(data: any[], campo: string) {
  const grados = Array.from(
    new Set(
      data
        .filter((r) => r.campo_formativo === campo && r.grado != null)
        .map((r) => String(r.grado)),
    ),
  ).sort((a, b) => Number(a) - Number(b));

  const segments = buildSegments((nivel) =>
    grados.map((grado) =>
      data
        .filter(
          (r) =>
            r.campo_formativo === campo &&
            String(r.grado) === grado &&
            r.nivel_integracion === nivel,
        )
        .reduce((acc, r) => acc + Number(r.porcentaje_estudiantes || 0), 0),
    ),
  );

  return { grados, segments };
}

/* =========================
   RENDER PRINCIPAL
========================= */

export function renderReportZona(
  dataZona: any[],
  dataMapaZona: any[],
  dataZonaPorEscuela: any[],
) {
  const preescolar = esPreescolar(dataZona);
  const totalesHeader = calcularTotalesHeader(dataMapaZona);
  totalesHeader.escuelas_zona = Math.max(
    ...dataZona.map((item) => item.escuelas_zona ?? 0),
  );

  return renderToStaticMarkup(
    <ReportLayout>
      {/* ======================================================
          PÁGINA 1 – GRÁFICAS
      ====================================================== */}
      <div className="page page-break">
        <Header title="Reporte de supervisión por zona" data={totalesHeader} />

        {preescolar && (
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
              segments={[...buildSegmentsPreescolar(dataZona)].reverse()}
            />
          </div>
        )}

        {!preescolar && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10mm",
            }}
          >
            {CAMPOS_FORMATIVOS.map((campo) => {
              const { grados, segments } = buildSegmentsPorCampo(
                dataZona,
                campo,
              );

              return (
                <div
                  key={campo}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "11px",
                      textAlign: "center",
                      marginBottom: "4px",
                    }}
                  >
                    {campo}
                  </h4>

                  <BarChartSmall
                    labels={grados}
                    segments={[...segments].reverse()}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ======================================================
          PÁGINA 2 – TABLAS (2 COLUMNAS)
      ====================================================== */}
      <div className="page table_page">
        <Header
          title="Reporte de supervisión por zona"
          data={totalesHeader}
          viewText={false}
        />
        <h3 style={{ margin: 0, padding: 0 }}>
          <strong>Resultados por escuela</strong>
        </h3>
        <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
          <strong>
            Nota: se coloca el % maximo del nivel de integración por grado y
            campo formativo{" "}
          </strong>
        </p>
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
  const preescolar = esPreescolar(dataSector);
  const totalesHeader = calcularTotalesHeader(dataEscuelas);

  return renderToStaticMarkup(
    <ReportLayout>
      {/* ==========================================
          PÁGINA 1 – GRÁFICAS SECTOR
      ========================================== */}
      <div className="page page-break">
        <Header
          title="Reporte de supervisión por sector"
          data={totalesHeader}
          isZona={false}
        />

        {/* ======== PREESCOLAR ======== */}
        {preescolar && (
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
              segments={[...buildSegmentsSector(dataSector)].reverse()}
            />
          </div>
        )}

        {/* ======== PRIMARIA / SECUNDARIA ======== */}
        {!preescolar && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10mm",
            }}
          >
            {CAMPOS_FORMATIVOS.map((campo) => {
              const { grados, segments } = buildSegmentsSectorPorCampo(
                dataSector,
                campo,
              );

              return (
                <div
                  key={campo}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "11px",
                      textAlign: "center",
                      marginBottom: "4px",
                    }}
                  >
                    {campo}
                  </h4>

                  <BarChartSmall
                    labels={grados}
                    segments={[...segments].reverse()}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ==========================================
          PÁGINA 2 – TABLA SECTOR
      ========================================== */}
      <div className="page page-break">
        <Header
          title="Reporte por de supervisión por sector"
          data={totalesHeader}
          viewText={false}
          isZona={false}
        />

        <h3 style={{ margin: 0, padding: 0 }}>
          <strong>Resultados por escuela</strong>
        </h3>
        <p style={{ width: "100%", textAlign: "center", margin: 0 }}>
          <strong>
            Nota: se coloca el % maximo del nivel de integración por grado y
            campo formativo{" "}
          </strong>
        </p>

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
      {/* ==========================================
          PÁGINA 1 – GRÁFICAS GENERAL
      ========================================== */}
      <div className="page page-break">
        <Header data={totalesHeader} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80%",
          }}
        ></div>
      </div>

      {/* ==========================================
          PÁGINA 2 – TABLA GENERAL
      ========================================== */}
      <div className="page page-break">
        <Header data={totalesHeader} />

        <div style={{ marginTop: "10mm" }}>
          <TablePorEscuela
            dataMapaZona={dataEscuelas}
            dataZona={dataZonaPorEscuela}
          />
        </div>
      </div>
    </ReportLayout>,
  );
}

export async function renderMainView() {
  return renderToStaticMarkup(
    <ReportLayout>
      <ReportQueryPanel></ReportQueryPanel>
    </ReportLayout>,
  );
}
