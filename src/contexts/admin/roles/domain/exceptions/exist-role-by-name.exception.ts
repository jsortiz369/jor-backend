import { BadRequestException } from '@nestjs/common';

export class ExistRoleByNameException extends BadRequestException {
  constructor() {
    super('The role name already exists');
  }
}
