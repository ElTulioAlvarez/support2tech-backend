import type { PrismaClient } from "../../../../shared/infrastructure/db/generated/prisma/client.js";
import type { CalendarFilters, CalendarTask, CreateCalendarTaskInput, UpdateCalendarTaskInput } from "../../domain/entities/CalendarTask.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";
export declare class PrismaCalendarRepository implements CalendarRepository {
    private readonly db;
    constructor(db: PrismaClient);
    findMany(filters: CalendarFilters): Promise<import("../../../../shared/domain/pagination/Pagination.js").PaginatedResult<CalendarTask>>;
    findById(id: string): Promise<CalendarTask | null>;
    create(input: CreateCalendarTaskInput): Promise<CalendarTask>;
    update(id: string, input: UpdateCalendarTaskInput): Promise<CalendarTask | null>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=PrismaCalendarRepository.d.ts.map