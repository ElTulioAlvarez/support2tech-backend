export class ListCalendarTasksUseCase {
    calendarRepository;
    constructor(calendarRepository) {
        this.calendarRepository = calendarRepository;
    }
    execute(filters) {
        return this.calendarRepository.findMany(filters);
    }
}
//# sourceMappingURL=ListCalendarTasksUseCase.js.map