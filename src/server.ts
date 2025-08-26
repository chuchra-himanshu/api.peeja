import express, { type Express } from "express";
import CONSTANTS from "./constants";

const app: Express = express();
const PORT = CONSTANTS.ENV_CONSTANTS.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR - Listening at http://localhost:${PORT}`);
    process.exit(1);
  }
  console.log(`SUCCESS - Listening at http://localhost:${PORT}`);
});
