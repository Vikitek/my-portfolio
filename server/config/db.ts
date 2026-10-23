import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("MONGODB_URI is not defined in the environment.");
  }

  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌");
    throw error;
  }
};

export default connectDB;
