export interface Company {
  name: string;
  owner: Person;
  address: Address;
  phone: string; // todo use type and check regex
  email?: string; // todo use type and check regex
  openingHours: string[];
}

export type Gender = 'male' | 'female'

export interface Person {
  firstName: string;
  lastName: string;
  gender: Gender;
}

export interface Address {
  city: string;
  zip: number;
  street: string;
  no: string;
}
