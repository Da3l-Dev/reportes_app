import { Request, Response } from "express";
import { generatePdfZonaEscolar } from "../reports/generatePdf";
import { renderReportZona } from "../reports/renderReport";

export async function previewReport(req: Request, res: Response) {
  const pdf = await generatePdfZonaEscolar();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=reporte.pdf");

  res.send(pdf);
}

export async function renderHtmlReport(req: Request, res: Response) {
  const html = renderReportZona();
  res.send(`<!DOCTYPE html>${html}`);
}
