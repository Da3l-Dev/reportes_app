"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
dotenv_1.default.config();
const conntectionString = process.env.DATABASE_URL || "";
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: conntectionString,
});
const prisma = new client_1.PrismaClient({
    adapter: adapter,
});
exports.default = prisma;
//# sourceMappingURL=prisma.js.map