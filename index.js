"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/css", express_1.default.static("src/reports/css"));
app.use("/js", express_1.default.static("src/public/js"));
app.use(routes_1.default);
app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`🌐 Red local: http://${getLocalIP()}:${PORT}`);
});
function getLocalIP() {
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
//# sourceMappingURL=index.js.map