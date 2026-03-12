import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";

export class GetMyProfileUseCase {
  constructor(private readonly profileRepository: ProfileRepository) {}

  execute(userId: string) {
    return this.profileRepository.findById(userId);
  }
}
