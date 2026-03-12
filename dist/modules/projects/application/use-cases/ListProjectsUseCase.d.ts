import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";
import type { ProjectListFilters } from "../../domain/entities/Project.js";
export declare class ListProjectsUseCase {
    private readonly projectRepository;
    constructor(projectRepository: ProjectRepository);
    execute(filters: ProjectListFilters): Promise<import("../../../../shared/domain/pagination/Pagination.js").PaginatedResult<import("../../domain/entities/Project.js").Project>>;
}
//# sourceMappingURL=ListProjectsUseCase.d.ts.map