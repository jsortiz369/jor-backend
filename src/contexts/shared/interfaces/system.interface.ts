import { FindFilterDto } from '../dto/find-filter.dto';
import { UuidDto } from '../dto/uuid.dto';

export type QueryFindAll = Pick<FindFilterDto, 'page' | 'limit'>;

type MetaQuery = Pick<QueryFindAll, 'page'> & {
  total: number;
  filter: number | undefined;
  lastPage: number;
};

export type DataFindAll<T> = {
  data: T[];
  meta: MetaQuery;
};

export type IdUuid = Pick<UuidDto, 'id'>['id'];

export type Nullable<T> = T | null;
