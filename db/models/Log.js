import { LogModel } from "../schemas/log.js";

class Log {
  static async create({ LOG }) {
    const NEWLOG = await LogModel.create(LOG);
    return NEWLOG;
  }
  static async findByTime({ startTime, endTime }) {
    const LOGS = await LogModel.find({
      createdAt: {
        $gte: startTime,
        $lte: endTime,
      },
    });
    // console.log(startTime, endTime);
    return LOGS;
  }
}

export { Log };
