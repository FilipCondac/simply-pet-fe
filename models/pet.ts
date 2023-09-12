import * as mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  species: String, // e.g. 'Dog', 'Cat', 'Bird', etc.
  breed: String, // e.g. 'Golden Retriever', 'Siamese', etc.
  age: Number, // The age of the pet
  weight: Number, // The weight of the pet
  medicalHistory: [
    // An array of objects to store the medical history
    {
      date: Date,
      description: String,
      treatment: String,
    },
  ],
  userID: {
    type: String, // The user ID this pet belongs to
    ref: "User",
  },
  vetID: {
    type: String, // The vet ID this pet is associated with
    ref: "Vet",
  },
});

export interface IPet extends mongoose.Document {
  name: string;
  familyName: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  medicalHistory: [
    {
      date: Date;
      description: string;
      treatment: string;
    }
  ];
  userID: string;
  vetID: string;
}

export default mongoose.models.Pet || mongoose.model<IPet>("Pet", petSchema);
