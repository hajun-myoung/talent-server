import mongoose from "mongoose";
import dotenv from "dotenv";
import console_logger from "../middlewares/console_logger.js";

import { User } from "./models/User.js";

dotenv.config();
const { DOTENV_MSG, DB_URL } = process.env;

if (DOTENV_MSG) console_logger("DB Info", DOTENV_MSG, false);
else
  console_logger("DB Info", "Failed to load dotenv file on db/index.js", true);

if (!DB_URL) console_logger("DB Error", "Failed to load the DB URL", true);

mongoose.connect(DB_URL);
const DB = mongoose.connection;

DB.on("connected", () => {
  console_logger("DB Info", "Succesfully connected to the MongoDB", false);
});

DB.on("error", (err) => {
  console_logger(
    "DB Error",
    "Failed to connect to the MongoDB with given DB_URL"
  );
});

export { User };
