import type { UserFilters } from "../../domain/entities/User.js";
import type { UserRepository } from "../../domain/repositories/UserRepository.js";

export class ListUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(filters: UserFilters) {
    return this.userRepository.list({
      query: filters.query?.trim() || undefined,
      rol: filters.rol,
      estado: filters.estado,
      page: filters.page ?? 1,
      pageSize: filters.pageSize ?? 20,
    });
  }
}