"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoughnutChart = DoughnutChart;
const jsx_runtime_1 = require("react/jsx-runtime");
let chartCounter = 0;
function DoughnutChart({ labels, segments }) {
    chartCounter += 1;
    const chartId = `doughnut-${chartCounter}`;
    const DPR = 4; // 🔥 alta calidad para PDF
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("canvas", { id: chartId }), (0, jsx_runtime_1.jsx)("script", { dangerouslySetInnerHTML: {
                    __html: `
(function () {
  if (typeof Chart === "undefined") return;

  const canvas = document.getElementById("${chartId}");
  if (!canvas) return;

  const container = canvas.parentElement;
  if (!container) return;

  // =========================
  // TAMAÑO REAL DEL CONTENEDOR
  // =========================
  const width = container.clientWidth;
  const height = Math.min(width, 420);

  // =========================
  // CANVAS HD
  // =========================
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  canvas.width = width * ${DPR};
  canvas.height = height * ${DPR};

  const ctx = canvas.getContext("2d");
  ctx.scale(${DPR}, ${DPR});
  ctx.imageSmoothingEnabled = false;

  // =========================
  // FUNCIÓN: CORTAR A 1 DECIMAL
  // =========================
  function cutOneDecimal(value) {
    return (Math.floor(Number(value) * 10) / 10).toFixed(1);
  }

  // =========================
  // PLUGIN ETIQUETAS PARA MÚLTIPLES DATASETS
  // =========================
  const percentageLabelPlugin = {
    id: "percentageLabelPlugin",
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        
        if (!meta.data || !dataset.data) return;

        const total = dataset.data.reduce((a, b) => a + b, 0);
        
        meta.data.forEach((element, index) => {
          const value = dataset.data[index];
          if (!value || value <= 0) return;

          const percentage = (value / total) * 100;
          if (percentage < 5) return;

          // Posición para la etiqueta
          const model = element;
          const angle = (model.startAngle + model.endAngle) / 2;
          const radius = (model.outerRadius - model.innerRadius) * 0.7 + model.innerRadius;
          
          const x = model.x + Math.cos(angle) * radius;
          const y = model.y + Math.sin(angle) * radius;

          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 1;
          ctx.shadowOffsetY = 1;
          
          ctx.fillText(
            cutOneDecimal(percentage) + "%",
            x,
            y
          );
        });
      });

      ctx.restore();
    }
  };

  // =========================
  // CHART CON MÚLTIPLES DATASETS
  // =========================
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ${JSON.stringify(labels)}, // Niveles: ["AD", "EPD", "RA", "SE"]
      datasets: ${JSON.stringify(segments.map((s, index) => ({
                        label: s.label, // Nombre del campo formativo
                        data: s.values, // Array de 4 valores (uno por nivel)
                        backgroundColor: s.color, // Color único para este dataset
                        borderColor: "white",
                        borderWidth: 2,
                        borderRadius: 6,
                    })))}
    },
    options: {
      responsive: false,
      animation: false,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: {
              size: 11 * ${DPR},
              weight: "600",
            },
            padding: 20,
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function(ctx) {
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = (ctx.raw / total) * 100;
              return ctx.dataset.label + " - " + ctx.label + ": " + 
                     cutOneDecimal(ctx.raw) + " (" + cutOneDecimal(percentage) + "%)";
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
//# sourceMappingURL=DoughnutChar.js.map