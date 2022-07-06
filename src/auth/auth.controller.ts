import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { UsersService } from '../users/users.service';

@ApiTags('auth')
@ApiBearerAuth()
@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 200 })
  async login(@Body() loginUserDto: LoginUserDto) {
    const validUser = await this.authService.validateUser(loginUserDto);
    if (!validUser) throw new UnauthorizedException();
    return this.authService.login(validUser);
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  profile(@Request() req) {
    return this.userService.findOne(req.user.id);
  }
}
