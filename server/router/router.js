const express = require("express");
const router = express.Router();
const photosRoutes = require("../pictures/routes/photosRoutes");

router.use("/photos", photosRoutes);

module.exports = router;
