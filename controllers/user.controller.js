const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User, Address } = require("../models");

class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password, phone_number } = req.body;
      const new_user = await User.create({
        username,
        email,
        password,
        phone_number,
      });
      res.status(201).json({ message: `New user with id ${new_user.id} created.` });
    } catch (err) {
      next(err);
    }
  }

  static async user_login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "Unauthorized" };
      }
      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) {
        throw { name: "Unauthorized" };
      }
      const payload = { id: user.id };
      const token = generateToken(payload);
      res.status(200).json({
        statusCode: 200,
        id: user.id,
        access_token: token,
        email: user.email,
      });
    } catch (err) {
      next(err);
    }
  }

  // get user by id
  static async user_by_id(req, res, next) {
    try {
      const { id } = req.user;
      const user = await User.findOne({
        where: { id },
        include: [{ model: Address, attributes: { exclude: ["id", "createdAt", "updatedAt", "user_id"] } }],
        attributes: { exclude: ["id", "password", "createdAt", "updatedAt"] },
      });
      if (!user) {
        throw { name: "NotFound" };
      }

      res.status(200).json({ data: user });
    } catch (err) {
      next(err);
    }
  }

  // edit user by id
  static async edit_user(req, res, next) {
    try {
      const { id } = req.user;

      const { username, email, password, phone_number } = req.body;

      const edit_user = await User.update(
        {
          username,
          email,
          password,
          phone_number,
        },
        { where: { id }, individualHooks: true },
        
      );  

      res.status(200).json({ message: `user with ${id} successfully edited` });
    } catch (err) {
      next(err);
    }
  }

  //delete w/ address
  static async delete_user(req, res, next) {
    try {
      const { id } = req.user;
      const user = await User.findByPk({ where: id });
      if (!user) {
        throw { name: "NotFound" };
      }
      User.destroy(id);
      res.status(200).json({ message: `user with ${id}` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
