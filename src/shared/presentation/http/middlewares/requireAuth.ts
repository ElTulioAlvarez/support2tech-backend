import type { Request, Response, NextFunction } from "express";
import type { TokenVerifier } from "../../../contracts/security.js";
import "../types/request-context.js";

export function requireAuth(tokenVerifier: TokenVerifier) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const header = req.headers.authorization;

      if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Authorization bearer token requerido" });
      }

      const token = header.slice("Bearer ".length).trim();
      const identity = await tokenVerifier.verifyAccessToken(token);

      req.auth = {
        userId: identity.userId,
        email: identity.email,
        role: null,
      };

      next();
    } catch {
      return res.status(401).json({ error: "No autorizado" });
    }
  };
}
