import type { Request, Response, NextFunction } from "express";
import type { AuthService } from "../../../application/services/AuthService";

declare global {
  namespace Express {
    interface Request {
      auth?: { userId: string; role?: string };
    }
  }
}

export const requireAuth = (auth: AuthService) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const header = req.headers.authorization ?? "";
      const token = header.startsWith("Bearer ") ? header.slice(7) : "";

      if (!token) return res.status(401).json({ message: "Missing bearer token" });

      const user = await auth.verifyBearerToken(token);
      req.auth = { userId: user.userId };
      next();
    } catch {
      return res.status(401).json({ message: "Invalid token" });
    }
  };

export const requireRole = (role: "admin" | "tecnico") =>
  (req: Request, res: Response, next: NextFunction) => {
    if (req.auth?.role !== role) return res.status(403).json({ message: "Forbidden" });
    next();
  };