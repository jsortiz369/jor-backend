import { validate as uuidv4Validate, v4 as uuidv4Generator } from 'uuid';

export abstract class UuidGlobal {
  abstract generateUuid: () => string;
  abstract validateUuid: (uuid: string) => boolean;
}

export const uuidGlobal = {
  generateUuid: () => uuidv4Generator(),
  validateUuid: (uuid: string) => uuidv4Validate(uuid),
} as UuidGlobal;
