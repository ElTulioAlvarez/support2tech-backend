export class GetRoleByUserIdUseCase {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async execute(userId) {
        const profile = await this.profileRepository.findById(userId);
        return profile?.rol ?? null;
    }
}
//# sourceMappingURL=GetRoleByUserIdUseCase.js.map