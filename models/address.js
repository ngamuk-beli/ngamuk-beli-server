"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, { foreignKey: "user_id" });
      Address.hasMany(models.Order, { foreignKey: "address_id" });
      Address.hasMany(models.Cart, { foreignKey: "address_id" });
    }
  }
  Address.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Title is required",
          },
        },
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Province is required",
          },
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "City is required",
          },
        },
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "District is required",
          },
        },
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Zipcode is required",
          },
        },
      },
      user_id: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate(address, option) {
          address.title = address.title.toLowerCase();
          address.province = address.province.toLowerCase();
          address.city = address.city.toLowerCase();
          address.district = address.district.toLowerCase();
        },
        beforeUpdate(address, option) {
          address.title = address.title.toLowerCase();
          address.province = address.province.toLowerCase();
          address.city = address.city.toLowerCase();
          address.district = address.district.toLowerCase();
        },
      },
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
