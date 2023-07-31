const { Variant, Product } = require("../models");

class Controller {
  static async createVariant(req, res, next) {
    try {
      const { id, quantity, description, title } = req.body;
      const variant = await Variant.create({
        quantity,
        description,
        title,
        product_id: id,
      });
      res.status(201).json({ message: `added variant at product ${id}` });
    } catch (err) {
      next(err);
    }
  }

  static async getVariant(req, res, next) {
    try {
      const allVariant = await Variant.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json({ message: allVariant });
    } catch (err) {
      next(err);
    }
  }

  static async editVariant(req, res, next) {
    try {
      const { id, quantity, description, title } = req.body;

      const updatedVariant = await Variant.update(
        {
          quantity,
          description,
          title,
        },
        { where: { id } }
      );

      res.status(200).json({ message: `variant with ${id} updated` });
    } catch (err) {
      next(err);
    }
  }

  static async deleteVariant(req, res, next) {
    try {
      const { id } = req.body;
      const deletedVariant = await Variant.destroy({ where: { id } });
      res.status(200).json({ message: `variant with ${id} has been deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
