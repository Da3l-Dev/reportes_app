import { Chart } from "chart.js/auto";

let chartCounter = 0;

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderRadius: number;
  }[];
};

type Props = {
  data: ChartData;
};

export function GroupedBarChart({ data }: Props) {
  chartCounter += 1;
  const chartId = `grouped-bar-${chartCounter}`;

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
              const canvas = document.getElementById("${chartId}");
              if (!canvas) return;

              const ctx = canvas.getContext("2d");
              ctx.scale(${DPR}, ${DPR});

              new Chart(ctx, {
                type: "bar",
                data: ${JSON.stringify(data)},
                options: {
                  responsive: false,
                  animation: false,
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        font: { size: 11 * ${DPR} },
                        color: "#374151"
                      }
                    }
                  },
                  scales: {
                    x: {
                      grid: { display: false },
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
