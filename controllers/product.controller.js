const { Product, Category, Product_category, sequelize, Variant, Product_gallery } = require("../models");

class ProductController {
  static async create_product(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { name, description, slug, price, sku, quantity, keyword, weight, brand_id, sub_brand, category } = req.body;

      const [foundCategory, created] = await Category.findOrCreate({
        where: { name: category },
        default: {
          name: category,
        },
      });

      const newProduct = await Product.create(
        {
          name,
          description,
          slug,
          price,
          sku,
          quantity,
          keyword,
          weight,
          brand_id,
          sub_brand,
        },
        { transaction: t }
      );

      const productCategory = await Product_category.create(
        {
          product_id: newProduct.id,
          category_id: foundCategory.id,
        },
        { transaction: t }
      );

      res.status(200).json({ message: "Product created!" });
      await t.commit();
    } catch (err) {
      next(err);
      await t.rollback();
    }
  }
  static async update_product(req, res, next) {
    try {
      const { id, name, description, slug, price, sku, quantity, keyword, weight, brand_id, sub_brand } = req.body;

      if (!id) {
        throw { name: "ProductNotFound" };
      }

      const updatedProduct = await Product.update(
        {
          id,
          name,
          description,
          slug,
          price,
          sku,
          quantity,
          keyword,
          weight,
          brand_id,
          sub_brand,
        },
        { where: { id } }
      );

      res.status(200).json({ message: "Product Updated!" });
    } catch (err) {
      next(err);
    }
  }
  static async delete_product(req, res, next) {
    try {
      const id = req.body;

      const productFound = await Product.destroy({ where: id });

      res.status(200).json({ message: "Product deleted!" });
    } catch (err) {
      next(err);
    }
  }
  static async get_all_product(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [
          { model: Variant, attributes: { exclude: ["id", "createdAt", "updatedAt", "product_id"] } },
          { model: Product_gallery, attributes: { exclude: ["createdAt", "updatedAt"] } },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }
  static async get_product(req, res, next) {
    try {
      const { id } = req.body;
      const product = await Product.findOne({ where: { id } });

      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
