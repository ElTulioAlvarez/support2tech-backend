import type { ProfileRepository } from "../../domain/repositories/ProfileRepository";
import type { Profile } from "../../domain/entities/Profile";
import type { PrismaClient } from "../db/generated/prisma/client.js";

export class PrismaProfileRepository implements ProfileRepository {
  constructor(private readonly db: PrismaClient) {}

  async findById(id: string): Promise<Profile | null> {
    const row = await this.db.profiles.findUnique({ where: { id } });
    if (!row) return null;

    return {
      id: row.id,
      nombre: row.nombre,
      rol: (row.rol ?? "tecnico") as any,
      telefono: row.telefono,
      estado: row.estado,
      createdAt: row.created_at ? new Date(row.created_at) : null,
    };
  }
}