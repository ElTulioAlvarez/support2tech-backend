import type { VerifyAccessTokenUseCase } from "../../../../auth/application/use-cases/VerifyAccessTokenUseCase.js";
import type { EnsureActiveProfileUseCase } from "../../../../accounts/application/use-cases/EnsureActiveProfileUseCase.js";
import type { ListCalendarTasksUseCase } from "../../../application/use-cases/ListCalendarTasksUseCase.js";
import type { GetCalendarTaskByIdUseCase } from "../../../application/use-cases/GetCalendarTaskByIdUseCase.js";
import type { CreateCalendarTaskUseCase } from "../../../application/use-cases/CreateCalendarTaskUseCase.js";
import type { UpdateCalendarTaskUseCase } from "../../../application/use-cases/UpdateCalendarTaskUseCase.js";
import type { DeleteCalendarTaskUseCase } from "../../../application/use-cases/DeleteCalendarTaskUseCase.js";
export declare function buildCalendarRouter(deps: {
    verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
    ensureActiveProfileUseCase: EnsureActiveProfileUseCase;
    listCalendarTasksUseCase: ListCalendarTasksUseCase;
    getCalendarTaskByIdUseCase: GetCalendarTaskByIdUseCase;
    createCalendarTaskUseCase: CreateCalendarTaskUseCase;
    updateCalendarTaskUseCase: UpdateCalendarTaskUseCase;
    deleteCalendarTaskUseCase: DeleteCalendarTaskUseCase;
}): import("express-serve-static-core").Router;
//# sourceMappingURL=calendar.routes.d.ts.map