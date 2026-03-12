import type { PrismaClient } from "../shared/infrastructure/db/generated/prisma/client.js";

import { SupabaseIdentityProvider } from "../modules/auth/infrastructure/providers/SupabaseIdentityProvider.js";
import { LoginUseCase } from "../modules/auth/application/use-cases/LoginUseCase.js";
import { VerifyAccessTokenUseCase } from "../modules/auth/application/use-cases/VerifyAccessTokenUseCase.js";
import { createAuthRouter } from "../modules/auth/presentation/http/auth.routes.js";
import { requireAuth } from "../modules/auth/presentation/http/middlewares/requireAuth.js";

import { PrismaProfileRepository } from "../modules/accounts/infrastructure/repositories/PrismaProfileRepository.js";
import { GetMyProfileUseCase } from "../modules/accounts/application/use-cases/GetMyProfileUseCase.js";
import { GetRoleByUserIdUseCase } from "../modules/accounts/application/use-cases/GetRoleByUserIdUseCase.js";
import { createAccountRouter } from "../modules/accounts/presentation/http/account.routes.js";
import { loadRole } from "../modules/accounts/presentation/http/middlewares/loadRole.js";
import { requireRole } from "../modules/accounts/presentation/http/middlewares/requireRole.js";

export type AppContainer = {
  prisma: PrismaClient;
  auth: {
    identityProvider: SupabaseIdentityProvider;
    loginUseCase: LoginUseCase;
    verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
    authRouter: ReturnType<typeof createAuthRouter>;
    authMw: ReturnType<typeof requireAuth>;
  };
  accounts: {
    profileRepository: PrismaProfileRepository;
    getMyProfileUseCase: GetMyProfileUseCase;
    getRoleByUserIdUseCase: GetRoleByUserIdUseCase;
    loadRoleMw: ReturnType<typeof loadRole>;
    adminOnlyMw: ReturnType<typeof requireRole>;
    accountRouter: ReturnType<typeof createAccountRouter>;
  };
};

export function registerModules(deps: { prisma: PrismaClient }): AppContainer {
  const identityProvider = new SupabaseIdentityProvider();
  const loginUseCase = new LoginUseCase(identityProvider);
  const verifyAccessTokenUseCase = new VerifyAccessTokenUseCase(identityProvider);
  const authMw = requireAuth(verifyAccessTokenUseCase);
  const authRouter = createAuthRouter({ loginUseCase, authMw });

  const profileRepository = new PrismaProfileRepository(deps.prisma);
  const getMyProfileUseCase = new GetMyProfileUseCase(profileRepository);
  const getRoleByUserIdUseCase = new GetRoleByUserIdUseCase(profileRepository);
  const loadRoleMw = loadRole(getRoleByUserIdUseCase);
  const adminOnlyMw = requireRole("admin");
  const accountRouter = createAccountRouter({
    authMw,
    loadRoleMw,
    adminOnlyMw,
    getMyProfileUseCase,
  });

  return {
    prisma: deps.prisma,
    auth: {
      identityProvider,
      loginUseCase,
      verifyAccessTokenUseCase,
      authRouter,
      authMw,
    },
    accounts: {
      profileRepository,
      getMyProfileUseCase,
      getRoleByUserIdUseCase,
      loadRoleMw,
      adminOnlyMw,
      accountRouter,
    },
  };
}
