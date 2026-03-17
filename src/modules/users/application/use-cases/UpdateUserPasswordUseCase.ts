import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { AuthAdminProvider } from "../../domain/services/AuthAdminProvider.js";
import type { UserRepository } from "../../domain/repositories/UserRepository.js";

export class UpdateUserPasswordUseCase {
  constructor(
    private readonly authAdminProvider: AuthAdminProvider,
    private readonly userRepository: UserRepository
  ) {}

  async execute(id: string, password: string) {
    const normalizedPassword = password.trim();

    if (!normalizedPassword) {
      throw new BadRequestError("La contraseña es requerida");
    }

    if (normalizedPassword.length < 6) {
      throw new BadRequestError("La contraseña debe tener al menos 6 caracteres");
    }

    const existing = await this.userRepository.findById(id);
    if (!existing) {
      throw new NotFoundError("Usuario no encontrado");
    }

    await this.authAdminProvider.updateUserPassword(id, normalizedPassword);

    return { updated: true, id };
  }
}