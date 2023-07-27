"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sub_brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sub_brand.hasMany(models.Product, { foreignKey: "sub_brand_id" });
      Sub_brand.belongsTo(models.Brand, { foreignKey: "brand_id" });
    }
  }
  Sub_brand.init(
    {
      title: DataTypes.STRING,
      brand_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sub_brand",
    }
  );
  return Sub_brand;
};
