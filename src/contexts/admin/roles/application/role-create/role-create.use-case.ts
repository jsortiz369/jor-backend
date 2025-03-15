import { UuidGlobal } from 'src/shared/global/uui';
import { RoleDataSave } from '../../domain/role.interface';
import { RoleRepository } from '../../domain/role.repository';
import { Role } from '../../domain/role';
import * as valueObjects from '../../domain/values-objects';

export class RoleCreateUseCase {
  constructor(
    private readonly _roleRepository: RoleRepository,
    private readonly _uuid: UuidGlobal,
  ) {}

  async execute(role: RoleDataSave) {
    const roleCreate = Role.create({
      _id: new valueObjects.RoleId(this._uuid.generateUuid()),
      name: new valueObjects.RoleName(role.name),
      description: new valueObjects.RoleDescription(role.description),
      status: new valueObjects.RoleStatus(role.status),
    });

    // save role
    await this._roleRepository.save(roleCreate);

    //
    const result = await this._roleRepository.findById(roleCreate._id);
    return result?.toPrimitives();
  }
}
