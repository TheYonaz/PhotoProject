// Setup express router
const express = require("express");
const router = express.Router();

// Import the routes for photos
const photosRoutes = require("../pictures/routes/photosRoutes");

// Use the photosRoutes for requests to '/photos'
router.use("/photos", photosRoutes);

// Export the router for use in the main application
module.exports = router;
