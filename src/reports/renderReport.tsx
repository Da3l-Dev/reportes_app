import { renderToStaticMarkup } from "react-dom/server";
import { ReportLayout } from "./components/ReportLayout";
import { Table } from "./components/Table";
import { BarChart } from "./components/BarChart";
import Header from "./components/Header";

export function renderReportZona() {
  return renderToStaticMarkup(
    <>
      <ReportLayout>
        <Header title_report="Reporte por zonas" />
        <div className="page">
          <div className="first-column">
            <BarChart
              labels={[
                "Lenguajes",
                "De lo Humano y lo comunitario",
                "Etica y ciudadanía",
                "Saberes",
              ]}
              segments={[
                {
                  label: "AD",
                  color: "#88f891",
                  values: [40, 50, 30, 25],
                },
                {
                  label: "EPD",
                  color: "#f3da5c",
                  values: [35, 25, 40, 25],
                },
                {
                  label: "RA",
                  color: "#eead53",
                  values: [24, 24, 29, 25],
                },
                {
                  label: "SE",
                  color: "#ee5e53",
                  values: [1, 1, 1, 25],
                },
              ]}
            />
          </div>
          <div className="second-column">
            <Table
              rows={[
                { id: 1, name: "Producto A" },
                { id: 2, name: "Producto B" },
              ]}
            />
            <Table
              rows={[
                { id: 1, name: "Producto A" },
                { id: 2, name: "Producto B" },
              ]}
            />
          </div>
        </div>
      </ReportLayout>
    </>,
  );
}
