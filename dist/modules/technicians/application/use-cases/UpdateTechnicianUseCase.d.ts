import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";
import type { UpdateTechnicianInput } from "../../domain/entities/Technician.js";
export declare class UpdateTechnicianUseCase {
    private readonly technicianRepository;
    constructor(technicianRepository: TechnicianRepository);
    execute(id: string, input: UpdateTechnicianInput): Promise<import("../../domain/entities/Technician.js").TechnicianSummary>;
}
//# sourceMappingURL=UpdateTechnicianUseCase.d.ts.map