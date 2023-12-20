const express = require("express");
const { getPhotosByCategory } = require("../pictureRestController");
const router = express.Router();

router.get("/:categories", getPhotosByCategory);
module.exports = router;
