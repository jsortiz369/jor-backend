import { IdUuid } from 'src/contexts/shared/interfaces/system.interface';
import { RoleRepository } from '../../domain/role.repository';
import { RoleId } from '../../domain/values-objects';
import { RoleNotFoundException } from '../../domain/exceptions';

export class RoleFindByIdUseCase {
  constructor(private readonly _roleRepository: RoleRepository) {}

  async execute(id: IdUuid) {
    const role = await this._roleRepository.findById(new RoleId(id));
    if (!role) throw new RoleNotFoundException();
    return role.toPrimitives();
  }
}
