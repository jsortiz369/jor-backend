import { Type } from 'class-transformer';
import { IsOptional, IsPositive, IsString, Max, Min } from 'class-validator';

export class FindFilterDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @Max(100)
  @Min(5)
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit: number = 10;

  @IsString()
  @IsOptional()
  @Type(() => String)
  search: string = '';
}
