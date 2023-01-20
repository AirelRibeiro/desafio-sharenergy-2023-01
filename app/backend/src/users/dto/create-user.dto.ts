import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MaxLength,
  MinLength,
  Length,
  IsPhoneNumber,
  IsObject,
} from 'class-validator';

export class Address {
  @IsString()
  @IsNotEmpty()
  @MinLength(15)
  street: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(15)
  stateAndCountry: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(8)
  cep: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phone: string;

  @IsObject()
  @Type(() => Address)
  address: Address;

  @IsString()
  @IsNotEmpty()
  @Length(11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(15)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(10)
  password: string;
}
