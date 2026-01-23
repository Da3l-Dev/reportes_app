import { Router } from "express";
import ItemCctController from "../controllers/item_cct_controller";
import * as pdfController from "../controllers/pdfController";
const router = Router();

router.get("/pdf/preview", pdfController.previewReport);
router.get("/report/html", pdfController.renderHtmlReport);

router.get("/", (req, res) => {
  res.send("API de Reportes de Educación");
});
router.get("/itemcct/:cct", ItemCctController.getItemCct);
export default router;
