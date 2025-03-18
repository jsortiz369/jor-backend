import { StringValueObject } from 'src/contexts/shared/value-objects';
import { ModuleMysqlEntity } from '../../infrastructure/typeorm/module.mysql-entity';

type Value = Pick<ModuleMysqlEntity, 'icon'>['icon'];
export class ModuleIcon extends StringValueObject<Value> {
  constructor(value: Value) {
    super(value);

    this.ensureIsDefined('Value must be defined');
    this.ensureNotEmpty('Name must be not empty');
  }
}
