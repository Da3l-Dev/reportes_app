import { Router } from "express";
import ZonaController from "../controllers/zonaController";
import {
  renderOpcEdu,
  reportEscuelas,
  reportSectorGenerate,
  reportZonaGenerate,
  serveMainView,
  viewOpcEduHtml,
  generatedSisatOpEdu,
  dashboardSisatOpEdu,
} from "../controllers/pdfController";
import sectorController from "../controllers/sectorController";
import escuelasController from "../controllers/escuelasController";
import itemsController from "../controllers/itemsController";
import alumnosPrioritariosController from "../controllers/alumnosPrioritariosController";
const router = Router();
// Rutas para datos de la zona
router.get("/", serveMainView);
router.get("/sisat", dashboardSisatOpEdu);

router.get("/zona/:ctt_zona", ZonaController.getZonas);
router.get("/pdf/zona/:cct_zona", reportZonaGenerate);
router.get("/zona/data/:ctt_zona", ZonaController.getDataZonas);
router.get("/zona/escuela/:llave_escuela", ZonaController.getEscuelasPorZona);
router.get(
  "/zona/supervisor/:cct_zona/:nivel_educativo",
  ZonaController.getSupervisorZona,
);

// Rutas para sector
router.get("/sector/:cct_sector", sectorController.getDataSector);
router.get("/sector/escuelas/:cct_sector", sectorController.getEcuelasSector);
router.get("/pdf/sector/:cct_sector", reportSectorGenerate);
router.get(
  "/sector/supervisor/:cct_sector",
  sectorController.getSupervisorSector,
);

// Rutas para opciones educativas
router.get("/opEdu/:nivel/:subnivel", escuelasController.getOpcionEduData);
router.get(
  "/opEdu/escuelas/:nivel/:subnivel",
  escuelasController.getEscuelasOpcionEducativa,
);
router.get(`/opEdu/pdf/:nivel/:subnivel`, renderOpcEdu);
router.get("/preview/opEdu/:nivel/:subnivel", viewOpcEduHtml);
router.get("/opEdu/total/:nivel/:subnivel", escuelasController.getTotalOpedu);

// Rutas de escuelas
router.get("/escuela/:llave_escuela", escuelasController.getNiEscuelaData);
router.get(
  "/escuela/data/:llave_escuela",
  escuelasController.getGeneralEscuelaData,
);
router.get("/pdf/escuela/:llave_escuela", reportEscuelas);

// Rutas de items
router.get("/item/escuela/:llave_escuela", itemsController.getItemEscuela);

// Ruta alumnos prioritarios
router.get(
  "/alumnos-prioritarios/preescolar/general/:llave_escuela",
  alumnosPrioritariosController.getDataPreescolarGeneral,
);

router.get(
  "/alumnos-prioritarios/preescolar/indigena/:llave_escuela",
  alumnosPrioritariosController.getDataPreescolarIndigena,
);

router.get(
  "/alumnos-prioritarios/primaria/general/:llave_escuela",
  alumnosPrioritariosController.getDataPrimariaGeneral,
);

router.get(
  "/alumnos-prioritarios/primaria/indigena/:llave_escuela",
  alumnosPrioritariosController.getDataPrimariaIndigena,
);

router.get(
  "/alumnos-prioritarios/secundaria/general/:llave_escuela",
  alumnosPrioritariosController.getDataSecundariaGeneral,
);

router.get(
  "/alumnos-prioritarios/secundaria/tecnica/:llave_escuela",
  alumnosPrioritariosController.getDataSecundariaTecnica,
);

router.get(
  "/alumnos-prioritarios/telesecundaria/:llave_escuela",
  alumnosPrioritariosController.getDataTelesecundaria,
);

// =================================================================
// Rutas para exploración SISAT
import ExploracionSisatController from "../controllers/explo_sisat_controller";

const exploracionSisatController = new ExploracionSisatController();

router.get(
  "/exploracion-sisat/primera/:nivel/:subnivel",
  exploracionSisatController.getPrimeraExploracion,
);

router.get(
  "/exploracion-sisat/segunda/:nivel/:subnivel",
  exploracionSisatController.getSegundaExploracion,
);

router.get("/pdf/opEdu/sisat/:nivel/:subnivel", generatedSisatOpEdu);
export default router;
