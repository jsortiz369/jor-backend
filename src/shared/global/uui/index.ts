import { validate as uuidv4Validate, v4 as uuidv4Generator } from 'uuid';

export const generate = () => uuidv4Generator();
export const validate = (uuid: string) => uuidv4Validate(uuid);
