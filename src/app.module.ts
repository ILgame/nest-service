import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NextflixsModule } from './nextflixs/nextflixs.module';

@Module({
  imports: [NextflixsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
