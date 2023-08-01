const { Order } = require("../models");

const authorized = async (req, res, next) => {
  try {
    const { id } = req.body;
    const order = await Order.findOne({ where: { id } });
    if (!order) {
      throw { name: "NotFound" };
    }
    if (order.user_id !== req.user.id) {
      throw { name: "Forbidden" };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorized;
