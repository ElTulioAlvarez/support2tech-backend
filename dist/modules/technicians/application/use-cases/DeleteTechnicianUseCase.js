import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class DeleteTechnicianUseCase {
    technicianRepository;
    constructor(technicianRepository) {
        this.technicianRepository = technicianRepository;
    }
    async execute(id) {
        const deleted = await this.technicianRepository.delete(id);
        if (!deleted)
            throw new NotFoundError("Técnico no encontrado");
        return { deleted: true };
    }
}
//# sourceMappingURL=DeleteTechnicianUseCase.js.map