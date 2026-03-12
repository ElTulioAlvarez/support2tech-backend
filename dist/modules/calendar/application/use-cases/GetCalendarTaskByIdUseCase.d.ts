import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";
export declare class GetCalendarTaskByIdUseCase {
    private readonly calendarRepository;
    constructor(calendarRepository: CalendarRepository);
    execute(id: string): Promise<import("../../domain/entities/CalendarTask.js").CalendarTask>;
}
//# sourceMappingURL=GetCalendarTaskByIdUseCase.d.ts.map