export const errorHandler = (error, _req, res, _next) => {
    const message = error instanceof Error ? error.message : "Internal server error";
    const statusCode = typeof error?.statusCode === "number"
        ? (error.statusCode)
        : 500;
    if (statusCode >= 500) {
        console.error(error);
    }
    res.status(statusCode).json({ error: message });
};
//# sourceMappingURL=errorHandler.js.map