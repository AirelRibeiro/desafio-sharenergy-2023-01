export class Address {
  street: string;
  city: string;
  stateAndCountry: string;
  cep: string;
}

export class User {
  name: string;
  email: string;
  phone: string;
  address: Address;
  cpf: string;
  username: string;
  password: string;
  created: Date;
  updated: Date;
}
