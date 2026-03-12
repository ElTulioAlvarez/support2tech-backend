export interface PaginationParams {
    page: number;
    pageSize: number;
}
export interface PaginatedResult<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}
export declare function buildPaginatedResult<T>(params: {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
}): PaginatedResult<T>;
//# sourceMappingURL=Pagination.d.ts.map