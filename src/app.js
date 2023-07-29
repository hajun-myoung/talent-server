import cors from "cors";
import express, { Router } from "express";
import console_logger from "../middlewares/console_logger.js";

import { userRouter } from "../routers/userRouter.js";
import { logRouter } from "../routers/logRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const rootRouter = Router();
rootRouter.get("/", async function (req, res, next) {
  try {
    res.status(200).send("Hello, Justice Church");
  } catch (err) {
    console_logger("Root Router", err.message, true);
    next(err);
  }
});

rootRouter.get("/help/:place", async function (req, res, next) {
  try {
    const place = req.params.place;
    console_logger(
      "HELP WANTED",
      `🚨🚨🚨 HELP WANTED ON ${place}. Move Move Move`,
      true
    );

    res.status(201).send({ result: "called" });
  } catch (err) {
    console_logger("Root Router", err.message, true);
  }
});

app.use(rootRouter);
app.use(userRouter);
app.use(logRouter);

export { app };
