import type { Request, Response, NextFunction } from "express";
import type { EnsureActiveProfileUseCase } from "../../../application/use-cases/EnsureActiveProfileUseCase.js";
import "../../../../../shared/presentation/http/types/request-context.js";

export function loadAccountContext(ensureActiveProfileUseCase: EnsureActiveProfileUseCase) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.auth?.userId) {
        return res.status(401).json({ error: "Usuario no autenticado" });
      }

      const profile = await ensureActiveProfileUseCase.execute(req.auth.userId);

      req.currentProfile = profile;
      req.auth = {
        ...req.auth,
        role: profile.rol,
      };

      next();
    } catch (error) {
      const message = error instanceof Error ? error.message : "No fue posible cargar el perfil";
      return res.status(403).json({ error: message });
    }
  };
}
