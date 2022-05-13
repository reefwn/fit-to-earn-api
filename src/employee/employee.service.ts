import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepo: Repository<EmployeeEntity>,
  ) {}

  findOneByCodeAndCitizenId(code: string, citizenId: string) {
    return this.employeeRepo.findOne({
      where: { code, citizen_id: citizenId },
    });
  }
}
