import React from "react";
export function ReportLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/layout.css" />
      </head>
      <body>
        <h1>{title}</h1>
        {children}
      </body>
    </html>
  );
}
