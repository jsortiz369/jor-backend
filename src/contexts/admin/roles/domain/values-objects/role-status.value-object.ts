import { StatusType } from 'src/contexts/shared/interfaces/db.interface';

export class RoleStatus {
  readonly _value: StatusType;
  constructor(value: StatusType) {
    this._value = value;
  }
}
