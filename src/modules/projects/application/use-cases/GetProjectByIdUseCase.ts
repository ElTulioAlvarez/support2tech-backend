import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";

export class GetProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(id: string) {
    const project = await this.projectRepository.findById(id);
    if (!project) throw new NotFoundError("Proyecto no encontrado");
    return project;
  }
}
