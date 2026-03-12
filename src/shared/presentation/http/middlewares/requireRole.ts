import type { Request, Response, NextFunction } from "express";
import type { UserRole } from "../../../../modules/accounts/domain/entities/Profile.js";
import "../types/request-context.js";

export function requireRole(role: UserRole) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.auth?.role !== role) {
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  };
}
