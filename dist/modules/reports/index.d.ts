import type { Express } from "express";
import type { PrismaClient } from "../../shared/infrastructure/db/generated/prisma/client.js";
import type { AuthModule } from "../auth/index.js";
export declare function createReportsModule(deps: {
    prisma: PrismaClient;
    auth: AuthModule;
}): {
    register(app: Express): void;
};
//# sourceMappingURL=index.d.ts.map