const { Brand } = require("../models");

class Controller {
  static async new_brand(req, res, next) {
    try {
      const { title } = req.body;
      const brand = await Brand.create({
        title,
      });
      res.status(201).json({ data: `brand ${brand.title} succesfully created` });
    } catch (err) {
      next(err);
    }
  }

  static async get_brand(req, res, next) {
    try {
      const all_brand = Brand.findAll();
      res.status(200).json({ list_brand: all_brand });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
