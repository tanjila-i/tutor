import mongoose from "mongoose";
import { mongooseUrl } from "../secretFile.js";

const connectDB = async () => {
  try {
    await mongoose.connect(mongooseUrl);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed");
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
