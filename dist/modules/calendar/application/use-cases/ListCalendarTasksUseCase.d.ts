import type { CalendarFilters } from "../../domain/entities/CalendarTask.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";
export declare class ListCalendarTasksUseCase {
    private readonly calendarRepository;
    constructor(calendarRepository: CalendarRepository);
    execute(filters: CalendarFilters): Promise<import("../../../../shared/domain/pagination/Pagination.js").PaginatedResult<import("../../domain/entities/CalendarTask.js").CalendarTask>>;
}
//# sourceMappingURL=ListCalendarTasksUseCase.d.ts.map