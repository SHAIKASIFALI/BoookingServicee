const { Booking } = require("../models/index");
const RepositoryError = require("../utils/errors/repository-error");
class BookingRepository {
  async create(data) {
    //in this we will store the data of the booking in the booking table
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      console.log(error);
      throw new RepositoryError(
        "something went wrong",
        "error occured while creating a booking in db"
      );
    }
  }
  async update(bookingId, data) {
    try {
      const booking = await Booking.findByPk(bookingId);
      if (data.status) {
        booking.status = data.status;
      }
      await booking.save();
      return booking;
    } catch (error) {
      console.log(error);
      throw new RepositoryError(
        "something went wrong",
        "error occured while updating a booking in db"
      );
    }
  }
}

module.exports = BookingRepository;
