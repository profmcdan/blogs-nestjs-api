import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password length should not be ness than 8' })
  password: string;
}
