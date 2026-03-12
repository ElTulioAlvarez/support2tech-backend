export class GetMyProfileUseCase {
    profileRepository;
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    execute(userId) {
        return this.profileRepository.findById(userId);
    }
}
//# sourceMappingURL=GetMyProfileUseCase.js.map