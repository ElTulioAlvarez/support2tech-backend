import express from "express";
import cors from "cors";
import type { AppContainer } from "./modules.js";

export function createHttpServer(container: AppContainer) {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/auth", container.auth.authRouter);
  app.use("/api/account", container.accounts.accountRouter);

  return app;
}
