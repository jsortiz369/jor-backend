import { RoleMysqlEntity } from '../../infrastructure/typeorm/roles.mysql-entity';

type Value = Pick<RoleMysqlEntity, 'createdAt'>['createdAt'];

export class RoleCreatedAt {
  constructor(readonly _value: Value) {}
}
