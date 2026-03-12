import type { Express } from "express";
import { Router } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import { requireAuth } from "../auth/presentation/http/middlewares/requireAuth.js";

export function createTechniciansModule(deps: { prisma: PrismaClient; auth: AuthModule }) {
  const router = Router();
  const authMw = requireAuth(deps.auth.useCases.verifyAccessTokenUseCase);

  router.get("/_module", authMw, (_req, res) => {
    res.json({
      module: "technicians",
      status: "scaffold-ready",
      next: ["technician queries", "assignment flows", "availability use-cases"],
    });
  });

  return {
    register(app: Express) {
      app.use("/api/technicians", router);
    },
  };
}
