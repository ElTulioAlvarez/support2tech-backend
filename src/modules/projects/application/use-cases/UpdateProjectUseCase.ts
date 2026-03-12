import { BadRequestError, NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";
import type { UpdateProjectInput } from "../../domain/entities/Project.js";

export class UpdateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(id: string, input: UpdateProjectInput) {
    if (input.nombre !== undefined && !input.nombre?.trim()) {
      throw new BadRequestError("El nombre del proyecto no puede ir vacío");
    }

    if (input.polizaAdquirida && input.polizaVence && input.polizaAdquirida > input.polizaVence) {
      throw new BadRequestError("La póliza adquirida no puede ser mayor que la póliza de vencimiento");
    }

    const updated = await this.projectRepository.update(id, {
      ...input,
      ...(input.nombre !== undefined ? { nombre: input.nombre.trim() } : {}),
    });

    if (!updated) throw new NotFoundError("Proyecto no encontrado");
    return updated;
  }
}
