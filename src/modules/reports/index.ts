import type { Express } from "express";
import { Router } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import { requireAuth } from "../auth/presentation/http/middlewares/requireAuth.js";

export function createReportsModule(deps: { prisma: PrismaClient; auth: AuthModule }) {
  const router = Router();
  const authMw = requireAuth(deps.auth.useCases.verifyAccessTokenUseCase);

  router.get("/_module", authMw, (_req, res) => {
    res.json({
      module: "reports",
      status: "scaffold-ready",
      next: ["report entities", "repositories", "creation flows", "monthly reports"],
    });
  });

  return {
    register(app: Express) {
      app.use("/api/reports", router);
    },
  };
}
