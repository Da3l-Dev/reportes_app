import dotenv from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

dotenv.config();

const conntectionString = process.env.DATABASE_URL || "";

const adapter = new PrismaPg({
  connectionString: conntectionString,
});

const prisma = new PrismaClient({
  adapter: adapter,
});

export default prisma;
