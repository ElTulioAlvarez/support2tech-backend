import { Router } from "express";
import type { CurrentUserResolver, TokenVerifier } from "../../../../../shared/contracts/security.js";
import { requireAuth } from "../../../../../shared/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../../../../../shared/presentation/http/middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import { asyncHandler } from "../../../../../shared/presentation/http/middlewares/asyncHandler.js";
import type { GetMyProfileUseCase } from "../../../application/use-cases/GetMyProfileUseCase.js";

export function buildAccountRouter(deps: {
  getMyProfileUseCase: GetMyProfileUseCase;
  currentUserResolver: CurrentUserResolver;
  tokenVerifier: TokenVerifier;
}) {
  const router = Router();
  const authMw = requireAuth(deps.tokenVerifier);
  const accountContextMw = loadAccountContext(deps.currentUserResolver);
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
