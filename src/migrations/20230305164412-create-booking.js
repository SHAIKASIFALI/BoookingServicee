"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      flightId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      noOfSeats: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      totalCost: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["ÏnProcess", "Booked", "Cancelled"],
        defaultValue: "InProcess",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bookings");
  },
};
