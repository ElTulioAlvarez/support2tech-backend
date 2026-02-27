import type { AuthService, AuthUser } from "../../application/services/AuthService.js";
import { supabaseAuth } from "./supabaseClient.js";

export class SupabaseJwtAuthService implements AuthService {
  async verifyBearerToken(token: string): Promise<AuthUser> {
    // ✅ Validación robusta con Supabase Auth.
    // Evita problemas de algoritmo (HS256/RS256) o JWKS mal configurado.
    const { data, error } = await supabaseAuth.auth.getUser(token);
    if (error || !data?.user?.id) throw new Error("Invalid token");
    return { userId: data.user.id };
  }
}