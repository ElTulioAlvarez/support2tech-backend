import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { AuthAdminProvider } from "../../domain/services/AuthAdminProvider.js";
import type { UserRepository } from "../../domain/repositories/UserRepository.js";

export class UpdateUserEmailUseCase {
  constructor(
    private readonly authAdminProvider: AuthAdminProvider,
    private readonly userRepository: UserRepository
  ) {}

  async execute(id: string, email: string) {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      throw new BadRequestError("El email es requerido");
    }

    const existing = await this.userRepository.findById(id);
    if (!existing) {
      throw new NotFoundError("Usuario no encontrado");
    }

    const duplicate = await this.userRepository.findByEmail(normalizedEmail);
    if (duplicate && duplicate.id !== id) {
      throw new BadRequestError("Ya existe un usuario con ese email");
    }

    return this.authAdminProvider.updateUserEmail(id, normalizedEmail);
  }
}