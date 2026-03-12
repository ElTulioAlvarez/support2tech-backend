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
export declare function createCalendarModule(deps: {
    prisma: PrismaClient;
    auth: AuthModule;
    accounts: AccountsModule;
}): {
    repositories: {
        calendarRepository: PrismaCalendarRepository;
    };
    useCases: {
        listCalendarTasksUseCase: ListCalendarTasksUseCase;
        getCalendarTaskByIdUseCase: GetCalendarTaskByIdUseCase;
        createCalendarTaskUseCase: CreateCalendarTaskUseCase;
        updateCalendarTaskUseCase: UpdateCalendarTaskUseCase;
        deleteCalendarTaskUseCase: DeleteCalendarTaskUseCase;
    };
    register(app: Express): void;
};
export type CalendarModule = ReturnType<typeof createCalendarModule>;
//# sourceMappingURL=index.d.ts.map