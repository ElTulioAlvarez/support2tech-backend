import type { VerifyAccessTokenUseCase } from "../../../../auth/application/use-cases/VerifyAccessTokenUseCase.js";
import type { EnsureActiveProfileUseCase } from "../../../../accounts/application/use-cases/EnsureActiveProfileUseCase.js";
import type { ListReportsUseCase } from "../../../application/use-cases/ListReportsUseCase.js";
import type { GetReportByIdUseCase } from "../../../application/use-cases/GetReportByIdUseCase.js";
import type { CreateReportUseCase } from "../../../application/use-cases/CreateReportUseCase.js";
import type { UpdateReportUseCase } from "../../../application/use-cases/UpdateReportUseCase.js";
import type { DeleteReportUseCase } from "../../../application/use-cases/DeleteReportUseCase.js";
export declare function buildReportRouter(deps: {
    verifyAccessTokenUseCase: VerifyAccessTokenUseCase;
    ensureActiveProfileUseCase: EnsureActiveProfileUseCase;
    listReportsUseCase: ListReportsUseCase;
    getReportByIdUseCase: GetReportByIdUseCase;
    createReportUseCase: CreateReportUseCase;
    updateReportUseCase: UpdateReportUseCase;
    deleteReportUseCase: DeleteReportUseCase;
}): import("express-serve-static-core").Router;
//# sourceMappingURL=report.routes.d.ts.map