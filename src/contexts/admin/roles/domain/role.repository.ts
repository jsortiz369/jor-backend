import { QueryData } from 'src/contexts/shared/interfaces/system.interface';
import { Role } from './role';

export abstract class RoleRepository {
  abstract findAll(): Promise<QueryData<Role>>;
}
