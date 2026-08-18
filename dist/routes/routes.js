"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zonaController_1 = __importDefault(require("../controllers/zonaController"));
const pdfController_1 = require("../controllers/pdfController");
const sectorController_1 = __importDefault(require("../controllers/sectorController"));
const escuelasController_1 = __importDefault(require("../controllers/escuelasController"));
const itemsController_1 = __importDefault(require("../controllers/itemsController"));
const alumnosPrioritariosController_1 = __importDefault(require("../controllers/alumnosPrioritariosController"));
const router = (0, express_1.Router)();
// Rutas para datos de la zona
router.get("/", pdfController_1.serveMainView);
router.get("/sisat", pdfController_1.dashboardSisatOpEdu);
router.get("/zona/:ctt_zona", zonaController_1.default.getZonas);
router.get("/pdf/zona/:cct_zona", pdfController_1.reportZonaGenerate);
router.get("/zona/data/:ctt_zona", zonaController_1.default.getDataZonas);
router.get("/zona/escuela/:llave_escuela", zonaController_1.default.getEscuelasPorZona);
router.get("/zona/supervisor/:cct_zona/:nivel_educativo", zonaController_1.default.getSupervisorZona);
// Rutas para sector
router.get("/sector/:cct_sector", sectorController_1.default.getDataSector);
router.get("/sector/escuelas/:cct_sector", sectorController_1.default.getEcuelasSector);
router.get("/pdf/sector/:cct_sector", pdfController_1.reportSectorGenerate);
router.get("/sector/supervisor/:cct_sector", sectorController_1.default.getSupervisorSector);
// Rutas para opciones educativas
router.get("/opEdu/:nivel/:subnivel", escuelasController_1.default.getOpcionEduData);
router.get("/opEdu/escuelas/:nivel/:subnivel", escuelasController_1.default.getEscuelasOpcionEducativa);
router.get(`/opEdu/pdf/:nivel/:subnivel`, pdfController_1.renderOpcEdu);
router.get("/preview/opEdu/:nivel/:subnivel", pdfController_1.viewOpcEduHtml);
router.get("/opEdu/total/:nivel/:subnivel", escuelasController_1.default.getTotalOpedu);
// Rutas de escuelas
router.get("/escuela/:llave_escuela", escuelasController_1.default.getNiEscuelaData);
router.get("/escuela/data/:llave_escuela", escuelasController_1.default.getGeneralEscuelaData);
router.get("/pdf/escuela/:llave_escuela", pdfController_1.reportEscuelas);
// Rutas de items
router.get("/item/escuela/:llave_escuela", itemsController_1.default.getItemEscuela);
// Ruta alumnos prioritarios
router.get("/alumnos-prioritarios/preescolar/general/:llave_escuela", alumnosPrioritariosController_1.default.getDataPreescolarGeneral);
router.get("/alumnos-prioritarios/preescolar/indigena/:llave_escuela", alumnosPrioritariosController_1.default.getDataPreescolarIndigena);
router.get("/alumnos-prioritarios/primaria/general/:llave_escuela", alumnosPrioritariosController_1.default.getDataPrimariaGeneral);
router.get("/alumnos-prioritarios/primaria/indigena/:llave_escuela", alumnosPrioritariosController_1.default.getDataPrimariaIndigena);
router.get("/alumnos-prioritarios/secundaria/general/:llave_escuela", alumnosPrioritariosController_1.default.getDataSecundariaGeneral);
router.get("/alumnos-prioritarios/secundaria/tecnica/:llave_escuela", alumnosPrioritariosController_1.default.getDataSecundariaTecnica);
router.get("/alumnos-prioritarios/telesecundaria/:llave_escuela", alumnosPrioritariosController_1.default.getDataTelesecundaria);
// =================================================================
// Rutas para exploración SISAT
const explo_sisat_controller_1 = __importDefault(require("../controllers/explo_sisat_controller"));
const exploracionSisatController = new explo_sisat_controller_1.default();
router.get("/exploracion-sisat/primera/:nivel/:subnivel", exploracionSisatController.getPrimeraExploracion);
router.get("/exploracion-sisat/segunda/:nivel/:subnivel", exploracionSisatController.getSegundaExploracion);
router.get("/exploracion-sisat/tercera/:nivel/:subnivel", exploracionSisatController.getTerceraExploracion);
router.get("/pdf/opEdu/sisat/:nivel/:subnivel", pdfController_1.generatedSisatOpEdu);
exports.default = router;
//# sourceMappingURL=routes.js.map