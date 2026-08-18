"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReportQueryPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
function ReportQueryPanel() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "min-h-screen w-screen overflow-y-auto overflow-x-hidden flex items-start justify-center bg-gradient-to-br from-[#4b0f28] via-[#621333] to-[#8a1c3b] py-10", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-5xl px-4 sm:px-6", children: (0, jsx_runtime_1.jsxs)("div", { className: "backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 text-white relative", children: [(0, jsx_runtime_1.jsx)("div", { id: "loadingOverlay", className: "hidden absolute inset-0 bg-black/40 flex items-center justify-center rounded-3xl z-50", children: (0, jsx_runtime_1.jsx)("p", { className: "text-lg font-semibold", children: "Generando..." }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-8 sm:mb-10", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl sm:text-3xl md:text-4xl font-bold leading-tight", children: "Reporte Ejercicio Integreadores del aprendizaje 2025 - 2026" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white/70 mt-3 text-sm sm:text-base", children: "Genera reportes PDF por zona, sector, escuela u opci\u00F3n educativa" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2 text-sm", children: "Tipo de consulta" }), (0, jsx_runtime_1.jsxs)("select", { id: "tipo", className: "w-full text-black p-3 rounded-xl bg-white", children: [(0, jsx_runtime_1.jsx)("option", { value: "zona", children: "Zona" }), (0, jsx_runtime_1.jsx)("option", { value: "sector", children: "Sector" }), (0, jsx_runtime_1.jsx)("option", { value: "escuela", children: "Escuela" }), (0, jsx_runtime_1.jsx)("option", { value: "opcion", children: "Opci\u00F3n educativa" })] })] }), (0, jsx_runtime_1.jsxs)("div", { id: "cctContainer", className: "md:col-span-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2 text-sm", children: "Clave CCT" }), (0, jsx_runtime_1.jsx)("input", { id: "cct", className: "w-full p-3 text-black rounded-xl bg-white", placeholder: "Ej: 13FTS0009B" })] }), (0, jsx_runtime_1.jsxs)("div", { id: "opcionContainer", className: "md:col-span-2 hidden", children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2 text-sm", children: "Opci\u00F3n educativa" }), (0, jsx_runtime_1.jsxs)("select", { id: "opcion", className: "w-full text-black p-3 rounded-xl bg-white", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Selecciona" }), (0, jsx_runtime_1.jsx)("option", { children: "Preescolar General" }), (0, jsx_runtime_1.jsx)("option", { children: "Preescolar Ind\u00EDgena" }), (0, jsx_runtime_1.jsx)("option", { children: "Primaria General" }), (0, jsx_runtime_1.jsx)("option", { children: "Primaria Ind\u00EDgena" }), (0, jsx_runtime_1.jsx)("option", { children: "Secundaria General" }), (0, jsx_runtime_1.jsx)("option", { children: "Secundaria T\u00E9cnica" }), (0, jsx_runtime_1.jsx)("option", { children: "Secundaria Telesecundaria" })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-center", children: (0, jsx_runtime_1.jsx)("button", { id: "generarBtn", className: "w-full sm:w-auto bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition", children: "Generar Reporte" }) }), (0, jsx_runtime_1.jsxs)("div", { id: "previewContainer", className: "mt-8 hidden", children: [(0, jsx_runtime_1.jsx)("iframe", { id: "preview", className: "w-full h-[400px] sm:h-[600px] rounded-xl" }), (0, jsx_runtime_1.jsx)("a", { id: "downloadBtn", className: "block mt-4 bg-green-500 p-3 text-center rounded-xl font-semibold", children: "Descargar PDF" })] })] }) }) }), (0, jsx_runtime_1.jsx)("script", { dangerouslySetInnerHTML: {
                    __html: `
            document.addEventListener("DOMContentLoaded", function () {

              const tipo = document.getElementById("tipo");
              const cctContainer = document.getElementById("cctContainer");
              const opcionContainer = document.getElementById("opcionContainer");

              tipo.addEventListener("change", function () {
                if (tipo.value === "opcion") {
                  cctContainer.style.display = "none";
                  opcionContainer.style.display = "block";
                } else {
                  cctContainer.style.display = "block";
                  opcionContainer.style.display = "none";
                }
              });

              const btn = document.getElementById("generarBtn");
              const overlay = document.getElementById("loadingOverlay");

              const isLocalhost =
                window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1";

              const BASE_URL = isLocalhost
                ? "http://localhost:5000"
                : "http://10.1.30.24:5000";

              btn.addEventListener("click", async function () {

                let url = "";
                const tipoValue = tipo.value;

                try {

                  if (tipoValue === "opcion") {

                    const opcion = document.getElementById("opcion").value;

                    if (!opcion) {
                      alert("Selecciona una opción educativa");
                      return;
                    }

                    const mapa = {
                      "Preescolar General": "Preescolar/General",
                      "Preescolar Indígena": "Preescolar/Indígena",
                      "Primaria General": "Primaria/General",
                      "Primaria Indígena": "Primaria/Indígena",
                      "Secundaria General": "Secundaria/General",
                      "Secundaria Técnica": "Secundaria/Técnica",
                      "Secundaria Telesecundaria": "Secundaria/Telesecundaria"
                    };

                    url = BASE_URL + "/opEdu/pdf/" + mapa[opcion];

                  } else {

                    const cct = document.getElementById("cct").value.toUpperCase();

                    if (!cct) {
                      alert("Ingresa un CCT válido");
                      return;
                    }

                    if (tipoValue === "zona") {
                      url = BASE_URL + "/pdf/zona/" + cct;
                    }

                    if (tipoValue === "sector") {
                      url = BASE_URL + "/pdf/sector/" + cct;
                    }

                    if (tipoValue === "escuela") {
                      url = BASE_URL + "/pdf/escuela/" + cct;
                    }

                  }

                  overlay.classList.remove("hidden");

                  const response = await fetch(url);

                  if (!response.ok) throw new Error();

                  const blob = await response.blob();
                  const fileUrl = URL.createObjectURL(blob);

                  document.getElementById("preview").src = fileUrl;
                  document.getElementById("downloadBtn").href = fileUrl;
                  document.getElementById("previewContainer").classList.remove("hidden");

                } catch (err) {
                  console.error(err);
                  alert("Error al generar");
                } finally {
                  overlay.classList.add("hidden");
                }

              });

            });
          `,
                } })] }));
}
//# sourceMappingURL=ReportQueryPanel.js.map