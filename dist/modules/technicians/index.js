import { Router } from "express";
import { requireAuth } from "../auth/presentation/http/middlewares/requireAuth.js";
export function createTechniciansModule(deps) {
    const router = Router();
    const authMw = requireAuth(deps.auth.useCases.verifyAccessTokenUseCase);
    router.get("/_module", authMw, (_req, res) => {
        res.json({
            module: "technicians",
            status: "scaffold-ready",
            next: ["technician queries", "assignment flows", "availability use-cases"],
        });
    });
    return {
        register(app) {
            app.use("/api/technicians", router);
        },
    };
}
//# sourceMappingURL=index.js.map