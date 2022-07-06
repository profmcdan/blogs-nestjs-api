import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hash = await argon.hash(createUserDto.password);
    try {
      const user = await this.prismaService.user.create({
        data: { ...createUserDto, password: hash },
      });
      delete user.password;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already exists');
        }
        throw error;
      }
    }
  }

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    delete user.password;
    return user;
  }

  async findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      data: updateUserDto,
      where: { id },
    });
  }

  async remove(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
