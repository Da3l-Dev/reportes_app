import React from "react";
import { Response, Request } from "express";
import { renderToStaticMarkup } from "react-dom/server";
import { ReportLayout } from "./components/ReportLayout";
import { Table } from "./components/Table";
import { BarChart } from "./components/BarChart";

export function renderReport() {
  return renderToStaticMarkup(
    <ReportLayout title="Reporte de Ventas">
      <BarChart values={[12, 19, 3, 5]} />
      <Table
        rows={[
          { id: 1, name: "Producto A" },
          { id: 2, name: "Producto B" },
        ]}
      />
    </ReportLayout>,
  );
}
