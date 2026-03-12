import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";
export declare class DeleteProjectUseCase {
    private readonly projectRepository;
    constructor(projectRepository: ProjectRepository);
    execute(id: string): Promise<{
        deleted: boolean;
    }>;
}
//# sourceMappingURL=DeleteProjectUseCase.d.ts.map