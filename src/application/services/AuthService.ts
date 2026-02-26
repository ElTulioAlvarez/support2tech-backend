export interface AuthUser {
  userId: string;
}

export interface AuthService {
  verifyBearerToken(token: string): Promise<AuthUser>;
}