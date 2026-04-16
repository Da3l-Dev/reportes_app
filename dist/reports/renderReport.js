"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderReportZona = renderReportZona;
exports.renderReportSector = renderReportSector;
exports.renderReportGeneral = renderReportGeneral;
exports.renderOpcionEduReport = renderOpcionEduReport;
exports.renderEscuela = renderEscuela;
exports.renderMainView = renderMainView;
const jsx_runtime_1 = require("react/jsx-runtime");
const server_1 = require("react-dom/server");
const ReportLayout_1 = require("./components/ReportLayout");
const BarChart_1 = require("./components/BarChart");
const BarChartSmall_1 = __importDefault(require("./components/BarChartSmall"));
const Header_1 = __importDefault(require("./components/Header"));
const TablePorEscuela_1 = require("./components/TablePorEscuela");
const ReportQueryPanel_1 = __importDefault(require("./components/ReportQueryPanel"));
const TablaRequiereAtencion_1 = require("./components/TablaRequiereAtencion");
const TablaPrioridad_1 = __importDefault(require("./components/TablaPrioridad"));
/* =========================
   CONSTANTES
========================= */
const CAMPOS_FORMATIVOS = [
    "Lenguajes",
    "De lo humano y lo comunitario",
    "Ética, naturaleza y sociedades",
    "Saberes y pensamiento científico",
];
const ORDEN_VISUAL = ["AD", "EPD", "RA", "SE"];
const COLOR_MAP = {
    AD: "#369445",
    EPD: "#FACA58",
    RA: "#F38C2D",
    SE: "#A71D27",
};
/* =========================
   HEADER
========================= */
function calcularTotalesHeader(data) {
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
    const totalEstudiantes = data.reduce((acc, r) => acc + (Number(r.matricula) || 0), 0);
    const totalParticipantes = data.reduce((acc, r) => acc + (Number(r.estudiantes_participantes) || 0), 0);
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
const pluralizar = (texto) => {
    console.log(`TEXTO ------> ${texto}`);
    if (!texto)
        return "";
    let t = texto;
    // Quitar plural existente
    if (t.endsWith("ES")) {
        t = t.slice(0, -2);
    }
    else if (t.endsWith("S")) {
        t = t.slice(0, -1);
    }
    // Agregar plural correcto
    if (t.endsWith("L")) {
        return t + "ES"; // PREESCOLAR → PREESCOLARES
    }
    return t + "S"; // PRIMARIA → PRIMARIAS
};
function esPreescolar(data) {
    const grados = new Set(data.filter((r) => r.grado != null).map((r) => String(r.grado)));
    return grados.size <= 1;
}
function buildSegments(valuesBuilder) {
    return ORDEN_VISUAL.map((nivel) => ({
        label: nivel,
        color: COLOR_MAP[nivel],
        values: valuesBuilder(nivel),
    }));
}
function getPorcentajeValue(registro) {
    if (!registro)
        return 0;
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
function transformarDatosSector(dataSector) {
    if (!dataSector || dataSector.length === 0)
        return [];
    // Si los datos ya tienen la estructura correcta, devolverlos
    if (dataSector[0]?.campo_formativo) {
        return dataSector;
    }
    const datosTransformados = [];
    dataSector.forEach((item) => {
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
            Object.entries(item.campos || {}).forEach(([campo, valores]) => {
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
            });
        }
    });
    return datosTransformados;
}
/* =========================
   BUILDERS
========================= */
function buildSegmentsResumen(data) {
    // Si no hay datos, retornar segments vacíos
    if (!data || data.length === 0) {
        return buildSegments((nivel) => CAMPOS_FORMATIVOS.map(() => 0));
    }
    return buildSegments((nivel) => CAMPOS_FORMATIVOS.map((campo) => {
        const registro = data.find((r) => {
            if (!r.campo_formativo)
                return false;
            const backendCampo = r.campo_formativo.trim().toLowerCase();
            const constanteCampo = campo.trim().toLowerCase();
            return backendCampo === constanteCampo && r.nivel_integracion === nivel;
        });
        return getPorcentajeValue(registro);
    }));
}
function buildSegmentsPorCampo(data, campo) {
    const grados = Array.from(new Set(data
        .filter((r) => r.campo_formativo === campo && r.grado != null)
        .map((r) => String(r.grado)))).sort((a, b) => Number(a) - Number(b));
    const segments = buildSegments((nivel) => grados.map((grado) => {
        const registro = data.find((r) => r.campo_formativo === campo &&
            String(r.grado) === grado &&
            r.nivel_integracion === nivel);
        return getPorcentajeValue(registro);
    }));
    return { grados, segments };
}
/* =========================
   BLOQUE UNIVERSAL GRÁFICAS
========================= */
function renderGraficas(data, widthGrafica, heightGrafica) {
    const datosParaGraficas = transformarDatosSector(data);
    const preescolar = esPreescolar(datosParaGraficas);
    if (preescolar || datosParaGraficas.length === 0) {
        return ((0, jsx_runtime_1.jsx)("div", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingTop: "7mm",
            }, children: (0, jsx_runtime_1.jsx)(BarChart_1.BarChart, { labels: [...CAMPOS_FORMATIVOS], segments: [...buildSegmentsResumen(datosParaGraficas)].reverse() }) }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5mm",
            width: "100%",
            overflow: "hidden",
        }, children: CAMPOS_FORMATIVOS.map((campo) => {
            const { grados, segments } = buildSegmentsPorCampo(datosParaGraficas, campo);
            return ((0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: 0,
                    overflow: "hidden",
                }, children: [(0, jsx_runtime_1.jsx)("h4", { style: {
                            fontSize: "12px",
                            textAlign: "center",
                            fontWeight: 600,
                            color: "#000000",
                            margin: "5px 0",
                        }, children: campo }), (0, jsx_runtime_1.jsx)("div", { style: {
                            flex: 1,
                            width: "100%",
                            minHeight: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }, children: (0, jsx_runtime_1.jsx)(BarChartSmall_1.default, { labels: grados, segments: [...segments].reverse(), ...(widthGrafica && { width: Number(widthGrafica) }), ...(heightGrafica && { height: Number(heightGrafica) }) }) })] }, campo));
        }) }));
}
/* =========================
   REPORTES
========================= */
function renderReportZona(dataZona, dataMapaZona, dataZonaPorEscuela) {
    const totalesHeader = calcularTotalesHeader(dataMapaZona);
    totalesHeader.escuelas_zona = Math.max(...dataZona.map((item) => item.escuelas_zona ?? 0));
    return (0, server_1.renderToStaticMarkup)((0, jsx_runtime_1.jsxs)(ReportLayout_1.ReportLayout, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "page page-break", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { title: `REPORTE DE RESULTADOS ZONA ${dataZona[0].cct_zona}`, data: totalesHeader }), renderGraficas(dataZona), (0, jsx_runtime_1.jsxs)("p", { className: "notes", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nota:" }), " Las presentes gr\u00E1ficas ilustran el universo total de estudiantes participantes de la zona ", dataZona[0].cct_zona, " ", "as\u00ED como la distribuci\u00F3n porcentual de los mismos seg\u00FAn sus niveles de integraci\u00F3n."] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "page table_page", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { title: "Reporte de Resultados", data: totalesHeader, viewText: false }), (0, jsx_runtime_1.jsxs)("p", { className: "notes", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Notas:" }), " Los resultados que se presentan a continuaci\u00F3n est\u00E1n organizados por escuela y presentan, para cada grado y campo formativo, el nivel de integraci\u00F3n predominante, independientemente de que corresponda a niveles altos o bajos."] }), (0, jsx_runtime_1.jsx)("div", { style: { padding: "5mm 10mm" }, children: (0, jsx_runtime_1.jsx)(TablePorEscuela_1.TablePorEscuela, { dataMapaZona: dataMapaZona, dataZona: dataZonaPorEscuela }) })] })] }));
}
function renderReportSector(dataSector, dataEscuelas, dataZonaPorEscuela) {
    const totalesHeader = calcularTotalesHeader(dataEscuelas);
    return (0, server_1.renderToStaticMarkup)((0, jsx_runtime_1.jsxs)(ReportLayout_1.ReportLayout, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "page page-break", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { title: `REPORTE DE RESULTADOS SECTOR ${dataSector[0].cct_sector}`, data: totalesHeader, isZona: false }), renderGraficas(dataSector), (0, jsx_runtime_1.jsxs)("p", { className: "notes", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nota:" }), " Las presentes gr\u00E1ficas ilustran el universo total de estudiantes participantes del sector", " ", (0, jsx_runtime_1.jsx)("strong", { children: dataSector[0].cct_sector }), " as\u00ED como la distribuci\u00F3n porcentual de los mismos seg\u00FAn sus niveles de integraci\u00F3n."] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "page page-break", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { title: `REPORTE DE RESULTADOS SECTOR ${dataSector[0].cct_sector}`, data: totalesHeader, viewText: false, isZona: false }), (0, jsx_runtime_1.jsxs)("p", { className: "notes", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Notas:" }), " Los resultados que se presentan a continuaci\u00F3n est\u00E1n organizados por escuela y presentan, para cada grado y campo formativo, el nivel de integraci\u00F3n predominante, independientemente de que corresponda a niveles altos o bajos."] }), (0, jsx_runtime_1.jsx)("div", { style: { marginTop: "10mm" }, children: (0, jsx_runtime_1.jsx)(TablePorEscuela_1.TablePorEscuela, { dataMapaZona: dataEscuelas, dataZona: dataZonaPorEscuela, agruparPorZona: true }) })] })] }));
}
async function renderReportGeneral(dataGeneral, dataEscuelas, dataZonaPorEscuela) {
    const totalesHeader = calcularTotalesHeader(dataGeneral);
    return (0, server_1.renderToStaticMarkup)((0, jsx_runtime_1.jsxs)(ReportLayout_1.ReportLayout, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "page page-break", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { data: totalesHeader }), renderGraficas(dataGeneral)] }), (0, jsx_runtime_1.jsxs)("div", { className: "page page-break", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { data: totalesHeader }), (0, jsx_runtime_1.jsx)(TablePorEscuela_1.TablePorEscuela, { dataMapaZona: dataEscuelas, dataZona: dataZonaPorEscuela })] })] }));
}
async function renderOpcionEduReport(dataOpcion, dataEscuelas, dataZonaPorEscuela, totalesOpEdu) {
    const nivelPlural = pluralizar(dataEscuelas[0].nivel);
    const subnivelPlural = pluralizar(dataEscuelas[0].subnivel);
    // Calcular total de escuelas existentes
    const totalEscuelasExistentes = dataEscuelas.length;
    // Calcular escuelas participantes (escuelas que tienen registros)
    const escuelasParticipantesSet = new Set(dataZonaPorEscuela.map((item) => item.cct_registro || item.cct_escuela));
    const totalEscuelasParticipantes = escuelasParticipantesSet.size;
    // Formatear números con comas
    const formatearNumero = (num) => num.toLocaleString("es-MX");
    return (0, server_1.renderToStaticMarkup)((0, jsx_runtime_1.jsxs)(ReportLayout_1.ReportLayout, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "page page-break", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { title: `REPORTE DE RESULTADOS ${nivelPlural} ${subnivelPlural}`, data: [], isOpEdu: true, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                                display: "flex",
                                justifyContent: "space-around",
                                width: "100%",
                                flexWrap: "wrap",
                                gap: "10px",
                            }, children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Matricula Participante:", " ", formatearNumero(totalesOpEdu?.total_alumnos)] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Escuelas totales:", " ", formatearNumero(totalesOpEdu?.total_escuela_absoluto)] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Escuelas participantes:", " ", formatearNumero(totalEscuelasParticipantes)] })] }) }), renderGraficas(dataOpcion), (0, jsx_runtime_1.jsxs)("p", { className: "notes", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nota:" }), " Las presentes gr\u00E1ficas ilustran el universo total de estudiantes participantes al sistema de", " ", dataEscuelas[0].nivel, " ", dataEscuelas[0].subnivel, ", as\u00ED como la distribuci\u00F3n porcentual de los mismos seg\u00FAn sus niveles de integraci\u00F3n."] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "page page-break", children: [(0, jsx_runtime_1.jsx)(Header_1.default, { title: "Reporte por opci\u00F3n educativa", data: [], viewText: false, isOpEdu: true }), (0, jsx_runtime_1.jsxs)("p", { className: "notes", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Notas:" }), " Los resultados que se presentan a continuaci\u00F3n est\u00E1n organizados por escuela y presentan, para cada grado y campo formativo, el nivel de integraci\u00F3n predominante, independientemente de que corresponda a niveles altos o bajos."] }), (0, jsx_runtime_1.jsx)("div", { style: { marginTop: "10mm", padding: "0 10mm" }, children: (0, jsx_runtime_1.jsx)(TablePorEscuela_1.TablePorEscuela, { dataMapaZona: dataEscuelas, dataZona: dataZonaPorEscuela, agruparPorSector: true }) })] })] }));
}
async function renderEscuela(dataNiEscuela, dataGeneralEscuela, dataZona, dataAlumnosPrioritarios) {
    // Calcular cuántas páginas necesitamos para la tabla
    const MAX_ROWS_PER_PAGE = 10;
    const tablaData = procesarDatosTabla(dataNiEscuela, 30);
    // PRIMERA PÁGINA - SIEMPRE SE DIBUJA (GRÁFICAS DE ESCUELA)
    const primeraPagina = ((0, jsx_runtime_1.jsxs)("div", { className: "page page-break", style: {
            width: "100%",
            height: "100%",
        }, children: [(0, jsx_runtime_1.jsxs)(Header_1.default, { data: [], isOpEdu: true, title: ` REPORTE DE RESULTADOS ${dataGeneralEscuela[0].nivel} ${dataGeneralEscuela[0].subnivel}`, children: [(0, jsx_runtime_1.jsxs)("h4", { children: [dataGeneralEscuela[0].nombre, " ", dataGeneralEscuela[0].llave] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                            display: "flex",
                            justifyContent: "space-around",
                            width: "100%",
                        }, children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uD83D\uDD5B TURNO: ", dataGeneralEscuela[0].turno] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uD83C\uDFE0 MUNICIPIO: ", dataGeneralEscuela[0].municipio] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uD83D\uDCCD LOCALIDAD: ", dataGeneralEscuela[0].localidad] }), (0, jsx_runtime_1.jsxs)("p", { children: ["MATRICULA PARTICIPANTE: ", dataGeneralEscuela[0].matricula] })] })] }), renderGraficas(dataNiEscuela), (0, jsx_runtime_1.jsxs)("p", { className: "notes", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nota:" }), " Las presentes gr\u00E1ficas ilustran el universo total de estudiantes participantes a la escuela", " ", (0, jsx_runtime_1.jsx)("strong", { children: dataGeneralEscuela[0].nombre }), ", as\u00ED como la distribuci\u00F3n porcentual de los mismos seg\u00FAn sus niveles de integraci\u00F3n."] })] }, "primera-pagina"));
    // 🔥 NUEVA HOJA (SOLO AGREGADA, SIN TOCAR NADA)
    const paginaPrioridad = ((0, jsx_runtime_1.jsxs)("div", { className: "page page-break", children: [(0, jsx_runtime_1.jsxs)(Header_1.default, { data: [], isOpEdu: true, title: ` REPORTE DE RESULTADOS ${dataGeneralEscuela[0].nivel} ${dataGeneralEscuela[0].subnivel}`, children: [(0, jsx_runtime_1.jsxs)("h4", { children: [dataGeneralEscuela[0].nombre, " ", dataGeneralEscuela[0].llave] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                            display: "flex",
                            justifyContent: "space-around",
                            width: "100%",
                        }, children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uD83D\uDD5B TURNO: ", dataGeneralEscuela[0].turno] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uD83C\uDFE0 MUNICIPIO: ", dataGeneralEscuela[0].municipio] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uD83D\uDCCD LOCALIDAD: ", dataGeneralEscuela[0].localidad] }), (0, jsx_runtime_1.jsxs)("p", { children: ["MATRICULA PARTICIPANTE: ", dataGeneralEscuela[0].matricula] })] })] }), (0, jsx_runtime_1.jsxs)("p", { className: "notes text-sm text-gray-700 leading-relaxed", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nota:" }), " Se prioriza a las y los estudiantes de acuerdo con las siguientes combinaciones de resultados, en orden de importancia:"] }), (0, jsx_runtime_1.jsxs)("ul", { className: "mt-2 ml-4 space-y-1 text-sm text-gray-700 list-disc", children: [(0, jsx_runtime_1.jsx)("li", { className: "font-semibold text-[#A71D27]", children: "MUY ALTA: Quienes obtuvieron \u00FAnicamente RA o SE en los cuatro campos." }), (0, jsx_runtime_1.jsx)("li", { className: "font-semibold text-[#F38C2D]", children: "ALTA: Quienes obtuvieron \u00FAnicamente RA o SE en tres campos." }), (0, jsx_runtime_1.jsx)("li", { className: "font-semibold text-[#FACA58]", children: "MEDIA: Quienes obtuvieron RA o SE en uno o dos campos." })] }), (0, jsx_runtime_1.jsx)(TablaPrioridad_1.default, { data: dataAlumnosPrioritarios })] }));
    if (tablaData.length === 0) {
        return (0, server_1.renderToStaticMarkup)((0, jsx_runtime_1.jsxs)(ReportLayout_1.ReportLayout, { children: [primeraPagina, (0, jsx_runtime_1.jsxs)("div", { className: "page", style: {
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }, children: [(0, jsx_runtime_1.jsxs)(Header_1.default, { data: [], isOpEdu: true, title: ` REPORTE DE RESULTADOS ${dataGeneralEscuela[0].nivel} ${dataGeneralEscuela[0].subnivel}`, children: [(0, jsx_runtime_1.jsx)("h4", { children: dataGeneralEscuela[0].nombre }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                        display: "flex",
                                        justifyContent: "space-around",
                                        width: "100%",
                                    }, children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uD83D\uDD5B TURNO: ", dataGeneralEscuela[0].turno] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uD83C\uDFE0 MUNICIPIO: ", dataGeneralEscuela[0].municipio] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uD83D\uDCCD LOCALIDAD: ", dataGeneralEscuela[0].localidad] }), (0, jsx_runtime_1.jsxs)("p", { children: ["MATRICULA PARTICIPANTE: ", dataGeneralEscuela[0].matricula] })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                flex: 1,
                                minHeight: 0,
                            }, children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        gridColumn: "1 / 2",
                                    }, children: [(0, jsx_runtime_1.jsx)("p", { style: {
                                                textAlign: "center",
                                                fontWeight: "bold",
                                                margin: "0 0 5mm 0",
                                                fontSize: "12px",
                                            }, children: "Nivel de integraci\u00F3n a nivel zona" }), (0, jsx_runtime_1.jsx)("div", { children: dataZona[0] ? (renderGraficas(dataZona[0], 290, 250)) : ((0, jsx_runtime_1.jsx)("p", { style: { textAlign: "center", color: "#999" }, children: "Sin datos" })) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(TablaRequiereAtencion_1.TablaRequiereAtencion, { data: dataNiEscuela, umbral: 30 }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nota:" }), " "] })] })] })] }), paginaPrioridad] }));
    }
    const totalPages = Math.ceil(tablaData.length / MAX_ROWS_PER_PAGE);
    const pages = [];
    for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
        const start = pageIndex * MAX_ROWS_PER_PAGE;
        const end = start + MAX_ROWS_PER_PAGE;
        const pageData = filterDataByRange(dataNiEscuela, start, end, 30);
        pages.push((0, jsx_runtime_1.jsxs)("div", { className: `page ${pageIndex < totalPages - 1 ? "page-break" : ""}`, style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                marginTop: "100px",
            }, children: [(0, jsx_runtime_1.jsxs)(Header_1.default, { data: [], isOpEdu: true, title: ` REPORTE ${dataGeneralEscuela[0].nivel} ${dataGeneralEscuela[0].subnivel}`, children: [(0, jsx_runtime_1.jsx)("h4", { children: dataGeneralEscuela[0].nombre }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                display: "flex",
                                justifyContent: "space-around",
                                width: "100%",
                            }, children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uD83D\uDD5B TURNO: ", dataGeneralEscuela[0].turno] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uD83C\uDFE0 MUNICIPIO: ", dataGeneralEscuela[0].municipio] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uD83D\uDCCD LOCALIDAD: ", dataGeneralEscuela[0].localidad] }), (0, jsx_runtime_1.jsxs)("p", { children: ["MATRICULA PARTICIPANTE: ", dataGeneralEscuela[0].matricula] })] }), pageIndex > 0 && ((0, jsx_runtime_1.jsxs)("p", { style: {
                                textAlign: "center",
                                fontSize: "12px",
                                color: "#666",
                                marginTop: "5px",
                            }, children: ["Continuaci\u00F3n de tabla de \u00E1reas que requieren atenci\u00F3n (P\u00E1gina", " ", pageIndex + 1, "/", totalPages, ")"] }))] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: "grid",
                        gridTemplateColumns: pageIndex === 0 ? "1fr 1fr" : "1fr",
                        flex: 1,
                        minHeight: 0,
                        gap: "20px",
                    }, children: [pageIndex === 0 && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { style: {
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        margin: "0 0 5mm 0",
                                        fontSize: "12px",
                                    }, children: "Nivel de integraci\u00F3n a nivel zona" }), (0, jsx_runtime_1.jsxs)("div", { children: [dataZona[0] ? (renderGraficas(dataZona[0], 290, 250)) : ((0, jsx_runtime_1.jsx)("p", { style: { textAlign: "center", color: "#999" }, children: "Sin datos" })), (0, jsx_runtime_1.jsxs)("p", { className: "notes", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nota:" }), " Estos resultados permiten analizar los niveles de integraci\u00F3n a nivel zona para que exista un contraste con la escuela."] })] })] })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nota: " }), "Los resultados se presentan por grado y campo formativo. El total corresponde al n\u00FAmero de alumnos por grado; sin embargo, un mismo alumno puede aparecer en m\u00E1s de un campo formativo. Por ello, los resultados deben interpretarse por grado."] }), (0, jsx_runtime_1.jsx)(TablaRequiereAtencion_1.TablaRequiereAtencion, { data: pageData, umbral: 30, showHeader: true, pageInfo: {
                                        current: pageIndex + 1,
                                        total: totalPages,
                                        totalAreas: tablaData.length,
                                    } })] })] })] }, `tabla-page-${pageIndex}`));
    }
    return (0, server_1.renderToStaticMarkup)((0, jsx_runtime_1.jsxs)(ReportLayout_1.ReportLayout, { children: [primeraPagina, pages, paginaPrioridad] }));
}
// Función auxiliar para procesar los datos de la tabla
function procesarDatosTabla(data, umbral) {
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
        if (a.grado !== b.grado)
            return a.grado - b.grado;
        return a.campo_formativo.localeCompare(b.campo_formativo);
    });
}
// Función auxiliar para filtrar datos por rango
function filterDataByRange(data, start, end, umbral = 30) {
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
async function renderMainView() {
    return (0, server_1.renderToStaticMarkup)((0, jsx_runtime_1.jsx)(ReportLayout_1.ReportLayout, { children: (0, jsx_runtime_1.jsx)(ReportQueryPanel_1.default, {}) }));
}
//# sourceMappingURL=renderReport.js.map