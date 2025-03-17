import { BadRequestException } from '@nestjs/common';

export class NotUpdateAdminException extends BadRequestException {
  constructor() {
    super('The admin role cannot be updated');
  }
}
