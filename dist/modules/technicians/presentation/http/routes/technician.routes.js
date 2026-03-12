import { Router } from "express";
import { requireAuth } from "../../../../auth/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../../../../accounts/presentation/http/middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import { asyncHandler } from "../../../../../shared/presentation/http/middlewares/asyncHandler.js";
import { getParamString, getQueryString, parseDate, parsePagination, parseOptionalString, parseRequiredString } from "../../../../../shared/presentation/http/utils/request-parsers.js";
import { ok, paginated } from "../../../../../shared/presentation/http/utils/response.js";
export function buildTechnicianRouter(deps) {
    const router = Router();
    router.use(requireAuth(deps.verifyAccessTokenUseCase));
    router.use(loadAccountContext(deps.ensureActiveProfileUseCase));
    router.get("/", asyncHandler(async (req, res) => {
        const result = await deps.listTechniciansUseCase.execute({
            ...parsePagination(req.query),
            ...(getQueryString(req.query.q) ? { query: getQueryString(req.query.q) } : {}),
            ...(getQueryString(req.query.estado) ? { estado: getQueryString(req.query.estado) } : {}),
        });
        return res.json(paginated(result));
    }));
    router.get("/:id", asyncHandler(async (req, res) => {
        const technician = await deps.getTechnicianByIdUseCase.execute(getParamString(req.params.id, "Id de técnico"));
        return res.json(ok(technician));
    }));
    router.get("/:id/calendar", asyncHandler(async (req, res) => {
        const items = await deps.getTechnicianCalendarUseCase.execute(getParamString(req.params.id, "Id de técnico"), parseDate(req.query.start, "start"), parseDate(req.query.end, "end"));
        return res.json(ok(items));
    }));
    router.post("/", requireRole("admin"), asyncHandler(async (req, res) => {
        const created = await deps.createTechnicianUseCase.execute({
            id: parseRequiredString(req.body?.id, "id"),
            ...(req.body?.nombre !== undefined ? { nombre: parseOptionalString(req.body?.nombre) ?? null } : {}),
            ...(req.body?.telefono !== undefined ? { telefono: parseOptionalString(req.body?.telefono) ?? null } : {}),
            estado: parseOptionalString(req.body?.estado) ?? "activo",
        });
        return res.status(201).json(ok(created));
    }));
    router.patch("/:id", requireRole("admin"), asyncHandler(async (req, res) => {
        const updated = await deps.updateTechnicianUseCase.execute(getParamString(req.params.id, "Id de técnico"), {
            ...(req.body?.nombre !== undefined ? { nombre: parseOptionalString(req.body?.nombre) ?? null } : {}),
            ...(req.body?.telefono !== undefined ? { telefono: parseOptionalString(req.body?.telefono) ?? null } : {}),
            ...(req.body?.estado !== undefined ? { estado: parseRequiredString(req.body?.estado, "estado") } : {}),
        });
        return res.json(ok(updated));
    }));
    router.delete("/:id", requireRole("admin"), asyncHandler(async (req, res) => {
        const result = await deps.deleteTechnicianUseCase.execute(getParamString(req.params.id, "Id de técnico"));
        return res.json(ok(result));
    }));
    return router;
}
//# sourceMappingURL=technician.routes.js.map