import { Body, Controller, Post } from '@nestjs/common';
import { CreatePeopleDto } from '../../dtos/create-people-dto';
import { PeopleRepository } from '../../repository/user/people-repository';

@Controller('app/v1/people')
export class UserController {
  constructor(private peopleRepository: PeopleRepository) {}

  @Post('register')
  async getHello(@Body() body: CreatePeopleDto) {
    const { name, lastName, email, password } = body;

    await this.peopleRepository.create(name, lastName, email, password);
  }
}
