import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { UserRepository } from "../../domain/repositories/UserRepository.js";

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundError("Usuario no encontrado");
    }

    return user;
  }
}