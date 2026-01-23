export function BarChart({ values }: { values: number[] }) {
  return (
    <>
      <canvas id="chart" width="5" height="5"></canvas>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const ctx = document.getElementById('chart');
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr'],
                datasets: [{
                  label: ' 1ª Serie ',
                  data: ${JSON.stringify(values)},
                  backgroundColor: '#4f46e5'
                }]
              }
            });
          `,
        }}
      />
    </>
  );
}
