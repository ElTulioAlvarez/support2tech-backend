import { Router } from "express";
import type { CurrentUserResolver, TokenVerifier } from "../../../../../shared/contracts/security.js";
import { requireAuth } from "../../../../../shared/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../../../../../shared/presentation/http/middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import { asyncHandler } from "../../../../../shared/presentation/http/middlewares/asyncHandler.js";
import { getParamString, getQueryString, parseDate, parsePagination, parseOptionalString, parseRequiredString } from "../../../../../shared/presentation/http/utils/request-parsers.js";
import { ok, paginated } from "../../../../../shared/presentation/http/utils/response.js";
import type { ListProjectsUseCase } from "../../../application/use-cases/ListProjectsUseCase.js";
import type { GetProjectByIdUseCase } from "../../../application/use-cases/GetProjectByIdUseCase.js";
import type { CreateProjectUseCase } from "../../../application/use-cases/CreateProjectUseCase.js";
import type { UpdateProjectUseCase } from "../../../application/use-cases/UpdateProjectUseCase.js";
import type { DeleteProjectUseCase } from "../../../application/use-cases/DeleteProjectUseCase.js";
import type { ProjectListFilters } from "../../../domain/entities/Project.js";

export function buildProjectRouter(deps: {
  tokenVerifier: TokenVerifier;
  currentUserResolver: CurrentUserResolver;
  listProjectsUseCase: ListProjectsUseCase;
  getProjectByIdUseCase: GetProjectByIdUseCase;
  createProjectUseCase: CreateProjectUseCase;
  updateProjectUseCase: UpdateProjectUseCase;
  deleteProjectUseCase: DeleteProjectUseCase;
}) {
  const router = Router();

  router.use(requireAuth(deps.tokenVerifier));
  router.use(loadAccountContext(deps.currentUserResolver));

  router.get(
    "/",
    asyncHandler(async (req, res) => {
      const pagination = parsePagination(req.query as Record<string, unknown>);
      const filters: ProjectListFilters = {
        ...pagination,
        ...(getQueryString(req.query.q) ? { query: getQueryString(req.query.q) } : {}),
        ...(getQueryString(req.query.cliente) ? { cliente: getQueryString(req.query.cliente) } : {}),
        ...(getQueryString(req.query.ciudad) ? { ciudad: getQueryString(req.query.ciudad) } : {}),
        ...(getQueryString(req.query.estado) ? { estado: getQueryString(req.query.estado) } : {}),
      };
      const result = await deps.listProjectsUseCase.execute(filters);
      return res.json(paginated(result));
    }),
  );

  router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const project = await deps.getProjectByIdUseCase.execute(getParamString(req.params.id, "Id de proyecto"));
      return res.json(ok(project));
    }),
  );

  router.post(
    "/",
    requireRole("admin"),
    asyncHandler(async (req, res) => {
      const created = await deps.createProjectUseCase.execute({
        nombre: parseRequiredString(req.body?.nombre, "nombre"),
        ...(req.body?.alias !== undefined ? { alias: parseOptionalString(req.body?.alias) ?? null } : {}),
        ...(req.body?.tipo !== undefined ? { tipo: parseOptionalString(req.body?.tipo) ?? null } : {}),
        ...(req.body?.cliente !== undefined ? { cliente: parseOptionalString(req.body?.cliente) ?? null } : {}),
        ...(req.body?.ciudad !== undefined ? { ciudad: parseOptionalString(req.body?.ciudad) ?? null } : {}),
        ...(req.body?.estado !== undefined ? { estado: parseOptionalString(req.body?.estado) ?? null } : {}),
        ...(req.body?.direccion !== undefined ? { direccion: parseOptionalString(req.body?.direccion) ?? null } : {}),
        ...(req.body?.codigoPostal !== undefined ? { codigoPostal: parseOptionalString(req.body?.codigoPostal) ?? null } : {}),
        ...(req.body?.fechaOperacion !== undefined ? { fechaOperacion: parseDate(req.body?.fechaOperacion, "fechaOperacion") ?? null } : {}),
        ...(req.body?.notas !== undefined ? { notas: parseOptionalString(req.body?.notas) ?? null } : {}),
        ...(req.body?.polizaAdquirida !== undefined ? { polizaAdquirida: parseDate(req.body?.polizaAdquirida, "polizaAdquirida") ?? null } : {}),
        ...(req.body?.polizaVence !== undefined ? { polizaVence: parseDate(req.body?.polizaVence, "polizaVence") ?? null } : {}),
        creadoPor: req.auth?.userId ?? null,
      });

      return res.status(201).json(ok(created));
    }),
  );

  router.patch(
    "/:id",
    requireRole("admin"),
    asyncHandler(async (req, res) => {
      const updated = await deps.updateProjectUseCase.execute(getParamString(req.params.id, "Id de proyecto"), {
        ...(req.body?.nombre !== undefined ? { nombre: parseRequiredString(req.body?.nombre, "nombre") } : {}),
        ...(req.body?.alias !== undefined ? { alias: parseOptionalString(req.body?.alias) ?? null } : {}),
        ...(req.body?.tipo !== undefined ? { tipo: parseOptionalString(req.body?.tipo) ?? null } : {}),
        ...(req.body?.cliente !== undefined ? { cliente: parseOptionalString(req.body?.cliente) ?? null } : {}),
        ...(req.body?.ciudad !== undefined ? { ciudad: parseOptionalString(req.body?.ciudad) ?? null } : {}),
        ...(req.body?.estado !== undefined ? { estado: parseOptionalString(req.body?.estado) ?? null } : {}),
        ...(req.body?.direccion !== undefined ? { direccion: parseOptionalString(req.body?.direccion) ?? null } : {}),
        ...(req.body?.codigoPostal !== undefined ? { codigoPostal: parseOptionalString(req.body?.codigoPostal) ?? null } : {}),
        ...(req.body?.fechaOperacion !== undefined ? { fechaOperacion: parseDate(req.body?.fechaOperacion, "fechaOperacion") ?? null } : {}),
        ...(req.body?.notas !== undefined ? { notas: parseOptionalString(req.body?.notas) ?? null } : {}),
        ...(req.body?.polizaAdquirida !== undefined ? { polizaAdquirida: parseDate(req.body?.polizaAdquirida, "polizaAdquirida") ?? null } : {}),
        ...(req.body?.polizaVence !== undefined ? { polizaVence: parseDate(req.body?.polizaVence, "polizaVence") ?? null } : {}),
        modificadoPor: req.auth?.userId ?? null,
      });
      return res.json(ok(updated));
    }),
  );

  router.delete(
    "/:id",
    requireRole("admin"),
    asyncHandler(async (req, res) => {
      const result = await deps.deleteProjectUseCase.execute(getParamString(req.params.id, "Id de proyecto"));
      return res.json(ok(result));
    }),
  );

  return router;
}
