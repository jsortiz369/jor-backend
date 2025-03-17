import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as controllers from './infrastructure/http/controllers';
import * as application from './application';
import * as services from './domain/services';
import { RoleRepository } from './domain/role.repository';
import { MysqlRoleRepository } from './infrastructure/persistence/mysql-role.repository';
import { RoleMysqlEntity } from './infrastructure/typeorm/roles.mysql-entity';
import { uuidGlobal } from 'src/shared/global/uuid';
import { UuidGlobal } from 'src/shared/global/uuid/types';

@Module({
  imports: [TypeOrmModule.forFeature([RoleMysqlEntity])],
  controllers: [
    controllers.RoleFindAllController,
    controllers.RoleFindByIdController,
    controllers.RoleCreateController,
    controllers.RoleUpdateController,
    controllers.RoleDeleteController,
    controllers.ExistRoleByController,
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
      provide: services.ExistRoleByNameService,
      useFactory: (roleRepository: RoleRepository) => {
        return new services.ExistRoleByNameService(roleRepository);
      },
      inject: [RoleRepository],
    },
    {
      provide: services.RoleByIdService,
      useFactory: (roleRepository: RoleRepository) => {
        return new services.RoleByIdService(roleRepository);
      },
      inject: [RoleRepository],
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
      useFactory: (
        roleRepository: RoleRepository,
        uuidGlobal: UuidGlobal,
        existRoleByName: services.ExistRoleByNameService,
      ) => {
        return new application.RoleCreateUseCase(uuidGlobal, roleRepository, existRoleByName);
      },
      inject: [RoleRepository, UuidGlobal, services.ExistRoleByNameService],
    },
    {
      provide: application.RoleUpdateUseCase,
      useFactory: (
        roleRepository: RoleRepository,
        existRoleByName: services.ExistRoleByNameService,
        roleByIdService: services.RoleByIdService,
      ) => {
        return new application.RoleUpdateUseCase(roleRepository, roleByIdService, existRoleByName);
      },
      inject: [RoleRepository, services.ExistRoleByNameService, services.RoleByIdService],
    },
    {
      provide: application.RoleDeleteUseCase,
      useFactory: (roleRepository: RoleRepository, roleByIdService: services.RoleByIdService) => {
        return new application.RoleDeleteUseCase(roleRepository, roleByIdService);
      },
      inject: [RoleRepository, services.RoleByIdService],
    },
    {
      provide: application.ExistRoleByNameUseCase,
      useFactory: (roleRepository: RoleRepository) => {
        return new application.ExistRoleByNameUseCase(roleRepository);
      },
      inject: [RoleRepository],
    },
  ],
})
export class RolesModule {}
