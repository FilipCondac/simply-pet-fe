import mongoose from "mongoose";

const conenctDB = async () => {
  try {
    const URI = process.env.NEXT_PUBLIC_MONGO_URI as string;
    await mongoose.connect(URI);
    console.log("MongoDB Connected");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error(`An unexpected error occurred: ${error}`);
    }
  }
};

export default conenctDB;
