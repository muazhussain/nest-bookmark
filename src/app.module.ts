import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, BookmarksModule, PrismaModule],
})
export class AppModule {}
