import { Router } from "express";
import type { CurrentUserResolver, TokenVerifier } from "../../../../../shared/contracts/security.js";
import { requireAuth } from "../../../../../shared/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../../../../../shared/presentation/http/middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import { asyncHandler } from "../../../../../shared/presentation/http/middlewares/asyncHandler.js";
import { getParamString, getQueryString, parseDate, parseOptionalBoolean, parseOptionalNumber, parseOptionalString, parsePagination } from "../../../../../shared/presentation/http/utils/request-parsers.js";
import { ok, paginated } from "../../../../../shared/presentation/http/utils/response.js";
import type { ListReportsUseCase } from "../../../application/use-cases/ListReportsUseCase.js";
import type { GetReportByIdUseCase } from "../../../application/use-cases/GetReportByIdUseCase.js";
import type { CreateReportUseCase } from "../../../application/use-cases/CreateReportUseCase.js";
import type { UpdateReportUseCase } from "../../../application/use-cases/UpdateReportUseCase.js";
import type { DeleteReportUseCase } from "../../../application/use-cases/DeleteReportUseCase.js";
import type { ReportFilters } from "../../../domain/entities/Report.js";

function parseReportPayload(body: any) {
  return {
    ...(body?.cliente !== undefined ? { cliente: parseOptionalString(body?.cliente) ?? null } : {}),
    ...(body?.fecha !== undefined ? { fecha: parseDate(body?.fecha, "fecha") ?? null } : {}),
    ...(body?.sucursal !== undefined ? { sucursal: parseOptionalString(body?.sucursal) ?? null } : {}),
    ...(body?.numeroTicket !== undefined ? { numeroTicket: parseOptionalString(body?.numeroTicket) ?? null } : {}),
    ...(body?.estadoTicket !== undefined ? { estadoTicket: parseOptionalString(body?.estadoTicket) ?? null } : {}),
    ...(body?.tipoMantenimiento !== undefined ? { tipoMantenimiento: parseOptionalString(body?.tipoMantenimiento) ?? null } : {}),
    ...(body?.tipoServicio !== undefined ? { tipoServicio: parseOptionalString(body?.tipoServicio) ?? null } : {}),
    ...(body?.horaInicio !== undefined ? { horaInicio: parseOptionalString(body?.horaInicio) ?? null } : {}),
    ...(body?.area !== undefined ? { area: parseOptionalString(body?.area) ?? null } : {}),
    ...(body?.tecnico !== undefined ? { tecnico: parseOptionalString(body?.tecnico) ?? null } : {}),
    ...(body?.equipoTipo !== undefined ? { equipoTipo: parseOptionalString(body?.equipoTipo) ?? null } : {}),
    ...(body?.componente !== undefined ? { componente: parseOptionalString(body?.componente) ?? null } : {}),
    ...(body?.materialRefaccion !== undefined ? { materialRefaccion: parseOptionalString(body?.materialRefaccion) ?? null } : {}),
    ...(body?.descripcionEquipo !== undefined ? { descripcionEquipo: parseOptionalString(body?.descripcionEquipo) ?? null } : {}),
    ...(body?.numeroSerieEquipo !== undefined ? { numeroSerieEquipo: parseOptionalString(body?.numeroSerieEquipo) ?? null } : {}),
    ...(body?.numeroSerieComponente !== undefined ? { numeroSerieComponente: parseOptionalString(body?.numeroSerieComponente) ?? null } : {}),
    ...(body?.numeroPedido !== undefined ? { numeroPedido: parseOptionalString(body?.numeroPedido) ?? null } : {}),
    ...(body?.descripcion !== undefined ? { descripcion: parseOptionalString(body?.descripcion) ?? null } : {}),
    ...(body?.pruebasRealizadas !== undefined ? { pruebasRealizadas: parseOptionalString(body?.pruebasRealizadas) ?? null } : {}),
    ...(body?.diagnostico !== undefined ? { diagnostico: parseOptionalString(body?.diagnostico) ?? null } : {}),
    ...(body?.notas !== undefined ? { notas: parseOptionalString(body?.notas) ?? null } : {}),
    ...(body?.requisitoRefacciones !== undefined ? { requisitoRefacciones: parseOptionalString(body?.requisitoRefacciones) ?? null } : {}),
    ...(body?.firmaConformidadRefacciones !== undefined ? { firmaConformidadRefacciones: parseOptionalString(body?.firmaConformidadRefacciones) ?? null } : {}),
    ...(body?.comentarios !== undefined ? { comentarios: parseOptionalString(body?.comentarios) ?? null } : {}),
    ...(body?.gerenteProyecto !== undefined ? { gerenteProyecto: parseOptionalString(body?.gerenteProyecto) ?? null } : {}),
    ...(body?.firmaTecnicoNombre !== undefined ? { firmaTecnicoNombre: parseOptionalString(body?.firmaTecnicoNombre) ?? null } : {}),
    ...(body?.firmaTecnicoDibujo !== undefined ? { firmaTecnicoDibujo: parseOptionalString(body?.firmaTecnicoDibujo) ?? null } : {}),
    ...(body?.firmaGerenteNombre !== undefined ? { firmaGerenteNombre: parseOptionalString(body?.firmaGerenteNombre) ?? null } : {}),
    ...(body?.firmaGerenteDibujo !== undefined ? { firmaGerenteDibujo: parseOptionalString(body?.firmaGerenteDibujo) ?? null } : {}),
    ...(body?.actividadCalendarioId !== undefined ? { actividadCalendarioId: parseOptionalString(body?.actividadCalendarioId) ?? null } : {}),
    ...(body?.draftId !== undefined ? { draftId: parseOptionalString(body?.draftId) ?? null } : {}),
    ...(body?.beforeCount !== undefined ? { beforeCount: parseOptionalNumber(body?.beforeCount, "beforeCount") ?? 0 } : {}),
    ...(body?.afterCount !== undefined ? { afterCount: parseOptionalNumber(body?.afterCount, "afterCount") ?? 0 } : {}),
    ...(body?.hasVideo !== undefined ? { hasVideo: parseOptionalBoolean(body?.hasVideo, "hasVideo") ?? false } : {}),
    ...(body?.pdfPath !== undefined ? { pdfPath: parseOptionalString(body?.pdfPath) ?? null } : {}),
    ...(body?.pdfGeneratedAt !== undefined ? { pdfGeneratedAt: parseDate(body?.pdfGeneratedAt, "pdfGeneratedAt") ?? null } : {}),
    ...(body?.proyectoId !== undefined ? { proyectoId: parseOptionalString(body?.proyectoId) ?? null } : {}),
  };
}

