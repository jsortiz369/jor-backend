import { ModuleMysqlEntity } from '../../infrastructure/typeorm/module.mysql-entity';

type Value = Pick<ModuleMysqlEntity, 'numberOrder'>['numberOrder'];
export class ModuleNumberOrder {
  constructor(readonly _value: Value) {}
}
