import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";
export declare class DeleteReportUseCase {
    private readonly reportRepository;
    constructor(reportRepository: ReportRepository);
    execute(id: string): Promise<{
        deleted: boolean;
    }>;
}
//# sourceMappingURL=DeleteReportUseCase.d.ts.map