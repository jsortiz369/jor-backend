import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { UuidDto } from 'src/contexts/shared/dto/uuid.dto';

export class ExistRoleByDto extends PartialType(UuidDto) {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  value: string;
}
