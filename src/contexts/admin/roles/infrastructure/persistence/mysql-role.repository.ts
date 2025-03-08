import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../../domain/role';
import { RoleRepository } from '../../domain/role.repository';
import { RoleMysqlEntity } from '../typeorm/roles.mysql-entity';
import { QueryData } from 'src/contexts/shared/interfaces/system.interface';

export class MysqlRoleRepository implements RoleRepository {
  constructor(
    @InjectRepository(RoleMysqlEntity)
    private readonly _roleRepository: Repository<RoleMysqlEntity>,
  ) {}

  async findAll(): Promise<QueryData<Role>> {
    // get roles
    const result = await this._roleRepository
      .createQueryBuilder('tr')
      .select('tr._id', '_id')
      .addSelect('tr.name', 'name')
      .addSelect('tr.description', 'description')
      .addSelect('tr.status', 'status')
      .addSelect('tr.createdAt', 'createdAt')
      .addSelect('tr.updatedAt', 'updatedAt')
      .orderBy('tr.createdAt', 'ASC')
      .getRawMany();

    console.log(result);

    return { data: [], meta: { total: 0, lastPage: 0, page: 0 } };
  }
}
