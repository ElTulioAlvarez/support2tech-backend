import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";

export class DeleteReportUseCase {
  constructor(private readonly reportRepository: ReportRepository) {}

  async execute(id: string) {
    const deleted = await this.reportRepository.delete(id);
    if (!deleted) throw new NotFoundError("Reporte no encontrado");
    return { deleted: true };
  }
}
