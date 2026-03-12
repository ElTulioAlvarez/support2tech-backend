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
import { buildTechnicianRouter } from "./presentation/http/routes/technician.routes.js";

export function createTechniciansModule(deps: { prisma: PrismaClient; auth: AuthModule; accounts: AccountsModule }) {
  const technicianRepository = new PrismaTechnicianRepository(deps.prisma);
  const listTechniciansUseCase = new ListTechniciansUseCase(technicianRepository);
  const getTechnicianByIdUseCase = new GetTechnicianByIdUseCase(technicianRepository);
  const getTechnicianCalendarUseCase = new GetTechnicianCalendarUseCase(technicianRepository);
  const createTechnicianUseCase = new CreateTechnicianUseCase(technicianRepository);
  const updateTechnicianUseCase = new UpdateTechnicianUseCase(technicianRepository);
  const deleteTechnicianUseCase = new DeleteTechnicianUseCase(technicianRepository);

  return {
    repositories: { technicianRepository },
    useCases: {
      listTechniciansUseCase,
      getTechnicianByIdUseCase,
      getTechnicianCalendarUseCase,
      createTechnicianUseCase,
      updateTechnicianUseCase,
      deleteTechnicianUseCase,
    },
    register(app: Express) {
      app.use(
        "/api/technicians",
        buildTechnicianRouter({
          tokenVerifier: deps.auth.contracts.tokenVerifier,
          currentUserResolver: deps.accounts.contracts.currentUserResolver,
          listTechniciansUseCase,
          getTechnicianByIdUseCase,
          getTechnicianCalendarUseCase,
          createTechnicianUseCase,
          updateTechnicianUseCase,
          deleteTechnicianUseCase,
        }),
      );
    },
  };
}

export type TechniciansModule = ReturnType<typeof createTechniciansModule>;
