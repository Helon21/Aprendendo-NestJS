import { Body, Controller, Post } from '@nestjs/common';
import { CreatePeopleDto } from './dtos/create-people-dto';
import { PeopleRepository } from './repository/people-repository';

@Controller('app')
export class AppController {
  constructor(
    private peopleRepository: PeopleRepository,
  ) {}

  @Post('hello')
  async getHello(@Body() body: CreatePeopleDto) {

    const { name, function: peopleFunction } = body;

    await this.peopleRepository.create(name, peopleFunction);
  }
}
