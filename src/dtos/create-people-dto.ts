import { IsNotEmpty, Length } from 'class-validator';

export class CreatePeopleDto {
    @IsNotEmpty()
    @Length(5, 70 , {
        message: 'The people name should be between $constraint1 and $constraint2 characters.'
    })
    name: string;

    @IsNotEmpty({
        message: 'The lastName should not be empty.'
    })
    lastName: string;

    @IsNotEmpty({
        message: 'The email should not be empty.'
    })
    email: string;

    @IsNotEmpty()
    @Length(8, 200, {
        message: 'Your password should be between $constraint1 and $constraint2.'
    })
    password: string;
}