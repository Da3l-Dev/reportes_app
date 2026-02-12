import puppeteer from "puppeteer";
import { renderReportSector, renderReportZona } from "./renderReport";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

export async function generatePdfZonaEscolar(
  dataZona: any[],
  dataMapaZona: any[],
) {
  /* =========================
     FETCH POR ESCUELA (AQUÍ)
  ========================= */

  const dataZonaPorEscuela: any[] = [];

  for (const escuela of dataMapaZona) {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/zona/escuela/${escuela.cct}`,
      );

      if (!res.ok) continue;

      const json = await res.json();
      if (Array.isArray(json.data)) {
        dataZonaPorEscuela.push(...json.data);
      }
    } catch {}
  }

  /* =========================
     RENDER
  ========================= */

  const html = renderReportZona(dataZona, dataMapaZona, dataZonaPorEscuela);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.addStyleTag({ path: "src/reports/css/layout.css" });

  await new Promise((r) => setTimeout(r, 1000));

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true, // 👈 ESTO lo hace horizontal
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  });

  await browser.close();
  return pdf;
}

export async function generatePdfSector(
  dataSector: any[],
  dataEscuelas: any[],
) {
  const dataZonaPorEscuela: any[] = [];

  for (const escuela of dataEscuelas) {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/zona/escuela/${escuela.cct}`,
      );

      if (!res.ok) continue;

      const json = await res.json();
      if (Array.isArray(json.data)) {
        dataZonaPorEscuela.push(...json.data);
      }
    } catch {}
  }

  const html = renderReportSector(dataSector, dataEscuelas, dataZonaPorEscuela);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.addStyleTag({ path: "src/reports/css/layout.css" });

  await new Promise((r) => setTimeout(r, 1000));

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  });

  await browser.close();
  return pdf;
}
