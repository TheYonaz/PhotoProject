// CORS configuration for Express.js
const cors = require("cors");
const express = require("express");
const app = express();

// Define allowed origins for CORS
const corsConfig = {
  origin: [
    "http://localhost:8181",
    "http://127.0.0.1:5500",
    "http://localhost:3001",
    "http://localhost:3000",
  ],
};

// Apply CORS configuration to the app
app.use(cors(corsConfig));

// Export the configured app
module.exports = app;
