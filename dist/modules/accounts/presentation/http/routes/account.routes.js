import { Router } from "express";
import { requireAuth } from "../../../../auth/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import { asyncHandler } from "../../../../../shared/presentation/http/middlewares/asyncHandler.js";
export function buildAccountRouter(deps) {
    const router = Router();
    const authMw = requireAuth(deps.verifyAccessTokenUseCase);
    const accountContextMw = loadAccountContext(deps.ensureActiveProfileUseCase);
    const adminOnly = requireRole("admin");
    router.use(authMw);
    router.use(accountContextMw);
    router.get("/me", asyncHandler(async (req, res) => {
        const profile = req.currentProfile ?? await deps.getMyProfileUseCase.execute(req.auth.userId);
        return res.json(profile);
    }));
    router.get("/admin/ping", adminOnly, asyncHandler(async (_req, res) => {
        return res.json({ ok: true, scope: "admin" });
    }));
    return router;
}
//# sourceMappingURL=account.routes.js.map