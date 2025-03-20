import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bscrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(user: RegisterDto) {
    const userfound = await this.prisma.user.findUnique({
      where: { email: user.email },
    });
    if (userfound) {
      throw new BadRequestException('user already exists');
    }
    const hashedpassword = await bscrypt.hash(user.password, 10);
    const data = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedpassword,
        role: user.role,
      },
    });

    const { password, ...newuser } = data;

    return newuser;
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user && (await bscrypt.compare(password, user.password))) {
      return user;
    }

    throw new UnauthorizedException('Invalid credentials');
  }

  login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
