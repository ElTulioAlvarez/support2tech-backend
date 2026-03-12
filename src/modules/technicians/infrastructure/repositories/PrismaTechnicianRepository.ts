import type { PrismaClient } from "../../../../shared/infrastructure/db/generated/prisma/client.js";
import { buildPaginatedResult } from "../../../../shared/domain/pagination/Pagination.js";
import type { CreateTechnicianInput, TechnicianCalendarTask, TechnicianFilters, TechnicianSummary, UpdateTechnicianInput } from "../../domain/entities/Technician.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";

function mapTechnician(row: any, pendingTasks: number): TechnicianSummary {
  return {
    id: row.id,
    nombre: row.nombre,
    telefono: row.telefono,
    estado: row.estado,
    createdAt: row.created_at ? new Date(row.created_at) : null,
    pendingTasks,
  };
}

export class PrismaTechnicianRepository implements TechnicianRepository {
  constructor(private readonly db: PrismaClient) {}

  async findMany(filters: TechnicianFilters) {
    const where = {
      rol: "tecnico",
      ...(filters.estado ? { estado: filters.estado } : {}),
      ...(filters.query
        ? {
            OR: [
              { nombre: { contains: filters.query, mode: "insensitive" as const } },
              { telefono: { contains: filters.query, mode: "insensitive" as const } },
              { id: { equals: filters.query } },
            ],
          }
        : {}),
    };

    const skip = (filters.page - 1) * filters.pageSize;
    const [rows, total] = await Promise.all([
      this.db.profiles.findMany({ where, orderBy: [{ nombre: "asc" }], skip, take: filters.pageSize }),
      this.db.profiles.count({ where }),
    ]);

    const items = await Promise.all(rows.map(async (row) => mapTechnician(row, await this.countPending(row.id))));
    return buildPaginatedResult({ items, total, page: filters.page, pageSize: filters.pageSize });
  }

  async findById(id: string): Promise<TechnicianSummary | null> {
    const row = await this.db.profiles.findFirst({ where: { id, rol: "tecnico" } });
    if (!row) return null;
    return mapTechnician(row, await this.countPending(row.id));
  }

  async findCalendarByTechnician(id: string, start?: Date, end?: Date): Promise<TechnicianCalendarTask[]> {
    const rows = await this.db.calendario_tecnico.findMany({
      where: {
        tecnico_id: id,
        ...(start || end ? { fecha_programada: { ...(start ? { gte: start } : {}), ...(end ? { lte: end } : {}) } } : {}),
      },
      orderBy: [{ fecha_programada: "asc" }, { hora_programada: "asc" }],
    });

    return rows.map((row) => ({
      id: row.id,
      titulo: row.titulo,
      fechaProgramada: new Date(row.fecha_programada),
      horaProgramada: row.hora_programada ? String(row.hora_programada) : null,
      estatus: row.estatus,
      proyectoId: row.proyecto_id,
      numeroTicket: row.numero_ticket,
    }));
  }

  async create(input: CreateTechnicianInput): Promise<TechnicianSummary> {
    const row = await this.db.profiles.create({
      data: {
        id: input.id,
        nombre: input.nombre ?? null,
        telefono: input.telefono ?? null,
        estado: input.estado ?? "activo",
        rol: "tecnico",
      },
    });

    return mapTechnician(row, 0);
  }

  async update(id: string, input: UpdateTechnicianInput): Promise<TechnicianSummary | null> {
    const rows = await this.db.profiles.updateManyAndReturn({
      where: { id, rol: "tecnico" },
      data: {
        ...(input.nombre !== undefined ? { nombre: input.nombre } : {}),
        ...(input.telefono !== undefined ? { telefono: input.telefono } : {}),
        ...(input.estado !== undefined ? { estado: input.estado } : {}),
      },
      limit: 1,
    });

    if (!rows[0]) return null;
    return mapTechnician(rows[0], await this.countPending(rows[0].id));
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.db.profiles.deleteMany({ where: { id, rol: "tecnico" } });
    return deleted.count > 0;
  }

  private async countPending(id: string) {
    return this.db.calendario_tecnico.count({ where: { tecnico_id: id, estatus: { in: ["pendiente", "en_progreso", "aplazado"] } } });
  }
}
