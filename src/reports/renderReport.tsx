import { renderToStaticMarkup } from "react-dom/server";
import { ReportLayout } from "./components/ReportLayout";
import { BarChart } from "./components/BarChart";
import BarChartSmall from "./components/BarChartSmall";
import Header from "./components/Header";
import { TablePorEscuela } from "./components/TablePorEscuela";
import ReportQueryPanel from "./components/ReportQueryPanel";
import { TablaRequiereAtencion } from "./components/TablaRequiereAtencion";
import TablaPrioridad from "./components/TablaPrioridad";
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
const pluralizar = (texto: string) => {
  console.log(`TEXTO ------> ${texto}`);
  if (!texto) return "";

  let t = texto;

  // Quitar plural existente
  if (t.endsWith("ES")) {
    t = t.slice(0, -2);
  } else if (t.endsWith("S")) {
    t = t.slice(0, -1);
  }

  // Agregar plural correcto
  if (t.endsWith("L")) {
    return t + "ES"; // PREESCOLAR → PREESCOLARES
  }

  return t + "S"; // PRIMARIA → PRIMARIAS
};

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

  // Caso zona / sector (viene de /zona/escuela/{cct})
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
   FUNCIÓN PARA TRANSFORMAR DATOS DE SECTOR
========================= */

function transformarDatosSector(dataSector: any[]): any[] {
  if (!dataSector || dataSector.length === 0) return [];

  // Si los datos ya tienen la estructura correcta, devolverlos
  if (dataSector[0]?.campo_formativo) {
    return dataSector;
  }

  const datosTransformados: any[] = [];

  dataSector.forEach((item: any) => {
    if (item.campo_formativo && item.grado && item.nivel_integracion) {
      datosTransformados.push({
        campo_formativo: item.campo_formativo,
        grado: item.grado,
        nivel_integracion: item.nivel_integracion,
        porcentaje: item.porcentaje || item.porcentaje_estudiantes || "0",
        estudiantes_participantes: item.estudiantes_participantes || 0,
        matricula: item.matricula || 0,
      });
    }
    // Si es un resumen por grado (como en el ejemplo que mostraste antes)
    else if (item.grado && item.campos) {
      // Expandir los campos por grado
      Object.entries(item.campos || {}).forEach(
        ([campo, valores]: [string, any]) => {
          if (campo && valores) {
            datosTransformados.push({
              campo_formativo: campo,
              grado: item.grado,
              nivel_integracion: valores.nivel || "SE",
              porcentaje: valores.porcentaje || "0",
              estudiantes_participantes: item.estudiantes_participantes || 0,
              matricula: item.matricula || 0,
            });
          }
        },
      );
    }
  });

  return datosTransformados;
}

/* =========================
   BUILDERS
========================= */

