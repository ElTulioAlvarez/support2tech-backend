import type { IdentityProvider } from "../../domain/services/IdentityProvider.js";
export declare class LoginUseCase {
    private readonly identityProvider;
    constructor(identityProvider: IdentityProvider);
    execute(email: string, password: string): Promise<import("../../domain/services/IdentityProvider.js").LoginResult>;
}
//# sourceMappingURL=LoginUseCase.d.ts.map