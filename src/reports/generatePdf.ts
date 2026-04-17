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

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

/* ===========================
   🔥 CONFIG PUPPETEER ESTABLE
=========================== */
async function createBrowser() {
  return await puppeteer.launch({
    headless: true,
    protocolTimeout: 0,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--no-zygote",
      "--disable-extensions",
      "--disable-background-networking",
      "--disable-sync",
      "--disable-translate",
      "--disable-software-rasterizer",
    ],
  });
}

/* ===========================
   🔥 CARGA HTML SEGURA
=========================== */
async function loadPage(page: any, html: string) {
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  // ❌ IMPORTANTE: NO usar networkidle0 (rompe en EC2)

  await delay(1000);

  // ✅ CSS inline (evita ENOENT)
  const css = fs.readFileSync("reports/css/layout.css", "utf8");
  await page.addStyleTag({ content: css });

  await delay(500);
}

/* ===========================
   🔥 GENERAR PDF SEGURO
=========================== */
async function generatePDF(page: any) {
  try {
    return await page.pdf({
      printBackground: true,
      format: "A4",
      landscape: true,
      preferCSSPageSize: true,
    });
  } catch (err) {
    console.error("❌ Error PDF:", err);

    // debug visual
    await page.screenshot({
      path: "error.png",
      fullPage: true,
    });

    throw err;
  }
}

/* ===========================
   🔥 ZONA
=========================== */
export async function generatePdfZonaEscolar(
  dataZona: any[],
  dataMapaZona: any[],
) {
  const dataZonaPorEscuela: any[] = [];

  for (const escuela of dataMapaZona.slice(0, 50)) {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/zona/escuela/${escuela.llave}`,
      );

      const json = await res.json();

      if (Array.isArray(json.data)) {
        dataZonaPorEscuela.push(...json.data);
      }
    } catch {}
  }

  // 🔥 LIMITAR DATA (CRÍTICO)
  const html = renderReportZona(
    dataZona,
    dataMapaZona.slice(0, 30),
    dataZonaPorEscuela.slice(0, 1500),
  );

  const browser = await createBrowser();
  const page = await browser.newPage();

  await loadPage(page, html);
  const pdf = await generatePDF(page);

  await browser.close();
  return pdf;
}

/* ===========================
   🔥 SECTOR
=========================== */
export async function generatePdfSector(
  dataSector: any[],
  dataEscuelas: any[],
) {
  const dataZonaPorEscuela: any[] = [];

  for (const escuela of dataEscuelas.slice(0, 50)) {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/zona/escuela/${escuela.llave}`,
      );

      const json = await res.json();

      if (Array.isArray(json.data)) {
        dataZonaPorEscuela.push(...json.data);
      }
    } catch {}
  }

  const html = renderReportSector(
    dataSector,
    dataEscuelas.slice(0, 30),
    dataZonaPorEscuela.slice(0, 1500),
  );

  const browser = await createBrowser();
  const page = await browser.newPage();

  await loadPage(page, html);
  const pdf = await generatePDF(page);

  await browser.close();
  return pdf;
}

/* ===========================
   🔥 OPCION EDUCATIVA (OPTIMIZADO)
=========================== */
export async function generatedPdfOpcEdu(
  dataOpcEdu: any[],
  dataEscuelas: any[],
  dataTotalOpEdu: any[],
) {
  const CONCURRENCY = 3; // 🔥 antes 20 → mata EC2

  const registros: any[] = [];

  for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY) {
    const batch = dataEscuelas.slice(i, i + CONCURRENCY);

    const results = await Promise.all(
      batch.map(async (escuela) => {
        try {
          const res = await fetch(
            `http://localhost:${PORT}/escuela/${escuela.llave}`,
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

    registros.push(...results.flat());
  }

  const html = await renderOpcionEduReport(
    dataOpcEdu,
    dataEscuelas.slice(0, 40),
    registros.slice(0, 2000),
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
   🔥 ESCUELA (ESTABLE)
=========================== */
export async function generatedPdfEscuela(
  dataNiEscuela: any[],
  dataGeneraEscuela: any[],
  dataAlumnosPrioritarios: any[],
) {
  const zonas = await Promise.all(
    dataGeneraEscuela.slice(0, 10).map(async (e) => {
      try {
        const res = await fetch(`http://localhost:${PORT}/zona/${e.cct_zona}`);
        const json = await res.json();
        return json.data;
      } catch {
        return [];
      }
    }),
  );

  const html = await renderEscuela(
    dataNiEscuela.slice(0, 1000),
    dataGeneraEscuela,
    zonas,
    dataAlumnosPrioritarios.slice(0, 500),
  );

  const browser = await createBrowser();
  const page = await browser.newPage();

  await loadPage(page, html);
  const pdf = await generatePDF(page);

  await browser.close();
  return pdf;
}
