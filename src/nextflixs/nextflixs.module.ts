import { Module } from '@nestjs/common';
import { NextflixsService } from './nextflixs.service';
import { NextflixsController } from './nextflixs.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [NextflixsController],
  providers: [NextflixsService],
})
export class NextflixsModule { }
