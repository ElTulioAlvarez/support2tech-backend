import express from "express";
import cors from "cors";

import { prisma } from "../../infrastructure/db/prismaClient.js";
import { PrismaProfileRepository } from "../../infrastructure/repositories/PrismaProfileRepository.js";
import { SupabaseJwtAuthService } from "../../infrastructure/auth/SupabaseJwtAuthService.js";
import { requireAuth, requireRole } from "./middlewares/auth.js";
import { buildAccountRouter } from "./routes/account.routes.js";
import { buildAuthRouter } from "./routes/auth.routes.js";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // Infra
  const profileRepo = new PrismaProfileRepository(prisma);

  // ✅ Un solo validador JWT (ver punto 2)
  const authService = new SupabaseJwtAuthService({
    supabaseUrl: process.env.SUPABASE_URL!,
  });

  const authMw = requireAuth(authService);
  const adminOnly = requireRole("admin");

  // ✅ monta auth aquí
  app.use("/auth", buildAuthRouter({ authMw }));

  // API
  app.use("/api/account", buildAccountRouter({ profileRepo, authMw, adminOnly }));

  return app;
}