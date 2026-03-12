import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";

export class DeleteTechnicianUseCase {
  constructor(private readonly technicianRepository: TechnicianRepository) {}

  async execute(id: string) {
    const deleted = await this.technicianRepository.delete(id);
    if (!deleted) throw new NotFoundError("Técnico no encontrado");
    return { deleted: true };
  }
}
