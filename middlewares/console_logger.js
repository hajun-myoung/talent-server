export default function console_logger(
    prefix = "Info",
    msg = "The test message",
    isError = false
  ) {
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  
    if (isError) {
      console.error("\x1b[41m%s\x1b[0m", `[${prefix}] [${timeString}] ${msg}`);
    } else {
      console.log("\x1b[46m%s\x1b[0m", `[${prefix}] [${timeString}] ${msg}`);
    }
  }
  