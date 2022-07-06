import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async validateUser(loginUserDto: LoginUserDto) {
    const user = await this.usersService.findOneByEmail(loginUserDto.email);
    if (user) {
      const pwMatches = await argon.verify(
        user.password,
        loginUserDto.password,
      );
      if (pwMatches) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      sub: user.id,
      userId: user.id,
      email: user.email,
      firstName: user.firstname,
      lastName: user.lastname,
    };

    return {
      access_token: this.jwt.sign(payload),
    };
  }

  async registerUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
