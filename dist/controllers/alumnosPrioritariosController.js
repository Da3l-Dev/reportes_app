"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
class alumnosPrioritariosController {
    // Preescolar Indigena
    async getDataPreescolarIndigena(req, res) {
        try {
            const { llave_escuela } = req.params;
            if (!llave_escuela) {
                return res.status(400).json({
                    success: false,
                    message: "Falta la llave de la escuela",
                });
            }
            const dataPreescolarIndigena = await prisma_1.default.alumnos_prioritarios_preescolar_indigena.findMany({
                where: {
                    LLAVE: llave_escuela.toString(),
                },
            });
            if (dataPreescolarIndigena.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No existen alumnos con la llave: ${llave_escuela}`,
                });
            }
            return res.status(200).json({
                success: true,
                message: "Datos obtenidos correctamente",
                data: dataPreescolarIndigena,
            });
        }
        catch (error) {
            return res.status(500).json({
                message: "Error al obtener datos",
                error: error.message,
            });
        }
    }
    // Preescolar General
    async getDataPreescolarGeneral(req, res) {
        try {
            const { llave_escuela } = req.params;
            if (!llave_escuela) {
                return res.status(400).json({ error: "Falta llave_escuela" });
            }
            const dataPreecolar = await prisma_1.default.alumnos_prioritarios_preescolar_general.findMany({
                where: {
                    LLAVE: llave_escuela?.toString(),
                },
            });
            if (dataPreecolar.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No existen alumnos con la llave: ${llave_escuela}`,
                });
            }
            return res.status(200).json({
                success: true,
                message: "Alumnos encontrados correctamente",
                data: dataPreecolar,
                count: dataPreecolar.length,
            });
        }
        catch (error) {
            return res.status(500).json({ error: "Error interno" });
        }
    }
    // Primaria General
    async getDataPrimariaGeneral(req, res) {
        try {
            const { llave_escuela } = req.params;
            if (!llave_escuela) {
                return res.status(500).json({
                    success: false,
                    message: "Falta llave_escuela",
                });
            }
            const dataPrimariaG = await prisma_1.default.alumnos_prioritarios_primaria_general.findMany({
                where: {
                    LLAVE: llave_escuela.toString(),
                },
            });
            if (dataPrimariaG.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No existen alumnos con la llave: ${llave_escuela}`,
                });
            }
            return res.status(200).json({
                success: true,
                length: dataPrimariaG.length,
                data: dataPrimariaG,
                message: "Datos obtenidos correctamente",
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener datos",
                error: error.message,
            });
        }
    }
    // Primaria Indigena
    async getDataPrimariaIndigena(req, res) {
        try {
            const { llave_escuela } = req.params;
            if (!llave_escuela) {
                return res.status(400).json({
                    success: false,
                    message: "Falta la llave de la escuela",
                });
            }
            console.log(llave_escuela);
            const dataPrimariaIndigena = await prisma_1.default.alumnos_prioritarios_primaria_indigena.findMany({
                where: {
                    LLAVE: llave_escuela.toString(),
                },
            });
            if (dataPrimariaIndigena.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No existen alumnos con la llave ${llave_escuela}`,
                });
            }
            return res.status(200).json({
                success: true,
                message: "Datos obtenidos correctamente",
                data: dataPrimariaIndigena,
                count: dataPrimariaIndigena.length,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener datos",
                error: error.message,
            });
        }
    }
    // Secundaria General
    async getDataSecundariaGeneral(req, res) {
        try {
            const { llave_escuela } = req.params;
            if (!llave_escuela) {
                return res.status(400).json({
                    success: false,
                    message: `No existen escuelas con la llave: ${llave_escuela}`,
                });
            }
            const dataSecundariaGeneral = await prisma_1.default.alumnos_prioritarios_secundaria_general.findMany({
                where: {
                    LLAVE: llave_escuela.toString(),
                },
            });
            if (dataSecundariaGeneral.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No se encontraron alumnos con la llave ${llave_escuela}`,
                });
            }
            return res.status(200).json({
                success: true,
                message: "Datos obtenidos correctamente",
                data: dataSecundariaGeneral,
                count: dataSecundariaGeneral.length,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener datos",
                error: error.message,
            });
        }
    }
    // Secundaria Tecnica
    async getDataSecundariaTecnica(req, res) {
        try {
            const { llave_escuela } = req.params;
            if (!llave_escuela) {
                return res.status(400).json({
                    success: false,
                    message: `No existen escuelas con la llave: ${llave_escuela}`,
                });
            }
            const dataSecundariaTecnica = await prisma_1.default.alumnos_prioritarios_secundaria_tecnica.findMany({
                where: {
                    LLAVE: llave_escuela.toString(),
                },
            });
            if (dataSecundariaTecnica.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No existen secundarias con la llave: ${llave_escuela}`,
                });
            }
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener datos",
                error: error.message,
            });
        }
    }
    // Telesecundaria
    async getDataTelesecundaria(req, res) {
        try {
            const { llave_escuela } = req.params;
            if (!llave_escuela) {
                return res.status(400).json({
                    success: false,
                    message: `No existen escuelas con la llave: ${llave_escuela}`,
                });
            }
            const dataTelesecundaria = await prisma_1.default.alumnos_prioritarios_telesecundaria.findMany({
                where: {
                    LLAVE: llave_escuela.toString(),
                },
            });
            if (dataTelesecundaria.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No existen alumnos con la llave: ${llave_escuela}`,
                });
            }
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error al obtener datos",
                error: error.message,
            });
        }
    }
}
exports.default = new alumnosPrioritariosController();
//# sourceMappingURL=alumnosPrioritariosController.js.map