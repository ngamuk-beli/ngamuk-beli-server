const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/admin.controller");
const user = require("./user");
const product = require("./product")
const category = require("./category")

router.post("/api/admin/login", admin_controller.login);
router.use("/api/user", user);
router.use("/api/product", product)
router.use("/api/category", category)

module.exports = router;
