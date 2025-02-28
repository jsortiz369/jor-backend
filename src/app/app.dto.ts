import { IsNotEmpty, IsString } from 'class-validator';

export class AppDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  readonly message: string;
}
