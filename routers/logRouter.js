import { Router } from "express";
import { logWriter } from "../services/logService.js";
import console_logger from "../middlewares/console_logger.js";

const logRouter = Router();

logRouter.post("/log/create", async (req, res, next) => {
  try {
    const { payby, amount } = req.body;
    const dateNow = Date.now();

    const NEW_LOG = await logWriter.newWrite({
      payby,
      amount,
      createdAt: dateNow,
    });

    res.status(201).send({ NEW_LOG });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

logRouter.post("/log/find", async (req, res, next) => {
  try {
    const { startTime, endTime } = req.body;
    const LOGS = await logWriter.findByTime({ startTime, endTime });
    console.log(LOGS);

    res.status(201).send({ LOGS });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

export { logRouter };
