import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class DeleteReportUseCase {
    reportRepository;
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    async execute(id) {
        const deleted = await this.reportRepository.delete(id);
        if (!deleted)
            throw new NotFoundError("Reporte no encontrado");
        return { deleted: true };
    }
}
//# sourceMappingURL=DeleteReportUseCase.js.map