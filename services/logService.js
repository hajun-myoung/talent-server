import { Log } from "../db/index.js";
import console_logger from "../middlewares/console_logger.js";

class logWriter {
  static async newWrite({ payby, amount, createdAt }) {
    if (!payby || !amount)
      console_logger("Service Error", "LogService : no payby or amount", true);

    const LOG = {
      payby,
      amount,
      createdAt,
    };

    console.log(LOG);

    const NEWLOG = await Log.create({ LOG });
    // console.log(NEWLOG);
    return NEWLOG;
  }

  static async findByTime({ startTime, endTime }) {
    const newStartTime = startTime ?? Date.now() - 10;
    const newEndTime = endTime ?? Date.now();

    const LOGS = await Log.findByTime({
      startTime: newStartTime,
      endTime: newEndTime,
    });

    console.log(LOGS);
    return LOGS;
  }

  static async getMax() {
    const data = await Log.findAll();
    const mergedData = {};
    data?.map((log) => {
      if (Object.keys(mergedData).includes(log?.payby)) {
        data[log.payby] += log.amount;
      } else {
        mergedData[log?.payby] = log.amount;
      }
    });

    return mergedData;
  }
}

export { logWriter };
