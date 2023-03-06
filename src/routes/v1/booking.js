const express = require("express");
const { httpCreateBooking } = require("../../controllers/booking-controllers");
const router = express.Router();

//booking route // implement the booking controller..
router.post("/", httpCreateBooking);
module.exports = router;
