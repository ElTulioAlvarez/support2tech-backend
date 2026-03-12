import { BadRequestError } from "../../../../shared/domain/errors/AppError.js";
export class CreateReportUseCase {
    reportRepository;
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    async execute(input) {
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
//# sourceMappingURL=CreateReportUseCase.js.map