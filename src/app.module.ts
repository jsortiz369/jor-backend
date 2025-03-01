import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceMysql } from './shared/global/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceMysql)],
  providers: [Logger],
})
export class AppModule {}
