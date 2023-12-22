// Setup Express.js server
const express = require("express");
const chalk = require("chalk");
const app = express();

// Import middleware and router
const logger = require("./logger/morganLogger");
const router = require("./router/router");
const setCors = require("./cors/cors");

// Configuration
const config = require("config");

// Apply middleware
app.use(setCors);
app.use(logger);
app.use(express.json());
app.use(express.text());
app.use(router);

// Define the port from config or use default
const PORT = config.get("PORT") || 8181;

// Start the server
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
});
