import { FindFilterDto } from 'src/contexts/shared/dto/find-filter.dto';
import { RoleMysqlEntity } from '../../typeorm/roles.mysql-entity';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

type Sort = keyof Pick<RoleMysqlEntity, 'name' | 'status' | 'createdAt' | 'updatedAt'>;

export class FindAllRoleHttpDto extends FindFilterDto {
  @IsOptional()
  @IsString({ message: 'Sort must be a string' })
  @IsIn(['name', 'status', 'createdAt', 'updatedAt'], { message: 'Sort must be name, status, createdAt or updatedAt' })
  sort: Sort = 'createdAt';

  @IsOptional()
  @IsString({ message: 'Order must be a string' })
  @Transform(({ value }: { value: string }) => value?.toUpperCase(), { toClassOnly: true })
  sortOrder: 'ASC' | 'DESC' = 'ASC';
}
