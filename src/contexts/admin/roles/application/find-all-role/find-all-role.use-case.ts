import { QueryFindAllRole } from '../../domain/role.interface';
import { RoleRepository } from '../../domain/role.repository';

export class FindAllRoleUseCase {
  constructor(private _roleRepository: RoleRepository) {}

  async execute(query: QueryFindAllRole) {
    const { data, meta } = await this._roleRepository.findAll(query);

    return { meta, data: data.map((role) => role.toPrimitives()) };
  }
}
