import "../../../../../shared/presentation/http/types/request-context.js";
export function loadAccountContext(ensureActiveProfileUseCase) {
    return async function (req, res, next) {
        try {
            if (!req.auth?.userId) {
                return res.status(401).json({ error: "Usuario no autenticado" });
            }
            const profile = await ensureActiveProfileUseCase.execute(req.auth.userId);
            req.currentProfile = profile;
            req.auth = {
                ...req.auth,
                role: profile.rol,
            };
            next();
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "No fue posible cargar el perfil";
            return res.status(403).json({ error: message });
        }
    };
}
//# sourceMappingURL=loadAccountContext.js.map