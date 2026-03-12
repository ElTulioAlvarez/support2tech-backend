export class VerifyAccessTokenUseCase {
    identityProvider;
    constructor(identityProvider) {
        this.identityProvider = identityProvider;
    }
    execute(token) {
        return this.identityProvider.verifyAccessToken(token);
    }
}
//# sourceMappingURL=VerifyAccessTokenUseCase.js.map