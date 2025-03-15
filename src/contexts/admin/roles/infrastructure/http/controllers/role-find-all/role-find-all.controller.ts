import { Controller, Get, Query } from '@nestjs/common';
import { RoleFindAllUseCase } from 'src/contexts/admin/roles/application';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';
import { FindAllRoleHttpDto } from '../../dto/find-all-role.http-dto';

@Controller(PATHS_ADMIN.ROLES)
export class RoleFindAllController {
  constructor(private readonly _roleFindAllUseCase: RoleFindAllUseCase) {}

  @Get()
  async findAll(@Query() paramDTO: FindAllRoleHttpDto) {
    return await this._roleFindAllUseCase.execute(paramDTO);
  }
}
