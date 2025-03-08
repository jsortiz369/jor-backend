import { StringValueObject } from 'src/contexts/shared/value-objects';

export class RoleDescription extends StringValueObject {
  constructor(value?: string) {
    super(value);
    this.lengthString(0, 5000, 'Description must be between 0 and 5000 characters');
  }
}
