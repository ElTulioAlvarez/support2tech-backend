import { Router, type Request, type Response } from "express";
import type { ProfileRepository } from "../../../domain/repositories/ProfileRepository.js";
import { loadRole } from "../middlewares/loadRole.js";

type Middleware = (req: Request, res: Response, next: (err?: any) => void) => any;

export function buildAccountRouter(deps: {
  profileRepo: ProfileRepository;
  authMw: Middleware;
  adminOnly: Middleware;
}) {
  const r = Router();

  r.use(deps.authMw);
  r.use(loadRole(deps.profileRepo));

  // tecnico/admin: ver mi perfil
  r.get("/me", async (req, res) => {
    const profile = await deps.profileRepo.findById(req.auth!.userId);
    return res.json(profile);
  });

  // solo admin
  r.get("/admin/ping", deps.adminOnly, async (_req, res) => {
    return res.json({ ok: true, scope: "admin" });
  });

  return r;
}