export abstract class PeopleRepository {
    abstract create(name: string, lastName: string, email: string, password: string): Promise<void>;
}