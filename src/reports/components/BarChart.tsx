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

  const DPR = 4; // 🔥 alta calidad para PDF

  return (
    <>
      {/* contenedor manda */}

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
  // TAMAÑO REAL DEL CONTENEDOR
  // =========================
  const width = container.clientWidth;
  const height = Math.min(width, 420); // 👈 evita que se pase en horizontal

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
  // FUNCIÓN: CORTAR A 1 DECIMAL (SIN REDONDEAR)
  // =========================
  function cutOneDecimal(value) {
    return (Math.floor(Number(value) * 10) / 10).toFixed(1);
  }

  // =========================
  // PLUGIN ETIQUETAS %
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

          // contraste automático profesional
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
  // CHART
  // =========================
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ${JSON.stringify(labels)},
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
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: {
              size: 11 * ${DPR},
              weight: "600",
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
            font: {
              size: 12 * ${DPR},
              weight: "600",
            },
            padding: 20,
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
            font: { size: 10 * ${DPR} }
          }
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
