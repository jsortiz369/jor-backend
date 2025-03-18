import { Controller, Get, Param } from '@nestjs/common';
import { RoleFindByIdUseCase } from 'src/contexts/admin/roles/application';
import { UuidDto } from 'src/contexts/shared/dto/uuid.dto';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';

@Controller(PATHS_ADMIN.ROLES)
export class RoleFindByIdController {
  constructor(private readonly _roleFindByIdUseCase: RoleFindByIdUseCase) {}

  @Get(':id')
  async run(@Param() paramDTO: UuidDto) {
    return await this._roleFindByIdUseCase.execute(paramDTO.id);
  }
}
