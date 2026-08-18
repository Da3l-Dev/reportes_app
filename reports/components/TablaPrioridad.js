"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TablaPrioridad;
const jsx_runtime_1 = require("react/jsx-runtime");
const COLOR_MAP = {
    AD: "#369445",
    EPD: "#FACA58",
    RA: "#F38C2D",
    SE: "#A71D27",
};
function TablaPrioridad({ data = [] }) {
    // =====================================================
    // VALIDACIÓN EXTRA
    // =====================================================
    const alumnosSeguros = Array.isArray(data) ? data : [];
    // =====================================================
    // CONTAR NIVELES BAJOS
    // =====================================================
    const getPeso = (alumno) => {
        const niveles = [
            alumno.NIVEL_ETICA || alumno.Nivel_Etica,
            alumno.NIVEL_HUMANO || alumno.Nivel_Humano,
            alumno.NIVEL_LENGUAJES || alumno.Nivel_Lenguajes,
            alumno.NIVEL_SABERES || alumno.Nivel_Saberes,
        ];
        return niveles.filter((n) => n === "RA" || n === "SE").length;
    };
    // =====================================================
    // CLASIFICAR
    // =====================================================
    const clasificar = (alumno) => {
        const bajos = getPeso(alumno);
        if (bajos === 4)
            return "MUY ALTA";
        if (bajos === 3)
            return "ALTA";
        if (bajos >= 1)
            return "MEDIA";
        return null;
    };
    // =====================================================
    // AGRUPAR
    // =====================================================
    const grupos = {
        "MUY ALTA": [],
        ALTA: [],
        MEDIA: [],
    };
    alumnosSeguros.forEach((alumno) => {
        try {
            const prioridad = clasificar(alumno);
            if (prioridad) {
                grupos[prioridad].push(alumno);
            }
        }
        catch (error) {
            console.error("❌ Error procesando alumno:", alumno);
        }
    });
    // =====================================================
    // ORDENAR
    // =====================================================
    Object.keys(grupos).forEach((key) => {
        grupos[key].sort((a, b) => {
            return getPeso(b) - getPeso(a);
        });
    });
    // =====================================================
    // TOTAL
    // =====================================================
    const total = grupos["MUY ALTA"].length + grupos["ALTA"].length + grupos["MEDIA"].length;
    if (total === 0)
        return null;
    // =====================================================
    // COLOR TEXTO
    // =====================================================
    const getTextColor = (bg) => {
        return bg === "#FACA58" ? "#000" : "#fff";
    };
    // =====================================================
    // RENDER GRUPO
    // =====================================================
    const renderGrupo = (titulo, alumnos, color) => {
        if (!Array.isArray(alumnos))
            return null;
        if (alumnos.length === 0)
            return null;
        return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "font-bold text-center py-2 rounded-lg mb-2", style: {
                        backgroundColor: color,
                        color: "#fff",
                    }, children: [titulo, " (", alumnos.length, ")"] }), (0, jsx_runtime_1.jsxs)("table", { className: "w-full text-xs border border-gray-300 rounded-lg overflow-hidden", children: [(0, jsx_runtime_1.jsx)("thead", { className: "bg-gray-100", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "p-2 border", children: "Nombre" }), (0, jsx_runtime_1.jsx)("th", { className: "p-2 border", children: "Grado" }), (0, jsx_runtime_1.jsx)("th", { className: "p-2 border", children: "Grupo" }), (0, jsx_runtime_1.jsx)("th", { className: "p-2 border", children: "\u00C9tica" }), (0, jsx_runtime_1.jsx)("th", { className: "p-2 border", children: "Humano" }), (0, jsx_runtime_1.jsx)("th", { className: "p-2 border", children: "Lenguajes" }), (0, jsx_runtime_1.jsx)("th", { className: "p-2 border", children: "Saberes" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: alumnos.map((alumno, i) => {
                                try {
                                    return ((0, jsx_runtime_1.jsxs)("tr", { className: "text-center even:bg-gray-50", children: [(0, jsx_runtime_1.jsx)("td", { className: "p-2 border text-left", children: alumno.NOMALUMNO || alumno.Nombre_Alumno || "SIN NOMBRE" }), (0, jsx_runtime_1.jsx)("td", { className: "p-2 border", children: alumno.GRADO || "-" }), (0, jsx_runtime_1.jsx)("td", { className: "p-2 border", children: alumno.GRUPO || "-" }), [
                                                alumno.NIVEL_ETICA || alumno.Nivel_Etica,
                                                alumno.NIVEL_HUMANO || alumno.Nivel_Humano,
                                                alumno.NIVEL_LENGUAJES || alumno.Nivel_Lenguajes,
                                                alumno.NIVEL_SABERES || alumno.Nivel_Saberes,
                                            ].map((nivel, idx) => {
                                                const bg = nivel && COLOR_MAP[nivel] ? COLOR_MAP[nivel] : "#999";
                                                const textColor = getTextColor(bg);
                                                return ((0, jsx_runtime_1.jsx)("td", { className: "p-2 border font-bold", style: {
                                                        backgroundColor: bg,
                                                        color: textColor,
                                                    }, children: nivel || "-" }, idx));
                                            })] }, i));
                                }
                                catch (error) {
                                    console.error("❌ Error renderizando alumno:", alumno);
                                    return null;
                                }
                            }) })] })] }));
    };
    // =====================================================
    // RENDER PRINCIPAL
    // =====================================================
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-center font-bold text-lg mb-4", children: "Alumnos que requieren atenci\u00F3n prioritaria" }), renderGrupo("🔴 PRIORIDAD MUY ALTA", grupos["MUY ALTA"], "#A71D27"), renderGrupo("🟠 PRIORIDAD ALTA", grupos["ALTA"], "#F38C2D"), renderGrupo("🟡 PRIORIDAD MEDIA", grupos["MEDIA"], "#FACA58")] }));
}
//# sourceMappingURL=TablaPrioridad.js.map