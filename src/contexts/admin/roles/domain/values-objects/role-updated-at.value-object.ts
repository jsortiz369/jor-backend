import { RoleMysqlEntity } from '../../infrastructure/typeorm/roles.mysql-entity';

type Value = Pick<RoleMysqlEntity, 'updatedAt'>['updatedAt'];
export class RoleUpdatedAt {
  constructor(readonly _value: Value) {}
}
