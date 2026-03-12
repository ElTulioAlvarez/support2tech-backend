import type { LoginUseCase } from "../../../application/use-cases/LoginUseCase.js";
import type { VerifyAccessTokenUseCase } from "../../../application/use-cases/VerifyAccessTokenUseCase.js";
export declare function buildAuthRouter(deps: {
    loginUseCase: LoginUseCase;
    verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
}): import("express-serve-static-core").Router;
//# sourceMappingURL=auth.routes.d.ts.map