"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
class ExploracionSisatController {
    constructor() {
        // Constructor logic here
    }
    async getPrimeraExploracion(req, res) {
        try {
            const nivel = req.params.nivel.toUpperCase();
            const subnivel = req.params.subnivel.toUpperCase();
            if (!nivel || !subnivel) {
                return res.status(400).json({
                    success: false,
                    message: "Es necesario elegir la opcion educativa y el nivel educativo",
                });
            }
            // 🔥 CASO ESPECIAL TELESECUNDARIA
            const opcion_educativa = nivel === "SECUNDARIA" && subnivel === "TELESECUNDARIA"
                ? "TELESECUNDARIA"
                : `${nivel} ${subnivel}`;
            const dataPrimeraExploracion = await prisma_1.default.primera_exploracion_sisat.findMany({
                where: {
                    opcion_educativa,
                    ambito: "PÚBLICO",
                },
            });
            if (dataPrimeraExploracion.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No se encontraron datos para la opción educativa: ${opcion_educativa}`,
                });
            }
            return res.status(200).json({
                success: true,
                count: dataPrimeraExploracion.length,
                data: dataPrimeraExploracion,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener datos de exploración",
                error: error.message,
            });
        }
    }
    async getSegundaExploracion(req, res) {
        try {
            const nivel = req.params.nivel.toUpperCase();
            const subnivel = req.params.subnivel.toUpperCase();
            if (!nivel || !subnivel) {
                return res.status(400).json({
                    success: false,
                    message: "Es necesario elegir la opcion educativa y el nivel educativo",
                });
            }
            // 🔥 CASO ESPECIAL TELESECUNDARIA
            const opcion_educativa = nivel === "SECUNDARIA" && subnivel === "TELESECUNDARIA"
                ? "TELESECUNDARIA"
                : `${nivel} ${subnivel}`;
            const dataSegundaExploracion = await prisma_1.default.segunda_exploracion_sisat.findMany({
                where: {
                    opcion_educativa,
                    ambito: "PÚBLICO",
                },
            });
            if (dataSegundaExploracion.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No se encontraron datos para la opción educativa: ${opcion_educativa}`,
                });
            }
            return res.status(200).json({
                success: true,
                count: dataSegundaExploracion.length,
                data: dataSegundaExploracion,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener datos de exploración",
                error: error.message,
            });
        }
    }
    async getTerceraExploracion(req, res) {
        try {
            const nivel = req.params.nivel.toUpperCase();
            const subnivel = req.params.subnivel.toUpperCase();
            if (!nivel || !subnivel) {
                return res.status(400).json({
                    success: false,
                    message: "Es necesario elegir la opcion educativa y el nivel educativo",
                });
            }
            // 🔥 CASO ESPECIAL TELESECUNDARIA
            const opcion_educativa = nivel === "SECUNDARIA" && subnivel === "TELESECUNDARIA"
                ? "TELESECUNDARIA"
                : `${nivel} ${subnivel}`;
            const dataTerceraExploracion = await prisma_1.default.tercera_exploracion_sisat.findMany({
                where: {
                    opcion_educativa,
                    ambito: "PUBLICO"
                }
            });
            if (dataTerceraExploracion.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No se encontro un dato de la tercera exploracion",
                    data: null
                });
            }
            return res.status(200).json({
                success: true,
                count: dataTerceraExploracion.length,
                data: dataTerceraExploracion
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener datos de la tercera exploración",
                error: error.message,
            });
        }
    }
}
exports.default = ExploracionSisatController;
//# sourceMappingURL=explo_sisat_controller.js.map