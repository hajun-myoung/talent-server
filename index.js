import dotenv from "dotenv";
import { app } from "./src/app.js";

dotenv.config();
console.log("ON ROOT INDEX.JS    ", process.env.TEST_STRING);

const PORT = process.env.SERVER_PORT || 3001;

app.listen(PORT, () => {
  console.log(`SERVER IS WORKING NOW : http://localhost:${PORT}`);
});
