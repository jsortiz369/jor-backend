import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UuidDto {
  @ApiProperty({
    required: true,
  })
  @IsUUID('4', { message: 'invalid id' })
  id: string;
}
