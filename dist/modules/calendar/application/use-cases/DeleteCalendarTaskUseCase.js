import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class DeleteCalendarTaskUseCase {
    calendarRepository;
    constructor(calendarRepository) {
        this.calendarRepository = calendarRepository;
    }
    async execute(id) {
        const deleted = await this.calendarRepository.delete(id);
        if (!deleted)
            throw new NotFoundError("Actividad de calendario no encontrada");
        return { deleted: true };
    }
}
//# sourceMappingURL=DeleteCalendarTaskUseCase.js.map