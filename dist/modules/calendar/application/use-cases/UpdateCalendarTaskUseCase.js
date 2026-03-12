import { BadRequestError, NotFoundError } from "../../../../shared/domain/errors/AppError.js";
const ALLOWED_STATUS = new Set(["pendiente", "en_progreso", "completado", "aplazado", "cancelado"]);
export class UpdateCalendarTaskUseCase {
    calendarRepository;
    constructor(calendarRepository) {
        this.calendarRepository = calendarRepository;
    }
    async execute(id, input) {
        if (input.titulo !== undefined && !input.titulo?.trim())
            throw new BadRequestError("El título no puede ir vacío");
        if (input.fechaProgramada !== undefined && (Number.isNaN(input.fechaProgramada.getTime()))) {
            throw new BadRequestError("La fecha programada es inválida");
        }
        if (input.estatus !== undefined && !ALLOWED_STATUS.has(input.estatus)) {
            throw new BadRequestError("El estatus del calendario es inválido");
        }
        const updated = await this.calendarRepository.update(id, {
            ...input,
            ...(input.titulo !== undefined ? { titulo: input.titulo.trim() } : {}),
            fechaModificada: new Date(),
        });
        if (!updated)
            throw new NotFoundError("Actividad de calendario no encontrada");
        return updated;
    }
}
//# sourceMappingURL=UpdateCalendarTaskUseCase.js.map