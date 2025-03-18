import { Body, Controller, Post } from '@nestjs/common';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';
import { CreateRoleHttpDto } from '../../dto/create-role.http-dto';
import { RoleCreateUseCase } from 'src/contexts/admin/roles/application';

@Controller(PATHS_ADMIN.ROLES)
export class RoleCreateController {
  constructor(private _roleCreateUseCase: RoleCreateUseCase) {}

  @Post()
  async create(@Body() bodyDTO: CreateRoleHttpDto) {
    return await this._roleCreateUseCase.execute(bodyDTO);
  }
}
