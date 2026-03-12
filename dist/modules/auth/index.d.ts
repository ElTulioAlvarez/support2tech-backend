import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import { LoginUseCase } from "./application/use-cases/LoginUseCase.js";
import { VerifyAccessTokenUseCase } from "./application/use-cases/VerifyAccessTokenUseCase.js";
import { SupabaseIdentityProvider } from "./infrastructure/providers/SupabaseIdentityProvider.js";
export declare function createAuthModule(_deps: {
    prisma: PrismaClient;
}): {
    identityProvider: SupabaseIdentityProvider;
    useCases: {
        loginUseCase: LoginUseCase;
        verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
    };
    register(app: Express): void;
};
export type AuthModule = ReturnType<typeof createAuthModule>;
//# sourceMappingURL=index.d.ts.map