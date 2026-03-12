import type { PaginatedResult } from "../../../../shared/domain/pagination/Pagination.js";
import type { CreateReportInput, Report, ReportFilters, UpdateReportInput } from "../entities/Report.js";

export interface ReportRepository {
  findMany(filters: ReportFilters): Promise<PaginatedResult<Report>>;
  findById(id: string): Promise<Report | null>;
  create(input: CreateReportInput): Promise<Report>;
  update(id: string, input: UpdateReportInput): Promise<Report | null>;
  delete(id: string): Promise<boolean>;
}
