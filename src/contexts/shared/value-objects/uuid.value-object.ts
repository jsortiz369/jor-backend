import { uuidGlobal } from 'src/shared/global/uuid';
import { InvalidUuidException } from '../exceptions';

export abstract class UuidValueObject {
  readonly _value: string;

  constructor(value: string) {
    if (!uuidGlobal.validateUuid(value)) throw new InvalidUuidException();
    this._value = value;
  }
}
