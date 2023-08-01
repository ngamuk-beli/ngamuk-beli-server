const { Address } = require("../models");

const authorizedAddress = async (req, res, next) => {
  try {
    const { id } = req.body;
    const address = await Address.findOne({ where: { id } });
    if (!address) {
      throw { name: "NotFound" };
    }
    if (address.user_id !== req.user.id) {
      throw { name: "Forbidden" };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorizedAddress;
