import { Router } from "express";

const zonaRouter = Router();

import ZonaController from "../controllers/zonaController";

zonaRouter.get("/zona/:ctt_zona", ZonaController.getZonas);

export default zonaRouter;
