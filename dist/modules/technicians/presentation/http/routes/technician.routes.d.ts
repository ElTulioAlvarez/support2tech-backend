import type { VerifyAccessTokenUseCase } from "../../../../auth/application/use-cases/VerifyAccessTokenUseCase.js";
import type { EnsureActiveProfileUseCase } from "../../../../accounts/application/use-cases/EnsureActiveProfileUseCase.js";
import type { ListTechniciansUseCase } from "../../../application/use-cases/ListTechniciansUseCase.js";
import type { GetTechnicianByIdUseCase } from "../../../application/use-cases/GetTechnicianByIdUseCase.js";
import type { GetTechnicianCalendarUseCase } from "../../../application/use-cases/GetTechnicianCalendarUseCase.js";
import type { CreateTechnicianUseCase } from "../../../application/use-cases/CreateTechnicianUseCase.js";
import type { UpdateTechnicianUseCase } from "../../../application/use-cases/UpdateTechnicianUseCase.js";
import type { DeleteTechnicianUseCase } from "../../../application/use-cases/DeleteTechnicianUseCase.js";
export declare function buildTechnicianRouter(deps: {
    verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
    ensureActiveProfileUseCase: EnsureActiveProfileUseCase;
    listTechniciansUseCase: ListTechniciansUseCase;
    getTechnicianByIdUseCase: GetTechnicianByIdUseCase;
    getTechnicianCalendarUseCase: GetTechnicianCalendarUseCase;
    createTechnicianUseCase: CreateTechnicianUseCase;
    updateTechnicianUseCase: UpdateTechnicianUseCase;
    deleteTechnicianUseCase: DeleteTechnicianUseCase;
}): import("express-serve-static-core").Router;
//# sourceMappingURL=technician.routes.d.ts.map