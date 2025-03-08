import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as controllers from './infrastructure/http/controllers';
import * as application from './application';
import { RoleRepository } from './domain/role.repository';
import { MysqlRoleRepository } from './infrastructure/persistence/mysql-role.repository';
import { RoleMysqlEntity } from './infrastructure/typeorm/roles.mysql-entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleMysqlEntity])],
  controllers: [controllers.RoleCreateController, controllers.RoleFindAllController],
  providers: [
    application.CreateRoleService,
    application.FindAllRoleService,
    MysqlRoleRepository,
    {
      provide: RoleRepository,
      useExisting: MysqlRoleRepository,
    },
  ],
})
export class RolesModule {}
