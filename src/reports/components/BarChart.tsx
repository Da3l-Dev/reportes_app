let chartCounter = 0;

type Segment = {
  label: string;
  color: string;
  values: number[];
};

type BarChartProps = {
  labels: string[];
  segments: Segment[];
};

export function BarChart({ labels, segments }: BarChartProps) {
  chartCounter += 1;
  const chartId = `chart-${chartCounter}`;

  const DPR = 4;

  return (
    <>
      <canvas id={chartId} />

      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  if (typeof Chart === "undefined") return;

  const canvas = document.getElementById("${chartId}");
  if (!canvas) return;

  const container = canvas.parentElement;
  if (!container) return;

  // =========================
  // TAMAÑO
  // =========================
  const width = container.clientWidth * 1.5;
  const height = Math.min(width, 560);

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
  // UTIL
  // =========================
  function cutOneDecimal(value) {
    return (Math.floor(Number(value) * 10) / 10).toFixed(1);
  }

  // =========================
  // WRAP LABELS
  // =========================
  function wrapLabel(label) {
    const maxChars = 12;
    if (label.length <= maxChars) return label;

    const words = label.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach(word => {
      if ((currentLine + word).length > maxChars) {
        lines.push(currentLine.trim());
        currentLine = word + " ";
      } else {
        currentLine += word + " ";
      }
    });

    if (currentLine) lines.push(currentLine.trim());

    return lines;
  }

  // =========================
  // PLUGIN %
  // =========================
  const percentageLabelPlugin = {
    id: "percentageLabelPlugin",
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold " + (9 * ${DPR}) + "px Arial";

      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);

        meta.data.forEach((bar, i) => {
          const value = dataset.data[i];
          if (!value || value <= 0) return;

          ctx.fillStyle = bar.height > 20 ? "#000000" : "#111827";

          ctx.fillText(
            cutOneDecimal(value) + "%",
            bar.x,
            bar.y + bar.height / 2
          );
        });
      });

      ctx.restore();
    }
  };

  // =========================
  // MAPA SIGNIFICADOS
  // =========================
  const legendMap = {
    AD: "Aprendizaje Desarrollado",
    EPD: "En proceso de desarrollo",
    RA: "Requiere Atención",
    SE: "Sin evidencia"
  };

  // =========================
  // ORDEN PERSONALIZADO
  // =========================
  const legendOrder = ["SE", "RA", "EPD", "AD"];

  // =========================
  // CHART
  // =========================
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ${JSON.stringify(labels)}.map(wrapLabel),
      datasets: ${JSON.stringify(
        segments.map((s) => ({
          label: s.label,
          data: s.values,
          backgroundColor: s.color,
          borderRadius: 6,
          borderSkipped: false,
        })),
      )}
    },
    options: {
      responsive: false,
      animation: false,
      maintainAspectRatio: false,

      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 30
        }
      },

      plugins: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 14,
            padding: 12,
            font: {
              size: 11 * ${DPR},
              weight: "600",
            },

            // 🔥 MULTILÍNEA + ORDEN
            generateLabels: function(chart) {
              const original = Chart.defaults.plugins.legend.labels.generateLabels(chart);

              return original
                .map(label => {
                  const key = label.text;
                  const desc = legendMap[key];

                  if (!desc) return label;

                  return {
                    ...label,
                    text: [
                      key,
                      desc
                    ]
                  };
                })
                .sort((a, b) => {
                  const aKey = Array.isArray(a.text) ? a.text[0] : a.text;
                  const bKey = Array.isArray(b.text) ? b.text[0] : b.text;

                  return legendOrder.indexOf(aKey) - legendOrder.indexOf(bKey);
                });
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
            maxRotation: 0,
            minRotation: 0,
            align: "center",
            crossAlign: "center",
            padding: 15,
            font: {
              size: function(ctx) {
                const count = ctx.chart.data.labels.length;
                if (count > 10) return 9 * ${DPR};
                if (count > 5) return 10 * ${DPR};
                return 12 * ${DPR};
              },
              weight: "600",
            }
          }
        },

        y: {
          stacked: true,
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return cutOneDecimal(value) + "%";
            },
            font: {
              size: 10 * ${DPR}
            }
          }
        }
      },

      datasets: {
        bar: {
          barPercentage: 0.8,
          categoryPercentage: 0.7
        }
      }
    },

    plugins: [percentageLabelPlugin]
  });
})();
          `,
        }}
      />
    </>
  );
}
