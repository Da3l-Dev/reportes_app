import { Request, Response } from "express";
import {
  generatePdfSector,
  generatePdfZonaEscolar,
} from "../reports/generatePdf";
import { renderMainView, renderReportZona } from "../reports/renderReport";
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

    const respose = await fetch(
      `http://localhost:${PORT}/sector/${cct_sector}`,
    );
    const dataSector = await respose.json();

    const resposeEscuelas = await fetch(
      `http://localhost:${PORT}/sector/escuelas/${cct_sector}`,
    );
    const dataEscuelas = await resposeEscuelas.json();

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

    // Obtener los datos de la zona desde el endpoint correspondientE
    const responseZona = await fetch(
      `http://localhost:${PORT}/zona/${cct_zona}`,
    );
    const dataZona = await responseZona.json();

    if (!responseZona.ok || !dataZona.data?.length) {
      return res.status(404).json({
        success: false,
        message: "No se encontraron datos para la zona",
      });
    }

    const dataMapaZona = await fetch(
      `http://localhost:${PORT}/zona/data/${cct_zona}`,
    );
    const dataMapaZonaJson = await dataMapaZona.json();

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
    // Obtenemos el HTML renderizado desde React
    const html = await renderMainView();

    // Solo devolvemos el HTML tal cual
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al renderizar la vista principal");
  }
}
