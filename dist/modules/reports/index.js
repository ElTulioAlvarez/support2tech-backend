import { Router } from "express";
import { requireAuth } from "../auth/presentation/http/middlewares/requireAuth.js";
export function createReportsModule(deps) {
    const router = Router();
    const authMw = requireAuth(deps.auth.useCases.verifyAccessTokenUseCase);
    router.get("/_module", authMw, (_req, res) => {
        res.json({
            module: "reports",
            status: "scaffold-ready",
            next: ["report entities", "repositories", "creation flows", "monthly reports"],
        });
    });
    return {
        register(app) {
            app.use("/api/reports", router);
        },
    };
}
//# sourceMappingURL=index.js.map