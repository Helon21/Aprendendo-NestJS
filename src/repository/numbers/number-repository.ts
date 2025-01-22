export abstract class NumberRepository {
    abstract saveNumber(number: number): Promise<void>;
}