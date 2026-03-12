import { PrismaReportRepository } from "./infrastructure/repositories/PrismaReportRepository.js";
import { ListReportsUseCase } from "./application/use-cases/ListReportsUseCase.js";
import { GetReportByIdUseCase } from "./application/use-cases/GetReportByIdUseCase.js";
import { CreateReportUseCase } from "./application/use-cases/CreateReportUseCase.js";
import { UpdateReportUseCase } from "./application/use-cases/UpdateReportUseCase.js";
import { DeleteReportUseCase } from "./application/use-cases/DeleteReportUseCase.js";
import { buildReportRouter } from "./presentation/http/routes/report.routes.js";
export function createReportsModule(deps) {
    const reportRepository = new PrismaReportRepository(deps.prisma);
    const listReportsUseCase = new ListReportsUseCase(reportRepository);
    const getReportByIdUseCase = new GetReportByIdUseCase(reportRepository);
    const createReportUseCase = new CreateReportUseCase(reportRepository);
    const updateReportUseCase = new UpdateReportUseCase(reportRepository);
    const deleteReportUseCase = new DeleteReportUseCase(reportRepository);
    return {
        repositories: { reportRepository },
        useCases: { listReportsUseCase, getReportByIdUseCase, createReportUseCase, updateReportUseCase, deleteReportUseCase },
        register(app) {
            app.use("/api/reports", buildReportRouter({
                verifyAccessTokenUseCase: deps.auth.useCases.verifyAccessTokenUseCase,
                ensureActiveProfileUseCase: deps.accounts.useCases.ensureActiveProfileUseCase,
                listReportsUseCase,
                getReportByIdUseCase,
                createReportUseCase,
                updateReportUseCase,
                deleteReportUseCase,
            }));
        },
    };
}
//# sourceMappingURL=index.js.map