import { FindAllRoleHttpDto } from '../infrastructure/http/dto/find-all-role.http-dto';
import { RoleMysqlEntity } from '../infrastructure/typeorm/roles.mysql-entity';
import * as valueObjects from './values-objects';

export type QueryFindAllRole = Pick<FindAllRoleHttpDto, 'page' | 'limit' | 'sort' | 'sortOrder' | 'search'>;

export type RoleInterface = Pick<
  RoleMysqlEntity,
  '_id' | 'name' | 'description' | 'status' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;

export type RoleDataSave = Omit<RoleInterface, '_id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export type RoleValueObject = {
  _id: valueObjects.RoleId;
  name: valueObjects.RoleName;
  description: valueObjects.RoleDescription;
  status: valueObjects.RoleStatus;
  createdAt?: valueObjects.RoleCreatedAt;
  updatedAt?: valueObjects.RoleUpdatedAt;
  deletedAt?: valueObjects.RoleDeletedAt;
};
