import { prisma } from "../shared/infrastructure/db/prismaClient.js";
import { createAuthModule } from "../modules/auth/index.js";
import { createAccountsModule } from "../modules/accounts/index.js";
import { createProjectsModule } from "../modules/projects/index.js";
import { createCalendarModule } from "../modules/calendar/index.js";
import { createReportsModule } from "../modules/reports/index.js";
import { createTechniciansModule } from "../modules/technicians/index.js";

export function buildContainer() {
  const shared = {
    db: { prisma },
  };

  const auth = createAuthModule({ prisma: shared.db.prisma });
  const accounts = createAccountsModule({ prisma: shared.db.prisma, auth });
  const projects = createProjectsModule({ prisma: shared.db.prisma, auth, accounts });
  const calendar = createCalendarModule({ prisma: shared.db.prisma, auth, accounts });
  const reports = createReportsModule({ prisma: shared.db.prisma, auth, accounts });
  const technicians = createTechniciansModule({ prisma: shared.db.prisma, auth, accounts });

  return {
    shared,
    modules: {
      auth,
      accounts,
      projects,
      calendar,
      reports,
      technicians,
    },
  };
}

export type AppContainer = ReturnType<typeof buildContainer>;
