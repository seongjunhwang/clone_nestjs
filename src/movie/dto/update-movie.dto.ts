// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
// eslint-disable-next-line prettier/prettier
import  CreateMovieDto  from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
