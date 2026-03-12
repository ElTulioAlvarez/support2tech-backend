import type { PaginatedResult } from "../../../domain/pagination/Pagination.js";
export declare function ok<T>(data: T): {
    ok: boolean;
    data: T;
};
export declare function paginated<T>(data: PaginatedResult<T>): {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    ok: boolean;
};
//# sourceMappingURL=response.d.ts.map