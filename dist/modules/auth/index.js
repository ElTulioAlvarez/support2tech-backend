import { LoginUseCase } from "./application/use-cases/LoginUseCase.js";
import { VerifyAccessTokenUseCase } from "./application/use-cases/VerifyAccessTokenUseCase.js";
import { SupabaseIdentityProvider } from "./infrastructure/providers/SupabaseIdentityProvider.js";
import { buildAuthRouter } from "./presentation/http/routes/auth.routes.js";
export function createAuthModule(_deps) {
    const identityProvider = new SupabaseIdentityProvider();
    const loginUseCase = new LoginUseCase(identityProvider);
    const verifyAccessTokenUseCase = new VerifyAccessTokenUseCase(identityProvider);
    return {
        identityProvider,
        useCases: {
            loginUseCase,
            verifyAccessTokenUseCase,
        },
        register(app) {
            app.use("/auth", buildAuthRouter({ loginUseCase, verifyAccessTokenUseCase }));
        },
    };
}
//# sourceMappingURL=index.js.map