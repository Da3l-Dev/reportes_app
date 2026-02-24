import { Router } from "express";
import ZonaController from "../controllers/zonaController";
import {
  renderOpcEdu,
  reportSectorGenerate,
  reportZonaGenerate,
  serveMainView,
} from "../controllers/pdfController";
import sectorController from "../controllers/sectorController";
import escuelasController from "../controllers/escuelasController";
const zonaRouter = Router();
// Rutas para datos de la zona
zonaRouter.get("/", serveMainView);
zonaRouter.get("/zona/:ctt_zona", ZonaController.getZonas);
zonaRouter.get("/pdf/zona/:cct_zona", reportZonaGenerate);
zonaRouter.get("/zona/data/:ctt_zona", ZonaController.getDataZonas);
zonaRouter.get("/zona/escuela/:cct_escuela", ZonaController.getEscuelasPorZona);
zonaRouter.get(
  "/zona/supervisor/:cct_zona/:nivel_educativo",
  ZonaController.getSupervisorZona,
);

// Rutas para sector
zonaRouter.get("/sector/:cct_sector", sectorController.getDataSector);
zonaRouter.get(
  "/sector/escuelas/:cct_sector",
  sectorController.getEcuelasSector,
);
zonaRouter.get("/pdf/sector/:cct_sector", reportSectorGenerate);
zonaRouter.get(
  "/sector/supervisor/:cct_sector",
  sectorController.getSupervisorSector,
);

// Rutas para opciones educativas
zonaRouter.get("/opEdu/:nivel/:subnivel", escuelasController.getEscuelasData);
zonaRouter.get(
  "/opEdu/escuelas/:nivel/:subnivel",
  escuelasController.getEscuelasOpcionEducativa,
);

zonaRouter.get(`/opEdu/pdf/:nivel/:subnivel`, renderOpcEdu);
export default zonaRouter;
