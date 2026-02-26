import "dotenv/config";
import { createServer } from "./presentation/http/server.js";
import { prisma } from "./infrastructure/db/prismaClient.js";

const app = createServer();
const port = Number(process.env.PORT ?? 3001);

async function dbCheck() {
  await prisma.$connect();
  const now = await prisma.$queryRaw`select now()`;
  console.log("DB OK:", now);
}

dbCheck().catch((e) => {
  console.error("DB FAIL:", e);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});