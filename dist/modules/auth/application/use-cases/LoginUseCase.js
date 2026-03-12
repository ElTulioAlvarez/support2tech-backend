export class LoginUseCase {
    identityProvider;
    constructor(identityProvider) {
        this.identityProvider = identityProvider;
    }
    execute(email, password) {
        return this.identityProvider.login(email, password);
    }
}
//# sourceMappingURL=LoginUseCase.js.map