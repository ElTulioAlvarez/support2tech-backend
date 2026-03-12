import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
export class CreateTechnicianUseCase {
    technicianRepository;
    constructor(technicianRepository) {
        this.technicianRepository = technicianRepository;
    }
    async execute(input) {
        if (!input.id?.trim())
            throw new BadRequestError("El id del usuario auth es requerido");
        return this.technicianRepository.create({
            ...input,
            id: input.id.trim(),
            nombre: input.nombre?.trim() ?? null,
            telefono: input.telefono?.trim() ?? null,
            estado: input.estado?.trim() || "activo",
        });
    }
}
//# sourceMappingURL=CreateTechnicianUseCase.js.map