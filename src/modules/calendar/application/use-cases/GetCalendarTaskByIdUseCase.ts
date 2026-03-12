import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";

export class GetCalendarTaskByIdUseCase {
  constructor(private readonly calendarRepository: CalendarRepository) {}

  async execute(id: string) {
    const task = await this.calendarRepository.findById(id);
    if (!task) throw new NotFoundError("Actividad de calendario no encontrada");
    return task;
  }
}
