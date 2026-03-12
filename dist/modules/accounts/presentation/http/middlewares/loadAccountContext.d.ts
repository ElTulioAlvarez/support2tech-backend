import type { Request, Response, NextFunction } from "express";
import type { EnsureActiveProfileUseCase } from "../../../application/use-cases/EnsureActiveProfileUseCase.js";
import "../../../../../shared/presentation/http/types/request-context.js";
export declare function loadAccountContext(ensureActiveProfileUseCase: EnsureActiveProfileUseCase): (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=loadAccountContext.d.ts.map