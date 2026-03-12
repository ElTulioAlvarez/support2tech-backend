import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import type { CurrentUserResolver } from "../../shared/contracts/security.js";
import { EnsureActiveProfileUseCase } from "./application/use-cases/EnsureActiveProfileUseCase.js";
import { GetMyProfileUseCase } from "./application/use-cases/GetMyProfileUseCase.js";
import { GetRoleByUserIdUseCase } from "./application/use-cases/GetRoleByUserIdUseCase.js";
import { PrismaProfileRepository } from "./infrastructure/repositories/PrismaProfileRepository.js";
import { buildAccountRouter } from "./presentation/http/routes/account.routes.js";

export function createAccountsModule(deps: { prisma: PrismaClient; auth: AuthModule }) {
  const profileRepository = new PrismaProfileRepository(deps.prisma);
  const getMyProfileUseCase = new GetMyProfileUseCase(profileRepository);
  const getRoleByUserIdUseCase = new GetRoleByUserIdUseCase(profileRepository);
  const ensureActiveProfileUseCase = new EnsureActiveProfileUseCase(profileRepository);
  const currentUserResolver: CurrentUserResolver = {
    getActiveProfile: (userId) => ensureActiveProfileUseCase.execute(userId),
  };

  return {
    contracts: {
      currentUserResolver,
    },
    repositories: {
      profileRepository,
    },
    useCases: {
      getMyProfileUseCase,
      getRoleByUserIdUseCase,
      ensureActiveProfileUseCase,
    },
    register(app: Express) {
      app.use(
        "/api/account",
        buildAccountRouter({
          getMyProfileUseCase,
          currentUserResolver,
          tokenVerifier: deps.auth.contracts.tokenVerifier,
        }),
      );
    },
  };
}

export type AccountsModule = ReturnType<typeof createAccountsModule>;
