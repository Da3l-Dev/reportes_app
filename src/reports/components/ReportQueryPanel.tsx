export default function ReportQueryPanel() {
  return (
    <>
      <div className="min-h-screen w-screen overflow-x-hidden relative flex items-center justify-center bg-gradient-to-br from-[#4b0f28] via-[#621333] to-[#8a1c3b]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

        <div className="relative w-full max-w-7xl mx-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-14 text-white">
          <div
            id="loadingOverlay"
            className="hidden absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center rounded-3xl z-50"
          >
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-5 text-lg font-semibold tracking-wide">
                Generando reporte...
              </p>
            </div>
          </div>

          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold tracking-wide">
              Panel de Reportes
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Genera y visualiza reportes PDF por zona o sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <label className="block text-sm font-semibold mb-3">
                Tipo de consulta
              </label>
              <select
                id="tipo"
                className="w-full bg-white/20 border border-white/30 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-md"
              >
                <option value="zona" className="text-black">
                  Zona
                </option>
                <option value="sector" className="text-black">
                  Sector
                </option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-3">
                Clave CCT
              </label>
              <input
                id="cct"
                type="text"
                className="w-full bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-md"
                placeholder="Ej: 13FTS0009B"
              />
            </div>
          </div>

          {/* Botón */}
          <div className="text-center">
            <button
              id="generarBtn"
              className="bg-white text-[#621333] font-bold py-4 px-16 rounded-2xl shadow-xl transition transform hover:scale-105 hover:bg-gray-100"
            >
              Generar Reporte
            </button>
          </div>

          {/* Preview */}
          <div id="previewContainer" className="mt-16 hidden">
            <h2 className="text-3xl font-semibold mb-8">
              Vista previa del PDF
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <iframe id="preview" className="w-full h-[750px]" />
            </div>

            <div className="text-right mt-8">
              <a
                id="downloadBtn"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-xl shadow-lg transition"
              >
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Script */}
      <script
        dangerouslySetInnerHTML={{
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
        }}
      />
    </>
  );
}
