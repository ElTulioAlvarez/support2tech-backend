import { Router } from "express";
import { requireAuth } from "../auth/presentation/http/middlewares/requireAuth.js";
export function createCalendarModule(deps) {
    const router = Router();
    const authMw = requireAuth(deps.auth.useCases.verifyAccessTokenUseCase);
    router.get("/_module", authMw, (_req, res) => {
        res.json({
            module: "calendar",
            status: "scaffold-ready",
            next: ["calendar entities", "repositories", "scheduling use-cases", "controllers"],
        });
    });
    return {
        register(app) {
            app.use("/api/calendar", router);
        },
    };
}
//# sourceMappingURL=index.js.map