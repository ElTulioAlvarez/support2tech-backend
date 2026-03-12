import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";
import type { UpdateTechnicianInput } from "../../domain/entities/Technician.js";

export class UpdateTechnicianUseCase {
  constructor(private readonly technicianRepository: TechnicianRepository) {}

  async execute(id: string, input: UpdateTechnicianInput) {
    const updated = await this.technicianRepository.update(id, {
      ...input,
      ...(input.nombre !== undefined ? { nombre: input.nombre?.trim() ?? null } : {}),
      ...(input.telefono !== undefined ? { telefono: input.telefono?.trim() ?? null } : {}),
      ...(input.estado !== undefined ? { estado: input.estado.trim() } : {}),
    });
    if (!updated) throw new NotFoundError("Técnico no encontrado");
    return updated;
  }
}
