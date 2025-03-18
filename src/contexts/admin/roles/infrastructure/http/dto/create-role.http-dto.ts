import { IsEnum, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';
import { StatusType } from 'src/contexts/shared/interfaces/db.interface';

export class CreateRoleHttpDto {
  @Matches(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, {
    message: 'The name must contain only letters and no spaces at the end',
  })
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  description: string;

  @IsEnum(StatusType, {
    message: 'Status must be 1 => ACTIVE or 0 => INACTIVE',
  })
  @IsOptional()
  status: StatusType;
}
