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
 * - DPR alto
 * - Fuentes y líneas reforzadas
 * - Sin blur en impresión
 */
export default function BarChartSmall({
  labels,
  segments,
}: BarChartSmallProps) {
  chartCounter += 1;
  const chartId = `chart-${chartCounter}`;

  const WIDTH = 420;
  const HEIGHT = 260;

  // 🔥 clave para PDF
  const DPR = 3;

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

            // Escalado real para alta densidad
            ctx.scale(${DPR}, ${DPR});
            ctx.imageSmoothingEnabled = false;

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
                devicePixelRatio: ${DPR},
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      boxWidth: 10,
                      boxHeight: 10,
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
                    grid: {
                      display: false
                    },
                    ticks: {
                      color: "#111827",
                      font: {
                        size: 9 * ${DPR},
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
                      lineWidth: 1.2
                    },
                    ticks: {
                      stepSize: 20,
                      color: "#111827",
                      font: {
                        size: 9 * ${DPR},
                        weight: "600"
                      }
                    }
                  }
                }
              }
            });
          })();
        `,
        }}
      />
    </>
  );
}
