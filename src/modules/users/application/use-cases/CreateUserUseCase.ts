import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
import type { AuthAdminProvider } from "../../domain/services/AuthAdminProvider.js";
import type { UserRepository } from "../../domain/repositories/UserRepository.js";
import type { CreateUserInput } from "../../domain/entities/User.js";

export class CreateUserUseCase {
  constructor(
    private readonly authAdminProvider: AuthAdminProvider,
    private readonly userRepository: UserRepository
  ) {}

  async execute(input: CreateUserInput) {
    const email = input.email.trim().toLowerCase();
    const password = input.password.trim();
    const nombre = input.nombre?.trim() || null;
    const telefono = input.telefono?.trim() || null;
    const estado = input.estado ?? "activo";

    if (!email) throw new BadRequestError("El email es requerido");
    if (!password) throw new BadRequestError("La contraseña es requerida");
    if (password.length < 6) {
      throw new BadRequestError("La contraseña debe tener al menos 6 caracteres");
    }

    const existing = await this.userRepository.findByEmail(email);
    if (existing) {
      throw new BadRequestError("Ya existe un usuario con ese email");
    }

    const authUser = await this.authAdminProvider.createUser({
      email,
      password,
    });

    try {
      return await this.userRepository.create({
        id: authUser.id,
        nombre,
        telefono,
        rol: input.rol,
        estado,
      });
    } catch (error) {
      try {
        await this.authAdminProvider.deleteUser(authUser.id);
      } catch {
        // rollback best-effort
      }
      throw error;
    }
  }
}