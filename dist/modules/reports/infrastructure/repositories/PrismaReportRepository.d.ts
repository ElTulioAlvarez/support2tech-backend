import type { PrismaClient } from "../../../../shared/infrastructure/db/generated/prisma/client.js";
import type { CreateReportInput, Report, ReportFilters, UpdateReportInput } from "../../domain/entities/Report.js";
import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";
export declare class PrismaReportRepository implements ReportRepository {
    private readonly db;
    constructor(db: PrismaClient);
    findMany(filters: ReportFilters): Promise<import("../../../../shared/domain/pagination/Pagination.js").PaginatedResult<Report>>;
    findById(id: string): Promise<Report | null>;
    create(input: CreateReportInput): Promise<Report>;
    update(id: string, input: UpdateReportInput): Promise<Report | null>;
    delete(id: string): Promise<boolean>;
    private toDbInput;
}
//# sourceMappingURL=PrismaReportRepository.d.ts.map