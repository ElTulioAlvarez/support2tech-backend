import type { ErrorRequestHandler } from "express";
import { AppError } from "../../../domain/errors/AppError.js";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const appError = error instanceof AppError
    ? error
    : new AppError(error instanceof Error ? error.message : "Internal server error", 500, "INTERNAL_ERROR");

  if (appError.statusCode >= 500) {
    console.error(error);
  }

  res.status(appError.statusCode).json({
    ok: false,
    error: {
      message: appError.message,
      code: appError.code,
      details: appError.details,
    },
  });
};
