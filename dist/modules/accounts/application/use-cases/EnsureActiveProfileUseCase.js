export class EnsureActiveProfileUseCase {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async execute(userId) {
        const profile = await this.profileRepository.findById(userId);
        if (!profile) {
            throw new Error("Profile not found");
        }
        if (profile.estado !== "activo") {
            throw new Error("User inactive");
        }
        return profile;
    }
}
//# sourceMappingURL=EnsureActiveProfileUseCase.js.map