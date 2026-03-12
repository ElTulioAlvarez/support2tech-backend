import "dotenv/config";
import "./shared/presentation/http/types/request-context.js";
import { buildContainer } from "./bootstrap/container.js";
import { createHttpServer } from "./bootstrap/server.js";
const container = buildContainer();
const app = createHttpServer(container);
const port = Number(process.env.PORT ?? 3001);
async function bootstrap() {
    await container.shared.db.prisma.$connect();
    await container.shared.db.prisma.$queryRaw `select now()`;
    app.listen(port, () => {
        console.log(`API running on http://localhost:${port}`);
    });
}
bootstrap().catch((error) => {
    console.error("Bootstrap FAIL:", error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map