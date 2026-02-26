import type { Request, Response, NextFunction } from "express";
import type { ProfileRepository } from "../../../domain/repositories/ProfileRepository.js";

export const loadRole = (profiles: ProfileRepository) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.auth?.userId;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const profile = await profiles.findById(userId);
    if (!profile) return res.status(403).json({ message: "Profile not found" });
    if (profile.estado !== "activo") return res.status(403).json({ message: "User inactive" });

    req.auth = { ...req.auth, role: profile.rol };
    next();
  };