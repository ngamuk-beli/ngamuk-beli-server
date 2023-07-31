const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/admin.controller");
const user_controller = require("../controllers/user.controller");
const user = require("./user");
const address = require("./address");
const product = require("./product");
const category = require("./category");
const variant = require("./variant");
const auth = require("../middlewares/authentication");

router.post("/api/admin/login", admin_controller.login);
router.post("/register", user_controller.register);
router.post("/login", user_controller.user_login);
router.use("/api/product", product);
router.use("/api/category", category);
router.use("/api/variant", variant);

router.use(auth);
router.use("/api/user", user);
router.use("/api/address", address);

module.exports = router;
