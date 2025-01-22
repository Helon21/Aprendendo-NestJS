import { IsNotEmpty, Length } from 'class-validator';

export class CreatePeopleDto {
    @IsNotEmpty()
    @Length(5, 70 , {
        message: 'The people name should be between $constraint1 and $constraint2 characters.'
    })
    name: string;

    @IsNotEmpty({
        message: 'The people function should not be empty.'
    })
    function: string;
}