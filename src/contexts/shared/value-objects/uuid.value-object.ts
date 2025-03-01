import { BadRequestException } from '@nestjs/common';
import { validate } from 'src/shared/global/uui';

export class UuidNotValidException extends BadRequestException {
  constructor() {
    super('Uuid not valid');
  }
}

export abstract class Uuid {
  readonly _value: string;

  constructor(value: string) {
    if (!validate(value)) throw new UuidNotValidException();

    this._value = value;
  }
}
