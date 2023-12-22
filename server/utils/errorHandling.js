// Utilities for error handling and logging
const chalk = require("chalk");
const express = require("express");

// Function to handle common errors
const handleError = (res, statNum = 404, message = "page not found!") => {
  // Log error message using chalk for colored output
  console.error(chalk.redBright(message));
  // Send the error response
  return res.status(statNum).send(message);
};

// Function to handle bad requests
const handleBadRequest = async (validator, error) => {
  // Construct custom error message
  const errorMessage = `${validator} Error: ${error.message}`;
  error.message = errorMessage;
  error.status = error.status || 400;
  // Reject the promise with the updated error
  return Promise.reject(error);
};

// Export the error handling functions
exports.handleError = handleError;
exports.handleBadRequest = handleBadRequest;
