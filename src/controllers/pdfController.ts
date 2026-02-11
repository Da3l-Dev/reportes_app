import { Request, Response } from "express";
import { generatePdfZonaEscolar } from "../reports/generatePdf";
import { renderReportZona } from "../reports/renderReport";
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

    // Aquí deberías implementar la lógica para obtener los datos del sector
    // y luego generar el PDF similar a como se hace en reportZonaGenerate

    res.status(200).json({
      success: true,
      message: "Reporte de sector generado correctamente",
      data: null, // Aquí iría el PDF o la información relevante
    });
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
    res.setHeader("Content-Disposition", "inline; filename=reporte.pdf");

    res.end(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error al generar el PDF",
    });
  }
}
