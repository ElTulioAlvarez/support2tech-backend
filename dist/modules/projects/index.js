import { Router } from "express";
import { requireAuth } from "../auth/presentation/http/middlewares/requireAuth.js";
export function createProjectsModule(deps) {
    const router = Router();
    const authMw = requireAuth(deps.auth.useCases.verifyAccessTokenUseCase);
    router.get("/_module", authMw, (_req, res) => {
        res.json({
            module: "projects",
            status: "scaffold-ready",
            next: ["domain entities", "repositories", "use-cases", "controllers"],
        });
    });
    return {
        register(app) {
            app.use("/api/projects", router);
        },
    };
}
//# sourceMappingURL=index.js.map