import type { ReportFilters } from "../../domain/entities/Report.js";
import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";
export declare class ListReportsUseCase {
    private readonly reportRepository;
    constructor(reportRepository: ReportRepository);
    execute(filters: ReportFilters): Promise<import("../../../../shared/domain/pagination/Pagination.js").PaginatedResult<import("../../domain/entities/Report.js").Report>>;
}
//# sourceMappingURL=ListReportsUseCase.d.ts.map