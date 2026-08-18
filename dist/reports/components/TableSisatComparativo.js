"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SisatTablaPro;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
/* =========================
   CONFIG
========================= */
const MATERIAS = ["Lectura", "Textos", "Cálculo"];
const COLOR_MAP = {
    RA: "#A71D27",
    ED: "#FACA58",
    NE: "#369445",
};
const COLOR_SECTOR = "#1a4d8c";
const COLOR_ZONA = "#517baf";
/* =========================
   HELPERS
========================= */
function normalize(val) {
    return (val || "").trim().toUpperCase();
}
function matchRegistro(r, e) {
    return (normalize(r.llave) === normalize(e.llave) ||
        normalize(r.cct) === normalize(e.cct));
}
function getNivelMax(item) {
    const niveles = {
        RA: Number(item.porcentaje_ra) || 0,
        ED: Number(item.porcentaje_ed) || 0,
        NE: Number(item.porcentaje_ne) || 0,
    };
    const nivelMax = ["RA", "ED", "NE"].reduce((a, b) => niveles[a] > niveles[b] ? a : b);
    return { nivel: nivelMax, valor: niveles[nivelMax] };
}
function agrupar(data) {
    const mapa = new Map();
    data.forEach((item) => {
        const llave = item.llave ?? item.cct ?? "";
        const cct = item.cct ?? "";
        if (!llave && !cct)
            return;
        const key = `${llave}-${item.grado}-${item.materia}`;
        const { nivel, valor } = getNivelMax(item);
        mapa.set(key, {
            llave,
            cct,
            grado: item.grado,
            materia: item.materia,
            nivel,
            valor,
        });
    });
    return Array.from(mapa.values());
}
/* =========================
   AGRUPAR ORDENADO
========================= */
function agruparPorSectorYZona(escuelas) {
    const sectores = {};
    escuelas.forEach((escuela) => {
        const sectorId = escuela.cct_sector || "SIN SECTOR";
        const zonaId = escuela.cct_zona || "SIN ZONA";
        if (!sectores[sectorId]) {
            sectores[sectorId] = {
                id: sectorId,
                numero: Number(escuela.sector) || 9999,
                nombre: `SECTOR ${escuela.sector || ""}`,
                nombre_sup: escuela.nombre_sup_sector,
                zonas: {},
            };
        }
        if (!sectores[sectorId].zonas[zonaId]) {
            sectores[sectorId].zonas[zonaId] = {
                id: zonaId,
                numero: Number(escuela.zona) || 9999,
                nombre: `ZONA ${escuela.zona || ""}`,
                nombre_sup: escuela.nombre_sup_zona,
                escuelas: [],
            };
        }
        sectores[sectorId].zonas[zonaId].escuelas.push(escuela);
    });
    return Object.values(sectores)
        .map((s) => ({
        ...s,
        zonas: Object.values(s.zonas).sort((a, b) => a.numero - b.numero),
    }))
        .sort((a, b) => a.numero - b.numero);
}
function SisatTablaPro({ primera, segunda, tercera, // 👈 NUEVO
dataEscuelas, }) {
    const dataPrimera = agrupar(primera);
    const dataSegunda = agrupar(segunda);
    const dataTercera = agrupar(tercera); // 👈 NUEVO
    const sectores = agruparPorSectorYZona(dataEscuelas);
    return ((0, jsx_runtime_1.jsxs)("table", { style: table, children: [(0, jsx_runtime_1.jsxs)("thead", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: th, children: "CCT" }), (0, jsx_runtime_1.jsx)("th", { style: th, children: "Escuela" }), (0, jsx_runtime_1.jsx)("th", { style: th, children: "Grado" }), MATERIAS.map((m) => ((0, jsx_runtime_1.jsxs)("th", { colSpan: 3, style: th, children: ["  ", m] }, m)))] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { colSpan: 3 }), MATERIAS.flatMap((m) => [
                                (0, jsx_runtime_1.jsx)("th", { style: thSmall, children: "Exp 1" }, `${m}-1`),
                                (0, jsx_runtime_1.jsx)("th", { style: thSmall, children: "Exp 2" }, `${m}-2`),
                                (0, jsx_runtime_1.jsxs)("th", { style: thSmall, children: ["  ", "Exp 3"] }, `${m}-3`),
                            ])] })] }), (0, jsx_runtime_1.jsx)("tbody", { children: sectores.map((sector) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsxs)("td", { colSpan: 3 + MATERIAS.length * 3, style: { ...tdHeader, background: COLOR_SECTOR }, children: ["  ", sector.nombre, " \u2014 ", sector.nombre_sup || ""] }) }), sector.zonas.map((zona) => {
                            const escuelasConDatos = zona.escuelas.filter((escuela) => dataPrimera.some((r) => matchRegistro(r, escuela)) ||
                                dataSegunda.some((r) => matchRegistro(r, escuela)) ||
                                dataTercera.some((r) => matchRegistro(r, escuela)));
                            if (escuelasConDatos.length === 0)
                                return null;
                            return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsxs)("td", { colSpan: 3 + MATERIAS.length * 3, style: { ...tdHeader, background: COLOR_ZONA }, children: [zona.nombre, " \u2014 ", zona.nombre_sup || ""] }) }), escuelasConDatos.map((escuela) => {
                                        const registros = dataPrimera.filter((r) => matchRegistro(r, escuela));
                                        const grados = Array.from(new Set(registros.map((r) => r.grado))).sort((a, b) => a - b);
                                        return grados.map((grado, i) => ((0, jsx_runtime_1.jsxs)("tr", { children: [i === 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("td", { rowSpan: grados.length, style: tdEscuela, children: escuela.cct }), (0, jsx_runtime_1.jsxs)("td", { rowSpan: grados.length, style: tdEscuela, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontWeight: "bold" }, children: escuela.nombre }), (0, jsx_runtime_1.jsxs)("div", { style: subInfo, children: ["\uD83D\uDD52 ", escuela.turno || "S/T", " | \uD83D\uDCCD", " ", escuela.municipio || "S/M", " | \uD83D\uDDFA\uFE0F", " ", escuela.localidad || "S/L"] })] })] })), (0, jsx_runtime_1.jsxs)("td", { style: td, children: [grado, "\u00B0"] }), MATERIAS.map((m) => {
                                                    const p1 = dataPrimera.find((d) => matchRegistro(d, escuela) &&
                                                        d.grado === grado &&
                                                        d.materia === m);
                                                    const p2 = dataSegunda.find((d) => matchRegistro(d, escuela) &&
                                                        d.grado === grado &&
                                                        d.materia === m);
                                                    const p3 = dataTercera.find(// 👈 NUEVO
                                                    (d) => matchRegistro(d, escuela) &&
                                                        d.grado === grado &&
                                                        d.materia === m);
                                                    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("td", { style: {
                                                                    ...td,
                                                                    background: p1 ? COLOR_MAP[p1.nivel] : "#eee",
                                                                }, children: p1 ? `${p1.valor.toFixed(1)}%` : "N/D" }), (0, jsx_runtime_1.jsx)("td", { style: {
                                                                    ...td,
                                                                    background: p2 ? COLOR_MAP[p2.nivel] : "#eee",
                                                                }, children: p2 ? `${p2.valor.toFixed(1)}%` : "N/D" }), (0, jsx_runtime_1.jsx)("td", { style: {
                                                                    ...td,
                                                                    background: p3 ? COLOR_MAP[p3.nivel] : "#eee",
                                                                }, children: p3 ? `${p3.valor.toFixed(1)}%` : "N/D" })] }, `${m}-${grado}`));
                                                })] }, `${escuela.llave}-${grado}`)));
                                    })] }, zona.id));
                        })] }, sector.id))) })] }));
}
/* =========================
   STYLES
========================= */
const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "9px",
    border: "2px solid #000",
};
const th = {
    padding: "10px",
    border: "1px solid #000",
    background: "#f3f3f3",
};
const thSmall = {
    padding: "6px",
    border: "1px solid #000",
    background: "#fafafa",
    fontSize: "8px",
};
const td = {
    padding: "6px",
    border: "1px solid #ccc",
    textAlign: "center",
};
const tdHeader = {
    padding: "12px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "13px",
};
const tdEscuela = {
    padding: "6px",
    border: "1px solid #ccc",
    textAlign: "center",
    verticalAlign: "middle",
    background: "#f9f9f9",
};
const subInfo = {
    fontSize: "7px",
    marginTop: "3px",
    color: "#333",
};
//# sourceMappingURL=TableSisatComparativo.js.map