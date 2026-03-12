import type { ProfileRepository } from "../../domain/repositories/ProfileRepository.js";
import type { Profile } from "../../domain/entities/Profile.js";
import type { PrismaClient } from "../../../../shared/infrastructure/db/generated/prisma/client.js";

export class PrismaProfileRepository implements ProfileRepository {
  constructor(private readonly db: PrismaClient) {}

  async findById(id: string): Promise<Profile | null> {
    const row = await this.db.profiles.findUnique({ where: { id } });
    if (!row) return null;

    return {
      id: row.id,
      nombre: row.nombre,
      rol: (row.rol ?? "tecnico") as Profile["rol"],
      telefono: row.telefono,
      estado: row.estado,
      createdAt: row.created_at ? new Date(row.created_at) : null,
    };
  }
}
