import { PageNotFoundException } from '../../domain/exceptions';
import { QueryFindAllRole } from '../../domain/role.interface';
import { RoleRepository } from '../../domain/role.repository';

export class RoleFindAllUseCase {
  constructor(private _roleRepository: RoleRepository) {}

  async execute(query: QueryFindAllRole) {
    const { data, meta } = await this._roleRepository.findAll(query);
    if (query.page != 1 && meta.lastPage < meta.page) throw new PageNotFoundException();
    return { meta, data: data.map((role) => role.toPrimitives()) };
  }
}
