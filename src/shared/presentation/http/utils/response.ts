import type { PaginatedResult } from "../../../domain/pagination/Pagination.js";

export function ok<T>(data: T) {
  return { ok: true, data };
}

export function paginated<T>(data: PaginatedResult<T>) {
  return { ok: true, ...data };
}
