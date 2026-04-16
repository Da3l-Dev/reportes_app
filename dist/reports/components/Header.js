"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
const jsx_runtime_1 = require("react/jsx-runtime");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getImageBase64(relativePath) {
    const absolutePath = path_1.default.resolve(process.cwd(), relativePath);
    const buffer = fs_1.default.readFileSync(absolutePath);
    return buffer.toString("base64");
}
const logoSephBase64 = getImageBase64("src/assets/img/logo_seph.png");
const logoIheBase64 = getImageBase64("src/assets/img/logo_ihe.png");
/* =========================
   FORMATEADOR DE NÚMEROS
========================= */
function formatNumber(value) {
    return Number(value || 0).toLocaleString("en-US");
}
function Header({ data, viewText = true, isZona = true, isOpEdu = false, title, children, // 👈 Agregamos children
 }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "header_report", children: [(0, jsx_runtime_1.jsxs)("div", { className: "content_logos", children: [(0, jsx_runtime_1.jsx)("img", { className: "image_logo", src: `data:image/png;base64,${logoSephBase64}`, alt: "Logo SEPH", style: { height: "65px", width: "auto" } }), (0, jsx_runtime_1.jsx)("h1", { className: "title_pdf", children: "EJERCICIOS INTEGRADORES DEL APRENDIZAJE 25-26" })] }), (0, jsx_runtime_1.jsx)("h3", { children: title || "Reporte" }), isOpEdu ? ((0, jsx_runtime_1.jsxs)("h4", { children: [data?.opcion_educativa || "", " ", data?.nivel || "", " ", data?.subnivel || ""] })) : ((0, jsx_runtime_1.jsx)("h4", { children: data?.opcion_educativa || "" })), isOpEdu ? ((0, jsx_runtime_1.jsx)("div", { className: "content_data_text", children: children })) : (
            /* Para zona/sector: mostramos los datos normales */
            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "content_data_text", children: [data?.nombre_sup_zona && isZona && ((0, jsx_runtime_1.jsxs)("p", { children: ["JEFE DE ZONA: ", data.nombre_sup_zona] })), data?.nombre_sup_sector && ((0, jsx_runtime_1.jsxs)("p", { children: ["JEFE DE SECTOR: ", (0, jsx_runtime_1.jsx)("strong", { children: data.nombre_sup_sector })] }))] }), viewText && ((0, jsx_runtime_1.jsxs)("div", { className: "content_data_text", children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Estudiantes participantes:", " ", formatNumber(data?.estudiantes_participantes)] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Escuelas participantes:", " ", formatNumber(data?.escuelas_participantes)] })] }))] }))] }));
}
//# sourceMappingURL=Header.js.map