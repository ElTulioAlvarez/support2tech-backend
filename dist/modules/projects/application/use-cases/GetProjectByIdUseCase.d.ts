import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";
export declare class GetProjectByIdUseCase {
    private readonly projectRepository;
    constructor(projectRepository: ProjectRepository);
    execute(id: string): Promise<import("../../domain/entities/Project.js").Project>;
}
//# sourceMappingURL=GetProjectByIdUseCase.d.ts.map