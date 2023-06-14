const { ConsoleLoggerStrategy, FileLoggerStrategy, Logger } = require('./strategy');

const consoleLogger = new ConsoleLoggerStrategy();
const fileLogger = new FileLoggerStrategy();
const logger = new Logger(consoleLogger);

logger.log("this  message will be logged to the console");

logger.setStrategy(fileLogger);
logger.log("this message will be logged to a file")