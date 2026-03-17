export type UserRole = "admin" | "tecnico";
export type UserStatus = "activo" | "inactivo";

export type UserEntity = {
  id: string;
  email: string;
  nombre: string | null;
  telefono: string | null;
  rol: UserRole;
  estado: UserStatus;
  createdAt: Date | null;
};

export type UserFilters = {
  query?: string;
  rol?: UserRole;
  estado?: UserStatus;
  page?: number;
  pageSize?: number;
};

export type CreateUserInput = {
  email: string;
  password: string;
  nombre?: string | null;
  telefono?: string | null;
  rol: UserRole;
  estado?: UserStatus;
};

export type UpdateUserInput = {
  nombre?: string | null;
  telefono?: string | null;
  rol?: UserRole;
  estado?: UserStatus;
};

export type UpdateUserEmailInput = {
  email: string;
};

export type UpdateUserPasswordInput = {
  password: string;
};