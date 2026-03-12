import "../../../../../shared/presentation/http/types/request-context.js";
export function requireAuth(verifyAccessTokenUseCase) {
    return async function (req, res, next) {
        try {
            const header = req.headers.authorization;
            if (!header || !header.startsWith("Bearer ")) {
                return res.status(401).json({ error: "Authorization bearer token requerido" });
            }
            const token = header.slice("Bearer ".length).trim();
            const identity = await verifyAccessTokenUseCase.execute(token);
            req.auth = {
                userId: identity.userId,
                email: identity.email,
                role: null,
            };
            next();
        }
        catch {
            return res.status(401).json({ error: "No autorizado" });
        }
    };
}
//# sourceMappingURL=requireAuth.js.map