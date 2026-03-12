import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";
import type { UpdateReportInput } from "../../domain/entities/Report.js";
export declare class UpdateReportUseCase {
    private readonly reportRepository;
    constructor(reportRepository: ReportRepository);
    execute(id: string, input: UpdateReportInput): Promise<import("../../domain/entities/Report.js").Report>;
}
//# sourceMappingURL=UpdateReportUseCase.d.ts.map