import { RoleMysqlEntity } from '../../infrastructure/typeorm/roles.mysql-entity';

type Value = Pick<RoleMysqlEntity, 'status'>['status'];
export class RoleStatus {
  constructor(readonly _value: Value) {}
}
