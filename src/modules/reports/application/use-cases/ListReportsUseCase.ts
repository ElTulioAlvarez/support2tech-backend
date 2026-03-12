import type { ReportFilters } from "../../domain/entities/Report.js";
import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";

export class ListReportsUseCase {
  constructor(private readonly reportRepository: ReportRepository) {}

  execute(filters: ReportFilters) {
    return this.reportRepository.findMany(filters);
  }
}
