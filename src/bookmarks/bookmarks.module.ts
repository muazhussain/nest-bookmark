import { Module } from '@nestjs/common';
import { BookmarksService } from './services/bookmarks.service';
import { BookmarksController } from './controllers/bookmarks.controller';

@Module({
  providers: [BookmarksService],
  controllers: [BookmarksController]
})
export class BookmarksModule {}
