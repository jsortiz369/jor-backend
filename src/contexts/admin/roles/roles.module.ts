import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as controllers from './infrastructure/http/controllers';
import * as application from './application';
import { RoleRepository } from './domain/role.repository';
import { MysqlRoleRepository } from './infrastructure/persistence/mysql-role.repository';
import { RoleMysqlEntity } from './infrastructure/typeorm/roles.mysql-entity';
import { UuidGlobal, uuidGlobal } from 'src/shared/global/uui';

@Module({
  imports: [TypeOrmModule.forFeature([RoleMysqlEntity])],
  controllers: [
    controllers.RoleFindAllController,
    controllers.RoleFindByIdController,
    controllers.RoleCreateController,
  ],
  providers: [
    {
      provide: RoleRepository,
      useClass: MysqlRoleRepository,
    },
    {
      provide: UuidGlobal,
      useValue: uuidGlobal,
    },
    {
      provide: application.RoleFindAllUseCase,
      useFactory: (roleRepository: RoleRepository) => {
        return new application.RoleFindAllUseCase(roleRepository);
      },
      inject: [RoleRepository],
    },
    {
      provide: application.RoleFindByIdUseCase,
      useFactory: (roleRepository: RoleRepository) => {
        return new application.RoleFindByIdUseCase(roleRepository);
      },
      inject: [RoleRepository],
    },
    {
      provide: application.RoleCreateUseCase,
      useFactory: (roleRepository: RoleRepository, uuidGlobal: UuidGlobal) => {
        return new application.RoleCreateUseCase(roleRepository, uuidGlobal);
      },
      inject: [RoleRepository, UuidGlobal],
    },
  ],
})
export class RolesModule {}
