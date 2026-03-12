import type { VerifyAccessTokenUseCase } from "../../../../auth/application/use-cases/VerifyAccessTokenUseCase.js";
import type { EnsureActiveProfileUseCase } from "../../../../accounts/application/use-cases/EnsureActiveProfileUseCase.js";
import type { ListProjectsUseCase } from "../../../application/use-cases/ListProjectsUseCase.js";
import type { GetProjectByIdUseCase } from "../../../application/use-cases/GetProjectByIdUseCase.js";
import type { CreateProjectUseCase } from "../../../application/use-cases/CreateProjectUseCase.js";
import type { UpdateProjectUseCase } from "../../../application/use-cases/UpdateProjectUseCase.js";
import type { DeleteProjectUseCase } from "../../../application/use-cases/DeleteProjectUseCase.js";
export declare function buildProjectRouter(deps: {
    verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
    ensureActiveProfileUseCase: EnsureActiveProfileUseCase;
    listProjectsUseCase: ListProjectsUseCase;
    getProjectByIdUseCase: GetProjectByIdUseCase;
    createProjectUseCase: CreateProjectUseCase;
    updateProjectUseCase: UpdateProjectUseCase;
    deleteProjectUseCase: DeleteProjectUseCase;
}): import("express-serve-static-core").Router;
//# sourceMappingURL=project.routes.d.ts.map