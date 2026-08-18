"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardExploracion;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const opciones = [
    { label: "Preescolar General", nivel: "PREESCOLAR", subnivel: "GENERAL" },
    { label: "Preescolar Indígena", nivel: "PREESCOLAR", subnivel: "INDÍGENA" },
    { label: "Primaria General", nivel: "PRIMARIA", subnivel: "GENERAL" },
    { label: "Primaria Indígena", nivel: "PRIMARIA", subnivel: "INDÍGENA" },
    { label: "Secundaria General", nivel: "SECUNDARIA", subnivel: "GENERAL" },
    { label: "Secundaria Técnica", nivel: "SECUNDARIA", subnivel: "TÉCNICA" },
    { label: "Telesecundaria", nivel: "SECUNDARIA", subnivel: "TELESECUNDARIA" },
];
const BASE_URL = "http://localhost:5000";
const MATERIAS = ["Cálculo", "Lectura", "Textos"];
function DashboardExploracion() {
    const [primera, setPrimera] = (0, react_1.useState)([]);
    const [segunda, setSegunda] = (0, react_1.useState)([]);
    const [indexOpcion, setIndexOpcion] = (0, react_1.useState)(4);
    const [errorStatus, setErrorStatus] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [retryCount, setRetryCount] = (0, react_1.useState)(0);
    const fetchData = (0, react_1.useCallback)(async (idx) => {
        const opcion = opciones[idx];
        if (!opcion)
            return;
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
            const data1 = Array.isArray(json1)
                ? json1
                : (json1?.data ?? json1?.results ?? []);
            const data2 = Array.isArray(json2)
                ? json2
                : (json2?.data ?? json2?.results ?? []);
            setPrimera(data1);
            setSegunda(data2);
            if (data1.length === 0 && data2.length === 0) {
                setErrorStatus("No hay datos para esta selección");
            }
        }
        catch (err) {
            clearTimeout(timeoutId);
            if (err.name === "AbortError") {
                setErrorStatus("Timeout: el servidor no respondió en 10 segundos");
            }
            else if (err.message.includes("Failed to fetch")) {
                setErrorStatus("No se pudo conectar al servidor. Verifica que localhost:5000 esté corriendo y tenga CORS habilitado.");
            }
            else {
                setErrorStatus(err.message);
            }
        }
        finally {
            setLoading(false);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        fetchData(indexOpcion);
    }, [indexOpcion, retryCount, fetchData]);
    const agrupar = (data, materia) => {
        if (!data || data.length === 0)
            return { ra: 0, ed: 0, ne: 0 };
        const norm = (s) => s
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
        const filtrados = data.filter((d) => norm(d.campo_formativo) === norm(materia));
        if (filtrados.length === 0)
            return { ra: 0, ed: 0, ne: 0 };
        const suma = filtrados.reduce((acc, curr) => ({
            ra: acc.ra + (Number(curr.porcentaje_ra) || 0),
            ed: acc.ed + (Number(curr.porcentaje_ed) || 0),
            ne: acc.ne + (Number(curr.porcentaje_ne) || 0),
        }), { ra: 0, ed: 0, ne: 0 });
        const count = filtrados.length;
        return {
            ra: Number((suma.ra / count).toFixed(1)),
            ed: Number((suma.ed / count).toFixed(1)),
            ne: Number((suma.ne / count).toFixed(1)),
        };
    };
    const opcionActual = opciones[indexOpcion] ?? opciones[0];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-screen h-screen bg-[#4b0f28] flex flex-col p-4 text-white overflow-hidden", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center mb-6 bg-black/20 p-4 rounded-xl", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold", children: "D3 Labs - SISAT" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs opacity-60", children: loading
                                    ? "⏳ Cargando datos..."
                                    : errorStatus
                                        ? "❌ Error"
                                        : `✅ ${primera.length + segunda.length} registros cargados` }), (0, jsx_runtime_1.jsxs)("p", { className: "text-xs opacity-40 mt-1", children: [opcionActual.nivel, " \u2014 ", opcionActual.subnivel] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setRetryCount((c) => c + 1), disabled: loading, className: "bg-white/20 hover:bg-white/30 disabled:opacity-40 text-white px-3 py-2 rounded-lg text-sm font-bold transition", children: "\uD83D\uDD04 Reintentar" }), (0, jsx_runtime_1.jsx)("select", { className: "bg-white text-black p-2 rounded-lg font-bold", value: indexOpcion, onChange: (e) => setIndexOpcion(Number(e.target.value)), disabled: loading, children: opciones.map((o, i) => ((0, jsx_runtime_1.jsx)("option", { value: i, children: o.label }, i))) })] })] }), errorStatus && ((0, jsx_runtime_1.jsxs)("div", { className: "bg-red-600/80 text-white p-3 rounded-lg mb-4 text-center text-sm font-semibold", children: ["\u26A0\uFE0F ", errorStatus] })), loading && ((0, jsx_runtime_1.jsx)("div", { className: "flex-1 flex items-center justify-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-5xl mb-4 animate-pulse", children: "\uD83D\uDCCA" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-white/70 font-bold", children: ["Cargando datos de ", opcionActual.label, "..."] })] }) })), !loading && ((0, jsx_runtime_1.jsx)("div", { className: "flex-1 grid grid-cols-1 md:grid-cols-3 gap-4", children: MATERIAS.map((materia) => {
                    const p1 = agrupar(primera, materia);
                    const p2 = agrupar(segunda, materia);
                    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-4 rounded-2xl flex flex-col justify-between shadow-2xl", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-black text-center font-black text-xl mb-4 uppercase", children: materia }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-black/40 text-[10px] font-bold mb-1", children: "PRIMERA EXPLORACI\u00D3N" }), (0, jsx_runtime_1.jsxs)("div", { className: "text-black text-xs mt-2 font-bold", children: ["RA: ", p1.ra, "% \u00A0|\u00A0 ED: ", p1.ed, "% \u00A0|\u00A0 NE:", " ", p1.ne, "%"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-black/40 text-[10px] font-bold mb-1", children: "SEGUNDA EXPLORACI\u00D3N" }), (0, jsx_runtime_1.jsxs)("div", { className: "text-black text-xs mt-2 font-bold", children: ["RA: ", p2.ra, "% \u00A0|\u00A0 ED: ", p2.ed, "% \u00A0|\u00A0 NE:", " ", p2.ne, "%"] })] })] })] }, materia));
                }) }))] }));
}
//# sourceMappingURL=DashboardExploracion.js.map