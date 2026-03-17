export type AuthAdminUser = {
  id: string;
  email: string;
  createdAt: Date | null;
};

export interface AuthAdminProvider {
  createUser(input: {
    email: string;
    password: string;
  }): Promise<AuthAdminUser>;

  getUserById(id: string): Promise<AuthAdminUser | null>;

  updateUserEmail(id: string, email: string): Promise<AuthAdminUser>;

  updateUserPassword(id: string, password: string): Promise<void>;

  deleteUser(id: string): Promise<void>;
}