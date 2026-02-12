import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { count } from "node:console";

class SectorController {
  async getDataSector(req: Request, res: Response) {
    try {
      const ctt_sector = req.params.cct_sector;
      if (!ctt_sector) {
        return res.status(400).json({
          success: false,
          message: "El parámetro ctt_sector es obligatorio",
        });
      }
      console.log("Recibido ctt_sector:", ctt_sector); // Debug: Verificar el valor recibido

      const sectorData = await prisma.analisis_sector.findMany({
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
    } catch (error) {
      console.error("Error al obtener los datos del sector:", error);
      res.status(500).json({
        success: false,
        message: "Error al obtener los datos del sector",
      });
    }
  }

  async getEcuelasSector(req: Request, res: Response) {
    try {
      const ctt_sector = req.params.cct_sector;
      if (!ctt_sector) {
        return res.status(400).json({
          success: false,
          message: "El parámetro ctt_sector es obligatorio",
        });
      }

      const escuelas = await prisma.mapa_base.findMany({
        where: { cct_sector: ctt_sector.toString() },
      });

      res.status(200).json({
        success: true,
        data: escuelas,
        count: escuelas.length,
        message: "Escuelas del sector obtenidas correctamente",
      });
    } catch (error) {
      console.error("Error al obtener las escuelas del sector:", error);
      res.status(500).json({
        success: false,
        message: "Error al obtener las escuelas del sector",
      });
    }
  }
}

export default new SectorController();
