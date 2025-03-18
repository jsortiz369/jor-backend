import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { ModulesModule } from './modules/modules.module';
@Module({
  imports: [RolesModule, ModulesModule],
})
export class AdminModule {}
