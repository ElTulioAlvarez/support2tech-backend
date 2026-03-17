import { Router } from "express";
import type { ListUsersUseCase } from "../../../application/use-cases/ListUserUseCase.js";
import type { GetUserByIdUseCase } from "../../../application/use-cases/GetUserByIdUseCase.js";
import type { CreateUserUseCase } from "../../../application/use-cases/CreateUserUseCase.js";
import type { UpdateUserUseCase } from "../../../application/use-cases/UpdateUserUseCase.js";
import type { DeleteUserUseCase } from "../../../application/use-cases/DeleteUserUseCase.js";
import type { UpdateUserEmailUseCase } from "../../../application/use-cases/UpdateUserEmailUseCase.js";
import type { UpdateUserPasswordUseCase } from "../../../application/use-cases/UpdateUserPasswordUseCase.js";
import { requireAuth } from "../../../../../shared/presentation/http/middlewares/requireAuth.js";
import { loadAccountContext } from "../../../../../shared/presentation/http/middlewares/loadAccountContext.js";
import { requireRole } from "../../../../../shared/presentation/http/middlewares/requireRole.js";
import {
  getParamString,
  getQueryString,
  parseOptionalNumber,
  parseRequiredString,
} from "../../../../../shared/presentation/http/utils/request-parsers.js";
import { ok, paginated } from "../../../../../shared/presentation/http/utils/response.js";

type Dependencies = {
  listUsersUseCase: ListUsersUseCase;
  getUserByIdUseCase: GetUserByIdUseCase;
  createUserUseCase: CreateUserUseCase;
  updateUserUseCase: UpdateUserUseCase;
  deleteUserUseCase: DeleteUserUseCase;
  updateUserEmailUseCase: UpdateUserEmailUseCase;
  updateUserPasswordUseCase: UpdateUserPasswordUseCase;
  tokenVerifier: any;
  currentUserResolver: any;
};

export function createUserRouter(deps: Dependencies) {
  const router = Router();

  router.use(requireAuth(deps.tokenVerifier));
  router.use(loadAccountContext(deps.currentUserResolver));
  router.use(requireRole("admin"));

  router.get("/", async (req, res, next) => {
    try {
      const result = await deps.listUsersUseCase.execute({
        query: getQueryString(req, "q"),
        rol: getQueryString(req, "rol") as "admin" | "tecnico" | undefined,
        estado: getQueryString(req, "estado") as "activo" | "inactivo" | undefined,
        page: parseOptionalNumber(getQueryString(req, "page")),
        pageSize: parseOptionalNumber(getQueryString(req, "pageSize")),
      });

      return res.json(paginated(result.items, {
        total: result.total,
        page: result.page,
        pageSize: result.pageSize,
        totalPages: result.totalPages,
      }));
    } catch (error) {
      next(error);
    }
  });

  router.get("/:id", async (req, res, next) => {
    try {
      const id = getParamString(req, "id");
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
      const id = getParamString(req, "id");

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
      const id = getParamString(req, "id");
      const email = parseRequiredString(req.body?.email, "email");

      const result = await deps.updateUserEmailUseCase.execute(id, email);
      return res.json(ok(result));
    } catch (error) {
      next(error);
    }
  });

  router.patch("/:id/password", async (req, res, next) => {
    try {
      const id = getParamString(req, "id");
      const password = parseRequiredString(req.body?.password, "password");

      const result = await deps.updateUserPasswordUseCase.execute(id, password);
      return res.json(ok(result));
    } catch (error) {
      next(error);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
      const id = getParamString(req, "id");
      const result = await deps.deleteUserUseCase.execute(id);
      return res.json(ok(result));
    } catch (error) {
      next(error);
    }
  });

  return router;
}