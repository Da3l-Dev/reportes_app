import { Request, Response } from "express";
import {
  generatedPdfEscuela,
  generatedPdfOpcEdu,
  generatePdfSector,
  generatePdfZonaEscolar,
} from "../reports/generatePdf";
import { renderMainView, renderOpcionEduReport } from "../reports/renderReport";
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

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
    console.error(error);
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

    const [dataOpcEdu, dataEscuelasOpcEdu, dataTotalOpEdu] = await Promise.all([
      responseDataOpEdu.json(),
      responseEscOpEdu.json(),
      responseTotalOpedu.json(),
    ]);

    console.log(`Datos obtenidos: ${dataEscuelasOpcEdu.data.length} escuelas`);

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
        message: "Es obligatorio el cct de la escuela",
      });
    }

    const responseDataEscuela = await fetch(
      `http://localhost:${PORT}/escuela/${llave}`,
      {
        method: "GET",
      },
    );

    const responseGeneralData = await fetch(
      `http://localhost:${PORT}/escuela/data/${llave}`,
      {
        method: "GET",
      },
    );

    if (!responseDataEscuela.ok || !responseGeneralData.ok) {
      return res.status(400).json({
        message: "No se pudieron obtener los datos",
      });
    }

    const dataNiEscuela = await responseDataEscuela.json();

    const dataGeneralEscuela = await responseGeneralData.json();

    const pdf = await generatedPdfEscuela(
      dataNiEscuela.data,
      dataGeneralEscuela.data,
    );

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename=reporte_escuela_${llave}.pdf`,
    );

    res.end(pdf);
    dataNiEscuela.data;
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error al generar el PDF",
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
