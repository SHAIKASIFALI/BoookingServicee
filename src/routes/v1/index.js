const express = require("express");
const router = express.Router();
const bookingRoutes = require("./booking");

router.use("/booking", bookingRoutes);
module.exports = router;
