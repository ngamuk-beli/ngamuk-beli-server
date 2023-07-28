"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product_gallery.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }
  Product_gallery.init(
    {
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product_gallery",
    }
  );
  return Product_gallery;
};
