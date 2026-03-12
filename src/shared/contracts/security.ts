export type UserRole = "tecnico" | "admin";

export interface AuthenticatedIdentity {
  userId: string;
  email: string | null;
}

export interface CurrentUserProfile {
  id: string;
  nombre: string | null;
  rol: UserRole;
  telefono: string | null;
  estado: "activo" | "inactivo" | string;
  createdAt: Date | null;
}

export interface TokenVerifier {
  verifyAccessToken(token: string): Promise<AuthenticatedIdentity>;
}

export interface CurrentUserResolver {
  getActiveProfile(userId: string): Promise<CurrentUserProfile>;
}
