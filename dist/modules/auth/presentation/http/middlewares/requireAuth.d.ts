import type { Request, Response, NextFunction } from "express";
import type { VerifyAccessTokenUseCase } from "../../../application/use-cases/VerifyAccessTokenUseCase.js";
import "../../../../../shared/presentation/http/types/request-context.js";
export declare function requireAuth(verifyAccessTokenUseCase: VerifyAccessTokenUseCase): (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=requireAuth.d.ts.map