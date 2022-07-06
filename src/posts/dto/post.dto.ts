import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class PostDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  body: string;

  // categories: string
  @IsNotEmpty()
  @IsString()
  authorId: string;
}
