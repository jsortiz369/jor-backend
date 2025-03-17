import { RoleDataSave } from '../../domain/role.interface';
import { RoleRepository } from '../../domain/role.repository';
import { Role } from '../../domain/role';
import * as valueObjects from '../../domain/values-objects';
import { UuidGlobal } from 'src/shared/global/uuid/types';
import { ExistRoleByNameService } from '../../domain/services';

export class RoleCreateUseCase {
  constructor(
    private readonly _uuid: UuidGlobal,
    private readonly _roleRepository: RoleRepository,
    private readonly _existRoleByName: ExistRoleByNameService,
  ) {}

  async execute(role: RoleDataSave) {
    // check if role already exists
    await this._existRoleByName.execute(role.name);

    // create role
    const roleCreate = Role.create({
      _id: new valueObjects.RoleId(this._uuid.generateUuid()),
      name: new valueObjects.RoleName(role.name),
      description: new valueObjects.RoleDescription(role.description),
      status: new valueObjects.RoleStatus(role.status),
    });

    // save role
    await this._roleRepository.save(roleCreate);

    // get role created
    const result = await this._roleRepository.findById(roleCreate._id);
    return result?.toPrimitives();
  }
}
