import type { CalendarRepository } from "../../domain/repositories/CalendarRepository.js";
export declare class DeleteCalendarTaskUseCase {
    private readonly calendarRepository;
    constructor(calendarRepository: CalendarRepository);
    execute(id: string): Promise<{
        deleted: boolean;
    }>;
}
//# sourceMappingURL=DeleteCalendarTaskUseCase.d.ts.map