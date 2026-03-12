import { BadRequestError, NotFoundError } from "../../../../shared/domain/errors/AppError.js";
import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";
import type { UpdateReportInput } from "../../domain/entities/Report.js";

export class UpdateReportUseCase {
  constructor(private readonly reportRepository: ReportRepository) {}

  async execute(id: string, input: UpdateReportInput) {
    if (input.beforeCount !== undefined && input.beforeCount < 0) throw new BadRequestError("beforeCount inválido");
    if (input.afterCount !== undefined && input.afterCount < 0) throw new BadRequestError("afterCount inválido");

    const updated = await this.reportRepository.update(id, input);
    if (!updated) throw new NotFoundError("Reporte no encontrado");
    return updated;
  }
}
