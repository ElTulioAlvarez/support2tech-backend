import { prisma } from "../shared/infrastructure/db/prismaClient.js";
import { registerModules, type AppContainer } from "./modules.js";

export async function buildContainer(): Promise<AppContainer> {
  await prisma.$connect();
  const now = await prisma.$queryRaw`select now()`;
  console.log("DB OK:", now);

  return registerModules({ prisma });
}
