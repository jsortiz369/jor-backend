import { DataFindAll } from 'src/contexts/shared/interfaces/system.interface';
import { Role } from './role';
import { QueryFindAllRole } from './role.interface';

export abstract class RoleRepository {
  /**
   * @description Gets the data for all roles that aren't deleted
   * @date 14-03-2025 18:24:10
   * @author Jogan ortiz Muñoz
   *
   * @abstract
   * @param {QueryFindAll} filter
   * @returns {Promise<DataFindAll<Role>>}
   */
  abstract findAll(filter: QueryFindAllRole): Promise<DataFindAll<Role>>;
}
