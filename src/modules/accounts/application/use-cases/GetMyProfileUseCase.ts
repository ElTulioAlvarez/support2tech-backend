import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";

export class GetMyProfileUseCase {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(userId: string) {
    return this.profileRepository.findById(userId);
  }
}
