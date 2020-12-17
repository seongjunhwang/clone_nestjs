import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MovieService } from './movie.service';
import CreateMovieDto from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `i will search this after ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch('/:id')
  update(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(movieId, updateData);
  }
}
