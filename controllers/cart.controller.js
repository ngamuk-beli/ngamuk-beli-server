const { User, Address, Cart } = require("../models");

class Controller {
  static async create_cart(req, res, next) {
    try {
      const userId = req.user.id;
      const { address_id, total_price, nett_price, shipping_cost } = req.body;
      const new_cart = await Cart.create({
        user_id: userId,
        total_price: +total_price,
        nett_price: +nett_price,
        shipping_cost: +shipping_cost,
        address_id: +address_id,
      });
      res.status(201).json({ message: `new cart has been created` });
    } catch (err) {
      next(err);
    }
  }

  static async update_cart(req, res, next) {
    try {
      const user_id = req.user.id;
      const { id, total_price, nett_price, shipping_cost } = req.body;
      const edit_cart = await Cart.update(
        {
          total_price: +total_price,
          nett_price: +nett_price,
          shipping_cost: +shipping_cost,
          address_id: id,
        },
        { where: { user_id } }
      );
      res.status(200).json({ message: `Cart user with ${id} updated` });
    } catch (err) {
      next(err);
    }
  }

  static async get_cart(req, res, next) {
    try {
      const { id } = req.user;
      const user_cart = await Cart.findAll({ where: { user_id: id } });
      res.status(200).json({ data: user_cart });
    } catch (err) {
      next(err);
    }
  }

  static async delete_cart(req, res, next) {
    try {
      const { id } = req.user;
      const delete_cart = await Cart.destroy({ where: { user_id: id } });
      res.status(200).json({ message: `cart user with ${id} has been deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
