import { ForbiddenError } from "../../../domain/errors/AppError.js";
import "../types/request-context.js";
export function requireRole(role) {
    return function (req, _res, next) {
        if (req.auth?.role !== role) {
            return next(new ForbiddenError(`Se requiere rol ${role}`));
        }
        next();
    };
}
//# sourceMappingURL=requireRole.js.map