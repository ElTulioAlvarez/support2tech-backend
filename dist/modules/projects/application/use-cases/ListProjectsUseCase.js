export class ListProjectsUseCase {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    execute(filters) {
        return this.projectRepository.findMany(filters);
    }
}
//# sourceMappingURL=ListProjectsUseCase.js.map