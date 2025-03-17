import { RoleRepository } from '../../domain/role.repository';
import { RoleByIdService } from '../../domain/services';
import { IdUuid } from 'src/contexts/shared/interfaces/system.interface';
import { NotDeleteRoleAdminException } from '../../domain/exceptions';

export class RoleDeleteUseCase {
  constructor(
    private readonly _roleRepository: RoleRepository,
    private readonly _roleByIdService: RoleByIdService,
  ) {}

  async execute(id: IdUuid) {
    // check if role exists
    const role = await this._roleByIdService.execute(id);

    // check if role admin
    if (id == '95d6f671-39d0-47c4-a757-5303601ede53') throw new NotDeleteRoleAdminException();

    // delete role
    await this._roleRepository.delete(role._id);

    return role.toPrimitives();
  }
}
