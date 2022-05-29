import { Exclude, Transform } from 'class-transformer';
import { BaseEntity } from 'src/entities/base.entities';
import { Gender } from 'src/member/enums/gender.enum';
import { UserAppTokenEntity } from 'src/user-apptoken/entities/user-apptoken.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'members' })
export class MemberEntity extends BaseEntity {
  @Column()
  employee_code: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  nickname: string;

  @Column()
  citizen_id: string;

  @Column()
  google_oauth_token: string;

  @Column()
  gender: Gender;

  @Column()
  birthdate: Date;

  @Column()
  department: string;

  @Column()
  total_csrtime: number;

  @Column()
  wallet_address: string;

  @Column()
  decrypt_key: string;

  @Column()
  email: string;

  @Column()
  verify_email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  phone_number: string;

  @Column()
  otp_refcode: string;

  @Column()
  @Transform(({ value }) => value && `${process.env.IMAGE_URL}${value}`)
  profile_image: string;

  @Column()
  emergency_contact_name: string;

  @Column()
  emergency_contact_mobile: string;

  @Column()
  emergency_contact_type: string;

  @Column()
  chest: string;

  @Column()
  size: string;

  @Column()
  congenital_disease: string;

  @Column()
  is_notification: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => UserAppTokenEntity, (apptoken) => apptoken.member)
  apptokens: UserAppTokenEntity[];
}
