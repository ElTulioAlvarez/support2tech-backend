import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";
import type { Profile } from "../../domain/entities/Profile.js";
import type { PrismaClient } from "../../../../shared/infrastructure/db/generated/prisma/client.js";
export declare class PrismaProfileRepository implements ProfileRepository {
    private readonly db;
    constructor(db: PrismaClient);
    findById(id: string): Promise<Profile | null>;
}
//# sourceMappingURL=PrismaProfileRepository.d.ts.map