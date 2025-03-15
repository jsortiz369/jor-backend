import { Controller, Get, Query } from '@nestjs/common';
import { FindAllRoleUseCase } from 'src/contexts/admin/roles/application';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';
import { FindAllRoleHttpDto } from '../../dto/find-all-role.http-dto';

@Controller(PATHS_ADMIN.ROLES)
export class RoleFindAllController {
  constructor(private readonly _findAllRoleUseCase: FindAllRoleUseCase) {}

  @Get()
  async findAll(@Query() paramDTO: FindAllRoleHttpDto) {
    console.log(paramDTO);
    return await this._findAllRoleUseCase.execute(paramDTO);
  }
}
