import { Router } from "express";
import type { CurrentUserResolver, TokenVerifier } from "../../../../../shared/contracts/security.js";
import { requireAuth } from "../../../../../shared/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../../../../../shared/presentation/http/middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import {
  parseOptionalNumber,
  parseRequiredString,
} from "../../../../../shared/presentation/http/utils/request-parsers.js";
import { ok, paginated } from "../../../../../shared/presentation/http/utils/response.js";
import type { CreateUserUseCase } from "../../../application/use-cases/CreateUserUseCase.js";
import type { DeleteUserUseCase } from "../../../application/use-cases/DeleteUserUseCase.js";
import type { GetUserByIdUseCase } from "../../../application/use-cases/GetUserByIdUseCase.js";
import type { ListUsersUseCase } from "../../../application/use-cases/ListUserUseCase.js";
import type { UpdateUserEmailUseCase } from "../../../application/use-cases/UpdateUserEmailUseCase.js";
import type { UpdateUserPasswordUseCase } from "../../../application/use-cases/UpdateUserPasswordUseCase.js";
import type { UpdateUserUseCase } from "../../../application/use-cases/UpdateUserUseCase.js";

export function createUserRouter(deps: {
  listUsersUseCase: ListUsersUseCase;
  getUserByIdUseCase: GetUserByIdUseCase;
  createUserUseCase: CreateUserUseCase;
  updateUserUseCase: UpdateUserUseCase;
  updateUserEmailUseCase: UpdateUserEmailUseCase;
  updateUserPasswordUseCase: UpdateUserPasswordUseCase;
  deleteUserUseCase: DeleteUserUseCase;
  currentUserResolver: CurrentUserResolver;
  tokenVerifier: TokenVerifier;
}) {
  const router = Router();
  const authMw = requireAuth(deps.tokenVerifier);
  const accountContextMw = loadAccountContext(deps.currentUserResolver);
  const adminOnly = requireRole("admin");

  router.use(authMw);
  router.use(accountContextMw);
  router.use(adminOnly);

  router.get("/", async (req, res, next) => {
    try {
      const q =
        typeof req.query.q === "string" && req.query.q.trim()
          ? req.query.q.trim()
          : undefined;

      const rol =
        req.query.rol === "admin" || req.query.rol === "tecnico"
          ? req.query.rol
          : undefined;

      const estado =
        req.query.estado === "activo" || req.query.estado === "inactivo"
          ? req.query.estado
          : undefined;

      const page = parseOptionalNumber(req.query.page, "page");
      const pageSize = parseOptionalNumber(req.query.pageSize, "pageSize");

      const filters: {
        query?: string;
        rol?: "admin" | "tecnico";
        estado?: "activo" | "inactivo";
        page?: number;
        pageSize?: number;
      } = {};

      if (q !== undefined) filters.query = q;
      if (rol !== undefined) filters.rol = rol;
      if (estado !== undefined) filters.estado = estado;
      if (page !== undefined && page !== null) filters.page = page;
      if (pageSize !== undefined && pageSize !== null) filters.pageSize = pageSize;

      const result = await deps.listUsersUseCase.execute(filters);

      return res.json(
        paginated({
          items: result.items,
          total: result.total,
          page: result.page,
          pageSize: result.pageSize,
          totalPages: result.totalPages,
        }),
      );
    } catch (error) {
      next(error);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = await deps.getUserByIdUseCase.execute(id);
      return res.json(ok(user));
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const user = await deps.createUserUseCase.execute({
        email: parseRequiredString(req.body?.email, "email"),
        password: parseRequiredString(req.body?.password, "password"),
        nombre: req.body?.nombre ?? null,
        telefono: req.body?.telefono ?? null,
        rol: req.body?.rol,
        estado: req.body?.estado ?? "activo",
      });

      return res.status(201).json(ok(user));
    } catch (error) {
      next(error);
    }
  });

  router.patch("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;

      const user = await deps.updateUserUseCase.execute(id, {
        nombre: req.body?.nombre,
        telefono: req.body?.telefono,
        rol: req.body?.rol,
        estado: req.body?.estado,
      });

      return res.json(ok(user));
    } catch (error) {
      next(error);
    }
  });

  router.patch("/:id/email", async (req, res, next) => {
    try {
      const id = req.params.id;
      const email = parseRequiredString(req.body?.email, "email");

      const result = await deps.updateUserEmailUseCase.execute(id, email);
      return res.json(ok(result));
    } catch (error) {
      next(error);
    }
  });

  router.patch("/:id/password", async (req, res, next) => {
    try {
      const id = req.params.id;
      const password = parseRequiredString(req.body?.password, "password");

      const result = await deps.updateUserPasswordUseCase.execute(id, password);
      return res.json(ok(result));
    } catch (error) {
      next(error);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await deps.deleteUserUseCase.execute(id);
      return res.json(ok(result));
    } catch (error) {
      next(error);
    }
  });

  return router;
}