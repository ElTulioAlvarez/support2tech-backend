import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";

export class GetTechnicianCalendarUseCase {
  constructor(private readonly technicianRepository: TechnicianRepository) {}

  execute(id: string, start?: Date, end?: Date) {
    return this.technicianRepository.findCalendarByTechnician(id, start, end);
  }
}
