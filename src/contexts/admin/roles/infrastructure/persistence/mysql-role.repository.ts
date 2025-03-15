import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../../domain/role';
import { RoleRepository } from '../../domain/role.repository';
import { RoleMysqlEntity } from '../typeorm/roles.mysql-entity';
import { DataFindAll } from 'src/contexts/shared/interfaces/system.interface';
import { QueryFindAllRole } from '../../domain/role.interface';

export class MysqlRoleRepository implements RoleRepository {
  constructor(
    @InjectRepository(RoleMysqlEntity)
    private readonly _roleRepository: Repository<RoleMysqlEntity>,
  ) {}

  async findAll(filter: QueryFindAllRole): Promise<DataFindAll<Role>> {
    const { page, limit, sort, sortOrder, search } = filter;

    // get total roles
    const countRole = await this._roleRepository.createQueryBuilder('tr').select('tr._id', '_id').getCount();

    // get roles
    const result = await this._roleRepository
      .createQueryBuilder('tr')
      .select('tr._id', '_id')
      .addSelect('tr.name', 'name')
      .addSelect('tr.description', 'description')
      .addSelect('tr.status', 'status')
      .addSelect('tr.createdAt', 'createdAt')
      .addSelect('tr.updatedAt', 'updatedAt')
      .where(
        'tr.name LIKE :name OR tr.description LIKE :description OR tr.status LIKE :status OR tr.createdAt LIKE :createdAt',
        {
          name: `%${filter.search}%`,
          description: `%${filter.search}%`,
          status: `%${filter.search == 'active' ? '1' : '0'}%`,
          createdAt: `%${filter.search}%`,
        },
      )
      .orderBy('tr.createdAt', 'ASC')
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy(`tr.${sort}`, sortOrder)
      .getRawMany();

    console.log(result);

    const lastPage = Math.ceil(countRole / limit);

    return {
      data: result.map((role) => Role.fromPrimitives(role)),
      meta: {
        total: countRole,
        page,
        lastPage: lastPage == 0 ? 1 : lastPage,
      },
    };
  }
}
