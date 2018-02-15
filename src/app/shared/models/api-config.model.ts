export class AppQueryParams {
  limit?: number;
  offset?: number;
  ordering?: string;
  search?: string;
  count?: number;
}

export interface APIResponse<T> {
  filters: AppQueryParams;
  results: T[];
}
