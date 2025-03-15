import { StringValueObject } from 'src/contexts/shared/value-objects';
import { RoleMysqlEntity } from '../../infrastructure/typeorm/roles.mysql-entity';

const REGEXP_NAME = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
type Value = Pick<RoleMysqlEntity, 'name'>['name'];

export class RoleName extends StringValueObject<Value> {
  constructor(value: Value) {
    super(value);

    this.ensureIsDefined('Value must be defined');
    this.ensureNotEmpty('Name must be not empty');
    this.ensureIsFulfillregExp(REGEXP_NAME, 'The name must contain only letters and no spaces at the end');
    this.lengthString(3, 50, 'Name must be between 3 and 50 characters');
  }
}
