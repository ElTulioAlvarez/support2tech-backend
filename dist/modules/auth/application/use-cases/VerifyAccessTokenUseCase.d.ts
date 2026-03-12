import type { IdentityProvider } from "../../domain/services/IdentityProvider.js";
export declare class VerifyAccessTokenUseCase {
    private readonly identityProvider;
    constructor(identityProvider: IdentityProvider);
    execute(token: string): Promise<import("../../domain/entities/AuthIdentity.js").AuthIdentity>;
}
//# sourceMappingURL=VerifyAccessTokenUseCase.d.ts.map