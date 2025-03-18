import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntityTypeorm } from '../../../../../shared/global/typeorm/base-entity.typeorm';

@Entity('tb_modules')
export class ModuleMysqlEntity extends BaseEntityTypeorm {
  @Column('varchar', {
    length: 100,
  })
  name: string;

  @Column('int', {
    name: 'number_order',
    select: false,
  })
  numberOrder: number;

  @Column('text')
  icon: string;

  @Column('varchar', {
    length: 1500,
    nullable: true,
  })
  url?: string | null;

  @ManyToOne(() => ModuleMysqlEntity, (_module) => _module.patherOf, {
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({
    name: 'module_id_pather',
    foreignKeyConstraintName: 'FK_module_id_pather',
  })
  pather?: ModuleMysqlEntity | null;

  // relation entities
  @OneToMany(() => ModuleMysqlEntity, (_module) => _module.pather)
  patherOf: ModuleMysqlEntity[];
}
