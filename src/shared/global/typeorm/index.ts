import { DataSource, DataSourceOptions } from 'typeorm';
import configEnv from '../env';

export const dataSourceMysql: DataSourceOptions = {
  type: 'mysql',
  name: '',
  host: configEnv('DB_HOST'),
  port: configEnv('DB_PORT'),
  username: configEnv('DB_USER'),
  password: configEnv('DB_PASSWORD'),
  database: configEnv('DB_NAME'),
  entities: [__dirname + '/../../../contexts/**/**/**/infrastructure/typeorm/*.mysql-entity{.ts,.js}'],
  migrations: [__dirname + '/../../../../migrations/*{.ts,.js}'],
  synchronize: false,
  logging: false,
  migrationsTableName: 'tb_01_migrations',
  migrationsRun: true,
  timezone: 'Z',
};

const dataSource = new DataSource(dataSourceMysql);
export default dataSource;
