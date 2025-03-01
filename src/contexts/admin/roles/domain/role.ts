import { RoleInterface, RoleValueObject } from './role.interface';
import * as valueObjects from './values-objects';

export class Role {
  readonly _id: valueObjects.RoleId;

  protected constructor(data: RoleValueObject) {
    this._id = data._id;
  }

  static fromPrimitives(toPrimitive: RoleInterface): Role {
    return new Role({
      _id: new valueObjects.RoleId(toPrimitive._id),
    });
  }

  toPrimitives(): RoleInterface {
    return {
      _id: this._id._value,
    };
  }
}
