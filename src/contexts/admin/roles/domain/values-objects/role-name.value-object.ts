import { StringValueObject } from 'src/contexts/shared/value-objects';

const REGEXP_NAME = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

export class RoleName extends StringValueObject {
  constructor(value: string) {
    super(value);

    this.ensureIsDefined('Value must be defined');
    this.ensureNotEmpty('Name must be not empty');
    this.ensureIsFulfillregExp(REGEXP_NAME, 'The name must contain only letters and no spaces at the end');
    this.lengthString(3, 50, 'Name must be between 3 and 50 characters');
  }
}
