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
import * as bcrypt from 'bcrypt';

@Entity({ name: 'members' })
export class MemberEntity extends BaseEntity {
  @Column({ nullable: true })
  employee_code: string;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  citizen_id: string;

  @Column({ nullable: true })
  google_oauth_token: string;

  @Column({ nullable: true })
  gender: Gender;

  @Column({ nullable: true })
  birthdate: Date;

  @Column({ nullable: true })
  department: boolean;

  @Column({ nullable: true })
  total_csrtime: number;

  @Column({ nullable: true })
  wallet_address: string;

  @Exclude()
  @Column({ nullable: true })
  decrypt_key: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  verify_email: boolean;

  @Exclude()
  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  otp_refcode: string;

  @Column({ nullable: true })
  @Transform(({ value }) => value && `${process.env.IMAGE_URL}${value}`)
  profile_image: string;

  @Column({ nullable: true })
  emergency_contact_name: string;

  @Column({ nullable: true })
  emergency_contact_mobile: string;

  @Column({ nullable: true })
  emergency_contact_type: string;

  @Column({ nullable: true })
  chest: string;

  @Column({ nullable: true })
  size: string;

  @Column({ nullable: true })
  congenital_disease: string;

  @Column({ nullable: true })
  is_notification: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => UserAppTokenEntity, (apptoken) => apptoken.member)
  apptokens: UserAppTokenEntity[];

  async comparePassword(password: string) {
    return bcrypt.compare(password, this.password);
  }

  findToken(device_type: string, token: string) {
    return this.apptokens.find(
      (item) => item.device_type === device_type && item.token === token,
    );
  }
}
