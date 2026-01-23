import { Request, Response } from "express";
import prisma from "../lib/prisma";
class ItemCctController {
  async getItemCct(req: Request, res: Response) {
    try {
      const cct = req.params.cct;
      if (!cct || Array.isArray(cct)) {
        return res.status(400).json({ message: "CCT inválido" });
      }
      const itemCctFound = await prisma.item_cct.findFirst({
        where: {
          cct: cct,
        },
      });
      res.status(200).json({
        success: true,
        message: "Item CCT obtenido correctamente",
        data: itemCctFound,
      });
    } catch (error) {
      console.error("Error al obtener el Item CCT:", error);
      res.status(500).json({
        success: false,
        message: "Error al obtener el Item CCT",
      });
    }
  }
}

export default new ItemCctController();
