import type { NextFunction, Request, RequestHandler, Response } from "express";
export declare function asyncHandler(handler: (req: Request, res: Response, next: NextFunction) => Promise<unknown>): RequestHandler;
//# sourceMappingURL=asyncHandler.d.ts.map