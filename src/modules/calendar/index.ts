import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
import type { AccountsModule } from "../accounts/index.js";
import { PrismaCalendarRepository } from "./infrastructure/repositories/PrismaCalendarRepository.js";
import { ListCalendarTasksUseCase } from "./application/use-cases/ListCalendarTasksUseCase.js";
import { GetCalendarTaskByIdUseCase } from "./application/use-cases/GetCalendarTaskByIdUseCase.js";
import { CreateCalendarTaskUseCase } from "./application/use-cases/CreateCalendarTaskUseCase.js";
import { UpdateCalendarTaskUseCase } from "./application/use-cases/UpdateCalendarTaskUseCase.js";
import { DeleteCalendarTaskUseCase } from "./application/use-cases/DeleteCalendarTaskUseCase.js";
import { buildCalendarRouter } from "./presentation/http/routes/calendar.routes.js";

export function createCalendarModule(deps: { prisma: PrismaClient; auth: AuthModule; accounts: AccountsModule }) {
  const calendarRepository = new PrismaCalendarRepository(deps.prisma);
  const listCalendarTasksUseCase = new ListCalendarTasksUseCase(calendarRepository);
  const getCalendarTaskByIdUseCase = new GetCalendarTaskByIdUseCase(calendarRepository);
  const createCalendarTaskUseCase = new CreateCalendarTaskUseCase(calendarRepository);
  const updateCalendarTaskUseCase = new UpdateCalendarTaskUseCase(calendarRepository);
  const deleteCalendarTaskUseCase = new DeleteCalendarTaskUseCase(calendarRepository);

  return {
    repositories: { calendarRepository },
    useCases: { listCalendarTasksUseCase, getCalendarTaskByIdUseCase, createCalendarTaskUseCase, updateCalendarTaskUseCase, deleteCalendarTaskUseCase },
    register(app: Express) {
      app.use(
        "/api/calendar",
        buildCalendarRouter({
          tokenVerifier: deps.auth.contracts.tokenVerifier,
          currentUserResolver: deps.accounts.contracts.currentUserResolver,
          listCalendarTasksUseCase,
          getCalendarTaskByIdUseCase,
          createCalendarTaskUseCase,
          updateCalendarTaskUseCase,
          deleteCalendarTaskUseCase,
        }),
      );
    },
  };
}

export type CalendarModule = ReturnType<typeof createCalendarModule>;
