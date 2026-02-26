import type { Profile } from "../entities/Profile.js";

export interface ProfileRepository {
  findById(id: string): Promise<Profile | null>;
}