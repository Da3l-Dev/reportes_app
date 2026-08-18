export function ReportLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/css/layout.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
