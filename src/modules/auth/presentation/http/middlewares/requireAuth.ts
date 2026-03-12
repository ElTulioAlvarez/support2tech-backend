import type { NextFunction, Request, Response } from "express";
import type { VerifyAccessTokenUseCase } from "../../../application/use-cases/VerifyAccessTokenUseCase.js";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: string;
        email: string | null;
        role?: string | null;
      };
    }
  }
}

export const requireAuth = (verifyAccessTokenUseCase: VerifyAccessTokenUseCase) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const header = req.headers.authorization ?? "";
      const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";

      if (!token) {
        return res.status(401).json({ message: "Missing bearer token" });
      }

      const identity = await verifyAccessTokenUseCase.execute(token);
      req.auth = {
        userId: identity.userId,
        email: identity.email,
      };

      next();
    } catch {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
