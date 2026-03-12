import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";
import type { ProjectListFilters } from "../../domain/entities/Project.js";

export class ListProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  execute(filters: ProjectListFilters) {
    return this.projectRepository.findMany(filters);
  }
}
