import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleHttpDto } from './create-role.http-dto';

export class UpdateRoleHttpDto extends PartialType(CreateRoleHttpDto) {}
