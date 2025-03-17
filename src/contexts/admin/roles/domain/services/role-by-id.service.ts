import { IdUuid } from 'src/contexts/shared/interfaces/system.interface';
import { RoleRepository } from '../role.repository';
import { RoleId } from '../values-objects';
import { RoleNotFoundException } from '../exceptions';
import { Role } from '../role';

export class RoleByIdService {
  constructor(private readonly _roleRepository: RoleRepository) {}

  async execute(id: IdUuid): Promise<Role> {
    const role = await this._roleRepository.findById(new RoleId(id));
    if (!role) throw new RoleNotFoundException();
    return role;
  }
}
