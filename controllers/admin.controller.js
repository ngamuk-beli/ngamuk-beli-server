const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { Admin } = require("../models");

class Controller {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const admin = await Admin.findOne({ where: { username } });
      if (!admin) {
        throw { name: "Unauthorized" };
      }
      const isValidPassword = comparePassword(password, admin.password);
      if (!isValidPassword) {
        throw { name: "Unauthorized" };
      }
      const payload = { id: admin.id };
      const token = generateToken(payload);
      res.status(200).json({
        statusCode: 200,
        id: admin.id,
        access_token: token,
        email: admin.email,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
