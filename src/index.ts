import express, { Request, Response } from "express";
import dotenv from "dotenv";
import zonaRouter from "./routes/routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/css", express.static("src/reports/css"));
app.use(zonaRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
