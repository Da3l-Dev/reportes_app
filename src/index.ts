import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/itemcctRoutes";
import zonaRouter from "./routes/zonasRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/css", express.static("src/reports/css"));
app.use(router);
app.use(zonaRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
