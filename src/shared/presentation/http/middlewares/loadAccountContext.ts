import type { Request, Response, NextFunction } from "express";
import type { CurrentUserResolver } from "../../../contracts/security.js";
import { ForbiddenError, UnauthorizedError } from "../../../domain/errors/AppError.js";
import "../types/request-context.js";

export function loadAccountContext(currentUserResolver: CurrentUserResolver) {
  return async function (req: Request, _res: Response, next: NextFunction) {
    try {
      if (!req.auth?.userId) {
        return next(new UnauthorizedError("Usuario no autenticado"));
      }

      const profile = await currentUserResolver.getActiveProfile(req.auth.userId);

      req.currentProfile = profile;
      req.auth = {
        ...req.auth,
        role: profile.rol,
      };

      next();
    } catch (error) {
      const message = error instanceof Error ? error.message : "No fue posible cargar el perfil";
      return next(new ForbiddenError(message));
    }
  };
}
