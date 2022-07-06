import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(postDto: PostDto) {
    return this.prismaService.post.create({ data: postDto });
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: string) {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prismaService.post.update({
      data: updatePostDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaService.post.delete({ where: { id } });
  }
}
