import puppeteer from "puppeteer";
import {
  renderOpcionEduReport,
  renderReportSector,
  renderReportZona,
} from "./renderReport";
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

  await page.setContent(html, { waitUntil: "networkidle0", timeout: 300000 });
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

export async function generatedPdfOpcEdu(
  dataOpcEdu: any[],
  dataEscuelas: any[],
) {
  console.log(`📊 Generando PDF con ${dataEscuelas.length} escuelas`);

  // 🔥 Crear un mapa de escuelas con TODOS los datos
  const escuelasMap = new Map();
  dataEscuelas.forEach((escuela) => {
    escuelasMap.set(escuela.cct, {
      cct_sector: escuela.cct_sector,
      nombre_sup_sector: escuela.nombre_sup_sector,
      sector: escuela.sector,
      cct_zona: escuela.cct_zona,
      nombre_sup_zona: escuela.nombre_sup_zona,
      zona: escuela.zona,
    });
  });

  // 🔥 Fetch en paralelo
  const fetchPromises = dataEscuelas.map(async (escuela) => {
    try {
      const res = await fetch(
        `http://localhost:${PORT}/zona/escuela/${escuela.cct}`,
      );
      if (!res.ok) return [];
      const json = await res.json();

      if (Array.isArray(json.data)) {
        const escuelaInfo = escuelasMap.get(escuela.cct);
        // 🟢 TRANSFERIR TODOS LOS DATOS DE LA ESCUELA A CADA REGISTRO
        return json.data.map((registro: any) => ({
          ...registro,
          // Datos de sector
          cct_sector: escuelaInfo?.cct_sector,
          nombre_sup_sector: escuelaInfo?.nombre_sup_sector,
          sector: escuelaInfo?.sector,
          // Datos de zona
          cct_zona: escuelaInfo?.cct_zona,
          nombre_sup_zona: escuelaInfo?.nombre_sup_zona,
          zona: escuelaInfo?.zona,
        }));
      }
      return [];
    } catch (error) {
      return [];
    }
  });

  const results = await Promise.all(fetchPromises);
  const dataZonaPorEscuela = results.flat();

  console.log(`✅ ${dataZonaPorEscuela.length} registros obtenidos`);

  // Verificar que los registros tienen datos de sector
  const registrosConSector = dataZonaPorEscuela.filter(
    (r) => r.cct_sector,
  ).length;
  console.log(
    `📌 Registros con sector: ${registrosConSector} de ${dataZonaPorEscuela.length}`,
  );

  const html = await renderOpcionEduReport(
    dataOpcEdu,
    dataEscuelas,
    dataZonaPorEscuela,
  );

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "networkidle0",
    timeout: 0,
  });

  await page.addStyleTag({ path: "src/reports/css/layout.css" });

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
