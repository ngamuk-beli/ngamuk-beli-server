const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user.controller");
const auth = require("../middlewares/authentication");

router.post("/register", user_controller.register);
router.post("/login", user_controller.user_login);
router.post("/address", auth, user_controller.address);
// router.get("/:id", auth, user_controller.user_by_id);

module.exports = router;
