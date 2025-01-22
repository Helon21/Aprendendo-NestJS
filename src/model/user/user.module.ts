import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from '../../database/prisma.service';
import { PrismaPeopleRepository } from '../../repository/prisma/user/prisma-people-repository';
import { PeopleRepository } from '../../repository/user/people-repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    PrismaService,
    {
      provide: PeopleRepository,
      useClass: PrismaPeopleRepository,
    },
  ],
})
export class UserModule {}
