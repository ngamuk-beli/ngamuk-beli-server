"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Product_category, { foreignKey: "product_id" });
      Product.belongsToMany(models.Category, { foreignKey: "product_id", through: models.Product_category });
      Product.hasMany(models.Product_gallery, { foreignKey: "product_id" });
      Product.hasMany(models.Variant, { foreignKey: "product_id" });
      Product.hasMany(models.Order_product, { foreignKey: "product_id" });
      Product.belongsToMany(models.Order, { foreignKey: "product_id", through: models.Order_product });
      Product.hasMany(models.Discount, { foreignKey: "product_id" });
      Product.hasMany(models.Cart_product, { foreignKey: "product_id" });
      Product.belongsToMany(models.Cart, { foreignKey: "product_id", through: models.Cart_product });
      Product.hasMany(models.Banner_product, { foreignKey: "product_id" });
      Product.belongsToMany(models.Banner, { foreignKey: "product_id", through: models.Banner_product });
      Product.belongsTo(models.Brand, { foreignKey: "brand_id" });
      Product.belongsTo(models.Sub_brand, { foreignKey: "sub_brand_id" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            massage: "Name is required",
          },
          notNull: {
            massage: "Name is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            massage: "Description is required",
          },
          notNull: {
            massage: "Description is required",
          },
        },
      },
      slug: DataTypes.STRING,
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            massage: "Price is required",
          },
          notNull: {
            massage: "Price is required",
          },
        },
      },
      sku: DataTypes.STRING,
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            massage: "Quantity is required",
          },
          notNull: {
            massage: "Quantity is required",
          },
        },
      },
      keyword: DataTypes.STRING,
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            massage: "Weight is required",
          },
          notNull: {
            massage: "Weight is required",
          },
        },
      },
      brand_id: DataTypes.INTEGER,
      sub_brand_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
