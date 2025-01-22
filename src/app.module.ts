import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaPeopleRepository } from './repository/prisma/prisma-people-repository';
import { PeopleRepository } from './repository/people-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, {
    provide: PeopleRepository,
    useClass: PrismaPeopleRepository,
  }],
})
export class AppModule {}
