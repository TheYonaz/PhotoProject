const chalk = require("chalk");
const express = require("express");

const handleError = (res, statNum = 404, message = "page not found!") => {
  console.error(chalk.redBright(message));
  return res.status(statNum).send(message);
};
const handleBadRequest = async (validator, error) => {
  const errorMessage = `${validator} Error: ${error.message}`;
  error.message = errorMessage;
  error.status = error.status || 400;
  return Promise.reject(error);
};

exports.handleError = handleError;
exports.handleBadRequest = handleBadRequest;
