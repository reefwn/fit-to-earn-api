import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { MemberEntity } from './entities/member.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateMemberDto } from './dtos/create-member.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepo: Repository<MemberEntity>,
    private readonly jwtService: JwtService,
  ) {}

  create(dto: Partial<MemberEntity>) {
    return this.memberRepo.create(dto);
  }

  async save(entity: MemberEntity) {
    return this.memberRepo.save(entity);
  }

  findDuplicateMember(dto: CreateMemberDto) {
    const { employee_code, email, citizen_id, tel } = dto;

    return this.memberRepo.find({
      where: [
        { employee_code },
        { email },
        { citizen_id },
        { phone_number: tel },
      ],
    });
  }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(+process.env.SALT_ROUND || 10);
    return bcrypt.hash(password, salt);
  }

  findOneForLogin(email: string) {
    return this.memberRepo.findOne({
      where: { email, verify_email: Not(IsNull()), deleted_at: IsNull() },
      relations: ['apptokens'],
    });
  }

  signJwtToken(member: MemberEntity) {
    return this.jwtService.sign({
      username: member.email,
      sub: member.id,
      iat: +new Date(),
    });
  }
}
