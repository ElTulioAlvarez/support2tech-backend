import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";
export declare class GetTechnicianCalendarUseCase {
    private readonly technicianRepository;
    constructor(technicianRepository: TechnicianRepository);
    execute(id: string, start?: Date, end?: Date): Promise<import("../../domain/entities/Technician.js").TechnicianCalendarTask[]>;
}
//# sourceMappingURL=GetTechnicianCalendarUseCase.d.ts.map