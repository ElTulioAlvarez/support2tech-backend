import type { CreateProjectInput } from "../../domain/entities/Project.js";
import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";
export declare class CreateProjectUseCase {
    private readonly projectRepository;
    constructor(projectRepository: ProjectRepository);
    execute(input: CreateProjectInput): Promise<import("../../domain/entities/Project.js").Project>;
}
//# sourceMappingURL=CreateProjectUseCase.d.ts.map