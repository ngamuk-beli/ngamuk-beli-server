"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order_product.belongsTo(models.Product, { foreignKey: "product_id" });
      Order_product.belongsTo(models.Order, { foreignKey: "order_id" });
    }
  }
  Order_product.init(
    {
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order_product",
    }
  );
  return Order_product;
};
