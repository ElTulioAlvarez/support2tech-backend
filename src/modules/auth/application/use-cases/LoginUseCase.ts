import type { IdentityProvider } from "../../domain/services/IdentityProvider.js";

export class LoginUseCase {
  constructor(private readonly identityProvider: IdentityProvider) {}

  execute(email: string, password: string) {
    return this.identityProvider.login(email, password);
  }
}
