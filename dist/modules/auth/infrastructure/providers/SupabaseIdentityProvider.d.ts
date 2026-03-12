import type { AuthIdentity } from "../../domain/entities/AuthIdentity.js";
import type { IdentityProvider, LoginResult } from "../../domain/services/IdentityProvider.js";
export declare class SupabaseIdentityProvider implements IdentityProvider {
    login(email: string, password: string): Promise<LoginResult>;
    verifyAccessToken(token: string): Promise<AuthIdentity>;
}
//# sourceMappingURL=SupabaseIdentityProvider.d.ts.map