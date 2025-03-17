import { IdUuid } from 'src/contexts/shared/interfaces/system.interface';
import { RoleRepository } from '../../domain/role.repository';
import { ExistRoleByNameService, RoleByIdService } from '../../domain/services';
import { RoleDataSave } from '../../domain/role.interface';
import { NotEmptyDataRoleException, NotUpdateAdminException } from '../../domain/exceptions';
import * as valueObjects from '../../domain/values-objects';
import { Role } from '../../domain/role';

export class RoleUpdateUseCase {
  constructor(
    private readonly _roleRepository: RoleRepository,
    private readonly _roleByIdService: RoleByIdService,
    private readonly _existRoleByName: ExistRoleByNameService,
  ) {}

  async execute(id: IdUuid, role: Partial<RoleDataSave>) {
    // check if role admin
    if (id == '95d6f671-39d0-47c4-a757-5303601ede53') throw new NotUpdateAdminException();

    // check if data is empty
    if (Object.keys(role).length === 0) throw new NotEmptyDataRoleException();

    const dataRole = await this._roleByIdService.execute(id);

    // check if role already exists
    if (role.name) await this._existRoleByName.execute(role.name, id);

    // prepare role
    const roleUpdate = Role.create({
      _id: new valueObjects.RoleId(id),
      name: role.name ? new valueObjects.RoleName(role.name) : dataRole.name,
      description: role.description ? new valueObjects.RoleDescription(role.description) : dataRole.description,
      status: role.status ? new valueObjects.RoleStatus(role.status) : dataRole.status,
    });

    // update role
    await this._roleRepository.update(roleUpdate);

    // get role updated
    const result = await this._roleRepository.findById(dataRole._id);
    return result?.toPrimitives();
  }
}
