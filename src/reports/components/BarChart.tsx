let chartCounter = 0;

type Segment = {
  label: string;
  color: string;
  values: number[]; // un valor por cada label
};

type BarChartProps = {
  labels: string[];
  segments: Segment[];
};

export function BarChart({ labels, segments }: BarChartProps) {
  chartCounter += 1;
  const chartId = `chart-${chartCounter}`;

  return (
    <>
      <canvas
        className="canva_chart"
        id={chartId}
        width="500"
        height="500"
      ></canvas>

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

              new Chart(ctx, {
                type: "bar",
                data: {
                  labels: ${JSON.stringify(labels)},
                  datasets: ${JSON.stringify(
                    segments.map((s) => ({
                      label: s.label,
                      data: s.values,
                      backgroundColor: s.color,
                      stack: "stack-1",
                      borderWidth: 0,
                    })),
                  )}
                },
                options: {
                  responsive: false,
                  animation: false,
                  plugins: {
                    legend: {
                      position: "bottom"
                    }
                  },
                  scales: {
                    x: {
                      stacked: true,
                      grid: {
                        display: false
                      }
                    },
                    y: {
                      stacked: true,
                      beginAtZero: true,
                      ticks: {
                        precision: 0
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
