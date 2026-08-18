import { Request, Response } from "express";
import {
  generatedPdfEscuela,
  generatedPdfOpcEdu,
  generatedPdfSisatOpEdu,
  generatePdfSector,
  generatePdfZonaEscolar,
} from "../reports/generatePdf";
import renderSisatOpEdu, {
  renderDashboardExploracion,
  renderMainView,
  renderOpcionEduReport,
} from "../reports/renderReport";
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // separa letras y acentos
    .replace(/[\u0300-\u036f]/g, ""); // elimina acentos
}

// GENECION DE REPORTES EIA
export async function reportSectorGenerate(req: Request, res: Response) {
  try {
    const { cct_sector } = req.params;

    if (!cct_sector) {
      return res.status(400).json({
        success: false,
        message: "El parámetro cct_sector es obligatorio",
      });
    }

    const [respose, resposeEscuelas] = await Promise.all([
      fetch(`http://localhost:${PORT}/sector/${cct_sector}`),
      fetch(`http://localhost:${PORT}/sector/escuelas/${cct_sector}`),
    ]);

    const [dataSector, dataEscuelas] = await Promise.all([
      respose.json(),
      resposeEscuelas.json(),
    ]);

    if (!respose.ok || !dataSector.data?.length) {
      return res.status(404).json({
        success: false,
        message: "No se encontraron datos para el sector",
      });
    }

    const pdf = await generatePdfSector(dataSector.data, dataEscuelas.data);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=reporte_sector_${cct_sector}.pdf`,
    );

    res.end(pdf);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al generar el reporte de sector",
    });
  }
}

export async function reportZonaGenerate(req: Request, res: Response) {
  try {
    const { cct_zona } = req.params;

    if (!cct_zona) {
      return res.status(400).json({
        success: false,
        message: "El parámetro cct_zona es obligatorio",
      });
    }

    const [responseZona, dataMapaZona] = await Promise.all([
      fetch(`http://localhost:${PORT}/zona/${cct_zona}`),
      fetch(`http://localhost:${PORT}/zona/data/${cct_zona}`),
    ]);

    const [dataZona, dataMapaZonaJson] = await Promise.all([
      responseZona.json(),
      dataMapaZona.json(),
    ]);

    if (!responseZona.ok || !dataZona.data?.length) {
      return res.status(404).json({
        success: false,
        message: "No se encontraron datos para la zona",
      });
    }

    if (!dataMapaZona.ok || !dataMapaZonaJson.data?.length) {
      return res.status(404).json({
        success: false,
        message: "No se encontraron datos para la zona",
      });
    }

    const pdf = await generatePdfZonaEscolar(
      dataZona.data,
      dataMapaZonaJson.data,
    );

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=reporte_zona_${cct_zona}.pdf`,
    );

    res.end(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error al generar el PDF",
    });
  }
}

export async function serveMainView(req: Request, res: Response) {
  try {
    const html = await renderMainView();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al renderizar la vista principal");
  }
}

export async function dashboardSisatOpEdu(req: Request, res: Response) {
  try {
    const html = await renderDashboardExploracion();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al renderizar el dashboard");
  }
}

export async function renderOpcEdu(req: Request, res: Response) {
  try {
    const nivel = req.params.nivel;
    const subnivel = req.params.subnivel;

    if (!nivel || !subnivel) {
      return res.status(400).json({
        success: false,
        message: "Es necesario elegir la opcion educativa y el nivel educativo",
      });
    }

    console.log(`Iniciando generación para ${nivel}/${subnivel}`);

    const [responseDataOpEdu, responseEscOpEdu, responseTotalOpedu] =
      await Promise.all([
        fetch(`http://localhost:${PORT}/opEdu/${nivel}/${subnivel}`),
        fetch(`http://localhost:${PORT}/opEdu/escuelas/${nivel}/${subnivel}`),
        fetch(`http://localhost:${PORT}/opEdu/total/${nivel}/${subnivel}`),
      ]);

    console.log(responseDataOpEdu);

    const [dataOpcEdu, dataEscuelasOpcEdu, dataTotalOpEdu] = await Promise.all([
      responseDataOpEdu.json(),
      responseEscOpEdu.json(),
      responseTotalOpedu.json(),
    ]);

    // console.log(`Datos obtenidos: ${dataEscuelasOpcEdu.data.length} escuelas`);

    const pdf = await generatedPdfOpcEdu(
      dataOpcEdu.data,
      dataEscuelasOpcEdu.data,
      dataTotalOpEdu.data,
    );

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=Reporte_Opedu_${nivel}_${subnivel}.pdf`,
    );

    res.end(pdf);
  } catch (error: any) {
    console.error("Error en renderOpcEdu:", error);
    res.status(500).json({
      success: false,
      message: "Error al generar el reporte de sector",
      error: error.message,
    });
  }
}

export async function reportEscuelas(req: Request, res: Response) {
  try {
    const llave = req.params.llave_escuela;

    if (!llave) {
      return res.status(400).json({
        success: false,
        message: "Es obligatorio el CCT de la escuela",
      });
    }

    const responseDataEscuela = await fetch(
      `http://localhost:${PORT}/escuela/${llave}`,
    );

    const responseGeneralData = await fetch(
      `http://localhost:${PORT}/escuela/data/${llave}`,
    );

    if (!responseDataEscuela.ok || !responseGeneralData.ok) {
      return res.status(400).json({
        success: false,
        message: "No se pudieron obtener los datos",
      });
    }

    const dataNiEscuela = await responseDataEscuela.json();
    const dataGeneralEscuela = await responseGeneralData.json();

    const escuela = dataGeneralEscuela.data?.[0];

    if (!escuela) {
      return res.status(404).json({
        success: false,
        message: "No hay datos de la escuela",
      });
    }

    const opcionEducativa = escuela.opcion_educativa;

    if (!opcionEducativa) {
      return res.status(400).json({
        success: false,
        message: "No se encontró opción educativa",
      });
    }

    // Valor por defecto si no se encuentran alumnos prioritarios
    let dataAlumnosPrioritarios = {
      data: [],
    };

    // TELESECUNDARIA
    if (normalizeText(opcionEducativa).toLowerCase() === "telesecundaria") {
      try {
        const responseTelesecundaria = await fetch(
          `http://localhost:${PORT}/alumnos-prioritarios/telesecundaria/${llave}`,
        );

        if (responseTelesecundaria.ok) {
          dataAlumnosPrioritarios = await responseTelesecundaria.json();
        } else {
          console.warn(
            `No se encontraron alumnos prioritarios para la telesecundaria ${llave}`,
          );
        }
      } catch (error) {
        console.warn(
          `Error obteniendo alumnos prioritarios de telesecundaria para ${llave}:`,
          error,
        );
      }
    } else {
      // LÓGICA NORMAL
      const parts = opcionEducativa.split(" ");
      const nivel = parts[0] || "";
      const subnivel = parts.slice(1).join(" ") || "";

      const nivelFormatted = normalizeText(nivel);
      const subnivelFormatted = normalizeText(subnivel);

      console.log(
        "Buscando alumnos prioritarios:",
        nivelFormatted,
        subnivelFormatted,
      );

      try {
        const responseAlumnos = await fetch(
          `http://localhost:${PORT}/alumnos-prioritarios/${nivelFormatted}/${subnivelFormatted}/${llave}`,
        );

        if (responseAlumnos.ok) {
          dataAlumnosPrioritarios = await responseAlumnos.json();
        } else {
          console.warn(`No se encontraron alumnos prioritarios para ${llave}`);
        }
      } catch (error) {
        console.warn(
          `Error obteniendo alumnos prioritarios para ${llave}:`,
          error,
        );
      }
    }

    const pdf = await generatedPdfEscuela(
      dataNiEscuela.data,
      dataGeneralEscuela.data,
      dataAlumnosPrioritarios.data ?? [],
    );

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=reporte_escuela_${llave}.pdf`,
    );

    res.end(pdf);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error al generar el PDF",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function generatedSisatOpEdu(req: Request, res: Response) {
  const startTime = Date.now();

  try {
    const { nivel, subnivel } = req.params;

    if (!nivel || !subnivel) {
      return res.status(400).json({
        success: false,
        message: "Es necesario elegir la opcion educativa y el nivel educativo",
      });
    }

    // Configurar timeout de la request
    req.setTimeout(300000);
    res.setTimeout(300000);

    // Headers para streaming
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename="reporte_sisat_${nivel}_${subnivel}.pdf"`,
    );

    // Fetch con timeout individual
    const fetchWithTimeout = async (url: string, timeout = 20000) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return response;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    };

    // Hacer las 4 peticiones en paralelo
    const [resPrimera, resSegunda, resTercera, resdataEscuelas] = await Promise.all([
      fetchWithTimeout(
        `http://localhost:${PORT}/exploracion-sisat/primera/${nivel}/${subnivel}`,
      ),
      fetchWithTimeout(
        `http://localhost:${PORT}/exploracion-sisat/segunda/${nivel}/${subnivel}`,
      ),
      fetchWithTimeout(
        `http://localhost:${PORT}/exploracion-sisat/tercera/${nivel}/${subnivel}`,
      ),
      fetchWithTimeout(
        `http://localhost:${PORT}/opEdu/escuelas/${nivel}/${subnivel}`,
      ),
    ]);

    // Validar TODAS las respuestas (incluyendo resTercera)
    if (!resPrimera.ok || !resSegunda.ok || !resTercera.ok || !resdataEscuelas.ok) {
      console.error("❌ Respuestas fallidas:", {
        primera: resPrimera.status,
        segunda: resSegunda.status,
        tercera: resTercera.status,
        escuelas: resdataEscuelas.status,
      });
      throw new Error("No se pudieron obtener los datos necesarios");
    }

    // Parsear JSON en paralelo
    const [jsonPrimera, jsonSegunda, jsonTercera, jsonDataEscuelas] = await Promise.all([
      resPrimera.json(),
      resSegunda.json(),
      resTercera.json(),
      resdataEscuelas.json(),
    ]);

    const dataPrimera = Array.isArray(jsonPrimera.data) ? jsonPrimera.data : [];
    const dataSegunda = Array.isArray(jsonSegunda.data) ? jsonSegunda.data : [];
    const dataTercera = Array.isArray(jsonTercera.data) ? jsonTercera.data : [];
    const dataEscuelas = Array.isArray(jsonDataEscuelas.data)
      ? jsonDataEscuelas.data
      : [];

    console.log(`📊 Procesando: ${dataEscuelas.length} escuelas`);
    console.log(`📊 Datos: Primera=${dataPrimera.length}, Segunda=${dataSegunda.length}, Tercera=${dataTercera.length}`);

    // Generar PDF con timeout general
    const pdfPromise = generatedPdfSisatOpEdu(
      dataPrimera,
      dataSegunda,
      dataTercera,  // 👈 Ahora pasamos dataTercera
      dataEscuelas,
    );
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout generando PDF")), 300000),
    );

    const pdfBuffer = await Promise.race([pdfPromise, timeoutPromise]);

    console.log(`✅ PDF generado en ${Date.now() - startTime}ms`);

    return res.send(pdfBuffer);
  } catch (error) {
    console.error("❌ Error:", error);

    return res.status(500).json({
      success: false,
      message: "Error al generar el PDF SISAT",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
export async function viewOpcEduHtml(req: Request, res: Response) {
  try {
    const nivel = req.params.nivel;
    const subnivel = req.params.subnivel;

    const [responseDataOpEdu, responseEscOpEdu, responseTotalOpedu] =
      await Promise.all([
        fetch(`http://localhost:${PORT}/opEdu/${nivel}/${subnivel}`),
        fetch(`http://localhost:${PORT}/opEdu/escuelas/${nivel}/${subnivel}`),
        fetch(`http://localhost:${PORT}/opEdu/total/${nivel}/${subnivel}`),
      ]);

    const [dataOpcEdu, dataEscuelasOpcEdu, dataTotalOpEdu] = await Promise.all([
      responseDataOpEdu.json(),
      responseEscOpEdu.json(),
      responseTotalOpedu.json(),
    ]);

    // Solo primeras 3 escuelas para vista rápida
    const escuelasPreview = dataEscuelasOpcEdu.data.slice(0, 3);

    const html = await renderOpcionEduReport(
      dataOpcEdu.data,
      escuelasPreview,
      dataEscuelasOpcEdu,
      dataTotalOpEdu,
    );

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Vista HTML - ${nivel}/${subnivel}</title>
          <link rel="stylesheet" href="/css/layout.css">
          <style>
            body { padding: 20px; background: #f0f0f0; }
            .html-view { background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          </style>
        </head>
        <body>
          <div class="html-view">
            ${html}
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send("Error al generar vista");
  }
}
