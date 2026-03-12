import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class GetCalendarTaskByIdUseCase {
    calendarRepository;
    constructor(calendarRepository) {
        this.calendarRepository = calendarRepository;
    }
    async execute(id) {
        const task = await this.calendarRepository.findById(id);
        if (!task)
            throw new NotFoundError("Actividad de calendario no encontrada");
        return task;
    }
}
//# sourceMappingURL=GetCalendarTaskByIdUseCase.js.map