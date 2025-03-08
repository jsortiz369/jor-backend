import { Body, Controller, Post } from '@nestjs/common';
import { PATHS_ADMIN } from 'src/shared/global/routes-paths';
import { CreateRoleHttpDto } from '../../dto/create-role.http-dto';

@Controller(PATHS_ADMIN.ROLES)
export class RoleCreateController {
  @Post()
  async create(@Body() bodyDTO: CreateRoleHttpDto) {
    console.log(bodyDTO);
    return await 'llego a crear';
  }
}
