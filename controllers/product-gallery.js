const { Product_gallery } = require("../models");

class Controller {
  static async get_product_gallery(req, res, next) {
    try {
      const galley = await Product_gallery.findAll();
      res.status(200).json({ data: galley });
    } catch (err) {
      next(err);
    }
  }

  static async create_product_gallery(req, res, next) {
    try {
      const { id } = req.body;
      const new_gallery = await Product_gallery.create({
        image_url: req.file.path,
        product_id: id,
      });
      res.status(201).json({ message: `Product gallery with ${id} has been created` });
    } catch (err) {
      next(err);
    }
  }

  static async update_product_gallery(req, res, next) {
    try {
      const { id, product_id } = req.body;
      const update_gallery = await Product_gallery.update(
        {
          image_url: req.file.path,
          product_id: product_id,
        },
        {
          where: { id },
        }
      );
      res.status(201).json({ message: `Product gallery with ${id} has been updated` });
    } catch (err) {
      next(err);
    }
  }

  static async delete_product_gallery(req, res, next) {
    try {
      const { id } = req.body;
      const deleted = await Product_gallery.destroy({ where: { id } });
      res.status(200).json({ message: `Product gallery with ${id} has been deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
