import { Request, Response } from "express";
import prisma from "../lib/prisma";

class ItemController {
  async getItemEscuela(req: Request, res: Response) {
    try {
      const llave_escuela = req.params.llave_escuela;

      if (!llave_escuela) {
        return res.status(400).json({
          success: false,
          message: "Es necesario otorgar la llave de la escuela",
        });
      }
      const dataItemsEscuela = await prisma.item_cct.findMany({
        where: {
          llave: llave_escuela?.toString(),
        },
      });

      if (dataItemsEscuela.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No existen items en esta escuela",
        });
      }

      return res.status(200).json({
        success: true,
        data: dataItemsEscuela,
        message: "Items de escuela obtenidos correctamente",
        count: dataItemsEscuela.length,
      });
    } catch (error) {}
  }
}

export default new ItemController();
