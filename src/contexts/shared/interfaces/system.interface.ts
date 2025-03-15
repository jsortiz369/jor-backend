import { FindFilterDto } from '../dto/find-filter.dto';

export type QueryFindAll = Pick<FindFilterDto, 'page' | 'limit'>;

type MetaQuery = Pick<QueryFindAll, 'page'> & {
  total: number;
  lastPage: number;
};

export type DataFindAll<T> = {
  data: T[];
  meta: MetaQuery;
};
