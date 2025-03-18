import { BadRequestException } from '@nestjs/common';

export class InvalidUuidException extends BadRequestException {
  constructor() {
    super('Uuid not valid');
  }
}
