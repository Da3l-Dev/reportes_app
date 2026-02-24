import express, { Request, Response } from "express";
import dotenv from "dotenv";
import zonaRouter from "./routes/routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/css", express.static("src/reports/css"));
app.use("/js", express.static("src/public/js"));
app.use(zonaRouter);

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`🌐 Red local: http://${getLocalIP()}:${PORT}`);
});

function getLocalIP(): string {
  const { networkInterfaces } = require("os");
  const nets = networkInterfaces();

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "0.0.0.0";
}
