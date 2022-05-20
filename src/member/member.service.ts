import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { MemberEntity } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepo: Repository<MemberEntity>,
  ) {}

  create(dto: Partial<MemberEntity>) {
    return this.memberRepo.create(dto);
  }

  async save(entity: MemberEntity) {
    return this.memberRepo.save(entity);
  }

  findOneForLogin(email: string) {
    return this.memberRepo.findOne({
      where: { email, verify_email: Not(IsNull()), deleted_at: IsNull() },
      relations: ['apptokens'],
    });
  }

  findDuplicateMember(
    code: string,
    email: string,
    citizenId: string,
    phone: string,
  ) {
    return this.memberRepo.find({
      where: [
        { employee_code: code },
        { email },
        { citizen_id: citizenId },
        { phone_number: phone },
      ],
    });
  }
}
