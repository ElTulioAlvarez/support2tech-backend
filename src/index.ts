import "dotenv/config";
import { buildContainer } from "./bootstrap/container.js";
import { createHttpServer } from "./bootstrap/server.js";

const port = Number(process.env.PORT ?? 3001);

async function main() {
  const container = await buildContainer();
  const app = createHttpServer(container);

  app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
  });
}

main().catch((error) => {
  console.error("BOOT FAIL:", error);
  process.exit(1);
});
