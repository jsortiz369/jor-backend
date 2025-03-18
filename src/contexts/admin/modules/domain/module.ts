import { ModuleInterface, ModuleValueObject } from './module.interface';
import * as valueObjects from './values-objects';

export class Module {
  readonly _id: valueObjects.ModuleId;
  readonly name: valueObjects.ModuleName;
  readonly numberOrder: valueObjects.ModuleNumberOrder;
  readonly icon: valueObjects.ModuleIcon;
  readonly url?: valueObjects.ModuleUrl;

  constructor(data: ModuleValueObject) {
    this._id = data._id;
    this.name = data.name;
    this.numberOrder = data.numberOrder;
    this.icon = data.icon;
    this.url = data.url;
  }

  static create(data: ModuleValueObject): Module {
    return new Module({ ...data });
  }

  static fromPrimitives(toPrimitive: ModuleInterface): Module {
    const module = {} as ModuleValueObject;
    module._id = new valueObjects.ModuleId(toPrimitive._id);
    if (toPrimitive.name) module.name = new valueObjects.ModuleName(toPrimitive.name);
    if (toPrimitive.numberOrder) module.numberOrder = new valueObjects.ModuleNumberOrder(toPrimitive.numberOrder);
    if (toPrimitive.icon) module.icon = new valueObjects.ModuleIcon(toPrimitive.icon);
    if (toPrimitive.url) module.url = new valueObjects.ModuleUrl(toPrimitive.url);

    return new Module(module);
  }

  toPrimitives(): ModuleInterface {
    return {
      _id: this._id._value,
      name: this.name?._value,
      numberOrder: this.numberOrder?._value,
      icon: this.icon?._value,
      url: this.url?._value,
    };
  }
}
