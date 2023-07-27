"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, { foreignKey: "user_id" });
      User.hasMany(models.Address, { foreignKey: "user_id" });
      User.hasOne(models.Cart, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "User name required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: {
            msg: "Email is requires",
          },
          notNull: {
            msg: "Email is required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password is requires",
          },
          notNull: {
            msg: "Password is required",
          },
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Phone number is requires",
          },
          notNull: {
            msg: "Phone number is required",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(user, option) {
          user.password = hashPassword(user.password, 8);
        },
        beforeUpdate(user, option) {
          user.password = hashPassword(user.password, 8);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
