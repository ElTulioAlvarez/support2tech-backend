import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
import type { CreateCalendarTaskInput } from "../../domain/entities/CalendarTask.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";

const ALLOWED_STATUS = new Set(["pendiente", "en_progreso", "completado", "aplazado", "cancelado"]);

export class CreateCalendarTaskUseCase {
  constructor(private readonly calendarRepository: CalendarRepository) {}

  async execute(input: CreateCalendarTaskInput) {
    if (!input.tecnicoId?.trim()) throw new BadRequestError("El técnico es requerido");
    if (!input.titulo?.trim()) throw new BadRequestError("El título es requerido");
    if (!(input.fechaProgramada instanceof Date) || Number.isNaN(input.fechaProgramada.getTime())) {
      throw new BadRequestError("La fecha programada es inválida");
    }

    const estatus = input.estatus ?? "pendiente";
    if (!ALLOWED_STATUS.has(estatus)) {
      throw new BadRequestError("El estatus del calendario es inválido");
    }

    return this.calendarRepository.create({ ...input, titulo: input.titulo.trim(), estatus });
  }
}
