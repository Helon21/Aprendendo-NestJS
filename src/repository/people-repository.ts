export abstract class PeopleRepository {
    abstract create(name: string, peopleFunction: string): Promise<void>;
}