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

  // tamaño visual (como antes)
  const WIDTH = 500;
  const HEIGHT = 500;

  // mejora de calidad (NO cambia el tamaño visual)
  const DPR = 2;

  return (
    <>
      <canvas
        id={chartId}
        className="canva_chart"
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
              if (typeof Chart === "undefined") {
                console.error("Chart.js no está cargado");
                return;
              }

              const canvas = document.getElementById("${chartId}");
              if (!canvas) return;

              const ctx = canvas.getContext("2d");

              // Alta resolución sin cambiar tamaño visual
              ctx.scale(${DPR}, ${DPR});

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
                        boxWidth: 14,
                        boxHeight: 14,
                        color: "#374151",
                        font: {
                          // 👇 compensación del scale
                          size: 11 * ${DPR},
                          weight: "500"
                        }
                      }
                    },
                    tooltip: {
                      enabled: true,
                      backgroundColor: "#111827",
                      titleColor: "#ffffff",
                      bodyColor: "#e5e7eb",
                      bodyFont: {
                        size: 11 * ${DPR}
                      }
                    }
                  },
                  scales: {
                    x: {
                      stacked: true,
                      grid: {
                        display: false
                      },
                      ticks: {
                        color: "#374151",
                        font: {
                          size: 11 * ${DPR},
                          weight: "500"
                        }
                      }
                    },
                    y: {
                      stacked: true,
                      beginAtZero: true,
                      grid: {
                        color: "#e5e7eb"
                      },
                      ticks: {
                        color: "#4b5563",
                        font: {
                          size: 11 * ${DPR}
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
