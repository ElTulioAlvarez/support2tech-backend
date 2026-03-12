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

export function buildPaginatedResult<T>(params: {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}): PaginatedResult<T> {
  const totalPages = params.total === 0 ? 0 : Math.ceil(params.total / params.pageSize);
  return {
    items: params.items,
    total: params.total,
    page: params.page,
    pageSize: params.pageSize,
    totalPages,
  };
}
