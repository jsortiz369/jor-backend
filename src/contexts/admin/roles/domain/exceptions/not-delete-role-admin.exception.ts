import { BadRequestException } from '@nestjs/common';

export class NotDeleteRoleAdminException extends BadRequestException {
  constructor() {
    super('The admin role cannot be deleted');
  }
}
