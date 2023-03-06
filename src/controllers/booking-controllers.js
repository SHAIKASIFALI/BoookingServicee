const { BookingService } = require("../services/index");
const bookingService = new BookingService();

const httpCreateBooking = async (req, res, next) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    return res.status(201).json({
      data: booking,
      msg: `successfully created a booking`,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: error.name,
      msg: error.message,
      success: false,
      err: error.explanation,
    });
  }
};

module.exports = {
  httpCreateBooking,
};
