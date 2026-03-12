import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class UpdateTechnicianUseCase {
    technicianRepository;
    constructor(technicianRepository) {
        this.technicianRepository = technicianRepository;
    }
    async execute(id, input) {
        const updated = await this.technicianRepository.update(id, {
            ...input,
            ...(input.nombre !== undefined ? { nombre: input.nombre?.trim() ?? null } : {}),
            ...(input.telefono !== undefined ? { telefono: input.telefono?.trim() ?? null } : {}),
            ...(input.estado !== undefined ? { estado: input.estado.trim() } : {}),
        });
        if (!updated)
            throw new NotFoundError("Técnico no encontrado");
        return updated;
    }
}
//# sourceMappingURL=UpdateTechnicianUseCase.js.map