"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
class SectorController {
    async getDataSector(req, res) {
        try {
            const ctt_sector = req.params.cct_sector;
            if (!ctt_sector) {
                return res.status(400).json({
                    success: false,
                    message: "El parámetro ctt_sector es obligatorio",
                });
            }
            const sectorData = await prisma_1.default.analisis_sector.findMany({
                where: { cct_sector: ctt_sector.toString(), tipo: "Total" },
            });
            if (sectorData.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No se encontraron datos para el sector proporcionado",
                });
            }
            // Aquí puedes procesar los datos obtenidos si es necesario
            res.status(200).json({
                success: true,
                data: sectorData,
                count: sectorData.length,
                message: "Datos del sector obtenidos correctamente",
            });
        }
        catch (error) {
            console.error("Error al obtener los datos del sector:", error);
            res.status(500).json({
                success: false,
                message: "Error al obtener los datos del sector",
            });
        }
    }
    async getEcuelasSector(req, res) {
        try {
            const ctt_sector = req.params.cct_sector;
            if (!ctt_sector) {
                return res.status(400).json({
                    success: false,
                    message: "El parámetro ctt_sector es obligatorio",
                });
            }
            const escuelas = await prisma_1.default.$queryRaw `
        SELECT 
          mb.*,
          sz.nombre_sup_zona,
          ss.nombre_sup_sector

        FROM mapa_base mb

        LEFT JOIN (
          SELECT DISTINCT ON (clavecct) *
          FROM supervisores
          ORDER BY clavecct
        ) sz
          ON mb.cct_zona = sz.clavecct

        LEFT JOIN (
          SELECT DISTINCT ON (jefatura) *
          FROM supervisores
          ORDER BY jefatura
        ) ss
          ON mb.cct_sector = ss.jefatura

        WHERE mb.cct_sector = ${ctt_sector.toString()}
        `;
            res.status(200).json({
                success: true,
                data: escuelas,
                count: escuelas.length,
                message: "Escuelas del sector obtenidas correctamente",
            });
        }
        catch (error) {
            console.error("Error al obtener las escuelas del sector:", error);
            res.status(500).json({
                success: false,
                message: "Error al obtener las escuelas del sector",
                error: error.message,
            });
        }
    }
    async getSupervisorSector(req, res) {
        try {
            const cct_sector = req.params.cct_sector;
            if (!cct_sector) {
                return res.status(400).json({
                    success: false,
                    message: "El parametro cct del sector es obligatorio.",
                });
            }
            const supervisorSector = await prisma_1.default.supervisores.findFirst({
                where: {
                    jefatura: cct_sector.toString(),
                },
            });
            if (!supervisorSector) {
                return res.status(404).json({
                    success: false,
                    message: `No se encontraron datos del cct_sector porporcionado`,
                });
            }
            return res.status(200).json({
                success: true,
                data: supervisorSector,
                message: `Datos de supervisor obtenidos correctamente`,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: `Error al obtener datos del supervisor del sector`,
            });
        }
    }
}
exports.default = new SectorController();
//# sourceMappingURL=sectorController.js.map