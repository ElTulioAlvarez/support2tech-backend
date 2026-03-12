import type { GetMyProfileUseCase } from "../../../application/use-cases/GetMyProfileUseCase.js";
import type { EnsureActiveProfileUseCase } from "../../../application/use-cases/EnsureActiveProfileUseCase.js";
import type { VerifyAccessTokenUseCase } from "../../../../auth/application/use-cases/VerifyAccessTokenUseCase.js";
export declare function buildAccountRouter(deps: {
    getMyProfileUseCase: GetMyProfileUseCase;
    ensureActiveProfileUseCase: EnsureActiveProfileUseCase;
    verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
}): import("express-serve-static-core").Router;
//# sourceMappingURL=account.routes.d.ts.map