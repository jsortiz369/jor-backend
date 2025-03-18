import { StringValueObject } from 'src/contexts/shared/value-objects';
import { ModuleMysqlEntity } from '../../infrastructure/typeorm/module.mysql-entity';

type Value = Pick<ModuleMysqlEntity, 'url'>['url'];
export class ModuleUrl extends StringValueObject<Value> {
  constructor(value: Value) {
    super(value);
  }
}
