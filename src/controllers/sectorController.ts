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

      const escuelas = await prisma.$queryRaw<
        {
          id: number;
          cct_zona: string;
          nombre_sup_zona: string | null;
          nombre_sup_sector: string | null;
        }[]
      >`
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
    } catch (error: any) {
      console.error("Error al obtener las escuelas del sector:", error);
      res.status(500).json({
        success: false,
        message: "Error al obtener las escuelas del sector",
        error: error.message,
      });
    }
  }
  async getSupervisorSector(req: Request, res: Response) {
    try {
      const cct_sector = req.params.cct_sector;
      if (!cct_sector) {
        return res.status(400).json({
          success: false,
          message: "El parametro cct del sector es obligatorio.",
        });
      }
      const supervisorSector = await prisma.supervisores.findFirst({
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
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: `Error al obtener datos del supervisor del sector`,
      });
    }
  }
}

export default new SectorController();
