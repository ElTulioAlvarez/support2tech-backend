export declare function buildContainer(): {
    shared: {
        db: {
            prisma: import("../shared/infrastructure/db/generated/prisma/internal/class.js").PrismaClient<never, import("../shared/infrastructure/db/generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined, import("@prisma/client/runtime/client").DefaultArgs>;
        };
    };
    modules: {
        auth: {
            identityProvider: import("../modules/auth/infrastructure/providers/SupabaseIdentityProvider.js").SupabaseIdentityProvider;
            useCases: {
                loginUseCase: import("../modules/auth/application/use-cases/LoginUseCase.js").LoginUseCase;
                verifyAccessTokenUseCase: import("../modules/auth/application/use-cases/VerifyAccessTokenUseCase.js").VerifyAccessTokenUseCase;
            };
            register(app: import("express").Express): void;
        };
        accounts: {
            repositories: {
                profileRepository: import("../modules/accounts/infrastructure/repositories/PrismaProfileRepository.js").PrismaProfileRepository;
            };
            useCases: {
                getMyProfileUseCase: import("../modules/accounts/application/use-cases/GetMyProfileUseCase.js").GetMyProfileUseCase;
                getRoleByUserIdUseCase: import("../modules/accounts/application/use-cases/GetRoleByUserIdUseCase.js").GetRoleByUserIdUseCase;
                ensureActiveProfileUseCase: import("../modules/accounts/application/use-cases/EnsureActiveProfileUseCase.js").EnsureActiveProfileUseCase;
            };
            register(app: import("express").Express): void;
        };
        projects: {
            register(app: import("express").Express): void;
        };
        calendar: {
            register(app: import("express").Express): void;
        };
        reports: {
            register(app: import("express").Express): void;
        };
        technicians: {
            register(app: import("express").Express): void;
        };
    };
};
export type AppContainer = ReturnType<typeof buildContainer>;
//# sourceMappingURL=container.d.ts.map