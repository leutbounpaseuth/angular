import { Address } from './address';

export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  profession: string;
  socialSecurityNumber: string;
  birthDate: string;
  birthPlace: string;
  address: Address;
}
