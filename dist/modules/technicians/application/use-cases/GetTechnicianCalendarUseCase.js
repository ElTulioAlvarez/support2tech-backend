export class GetTechnicianCalendarUseCase {
    technicianRepository;
    constructor(technicianRepository) {
        this.technicianRepository = technicianRepository;
    }
    execute(id, start, end) {
        return this.technicianRepository.findCalendarByTechnician(id, start, end);
    }
}
//# sourceMappingURL=GetTechnicianCalendarUseCase.js.map