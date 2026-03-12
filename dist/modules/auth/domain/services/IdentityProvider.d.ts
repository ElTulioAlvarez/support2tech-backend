import type { AuthIdentity } from "../entities/AuthIdentity.js";
export interface LoginResult {
    accessToken: string;
    refreshToken: string | null;
    expiresIn: number | null;
    tokenType: string | null;
    identity: AuthIdentity;
}
export interface IdentityProvider {
    login(email: string, password: string): Promise<LoginResult>;
    verifyAccessToken(token: string): Promise<AuthIdentity>;
}
//# sourceMappingURL=IdentityProvider.d.ts.map