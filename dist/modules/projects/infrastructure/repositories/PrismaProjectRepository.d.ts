import type { PrismaClient } from "../../../../shared/infrastructure/db/generated/prisma/client.js";
import type { CreateProjectInput, Project, ProjectListFilters, UpdateProjectInput } from "../../domain/entities/Project.js";
import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";
export declare class PrismaProjectRepository implements ProjectRepository {
    private readonly db;
    constructor(db: PrismaClient);
    findMany(filters: ProjectListFilters): Promise<import("../../../../shared/domain/pagination/Pagination.js").PaginatedResult<Project>>;
    findById(id: string): Promise<Project | null>;
    create(input: CreateProjectInput): Promise<Project>;
    update(id: string, input: UpdateProjectInput): Promise<Project | null>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=PrismaProjectRepository.d.ts.map