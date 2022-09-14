import {
	IsString,
	IsNotEmpty,
	IsEmail,
	Length,
	IsPositive,
	IsOptional,
} from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsEmail()
	readonly email: string

	@IsString()
	@IsNotEmpty()
	@Length(10)
	readonly password: string
	
	@IsOptional()
	@IsPositive()
	readonly customerId: number;
	
}