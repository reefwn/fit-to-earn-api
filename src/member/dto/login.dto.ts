import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @Transform(({ value }) => value.trim().toLowerCase())
  username: string;

  @ApiProperty()
  password: string;

  @ApiPropertyOptional()
  @IsOptional()
  token_device: string;

  @ApiPropertyOptional()
  @IsOptional()
  type_device: string;
}
