export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  petIDs: string[]; //Watch out for this one
}

export interface Vet {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  clinicName: string;
  clinicAddress: string;
  clinicPhoneNumber: string;
}
