import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";

export class GetReportByIdUseCase {
  constructor(private readonly reportRepository: ReportRepository) {}

  async execute(id: string) {
    const report = await this.reportRepository.findById(id);
    if (!report) throw new NotFoundError("Reporte no encontrado");
    return report;
  }
}
