import { StringValueObject } from 'src/contexts/shared/value-objects';
import { ModuleMysqlEntity } from '../../infrastructure/typeorm/module.mysql-entity';

type Value = Pick<ModuleMysqlEntity, 'name'>['name'];
export class ModuleName extends StringValueObject<Value> {
  constructor(value: Value) {
    super(value);

    this.ensureIsDefined('Value must be defined');
    this.ensureNotEmpty('Name must be not empty');
    this.lengthString(3, 100, 'Name must be between 3 and 100 characters');
  }
}
