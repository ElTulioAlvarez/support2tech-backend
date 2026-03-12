import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class GetTechnicianByIdUseCase {
    technicianRepository;
    constructor(technicianRepository) {
        this.technicianRepository = technicianRepository;
    }
    async execute(id) {
        const technician = await this.technicianRepository.findById(id);
        if (!technician)
            throw new NotFoundError("Técnico no encontrado");
        return technician;
    }
}
//# sourceMappingURL=GetTechnicianByIdUseCase.js.map