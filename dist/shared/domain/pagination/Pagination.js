export function buildPaginatedResult(params) {
    const totalPages = params.total === 0 ? 0 : Math.ceil(params.total / params.pageSize);
    return {
        items: params.items,
        total: params.total,
        page: params.page,
        pageSize: params.pageSize,
        totalPages,
    };
}
//# sourceMappingURL=Pagination.js.map