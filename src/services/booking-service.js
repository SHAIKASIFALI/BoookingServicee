const { BookingRepository } = require("../repository/index");
const ServiceError = require("../utils/errors/service-error");
const axios = require("axios");
const { FLIGHT_SERVICE_URL } = require("../config/serverConfig");
class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async createBooking(data) {
    try {
      const flightServiceGetUrl = `${FLIGHT_SERVICE_URL}/${data.flightId}`;
      const flightGet = await axios.get(flightServiceGetUrl);
      const flight = flightGet.data.data;
      console.log(flight);
      if (flight.totalSeats < data.noOfSeats)
        throw new ServiceError(
          "something went wrong while booking",
          "requested no of seats are notavailable in the flight kindly try another flight"
        );
      console.log(flight.price);
      console.log(data.noOfSeats);
      const totalCost = flight.price * data.noOfSeats;
      console.log(totalCost);
      const bookingObject = {
        userId: data.userId,
        flightId: data.flightId,
        noOfSeats: data.noOfSeats,
        totalCost,
      };
      const booking = await this.bookingRepository.create(bookingObject);
      const flightPatchUrl = `${FLIGHT_SERVICE_URL}/${data.flightId}`;
      console.log(flightPatchUrl);
      console.log(flight.totalSeats - data.noOfSeats);
      await axios.patch(flightPatchUrl, {
        totalSeats: flight.totalSeats - data.noOfSeats,
      });
      const bookingUpdt = await this.bookingRepository.update(booking.id, {
        status: "Booked",
      });
      return bookingUpdt;
    } catch (error) {
      console.log(error);
      throw new ServiceError(
        "something went wrong",
        "error occured while creating a booking"
      );
    }
  }
}

module.exports = BookingService;
