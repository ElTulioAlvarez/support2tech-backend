import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
export class CreateProjectUseCase {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async execute(input) {
        if (!input.nombre?.trim()) {
            throw new BadRequestError("El nombre del proyecto es requerido");
        }
        if (input.polizaAdquirida && input.polizaVence && input.polizaAdquirida > input.polizaVence) {
            throw new BadRequestError("La póliza adquirida no puede ser mayor que la póliza de vencimiento");
        }
        return this.projectRepository.create({ ...input, nombre: input.nombre.trim() });
    }
}
//# sourceMappingURL=CreateProjectUseCase.js.map