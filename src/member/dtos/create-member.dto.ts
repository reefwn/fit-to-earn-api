import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
} from 'class-validator';
import { Gender } from '../enums/gender.enum';

export class CreateMemberDto {
  @ApiProperty()
  @IsNotEmpty()
  employee_code: string;

  @ApiProperty()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty()
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({ required: true })
  @IsEmail()
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  tel: string;

  @ApiPropertyOptional()
  @IsOptional()
  citizen_id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  birthdate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(Gender)
  gender: string;

  @ApiPropertyOptional()
  @IsOptional()
  department: string;
}
