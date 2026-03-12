import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";
export declare class GetTechnicianByIdUseCase {
    private readonly technicianRepository;
    constructor(technicianRepository: TechnicianRepository);
    execute(id: string): Promise<import("../../domain/entities/Technician.js").TechnicianSummary>;
}
//# sourceMappingURL=GetTechnicianByIdUseCase.d.ts.map