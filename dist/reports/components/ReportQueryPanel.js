"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReportQueryPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
function ReportQueryPanel() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen w-screen overflow-x-hidden relative flex items-center justify-center bg-gradient-to-br from-[#4b0f28] via-[#621333] to-[#8a1c3b]", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative w-full max-w-7xl mx-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-14 text-white", children: [(0, jsx_runtime_1.jsx)("div", { id: "loadingOverlay", className: "hidden absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center rounded-3xl z-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-5 text-lg font-semibold tracking-wide", children: "Generando reporte..." })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-14", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl font-bold tracking-wide", children: "Panel de Reportes" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-white/80 text-lg", children: "Genera y visualiza reportes PDF por zona o sector" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10 mb-12", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-semibold mb-3", children: "Tipo de consulta" }), (0, jsx_runtime_1.jsxs)("select", { id: "tipo", className: "w-full bg-white/20 border border-white/30 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-md", children: [(0, jsx_runtime_1.jsx)("option", { value: "zona", className: "text-black", children: "Zona" }), (0, jsx_runtime_1.jsx)("option", { value: "sector", className: "text-black", children: "Sector" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "md:col-span-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-semibold mb-3", children: "Clave CCT" }), (0, jsx_runtime_1.jsx)("input", { id: "cct", type: "text", className: "w-full bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-md", placeholder: "Ej: 13FTS0009B" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-center", children: (0, jsx_runtime_1.jsx)("button", { id: "generarBtn", className: "bg-white text-[#621333] font-bold py-4 px-16 rounded-2xl shadow-xl transition transform hover:scale-105 hover:bg-gray-100", children: "Generar Reporte" }) }), (0, jsx_runtime_1.jsxs)("div", { id: "previewContainer", className: "mt-16 hidden", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-semibold mb-8", children: "Vista previa del PDF" }), (0, jsx_runtime_1.jsx)("div", { className: "rounded-2xl overflow-hidden shadow-2xl border border-white/20", children: (0, jsx_runtime_1.jsx)("iframe", { id: "preview", className: "w-full h-[750px]" }) }), (0, jsx_runtime_1.jsx)("div", { className: "text-right mt-8", children: (0, jsx_runtime_1.jsx)("a", { id: "downloadBtn", className: "inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-xl shadow-lg transition", children: "Descargar PDF" }) })] })] })] }), (0, jsx_runtime_1.jsx)("script", { dangerouslySetInnerHTML: {
                    __html: `
            document.addEventListener("DOMContentLoaded", function () {

              const btn = document.getElementById("generarBtn");
              const overlay = document.getElementById("loadingOverlay");

              btn.addEventListener("click", async function () {

                const tipo = document.getElementById("tipo").value;
                const cctInput = document.getElementById("cct");
                const cct = cctInput.value.toUpperCase();

                if (!cct) {
                  alert("Ingresa un CCT válido");
                  return;
                }

                overlay.classList.remove("hidden");
                btn.disabled = true;

                try {
                  const response = await fetch("/pdf/" + tipo + "/" + cct);

                  if (!response.ok) {
                    throw new Error("Error al obtener PDF");
                  }

                  const blob = await response.blob();
                  const url = URL.createObjectURL(blob);

                  document.getElementById("preview").src = url;

                  const downloadBtn = document.getElementById("downloadBtn");
                  downloadBtn.href = url;
                  downloadBtn.download = "reporte_" + tipo + "_" + cct + ".pdf";

                  document.getElementById("previewContainer")
                    .classList.remove("hidden");

                } catch (err) {
                  alert("No se pudo generar el reporte");
                  console.error(err);
                } finally {
                  overlay.classList.add("hidden");
                  btn.disabled = false;
                }

              });

            });
          `,
                } })] }));
}
//# sourceMappingURL=ReportQueryPanel.js.map