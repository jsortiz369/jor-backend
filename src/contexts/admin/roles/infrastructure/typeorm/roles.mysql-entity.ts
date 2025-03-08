import { Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { BaseEntityTypeorm } from '../../../../../shared/global/typeorm/base-entity.typeorm';
import { StatusType } from '../../../../shared/interfaces/db.interface';

@Entity('tb_roles')
export class RoleMysqlEntity extends BaseEntityTypeorm {
  @Column('varchar', {
    length: 50,
  })
  name: string;

  @Column('longtext', {
    nullable: true,
  })
  description: string;

  @Column('enum', {
    enum: StatusType,
    default: StatusType.ACTIVE,
  })
  status: StatusType;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'NOW(6)',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    onUpdate: 'NOW(6)',
    nullable: true,
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
    select: false,
    nullable: true,
  })
  deletedAt?: Date;
}
