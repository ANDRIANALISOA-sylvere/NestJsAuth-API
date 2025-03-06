import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsEmail()
  @IsString()
  email: string;
  @MinLength(6)
  password: string;
}
