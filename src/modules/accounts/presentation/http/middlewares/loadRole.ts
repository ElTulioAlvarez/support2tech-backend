import type { NextFunction, Request, Response } from "express";
import type { GetRoleByUserIdUseCase } from "../../../application/use-cases/GetRoleByUserIdUseCase.js";

export const loadRole = (getRoleByUserIdUseCase: GetRoleByUserIdUseCase) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.auth?.userId;
      if (!userId) return res.status(401).json({ message: "Unauthorized" });

      const role = await getRoleByUserIdUseCase.execute(userId);
      if (!role) return res.status(403).json({ message: "Profile not found or inactive" });

      req.auth = { ...req.auth, role };
      next();
    } catch {
      return res.status(500).json({ message: "Unable to load role" });
    }
  };
