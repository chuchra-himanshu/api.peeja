import express, { type Express } from "express";
import CONSTANTS from "./constants";
import connectToDatabase from "./config/database.config";

const app: Express = express();
const PORT = CONSTANTS.ENV_CONSTANTS.PORT;

connectToDatabase()
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.log(`ERROR - Listening at http://localhost:${PORT}`);
        process.exit(1);
      }
      console.log(`SUCCESS - Listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("ERROR - Connecting to Database", error);
    process.exit(1);
  });
