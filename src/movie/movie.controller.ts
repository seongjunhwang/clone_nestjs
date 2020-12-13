import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';

@Controller('movie')
export class MovieController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie : ${movieId}`;
  }

  @Post()
  create() {
    return 'this will create moive';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete : ${movieId}`;
  }

  @Put('/:id')
  update(@Param('id') movieId: string) {
    return `this will update : ${movieId}`;
  }
}
