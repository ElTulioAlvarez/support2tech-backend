import type { IdentityProvider } from "../../domain/services/IdentityProvider.js";

export class VerifyAccessTokenUseCase {
  constructor(private readonly identityProvider: IdentityProvider) {}

  execute(token: string) {
    return this.identityProvider.verifyAccessToken(token);
  }
}
