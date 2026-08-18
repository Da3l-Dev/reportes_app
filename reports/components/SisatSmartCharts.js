"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SisatComparativoCharts;
const jsx_runtime_1 = require("react/jsx-runtime");
const BarChartSmall_1 = __importDefault(require("./BarChartSmall"));
/* =========================
   CONFIG
========================= */
const MATERIAS = ["Lectura", "Textos", "Cálculo"];
const COLOR_MAP = {
    RA: "#A71D27",
    ED: "#FACA58",
    NE: "#369445",
};
/* =========================
   LÓGICA
========================= */
function agruparDatosSisat(data) {
    const mapa = new Map();
    data.forEach((item) => {
        const key = `${item.materia}-${item.grado}`;
        if (!mapa.has(key)) {
            mapa.set(key, {
                materia: item.materia,
                grado: String(item.grado),
                totalRA: 0,
                totalED: 0,
                totalNE: 0,
            });
        }
        const row = mapa.get(key);
        row.totalRA += Number(item.total_ra) || 0;
        row.totalED += Number(item.total_ed) || 0;
        row.totalNE += Number(item.total_ne) || 0;
    });
    return Array.from(mapa.values());
}
function buildSisatPorMateria(data, materia) {
    const agrupados = agruparDatosSisat(data).filter((d) => d.materia === materia);
    const grados = Array.from(new Set(agrupados.map((d) => d.grado))).sort((a, b) => Number(a) - Number(b));
    const RA = [];
    const ED = [];
    const NE = [];
    grados.forEach((grado) => {
        const row = agrupados.find((d) => d.grado === grado);
        if (!row) {
            RA.push(0);
            ED.push(0);
            NE.push(0);
            return;
        }
        const total = row.totalRA + row.totalED + row.totalNE;
        RA.push(total ? (row.totalRA / total) * 100 : 0);
        ED.push(total ? (row.totalED / total) * 100 : 0);
        NE.push(total ? (row.totalNE / total) * 100 : 0);
    });
    return {
        grados,
        segments: [
            { label: "RA", color: COLOR_MAP.RA, values: RA },
            { label: "ED", color: COLOR_MAP.ED, values: ED },
            { label: "NE", color: COLOR_MAP.NE, values: NE },
        ],
    };
}
function SisatComparativoCharts({ primera, segunda, tercera }) {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }, children: MATERIAS.map((materia) => {
            const dataPrimera = buildSisatPorMateria(primera, materia);
            const dataSegunda = buildSisatPorMateria(segunda, materia);
            const dataTercera = buildSisatPorMateria(tercera, materia);
            // Si no hay datos en ninguna exploración, no mostrar
            if (!dataPrimera.grados.length && !dataSegunda.grados.length && !dataTercera.grados.length)
                return null;
            return ((0, jsx_runtime_1.jsxs)("div", { style: {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }, children: [(0, jsx_runtime_1.jsx)("h4", { style: {
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: "bold",
                        }, children: materia }), (0, jsx_runtime_1.jsx)("div", { style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                                display: "grid",
                                gridTemplateColumns: "auto auto auto",
                                gap: "8mm",
                                justifyContent: "center",
                                alignItems: "center",
                            }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center" }, children: [(0, jsx_runtime_1.jsx)("p", { style: { fontSize: "9px", marginBottom: "2mm", fontWeight: "bold" }, children: "Primera Exploraci\u00F3n" }), (0, jsx_runtime_1.jsx)(BarChartSmall_1.default, { labels: dataPrimera.grados, segments: [...dataPrimera.segments], width: 320, height: 180 })] }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center" }, children: [(0, jsx_runtime_1.jsx)("p", { style: { fontSize: "9px", marginBottom: "2mm", fontWeight: "bold" }, children: "Segunda Exploraci\u00F3n" }), (0, jsx_runtime_1.jsx)(BarChartSmall_1.default, { labels: dataSegunda.grados, segments: [...dataSegunda.segments], width: 320, height: 160 })] }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center" }, children: [(0, jsx_runtime_1.jsx)("p", { style: { fontSize: "9px", marginBottom: "2mm", fontWeight: "bold" }, children: "Tercera Exploraci\u00F3n" }), (0, jsx_runtime_1.jsx)(BarChartSmall_1.default, { labels: dataTercera.grados, segments: [...dataTercera.segments], width: 320, height: 160 })] })] }) })] }, materia));
        }) }));
}
//# sourceMappingURL=SisatSmartCharts.js.map