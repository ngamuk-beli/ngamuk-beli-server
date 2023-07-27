"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.Payment_history, { foreignKey: "order_id" });
      Order.hasMany(models.Order_product, { foreignKey: "order_id" });
      Order.belongsTo(models.User, { foreignKey: "user_id" });
      Order.belongsTo(models.Address, { foreignKey: "address_id" });
      Order.belongsToMany(models.Product, { foreignKey: "order_id", through: models.Order_product });
    }
  }
  Order.init(
    {
      total_price: DataTypes.INTEGER,
      nett_price: DataTypes.INTEGER,
      shipping_cost: DataTypes.INTEGER,
      status: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      address_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