export function buildReportRouter(deps: {
  tokenVerifier: TokenVerifier;
  currentUserResolver: CurrentUserResolver;
  listReportsUseCase: ListReportsUseCase;
  getReportByIdUseCase: GetReportByIdUseCase;
  createReportUseCase: CreateReportUseCase;
  updateReportUseCase: UpdateReportUseCase;
  deleteReportUseCase: DeleteReportUseCase;
}) {
  const router = Router();
  router.use(requireAuth(deps.tokenVerifier));
  router.use(loadAccountContext(deps.currentUserResolver));

  router.get(
    "/",
    asyncHandler(async (req, res) => {
      const filters: ReportFilters = {
        ...parsePagination(req.query as Record<string, unknown>),
        ...(getQueryString(req.query.proyectoId) ? { proyectoId: getQueryString(req.query.proyectoId) } : {}),
        ...(parseDate(req.query.from, "from") ? { from: parseDate(req.query.from, "from") } : {}),
        ...(parseDate(req.query.to, "to") ? { to: parseDate(req.query.to, "to") } : {}),
        ...(getQueryString(req.query.estadoTicket) ? { estadoTicket: getQueryString(req.query.estadoTicket) } : {}),
        ...(getQueryString(req.query.tecnico) ? { tecnico: getQueryString(req.query.tecnico) } : {}),
        ...(getQueryString(req.query.q) ? { query: getQueryString(req.query.q) } : {}),
      };

      const items = await deps.listReportsUseCase.execute(filters);
      return res.json(paginated(items));
    }),
  );

  router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const report = await deps.getReportByIdUseCase.execute(getParamString(req.params.id, "Id de reporte"));
      return res.json(ok(report));
    }),
  );

  router.post(
    "/",
    asyncHandler(async (req, res) => {
      const created = await deps.createReportUseCase.execute({
        ...parseReportPayload(req.body),
        creadoPor: req.auth?.userId ?? null,
      });

      return res.status(201).json(ok(created));
    }),
  );

  router.patch(
    "/:id",
    asyncHandler(async (req, res) => {
      const updated = await deps.updateReportUseCase.execute(
        getParamString(req.params.id, "Id de reporte"),
        parseReportPayload(req.body),
      );
      return res.json(ok(updated));
    }),
  );

  router.delete(
    "/:id",
    requireRole("admin"),
    asyncHandler(async (req, res) => {
      const result = await deps.deleteReportUseCase.execute(getParamString(req.params.id, "Id de reporte"));
      return res.json(ok(result));
    }),
  );

  return router;
}
