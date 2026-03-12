import type { CreateCalendarTaskInput } from "../../domain/entities/CalendarTask.js";
import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";
export declare class CreateCalendarTaskUseCase {
    private readonly calendarRepository;
    constructor(calendarRepository: CalendarRepository);
    execute(input: CreateCalendarTaskInput): Promise<import("../../domain/entities/CalendarTask.js").CalendarTask>;
}
//# sourceMappingURL=CreateCalendarTaskUseCase.d.ts.map