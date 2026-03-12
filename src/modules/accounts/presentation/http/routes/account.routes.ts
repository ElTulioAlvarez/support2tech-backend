import { Router } from "express";
import type { GetMyProfileUseCase } from "../../../application/use-cases/GetMyProfileUseCase.js";
import type { EnsureActiveProfileUseCase } from "../../../application/use-cases/EnsureActiveProfileUseCase.js";
import type { VerifyAccessTokenUseCase } from "../../../../auth/application/use-cases/VerifyAccessTokenUseCase.js";
import { requireAuth } from "../../../../auth/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import { asyncHandler } from "../../../../../shared/presentation/http/middlewares/asyncHandler.js";

export function buildAccountRouter(deps: {
  getMyProfileUseCase: GetMyProfileUseCase;
  ensureActiveProfileUseCase: EnsureActiveProfileUseCase;
  verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
}) {
  const router = Router();
  const authMw = requireAuth(deps.verifyAccessTokenUseCase);
  const accountContextMw = loadAccountContext(deps.ensureActiveProfileUseCase);
  const adminOnly = requireRole("admin");

  router.use(authMw);
  router.use(accountContextMw);

  router.get(
    "/me",
    asyncHandler(async (req, res) => {
      const profile = req.currentProfile ?? await deps.getMyProfileUseCase.execute(req.auth!.userId);
      return res.json(profile);
    }),
  );

  router.get(
    "/admin/ping",
    adminOnly,
    asyncHandler(async (_req, res) => {
      return res.json({ ok: true, scope: "admin" });
    }),
  );

  return router;
}
