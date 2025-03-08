import { validate } from 'src/shared/global/uui';
import { InvalidUuidException } from '../exceptions';

export abstract class UuidValueObject {
  readonly _value: string;

  constructor(value: string) {
    if (!validate(value)) throw new InvalidUuidException();
    this._value = value;
  }
}
