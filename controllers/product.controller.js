const { Product, Category, Product_category, sequelize, Variant, Banner_product, Banner } = require("../models");

class ProductController {
  static async create_product(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { name, description, slug, price, sku, quantity, keyword, weight, brand_id, sub_brand_id, category, banner_id } = req.body;

      const [foundCategory, created] = await Category.findOrCreate({
        where: { name: category },
        default: {
          name: category,
        },
      });

      const foundBanner = await Banner.findOne({
        where: { id: banner_id}
      })

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
          sub_brand_id
        },
        { transaction: t }
        );
        
      const newProductBanner = await Banner_product.create({
          product_id: newProduct.id,
          banner_id: foundBanner.id
        }, { transaction: t })

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
    const t = await sequelize.transaction();
    try {
      const { id, name, description, slug, price, sku, quantity, keyword, weight, brand_id, sub_brand_id, category_id , banner_id } = req.body;

      const updatedProduct = await Product.update(
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
          sub_brand_id,
        },
        { where: { id } },
        { transaction: t }
      );

      const newProductBanner = await Banner_product.update({
        product_id: id,
        banner_id: banner_id
      },{
        where: { product_id: id }
      }, { transaction: t })

      const productCategory = await Product_category.update(
        {
          product_id: id,
          category_id: category_id,
        }, {
          where: { product_id: id}
        },
        { transaction: t }
      );

      res.status(200).json({ message: "Product is Updated!" });
      await t.commit();
    } catch (err) {
      next(err);
      await t.rollback();
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
        include: [{ model: Variant, attributes: { exclude: ["id", "createdAt", "updatedAt", "product_id"] } }],
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
