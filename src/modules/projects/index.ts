import type { Express } from "express";
import { Router } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import { requireAuth } from "../auth/presentation/http/middlewares/requireAuth.js";

export function createProjectsModule(deps: { prisma: PrismaClient; auth: AuthModule }) {
  const router = Router();
  const authMw = requireAuth(deps.auth.useCases.verifyAccessTokenUseCase);

  router.get("/_module", authMw, (_req, res) => {
    res.json({
      module: "projects",
      status: "scaffold-ready",
      next: ["domain entities", "repositories", "use-cases", "controllers"],
    });
  });

  return {
    register(app: Express) {
      app.use("/api/projects", router);
    },
  };
}
