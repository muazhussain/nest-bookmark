import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@Module({
  imports: [AuthModule, BookmarksModule],
})
export class AppModule {}
