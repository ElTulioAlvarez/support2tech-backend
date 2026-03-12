import type { CalendarFilters } from "../../domain/entities/CalendarTask.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";

export class ListCalendarTasksUseCase {
  constructor(private readonly calendarRepository: CalendarRepository) {}

  execute(filters: CalendarFilters) {
    return this.calendarRepository.findMany(filters);
  }
}
