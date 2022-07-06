import { OmitType, PartialType } from '@nestjs/swagger';
import { PostDto } from './post.dto';

export class CreatePostDto extends OmitType(PostDto, ['authorId']) {}
