import { BaseEntity } from 'src/entities/base.entities';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { Status } from '../enums/status.enum';

@Entity({ name: 'employees' })
export class EmployeeEntity extends BaseEntity {
  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  citizen_id: string;

  @Column({ nullable: true })
  status: Status;

  @Column({ nullable: true })
  genpo: string;

  @Column({ nullable: true })
  section: string;

  @Column({ nullable: true })
  department: string;

  @Column({ nullable: true })
  division: string;

  @Column({ nullable: true })
  company_email: string;

  @Column({ nullable: true })
  interface_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
