import { BadRequestError, NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class UpdateReportUseCase {
    reportRepository;
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    async execute(id, input) {
        if (input.beforeCount !== undefined && input.beforeCount < 0)
            throw new BadRequestError("beforeCount inválido");
        if (input.afterCount !== undefined && input.afterCount < 0)
            throw new BadRequestError("afterCount inválido");
        const updated = await this.reportRepository.update(id, input);
        if (!updated)
            throw new NotFoundError("Reporte no encontrado");
        return updated;
    }
}
//# sourceMappingURL=UpdateReportUseCase.js.map