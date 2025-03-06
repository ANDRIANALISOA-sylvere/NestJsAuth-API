import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bscrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(user: RegisterDto) {
    const hashedpassword = await bscrypt.hash(user.password, 10);
    const data = await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedpassword,
      },
    });

    const { password, ...newuser } = data;

    return newuser;
  }
}
