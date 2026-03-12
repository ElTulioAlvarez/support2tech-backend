export class ListTechniciansUseCase {
    technicianRepository;
    constructor(technicianRepository) {
        this.technicianRepository = technicianRepository;
    }
    execute(filters) {
        return this.technicianRepository.findMany(filters);
    }
}
//# sourceMappingURL=ListTechniciansUseCase.js.map