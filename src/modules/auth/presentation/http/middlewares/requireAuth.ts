import type { Request, Response, NextFunction } from "express";
import type { VerifyAccessTokenUseCase } from "../../../application/use-cases/VerifyAccessTokenUseCase.js";
import "../../../../../shared/presentation/http/types/request-context.js";

export function requireAuth(verifyAccessTokenUseCase: VerifyAccessTokenUseCase) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const header = req.headers.authorization;

      if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Authorization bearer token requerido" });
      }

      const token = header.slice("Bearer ".length).trim();
      const identity = await verifyAccessTokenUseCase.execute(token);

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
