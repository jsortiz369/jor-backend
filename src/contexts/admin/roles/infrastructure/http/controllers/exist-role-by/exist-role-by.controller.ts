import { Controller, Get, Query } from '@nestjs/common';
import { ExistRoleByNameUseCase } from 'src/contexts/admin/roles/application';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';
import { ExistRoleByDto } from '../../dto/exist-role-by.dto';

@Controller(PATHS_ADMIN.ROLES)
export class ExistRoleByController {
  constructor(private readonly _existRoleByName: ExistRoleByNameUseCase) {}

  @Get('/exist/name')
  async run(@Query() queryDTO: ExistRoleByDto) {
    return await this._existRoleByName.execute(queryDTO);
  }
}
