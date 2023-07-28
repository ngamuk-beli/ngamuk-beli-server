const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/admin.controller");
const user = require("./user");

router.post("/api/admin/login", admin_controller.login);

router.use("/api/user", user);

module.exports = router;
