import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import { LoginUseCase } from "./application/use-cases/LoginUseCase.js";
import { VerifyAccessTokenUseCase } from "./application/use-cases/VerifyAccessTokenUseCase.js";
import { SupabaseIdentityProvider } from "./infrastructure/providers/SupabaseIdentityProvider.js";
import { buildAuthRouter } from "./presentation/http/routes/auth.routes.js";

export function createAuthModule(_deps: { prisma: PrismaClient }) {
  const identityProvider = new SupabaseIdentityProvider();
  const loginUseCase = new LoginUseCase(identityProvider);
  const verifyAccessTokenUseCase = new VerifyAccessTokenUseCase(identityProvider);

  return {
    identityProvider,
    useCases: {
      loginUseCase,
      verifyAccessTokenUseCase,
    },
    register(app: Express) {
      app.use("/auth", buildAuthRouter({ loginUseCase, verifyAccessTokenUseCase }));
    },
  };
}

export type AuthModule = ReturnType<typeof createAuthModule>;
