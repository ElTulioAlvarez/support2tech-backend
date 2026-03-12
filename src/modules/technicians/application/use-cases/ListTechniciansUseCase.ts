import type { TechnicianFilters } from "../../domain/entities/Technician.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";

export class ListTechniciansUseCase {
  constructor(private readonly technicianRepository: TechnicianRepository) {}

  execute(filters: TechnicianFilters) {
    return this.technicianRepository.findMany(filters);
  }
}
