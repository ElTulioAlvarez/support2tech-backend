import type { PaginatedResult } from "../../../../shared/domain/pagination/Pagination.js";
import type { CalendarFilters, CalendarTask, CreateCalendarTaskInput, UpdateCalendarTaskInput } from "../entities/CalendarTask.js";
export interface CalendarRepository {
    findMany(filters: CalendarFilters): Promise<PaginatedResult<CalendarTask>>;
    findById(id: string): Promise<CalendarTask | null>;
    create(input: CreateCalendarTaskInput): Promise<CalendarTask>;
    update(id: string, input: UpdateCalendarTaskInput): Promise<CalendarTask | null>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=CalendarRepository.d.ts.map