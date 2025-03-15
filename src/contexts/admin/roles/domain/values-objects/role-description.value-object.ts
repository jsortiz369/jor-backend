import { StringValueObject } from 'src/contexts/shared/value-objects';
import { RoleMysqlEntity } from '../../infrastructure/typeorm/roles.mysql-entity';

type Value = Pick<RoleMysqlEntity, 'description'>['description'];

export class RoleDescription extends StringValueObject<Value> {
  constructor(value: Value) {
    super(value);

    this.lengthString(0, 5000, 'Description must be between 0 and 5000 characters');
  }
}
