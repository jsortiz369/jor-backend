import { IdUuid } from 'src/contexts/shared/interfaces/system.interface';
import { RoleRepository } from '../../domain/role.repository';
import { RoleId, RoleName } from '../../domain/values-objects';

export class ExistRoleByNameUseCase {
  constructor(private readonly _roleRepository: RoleRepository) {}

  async execute(data: { value: string; id?: IdUuid }) {
    const _idRole = data?.id ? new RoleId(data.id) : undefined;
    const nameRole = new RoleName(data.value);

    console.log(_idRole, nameRole);
    const result = await this._roleRepository.existRoleByName(nameRole, _idRole);
    return {
      exist: result,
    };
  }
}
