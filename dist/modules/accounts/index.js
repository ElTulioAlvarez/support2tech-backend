import { EnsureActiveProfileUseCase } from "./application/use-cases/EnsureActiveProfileUseCase.js";
import { GetMyProfileUseCase } from "./application/use-cases/GetMyProfileUseCase.js";
import { GetRoleByUserIdUseCase } from "./application/use-cases/GetRoleByUserIdUseCase.js";
import { PrismaProfileRepository } from "./infrastructure/repositories/PrismaProfileRepository.js";
import { buildAccountRouter } from "./presentation/http/routes/account.routes.js";
export function createAccountsModule(deps) {
    const profileRepository = new PrismaProfileRepository(deps.prisma);
    const getMyProfileUseCase = new GetMyProfileUseCase(profileRepository);
    const getRoleByUserIdUseCase = new GetRoleByUserIdUseCase(profileRepository);
    const ensureActiveProfileUseCase = new EnsureActiveProfileUseCase(profileRepository);
    return {
        repositories: {
            profileRepository,
        },
        useCases: {
            getMyProfileUseCase,
            getRoleByUserIdUseCase,
            ensureActiveProfileUseCase,
        },
        register(app) {
            app.use("/api/account", buildAccountRouter({
                getMyProfileUseCase,
                ensureActiveProfileUseCase,
                verifyAccessTokenUseCase: deps.auth.useCases.verifyAccessTokenUseCase,
            }));
        },
    };
}
//# sourceMappingURL=index.js.map