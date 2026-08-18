"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BarChartSmall;
const jsx_runtime_1 = require("react/jsx-runtime");
let chartCounter = 0;
function BarChartSmall({ labels, segments, width = 450, height = 260, }) {
    chartCounter += 1;
    const chartId = `chart-${chartCounter}`;
    /* =========================
       RESOLUCIÓN REAL
    ========================= */
    const DPR = 8;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("canvas", { id: chartId, width: width * DPR, height: height * DPR, style: {
                    width: `${width}px`,
                    height: `${height}px`,
                } }), (0, jsx_runtime_1.jsx)("script", { dangerouslySetInnerHTML: {
                    __html: `
(function () {
  if (typeof Chart === "undefined") return;

  const canvas = document.getElementById("${chartId}");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Pasar las dimensiones al script
  const chartWidth = ${width};
  const chartHeight = ${height};
  const DPR = ${DPR};

  // 🔥 Escala real de alta densidad
  ctx.scale(DPR, DPR);
  ctx.imageSmoothingEnabled = false;

  // =========================
  // FUNCIÓN: CORTAR A 1 DECIMAL (SIN REDONDEAR)
  // =========================
  function cutOneDecimal(value) {
    return (Math.floor(Number(value) * 10) / 10).toFixed(1);
  }

  // =========================
  // PLUGIN: ETIQUETAS %
  // =========================
  const percentageLabelPlugin = {
    id: "percentageLabelPlugin",
    afterDatasetsDraw(chart) {
      const { ctx } = chart;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Ajustar tamaño de fuente basado en la altura
      const fontSize = Math.max(7, Math.min(10, Math.floor(chartHeight / 25)));
      ctx.font = "bold " + (fontSize * DPR) + "px Arial";

      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);

        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];
          if (!value || value <= 0) return;

          // si la barra es muy pequeña, no pintamos texto
          if (bar.height < 10) return;

          const x = bar.x;
          const y = bar.y + bar.height / 2;

          // contraste automático
          ctx.fillStyle =
            bar.height > 18 ? "#000000" : "#111827";

          ctx.fillText(cutOneDecimal(value) + "%", x, y);
        });
      });

      ctx.restore();
    }
  };

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ${JSON.stringify(labels)},
      datasets: ${JSON.stringify(segments.map((s) => ({
                        label: s.label,
                        data: s.values,
                        backgroundColor: s.color,
                        borderRadius: 3,
                        borderSkipped: false,
                        barPercentage: 0.9,
                        categoryPercentage: 0.8,
                    })))}
    },
    options: {
      responsive: false,
      animation: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: Math.max(60, Math.min(100, Math.floor(chartWidth / 8))),
            boxHeight: Math.max(60, Math.min(100, Math.floor(chartWidth / 8))),
            color: "#111827",
            font: {
              size: Math.max(8, Math.min(12, Math.floor(chartHeight / 25))) * DPR,
              weight: "600"
            }
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function(ctx) {
              return ctx.dataset.label + ": " + cutOneDecimal(ctx.raw) + "%";
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          ticks: {
            color: "#111827",
            font: {
              size: Math.max(7, Math.min(10, Math.floor(chartHeight / 30))) * DPR,
              weight: "600"
            }
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 100,
          grid: {
            color: "#444444",
            lineWidth: 1
          },
          ticks: {
            stepSize: 20,
            color: "#111827",
            callback: function(value) {
              return cutOneDecimal(value) + "%";
            },
            font: {
              size: Math.max(7, Math.min(10, Math.floor(chartHeight / 30))) * DPR,
              weight: "600"
            }
          }
        }
      }
    },
    plugins: [percentageLabelPlugin]
  });
})();
          `,
                } })] }));
}
//# sourceMappingURL=BarChartSmall.js.map