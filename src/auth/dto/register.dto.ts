import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from 'src/enums/roles.enum';
export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  @IsString()
  email: string;
  @MinLength(6)
  password: string;
  @IsEnum(Role)
  role: Role;
}
