import type { PaginationParams } from "../../../domain/pagination/Pagination.js";
export declare function getQueryString(value: unknown): string | undefined;
export declare function getParamString(value: unknown, fieldName?: string): string;
export declare function parseDate(value: unknown, fieldName: string): Date | undefined;
export declare function parseOptionalString(value: unknown): string | null | undefined;
export declare function parseRequiredString(value: unknown, fieldName: string): string;
export declare function parseOptionalNumber(value: unknown, fieldName: string): number | null | undefined;
export declare function parseOptionalBoolean(value: unknown, fieldName: string): boolean | undefined;
export declare function parsePagination(query: Record<string, unknown>): PaginationParams;
//# sourceMappingURL=request-parsers.d.ts.map