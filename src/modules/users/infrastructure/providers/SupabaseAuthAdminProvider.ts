import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type {
  AuthAdminProvider,
  AuthAdminUser,
} from "../../domain/services/AuthAdminProvider.js";
import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";

export class SupabaseAuthAdminProvider implements AuthAdminProvider {
  private readonly client: SupabaseClient;

  constructor() {
    const url = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
      throw new Error(
        "SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY son requeridos para el módulo users"
      );
    }

    this.client = createClient(url, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  async createUser(input: { email: string; password: string }): Promise<AuthAdminUser> {
    const { data, error } = await this.client.auth.admin.createUser({
      email: input.email,
      password: input.password,
      email_confirm: true,
    });

    if (error || !data.user) {
      throw new BadRequestError(error?.message ?? "No se pudo crear el usuario en auth");
    }

    return {
      id: data.user.id,
      email: data.user.email ?? input.email,
      createdAt: data.user.created_at ? new Date(data.user.created_at) : null,
    };
  }

  async getUserById(id: string): Promise<AuthAdminUser | null> {
    const { data, error } = await this.client.auth.admin.getUserById(id);

    if (error) {
      return null;
    }

    const user = data.user;
    if (!user) return null;

    return {
      id: user.id,
      email: user.email ?? "",
      createdAt: user.created_at ? new Date(user.created_at) : null,
    };
  }

  async updateUserEmail(id: string, email: string): Promise<AuthAdminUser> {
    const { data, error } = await this.client.auth.admin.updateUserById(id, {
      email,
      email_confirm: true,
    });

    if (error || !data.user) {
      throw new BadRequestError(error?.message ?? "No se pudo actualizar el email");
    }

    return {
      id: data.user.id,
      email: data.user.email ?? email,
      createdAt: data.user.created_at ? new Date(data.user.created_at) : null,
    };
  }

  async updateUserPassword(id: string, password: string): Promise<void> {
    const { error } = await this.client.auth.admin.updateUserById(id, {
      password,
    });

    if (error) {
      throw new BadRequestError(error.message ?? "No se pudo actualizar la contraseña");
    }
  }

  async deleteUser(id: string): Promise<void> {
    const { error } = await this.client.auth.admin.deleteUser(id);

    if (error) {
      throw new BadRequestError(error.message ?? "No se pudo eliminar el usuario auth");
    }
  }
}