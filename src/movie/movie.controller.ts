import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Query,
} from '@nestjs/common';

@Controller('movie')
export class MovieController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `i will search this after ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie : ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'this will create moive';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete : ${movieId}`;
  }

  @Put('/:id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      updateData,
    };
  }
}
