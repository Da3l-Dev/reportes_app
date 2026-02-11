import { Router } from "express";
import ZonaController from "../controllers/zonaController";
import { reportZonaGenerate } from "../controllers/pdfController";
const zonaRouter = Router();

zonaRouter.get("/zona/:ctt_zona", ZonaController.getZonas);
zonaRouter.get("/pdf/zona/:cct_zona", reportZonaGenerate);
zonaRouter.get("/zona/data/:ctt_zona", ZonaController.getDataZonas);
zonaRouter.get("/zona/escuela/:cct_escuela", ZonaController.getEscuelasPorZona);
export default zonaRouter;
