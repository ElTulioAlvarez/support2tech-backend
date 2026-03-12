import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";
import type { Profile } from "../../domain/entities/Profile.js";
export declare class EnsureActiveProfileUseCase {
    private readonly profileRepository;
    constructor(profileRepository: ProfileRepository);
    execute(userId: string): Promise<Profile>;
}
//# sourceMappingURL=EnsureActiveProfileUseCase.d.ts.map