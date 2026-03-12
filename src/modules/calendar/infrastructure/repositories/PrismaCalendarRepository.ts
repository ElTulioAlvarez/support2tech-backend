import type { PrismaClient } from "../../../../shared/infrastructure/db/generated/prisma/client.js";
import { buildPaginatedResult } from "../../../../shared/domain/pagination/Pagination.js";
import type { CalendarFilters, CalendarTask, CreateCalendarTaskInput, UpdateCalendarTaskInput } from "../../domain/entities/CalendarTask.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";

function mapTask(row: any): CalendarTask {
  return {
    id: row.id,
    tecnicoId: row.tecnico_id,
    reporteId: row.reporte_id,
    titulo: row.titulo,
    descripcion: row.descripcion,
    fechaProgramada: new Date(row.fecha_programada),
    horaProgramada: row.hora_programada ? String(row.hora_programada) : null,
    estatus: row.estatus,
    motivoAplazo: row.motivo_aplazo,
    fechaModificada: row.fecha_modificada ? new Date(row.fecha_modificada) : null,
    creadoPor: row.creado_por,
    createdAt: new Date(row.created_at),
    horaInicio: row.hora_inicio ? String(row.hora_inicio) : null,
    horaFin: row.hora_fin ? String(row.hora_fin) : null,
    orden: row.orden,
    color: row.color,
    ubicacion: row.ubicacion,
    tipo: row.tipo,
    prioridad: row.prioridad,
    proyectoId: row.proyecto_id,
    numeroTicket: row.numero_ticket,
  };
}

export class PrismaCalendarRepository implements CalendarRepository {
  constructor(private readonly db: PrismaClient) {}

  async findMany(filters: CalendarFilters) {
    const where = {
      ...(filters.tecnicoId ? { tecnico_id: filters.tecnicoId } : {}),
      ...(filters.proyectoId ? { proyecto_id: filters.proyectoId } : {}),
      ...(filters.status ? { estatus: filters.status } : {}),
      ...(filters.start || filters.end
        ? {
            fecha_programada: {
              ...(filters.start ? { gte: filters.start } : {}),
              ...(filters.end ? { lte: filters.end } : {}),
            },
          }
        : {}),
    };

    const skip = (filters.page - 1) * filters.pageSize;
    const [rows, total] = await Promise.all([
      this.db.calendario_tecnico.findMany({
        where,
        orderBy: [{ fecha_programada: "asc" }, { hora_programada: "asc" }, { orden: "asc" }],
        skip,
        take: filters.pageSize,
      }),
      this.db.calendario_tecnico.count({ where }),
    ]);

    return buildPaginatedResult({ items: rows.map(mapTask), total, page: filters.page, pageSize: filters.pageSize });
  }

  async findById(id: string): Promise<CalendarTask | null> {
    const row = await this.db.calendario_tecnico.findUnique({ where: { id } });
    return row ? mapTask(row) : null;
  }

  async create(input: CreateCalendarTaskInput): Promise<CalendarTask> {
    const row = await this.db.calendario_tecnico.create({
      data: {
        tecnico_id: input.tecnicoId,
        reporte_id: input.reporteId ?? null,
        titulo: input.titulo,
        descripcion: input.descripcion ?? null,
        fecha_programada: input.fechaProgramada,
        hora_programada: input.horaProgramada ?? null,
        estatus: input.estatus ?? "pendiente",
        motivo_aplazo: input.motivoAplazo ?? null,
        creado_por: input.creadoPor,
        hora_inicio: input.horaInicio ?? null,
        hora_fin: input.horaFin ?? null,
        orden: input.orden ?? 0,
        color: input.color ?? null,
        ubicacion: input.ubicacion ?? null,
        tipo: input.tipo ?? null,
        prioridad: input.prioridad ?? 2,
        proyecto_id: input.proyectoId ?? null,
        numero_ticket: "",
      },
    });

    return mapTask(row);
  }

  async update(id: string, input: UpdateCalendarTaskInput): Promise<CalendarTask | null> {
    const row = await this.db.calendario_tecnico.updateManyAndReturn({
      where: { id },
      data: {
        ...(input.tecnicoId !== undefined ? { tecnico_id: input.tecnicoId } : {}),
        ...(input.reporteId !== undefined ? { reporte_id: input.reporteId } : {}),
        ...(input.titulo !== undefined ? { titulo: input.titulo } : {}),
        ...(input.descripcion !== undefined ? { descripcion: input.descripcion } : {}),
        ...(input.fechaProgramada !== undefined ? { fecha_programada: input.fechaProgramada } : {}),
        ...(input.horaProgramada !== undefined ? { hora_programada: input.horaProgramada } : {}),
        ...(input.estatus !== undefined ? { estatus: input.estatus } : {}),
        ...(input.motivoAplazo !== undefined ? { motivo_aplazo: input.motivoAplazo } : {}),
        ...(input.fechaModificada !== undefined ? { fecha_modificada: input.fechaModificada } : {}),
        ...(input.horaInicio !== undefined ? { hora_inicio: input.horaInicio } : {}),
        ...(input.horaFin !== undefined ? { hora_fin: input.horaFin } : {}),
        ...(input.orden !== undefined ? { orden: input.orden } : {}),
        ...(input.color !== undefined ? { color: input.color } : {}),
        ...(input.ubicacion !== undefined ? { ubicacion: input.ubicacion } : {}),
        ...(input.tipo !== undefined ? { tipo: input.tipo } : {}),
        ...(input.prioridad !== undefined ? { prioridad: input.prioridad } : {}),
        ...(input.proyectoId !== undefined ? { proyecto_id: input.proyectoId } : {}),
      },
      limit: 1,
    });

    return row[0] ? mapTask(row[0]) : null;
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.db.calendario_tecnico.deleteMany({ where: { id } });
    return deleted.count > 0;
  }
}
