import { NotFoundError } from "../../../../shared/domain/errors/AppError.js";
export class GetReportByIdUseCase {
    reportRepository;
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    async execute(id) {
        const report = await this.reportRepository.findById(id);
        if (!report)
            throw new NotFoundError("Reporte no encontrado");
        return report;
    }
}
//# sourceMappingURL=GetReportByIdUseCase.js.map