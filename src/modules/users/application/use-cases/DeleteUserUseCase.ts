import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { AuthAdminProvider } from "../../domain/services/AuthAdminProvider.js";
import type { UserRepository } from "../../domain/repositories/UserRepository.js";

export class DeleteUserUseCase {
  constructor(
    private readonly authAdminProvider: AuthAdminProvider,
    private readonly userRepository: UserRepository
  ) {}

  async execute(id: string) {
    const existing = await this.userRepository.findById(id);
    if (!existing) {
      throw new NotFoundError("Usuario no encontrado");
    }

    const deletedProfile = await this.userRepository.delete(id);
    if (!deletedProfile) {
      throw new NotFoundError("No se pudo eliminar el perfil del usuario");
    }

    try {
      await this.authAdminProvider.deleteUser(id);
    } catch {
      // Si quieres más rigor transaccional, aquí puedes cambiar a soft delete.
      // Por ahora lo dejamos así por simplicidad operativa.
    }

    return { deleted: true, id };
  }
}