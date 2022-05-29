import { BaseEntity } from 'src/entities/base.entities';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'mobile_versions' })
export class MobileVersionEntity extends BaseEntity {
  @Column()
  number: string;

  @Column()
  detail: string;

  @Column()
  published_at: Date;

  @Column()
  link: string;

  @Column()
  is_maintenance: boolean;

  @Column()
  maintenance_title: string;

  @Column()
  maintenance_description: string;

  @Column()
  member_whitelist: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
