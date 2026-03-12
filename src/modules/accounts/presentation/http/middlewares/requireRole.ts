import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "../../../domain/entities/Profile.js";

export const requireRole = (role: UserRole) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (req.auth?.role !== role) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
