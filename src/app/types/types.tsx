export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  petIDs: string[]; //Watch out for this one
}

export interface VetInterface {
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

export interface PetInterface {
  _id: string;
  name: string;
  familyName: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  medicalHistory: MedicalEntry[];
  userID: string;
  vetID: string;
}

export interface MedicalEntry {
  date: string;
  description: string;
  treatment: string;
}
