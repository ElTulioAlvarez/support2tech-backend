import type { Express } from "express";
import type { AppContainer } from "./container.js";

export function registerModules(app: Express, container: AppContainer) {
  container.modules.auth.register(app);
  container.modules.accounts.register(app);
  container.modules.projects.register(app);
  container.modules.calendar.register(app);
  container.modules.reports.register(app);
  container.modules.technicians.register(app);
}
