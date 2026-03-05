import { Response, Request } from "express";
import prisma from "../lib/prisma";
import { count } from "node:console";
class Escuelas {
  async getEscuelasOpcionEducativa(req: Request, res: Response) {
    try {
      const nivel = req.params.nivel;
      const subnivel = req.params.subnivel;

      if (!nivel || !subnivel) {
        return res.status(400).json({
          success: false,
          message:
            "Es necesario elegir la opcion educativa y el nivel educativo",
        });
      }

      const dataEscuelasOpcionEducativa = await prisma.$queryRaw<
        {
          llave: string;
          id: number;
          cct: string;
          nombre: string;
          opcion_educativa: string;
          cct_zona: string;
          cct_sector: string;
          nivel: string;
          subnivel: string;
          zona: number;
          sector: number;
          turno: string;
          municipio: string;
          nombre_sup_zona: string | null;
          nombre_sup_sector: string | null;
        }[]
      >`
  SELECT 
    mb.llave,
    mb.id,
    mb.cct,
    mb.nombre,
    mb.opcion_educativa,
    mb.cct_zona,
    mb.cct_sector,
    mb.nivel,
    mb.subnivel,
    mb.zona,
    mb.sector,
    mb.turno,
    mb.municipio,
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

  WHERE mb.subnivel = ${subnivel.toString().toUpperCase()}
    AND mb.nivel = ${nivel.toString().toUpperCase()}
  
  GROUP BY 
    mb.llave,
    mb.id,
    mb.cct,
    mb.nombre,
    mb.opcion_educativa,
    mb.cct_zona,
    mb.cct_sector,
    mb.nivel,
    mb.subnivel,
    mb.zona,
    mb.sector,
    mb.turno,
    mb.municipio,
    sz.nombre_sup_zona,
    ss.nombre_sup_sector
    
  ORDER BY mb.sector, mb.zona, mb.nombre
`;

      if (dataEscuelasOpcionEducativa.length === 0) {
        return res.status(404).json({
          success: false,
          message:
            "No se encontraron escuelas asociadas a esa opcion educativa",
        });
      }

      return res.status(200).json({
        success: true,
        data: dataEscuelasOpcionEducativa,
        message: `Escuelas ${nivel} ${subnivel} obtenidas correctamente`,
        count: dataEscuelasOpcionEducativa.length,
      });
    } catch (error: any) {
      console.error(
        "Error al obtener las escuelas por opción educativa:",
        error,
      );
      return res.status(500).json({
        success: false,
        message: "Error al obtener escuelas",
        error: error.message,
      });
    }
  }
  async getOpcionEduData(req: Request, res: Response) {
    try {
      const nivel = req.params.nivel;
      const subnivel = req.params.subnivel;
      let opcion_educativa = "";
      if (!nivel || !subnivel) {
        return res.status(400).json({
          success: false,
          message:
            "Es necesario elegir la opcion educativa y el nivel educativo",
        });
      }

      if (subnivel == "Telesecundaria") {
        opcion_educativa = subnivel;
      } else {
        opcion_educativa = nivel + " " + String(subnivel).toLowerCase();
      }

      console.log(opcion_educativa);
      const dataOpcionEducativa = await prisma.ni_opcion_educativa.findMany({
        where: {
          opcion_educativa: opcion_educativa.toString(),
          tipo: "Total",
        },
      });

      if (dataOpcionEducativa.length <= 0) {
        return res.status(404).json({
          success: false,
          message: `No se pudo encontrar datos de: ${opcion_educativa}`,
        });
      }

      return res.status(200).json({
        count: dataOpcionEducativa.length,
        success: true,
        message: "Exito al encontrar datos",
        data: dataOpcionEducativa,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: `Error: ${error.message}`,
      });
    }
  }

  async getNiEscuelaData(req: Request, res: Response) {
    try {
      const llave_escuela = req.params.llave_escuela;
      if (!llave_escuela)
        return res.status(400).json({
          success: false,
          message: "Es necesario dar el cct de la escuela",
        });

      const dataEscuelas = await prisma.analisis_cct_campo.findMany({
        where: {
          llave: llave_escuela.toString(),
        },
      });

      if (dataEscuelas.length === 0)
        return res.status(404).json({
          success: false,
          message: `No se encontro datos del cct: ${llave_escuela} `,
        });
      return res.status(200).json({
        success: true,
        data: dataEscuelas,
        message: "Datos obtenidos correctamente",
        count: dataEscuelas.length,
      });
    } catch (error: any) {}
  }

  async getGeneralEscuelaData(req: Request, res: Response) {
    try {
      const llave_escuela = req.params.llave_escuela;
      if (!llave_escuela)
        return res.status(400).json({
          success: false,
          message: "Es necesario dar la llave de la escuela",
        });

      const dataGeneralEscuela = await prisma.mapa_base.findMany({
        where: {
          llave: llave_escuela.toString(),
        },
      });

      if (dataGeneralEscuela.length === 0)
        return res.status(404).json({
          success: false,
          message: `No se encontro datos del cct: ${llave_escuela} `,
        });
      return res.status(200).json({
        success: true,
        data: dataGeneralEscuela,
        message: "Datos obtenidos correctamente",
        count: dataGeneralEscuela.length,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Error al obtener datos de la escuela",
        error: error.message,
      });
    }
  }

  async getTotalOpedu(req: Request, res: Response) {
    try {
      const nivel = req.params.nivel;
      const subnivel = req.params.subnivel;

      let opcion_educativa: String = "";
      if (!nivel || !subnivel) {
        return res.status(400).json({
          success: false,
          message:
            "Es necesario elegir la opcion educativa y el nivel educativo",
        });
      }

      if (subnivel == "Telesecundaria") {
        opcion_educativa = subnivel;
      } else {
        opcion_educativa = nivel + " " + String(subnivel).toLowerCase();
      }

      const dataTotalOpEdu = await prisma.totales_opedu.findFirst({
        where: {
          opcion_educativa: opcion_educativa.toString(),
        },
      });

      if (!dataTotalOpEdu) {
        return res.status(404).json({
          success: false,
          message: "No se encontraron datos de esta opcion educativa",
        });
      }

      return res.status(200).json({
        success: true,
        data: dataTotalOpEdu,
        message: "Datos totales obtenidos correctamente",
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Error al encontrar totales",
        error: error.message,
      });
    }
  }
}

export default new Escuelas();
