import { Body, Controller, Param, Patch } from '@nestjs/common';
import { RoleUpdateUseCase } from 'src/contexts/admin/roles/application';
import { UuidDto } from 'src/contexts/shared/dto/uuid.dto';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';
import { UpdateRoleHttpDto } from '../../dto/update-role.http-dto';

@Controller(PATHS_ADMIN.ROLES)
export class RoleUpdateController {
  constructor(private readonly _roleUpdateUseCase: RoleUpdateUseCase) {}

  @Patch(':id')
  async run(@Param() paramDTO: UuidDto, @Body() bodyDTO: UpdateRoleHttpDto) {
    return await this._roleUpdateUseCase.execute(paramDTO.id, bodyDTO);
  }
}
