import { BaseEntity } from 'src/entities/base.entities';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { Status } from '../enums/status.enum';

@Entity({ name: 'employees' })
export class EmployeeEntity extends BaseEntity {
  @Column()
  code: string;

  @Column()
  type: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  citizen_id: string;

  @Column()
  status: Status;

  @Column()
  genpo: string;

  @Column()
  section: string;

  @Column()
  department: string;

  @Column()
  division: string;

  @Column()
  company_email: string;

  @Column()
  interface_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
