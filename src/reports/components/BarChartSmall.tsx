let chartCounter = 0;

type Segment = {
  label: string;
  color: string;
  values: number[];
};

type BarChartSmallProps = {
  labels: string[];
  segments: Segment[];
};

/**
 * Gráfica compacta optimizada para PDF
 * - Alta resolución real (DPR)
 * - Etiquetas de porcentaje dentro de barras
 * - Texto nítido en impresión
 */
export default function BarChartSmall({
  labels,
  segments,
}: BarChartSmallProps) {
  chartCounter += 1;
  const chartId = `chart-${chartCounter}`;

  /* =========================
     TAMAÑO VISUAL
  ========================= */

  const WIDTH = 420;
  const HEIGHT = 260;

  /* =========================
     RESOLUCIÓN REAL
  ========================= */

  const DPR = 8;

  return (
    <>
      <canvas
        id={chartId}
        width={WIDTH * DPR}
        height={HEIGHT * DPR}
        style={{
          width: `${WIDTH}px`,
          height: `${HEIGHT}px`,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  if (typeof Chart === "undefined") return;

  const canvas = document.getElementById("${chartId}");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // 🔥 Escala real de alta densidad
  ctx.scale(${DPR}, ${DPR});
  ctx.imageSmoothingEnabled = false;

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
      ctx.font = "bold " + (8 * ${DPR}) + "px Arial";

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

          ctx.fillText(value + "%", x, y);
        });
      });

      ctx.restore();
    }
  };

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ${JSON.stringify(labels)},
      datasets: ${JSON.stringify(
        segments.map((s) => ({
          label: s.label,
          data: s.values,
          backgroundColor: s.color,
          borderRadius: 3,
          borderSkipped: false,
          barPercentage: 0.9,
          categoryPercentage: 0.8,
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
            boxWidth: 100,
            boxHeight: 100,
            color: "#111827",
            font: {
              size: 10 * ${DPR},
              weight: "600"
            }
          }
        },
        tooltip: {
          enabled: false
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          ticks: {
            color: "#111827",
            font: {
              size: 8.5 * ${DPR},
              weight: "600"
            }
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 100,
          grid: {
            color: "#e5e7eb",
            lineWidth: 1
          },
          ticks: {
            stepSize: 20,
            color: "#111827",
            font: {
              size: 8.5 * ${DPR},
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
        }}
      />
    </>
  );
}
