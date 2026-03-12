export class ListReportsUseCase {
    reportRepository;
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    execute(filters) {
        return this.reportRepository.findMany(filters);
    }
}
//# sourceMappingURL=ListReportsUseCase.js.map