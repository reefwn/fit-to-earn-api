import { BaseEntity } from 'src/entities/base.entities';
import { MemberEntity } from 'src/member/entities/member.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_apptokens' })
export class UserAppTokenEntity extends BaseEntity {
  @Column()
  member_id: number;

  @Column()
  device_type: string;

  @Column()
  token: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => MemberEntity, (member) => member.apptokens)
  @JoinColumn({ name: 'member_id' })
  member: MemberEntity;
}
