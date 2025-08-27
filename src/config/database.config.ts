import mongoose from "mongoose";
import CONSTANTS from "../constants";

async function connectToDatabase() {
  const MONGODB_URI = CONSTANTS.ENV_CONSTANTS.MONGODB_URI;
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    console.log("SUCCESS - Database connection established");
    return connection;
  } catch (error) {
    console.log("ERROR - Connecting to Database", error);
    process.exit(1);
  }
}

export default connectToDatabase;
