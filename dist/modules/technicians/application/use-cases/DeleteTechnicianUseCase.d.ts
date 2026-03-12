import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";
export declare class DeleteTechnicianUseCase {
    private readonly technicianRepository;
    constructor(technicianRepository: TechnicianRepository);
    execute(id: string): Promise<{
        deleted: boolean;
    }>;
}
//# sourceMappingURL=DeleteTechnicianUseCase.d.ts.map