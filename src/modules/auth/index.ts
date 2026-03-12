import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { TokenVerifier } from "../../shared/contracts/security.js";
import { LoginUseCase } from "./application/use-cases/LoginUseCase.js";
import { VerifyAccessTokenUseCase } from "./application/use-cases/VerifyAccessTokenUseCase.js";
import { SupabaseIdentityProvider } from "./infrastructure/providers/SupabaseIdentityProvider.js";
import { buildAuthRouter } from "./presentation/http/routes/auth.routes.js";

export function createAuthModule(_deps: { prisma: PrismaClient }) {
  const identityProvider = new SupabaseIdentityProvider();
  const loginUseCase = new LoginUseCase(identityProvider);
  const verifyAccessTokenUseCase = new VerifyAccessTokenUseCase(identityProvider);
  const tokenVerifier: TokenVerifier = {
    verifyAccessToken: (token) => verifyAccessTokenUseCase.execute(token),
  };

  return {
    identityProvider,
    contracts: {
      tokenVerifier,
    },
    useCases: {
      loginUseCase,
      verifyAccessTokenUseCase,
    },
    register(app: Express) {
      app.use("/auth", buildAuthRouter({ loginUseCase, tokenVerifier }));
    },
  };
}

export type AuthModule = ReturnType<typeof createAuthModule>;
