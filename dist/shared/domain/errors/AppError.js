export class AppError extends Error {
    statusCode;
    code;
    details;
    constructor(message, statusCode, code, details) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.name = "AppError";
    }
}
export class BadRequestError extends AppError {
    constructor(message, details) {
        super(message, 400, "BAD_REQUEST", details);
    }
}
export class UnauthorizedError extends AppError {
    constructor(message = "No autenticado") {
        super(message, 401, "UNAUTHORIZED");
    }
}
export class ForbiddenError extends AppError {
    constructor(message = "Acceso denegado") {
        super(message, 403, "FORBIDDEN");
    }
}
export class NotFoundError extends AppError {
    constructor(message = "Recurso no encontrado") {
        super(message, 404, "NOT_FOUND");
    }
}
export class ConflictError extends AppError {
    constructor(message, details) {
        super(message, 409, "CONFLICT", details);
    }
}
//# sourceMappingURL=AppError.js.map