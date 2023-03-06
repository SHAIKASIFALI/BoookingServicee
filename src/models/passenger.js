"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Booking, {
        foreignKey: "bookingId",
      });
      // define association here
    }
  }
  Passenger.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      sex: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["M", "F", "cannotDisclose"],
        defaultValue: "CannotDisclose",
      },
      bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Passenger",
    }
  );
  return Passenger;
};
