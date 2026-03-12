import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";

export class DeleteCalendarTaskUseCase {
  constructor(private readonly calendarRepository: CalendarRepository) {}

  async execute(id: string) {
    const deleted = await this.calendarRepository.delete(id);
    if (!deleted) throw new NotFoundError("Actividad de calendario no encontrada");
    return { deleted: true };
  }
}
