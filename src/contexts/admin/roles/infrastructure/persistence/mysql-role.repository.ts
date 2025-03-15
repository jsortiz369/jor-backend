import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../../domain/role';
import { RoleRepository } from '../../domain/role.repository';
import { RoleMysqlEntity } from '../typeorm/roles.mysql-entity';
import { DataFindAll, Nullable } from 'src/contexts/shared/interfaces/system.interface';
import { QueryFindAllRole, RoleInterface } from '../../domain/role.interface';
import { RoleId } from '../../domain/values-objects';

export class MysqlRoleRepository implements RoleRepository {
  constructor(
    @InjectRepository(RoleMysqlEntity)
    private readonly _roleRepository: Repository<RoleMysqlEntity>,
  ) {}

  /**
   * @description Gets the data for all roles that aren't deleted
   * @date 14-03-2025 18:24:10
   * @author Jogan ortiz Muñoz
   *
   * @abstract
   * @param {QueryFindAll} filter
   * @returns {Promise<DataFindAll<Role>>}
   */
  async findAll(filter: QueryFindAllRole): Promise<DataFindAll<Role>> {
    const { page, limit, sort, sortOrder, search } = filter;

    // get total roles
    const countRole = await this._roleRepository.createQueryBuilder('tr').select('tr._id', '_id').getCount();

    // get total filtered roles
    let countFilteredRole: number | undefined = undefined;

    // get roles
    const query = this._roleRepository
      .createQueryBuilder('tr')
      .select('tr._id', '_id')
      .addSelect('tr.name', 'name')
      .addSelect('tr.description', 'description')
      .addSelect('tr.status', 'status')
      .addSelect('tr.createdAt', 'createdAt')
      .addSelect('tr.updatedAt', 'updatedAt');

    if (search != '') {
      if (search == 'active' || search == 'inactive') {
        query.andWhere('tr.status = :status', { status: search == 'active' ? '1' : '0' });
      } else {
        query.where(
          'tr.name LIKE :name OR tr.description LIKE :description OR tr.createdAt LIKE :createdAt OR tr.updatedAt LIKE :updatedAt',
          {
            name: `%${search}%`,
            description: `%${search}%`,
            createdAt: `%${search}%`,
            updatedAt: `%${search}%`,
          },
        );
      }

      countFilteredRole = await query.getCount();
    }

    const result = await query
      .orderBy('tr.createdAt', 'ASC')
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy(`tr.${sort}`, sortOrder)
      .getRawMany();

    const lastPage = Math.ceil(countRole / limit);

    return {
      data: result.map((role: RoleInterface) => Role.fromPrimitives(role)),
      meta: {
        total: countRole,
        filter: countFilteredRole,
        page,
        lastPage: lastPage == 0 ? 1 : lastPage,
      },
    };
  }

  /**
   * @description Gets a role's data by ID
   * @date 15-03-2025 12:08:24
   * @author Jogan ortiz Muñoz
   *
   * @abstract
   * @param {RoleId} _id
   * @returns {Promise<Nullable<Role>>}
   */
  async findById(_id: RoleId): Promise<Nullable<Role>> {
    const result: RoleInterface | undefined = await this._roleRepository
      .createQueryBuilder('tr')
      .select('tr._id', '_id')
      .addSelect('tr.name', 'name')
      .addSelect('tr.description', 'description')
      .addSelect('tr.status', 'status')
      .addSelect('tr.createdAt', 'createdAt')
      .addSelect('tr.updatedAt', 'updatedAt')
      .where('tr._id = :id', { id: _id._value })
      .getRawOne();

    return result ? Role.fromPrimitives(result) : null;
  }

  /**
   * @description Save a role in the database
   * @date 15-03-2025 12:21:21
   * @author Jogan ortiz Muñoz
   *
   * @abstract
   * @param {Role} role
   * @returns {Promise<void>}
   */
  async save(role: Role): Promise<void> {
    await this._roleRepository
      .createQueryBuilder()
      .insert()
      .values({
        _id: role._id._value,
        name: role.name._value,
        description: role.description?._value ?? null,
      })
      .execute();
  }
}
