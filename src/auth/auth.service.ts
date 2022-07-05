import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user || user.password !== password) return false;
    return user;
  }

  async registerUser(createUserDto: CreateUserDto) {
    return '';
  }
}
