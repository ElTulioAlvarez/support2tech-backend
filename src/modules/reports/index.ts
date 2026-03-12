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
import { buildReportRouter } from "./presentation/http/routes/report.routes.js";

export function createReportsModule(deps: { prisma: PrismaClient; auth: AuthModule; accounts: AccountsModule }) {
  const reportRepository = new PrismaReportRepository(deps.prisma);
  const listReportsUseCase = new ListReportsUseCase(reportRepository);
  const getReportByIdUseCase = new GetReportByIdUseCase(reportRepository);
  const createReportUseCase = new CreateReportUseCase(reportRepository);
  const updateReportUseCase = new UpdateReportUseCase(reportRepository);
  const deleteReportUseCase = new DeleteReportUseCase(reportRepository);

  return {
    repositories: { reportRepository },
    useCases: { listReportsUseCase, getReportByIdUseCase, createReportUseCase, updateReportUseCase, deleteReportUseCase },
    register(app: Express) {
      app.use(
        "/api/reports",
        buildReportRouter({
          tokenVerifier: deps.auth.contracts.tokenVerifier,
          currentUserResolver: deps.accounts.contracts.currentUserResolver,
          listReportsUseCase,
          getReportByIdUseCase,
          createReportUseCase,
          updateReportUseCase,
          deleteReportUseCase,
        }),
      );
    },
  };
}

export type ReportsModule = ReturnType<typeof createReportsModule>;
