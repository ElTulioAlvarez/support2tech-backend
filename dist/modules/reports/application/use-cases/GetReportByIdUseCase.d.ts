import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";
export declare class GetReportByIdUseCase {
    private readonly reportRepository;
    constructor(reportRepository: ReportRepository);
    execute(id: string): Promise<import("../../domain/entities/Report.js").Report>;
}
//# sourceMappingURL=GetReportByIdUseCase.d.ts.map