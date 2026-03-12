import type { TechnicianFilters } from "../../domain/entities/Technician.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";
export declare class ListTechniciansUseCase {
    private readonly technicianRepository;
    constructor(technicianRepository: TechnicianRepository);
    execute(filters: TechnicianFilters): Promise<import("../../../../shared/domain/pagination/Pagination.js").PaginatedResult<import("../../domain/entities/Technician.js").TechnicianSummary>>;
}
//# sourceMappingURL=ListTechniciansUseCase.d.ts.map