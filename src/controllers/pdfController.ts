import { Request, Response } from "express";
import { generatePdfZonaEscolar } from "../reports/generatePdf";
import { renderReportZona } from "../reports/renderReport";
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

// export async function previewReport(req: Request, res: Response) {
//   const pdf = await generatePdfZonaEscolar();

//   res.setHeader("Content-Type", "application/pdf");
//   res.setHeader("Content-Disposition", "inline; filename=reporte.pdf");

//   res.send(pdf);
// }

// export async function renderHtmlReport(req: Request, res: Response) {
//   const html = renderReportZona();
//   res.send(`<!DOCTYPE html>${html}`);
// }

export async function reportZonaGenerate(req: Request, res: Response) {
  try {
    const { cct_zona } = req.params;

    if (!cct_zona) {
      return res.status(400).json({
        success: false,
        message: "El parámetro cct_zona es obligatorio",
      });
    }

    const response = await fetch(`http://localhost:${PORT}/zona/${cct_zona}`);
    const data = await response.json();

    if (!response.ok || !data.data?.length) {
      return res.status(404).json({
        success: false,
        message: "No se encontraron datos para la zona",
      });
    }

    const pdf = await generatePdfZonaEscolar(data.data);

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
