// Dependencies for logging and time formatting
const chalk = require("chalk");
const morgan = require("morgan");
const getMorganTime = require("../utils/timeService");

// Custom logger using morgan and chalk for colored output
const logger = morgan((tokens, req, res) => {
  // Extract logging information
  const status = tokens.status(req, res);
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const responseTime = tokens["response-time"](req, res);

  // Format the log string
  const log = `${getMorganTime()} ${method} ${url} ${status} ${responseTime} ms`;

  // Color the log based on response status
  return status >= 400 ? chalk.redBright(log) : chalk.cyanBright(log);
});

// Export the logger middleware
module.exports = logger;
