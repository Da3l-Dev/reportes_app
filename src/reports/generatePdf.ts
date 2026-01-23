import puppeteer from "puppeteer";
import { renderReport } from "./renderReport";

export async function generatePdfBuffer() {
  const html = renderReport();

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  // ⏳ esperar a que Chart.js dibuje
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();
  return pdf;
}
