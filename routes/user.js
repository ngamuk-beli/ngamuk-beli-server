const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user.controller");
const auth = require("../middlewares/authentication");

router.post("/register", user_controller.register);
router.post("/login", user_controller.user_login);
router.get("/", auth, user_controller.user_by_id);
router.put("/update", auth, user_controller.edit_user);
router.delete("/:id", user_controller.delete_user);

module.exports = router;
