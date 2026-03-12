import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";
import type { UpdateProjectInput } from "../../domain/entities/Project.js";
export declare class UpdateProjectUseCase {
    private readonly projectRepository;
    constructor(projectRepository: ProjectRepository);
    execute(id: string, input: UpdateProjectInput): Promise<import("../../domain/entities/Project.js").Project>;
}
//# sourceMappingURL=UpdateProjectUseCase.d.ts.map