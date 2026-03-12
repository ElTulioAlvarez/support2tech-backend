import { BadRequestError, NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";
import type { UpdateCalendarTaskInput } from "../../domain/entities/CalendarTask.js";

const ALLOWED_STATUS = new Set(["pendiente", "en_progreso", "completado", "aplazado", "cancelado"]);

export class UpdateCalendarTaskUseCase {
  constructor(private readonly calendarRepository: CalendarRepository) {}

  async execute(id: string, input: UpdateCalendarTaskInput) {
    if (input.titulo !== undefined && !input.titulo?.trim()) throw new BadRequestError("El título no puede ir vacío");
    if (input.fechaProgramada !== undefined && (Number.isNaN(input.fechaProgramada.getTime()))) {
      throw new BadRequestError("La fecha programada es inválida");
    }
    if (input.estatus !== undefined && !ALLOWED_STATUS.has(input.estatus)) {
      throw new BadRequestError("El estatus del calendario es inválido");
    }

    const updated = await this.calendarRepository.update(id, {
      ...input,
      ...(input.titulo !== undefined ? { titulo: input.titulo.trim() } : {}),
      fechaModificada: new Date(),
    });
    if (!updated) throw new NotFoundError("Actividad de calendario no encontrada");
    return updated;
  }
}
