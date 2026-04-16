"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablePorEscuela = TablePorEscuela;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
/* =========================
   CONSTANTES
========================= */
const CAMPOS_FORMATIVOS = [
    "Lenguajes",
    "De lo humano y lo comunitario",
    "Ética, naturaleza y sociedades",
    "Saberes y pensamiento científico",
];
const COLOR_MAP = {
    AD: "#369445",
    EPD: "#FACA58",
    RA: "#F38C2D",
    SE: "#A71D27",
};
const COLOR_SIN_DATOS = "#E0E0E0";
const GRISES_ESCUELAS = {
    GRIS_0: "#F8F8F8",
    GRIS_1: "#F0F0F0",
    GRIS_2: "#E8E8E8",
    GRIS_3: "#E0E0E0",
    GRIS_4: "#D8D8D8",
    GRIS_5: "#D0D0D0",
};
const GRISES_ARRAY = [
    GRISES_ESCUELAS.GRIS_0,
    GRISES_ESCUELAS.GRIS_1,
    GRISES_ESCUELAS.GRIS_2,
    GRISES_ESCUELAS.GRIS_3,
    GRISES_ESCUELAS.GRIS_4,
    GRISES_ESCUELAS.GRIS_5,
];
const SEGUNDA_REPETICION = {
    primaria: 3,
    secundaria: 1,
    preescolar: 0,
};
// Colores para sectores y zonas
const COLORES_SECTOR = [
    "#1a4d8c", // Azul oscuro
];
const COLORES_ZONA = [
    "#517baf", // Azul muy claro
];
/* =========================
   UTILIDADES
========================= */
function getGradosPorOpcion(opcion) {
    const op = opcion.toLowerCase();
    if (op.includes("preescolar"))
        return [3];
    if (op.includes("primaria"))
        return [1, 2, 3, 4, 5, 6];
    if (op.includes("secundaria"))
        return [1, 2, 3];
    return [];
}
function getTipoEscuela(opcion) {
    const op = opcion.toLowerCase();
    if (op.includes("preescolar"))
        return "preescolar";
    if (op.includes("primaria"))
        return "primaria";
    if (op.includes("secundaria"))
        return "secundaria";
    return "primaria";
}
function cutOneDecimal(value) {
    return (Math.floor(value * 10) / 10).toFixed(1);
}
function getColorEscuela(cct) {
    if (!cct || cct.trim() === "") {
        return GRISES_ESCUELAS.GRIS_0;
    }
    let hash = 0;
    for (let i = 0; i < cct.length; i++) {
        hash = (hash << 5) - hash + cct.charCodeAt(i);
        hash = hash & hash;
    }
    const colorIndex = Math.abs(hash) % GRISES_ARRAY.length;
    switch (colorIndex) {
        case 0:
            return GRISES_ESCUELAS.GRIS_0;
        case 1:
            return GRISES_ESCUELAS.GRIS_1;
        case 2:
            return GRISES_ESCUELAS.GRIS_2;
        case 3:
            return GRISES_ESCUELAS.GRIS_3;
        case 4:
            return GRISES_ESCUELAS.GRIS_4;
        case 5:
            return GRISES_ESCUELAS.GRIS_5;
        default:
            return GRISES_ESCUELAS.GRIS_0;
    }
}
function getColorSector(index) {
    return COLORES_SECTOR[index % COLORES_SECTOR.length] || "#4a4a4a";
}
function getColorZona(index) {
    return COLORES_ZONA[index % COLORES_ZONA.length] || "#f0f0f0";
}
/* =========================
   FUNCIONES DE AGRUPACIÓN
========================= */
// Agrupar primero por sector, luego por zona
function agruparPorSectorYZona(escuelas) {
    const sectores = {};
    escuelas.forEach((escuela) => {
        const sectorId = escuela.cct_sector ?? "SIN SECTOR";
        const zonaId = escuela.cct_zona ?? "Sin zona";
        // Inicializar sector si no existe
        if (!sectores[sectorId]) {
            sectores[sectorId] = {
                id: sectorId,
                nombre: sectorId === "SIN SECTOR"
                    ? "SIN SECTOR ASIGNADO"
                    : `SECTOR ${sectorId}`,
                numero: escuela.sector,
                nombre_sup: escuela.nombre_sup_sector,
                zonas: {},
            };
        }
        // Inicializar zona si no existe dentro del sector
        if (!sectores[sectorId].zonas[zonaId]) {
            sectores[sectorId].zonas[zonaId] = {
                id: zonaId,
                nombre: zonaId === "Sin zona" ? "SIN ZONA ASIGNADA" : `ZONA ${zonaId}`,
                numero: escuela.zona,
                nombre_sup: escuela.nombre_sup_zona,
                escuelas: [],
            };
        }
        // Agregar escuela a la zona
        sectores[sectorId].zonas[zonaId].escuelas.push(escuela);
    });
    // Convertir a array y ordenar
    return Object.values(sectores)
        .map((sector) => ({
        ...sector,
        zonas: Object.values(sector.zonas).sort((a, b) => (a.numero || 0) - (b.numero || 0)),
    }))
        .sort((a, b) => (a.numero || 0) - (b.numero || 0));
}
function TablePorEscuela({ dataMapaZona, dataZona, agruparPorZona = false, agruparPorSector = false, }) {
    // HEADER COMÚN PARA TODAS LAS VISTAS
    const tableHeader = ((0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: {
                        width: "10%",
                        padding: "10px 4px",
                        backgroundColor: "#f3f3f3",
                        borderBottom: "2px solid #000",
                        borderRight: "2px solid #000",
                    }, children: "CCT" }), (0, jsx_runtime_1.jsx)("th", { style: {
                        width: "25%",
                        padding: "10px 4px",
                        backgroundColor: "#f3f3f3",
                        borderBottom: "2px solid #000",
                        borderRight: "2px solid #000",
                    }, children: "Escuela" }), (0, jsx_runtime_1.jsx)("th", { style: {
                        width: "5%",
                        padding: "10px 4px",
                        backgroundColor: "#f3f3f3",
                        borderBottom: "2px solid #000",
                        borderRight: "1px solid #ccc",
                    }, children: "Grado" }), CAMPOS_FORMATIVOS.map((c, i) => ((0, jsx_runtime_1.jsx)("th", { style: {
                        alignItems: "center",
                        width: "15%",
                        padding: "10px 4px",
                        backgroundColor: "#f3f3f3",
                        borderBottom: "2px solid #000",
                        borderRight: i === CAMPOS_FORMATIVOS.length - 1
                            ? "2px solid #000"
                            : "1px solid #ccc",
                    }, children: c }, c)))] }) }));
    // Si es agrupación por sector
    if (agruparPorSector) {
        const sectores = agruparPorSectorYZona(dataMapaZona);
        return ((0, jsx_runtime_1.jsxs)("table", { style: {
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "8.5px",
                border: "2px solid #000",
            }, children: [tableHeader, (0, jsx_runtime_1.jsx)("tbody", { children: sectores.map((sector, sectorIndex) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: 3 + CAMPOS_FORMATIVOS.length, style: {
                                        backgroundColor: getColorSector(sectorIndex),
                                        fontWeight: 700,
                                        fontSize: "14px",
                                        padding: "15px 16px",
                                        borderTop: sectorIndex === 0 ? "3px solid #000" : "3px solid #333",
                                        borderBottom: "2px solid #000",
                                        color: "white",
                                    }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                            gap: "20px",
                                            flexWrap: "wrap",
                                        }, children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("strong", { children: sector.nombre || "N/A" }) }), (0, jsx_runtime_1.jsxs)("div", { children: ["JEFE DE SECTOR:", " ", (0, jsx_runtime_1.jsx)("strong", { children: sector.nombre_sup || "N/A" })] })] }) }) }), sector.zonas.map((zona, zonaIndex) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: 3 + CAMPOS_FORMATIVOS.length, style: {
                                                backgroundColor: getColorZona(zonaIndex),
                                                fontWeight: 600,
                                                fontSize: "13px",
                                                padding: "12px 16px",
                                                borderTop: zonaIndex === 0 ? "2px solid #666" : "2px solid #999",
                                                borderBottom: "2px solid #333",
                                                color: "#000",
                                            }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    width: "100%",
                                                    gap: "20px",
                                                    flexWrap: "wrap",
                                                }, children: [(0, jsx_runtime_1.jsxs)("div", { children: ["NO. ZONA:", " ", (0, jsx_runtime_1.jsx)("strong", { children: zona.numero ?? "Sin número" })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("strong", { children: zona.nombre }) }), (0, jsx_runtime_1.jsxs)("div", { children: ["SUPERVISOR:", " ", (0, jsx_runtime_1.jsx)("strong", { children: zona.nombre_sup || "NO ASIGNADO" })] })] }) }) }), zona.escuelas.map((escuela) => renderEscuela(escuela, dataZona))] }, zona.id)))] }, sector.id))) })] }));
    }
    // Si es agrupación por zona
    if (agruparPorZona) {
        const agrupado = {};
        dataMapaZona.forEach((escuela) => {
            const zona = escuela.cct_zona ?? "Sin zona";
            if (!agrupado[zona])
                agrupado[zona] = [];
            agrupado[zona].push(escuela);
        });
        const zonasOrdenadas = Object.keys(agrupado).sort((a, b) => {
            const zonaA = Number(agrupado[a]?.[0]?.zona ?? 0);
            const zonaB = Number(agrupado[b]?.[0]?.zona ?? 0);
            return zonaA - zonaB;
        });
        return ((0, jsx_runtime_1.jsxs)("table", { style: {
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "8.5px",
                border: "2px solid #000",
            }, children: [tableHeader, (0, jsx_runtime_1.jsx)("tbody", { children: zonasOrdenadas.map((zona) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: 3 + CAMPOS_FORMATIVOS.length, style: {
                                        backgroundColor: "#3c4a58",
                                        fontWeight: 600,
                                        fontSize: "13px",
                                        padding: "15px 16px",
                                        borderTop: "3px solid #000",
                                        borderBottom: "2px solid #000",
                                        color: "white",
                                    }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                            gap: "20px",
                                            flexWrap: "wrap",
                                        }, children: [(0, jsx_runtime_1.jsxs)("div", { children: ["JEFE ZONA:", " ", (0, jsx_runtime_1.jsx)("strong", { children: agrupado[zona]?.[0]?.nombre_sup_zona ?? "NO ASIGNADO" })] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Zona: ", (0, jsx_runtime_1.jsx)("strong", { children: zona })] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Nivel:", " ", (0, jsx_runtime_1.jsx)("strong", { children: agrupado[zona]?.[0]?.nivel ?? "Sin nivel" })] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Subnivel:", " ", (0, jsx_runtime_1.jsx)("strong", { children: agrupado[zona]?.[0]?.subnivel ?? "Sin opción" })] }), (0, jsx_runtime_1.jsxs)("div", { children: ["No. Zona:", " ", (0, jsx_runtime_1.jsx)("strong", { children: agrupado[zona]?.[0]?.zona ?? "Sin número" })] })] }) }) }), agrupado[zona].map((escuela) => renderEscuela(escuela, dataZona))] }, zona))) })] }));
    }
    // Sin agrupación
    return ((0, jsx_runtime_1.jsxs)("table", { style: {
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "8.5px",
            border: "2px solid #000",
        }, children: [tableHeader, (0, jsx_runtime_1.jsx)("tbody", { children: dataMapaZona.map((escuela) => renderEscuela(escuela, dataZona)) })] }));
}
// Función auxiliar para renderizar una escuela
function renderEscuela(escuela, dataZona) {
    const registrosEscuela = dataZona.filter((r) => r.llave === escuela.llave);
    const sinDatos = registrosEscuela.length === 0;
    const grados = getGradosPorOpcion(escuela.opcion_educativa);
    const tipoEscuela = getTipoEscuela(escuela.opcion_educativa);
    const esPreescolar = grados.length === 1;
    const colorEscuela = getColorEscuela(escuela.cct);
    // Para primaria: usar el valor de SEGUNDA_REPETICION (3)
    // Para secundaria y preescolar: no queremos repetición
    const indiceSegundaRepeticion = tipoEscuela === "primaria"
        ? (SEGUNDA_REPETICION[tipoEscuela] ?? 3)
        : grados.length; // Un índice que nunca alcanzaremos
    return grados.map((grado, index) => {
        // Solo mostrar CCT/nombre en:
        // - Primaria: índice 0 y índice de segunda repetición
        // - Secundaria y Preescolar: solo índice 0
        const debeMostrarCCTyNombre = tipoEscuela === "primaria"
            ? index === 0 || index === indiceSegundaRepeticion
            : index === 0;
        let rowSpan = 1;
        if (debeMostrarCCTyNombre && !esPreescolar) {
            if (index === 0) {
                rowSpan = indiceSegundaRepeticion;
            }
            else {
                rowSpan = grados.length - index;
            }
        }
        const borderTopStyle = index === 0 ? "2px solid #333" : "1px solid #ccc";
        const borderBottomStyle = index === grados.length - 1 ? "2px solid #333" : "1px solid #ccc";
        // Estilo para centrar verticalmente el contenido de las celdas
        const cellStyle = {
            textAlign: "center",
            verticalAlign: "middle",
            justifyContent: "center",
            padding: "8px 4px",
            fontSize: "8.5px",
        };
        return ((0, jsx_runtime_1.jsxs)("tr", { style: {
                backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
                borderTop: borderTopStyle,
                borderBottom: borderBottomStyle,
                borderLeft: "1px solid #ccc",
                borderRight: "1px solid #ccc",
                pageBreakInside: "avoid",
            }, children: [debeMostrarCCTyNombre ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("td", { rowSpan: !esPreescolar ? rowSpan : 1, style: {
                                ...cellStyle,
                                fontWeight: 600,
                                backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
                                borderRight: "2px solid #333",
                            }, children: escuela.cct }), (0, jsx_runtime_1.jsxs)("td", { rowSpan: !esPreescolar ? rowSpan : 1, style: {
                                ...cellStyle,
                                fontWeight: 600,
                                backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
                                borderRight: "2px solid #333",
                                textAlign: "center",
                            }, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontWeight: "bold", marginBottom: "2px" }, children: escuela.nombre }), (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: "7px", color: "#333", marginTop: "2px" }, children: [(0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-block", marginRight: "8px" }, children: ["\uD83C\uDFEB Turno: ", (0, jsx_runtime_1.jsx)("strong", { children: escuela.turno || "S/T" })] }), (0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-block" }, children: ["\uD83D\uDCCDMunicipio: ", (0, jsx_runtime_1.jsx)("strong", { children: escuela.municipio || "S/M" })] }), (0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-block" }, children: ["\uD83D\uDDFA\uFE0F Localidad: ", (0, jsx_runtime_1.jsx)("strong", { children: escuela.localidad || "S/M" })] })] })] })] })) : null, (0, jsx_runtime_1.jsxs)("td", { style: {
                        ...cellStyle,
                        fontWeight: 600,
                        backgroundColor: sinDatos ? COLOR_SIN_DATOS : colorEscuela,
                    }, children: [grado, "\u00B0"] }), CAMPOS_FORMATIVOS.map((campo) => {
                    if (sinDatos) {
                        return ((0, jsx_runtime_1.jsx)("td", { style: {
                                ...cellStyle,
                                backgroundColor: colorEscuela,
                            }, children: "N/D" }, campo));
                    }
                    const registros = registrosEscuela.filter((r) => r.grado === grado && r.campo_formativo === campo);
                    if (registros.length === 0) {
                        return ((0, jsx_runtime_1.jsx)("td", { style: {
                                ...cellStyle,
                                backgroundColor: colorEscuela,
                            }, children: "N/D" }, campo));
                    }
                    const mejor = registros.reduce((max, curr) => Number(curr.porcentaje) > Number(max.porcentaje) ? curr : max);
                    return ((0, jsx_runtime_1.jsxs)("td", { style: {
                            ...cellStyle,
                            backgroundColor: COLOR_MAP[mejor.nivel_integracion],
                            fontWeight: 600,
                            color: "#000",
                            border: "1px solid #666",
                        }, children: [cutOneDecimal(Number(mejor.porcentaje)), "%"] }, campo));
                })] }, `${escuela.cct}-${grado}`));
    });
}
//# sourceMappingURL=TablePorEscuela.js.map