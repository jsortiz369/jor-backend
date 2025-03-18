import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceMysql } from './shared/global/typeorm';
import { ContextsModule } from './contexts/contexts.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceMysql), ContextsModule],
  providers: [Logger],
})
export class AppModule {}
