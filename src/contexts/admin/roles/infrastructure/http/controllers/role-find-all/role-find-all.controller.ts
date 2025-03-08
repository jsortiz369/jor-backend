import { Controller, Get, Query } from '@nestjs/common';
import { FindAllRoleService } from 'src/contexts/admin/roles/application';
import { FindFilterDto } from 'src/contexts/shared/dto/find-filter.dto';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';

@Controller(PATHS_ADMIN.ROLES)
export class RoleFindAllController {
  constructor(private readonly _findAllRoleService: FindAllRoleService) {}

  @Get()
  async findAll(@Query() paramDTO: FindFilterDto) {
    return await this._findAllRoleService.execute(paramDTO);
  }
}
