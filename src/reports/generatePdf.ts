import puppeteer from "puppeteer";
import {
  renderEscuela,
  renderOpcionEduReport,
  renderReportSector,
  renderReportZona,
} from "./renderReport";
import dotenv from "dotenv";
import { elements } from "chart.js";
dotenv.config();

const PORT = process.env.PORT || 3000;

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
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--js-flags=--max-old-space-size=4096", // Aumentar memoria
    ],
  });

  const page = await browser.newPage();

  // Aumentar timeouts
  await page.setDefaultNavigationTimeout(300000); // 5 minutos
  await page.setDefaultTimeout(300000);

  await page.setContent(html, {
    waitUntil: "networkidle0",
    timeout: 300000,
  });

  await page.addStyleTag({ path: "reports/css/layout.css" });

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
    timeout: 300000,
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
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--js-flags=--max-old-space-size=4096",
    ],
  });

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(300000);
  await page.setDefaultTimeout(300000);

  await page.setContent(html, {
    waitUntil: "networkidle0",
    timeout: 300000,
  });

  await page.addStyleTag({ path: "reports/css/layout.css" });

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
    timeout: 300000,
  });

  await browser.close();
  return pdf;
}

export async function generatedPdfOpcEdu(
  dataOpcEdu: any[],
  dataEscuelas: any[],
  dataTotalOpEdu: any[],
) {
  // Crear el Map con TODA la información de cada escuela, usando la llave como key
  const escuelasMap = new Map();
  dataEscuelas.forEach((escuela) => {
    escuelasMap.set(escuela.llave, {
      llave: escuela.llave,
      cct: escuela.cct,
      cct_sector: escuela.cct_sector,
      nombre_sup_sector: escuela.nombre_sup_sector,
      sector: escuela.sector,
      cct_zona: escuela.cct_zona,
      nombre_sup_zona: escuela.nombre_sup_zona,
      zona: escuela.zona,
      nombre_escuela: escuela.nombre_escuela,
      turno: escuela.turno,
      municipio: escuela.municipio,
    });
  });

  const CONCURRENCY_LIMIT = 20;
  const todosLosRegistros = [];

  for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY_LIMIT) {
    const batch = dataEscuelas.slice(i, i + CONCURRENCY_LIMIT);
    console.log(
      `Procesando lote ${i / CONCURRENCY_LIMIT + 1} de ${Math.ceil(dataEscuelas.length / CONCURRENCY_LIMIT)}`,
    );

    const batchPromises = batch.map(async (escuela) => {
      try {
        const res = await fetch(
          `http://localhost:${PORT}/escuela/${escuela.llave}`,
          { signal: AbortSignal.timeout(10000) },
        );

        const json = await res.json();

        const escuelaInfo = escuelasMap.get(escuela.llave);

        if (Array.isArray(json.data)) {
          // Para cada registro, agregar la información completa de la escuela
          return json.data.map((registro: any) => ({
            ...registro,
            ...escuelaInfo,
            llave_escuela: escuelaInfo.llave,
            cct_escuela: escuelaInfo.cct,
            cct_registro: registro.cct,
            turno_escuela: escuelaInfo.turno,
            municipio_escuela: escuelaInfo.municipio,
          }));
        }
        return [];
      } catch (error) {
        console.log(`❌ Error en escuela ${escuela.llave}:`, error);
        return [];
      }
    });

    const batchResults = await Promise.all(batchPromises);
    todosLosRegistros.push(...batchResults.flat());
  }

  const dataZonaPorEscuela = todosLosRegistros;

  // Crear un mapa de registros por CCT para ver cuántas escuelas tienen registros
  const registrosPorCCT = new Map();
  dataZonaPorEscuela.forEach((registro) => {
    const cct = registro.cct_escuela;
    if (!registrosPorCCT.has(cct)) {
      registrosPorCCT.set(cct, []);
    }
    registrosPorCCT.get(cct).push(registro);
  });

  // Mostrar distribución por turno
  const turnos = new Map();
  dataEscuelas.forEach((escuela) => {
    const turno = escuela.turno || "S/T";
    if (!turnos.has(turno)) {
      turnos.set(turno, 0);
    }
    turnos.set(turno, turnos.get(turno) + 1);
  });

  // Verificar registros con sector
  const registrosConSector = dataZonaPorEscuela.filter(
    (r) => r.cct_sector && r.cct_sector !== undefined,
  ).length;

  if (dataZonaPorEscuela.length > 0) {
    const ejemplos = dataEscuelas.slice(0, 3).map((escuela) => {
      const registrosEscuela = dataZonaPorEscuela.filter(
        (r) => r.cct_escuela === escuela.cct,
      );
      return {
        escuela: {
          llave: escuela.llave,
          cct: escuela.cct,
          turno: escuela.turno,
          nombre: escuela.nombre_escuela,
        },
        cantidadRegistros: registrosEscuela.length,
        primerRegistro: registrosEscuela[0]
          ? {
              cct_registro: registrosEscuela[0].cct_registro,
              grado: registrosEscuela[0].grado,
              campo_formativo: registrosEscuela[0].campo_formativo,
            }
          : null,
      };
    });
  }

  console.log("\nGenerando HTML...");
  const html = await renderOpcionEduReport(
    dataOpcEdu,
    dataEscuelas,
    dataZonaPorEscuela,
    dataTotalOpEdu,
  );

  console.log("HTML length:", html.length);
  console.log("HTML generado, iniciando Puppeteer...");

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--js-flags=--max-old-space-size=4096",
    ],
  });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(600000);
  await page.setDefaultTimeout(600000);

  console.log("Cargando contenido en Puppeteer...");
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  await page.addStyleTag({ path: "reports/css/layout.css" });

  console.log("Generando PDF...");
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
    timeout: 600000,
  });

  await browser.close();
  console.log("PDF generado exitosamente");
  return pdf;
}

export async function generatedPdfEscuela(
  dataNiEscuela: any[],
  dataGeneraEscuela: any[],
  dataAlumnosPrioritarios: any[],
) {
  let dataZonaNiEscuela: any[] = [];

  const promises = dataGeneraEscuela.map(async (element) => {
    const response = await fetch(
      `http://localhost:${PORT}/zona/${element.cct_zona}`,
    );
    const data = await response.json();
    return data.data;
  });

  // Esperar a que todas las promesas se resuelvan
  dataZonaNiEscuela = await Promise.all(promises);

  const html = await renderEscuela(
    dataNiEscuela,
    dataGeneraEscuela,
    dataZonaNiEscuela,
    dataAlumnosPrioritarios,
  );
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--js-flags=--max-old-space-size=4096",
    ],
  });

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(30000);
  await page.setDefaultTimeout(30000);

  await page.setContent(html, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  await page.addStyleTag({ path: "reports/css/layout.css" });

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
    timeout: 300000,
  });

  await browser.close();
  return pdf;
  return 0;
}
