import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
import type { CreateTechnicianInput } from "../../domain/entities/Technician.js";
import type { TechnicianRepository } from "../../domain/repositories/TechnicianRepository.js";

export class CreateTechnicianUseCase {
  constructor(private readonly technicianRepository: TechnicianRepository) {}

  async execute(input: CreateTechnicianInput) {
    if (!input.id?.trim()) throw new BadRequestError("El id del usuario auth es requerido");
    return this.technicianRepository.create({
      ...input,
      id: input.id.trim(),
      nombre: input.nombre?.trim() ?? null,
      telefono: input.telefono?.trim() ?? null,
      estado: input.estado?.trim() || "activo",
    });
  }
}
