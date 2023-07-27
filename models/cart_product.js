"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart_product.belongsTo(models.Product, { foreignKey: "product_id" });
      Cart_product.belongsTo(models.Cart, { foreignKey: "cart_id" });
    }
  }
  Cart_product.init(
    {
      quantity: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      cart_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart_product",
    }
  );
  return Cart_product;
};
