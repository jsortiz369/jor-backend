import { Module } from '@nestjs/common';
import { ModuleFindAllController } from './infrastructure/http/controllers/module-find-all/module-find-all.controller';

@Module({
  controllers: [ModuleFindAllController],
})
export class ModulesModule {}
