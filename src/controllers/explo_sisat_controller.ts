import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { count } from "node:console";

class ExploracionSisatController {
  constructor() {
    // Constructor logic here
  }

  public async getPrimeraExploracion(req: Request, res: Response) {
    try {
      const nivel = (req.params.nivel as string).toUpperCase();
      const subnivel = (req.params.subnivel as string).toUpperCase();

      if (!nivel || !subnivel) {
        return res.status(400).json({
          success: false,
          message:
            "Es necesario elegir la opcion educativa y el nivel educativo",
        });
      }

      // 🔥 CASO ESPECIAL TELESECUNDARIA
      const opcion_educativa =
        nivel === "SECUNDARIA" && subnivel === "TELESECUNDARIA"
          ? "TELESECUNDARIA"
          : `${nivel} ${subnivel}`;

      const dataPrimeraExploracion =
        await prisma.primera_exploracion_sisat.findMany({
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
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Error al obtener datos de exploración",
        error: error.message,
      });
    }
  }

  public async getSegundaExploracion(req: Request, res: Response) {
    try {
      const nivel = (req.params.nivel as string).toUpperCase();
      const subnivel = (req.params.subnivel as string).toUpperCase();

      if (!nivel || !subnivel) {
        return res.status(400).json({
          success: false,
          message:
            "Es necesario elegir la opcion educativa y el nivel educativo",
        });
      }

      // 🔥 CASO ESPECIAL TELESECUNDARIA
      const opcion_educativa =
        nivel === "SECUNDARIA" && subnivel === "TELESECUNDARIA"
          ? "TELESECUNDARIA"
          : `${nivel} ${subnivel}`;

      const dataSegundaExploracion =
        await prisma.segunda_exploracion_sisat.findMany({
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
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Error al obtener datos de exploración",
        error: error.message,
      });
    }
  }
}
export default ExploracionSisatController;
