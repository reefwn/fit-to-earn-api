import { BaseEntity } from 'src/entities/base.entities';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'mobile_versions' })
export class MobileVersionEntity extends BaseEntity {
  @Column({ nullable: true })
  number: string;

  @Column({ nullable: true })
  detail: string;

  @Column({ type: 'timestamp', nullable: true })
  published_at: Date;

  @Column({ nullable: true })
  link: string;

  @Column({ default: false })
  is_maintenance: boolean;

  @Column({ nullable: true })
  maintenance_title: string;

  @Column({ nullable: true })
  maintenance_description: string;

  @Column({ nullable: true })
  member_whitelist: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  whitelistMember(memberId: number) {
    const whitelist = JSON.parse(this.member_whitelist);
    return whitelist.includes(memberId);
  }
}
