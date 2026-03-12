import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
import type { CreateProjectInput } from "../../domain/entities/Project.js";
import type { ProjectRepository } from "../../domain/repositories/ProjectRepository.js";

export class CreateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(input: CreateProjectInput) {
    if (!input.nombre?.trim()) {
      throw new BadRequestError("El nombre del proyecto es requerido");
    }

    if (input.polizaAdquirida && input.polizaVence && input.polizaAdquirida > input.polizaVence) {
      throw new BadRequestError("La póliza adquirida no puede ser mayor que la póliza de vencimiento");
    }

    return this.projectRepository.create({ ...input, nombre: input.nombre.trim() });
  }
}
