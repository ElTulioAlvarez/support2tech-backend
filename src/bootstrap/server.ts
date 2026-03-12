import express from "express";
import cors from "cors";
import type { AppContainer } from "./container.js";
import { registerModules } from "./modules.js";
import { errorHandler } from "../shared/presentation/http/middlewares/errorHandler.js";

export function createHttpServer(container: AppContainer) {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "support2tech-backend" });
  });

  registerModules(app, container);

  app.use((req, res) => {
    res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
  });

  app.use(errorHandler);

  return app;
}
