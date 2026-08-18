"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
class ItemCctController {
    async getItemCct(req, res) {
        try {
            const cct = req.params.cct;
            if (!cct || Array.isArray(cct)) {
                return res.status(400).json({ message: "CCT inválido" });
            }
            const itemCctFound = await prisma_1.default.item_cct.findFirst({
                where: {
                    cct: cct,
                },
            });
            res.status(200).json({
                success: true,
                message: "Item CCT obtenido correctamente",
                data: itemCctFound,
            });
        }
        catch (error) {
            console.error("Error al obtener el Item CCT:", error);
            res.status(500).json({
                success: false,
                message: "Error al obtener el Item CCT",
            });
        }
    }
}
exports.default = new ItemCctController();
//# sourceMappingURL=item_cct_controller.js.map