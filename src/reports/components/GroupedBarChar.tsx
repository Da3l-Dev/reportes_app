let chartCounter = 0;

type Dataset = {
  label: string;
  color: string;
  values: number[];
};

type GroupedBarChartProps = {
  grades: string[];
  datasets: Dataset[];
};

export function GroupedBarChart({ grades, datasets }: GroupedBarChartProps) {
  chartCounter++;
  const chartId = `grouped-chart-${chartCounter}`;

  const WIDTH = 700;
  const HEIGHT = 420;
  const DPR = 2;

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
            ctx.scale(${DPR}, ${DPR});

            new Chart(ctx, {
              type: "bar",
              data: {
                labels: ${JSON.stringify(grades)},
                datasets: ${JSON.stringify(
                  datasets.map((d) => ({
                    label: d.label,
                    data: d.values,
                    backgroundColor: d.color,
                    borderRadius: 6,
                  })),
                )}
              },
              options: {
                responsive: false,
                animation: false,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    stacked: false,
                    ticks: {
                      font: { size: 11 * ${DPR} }
                    }
                  },
                  y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      callback: (v) => v + "%",
                      font: { size: 11 * ${DPR} }
                    }
                  }
                },
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      font: { size: 11 * ${DPR} }
                    }
                  },
                  tooltip: {
                    callbacks: {
                      label: (ctx) =>
                        ctx.dataset.label + ": " + ctx.raw + "%"
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
