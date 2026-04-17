export default function ReportQueryPanel() {
  return (
    <>
      <div className="min-h-screen w-screen overflow-y-auto overflow-x-hidden flex items-start justify-center bg-gradient-to-br from-[#4b0f28] via-[#621333] to-[#8a1c3b] py-10">
        <div className="w-full max-w-5xl px-4 sm:px-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 text-white relative">
            {/* LOADING */}
            <div
              id="loadingOverlay"
              className="hidden absolute inset-0 bg-black/40 flex items-center justify-center rounded-3xl z-50"
            >
              <p className="text-lg font-semibold">Generando...</p>
            </div>

            {/* HEADER */}
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Reporte Ejercicio Integreadores del aprendizaje 2025 - 2026
              </h1>
              <p className="text-white/70 mt-2 text-sm sm:text-base">
                Genera reportes PDF por zona, sector, escuela u opción educativa
              </p>
            </div>

            {/* FORM */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block mb-2 text-sm">Tipo de consulta</label>
                <select
                  id="tipo"
                  className="w-full text-black p-3 rounded-xl bg-white"
                >
                  <option value="zona">Zona</option>
                  <option value="sector">Sector</option>
                  <option value="escuela">Escuela</option>
                  <option value="opcion">Opción educativa</option>
                </select>
              </div>

              <div id="cctContainer" className="md:col-span-2">
                <label className="block mb-2 text-sm">Clave CCT</label>
                <input
                  id="cct"
                  className="w-full p-3 text-black rounded-xl bg-white"
                  placeholder="Ej: 13FTS0009B"
                />
              </div>

              <div id="opcionContainer" className="md:col-span-2 hidden">
                <label className="block mb-2 text-sm">Opción educativa</label>
                <select
                  id="opcion"
                  className="w-full text-black p-3 rounded-xl bg-white"
                >
                  <option value="">Selecciona</option>
                  <option>Preescolar General</option>
                  <option>Preescolar Indígena</option>
                  <option>Primaria General</option>
                  <option>Primaria Indígena</option>
                  <option>Secundaria General</option>
                  <option>Secundaria Técnica</option>
                  <option>Secundaria Telesecundaria</option>
                </select>
              </div>
            </div>

            {/* BOTÓN */}
            <div className="text-center">
              <button
                id="generarBtn"
                className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Generar Reporte
              </button>
            </div>

            {/* PREVIEW */}
            <div id="previewContainer" className="mt-8 hidden">
              <iframe
                id="preview"
                className="w-full h-[400px] sm:h-[600px] rounded-xl"
              />
              <a
                id="downloadBtn"
                className="block mt-4 bg-green-500 p-3 text-center rounded-xl font-semibold"
              >
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SCRIPT */}
      <script
        dangerouslySetInnerHTML={{
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

              // 🔥 DETECTAR ENTORNO
              const isLocalhost =
                window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1";

              const BASE_URL = isLocalhost
                ? "http://localhost:5000"
                : "http://52.23.173.26:5000";

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
        }}
      />
    </>
  );
}
