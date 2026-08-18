"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePdfZonaEscolar = generatePdfZonaEscolar;
exports.generatePdfSector = generatePdfSector;
exports.generatedPdfOpcEdu = generatedPdfOpcEdu;
exports.generatedPdfEscuela = generatedPdfEscuela;
exports.generatedPdfSisatOpEdu = generatedPdfSisatOpEdu;
const puppeteer_1 = __importDefault(require("puppeteer"));
const pdf_lib_1 = require("pdf-lib");
const renderReport_1 = require("./renderReport");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
/* ===========================
   FETCH CON RETRY (CLAVE)
=========================== */
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await fetch(url, {
                signal: AbortSignal.timeout(10000),
            });
            if (!res.ok) {
                console.log(`⚠️ HTTP ${res.status} en ${url}`);
                continue;
            }
            return res;
        }
        catch (err) {
            console.log(`❌ Intento ${i + 1} falló: ${url}`);
        }
    }
    console.log(`🔥 Falló definitivamente: ${url}`);
    return null;
}
/* ===========================
   CONFIG PUPPETEER
=========================== */
async function createBrowser() {
    return await puppeteer_1.default.launch({
        executablePath: "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu",
            "--js-flags=--max-old-space-size=4096",
        ],
    });
}
async function renderPDF(html) {
    const browser = await createBrowser();
    const page = await browser.newPage();
    await page.setDefaultTimeout(0);
    await page.setContent(html, {
        waitUntil: "domcontentloaded",
    });
    await page.addStyleTag({ path: "reports/css/layout.css" });
    const pdf = await page.pdf({
        printBackground: true,
        format: "A4",
        landscape: true,
    });
    await browser.close();
    return pdf;
}
/* ===========================
   ZONA
=========================== */
async function generatePdfZonaEscolar(dataZona, dataMapaZona) {
    const registros = [];
    const CONCURRENCY = 10;
    for (let i = 0; i < dataMapaZona.length; i += CONCURRENCY) {
        const batch = dataMapaZona.slice(i, i + CONCURRENCY);
        const results = await Promise.allSettled(batch.map(async (escuela) => {
            const res = await fetchWithRetry(`http://localhost:${PORT}/zona/escuela/${escuela.llave}`);
            if (!res)
                return [];
            const json = await res.json();
            return Array.isArray(json.data) ? json.data : [];
        }));
        results.forEach((r) => {
            if (r.status === "fulfilled") {
                registros.push(...r.value);
            }
        });
    }
    console.log("📊 Registros zona:", registros.length);
    const html = (0, renderReport_1.renderReportZona)(dataZona, dataMapaZona, registros);
    return await renderPDF(html);
}
/* ===========================
   SECTOR
=========================== */
async function generatePdfSector(dataSector, dataEscuelas) {
    const registros = [];
    const CONCURRENCY = 10;
    for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY) {
        const batch = dataEscuelas.slice(i, i + CONCURRENCY);
        const results = await Promise.allSettled(batch.map(async (escuela) => {
            const res = await fetchWithRetry(`http://localhost:${PORT}/zona/escuela/${escuela.llave}`);
            if (!res)
                return [];
            const json = await res.json();
            return Array.isArray(json.data) ? json.data : [];
        }));
        results.forEach((r) => {
            if (r.status === "fulfilled") {
                registros.push(...r.value);
            }
        });
    }
    console.log("📊 Registros sector:", registros.length);
    const html = (0, renderReport_1.renderReportSector)(dataSector, dataEscuelas, registros);
    return await renderPDF(html);
}
/* ===========================
   OPCIÓN EDUCATIVA (FIX REAL)
=========================== */
async function generatedPdfOpcEdu(dataOpcEdu, dataEscuelas, dataTotalOpEdu) {
    console.log(dataEscuelas);
    const registros = [];
    const CONCURRENCY = 10;
    for (let i = 0; i < dataEscuelas.length; i += CONCURRENCY) {
        const batch = dataEscuelas.slice(i, i + CONCURRENCY);
        console.log(`📦 Lote ${i / CONCURRENCY + 1}/${Math.ceil(dataEscuelas.length / CONCURRENCY)}`);
        const results = await Promise.allSettled(batch.map(async (escuela) => {
            const res = await fetchWithRetry(`http://localhost:${PORT}/escuela/${escuela.llave}`);
            if (!res)
                return [];
            const json = await res.json();
            if (!Array.isArray(json.data))
                return [];
            return json.data.map((r) => ({
                ...r,
                ...escuela,
                cct_escuela: escuela.cct,
                llave_escuela: escuela.llave,
            }));
        }));
        results.forEach((r) => {
            if (r.status === "fulfilled") {
                registros.push(...r.value);
            }
        });
    }
    console.log("📊 TOTAL registros:", registros.length);
    const escuelasConDatos = new Set(registros.map((r) => r.cct_escuela));
    console.log("🏫 Escuelas con datos:", escuelasConDatos.size);
    console.log("🏫 Escuelas totales:", dataEscuelas.length);
    const html = await (0, renderReport_1.renderOpcionEduReport)(dataOpcEdu, dataEscuelas, registros, dataTotalOpEdu);
    return await renderPDF(html);
}
/* ===========================
   ESCUELA
=========================== */
async function generatedPdfEscuela(dataNiEscuela, dataGeneraEscuela, dataAlumnosPrioritarios) {
    const zonas = [];
    const results = await Promise.allSettled(dataGeneraEscuela.map(async (e) => {
        const res = await fetchWithRetry(`http://localhost:${PORT}/zona/${e.cct_zona}`);
        if (!res)
            return [];
        const json = await res.json();
        return json.data || [];
    }));
    results.forEach((r) => {
        if (r.status === "fulfilled") {
            zonas.push(r.value);
        }
    });
    const html = await (0, renderReport_1.renderEscuela)(dataNiEscuela, dataGeneraEscuela, zonas, dataAlumnosPrioritarios);
    return await renderPDF(html);
}
async function generatedPdfSisatOpEdu(dataPrimeraExploracion, dataSegundaExploracion, dataTerceraExploracion, dataEscuelas) {
    let browser = null;
    try {
        console.log("📄 Generando PDF SISAT REAL por chunks");
        browser = await createBrowser();
        // PDF FINAL
        const mergedPdf = await pdf_lib_1.PDFDocument.create();
        // ============================================================
        // 1️⃣ GRÁFICA GLOBAL (UNA SOLA VEZ)
        // ============================================================
        console.log("📊 Generando gráfica global con todos los datos...");
        const htmlGrafica = await (0, renderReport_1.renderGraficaGlobalSisat)(dataPrimeraExploracion, dataSegundaExploracion, dataTerceraExploracion);
        const pageGrafica = await browser.newPage();
        await pageGrafica.setViewport({ width: 1600, height: 900 });
        await pageGrafica.setDefaultTimeout(0);
        await pageGrafica.setContent(htmlGrafica, {
            waitUntil: "domcontentloaded",
        });
        await pageGrafica.addStyleTag({
            path: "reports/css/layout.css",
        });
        const pdfGraficaBuffer = await pageGrafica.pdf({
            printBackground: true,
            format: "A4",
            landscape: true,
            preferCSSPageSize: false,
        });
        await pageGrafica.close();
        // 👇 LOG 1: Tamaño del buffer
        console.log(`📊 Tamaño del buffer de gráfica: ${pdfGraficaBuffer.length} bytes`);
        // 👇 LOG 2: Cargar el PDF y ver cuántas páginas tiene
        const pdfGraficaDoc = await pdf_lib_1.PDFDocument.load(pdfGraficaBuffer);
        const totalPaginasGrafica = pdfGraficaDoc.getPageCount();
        console.log(`📄 La gráfica generó ${totalPaginasGrafica} página(s)`);
        // 👇 LOG 3: Ver las dimensiones de la primera página
        if (totalPaginasGrafica > 0) {
            const primeraPagina = pdfGraficaDoc.getPage(0);
            const { width, height } = primeraPagina.getSize();
            console.log(`📐 Página 1: ${width} x ${height}`);
        }
        // 👇 SOLO AGREGAR SI TIENE PÁGINAS - PERO SOLO LA PRIMERA
        if (totalPaginasGrafica > 0) {
            // 👇 IMPORTANTE: Solo copiar la primera página [0]
            const paginaGrafica = await mergedPdf.copyPages(pdfGraficaDoc, [0] // 👈 SOLO LA PRIMERA PÁGINA
            );
            paginaGrafica.forEach((p) => mergedPdf.addPage(p));
            if (totalPaginasGrafica === 1) {
                console.log(`✅ 1 página de gráfica agregada`);
            }
            else {
                console.log(`✅ 1 página de gráfica agregada (descartadas ${totalPaginasGrafica - 1} páginas en blanco)`);
            }
        }
        else {
            console.log("⚠️ La gráfica no generó páginas, omitiendo...");
        }
        console.log("✅ Gráfica global procesada");
        // ============================================================
        // 2️⃣ TABLA POR CHUNKS (CADA 50 ESCUELAS)
        // ============================================================
        const CHUNK_SIZE = 50;
        const totalChunks = Math.ceil(dataEscuelas.length / CHUNK_SIZE);
        // INDEXAR DATOS POR CCT
        const primeraMap = new Map();
        const segundaMap = new Map();
        const terceraMap = new Map();
        // Indexar primera
        for (const item of dataPrimeraExploracion) {
            const key = String(item.cct || "").trim().toUpperCase();
            if (!key)
                continue;
            if (!primeraMap.has(key))
                primeraMap.set(key, []);
            primeraMap.get(key)?.push(item);
        }
        // Indexar segunda
        for (const item of dataSegundaExploracion) {
            const key = String(item.cct || "").trim().toUpperCase();
            if (!key)
                continue;
            if (!segundaMap.has(key))
                segundaMap.set(key, []);
            segundaMap.get(key)?.push(item);
        }
        // Indexar tercera
        for (const item of dataTerceraExploracion) {
            const key = String(item.cct || "").trim().toUpperCase();
            if (!key)
                continue;
            if (!terceraMap.has(key))
                terceraMap.set(key, []);
            terceraMap.get(key)?.push(item);
        }
        console.log(`🗂️ Keys: Primera=${primeraMap.size}, Segunda=${segundaMap.size}, Tercera=${terceraMap.size}`);
        // Procesar chunks
        for (let i = 0; i < dataEscuelas.length; i += CHUNK_SIZE) {
            const chunkStart = Date.now();
            const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
            const escuelasChunk = dataEscuelas.slice(i, i + CHUNK_SIZE);
            if (escuelasChunk.length === 0) {
                console.log(`⚠️ Chunk ${chunkIndex} vacío, saltando...`);
                continue;
            }
            console.log(`📦 Chunk ${chunkIndex}/${totalChunks}`);
            const primeraChunk = [];
            const segundaChunk = [];
            const terceraChunk = [];
            for (const escuela of escuelasChunk) {
                const key = String(escuela.llave || "").trim().toUpperCase();
                const primeraData = primeraMap.get(key) || [];
                const segundaData = segundaMap.get(key) || [];
                const terceraData = terceraMap.get(key) || [];
                primeraChunk.push(...primeraData);
                segundaChunk.push(...segundaData);
                terceraChunk.push(...terceraData);
            }
            console.log(`📊 Chunk ${chunkIndex}: Primera=${primeraChunk.length}, Segunda=${segundaChunk.length}, Tercera=${terceraChunk.length}`);
            // Generar HTML de la tabla para este chunk
            const htmlTabla = await (0, renderReport_1.renderTablaSisatOpEdu)(primeraChunk, segundaChunk, terceraChunk, escuelasChunk, chunkIndex, totalChunks);
            const pageTabla = await browser.newPage();
            await pageTabla.setViewport({ width: 1600, height: 900 });
            await pageTabla.setDefaultTimeout(0);
            await pageTabla.setContent(htmlTabla, {
                waitUntil: "domcontentloaded",
            });
            await pageTabla.addStyleTag({
                path: "reports/css/layout.css",
            });
            const pdfTablaBuffer = await pageTabla.pdf({
                printBackground: true,
                format: "A4",
                landscape: true,
                preferCSSPageSize: true,
            });
            await pageTabla.close();
            if (pdfTablaBuffer.length === 0) {
                console.log(`⚠️ Chunk ${chunkIndex} generó PDF vacío, saltando...`);
                continue;
            }
            // Agregar páginas de la tabla al PDF final
            const pdfTablaDoc = await pdf_lib_1.PDFDocument.load(pdfTablaBuffer);
            console.log(`📄 Chunk ${chunkIndex} tiene ${pdfTablaDoc.getPageCount()} páginas`);
            // SOLO AGREGAR SI TIENE PÁGINAS
            if (pdfTablaDoc.getPageCount() > 0) {
                const paginasTabla = await mergedPdf.copyPages(pdfTablaDoc, pdfTablaDoc.getPageIndices());
                paginasTabla.forEach((p) => mergedPdf.addPage(p));
            }
            console.log(`✅ Chunk ${chunkIndex} terminado en ${Date.now() - chunkStart}ms`);
        }
        // ============================================================
        // 3️⃣ PDF FINAL
        // ============================================================
        console.log("📄 Uniendo PDF final");
        const finalPdf = await mergedPdf.save();
        console.log("🎉 PDF SISAT generado correctamente");
        return Buffer.from(finalPdf);
    }
    catch (error) {
        console.error("❌ Error al generar PDF SISAT:", error);
        throw new Error("Error al generar PDF SISAT");
    }
    finally {
        if (browser) {
            await browser.close();
        }
    }
}
//# sourceMappingURL=generatePdf.js.map