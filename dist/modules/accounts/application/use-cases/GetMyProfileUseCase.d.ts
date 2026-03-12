import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";
export declare class GetMyProfileUseCase {
    private readonly profileRepository;
    constructor(profileRepository: ProfileRepository);
    execute(userId: string): Promise<import("../../domain/entities/Profile.js").Profile | null>;
}
//# sourceMappingURL=GetMyProfileUseCase.d.ts.map