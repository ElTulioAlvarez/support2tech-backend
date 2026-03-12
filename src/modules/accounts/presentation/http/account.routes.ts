import { Router, type Request, type Response } from "express";
import type { GetMyProfileUseCase } from "../../application/use-cases/GetMyProfileUseCase.js";

type Middleware = (req: Request, res: Response, next: (err?: any) => void) => any;

export function createAccountRouter(deps: {
  authMw: Middleware;
  loadRoleMw: Middleware;
  adminOnlyMw: Middleware;
  getMyProfileUseCase: GetMyProfileUseCase;
}) {
  const r = Router();

  r.use(deps.authMw);
  r.use(deps.loadRoleMw);

  r.get("/me", async (req, res) => {
    const profile = await deps.getMyProfileUseCase.execute(req.auth!.userId);
    return res.json(profile);
  });

  r.get("/admin/ping", deps.adminOnlyMw, async (_req, res) => {
    return res.json({ ok: true, scope: "admin" });
  });

  return r;
}
