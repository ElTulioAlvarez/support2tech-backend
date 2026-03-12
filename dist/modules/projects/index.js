import { PrismaProjectRepository } from "./infrastructure/repositories/PrismaProjectRepository.js";
import { ListProjectsUseCase } from "./application/use-cases/ListProjectsUseCase.js";
import { GetProjectByIdUseCase } from "./application/use-cases/GetProjectByIdUseCase.js";
import { CreateProjectUseCase } from "./application/use-cases/CreateProjectUseCase.js";
import { UpdateProjectUseCase } from "./application/use-cases/UpdateProjectUseCase.js";
import { DeleteProjectUseCase } from "./application/use-cases/DeleteProjectUseCase.js";
import { buildProjectRouter } from "./presentation/http/routes/project.routes.js";
export function createProjectsModule(deps) {
    const projectRepository = new PrismaProjectRepository(deps.prisma);
    const listProjectsUseCase = new ListProjectsUseCase(projectRepository);
    const getProjectByIdUseCase = new GetProjectByIdUseCase(projectRepository);
    const createProjectUseCase = new CreateProjectUseCase(projectRepository);
    const updateProjectUseCase = new UpdateProjectUseCase(projectRepository);
    const deleteProjectUseCase = new DeleteProjectUseCase(projectRepository);
    return {
        repositories: { projectRepository },
        useCases: { listProjectsUseCase, getProjectByIdUseCase, createProjectUseCase, updateProjectUseCase, deleteProjectUseCase },
        register(app) {
            app.use("/api/projects", buildProjectRouter({
                verifyAccessTokenUseCase: deps.auth.useCases.verifyAccessTokenUseCase,
                ensureActiveProfileUseCase: deps.accounts.useCases.ensureActiveProfileUseCase,
                listProjectsUseCase,
                getProjectByIdUseCase,
                createProjectUseCase,
                updateProjectUseCase,
                deleteProjectUseCase,
            }));
        },
    };
}
//# sourceMappingURL=index.js.map