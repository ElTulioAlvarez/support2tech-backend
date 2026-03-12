import type { Request, Response, NextFunction } from "express";
import type { UserRole } from "../../../../modules/accounts/domain/entities/Profile.js";
import "../types/request-context.js";
export declare function requireRole(role: UserRole): (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=requireRole.d.ts.map