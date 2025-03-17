import { validate as uuidv4Validate, v4 as uuidv4Generator } from 'uuid';
import { UuidGlobal } from './types';

export const uuidGlobal: UuidGlobal = {
  generateUuid: () => uuidv4Generator(),
  validateUuid: (uuid: string) => uuidv4Validate(uuid),
};
