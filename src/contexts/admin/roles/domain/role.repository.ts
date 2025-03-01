import { Role } from './role';

export abstract class RoleRepository {
  abstract findAll(): Promise<Role[]>;
}
