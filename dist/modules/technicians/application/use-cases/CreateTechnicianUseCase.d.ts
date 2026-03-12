import type { CreateTechnicianInput } from "../../domain/entities/Technician.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";
export declare class CreateTechnicianUseCase {
    private readonly technicianRepository;
    constructor(technicianRepository: TechnicianRepository);
    execute(input: CreateTechnicianInput): Promise<import("../../domain/entities/Technician.js").TechnicianSummary>;
}
//# sourceMappingURL=CreateTechnicianUseCase.d.ts.map