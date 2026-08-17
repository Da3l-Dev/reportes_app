import puppeteer, { Browser } from "puppeteer";
import { PDFDocument } from "pdf-lib";
import renderSisatOpEdu, {
  renderEscuela,
  renderOpcionEduReport,
  renderReportSector,
  renderReportZona,
} from "./renderReport";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

/* ===========================
   FETCH CON RETRY (CLAVE)
=========================== */
async function fetchWithRetry(
  url: string,
  retries = 3,
): Promise<Response | null> {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(10000),
      });

      if (!res.ok) {
        console.log(`⚠️ HTTP ${res.status} en ${url}`);
        continue;
      }

      return res;
    } catch (err) {
      console.log(`❌ Intento ${i + 1} falló: ${url}`);
    }
  }

  console.log(`🔥 Falló definitivamente: ${url}`);
  return null;
}

/* ===========================
   CONFIG PUPPETEER
=========================== */
async function createBrowser() {
  return await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--js-flags=--max-old-space-size=4096",
    ],
  });
}

async function renderPDF(html: string) {
  const browser = await createBrowser();
  const page = await browser.newPage();

  await page.setDefaultTimeout(0);

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });

  await page.addStyleTag({ path: "reports/css/layout.css" });

  const pdf = await page.pdf({
    printBackground: true,
    format: "A4",
    landscape: true,
  });

  await browser.close();
  return pdf;
}

/* ===========================
   ZONA
=========================== */
export async function generatePdfZonaEscolar(
  dataZona: any[],
  dataMapaZona: any[],
) {
  const registros: any[] = [];

  const CONCURRENCY = 10;

  for (let i = 0; i < dataMapaZona.length; i += CONCURRENCY) {
    const batch = dataMapaZona.slice(i, i + CONCURRENCY);

    const results = await Promise.allSettled(
      batch.map(async (escuela) => {
        const res = await fetchWithRetry(
          `http://localhost:${PORT}/zona/escuela/${escuela.llave}`,
        );

        if (!res) return [];

        const json = await res.json();
        return Array.isArray(json.data) ? json.data : [];
      }),
    );

    results.forEach((r) => {
      if (r.status === "fulfilled") {
        registros.push(...r.value);
      }
    });
  }

  console.log("📊 Registros zona:", registros.length);

  const html = renderReportZona(dataZona, dataMapaZona, registros);
  return await renderPDF(html);
}

/* ===========================
   SECTOR
=========================== */
export async function generatePdfSector(
  dataSector: any[],
  dataEscuelas: any[],
) {
  const registros: any[] = [];

  const CONCURRENCY = 10;

  for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY) {
    const batch = dataEscuelas.slice(i, i + CONCURRENCY);

    const results = await Promise.allSettled(
      batch.map(async (escuela) => {
        const res = await fetchWithRetry(
          `http://localhost:${PORT}/zona/escuela/${escuela.llave}`,
        );

        if (!res) return [];

        const json = await res.json();
        return Array.isArray(json.data) ? json.data : [];
      }),
    );

    results.forEach((r) => {
      if (r.status === "fulfilled") {
        registros.push(...r.value);
      }
    });
  }

  console.log("📊 Registros sector:", registros.length);

  const html = renderReportSector(dataSector, dataEscuelas, registros);
  return await renderPDF(html);
}

/* ===========================
   OPCIÓN EDUCATIVA (FIX REAL)
=========================== */
export async function generatedPdfOpcEdu(
  dataOpcEdu: any[],
  dataEscuelas: any[],
  dataTotalOpEdu: any[],
) {
  console.log(dataEscuelas);
  const registros: any[] = [];
  const CONCURRENCY = 10;

  for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY) {
    const batch = dataEscuelas.slice(i, i + CONCURRENCY);

    console.log(
      `📦 Lote ${i / CONCURRENCY + 1}/${Math.ceil(dataEscuelas.length / CONCURRENCY)}`,
    );

    const results = await Promise.allSettled(
      batch.map(async (escuela) => {
        const res = await fetchWithRetry(
          `http://localhost:${PORT}/escuela/${escuela.llave}`,
        );

        if (!res) return [];

        const json = await res.json();

        if (!Array.isArray(json.data)) return [];

        return json.data.map((r: any) => ({
          ...r,
          ...escuela,
          cct_escuela: escuela.cct,
          llave_escuela: escuela.llave,
        }));
      }),
    );

    results.forEach((r) => {
      if (r.status === "fulfilled") {
        registros.push(...r.value);
      }
    });
  }

  console.log("📊 TOTAL registros:", registros.length);

  const escuelasConDatos = new Set(registros.map((r) => r.cct_escuela));

  console.log("🏫 Escuelas con datos:", escuelasConDatos.size);
  console.log("🏫 Escuelas totales:", dataEscuelas.length);

  const html = await renderOpcionEduReport(
    dataOpcEdu,
    dataEscuelas,
    registros,
    dataTotalOpEdu,
  );

  return await renderPDF(html);
}

