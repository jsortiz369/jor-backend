import { ModuleMysqlEntity } from '../infrastructure/typeorm/module.mysql-entity';
import * as valueObjects from './values-objects';

export type ModuleInterface = Pick<ModuleMysqlEntity, '_id' | 'name' | 'numberOrder' | 'icon' | 'url'>;

export type ModuleValueObject = {
  _id: valueObjects.ModuleId;
  name: valueObjects.ModuleName;
  numberOrder: valueObjects.ModuleNumberOrder;
  icon: valueObjects.ModuleIcon;
  url?: valueObjects.ModuleUrl;
};
