import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";
import type { UpdateCalendarTaskInput } from "../../domain/entities/CalendarTask.js";
export declare class UpdateCalendarTaskUseCase {
    private readonly calendarRepository;
    constructor(calendarRepository: CalendarRepository);
    execute(id: string, input: UpdateCalendarTaskInput): Promise<import("../../domain/entities/CalendarTask.js").CalendarTask>;
}
//# sourceMappingURL=UpdateCalendarTaskUseCase.d.ts.map