import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";

export class GetTechnicianByIdUseCase {
  constructor(private readonly technicianRepository: TechnicianRepository) {}

  async execute(id: string) {
    const technician = await this.technicianRepository.findById(id);
    if (!technician) throw new NotFoundError("Técnico no encontrado");
    return technician;
  }
}