function buildSegmentsResumen(data: any[]) {
  // Si no hay datos, retornar segments vacíos
  if (!data || data.length === 0) {
    return buildSegments((nivel) => CAMPOS_FORMATIVOS.map(() => 0));
  }

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

function renderGraficas(
  data: any[],
  widthGrafica?: Number,
  heightGrafica?: Number,
) {
  const datosParaGraficas = transformarDatosSector(data);
  const preescolar = esPreescolar(datosParaGraficas);

  if (preescolar || datosParaGraficas.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: "7mm",
        }}
      >
        <BarChart
          labels={[...CAMPOS_FORMATIVOS]}
          segments={[...buildSegmentsResumen(datosParaGraficas)].reverse()}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5mm",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {CAMPOS_FORMATIVOS.map((campo) => {
        const { grados, segments } = buildSegmentsPorCampo(
          datosParaGraficas,
          campo,
        );

        return (
          <div
            key={campo}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <h4
              style={{
                fontSize: "12px",
                textAlign: "center",
                fontWeight: 600,
                color: "#000000",
                margin: "5px 0",
              }}
            >
              {campo}
            </h4>
            <div
              style={{
                flex: 1,
                width: "100%",
                minHeight: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BarChartSmall
                labels={grados}
                segments={[...segments].reverse()}
                {...(widthGrafica && { width: Number(widthGrafica) })}
                {...(heightGrafica && { height: Number(heightGrafica) })}
              />
            </div>
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
        <Header
          title={`REPORTE DE RESULTADOS ZONA ${dataZona[0].cct_zona}`}
          data={totalesHeader}
        />
        {renderGraficas(dataZona)}

        <p className="notes">
          <strong>Nota:</strong> Las presentes gráficas ilustran el universo
          total de estudiantes participantes de la zona {dataZona[0].cct_zona}{" "}
          así como la distribución porcentual de los mismos según sus niveles de
          integración.
        </p>
      </div>

      <div className="page table_page">
        <Header
          title="Reporte de Resultados"
          data={totalesHeader}
          viewText={false}
        />
        <p className="notes">
          <strong>Notas:</strong> Los resultados que se presentan a continuación
          están organizados por escuela y presentan, para cada grado y campo
          formativo, el nivel de integración predominante, independientemente de
          que corresponda a niveles altos o bajos.
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
  const totalesHeader = calcularTotalesHeader(dataEscuelas);

  return renderToStaticMarkup(
    <ReportLayout>
      <div className="page page-break">
        <Header
          title={`REPORTE DE RESULTADOS SECTOR ${dataSector[0].cct_sector}`}
          data={totalesHeader}
          isZona={false}
        />
        {renderGraficas(dataSector)}
        <p className="notes">
          <strong>Nota:</strong> Las presentes gráficas ilustran el universo
          total de estudiantes participantes del sector{" "}
          <strong>{dataSector[0].cct_sector}</strong> así como la distribución
          porcentual de los mismos según sus niveles de integración.
        </p>
      </div>

      <div className="page page-break">
        <Header
          title={`REPORTE DE RESULTADOS SECTOR ${dataSector[0].cct_sector}`}
          data={totalesHeader}
          viewText={false}
          isZona={false}
        />
        <p className="notes">
          <strong>Notas:</strong> Los resultados que se presentan a continuación
          están organizados por escuela y presentan, para cada grado y campo
          formativo, el nivel de integración predominante, independientemente de
          que corresponda a niveles altos o bajos.
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
  totalesOpEdu: any,
) {
  const nivelPlural = pluralizar(dataEscuelas[0].nivel);
  const subnivelPlural = pluralizar(dataEscuelas[0].subnivel);
  // Calcular total de escuelas existentes
  const totalEscuelasExistentes = dataEscuelas.length;

  // Calcular escuelas participantes (escuelas que tienen registros)
  const escuelasParticipantesSet = new Set(
    dataZonaPorEscuela.map((item) => item.cct_registro || item.cct_escuela),
  );
  const totalEscuelasParticipantes = escuelasParticipantesSet.size;
  // Formatear números con comas
  const formatearNumero = (num: number) => num.toLocaleString("es-MX");

  return renderToStaticMarkup(
    <ReportLayout>
      {/* ===== PAGINA 1: GRÁFICAS ===== */}
      <div className="page page-break">
        <Header
          title={`REPORTE DE RESULTADOS ${nivelPlural} ${subnivelPlural}`}
          data={[]}
          isOpEdu={true}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <p>
              Matricula Participante:{" "}
              {formatearNumero(totalesOpEdu?.total_alumnos)}
            </p>
            <p>
              Escuelas totales:{" "}
              {formatearNumero(totalesOpEdu?.total_escuela_absoluto)}
            </p>
            <p>
              Escuelas participantes:{" "}
              {formatearNumero(totalEscuelasParticipantes)}
            </p>
          </div>
        </Header>

        {renderGraficas(dataOpcion)}
        <p className="notes">
          <strong>Nota:</strong> Las presentes gráficas ilustran el universo
          total de estudiantes participantes al sistema de{" "}
          {dataEscuelas[0].nivel} {dataEscuelas[0].subnivel}, así como la
          distribución porcentual de los mismos según sus niveles de
          integración.
        </p>
      </div>

      {/* ===== PAGINA 2: TABLA DE ESCUELAS ===== */}
      <div className="page page-break">
        <Header
          title="Reporte por opción educativa"
          data={[]}
          viewText={false}
          isOpEdu={true}
        />
        <p className="notes">
          <strong>Notas:</strong> Los resultados que se presentan a continuación
          están organizados por escuela y presentan, para cada grado y campo
          formativo, el nivel de integración predominante, independientemente de
          que corresponda a niveles altos o bajos.
        </p>
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

export async function renderEscuela(
  dataNiEscuela: any[],
  dataGeneralEscuela: any[],
  dataZona: any[],
  dataAlumnosPrioritarios: any[],
) {
  // Calcular cuántas páginas necesitamos para la tabla
  const MAX_ROWS_PER_PAGE = 10;
  const tablaData = procesarDatosTabla(dataNiEscuela, 30);

  // PRIMERA PÁGINA - SIEMPRE SE DIBUJA (GRÁFICAS DE ESCUELA)
  const primeraPagina = (
    <div
      key="primera-pagina"
      className="page page-break"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Header
        data={[]}
        isOpEdu={true}
        title={` REPORTE DE RESULTADOS ${dataGeneralEscuela[0].nivel} ${dataGeneralEscuela[0].subnivel}`}
      >
        <h4>
          {dataGeneralEscuela[0].nombre} {dataGeneralEscuela[0].llave}
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <p>🕛 TURNO: {dataGeneralEscuela[0].turno}</p>
          <p>🏠 MUNICIPIO: {dataGeneralEscuela[0].municipio}</p>
          <p>📍 LOCALIDAD: {dataGeneralEscuela[0].localidad}</p>
          <p>MATRICULA PARTICIPANTE: {dataGeneralEscuela[0].matricula}</p>
        </div>
      </Header>
      {renderGraficas(dataNiEscuela)}
      <p className="notes">
        <strong>Nota:</strong> Las presentes gráficas ilustran el universo total
        de estudiantes participantes a la escuela{" "}
        <strong>{dataGeneralEscuela[0].nombre}</strong>, así como la
        distribución porcentual de los mismos según sus niveles de integración.
      </p>
    </div>
  );

  // 🔥 NUEVA HOJA (SOLO AGREGADA, SIN TOCAR NADA)
  const paginaPrioridad = (
    <div className="page page-break">
      <Header
        data={[]}
        isOpEdu={true}
        title={` REPORTE DE RESULTADOS ${dataGeneralEscuela[0].nivel} ${dataGeneralEscuela[0].subnivel}`}
      >
        <h4>
          {dataGeneralEscuela[0].nombre} {dataGeneralEscuela[0].llave}
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <p>🕛 TURNO: {dataGeneralEscuela[0].turno}</p>
          <p>🏠 MUNICIPIO: {dataGeneralEscuela[0].municipio}</p>
          <p>📍 LOCALIDAD: {dataGeneralEscuela[0].localidad}</p>
          <p>MATRICULA PARTICIPANTE: {dataGeneralEscuela[0].matricula}</p>
        </div>
      </Header>

      <p className="notes text-sm text-gray-700 leading-relaxed">
        <strong>Nota:</strong> Se prioriza a las y los estudiantes de acuerdo
        con las siguientes combinaciones de resultados, en orden de importancia:
      </p>

      <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-700 list-disc">
        <li className="font-semibold text-[#A71D27]">
          MUY ALTA: Quienes obtuvieron únicamente RA o SE en los cuatro campos.
        </li>
        <li className="font-semibold text-[#F38C2D]">
          ALTA: Quienes obtuvieron únicamente RA o SE en tres campos.
        </li>
        <li className="font-semibold text-[#FACA58]">
          MEDIA: Quienes obtuvieron RA o SE en uno o dos campos.
        </li>
      </ul>
      <TablaPrioridad data={dataAlumnosPrioritarios} />
    </div>
  );

  if (tablaData.length === 0) {
    return renderToStaticMarkup(
      <ReportLayout>
        {primeraPagina}
        <div
          className="page"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Header
            data={[]}
            isOpEdu={true}
            title={` REPORTE DE RESULTADOS ${dataGeneralEscuela[0].nivel} ${dataGeneralEscuela[0].subnivel}`}
          >
            <h4>{dataGeneralEscuela[0].nombre}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <p>🕛 TURNO: {dataGeneralEscuela[0].turno}</p>
              <p>🏠 MUNICIPIO: {dataGeneralEscuela[0].municipio}</p>
              <p>📍 LOCALIDAD: {dataGeneralEscuela[0].localidad}</p>
              <p>MATRICULA PARTICIPANTE: {dataGeneralEscuela[0].matricula}</p>
            </div>
          </Header>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              flex: 1,
              minHeight: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                gridColumn: "1 / 2",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: "0 0 5mm 0",
                  fontSize: "12px",
                }}
              >
                Nivel de integración a nivel zona
              </p>

              <div>
                {dataZona[0] ? (
                  renderGraficas(dataZona[0], 290, 250)
                ) : (
                  <p style={{ textAlign: "center", color: "#999" }}>
                    Sin datos
                  </p>
                )}
              </div>
            </div>

            <div>
              <TablaRequiereAtencion data={dataNiEscuela} umbral={30} />
              <p>
                <strong>Nota:</strong>{" "}
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 SOLO AÑADIDO */}
        {paginaPrioridad}
      </ReportLayout>,
    );
  }

  const totalPages = Math.ceil(tablaData.length / MAX_ROWS_PER_PAGE);
  const pages = [];

  for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
    const start = pageIndex * MAX_ROWS_PER_PAGE;
    const end = start + MAX_ROWS_PER_PAGE;
    const pageData = filterDataByRange(dataNiEscuela, start, end, 30);

    pages.push(
      <div
        key={`tabla-page-${pageIndex}`}
        className={`page ${pageIndex < totalPages - 1 ? "page-break" : ""}`}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          marginTop: "100px",
        }}
      >
        <Header
          data={[]}
          isOpEdu={true}
          title={` REPORTE ${dataGeneralEscuela[0].nivel} ${dataGeneralEscuela[0].subnivel}`}
        >
          <h4>{dataGeneralEscuela[0].nombre}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <p>🕛 TURNO: {dataGeneralEscuela[0].turno}</p>
            <p>🏠 MUNICIPIO: {dataGeneralEscuela[0].municipio}</p>
            <p>📍 LOCALIDAD: {dataGeneralEscuela[0].localidad}</p>
            <p>MATRICULA PARTICIPANTE: {dataGeneralEscuela[0].matricula}</p>
          </div>
          {pageIndex > 0 && (
            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: "#666",
                marginTop: "5px",
              }}
            >
              Continuación de tabla de áreas que requieren atención (Página{" "}
              {pageIndex + 1}/{totalPages})
            </p>
          )}
        </Header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: pageIndex === 0 ? "1fr 1fr" : "1fr",
            flex: 1,
            minHeight: 0,
            gap: "20px",
          }}
        >
          {pageIndex === 0 && (
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: "0 0 5mm 0",
                  fontSize: "12px",
                }}
              >
                Nivel de integración a nivel zona
              </p>

              <div>
                {dataZona[0] ? (
                  renderGraficas(dataZona[0], 290, 250)
                ) : (
                  <p style={{ textAlign: "center", color: "#999" }}>
                    Sin datos
                  </p>
                )}

                <p className="notes">
                  <strong>Nota:</strong> Estos resultados permiten analizar los
                  niveles de integración a nivel zona para que exista un
                  contraste con la escuela.
                </p>
              </div>
            </div>
          )}

          <div>
            <p>
              <strong>Nota: </strong>Los resultados se presentan por grado y
              campo formativo. El total corresponde al número de alumnos por
              grado; sin embargo, un mismo alumno puede aparecer en más de un
              campo formativo. Por ello, los resultados deben interpretarse por
              grado.
            </p>

            <TablaRequiereAtencion
              data={pageData}
              umbral={30}
              showHeader={true}
              pageInfo={{
                current: pageIndex + 1,
                total: totalPages,
                totalAreas: tablaData.length,
              }}
            />
          </div>
        </div>
      </div>,
    );
  }

  return renderToStaticMarkup(
    <ReportLayout>
      {primeraPagina}
      {pages}

      {/* 🔥 SOLO ESTO SE AGREGA */}
      {paginaPrioridad}
    </ReportLayout>,
  );
}
// Función auxiliar para procesar los datos de la tabla
function procesarDatosTabla(data: any[], umbral: number) {
  const mapa = new Map();

  data.forEach((item) => {
    if (item.nivel_integracion === "RA" || item.nivel_integracion === "SE") {
      const key = `${item.grado}-${item.campo_formativo}`;

      if (!mapa.has(key)) {
        mapa.set(key, {
          grado: item.grado,
          campo_formativo: item.campo_formativo,
          valores: { AD: 0, EPD: 0, RA: 0, SE: 0 },
          total_alumnos: item.total_cct_grado,
        });
      }

      const row = mapa.get(key);
      row.valores[item.nivel_integracion] = parseFloat(item.porcentaje) || 0;
    }
  });

  return Array.from(mapa.values())
    .filter((row) => row.valores.RA >= umbral || row.valores.SE >= umbral)
    .sort((a, b) => {
      if (a.grado !== b.grado) return a.grado - b.grado;
      return a.campo_formativo.localeCompare(b.campo_formativo);
    });
}

// Función auxiliar para filtrar datos por rango
function filterDataByRange(
  data: any[],
  start: number,
  end: number,
  umbral: number = 30,
) {
  const processedData = procesarDatosTabla(data, umbral);
  const keysInRange = processedData
    .slice(start, end)
    .map((row) => `${row.grado}-${row.campo_formativo}`);

  return data.filter((item) => {
    if (item.nivel_integracion !== "RA" && item.nivel_integracion !== "SE")
      return false;
    const key = `${item.grado}-${item.campo_formativo}`;
    return keysInRange.includes(key);
  });
}

export async function renderMainView() {
  return renderToStaticMarkup(
    <ReportLayout>
      <ReportQueryPanel />
    </ReportLayout>,
  );
}
