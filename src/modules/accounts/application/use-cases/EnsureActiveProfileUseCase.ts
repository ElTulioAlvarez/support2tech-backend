import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";
import type { Profile } from "../../domain/entities/Profile.js";

export class EnsureActiveProfileUseCase {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(userId: string): Promise<Profile> {
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
