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
export declare function createProjectsModule(deps: {
    prisma: PrismaClient;
    auth: AuthModule;
    accounts: AccountsModule;
}): {
    repositories: {
        projectRepository: PrismaProjectRepository;
    };
    useCases: {
        listProjectsUseCase: ListProjectsUseCase;
        getProjectByIdUseCase: GetProjectByIdUseCase;
        createProjectUseCase: CreateProjectUseCase;
        updateProjectUseCase: UpdateProjectUseCase;
        deleteProjectUseCase: DeleteProjectUseCase;
    };
    register(app: Express): void;
};
export type ProjectsModule = ReturnType<typeof createProjectsModule>;
//# sourceMappingURL=index.d.ts.map