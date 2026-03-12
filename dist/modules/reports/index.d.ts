import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import type { AccountsModule } from "../accounts/index.js";
import { PrismaReportRepository } from "./infrastructure/repositories/PrismaReportRepository.js";
import { ListReportsUseCase } from "./application/use-cases/ListReportsUseCase.js";
import { GetReportByIdUseCase } from "./application/use-cases/GetReportByIdUseCase.js";
import { CreateReportUseCase } from "./application/use-cases/CreateReportUseCase.js";
import { UpdateReportUseCase } from "./application/use-cases/UpdateReportUseCase.js";
import { DeleteReportUseCase } from "./application/use-cases/DeleteReportUseCase.js";
export declare function createReportsModule(deps: {
    prisma: PrismaClient;
    auth: AuthModule;
    accounts: AccountsModule;
}): {
    repositories: {
        reportRepository: PrismaReportRepository;
    };
    useCases: {
        listReportsUseCase: ListReportsUseCase;
        getReportByIdUseCase: GetReportByIdUseCase;
        createReportUseCase: CreateReportUseCase;
        updateReportUseCase: UpdateReportUseCase;
        deleteReportUseCase: DeleteReportUseCase;
    };
    register(app: Express): void;
};
export type ReportsModule = ReturnType<typeof createReportsModule>;
//# sourceMappingURL=index.d.ts.map