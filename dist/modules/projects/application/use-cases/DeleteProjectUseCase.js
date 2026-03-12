import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class DeleteProjectUseCase {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async execute(id) {
        const deleted = await this.projectRepository.delete(id);
        if (!deleted)
            throw new NotFoundError("Proyecto no encontrado");
        return { deleted: true };
    }
}
//# sourceMappingURL=DeleteProjectUseCase.js.map