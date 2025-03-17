import { ExistRoleByNameException } from '../exceptions';
import { RoleRepository } from '../role.repository';
import { RoleId, RoleName } from '../values-objects';

export class ExistRoleByNameService {
  constructor(private readonly _roleRepository: RoleRepository) {}

  async execute(name: string, _id?: string): Promise<boolean> {
    const _idRole = _id ? new RoleId(_id) : undefined;
    const nameRole = new RoleName(name);
    const existRoleByName = await this._roleRepository.existRoleByName(nameRole, _idRole);
    if (existRoleByName) throw new ExistRoleByNameException();
    return false;
  }
}
