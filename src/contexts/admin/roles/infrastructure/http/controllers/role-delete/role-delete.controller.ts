import { Controller, Delete, Param } from '@nestjs/common';
import { RoleDeleteUseCase } from 'src/contexts/admin/roles/application';
import { UuidDto } from 'src/contexts/shared/dto/uuid.dto';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';

@Controller(PATHS_ADMIN.ROLES)
export class RoleDeleteController {
  constructor(private readonly _roleDeleteUseCase: RoleDeleteUseCase) {}

  @Delete(':id')
  async run(@Param() paramDTO: UuidDto) {
    return await this._roleDeleteUseCase.execute(paramDTO.id);
  }
}
