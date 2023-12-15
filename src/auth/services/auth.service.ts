import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from '../dtos/sign-up.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }
    async signUp(payload: AuthDto) {
        // create user
        const user = await this.prisma.user
    }
}
