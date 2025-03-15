import { DataFindAll, Nullable } from 'src/contexts/shared/interfaces/system.interface';
import { Role } from './role';
import { QueryFindAllRole } from './role.interface';
import { RoleId } from './values-objects';

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

  /**
   * @description Gets a role's data by ID
   * @date 15-03-2025 12:08:24
   * @author Jogan ortiz Muñoz
   *
   * @abstract
   * @param {RoleId} _id
   * @returns {Promise<Nullable<Role>>}
   */
  abstract findById(_id: RoleId): Promise<Nullable<Role>>;

  /**
   * @description Save a role in the database
   * @date 15-03-2025 12:21:21
   * @author Jogan ortiz Muñoz
   *
   * @abstract
   * @param {Role} role
   * @returns {Promise<void>}
   */
  abstract save(role: Role): Promise<void>;
}
