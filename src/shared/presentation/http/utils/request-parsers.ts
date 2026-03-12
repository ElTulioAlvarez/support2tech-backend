import { BadRequestError } from "../../../domain/errors/AppError.js";
import type { PaginationParams } from "../../../domain/pagination/Pagination.js";

export function getQueryString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export function getParamString(value: unknown, fieldName = "Id"): string {
  if (typeof value === "string" && value.trim()) return value.trim();
  if (Array.isArray(value) && typeof value[0] === "string" && value[0].trim()) return value[0].trim();
  throw new BadRequestError(`${fieldName} requerido`);
}

export function parseDate(value: unknown, fieldName: string): Date | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
  if (typeof value !== "string") throw new BadRequestError(`${fieldName} inválido`);
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) throw new BadRequestError(`${fieldName} inválido`);
  return date;
}

export function parseOptionalString(value: unknown): string | null | undefined {
  if (value === undefined) return undefined;
  if (value === null) return null;
  if (typeof value !== "string") throw new BadRequestError("Se esperaba texto");
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

export function parseRequiredString(value: unknown, fieldName: string): string {
  if (typeof value !== "string" || !value.trim()) throw new BadRequestError(`${fieldName} es requerido`);
  return value.trim();
}

export function parseOptionalNumber(value: unknown, fieldName: string): number | null | undefined {
  if (value === undefined) return undefined;
  if (value === null || value === "") return null;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  throw new BadRequestError(`${fieldName} inválido`);
}

export function parseOptionalBoolean(value: unknown, fieldName: string): boolean | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "boolean") return value;
  if (value === "true") return true;
  if (value === "false") return false;
  throw new BadRequestError(`${fieldName} inválido`);
}

export function parsePagination(query: Record<string, unknown>): PaginationParams {
  const rawPage = getQueryString(query.page);
  const rawPageSize = getQueryString(query.pageSize);

  const page = rawPage ? Number(rawPage) : 1;
  const pageSize = rawPageSize ? Number(rawPageSize) : 20;

  if (!Number.isInteger(page) || page <= 0) throw new BadRequestError("page inválido");
  if (!Number.isInteger(pageSize) || pageSize <= 0 || pageSize > 100) {
    throw new BadRequestError("pageSize inválido, debe ser entre 1 y 100");
  }

  return { page, pageSize };
}
