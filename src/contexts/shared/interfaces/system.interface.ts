export type QueryFilters = {
  page: number;
  limit: number;
};

type MetaQuery = Pick<QueryFilters, 'page'> & {
  total: number;
  lastPage: number;
};

export type QueryData<T> = {
  data: T[];
  meta: MetaQuery;
};
