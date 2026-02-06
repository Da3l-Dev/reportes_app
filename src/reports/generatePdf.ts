import puppeteer from "puppeteer";
import { renderReportZona } from "./renderReport";

// Generar reporte de zona escolar en PDF
export async function generatePdfZonaEscolar(data: any) {
  const html = renderReportZona(data);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  await page.addStyleTag({ path: "src/reports/css/layout.css" });
  // ⏳ esperar a que Chart.js dibuje
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const pdf = await page.pdf({
    printBackground: true,
    width: "13in",
    height: "8.5in",
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
    preferCSSPageSize: false,
  });

  await browser.close();
  return pdf;
}
