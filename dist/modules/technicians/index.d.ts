import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import type { AccountsModule } from "../accounts/index.js";
import { PrismaTechnicianRepository } from "./infrastructure/repositories/PrismaTechnicianRepository.js";
import { ListTechniciansUseCase } from "./application/use-cases/ListTechniciansUseCase.js";
import { GetTechnicianByIdUseCase } from "./application/use-cases/GetTechnicianByIdUseCase.js";
import { GetTechnicianCalendarUseCase } from "./application/use-cases/GetTechnicianCalendarUseCase.js";
import { CreateTechnicianUseCase } from "./application/use-cases/CreateTechnicianUseCase.js";
import { UpdateTechnicianUseCase } from "./application/use-cases/UpdateTechnicianUseCase.js";
import { DeleteTechnicianUseCase } from "./application/use-cases/DeleteTechnicianUseCase.js";
export declare function createTechniciansModule(deps: {
    prisma: PrismaClient;
    auth: AuthModule;
    accounts: AccountsModule;
}): {
    repositories: {
        technicianRepository: PrismaTechnicianRepository;
    };
    useCases: {
        listTechniciansUseCase: ListTechniciansUseCase;
        getTechnicianByIdUseCase: GetTechnicianByIdUseCase;
        getTechnicianCalendarUseCase: GetTechnicianCalendarUseCase;
        createTechnicianUseCase: CreateTechnicianUseCase;
        updateTechnicianUseCase: UpdateTechnicianUseCase;
        deleteTechnicianUseCase: DeleteTechnicianUseCase;
    };
    register(app: Express): void;
};
export type TechniciansModule = ReturnType<typeof createTechniciansModule>;
//# sourceMappingURL=index.d.ts.map