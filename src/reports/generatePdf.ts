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

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/* ===========================
   ZONA
=========================== */
export async function generatePdfZonaEscolar(
  dataZona: any[],
  dataMapaZona: any[],
) {
  const dataZonaPorEscuela: any[] = [];

  for (const escuela of dataMapaZona) {
    try {
      console.log(escuela.llave);

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

  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 600000,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  await delay(1500);

  await page.addStyleTag({ path: "reports/css/layout.css" });

  await delay(500);

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
  });

  await browser.close();
  return pdf;
}

/* ===========================
   SECTOR
=========================== */
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

  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 600000,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  await delay(1500);

  await page.addStyleTag({ path: "reports/css/layout.css" });

  await delay(500);

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
  });

  await browser.close();
  return pdf;
}

/* ===========================
   OPCION EDUCATIVA
=========================== */
export async function generatedPdfOpcEdu(
  dataOpcEdu: any[],
  dataEscuelas: any[],
  dataTotalOpEdu: any[],
) {
  const escuelasMap = new Map();

  dataEscuelas.forEach((escuela) => {
    escuelasMap.set(escuela.llave, escuela);
  });

  const CONCURRENCY_LIMIT = 5; // 🔥 bajado para evitar saturación
  const todosLosRegistros: any[] = [];

  for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY_LIMIT) {
    const batch = dataEscuelas.slice(i, i + CONCURRENCY_LIMIT);

    const batchResults = await Promise.all(
      batch.map(async (escuela) => {
        try {
          const res = await fetch(
            `http://localhost:${PORT}/escuela/${escuela.llave}`,
            { signal: AbortSignal.timeout(8000) },
          );

          const json = await res.json();

          if (Array.isArray(json.data)) {
            return json.data.map((registro: any) => ({
              ...registro,
              ...escuela,
            }));
          }

          return [];
        } catch {
          return [];
        }
      }),
    );

    todosLosRegistros.push(...batchResults.flat());
  }

  const html = await renderOpcionEduReport(
    dataOpcEdu,
    dataEscuelas,
    todosLosRegistros,
    dataTotalOpEdu,
  );

  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 600000,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  await delay(2000);

  await page.addStyleTag({ path: "reports/css/layout.css" });

  await delay(500);

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
  });

  await browser.close();
  return pdf;
}

/* ===========================
   ESCUELA
=========================== */
export async function generatedPdfEscuela(
  dataNiEscuela: any[],
  dataGeneraEscuela: any[],
  dataAlumnosPrioritarios: any[],
) {
  const dataZonaNiEscuela = await Promise.all(
    dataGeneraEscuela.map(async (element) => {
      const res = await fetch(
        `http://localhost:${PORT}/zona/${element.cct_zona}`,
      );
      const json = await res.json();
      return json.data;
    }),
  );

  const html = await renderEscuela(
    dataNiEscuela,
    dataGeneraEscuela,
    dataZonaNiEscuela,
    dataAlumnosPrioritarios,
  );

  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 600000,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  await delay(1500);

  await page.addStyleTag({ path: "reports/css/layout.css" });

  await delay(500);

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
  });

  await browser.close();
  return pdf;
}
