import * as mongoose from "mongoose";

const vetSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  // The clinic information
  clinicName: {
    type: String,
    required: true,
  },
  clinicAddress: {
    type: String,
    required: true,
  },
  clinicPhoneNumber: {
    type: String,
    required: true,
  },
});

export interface IVet extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  clinicName: string;
  clinicAddress: string;
  clinicPhoneNumber: string;
}

export default mongoose.models.Vet || mongoose.model<IVet>("Vet", vetSchema);
