import type { AuthIdentity } from "../../domain/entities/AuthIdentity.js";
import type { IdentityProvider, LoginResult } from "../../domain/services/IdentityProvider.js";
import { supabaseAuth } from "./supabaseClient.js";

export class SupabaseIdentityProvider implements IdentityProvider {
  async login(email: string, password: string): Promise<LoginResult> {
    const { data, error } = await supabaseAuth.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session || !data.user) {
      throw new Error(error?.message ?? "Credenciales inválidas");
    }

    return {
      accessToken: data.session.access_token,
      refreshToken: data.session.refresh_token ?? null,
      expiresIn: data.session.expires_in ?? null,
      tokenType: data.session.token_type ?? null,
      identity: {
        userId: data.user.id,
        email: data.user.email ?? null,
      },
    };
  }

  async verifyAccessToken(token: string): Promise<AuthIdentity> {
    const { data, error } = await supabaseAuth.auth.getUser(token);

    if (error || !data?.user?.id) {
      throw new Error("Invalid token");
    }

    return {
      userId: data.user.id,
      email: data.user.email ?? null,
    };
  }
}
