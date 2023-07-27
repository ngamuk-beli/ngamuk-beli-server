"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Address, { foreignKey: "address_id" });
      Cart.belongsTo(models.User, { foreignKey: "user_id" });
      Cart.hasMany(models.Cart_product, { foreignKey: "cart_id" });
      Cart.belongsToMany(models.Product, { foreignKey: "cart_id", through: models.Cart_product });
    }
  }
  Cart.init(
    {
      total_price: DataTypes.INTEGER,
      nett_price: DataTypes.INTEGER,
      shipping_cost: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      address_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
