import { RoleInterface, RoleValueObject } from './role.interface';
import * as valueObjects from './values-objects';

export class Role {
  readonly _id: valueObjects.RoleId;
  readonly name: valueObjects.RoleName;
  readonly description?: valueObjects.RoleDescription;
  readonly status: valueObjects.RoleStatus;
  readonly createdAt?: valueObjects.RoleCreatedAt;
  readonly updatedAt?: valueObjects.RoleUpdatedAt;
  readonly deletedAt?: valueObjects.RoleDeletedAt;

  protected constructor(data: RoleValueObject) {
    this._id = data._id;
    this.name = data.name;
    this.description = data.description;
    this.status = data.status;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.deletedAt = data.deletedAt;
  }

  static fromPrimitives(toPrimitive: RoleInterface): Role {
    const role = {} as RoleValueObject;
    role._id = new valueObjects.RoleId(toPrimitive._id);
    if (toPrimitive.name) role.name = new valueObjects.RoleName(toPrimitive.name);
    if (toPrimitive.description) role.description = new valueObjects.RoleDescription(toPrimitive.description);
    if (toPrimitive.status) role.status = new valueObjects.RoleStatus(toPrimitive.status);
    if (toPrimitive.createdAt) role.createdAt = new valueObjects.RoleCreatedAt(toPrimitive.createdAt);
    if (toPrimitive.updatedAt) role.updatedAt = new valueObjects.RoleUpdatedAt(toPrimitive.updatedAt);
    if (toPrimitive.deletedAt) role.deletedAt = new valueObjects.RoleDeletedAt(toPrimitive.deletedAt);
    return new Role(role);
  }

  toPrimitives(): RoleInterface {
    return {
      _id: this._id._value,
      name: this.name?._value,
      description: this.description?._value,
      status: this.status?._value,
      createdAt: this.createdAt?._value,
      updatedAt: this.updatedAt?._value,
      deletedAt: this.deletedAt?._value,
    };
  }
}
