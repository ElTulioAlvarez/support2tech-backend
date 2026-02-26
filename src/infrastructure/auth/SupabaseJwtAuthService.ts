import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import type { AuthService, AuthUser } from "../../application/services/AuthService.js";

type JwtPayload = { sub?: string };

export class SupabaseJwtAuthService implements AuthService {
  private readonly jwks;

  constructor(private readonly cfg: { supabaseUrl: string }) {
    const projectRef = new URL(cfg.supabaseUrl).hostname.split(".")[0];

    this.jwks = jwksClient({
      jwksUri: `https://${projectRef}.supabase.co/auth/v1/keys`,
      cache: true,
      cacheMaxEntries: 5,
      cacheMaxAge: 10 * 60 * 1000,
    });
  }

  private getKey(header: any, callback: any) {
    this.jwks.getSigningKey(header.kid, (err, key) => {
      if (err) return callback(err);
      callback(null, key?.getPublicKey());
    });
  }

  async verifyBearerToken(token: string): Promise<AuthUser> {
    const payload = await new Promise<JwtPayload>((resolve, reject) => {
      jwt.verify(
        token,
        this.getKey.bind(this) as any,
        { algorithms: ["RS256"] },
        (err, decoded) => {
          if (err) return reject(err);
          resolve(decoded as JwtPayload);
        }
      );
    });

    if (!payload?.sub) throw new Error("JWT sin sub");
    return { userId: payload.sub };
  }
}