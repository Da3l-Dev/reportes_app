import { useEffect, useState, useCallback } from "react";
import BarChartSmall from "./BarChartSmall";

/* =========================
   TIPOS
========================= */
type Item = {
  campo_formativo: string;
  porcentaje_ra: number;
  porcentaje_ed: number;
  porcentaje_ne: number;
};

const opciones = [
  { label: "Preescolar General", nivel: "PREESCOLAR", subnivel: "GENERAL" },
  { label: "Preescolar Indígena", nivel: "PREESCOLAR", subnivel: "INDÍGENA" },
  { label: "Primaria General", nivel: "PRIMARIA", subnivel: "GENERAL" },
  { label: "Primaria Indígena", nivel: "PRIMARIA", subnivel: "INDÍGENA" },
  { label: "Secundaria General", nivel: "SECUNDARIA", subnivel: "GENERAL" },
  { label: "Secundaria Técnica", nivel: "SECUNDARIA", subnivel: "TÉCNICA" },
  { label: "Telesecundaria", nivel: "SECUNDARIA", subnivel: "TELESECUNDARIA" },
] as const;

const BASE_URL = "http://localhost:5000";
const MATERIAS = ["Cálculo", "Lectura", "Textos"];

export default function DashboardExploracion() {
  const [primera, setPrimera] = useState<Item[]>([]);
  const [segunda, setSegunda] = useState<Item[]>([]);
  const [indexOpcion, setIndexOpcion] = useState<number>(4);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = useCallback(async (idx: number) => {
    const opcion = opciones[idx];
    if (!opcion) return;

    setLoading(true);
    setErrorStatus(null);
    setPrimera([]);
    setSegunda([]);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const n = encodeURIComponent(opcion.nivel);
      const s = encodeURIComponent(opcion.subnivel);

      const [res1, res2] = await Promise.all([
        fetch(`${BASE_URL}/exploracion-sisat/primera/${n}/${s}`, {
          signal: controller.signal,
        }),
        fetch(`${BASE_URL}/exploracion-sisat/segunda/${n}/${s}`, {
          signal: controller.signal,
        }),
      ]);

      clearTimeout(timeoutId);

      if (!res1.ok || !res2.ok) {
        throw new Error(`HTTP ${res1.status} / ${res2.status}`);
      }

      const [json1, json2] = await Promise.all([res1.json(), res2.json()]);

      const data1: Item[] = Array.isArray(json1)
        ? json1
        : (json1?.data ?? json1?.results ?? []);
      const data2: Item[] = Array.isArray(json2)
        ? json2
        : (json2?.data ?? json2?.results ?? []);

      setPrimera(data1);
      setSegunda(data2);

      if (data1.length === 0 && data2.length === 0) {
        setErrorStatus("No hay datos para esta selección");
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      if (err.name === "AbortError") {
        setErrorStatus("Timeout: el servidor no respondió en 10 segundos");
      } else if (err.message.includes("Failed to fetch")) {
        setErrorStatus(
          "No se pudo conectar al servidor. Verifica que localhost:5000 esté corriendo y tenga CORS habilitado.",
        );
      } else {
        setErrorStatus(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(indexOpcion);
  }, [indexOpcion, retryCount, fetchData]);

  const agrupar = (data: Item[], materia: string) => {
    if (!data || data.length === 0) return { ra: 0, ed: 0, ne: 0 };

    const norm = (s: string) =>
      s
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    const filtrados = data.filter(
      (d) => norm(d.campo_formativo) === norm(materia),
    );
    if (filtrados.length === 0) return { ra: 0, ed: 0, ne: 0 };

    const suma = filtrados.reduce(
      (acc, curr) => ({
        ra: acc.ra + (Number(curr.porcentaje_ra) || 0),
        ed: acc.ed + (Number(curr.porcentaje_ed) || 0),
        ne: acc.ne + (Number(curr.porcentaje_ne) || 0),
      }),
      { ra: 0, ed: 0, ne: 0 },
    );

    const count = filtrados.length;
    return {
      ra: Number((suma.ra / count).toFixed(1)),
      ed: Number((suma.ed / count).toFixed(1)),
      ne: Number((suma.ne / count).toFixed(1)),
    };
  };

  const opcionActual = opciones[indexOpcion] ?? opciones[0];

  return (
    <div className="w-screen h-screen bg-[#4b0f28] flex flex-col p-4 text-white overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-black/20 p-4 rounded-xl">
        <div>
          <h1 className="text-2xl font-bold">D3 Labs - SISAT</h1>
          <p className="text-xs opacity-60">
            {loading
              ? "⏳ Cargando datos..."
              : errorStatus
                ? "❌ Error"
                : `✅ ${primera.length + segunda.length} registros cargados`}
          </p>
          <p className="text-xs opacity-40 mt-1">
            {opcionActual.nivel} — {opcionActual.subnivel}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setRetryCount((c) => c + 1)}
            disabled={loading}
            className="bg-white/20 hover:bg-white/30 disabled:opacity-40 text-white px-3 py-2 rounded-lg text-sm font-bold transition"
          >
            🔄 Reintentar
          </button>
          <select
            className="bg-white text-black p-2 rounded-lg font-bold"
            value={indexOpcion}
            onChange={(e) => setIndexOpcion(Number(e.target.value))}
            disabled={loading}
          >
            {opciones.map((o, i) => (
              <option key={i} value={i}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Error banner */}
      {errorStatus && (
        <div className="bg-red-600/80 text-white p-3 rounded-lg mb-4 text-center text-sm font-semibold">
          ⚠️ {errorStatus}
        </div>
      )}

      {/* Loading overlay */}
      {loading && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-4 animate-pulse">📊</div>
            <p className="text-white/70 font-bold">
              Cargando datos de {opcionActual.label}...
            </p>
          </div>
        </div>
      )}

      {/* Charts grid */}
      {!loading && (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          {MATERIAS.map((materia) => {
            const p1 = agrupar(primera, materia);
            const p2 = agrupar(segunda, materia);

            return (
              <div
                key={materia}
                className="bg-white p-4 rounded-2xl flex flex-col justify-between shadow-2xl"
              >
                <h2 className="text-black text-center font-black text-xl mb-4 uppercase">
                  {materia}
                </h2>

                <div className="space-y-6">
                  {/* Primera exploración */}
                  <div className="flex flex-col items-center">
                    <span className="text-black/40 text-[10px] font-bold mb-1">
                      PRIMERA EXPLORACIÓN
                    </span>
                    {/* <BarChartSmall
                      width={280}
                      height={130}
                      labels={[""]}
                      segments={[
                        { label: "RA", color: "#22c55e", values: [p1.ra] },
                        { label: "ED", color: "#eab308", values: [p1.ed] },
                        { label: "NE", color: "#ef4444", values: [p1.ne] },
                      ]}
                    /> */}
                    <div className="text-black text-xs mt-2 font-bold">
                      RA: {p1.ra}% &nbsp;|&nbsp; ED: {p1.ed}% &nbsp;|&nbsp; NE:{" "}
                      {p1.ne}%
                    </div>
                  </div>

                  {/* Segunda exploración */}
                  <div className="flex flex-col items-center">
                    <span className="text-black/40 text-[10px] font-bold mb-1">
                      SEGUNDA EXPLORACIÓN
                    </span>
                    {/* <BarChartSmall
                      width={280}
                      height={130}
                      labels={[""]}
                      segments={[
                        { label: "RA", color: "#22c55e", values: [p2.ra] },
                        { label: "ED", color: "#eab308", values: [p2.ed] },
                        { label: "NE", color: "#ef4444", values: [p2.ne] },
                      ]}
                    /> */}
                    <div className="text-black text-xs mt-2 font-bold">
                      RA: {p2.ra}% &nbsp;|&nbsp; ED: {p2.ed}% &nbsp;|&nbsp; NE:{" "}
                      {p2.ne}%
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
