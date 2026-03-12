import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";

export class DeleteProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(id: string) {
    const deleted = await this.projectRepository.delete(id);
    if (!deleted) throw new NotFoundError("Proyecto no encontrado");
    return { deleted: true };
  }
}
