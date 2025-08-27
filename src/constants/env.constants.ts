import dotenv from "dotenv";
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const MONGODB_URI: string = String(process.env.MONGODB_URI);

export default {
  PORT,
  MONGODB_URI,
};
