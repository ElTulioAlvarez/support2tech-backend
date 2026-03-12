import type { CreateReportInput } from "../../domain/entities/Report.js";
import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";
export declare class CreateReportUseCase {
    private readonly reportRepository;
    constructor(reportRepository: ReportRepository);
    execute(input: CreateReportInput): Promise<import("../../domain/entities/Report.js").Report>;
}
//# sourceMappingURL=CreateReportUseCase.d.ts.map