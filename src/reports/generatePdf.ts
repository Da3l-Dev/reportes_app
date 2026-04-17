import puppeteer from "puppeteer";
import {
  renderEscuela,
  renderOpcionEduReport,
  renderReportSector,
  renderReportZona,
} from "./renderReport";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const PORT = process.env.PORT || 3000;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/* ===========================
   CONFIGURACIÓN PUPPETEER
=========================== */
async function createBrowser() {
  return await puppeteer.launch({
    headless: true,
    protocolTimeout: 600000,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-features=site-per-process",
      "--single-process",
    ],
  });
}

async function generatePDF(page: any) {
  try {
    return await page.pdf({
      printBackground: true,
      format: "A4",
      landscape: true,
      preferCSSPageSize: true,
    });
  } catch (err) {
    console.error("❌ Error generando PDF:", err);

    // screenshot para debug
    await page.screenshot({
      path: "error.png",
      fullPage: true,
    });

    throw new Error("Error generando PDF");
  }
}

async function loadPage(page: any, html: string) {
  page.on("console", (msg: any) => console.log("PAGE LOG:", msg.text()));
  page.on("pageerror", (err: any) => console.log("PAGE ERROR:", err));

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  await delay(1500);

  // ✅ cargar CSS correctamente (FIX CRÍTICO)
  const css = fs.readFileSync("reports/css/layout.css", "utf8");
  await page.addStyleTag({ content: css });

  await delay(500);
}

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

  // 🔥 LIMITAR DATA (evita crash)
  const MAX = 2000;
  const dataLimitada = dataZonaPorEscuela.slice(0, MAX);

  const html = renderReportZona(dataZona, dataMapaZona, dataLimitada);

  const browser = await createBrowser();
  const page = await browser.newPage();

  await loadPage(page, html);

  const pdf = await generatePDF(page);

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

  const MAX = 2000;
  const dataLimitada = dataZonaPorEscuela.slice(0, MAX);

  const html = renderReportSector(dataSector, dataEscuelas, dataLimitada);

  const browser = await createBrowser();
  const page = await browser.newPage();

  await loadPage(page, html);

  const pdf = await generatePDF(page);

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

  const CONCURRENCY_LIMIT = 5; // 🔥 FIX rendimiento
  const todosLosRegistros: any[] = [];

  for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY_LIMIT) {
    const batch = dataEscuelas.slice(i, i + CONCURRENCY_LIMIT);

    const results = await Promise.all(
      batch.map(async (escuela) => {
        try {
          const res = await fetch(
            `http://localhost:${PORT}/escuela/${escuela.llave}`,
            { signal: AbortSignal.timeout(8000) },
          );

          const json = await res.json();

          if (Array.isArray(json.data)) {
            return json.data.map((r: any) => ({
              ...r,
              ...escuela,
            }));
          }

          return [];
        } catch {
          return [];
        }
      }),
    );

    todosLosRegistros.push(...results.flat());
  }

  // 🔥 LIMITAR
  const dataLimitada = todosLosRegistros.slice(0, 3000);

  const html = await renderOpcionEduReport(
    dataOpcEdu,
    dataEscuelas,
    dataLimitada,
    dataTotalOpEdu,
  );

  const browser = await createBrowser();
  const page = await browser.newPage();

  await loadPage(page, html);

  const pdf = await generatePDF(page);

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

  const browser = await createBrowser();
  const page = await browser.newPage();

  await loadPage(page, html);

  const pdf = await generatePDF(page);

  await browser.close();
  return pdf;
}
