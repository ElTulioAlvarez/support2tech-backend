import { Router } from "express";
import { requireAuth } from "../../../../auth/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../../../../accounts/presentation/http/middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import { asyncHandler } from "../../../../../shared/presentation/http/middlewares/asyncHandler.js";
import { getParamString, getQueryString, parseDate, parsePagination, parseOptionalNumber, parseOptionalString, parseRequiredString } from "../../../../../shared/presentation/http/utils/request-parsers.js";
import { ok, paginated } from "../../../../../shared/presentation/http/utils/response.js";
export function buildCalendarRouter(deps) {
    const router = Router();
    router.use(requireAuth(deps.verifyAccessTokenUseCase));
    router.use(loadAccountContext(deps.ensureActiveProfileUseCase));
    router.get("/", asyncHandler(async (req, res) => {
        const filters = {
            ...parsePagination(req.query),
            ...(getQueryString(req.query.tecnicoId) ? { tecnicoId: getQueryString(req.query.tecnicoId) } : {}),
            ...(getQueryString(req.query.proyectoId) ? { proyectoId: getQueryString(req.query.proyectoId) } : {}),
            ...(getQueryString(req.query.status) ? { status: getQueryString(req.query.status) } : {}),
            ...(parseDate(req.query.start, "start") ? { start: parseDate(req.query.start, "start") } : {}),
            ...(parseDate(req.query.end, "end") ? { end: parseDate(req.query.end, "end") } : {}),
        };
        const items = await deps.listCalendarTasksUseCase.execute(filters);
        return res.json(paginated(items));
    }));
    router.get("/:id", asyncHandler(async (req, res) => {
        const item = await deps.getCalendarTaskByIdUseCase.execute(getParamString(req.params.id, "Id de actividad"));
        return res.json(ok(item));
    }));
    router.post("/", requireRole("admin"), asyncHandler(async (req, res) => {
        const created = await deps.createCalendarTaskUseCase.execute({
            tecnicoId: parseRequiredString(req.body?.tecnicoId, "tecnicoId"),
            titulo: parseRequiredString(req.body?.titulo, "titulo"),
            fechaProgramada: parseDate(req.body?.fechaProgramada, "fechaProgramada"),
            creadoPor: req.auth.userId,
            ...(req.body?.reporteId !== undefined ? { reporteId: parseOptionalString(req.body?.reporteId) ?? null } : {}),
            ...(req.body?.descripcion !== undefined ? { descripcion: parseOptionalString(req.body?.descripcion) ?? null } : {}),
            ...(req.body?.horaProgramada !== undefined ? { horaProgramada: parseOptionalString(req.body?.horaProgramada) ?? null } : {}),
            ...(req.body?.estatus !== undefined ? { estatus: (parseOptionalString(req.body?.estatus) ?? undefined) } : {}),
            ...(req.body?.motivoAplazo !== undefined ? { motivoAplazo: parseOptionalString(req.body?.motivoAplazo) ?? null } : {}),
            ...(req.body?.horaInicio !== undefined ? { horaInicio: parseOptionalString(req.body?.horaInicio) ?? null } : {}),
            ...(req.body?.horaFin !== undefined ? { horaFin: parseOptionalString(req.body?.horaFin) ?? null } : {}),
            ...(req.body?.orden !== undefined ? { orden: parseOptionalNumber(req.body?.orden, "orden") ?? null } : {}),
            ...(req.body?.color !== undefined ? { color: parseOptionalString(req.body?.color) ?? null } : {}),
            ...(req.body?.ubicacion !== undefined ? { ubicacion: parseOptionalString(req.body?.ubicacion) ?? null } : {}),
            ...(req.body?.tipo !== undefined ? { tipo: parseOptionalString(req.body?.tipo) ?? null } : {}),
            ...(req.body?.prioridad !== undefined ? { prioridad: parseOptionalNumber(req.body?.prioridad, "prioridad") ?? null } : {}),
            ...(req.body?.proyectoId !== undefined ? { proyectoId: parseOptionalString(req.body?.proyectoId) ?? null } : {}),
        });
        return res.status(201).json(ok(created));
    }));
    router.patch("/:id", requireRole("admin"), asyncHandler(async (req, res) => {
        const updated = await deps.updateCalendarTaskUseCase.execute(getParamString(req.params.id, "Id de actividad"), {
            ...(req.body?.tecnicoId !== undefined ? { tecnicoId: parseRequiredString(req.body?.tecnicoId, "tecnicoId") } : {}),
            ...(req.body?.reporteId !== undefined ? { reporteId: parseOptionalString(req.body?.reporteId) ?? null } : {}),
            ...(req.body?.titulo !== undefined ? { titulo: parseRequiredString(req.body?.titulo, "titulo") } : {}),
            ...(req.body?.descripcion !== undefined ? { descripcion: parseOptionalString(req.body?.descripcion) ?? null } : {}),
            ...(req.body?.fechaProgramada !== undefined ? { fechaProgramada: parseDate(req.body?.fechaProgramada, "fechaProgramada") } : {}),
            ...(req.body?.horaProgramada !== undefined ? { horaProgramada: parseOptionalString(req.body?.horaProgramada) ?? null } : {}),
            ...(req.body?.estatus !== undefined ? { estatus: (parseOptionalString(req.body?.estatus) ?? undefined) } : {}),
            ...(req.body?.motivoAplazo !== undefined ? { motivoAplazo: parseOptionalString(req.body?.motivoAplazo) ?? null } : {}),
            ...(req.body?.horaInicio !== undefined ? { horaInicio: parseOptionalString(req.body?.horaInicio) ?? null } : {}),
            ...(req.body?.horaFin !== undefined ? { horaFin: parseOptionalString(req.body?.horaFin) ?? null } : {}),
            ...(req.body?.orden !== undefined ? { orden: parseOptionalNumber(req.body?.orden, "orden") ?? null } : {}),
            ...(req.body?.color !== undefined ? { color: parseOptionalString(req.body?.color) ?? null } : {}),
            ...(req.body?.ubicacion !== undefined ? { ubicacion: parseOptionalString(req.body?.ubicacion) ?? null } : {}),
            ...(req.body?.tipo !== undefined ? { tipo: parseOptionalString(req.body?.tipo) ?? null } : {}),
            ...(req.body?.prioridad !== undefined ? { prioridad: parseOptionalNumber(req.body?.prioridad, "prioridad") ?? null } : {}),
            ...(req.body?.proyectoId !== undefined ? { proyectoId: parseOptionalString(req.body?.proyectoId) ?? null } : {}),
        });
        return res.json(ok(updated));
    }));
    router.delete("/:id", requireRole("admin"), asyncHandler(async (req, res) => {
        const result = await deps.deleteCalendarTaskUseCase.execute(getParamString(req.params.id, "Id de actividad"));
        return res.json(ok(result));
    }));
    return router;
}
//# sourceMappingURL=calendar.routes.js.map