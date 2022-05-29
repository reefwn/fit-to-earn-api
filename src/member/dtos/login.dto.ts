import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { MemberEntity } from '../entities/member.entity';

export class LoginReqDto {
  @ApiProperty()
  @Transform(({ value }) => value.trim().toLowerCase())
  username: string;

  @ApiProperty()
  password: string;

  @ApiPropertyOptional()
  @IsOptional()
  device_type: string;

  @ApiPropertyOptional()
  @IsOptional()
  token: string;
}

export class LoginResDto {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  member: MemberEntity;
}
