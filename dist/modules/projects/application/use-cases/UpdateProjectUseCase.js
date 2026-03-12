import { BadRequestError, NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class UpdateProjectUseCase {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async execute(id, input) {
        if (input.nombre !== undefined && !input.nombre?.trim()) {
            throw new BadRequestError("El nombre del proyecto no puede ir vacío");
        }
        if (input.polizaAdquirida && input.polizaVence && input.polizaAdquirida > input.polizaVence) {
            throw new BadRequestError("La póliza adquirida no puede ser mayor que la póliza de vencimiento");
        }
        const updated = await this.projectRepository.update(id, {
            ...input,
            ...(input.nombre !== undefined ? { nombre: input.nombre.trim() } : {}),
        });
        if (!updated)
            throw new NotFoundError("Proyecto no encontrado");
        return updated;
    }
}
//# sourceMappingURL=UpdateProjectUseCase.js.map