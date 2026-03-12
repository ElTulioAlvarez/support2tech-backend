import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
import type { CreateReportInput } from "../../domain/entities/Report.js";
import type { ReportRepository } from "../../domain/repositories/ReportRepository.js";

export class CreateReportUseCase {
  constructor(private readonly reportRepository: ReportRepository) {}

  async execute(input: CreateReportInput) {
    if ((input.beforeCount ?? 0) < 0 || (input.afterCount ?? 0) < 0) {
      throw new BadRequestError("Los contadores no pueden ser negativos");
    }

    return this.reportRepository.create({
      ...input,
      beforeCount: input.beforeCount ?? 0,
      afterCount: input.afterCount ?? 0,
      hasVideo: input.hasVideo ?? false,
    });
  }
}
