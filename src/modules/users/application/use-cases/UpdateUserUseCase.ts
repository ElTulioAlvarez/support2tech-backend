import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { UpdateUserInput } from "../../domain/entities/User.js";
import type { UserRepository } from "../../domain/repositories/UserRepository.js";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, input: UpdateUserInput) {
    const payload: UpdateUserInput = {
      nombre: input.nombre !== undefined ? input.nombre?.trim() || null : undefined,
      telefono: input.telefono !== undefined ? input.telefono?.trim() || null : undefined,
      rol: input.rol,
      estado: input.estado,
    };

    if (
      payload.nombre === undefined &&
      payload.telefono === undefined &&
      payload.rol === undefined &&
      payload.estado === undefined
    ) {
      throw new BadRequestError("No hay campos para actualizar");
    }

    const updated = await this.userRepository.update(id, payload);

    if (!updated) {
      throw new NotFoundError("Usuario no encontrado");
    }

    return updated;
  }
}