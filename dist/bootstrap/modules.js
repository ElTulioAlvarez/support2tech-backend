export function registerModules(app, container) {
    container.modules.auth.register(app);
    container.modules.accounts.register(app);
    container.modules.projects.register(app);
    container.modules.calendar.register(app);
    container.modules.reports.register(app);
    container.modules.technicians.register(app);
}
//# sourceMappingURL=modules.js.map