import { BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntityTypeorm extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;
}