/* ===========================
   ESCUELA
=========================== */
export async function generatedPdfEscuela(
  dataNiEscuela: any[],
  dataGeneraEscuela: any[],
  dataAlumnosPrioritarios: any[],
) {
  const zonas: any[] = [];

  const results = await Promise.allSettled(
    dataGeneraEscuela.map(async (e) => {
      const res = await fetchWithRetry(
        `http://localhost:${PORT}/zona/${e.cct_zona}`,
      );

      if (!res) return [];

      const json = await res.json();
      return json.data || [];
    }),
  );

  results.forEach((r) => {
    if (r.status === "fulfilled") {
      zonas.push(r.value);
    }
  });

  const html = await renderEscuela(
    dataNiEscuela,
    dataGeneraEscuela,
    zonas,
    dataAlumnosPrioritarios,
  );

  return await renderPDF(html);
}

export async function generatedPdfSisatOpEdu(
  dataPrimeraExploracion: any[],
  dataSegundaExploracion: any[],
  dataEscuelas: any[],
) {
  let browser: Browser | null = null;

  try {
    console.log("📄 Generando PDF SISAT REAL por chunks");

    browser = await createBrowser();

    // PDF FINAL
    const mergedPdf = await PDFDocument.create();

    // TAMAÑO DEL CHUNK
    const CHUNK_SIZE = 50;

    const totalChunks = Math.ceil(dataEscuelas.length / CHUNK_SIZE);

    /* =========================================
       DEBUG
    ========================================= */

    console.log("========== EJEMPLOS ==========");

    console.log("🏫 Escuela:");
    console.log(dataEscuelas[0]);

    console.log("📘 Primera:");
    console.log(dataPrimeraExploracion[0]);

    console.log("📗 Segunda:");
    console.log(dataSegundaExploracion[0]);

    console.log("================================");

    /* =========================================
       INDEXAR DATOS POR CCT
    ========================================= */

    const primeraMap = new Map<string, any[]>();
    const segundaMap = new Map<string, any[]>();

    console.log("📘 Primera exploración:", dataPrimeraExploracion.length);
    console.log("📗 Segunda exploración:", dataSegundaExploracion.length);

    // INDEXAR PRIMERA
    for (const item of dataPrimeraExploracion) {
      const key = String(item.cct || "")
        .trim()
        .toUpperCase();

      if (!key) continue;

      if (!primeraMap.has(key)) {
        primeraMap.set(key, []);
      }

      primeraMap.get(key)?.push(item);
    }

    // INDEXAR SEGUNDA
    for (const item of dataSegundaExploracion) {
      const key = String(item.cct || "")
        .trim()
        .toUpperCase();

      if (!key) continue;

      if (!segundaMap.has(key)) {
        segundaMap.set(key, []);
      }

      segundaMap.get(key)?.push(item);
    }

    console.log("🗂️ Keys primera:", primeraMap.size);
    console.log("🗂️ Keys segunda:", segundaMap.size);

    /* =========================================
       PROCESAR CHUNKS
    ========================================= */

    for (let i = 0; i < dataEscuelas.length; i += CHUNK_SIZE) {
      const chunkStart = Date.now();

      const escuelasChunk = dataEscuelas.slice(i, i + CHUNK_SIZE);

      console.log(`📦 Chunk ${i / CHUNK_SIZE + 1}/${totalChunks}`);

      const primeraChunk: any[] = [];
      const segundaChunk: any[] = [];

      for (const escuela of escuelasChunk) {
        const key = String(escuela.llave || "")
          .trim()
          .toUpperCase();

        console.log("🔍 BUSCANDO:", key);

        const primeraData = primeraMap.get(key) || [];
        const segundaData = segundaMap.get(key) || [];

        console.log("📘 Encontrados primera:", primeraData.length);
        console.log("📗 Encontrados segunda:", segundaData.length);

        primeraChunk.push(...primeraData);
        segundaChunk.push(...segundaData);
      }

      console.log(`
📘 Primera chunk: ${primeraChunk.length}
📗 Segunda chunk: ${segundaChunk.length}
🏫 Escuelas chunk: ${escuelasChunk.length}
      `);

      /* =========================================
         HTML
      ========================================= */

      const html = await renderSisatOpEdu(
        primeraChunk,
        segundaChunk,
        escuelasChunk,
      );

      /* =========================================
         NUEVA PAGE
      ========================================= */

      const page = await browser.newPage();

      await page.setViewport({
        width: 1600,
        height: 900,
      });

      await page.setDefaultTimeout(0);

      await page.setContent(html, {
        waitUntil: "domcontentloaded",
      });

      await page.addStyleTag({
        path: "reports/css/layout.css",
      });

      /* =========================================
         PDF DEL CHUNK
      ========================================= */

      const pdfBuffer = await page.pdf({
        printBackground: true,
        format: "A4",
        landscape: true,
        preferCSSPageSize: true,
      });

      await page.close();

      /* =========================================
         UNIR PDF
      ========================================= */

      const pdfDoc = await PDFDocument.load(pdfBuffer);

      const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());

      pages.forEach((p) => {
        mergedPdf.addPage(p);
      });

      console.log(`
✅ Chunk ${i / CHUNK_SIZE + 1} terminado
⏱️ ${Date.now() - chunkStart}ms
      `);
    }

    /* =========================================
       PDF FINAL
    ========================================= */

    console.log("📄 Uniendo PDF final");

    const finalPdf = await mergedPdf.save();

    console.log("🎉 PDF SISAT generado correctamente");

    return Buffer.from(finalPdf);
  } catch (error: any) {
    console.error("❌ Error al generar PDF SISAT:", error);

    throw new Error("Error al generar PDF SISAT");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
