import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import { EnsureActiveProfileUseCase } from "./application/use-cases/EnsureActiveProfileUseCase.js";
import { GetMyProfileUseCase } from "./application/use-cases/GetMyProfileUseCase.js";
import { GetRoleByUserIdUseCase } from "./application/use-cases/GetRoleByUserIdUseCase.js";
import { PrismaProfileRepository } from "./infrastructure/repositories/PrismaProfileRepository.js";
export declare function createAccountsModule(deps: {
    prisma: PrismaClient;
    auth: AuthModule;
}): {
    repositories: {
        profileRepository: PrismaProfileRepository;
    };
    useCases: {
        getMyProfileUseCase: GetMyProfileUseCase;
        getRoleByUserIdUseCase: GetRoleByUserIdUseCase;
        ensureActiveProfileUseCase: EnsureActiveProfileUseCase;
    };
    register(app: Express): void;
};
export type AccountsModule = ReturnType<typeof createAccountsModule>;
//# sourceMappingURL=index.d.ts.map