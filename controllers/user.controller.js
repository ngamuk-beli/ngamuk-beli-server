const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../models");

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
}

module.exports = Controller;
