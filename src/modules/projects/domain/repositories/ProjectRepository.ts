import type { PaginatedResult } from "../../../../shared/domain/pagination/Pagination.js";
import type { CreateProjectInput, Project, ProjectListFilters, UpdateProjectInput } from "../entities/Project.js";

export interface ProjectRepository {
  findMany(filters: ProjectListFilters): Promise<PaginatedResult<Project>>;
  findById(id: string): Promise<Project | null>;
  create(input: CreateProjectInput): Promise<Project>;
  update(id: string, input: UpdateProjectInput): Promise<Project | null>;
  delete(id: string): Promise<boolean>;
}
