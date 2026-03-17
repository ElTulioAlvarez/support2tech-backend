import type {
  CreateUserInput,
  UpdateUserInput,
  UserEntity,
  UserFilters,
} from "../entities/User.js";

export type PaginatedUsersResult = {
  items: UserEntity[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export interface UserRepository {
  list(filters: UserFilters): Promise<PaginatedUsersResult>;
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  create(input: {
    id: string;
    nombre?: string | null;
    telefono?: string | null;
    rol: "admin" | "tecnico";
    estado: "activo" | "inactivo";
  }): Promise<UserEntity>;
  update(id: string, input: UpdateUserInput): Promise<UserEntity | null>;
  delete(id: string): Promise<boolean>;
}