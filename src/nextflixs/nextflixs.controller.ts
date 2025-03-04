import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { NextflixsService } from './nextflixs.service';
import { res } from 'src/dto/nextflix.dto';

@Controller('nextflixs')
export class NextflixsController {
  constructor(private readonly nextflixsService: NextflixsService) { }

  @Get('top-rate/:page')
  async getTopRate(
    @Param('page') page: string,
    @Query('language') language: string
  ) {
    try {
      const data: res = await this.nextflixsService.getTopRate(+page, language);

      return {
        statusCode: HttpStatus.OK,
        message: 'Success',
        data
      };
    } catch (error) {
      const statusCode = typeof error.status === 'number' ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;

      return {
        statusCode,
        message: error.message || 'Internal Server Error'
      };
    }
  }

  @Get('tv-shows/:page')
  async getTvShows(
    @Param('page') page: string,
    @Query('type') type: string,
    @Query('language') language: string
  ) {
    try {
      const data: res = await this.nextflixsService.getTvShows(+page, language, type);

      return {
        statusCode: HttpStatus.OK,
        message: 'Success',
        data
      };
    } catch (error) {
      const statusCode = typeof error.status === 'number' ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;

      return {
        statusCode,
        message: error.message || 'Internal Server Error'
      };
    }
  }

  @Get('movies/:page')
  async getMovies(
    @Param('page') page: string,
    @Query('type') type: string,
    @Query('language') language: string
  ) {
    try {
      const data: res = await this.nextflixsService.getMovies(+page, language, type);

      return {
        statusCode: HttpStatus.OK,
        message: 'Success',
        data
      }
    } catch (error) {
      const statusCode = typeof error.status === 'number' ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;

      return {
        status,
        message: error.message || 'Internal Server Error'
      };
    };
  }

  @Get('new-popular/:page')
  async getNewPopular(
    @Param('page') page: string,
    @Query('language') language: string
  ) {
    try {
      const data: res = await this.nextflixsService.getNewPopular(+page, language);

      return {
        statusCode: HttpStatus.OK,
        message: 'Success',
        data
      };
    } catch (error) {
      const statusCode = typeof error.status === 'number' ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;

      return {
        statusCode,
        message: error.message || 'Internal Server Error'
      };
    }
  }

  @Get('search-muti/:page')
  async getSearchMuti(
    @Param('page') page: string,
    @Query('term') term: string,
    @Query('language') language: string
  ) {
    try {
      const data: res = await this.nextflixsService.getSearchMuti(+page, language, term);
      return {
        statusCode: HttpStatus.OK,
        message: 'Success',
        data
      }
    } catch (error) {
      const statusCode = typeof error.status === 'number' ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;

      return {
        statusCode,
        message: error.message || 'Internal Server Error'
      };
    };
  }
}

