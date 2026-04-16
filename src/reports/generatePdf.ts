import puppeteer from "puppeteer";
import {
  renderEscuela,
  renderOpcionEduReport,
  renderReportSector,
  renderReportZona,
} from "./renderReport";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

// ✅ CONFIG GLOBAL (NO ROMPE LOCAL)
const puppeteerConfig: any = {
  headless: process.env.PUPPETEER_HEADLESS !== "false",
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--js-flags=--max-old-space-size=4096",
  ],
};

// 👉 solo en servidor usa executablePath
if (process.env.PUPPETEER_EXECUTABLE_PATH) {
  puppeteerConfig.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
}

// ✅ CSS dinámico (evita problema con dist)
const CSS_PATH = process.env.CSS_PATH || "reports/css/layout.css";

// ===============================
// ZONA ESCOLAR
// ===============================
export async function generatePdfZonaEscolar(
  dataZona: any[],
  dataMapaZona: any[],
) {
  const dataZonaPorEscuela: any[] = [];

  for (const escuela of dataMapaZona) {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/zona/escuela/${escuela.llave}`,
      );

      if (!res.ok) continue;

      const json = await res.json();
      if (Array.isArray(json.data)) {
        dataZonaPorEscuela.push(...json.data);
      }
    } catch {}
  }

  const html = renderReportZona(dataZona, dataMapaZona, dataZonaPorEscuela);

  const browser = await puppeteer.launch(puppeteerConfig);
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(300000);
  await page.setDefaultTimeout(300000);

  await page.setContent(html, {
    waitUntil: "networkidle0",
    timeout: 300000,
  });

  await page.addStyleTag({ path: CSS_PATH });

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  return pdf;
}

// ===============================
// SECTOR
// ===============================
export async function generatePdfSector(
  dataSector: any[],
  dataEscuelas: any[],
) {
  const dataZonaPorEscuela: any[] = [];

  for (const escuela of dataEscuelas) {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/zona/escuela/${escuela.llave}`,
      );

      if (!res.ok) continue;

      const json = await res.json();
      if (Array.isArray(json.data)) {
        dataZonaPorEscuela.push(...json.data);
      }
    } catch {}
  }

  const html = renderReportSector(dataSector, dataEscuelas, dataZonaPorEscuela);

  const browser = await puppeteer.launch(puppeteerConfig);
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(300000);
  await page.setDefaultTimeout(300000);

  await page.setContent(html, {
    waitUntil: "networkidle0",
    timeout: 300000,
  });

  await page.addStyleTag({ path: CSS_PATH });

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  return pdf;
}

// ===============================
// OPCION EDUCATIVA
// ===============================
export async function generatedPdfOpcEdu(
  dataOpcEdu: any[],
  dataEscuelas: any[],
  dataTotalOpEdu: any[],
) {
  const escuelasMap = new Map();
  dataEscuelas.forEach((escuela) => {
    escuelasMap.set(escuela.llave, escuela);
  });

  const CONCURRENCY_LIMIT = 20;
  const todosLosRegistros: any[] = [];

  for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY_LIMIT) {
    const batch = dataEscuelas.slice(i, i + CONCURRENCY_LIMIT);

    const batchPromises = batch.map(async (escuela) => {
      try {
        const res = await fetch(
          `http://localhost:${PORT}/escuela/${escuela.llave}`,
          { signal: AbortSignal.timeout(10000) },
        );

        const json = await res.json();

        if (Array.isArray(json.data)) {
          return json.data.map((registro: any) => ({
            ...registro,
            ...escuelasMap.get(escuela.llave),
          }));
        }
        return [];
      } catch {
        return [];
      }
    });

    const batchResults = await Promise.all(batchPromises);
    todosLosRegistros.push(...batchResults.flat());
  }

  const html = await renderOpcionEduReport(
    dataOpcEdu,
    dataEscuelas,
    todosLosRegistros,
    dataTotalOpEdu,
  );

  const browser = await puppeteer.launch(puppeteerConfig);
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(600000);
  await page.setDefaultTimeout(600000);

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  await page.addStyleTag({ path: CSS_PATH });

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  return pdf;
}

// ===============================
// ESCUELA
// ===============================
export async function generatedPdfEscuela(
  dataNiEscuela: any[],
  dataGeneraEscuela: any[],
  dataAlumnosPrioritarios: any[],
) {
  const dataZonaNiEscuela = await Promise.all(
    dataGeneraEscuela.map(async (element) => {
      const response = await fetch(
        `http://localhost:${PORT}/zona/${element.cct_zona}`,
      );
      const data = await response.json();
      return data.data;
    }),
  );

  const html = await renderEscuela(
    dataNiEscuela,
    dataGeneraEscuela,
    dataZonaNiEscuela,
    dataAlumnosPrioritarios,
  );

  const browser = await puppeteer.launch(puppeteerConfig);
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(30000);
  await page.setDefaultTimeout(30000);

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  await page.addStyleTag({ path: CSS_PATH });

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  return pdf;
}
