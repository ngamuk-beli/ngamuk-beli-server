const { Order, Address, User } = require("../models");

class Controller {
  static async get_order(req, res, next) {
    try {
      const { id } = req.user;
      const order = await Order.findAll({
        where: { user_id: id },
        include: [{ model: User }, { model: Address }],
      });
      res.status(200).json({ data: order });
    } catch (err) {
      next(err);
    }
  }

  static async create_order(req, res, next) {
    try {
      const { id } = req.user;
      const { total_price, nett_price, shipping_cost, status, address_id } = req.body;

      const order = await Order.create({
        user_id: id,
        total_price,
        nett_price,
        shipping_cost,
        status,
        address_id,
      });

      res.status(201).json({ message: `Order user ${id} created` });
    } catch (err) {
      next(err);
    }
  }

  static async update_order(req, res, next) {
    try {
      const { id, total_price, nett_price, shipping_cost, status, address_id } = req.body;

      const update_order = await Order.update(
        {
          total_price,
          nett_price,
          shipping_cost,
          status,
          address_id,
        },
        { where: { id } }
      );

      res.status(201).json({ message: `order ${id} edited` });
    } catch (err) {
      next(err);
    }
  }

  static async delete_order(req, res, next) {
    try {
      const { id } = req.body;
      const delete_order = await Order.destroy({ where: { id } });
      res.status(200).json({ message: `order with id ${id} deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
