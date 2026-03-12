import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import type { AccountsModule } from "../accounts/index.js";
import { PrismaProjectRepository } from "./infrastructure/repositories/PrismaProjectRepository.js";
import { ListProjectsUseCase } from "./application/use-cases/ListProjectsUseCase.js";
import { GetProjectByIdUseCase } from "./application/use-cases/GetProjectByIdUseCase.js";
import { CreateProjectUseCase } from "./application/use-cases/CreateProjectUseCase.js";
import { UpdateProjectUseCase } from "./application/use-cases/UpdateProjectUseCase.js";
import { DeleteProjectUseCase } from "./application/use-cases/DeleteProjectUseCase.js";
import { buildProjectRouter } from "./presentation/http/routes/project.routes.js";

export function createProjectsModule(deps: { prisma: PrismaClient; auth: AuthModule; accounts: AccountsModule }) {
  const projectRepository = new PrismaProjectRepository(deps.prisma);
  const listProjectsUseCase = new ListProjectsUseCase(projectRepository);
  const getProjectByIdUseCase = new GetProjectByIdUseCase(projectRepository);
  const createProjectUseCase = new CreateProjectUseCase(projectRepository);
  const updateProjectUseCase = new UpdateProjectUseCase(projectRepository);
  const deleteProjectUseCase = new DeleteProjectUseCase(projectRepository);

  return {
    repositories: { projectRepository },
    useCases: { listProjectsUseCase, getProjectByIdUseCase, createProjectUseCase, updateProjectUseCase, deleteProjectUseCase },
    register(app: Express) {
      app.use(
        "/api/projects",
        buildProjectRouter({
          tokenVerifier: deps.auth.contracts.tokenVerifier,
          currentUserResolver: deps.accounts.contracts.currentUserResolver,
          listProjectsUseCase,
          getProjectByIdUseCase,
          createProjectUseCase,
          updateProjectUseCase,
          deleteProjectUseCase,
        }),
      );
    },
  };
}

export type ProjectsModule = ReturnType<typeof createProjectsModule>;
