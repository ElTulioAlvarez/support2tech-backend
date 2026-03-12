import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";
export declare class GetRoleByUserIdUseCase {
    private readonly profileRepository;
    constructor(profileRepository: ProfileRepository);
    execute(userId: string): Promise<import("../../domain/entities/Profile.js").UserRole | null>;
}
//# sourceMappingURL=GetRoleByUserIdUseCase.d.ts.map