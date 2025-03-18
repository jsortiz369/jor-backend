import { RoleMysqlEntity } from '../../infrastructure/typeorm/roles.mysql-entity';

type Value = Pick<RoleMysqlEntity, 'deletedAt'>['deletedAt'];

export class RoleDeletedAt {
  constructor(readonly _value: Value) {}
}
