import { BadGatewayException } from '@nestjs/common';

export class NotEmptyDataRoleException extends BadGatewayException {
  constructor() {
    super('The role data cannot be empty');
  }
}
