import { PrismaService } from "src/database/prisma.service";
import { PeopleRepository } from "../people-repository";
import { randomUUID } from "crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaPeopleRepository implements PeopleRepository {

    constructor(private prisma: PrismaService){}

    async create(name: string, peopleFunction: string): Promise<void> {
        await this.prisma.people.create({
            data: {
                id: randomUUID(),
                name,
                function: peopleFunction
            }
        })
    }
}