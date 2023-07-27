"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Banner.hasMany(models.Banner_product, { foreignKey: "banner_id" });
      Banner.belongsToMany(models.Product, { foreignKey: "banner_id", through: models.Banner_product });
    }
  }
  Banner.init(
    {
      title: DataTypes.STRING,
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Banner",
    }
  );
  return Banner;
};
