import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    type: String, //§ The user's password hash
    required: true,
  },
  phoneNumber: String,
  address: String,
  petIDs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],
});

export interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  address: string;
  // petIDs: mongoose.Schema.Types.ObjectId[];
}

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
