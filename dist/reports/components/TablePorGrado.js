"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablePorGrado = TablePorGrado;
const jsx_runtime_1 = require("react/jsx-runtime");
const NIVELES = ["AD", "EPD", "RA", "SE"];
const COLOR_MAP = {
    AD: "#5FB3A2",
    EPD: "#E6C44A",
    RA: "#E09A5C",
    SE: "#D96C6C",
};
/**
 * Tabla de porcentajes por grado y nivel de integración
 */
function TablePorGrado({ rows }) {
    return ((0, jsx_runtime_1.jsxs)("table", { className: "report-table", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Grado" }), NIVELES.map((nivel) => ((0, jsx_runtime_1.jsx)("th", { children: nivel }, nivel)))] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: rows.map((row) => ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "grado-cell", children: row.grado }), NIVELES.map((nivel) => ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsxs)("span", { className: "nivel-pill", style: {
                                    backgroundColor: COLOR_MAP[nivel],
                                }, children: [row.valores[nivel].toFixed(1), "%"] }) }, nivel)))] }, row.grado))) })] }));
}
//# sourceMappingURL=TablePorGrado.js.map