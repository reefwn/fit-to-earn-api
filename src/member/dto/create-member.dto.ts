import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';
import { Gender } from '../enums/gender.enum';

export class CreateMemberDto {
  @ApiProperty()
  employee_code: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  nick_name: string;

  @ApiProperty()
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  tel: string;

  @ApiPropertyOptional()
  @IsOptional()
  citizen_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  birthdate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(Gender)
  gender: string;

  @ApiPropertyOptional()
  @IsOptional()
  department: string;
}
