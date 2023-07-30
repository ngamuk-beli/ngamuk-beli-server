const { Address } = require("../models");

class Controller {
  // create address
  static async address(req, res, next) {
    try {
      const { id } = req.user;
      const { title, province, city, district, zipcode } = req.body;
      const user_address = await Address.create({
        title,
        province,
        city,
        district,
        zipcode,
        user_id: +id,
      });
      res.status(201).json({ message: `user with id ${id} succesfully added address` });
    } catch (err) {
      next(err);
    }
  }

  // get address by user id
  static async get_address_user(req, res, next) {
    try {
      const { id } = req.user;
      const user_address = await Address.findOne({ where: { user_id: id } });
      res.status(200).json({ data: user_address });
    } catch (err) {
      next(err);
    }
  }

  //edit address user by id
  static async edit_address_user(req, res, next) {
    try {
      const user_id = req.user.id;
      const { id } = req.body;

      const address_user = await Address.findOne({ where: { id } });

      if (!address_user) {
        throw { name: "NotFound" };
      }

      const edit_address = await Address.update(
        { where: { user_id: user_id } },
        {
          title,
          province,
          city,
          district,
          zipcode,
        }
      );
      res.status(201).json({ message: `address user with ${edit_address.id} edited` });
    } catch (err) {
      next(err);
    }
  }

  //delete address by id
  static async delete_address(req, res, next) {
    try {
      const { id } = req.body;
      const delete_address = await Address.destroy({ where: { id } });
      res.status(200).json({ message: `address with ${delete_address.id} deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
