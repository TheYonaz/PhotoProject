const express = require("express");
const { getPhotosByCategory } = require("../pictureRestController");
const router = express.Router();

// Define a GET route for fetching photos by category
router.get("/:categories", getPhotosByCategory);

// Export the router for use in the main application
module.exports = router;
