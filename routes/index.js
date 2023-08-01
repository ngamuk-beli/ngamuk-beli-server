const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/admin.controller");
const user_controller = require("../controllers/user.controller");
const user = require("./user");
const address = require("./address");
const product = require("./product");
const category = require("./category");
const sub_brand = require("./sub_brand");
const brand = require("./brand");
const variant = require("./variant");
const product_gallery = require("./product_gallery");
const auth = require("../middlewares/authentication");

router.use("/assets", express.static("assets"));
router.post("/api/admin/login", admin_controller.login);
router.post("/register", user_controller.register);
router.post("/login", user_controller.user_login);
router.use("/api/product", product);
router.use("/api/category", category);
router.use("/api/brand", brand);
router.use("/api/sub-brand", sub_brand);
router.use("/api/variant", variant);
router.use("/api/product-gallery", product_gallery);

router.use(auth);
router.use("/api/user", user);
router.use("/api/address", address);

module.exports = router;
