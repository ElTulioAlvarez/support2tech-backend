export declare function buildContainer(): {
    shared: {
        db: {
            prisma: import("../shared/infrastructure/db/generated/prisma/internal/class.js").PrismaClient<never, import("../shared/infrastructure/db/generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined, import("@prisma/client/runtime/client").DefaultArgs>;
        };
    };
    modules: {
        auth: {
            identityProvider: import("../modules/auth/infrastructure/providers/SupabaseIdentityProvider.js").SupabaseIdentityProvider;
            useCases: {
                loginUseCase: import("../modules/auth/application/use-cases/LoginUseCase.js").LoginUseCase;
                verifyAccessTokenUseCase: import("../modules/auth/application/use-cases/VerifyAccessTokenUseCase.js").VerifyAccessTokenUseCase;
            };
            register(app: import("express").Express): void;
        };
        accounts: {
            repositories: {
                profileRepository: import("../modules/accounts/infrastructure/repositories/PrismaProfileRepository.js").PrismaProfileRepository;
            };
            useCases: {
                getMyProfileUseCase: import("../modules/accounts/application/use-cases/GetMyProfileUseCase.js").GetMyProfileUseCase;
                getRoleByUserIdUseCase: import("../modules/accounts/application/use-cases/GetRoleByUserIdUseCase.js").GetRoleByUserIdUseCase;
                ensureActiveProfileUseCase: import("../modules/accounts/application/use-cases/EnsureActiveProfileUseCase.js").EnsureActiveProfileUseCase;
            };
            register(app: import("express").Express): void;
        };
        projects: {
            repositories: {
                projectRepository: import("../modules/projects/infrastructure/repositories/PrismaProjectRepository.js").PrismaProjectRepository;
            };
            useCases: {
                listProjectsUseCase: import("../modules/projects/application/use-cases/ListProjectsUseCase.js").ListProjectsUseCase;
                getProjectByIdUseCase: import("../modules/projects/application/use-cases/GetProjectByIdUseCase.js").GetProjectByIdUseCase;
                createProjectUseCase: import("../modules/projects/application/use-cases/CreateProjectUseCase.js").CreateProjectUseCase;
                updateProjectUseCase: import("../modules/projects/application/use-cases/UpdateProjectUseCase.js").UpdateProjectUseCase;
                deleteProjectUseCase: import("../modules/projects/application/use-cases/DeleteProjectUseCase.js").DeleteProjectUseCase;
            };
            register(app: import("express").Express): void;
        };
        calendar: {
            repositories: {
                calendarRepository: import("../modules/calendar/infrastructure/repositories/PrismaCalendarRepository.js").PrismaCalendarRepository;
            };
            useCases: {
                listCalendarTasksUseCase: import("../modules/calendar/application/use-cases/ListCalendarTasksUseCase.js").ListCalendarTasksUseCase;
                getCalendarTaskByIdUseCase: import("../modules/calendar/application/use-cases/GetCalendarTaskByIdUseCase.js").GetCalendarTaskByIdUseCase;
                createCalendarTaskUseCase: import("../modules/calendar/application/use-cases/CreateCalendarTaskUseCase.js").CreateCalendarTaskUseCase;
                updateCalendarTaskUseCase: import("../modules/calendar/application/use-cases/UpdateCalendarTaskUseCase.js").UpdateCalendarTaskUseCase;
                deleteCalendarTaskUseCase: import("../modules/calendar/application/use-cases/DeleteCalendarTaskUseCase.js").DeleteCalendarTaskUseCase;
            };
            register(app: import("express").Express): void;
        };
        reports: {
            repositories: {
                reportRepository: import("../modules/reports/infrastructure/repositories/PrismaReportRepository.js").PrismaReportRepository;
            };
            useCases: {
                listReportsUseCase: import("../modules/reports/application/use-cases/ListReportsUseCase.js").ListReportsUseCase;
                getReportByIdUseCase: import("../modules/reports/application/use-cases/GetReportByIdUseCase.js").GetReportByIdUseCase;
                createReportUseCase: import("../modules/reports/application/use-cases/CreateReportUseCase.js").CreateReportUseCase;
                updateReportUseCase: import("../modules/reports/application/use-cases/UpdateReportUseCase.js").UpdateReportUseCase;
                deleteReportUseCase: import("../modules/reports/application/use-cases/DeleteReportUseCase.js").DeleteReportUseCase;
            };
            register(app: import("express").Express): void;
        };
        technicians: {
            repositories: {
                technicianRepository: import("../modules/technicians/infrastructure/repositories/PrismaTechnicianRepository.js").PrismaTechnicianRepository;
            };
            useCases: {
                listTechniciansUseCase: import("../modules/technicians/application/use-cases/ListTechniciansUseCase.js").ListTechniciansUseCase;
                getTechnicianByIdUseCase: import("../modules/technicians/application/use-cases/GetTechnicianByIdUseCase.js").GetTechnicianByIdUseCase;
                getTechnicianCalendarUseCase: import("../modules/technicians/application/use-cases/GetTechnicianCalendarUseCase.js").GetTechnicianCalendarUseCase;
                createTechnicianUseCase: import("../modules/technicians/application/use-cases/CreateTechnicianUseCase.js").CreateTechnicianUseCase;
                updateTechnicianUseCase: import("../modules/technicians/application/use-cases/UpdateTechnicianUseCase.js").UpdateTechnicianUseCase;
                deleteTechnicianUseCase: import("../modules/technicians/application/use-cases/DeleteTechnicianUseCase.js").DeleteTechnicianUseCase;
            };
            register(app: import("express").Express): void;
        };
    };
};
export type AppContainer = ReturnType<typeof buildContainer>;
//# sourceMappingURL=container.d.ts.map