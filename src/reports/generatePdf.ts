import puppeteer from "puppeteer";
import path from "path";
import {
  renderEscuela,
  renderOpcionEduReport,
  renderReportSector,
  renderReportZona,
} from "./renderReport";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

// 🔥 ruta absoluta (evita errores en EC2)
const cssPath = path.resolve(process.cwd(), "reports/css/layout.css");

// 🔥 helper para evitar timeout
async function generatePDFBuffer(page: any) {
  const stream = await page.createPDFStream({
    printBackground: true,
    format: "A4",
    landscape: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

// 🔥 setup común
async function setupPage(page: any, html: string) {
  await page.setDefaultTimeout(0);
  await page.setDefaultNavigationTimeout(0);

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  // asegura render completo
  await page.evaluate(() => {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(resolve);
      });
    });
  });

  try {
    await page.addStyleTag({ path: cssPath });
  } catch {
    console.log("⚠️ CSS no encontrado");
  }
}

// 🔥 browser común
async function launchBrowser() {
  return puppeteer.launch({
    protocolTimeout: 0, // 🔥 SOLUCIÓN PRINCIPAL
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--js-flags=--max-old-space-size=4096",
    ],
  });
}

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

  const browser = await launchBrowser();
  const page = await browser.newPage();

  await setupPage(page, html);

  const pdf = await generatePDFBuffer(page);

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

  const browser = await launchBrowser();
  const page = await browser.newPage();

  await setupPage(page, html);

  const pdf = await generatePDFBuffer(page);

  await browser.close();
  return pdf;
}

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
  const todosLosRegistros = [];

  for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY_LIMIT) {
    const batch = dataEscuelas.slice(i, i + CONCURRENCY_LIMIT);

    const results = await Promise.all(
      batch.map(async (escuela) => {
        try {
          const res = await fetch(
            `http://localhost:${PORT}/escuela/${escuela.llave}`,
            { signal: AbortSignal.timeout(10000) },
          );

          const json = await res.json();

          if (Array.isArray(json.data)) {
            return json.data.map((r: any) => ({
              ...r,
              ...escuelasMap.get(escuela.llave),
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

  const html = await renderOpcionEduReport(
    dataOpcEdu,
    dataEscuelas,
    todosLosRegistros,
    dataTotalOpEdu,
  );

  const browser = await launchBrowser();
  const page = await browser.newPage();

  await setupPage(page, html);

  const pdf = await generatePDFBuffer(page);

  await browser.close();
  return pdf;
}

export async function generatedPdfEscuela(
  dataNiEscuela: any[],
  dataGeneraEscuela: any[],
  dataAlumnosPrioritarios: any[],
) {
  const dataZonaNiEscuela = await Promise.all(
    dataGeneraEscuela.map(async (e) => {
      const res = await fetch(`http://localhost:${PORT}/zona/${e.cct_zona}`);
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

  const browser = await launchBrowser();
  const page = await browser.newPage();

  await setupPage(page, html);

  const pdf = await generatePDFBuffer(page);

  await browser.close();
  return pdf;
}
