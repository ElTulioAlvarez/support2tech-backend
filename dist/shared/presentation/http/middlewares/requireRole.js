import "../types/request-context.js";
export function requireRole(role) {
    return function (req, res, next) {
        if (req.auth?.role !== role) {
            return res.status(403).json({ error: "Forbidden" });
        }
        next();
    };
}
//# sourceMappingURL=requireRole.js.map