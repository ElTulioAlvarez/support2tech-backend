import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class GetProjectByIdUseCase {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async execute(id) {
        const project = await this.projectRepository.findById(id);
        if (!project)
            throw new NotFoundError("Proyecto no encontrado");
        return project;
    }
}
//# sourceMappingURL=GetProjectByIdUseCase.js.map