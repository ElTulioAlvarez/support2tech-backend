import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
const connectionString = process.env.DATABASE_URL;
if (!connectionString)
    throw new Error("Missing DATABASE_URL");
const adapter = new PrismaPg({
    connectionString,
    // Supabase suele requerir SSL; si te llega a dar broncas de certificado:
    // ssl: { rejectUnauthorized: false },
});
export const prisma = new PrismaClient({ adapter });
//# sourceMappingURL=prismaClient.js.map