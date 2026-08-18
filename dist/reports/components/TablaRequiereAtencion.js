"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablaRequiereAtencion = TablaRequiereAtencion;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const NIVELES_BAJOS = ["RA", "SE"];
const COLOR_MAP = {
    AD: "#5FB3A2",
    EPD: "#E6C44A",
    RA: "#E09A5C",
    SE: "#D96C6C",
};
function TablaRequiereAtencion({ data, umbral = 30, showHeader = true, pageInfo, }) {
    const procesarDatos = () => {
        const mapa = new Map();
        data.forEach((item) => {
            const key = `${item.grado}-${item.campo_formativo}`;
            if (!mapa.has(key)) {
                // Crear entrada nueva con todos los valores en 0
                const nuevosValores = {
                    AD: { porcentaje: 0, alumnos: 0 },
                    EPD: { porcentaje: 0, alumnos: 0 },
                    RA: { porcentaje: 0, alumnos: 0 },
                    SE: { porcentaje: 0, alumnos: 0 },
                };
                mapa.set(key, {
                    grado: item.grado,
                    campo_formativo: item.campo_formativo,
                    valores: nuevosValores,
                    total_alumnos: item.total_cct_grado,
                });
            }
            const row = mapa.get(key);
            const porcentajeNum = parseFloat(item.porcentaje) || 0;
            const alumnosEnNivel = Math.round((porcentajeNum / 100) * item.total_cct_grado) || 0;
            row.valores[item.nivel_integracion] = {
                porcentaje: porcentajeNum,
                alumnos: alumnosEnNivel,
            };
        });
        // Convertir Map a array, filtrar y ordenar
        return Array.from(mapa.values())
            .filter((row) => row.valores.RA.porcentaje >= umbral ||
            row.valores.SE.porcentaje >= umbral)
            .sort((a, b) => {
            if (a.grado !== b.grado)
                return a.grado - b.grado;
            return a.campo_formativo.localeCompare(b.campo_formativo);
        });
    };
    const rows = procesarDatos();
    if (rows.length === 0) {
        return ((0, jsx_runtime_1.jsx)("div", { style: {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: 0,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                color: "#4CAF50",
                padding: "20px",
            }, children: (0, jsx_runtime_1.jsxs)("p", { style: { textAlign: "center", fontSize: "16px" }, children: [(0, jsx_runtime_1.jsx)("strong", { style: { fontSize: "25px", display: "block", marginBottom: "10px" }, children: "\u2705" }), "No se detectaron \u00E1reas que requieran atenci\u00F3n prioritaria"] }) }));
    }
    // Calcular totales para el footer
    const totalAlumnosEnRiesgo = rows.reduce((sum, row) => {
        return sum + row.valores.RA.alumnos + row.valores.SE.alumnos;
    }, 0);
    const totalAlumnosGeneral = rows.reduce((sum, row) => {
        return sum + row.total_alumnos;
    }, 0);
    const promedioRiesgo = totalAlumnosGeneral > 0
        ? ((totalAlumnosEnRiesgo / totalAlumnosGeneral) * 100).toFixed(1)
        : "0";
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            minHeight: 0,
            overflow: "hidden",
        }, children: [showHeader && ((0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center", margin: "0 0 15px 0" }, children: [(0, jsx_runtime_1.jsx)("strong", { style: { fontSize: "25px", display: "block" }, children: "\u26A0\uFE0F" }), (0, jsx_runtime_1.jsxs)("span", { style: { fontSize: "14px", color: "#666" }, children: ["Campos formativos con niveles RA/SE superiores al ", umbral, "%"] }), (0, jsx_runtime_1.jsx)("div", { style: {
                            fontSize: "13px",
                            color: "#555",
                            marginTop: "5px",
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                        } })] })), (0, jsx_runtime_1.jsx)("div", { style: { overflowY: "auto", flex: 1 }, children: (0, jsx_runtime_1.jsxs)("table", { className: "report-table", style: {
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "14px",
                    }, children: [(0, jsx_runtime_1.jsxs)("thead", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: {
                                                padding: "10px 8px",
                                                textAlign: "center",
                                                borderBottom: "2px solid #ddd",
                                                backgroundColor: "#f5f5f5",
                                            }, children: "Grado" }), (0, jsx_runtime_1.jsx)("th", { style: {
                                                padding: "10px 8px",
                                                textAlign: "center",
                                                borderBottom: "2px solid #ddd",
                                                backgroundColor: "#f5f5f5",
                                            }, children: "Campo Formativo" }), NIVELES_BAJOS.map((nivel) => ((0, jsx_runtime_1.jsx)("th", { colSpan: 2, style: {
                                                padding: "10px 4px",
                                                textAlign: "center",
                                                borderBottom: "2px solid #ddd",
                                                backgroundColor: COLOR_MAP[nivel] + "22",
                                            }, children: nivel }, nivel))), (0, jsx_runtime_1.jsx)("th", { style: {
                                                padding: "10px 8px",
                                                textAlign: "center",
                                                borderBottom: "2px solid #ddd",
                                                backgroundColor: "#f5f5f5",
                                            }, children: "Total" })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: { padding: "5px 8px", borderBottom: "1px solid #ddd" } }), (0, jsx_runtime_1.jsx)("th", { style: { padding: "5px 8px", borderBottom: "1px solid #ddd" } }), NIVELES_BAJOS.map((nivel) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("th", { style: {
                                                        padding: "5px 4px",
                                                        textAlign: "center",
                                                        borderBottom: "1px solid #ddd",
                                                        fontSize: "12px",
                                                        fontWeight: "normal",
                                                    }, children: "%" }), (0, jsx_runtime_1.jsx)("th", { style: {
                                                        padding: "5px 4px",
                                                        textAlign: "center",
                                                        borderBottom: "1px solid #ddd",
                                                        fontSize: "12px",
                                                        fontWeight: "normal",
                                                    }, children: "Alumnos" })] }, `sub-${nivel}`))), (0, jsx_runtime_1.jsx)("th", { style: {
                                                padding: "5px 8px",
                                                borderBottom: "1px solid #ddd",
                                                fontSize: "12px",
                                                fontWeight: "normal",
                                            }, children: "Alumnos" })] })] }), (0, jsx_runtime_1.jsx)("tbody", { children: rows.map((row, index) => {
                                const key = `${row.grado}-${row.campo_formativo}-${index}`;
                                const alumnosEnRiesgoRow = row.valores.RA.alumnos + row.valores.SE.alumnos;
                                const porcentajeRiesgoRow = ((alumnosEnRiesgoRow / row.total_alumnos) *
                                    100).toFixed(1);
                                return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("td", { style: {
                                                padding: "8px",
                                                fontWeight: "bold",
                                                borderBottom: "1px solid #eee",
                                                textAlign: "center",
                                            }, children: [row.grado, "\u00B0"] }), (0, jsx_runtime_1.jsx)("td", { style: {
                                                padding: "8px",
                                                maxWidth: "200px",
                                                borderBottom: "1px solid #eee",
                                            }, children: row.campo_formativo }), NIVELES_BAJOS.map((nivel) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("td", { style: {
                                                        padding: "8px 4px",
                                                        textAlign: "center",
                                                        borderBottom: "1px solid #eee",
                                                    }, children: (0, jsx_runtime_1.jsxs)("span", { style: {
                                                            display: "inline-block",
                                                            padding: "4px 6px",
                                                            borderRadius: "12px",
                                                            backgroundColor: COLOR_MAP[nivel],
                                                            color: "#fff",
                                                            fontSize: "12px",
                                                            fontWeight: row.valores[nivel].porcentaje >= umbral
                                                                ? "bold"
                                                                : "normal",
                                                        }, children: [row.valores[nivel].porcentaje.toFixed(1), "%"] }) }), (0, jsx_runtime_1.jsx)("td", { style: {
                                                        padding: "8px 4px",
                                                        textAlign: "center",
                                                        borderBottom: "1px solid #eee",
                                                    }, children: (0, jsx_runtime_1.jsx)("span", { style: { fontSize: "12px", color: "#555" }, children: row.valores[nivel].alumnos }) })] }, `${key}-${nivel}`))), (0, jsx_runtime_1.jsxs)("td", { style: {
                                                padding: "8px",
                                                textAlign: "center",
                                                borderBottom: "1px solid #eee",
                                                fontWeight: "bold",
                                                backgroundColor: "#f9f9f9",
                                            }, children: [row.total_alumnos, (0, jsx_runtime_1.jsx)("span", { style: {
                                                        display: "block",
                                                        fontSize: "11px",
                                                        color: alumnosEnRiesgoRow > 0 ? "#D96C6C" : "#666",
                                                        fontWeight: "normal",
                                                    } })] })] }, key));
                            }) }), (0, jsx_runtime_1.jsx)("tfoot", { children: (0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsxs)("td", { colSpan: 10, style: {
                                        padding: "8px",
                                        fontSize: "12px",
                                        color: "#666",
                                        textAlign: "center",
                                        borderTop: "1px solid #ddd",
                                        backgroundColor: "#f9f9f9",
                                    }, children: ["Total de campos formativos con NI bajo:", " ", pageInfo?.totalAreas || rows.length, pageInfo &&
                                            ` (Página ${pageInfo.current} de ${pageInfo.total})`] }) }) })] }) })] }));
}
//# sourceMappingURL=TablaRequiereAtencion.js.map