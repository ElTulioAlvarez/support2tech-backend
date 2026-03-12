import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";

export class GetRoleByUserIdUseCase {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(userId: string) {
    const profile = await this.profileRepository.findById(userId);

    if (!profile) return null;
    if (profile.estado !== "activo") return null;

    return profile.rol;
  }
}
