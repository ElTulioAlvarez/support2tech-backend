import type { Request, Response, NextFunction } from "express";
import type { UserRole } from "../../../contracts/security.js";
import { ForbiddenError } from "../../../domain/errors/AppError.js";
import "../types/request-context.js";

export function requireRole(role: UserRole) {
  return function (req: Request, _res: Response, next: NextFunction) {
    if (req.auth?.role !== role) {
      return next(new ForbiddenError(`Se requiere rol ${role}`));
    }

    next();
  };
}
