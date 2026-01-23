import { Request, Response } from "express";
import { generatePdfBuffer } from "../reports/generatePdf";
import { renderReport } from "../reports/renderReport";

export async function previewReport(req: Request, res: Response) {
  const pdf = await generatePdfBuffer();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=reporte.pdf");

  res.send(pdf);
}

export async function renderHtmlReport(req: Request, res: Response) {
  const html = renderReport();
  res.send(`<!DOCTYPE html>${html}`);
}
