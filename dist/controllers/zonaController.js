"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
class ZonaController {
    async getZonas(req, res) {
        try {
            const ctt_zona = req.params.ctt_zona;
            if (!ctt_zona) {
                return res.status(400).json({
                    success: false,
                    message: "El parámetro ctt_zona es obligatorio",
                });
            }
            const zona = await prisma_1.default.analisis_zona.findMany({
                where: { cct_zona: ctt_zona.toString() },
            });
            if (zona.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No se encontraron zonas para el ctt_zona proporcionado",
                });
            }
            res.status(200).json({
                success: true,
                data: zona,
                message: "Zonas obtenidas correctamente",
                count: zona.length,
            });
        }
        catch (error) {
            console.error("Error al obtener las zonas:", error);
            res.status(500).json({
                success: false,
                message: "Error al obtener las zonas",
            });
        }
    }
    async getDataZonas(req, res) {
        try {
            const ctt_zona = req.params.ctt_zona;
            if (!ctt_zona) {
                return res.status(400).json({
                    success: false,
                    message: "El parámetro ctt_zona es obligatorio",
                });
            }
            const zona = await prisma_1.default.$queryRaw `
        SELECT 
          mb.*,
          s.nombre_sup_zona,
          s.nombre_sup_sector
        FROM mapa_base mb
        LEFT JOIN supervisores s
          ON mb.cct_zona = s.clavecct
        WHERE mb.cct_zona = ${ctt_zona.toString()}
        `;
            if (zona.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No se encontraron zonas para el ctt_zona proporcionado",
                });
            }
            res.status(200).json({
                success: true,
                data: zona,
                message: "Zonas obtenidas correctamente",
                count: zona.length,
            });
        }
        catch (error) {
            console.error("Error al obtener las zonas:", error);
            res.status(500).json({
                success: false,
                message: "Error al obtener las zonas",
            });
        }
    }
    async getEscuelasPorZona(req, res) {
        try {
            const llave_escuela = req.params.llave_escuela;
            if (!llave_escuela) {
                return res.status(400).json({
                    success: false,
                    message: "El parámetro cct es obligatorio",
                });
            }
            const escuela = await prisma_1.default.analisis_cct_campo.findMany({
                where: {
                    llave: llave_escuela.toString(),
                },
            });
            if (escuela.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No se encontraron datos para el cct proporcionado",
                });
            }
            res.status(200).json({
                success: true,
                data: escuela,
                message: "Datos de la escuela obtenidos correctamente",
                count: escuela.length,
            });
        }
        catch (error) {
            console.error("Error al obtener los datos de la escuela:", error);
            res.status(500).json({
                success: false,
                message: "Error al obtener los datos de la escuela",
            });
        }
    }
    async getSupervisorZona(req, res) {
        try {
            const cct_zona = req.params.cct_zona;
            if (!cct_zona) {
                return res.status(400).json({
                    success: false,
                    message: "El parametro cct es obligatorio.",
                });
            }
            const supervisorZona = await prisma_1.default.supervisores.findMany({
                where: {
                    clavecct: cct_zona.toString(),
                },
            });
            if (supervisorZona.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No se encontraron datos del cct_zona porporcionado`,
                });
            }
            return res.status(200).json({
                success: true,
                data: supervisorZona,
                message: `Datos de supervisor obtenidos correctamente`,
                count: supervisorZona.length,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: `Error al obtener datos del supervisor zona`,
            });
        }
    }
}
exports.default = new ZonaController();
//# sourceMappingURL=zonaController.js.map