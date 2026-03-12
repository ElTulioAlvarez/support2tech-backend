import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const message = error instanceof Error ? error.message : "Internal server error";
  const statusCode = typeof (error as { statusCode?: unknown })?.statusCode === "number"
    ? ((error as { statusCode: number }).statusCode)
    : 500;

  if (statusCode >= 500) {
    console.error(error);
  }

  res.status(statusCode).json({ error: message });
};
