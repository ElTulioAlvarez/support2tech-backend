export declare class AppError extends Error {
    readonly statusCode: number;
    readonly code?: string | undefined;
    readonly details?: unknown | undefined;
    constructor(message: string, statusCode: number, code?: string | undefined, details?: unknown | undefined);
}
export declare class BadRequestError extends AppError {
    constructor(message: string, details?: unknown);
}
export declare class UnauthorizedError extends AppError {
    constructor(message?: string);
}
export declare class ForbiddenError extends AppError {
    constructor(message?: string);
}
export declare class NotFoundError extends AppError {
    constructor(message?: string);
}
export declare class ConflictError extends AppError {
    constructor(message: string, details?: unknown);
}
//# sourceMappingURL=AppError.d.ts.map