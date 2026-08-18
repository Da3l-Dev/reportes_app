"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiDoughnutChart = MultiDoughnutChart;
const jsx_runtime_1 = require("react/jsx-runtime");
const DoughnutChar_1 = require("./DoughnutChar");
function MultiDoughnutChart({ camposFormativos, niveles, datos, colores, }) {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            padding: "20px",
        }, children: camposFormativos.map((campo) => {
            // Crear segments para este campo
            const segments = niveles.map((nivel) => ({
                label: nivel,
                color: colores[nivel] || "#ccc",
                values: [datos[campo]?.[nivel] || 0],
            }));
            return ((0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    padding: "15px",
                }, children: [(0, jsx_runtime_1.jsx)("h4", { style: {
                            fontSize: "12px",
                            marginBottom: "10px",
                            textAlign: "center",
                            fontWeight: "bold",
                        }, children: campo }), (0, jsx_runtime_1.jsx)("div", { style: { width: "100%", height: "200px" }, children: (0, jsx_runtime_1.jsx)(DoughnutChar_1.DoughnutChart, { labels: niveles, segments: segments }) })] }, campo));
        }) }));
}
//# sourceMappingURL=DoughnutMultiChar.js.map