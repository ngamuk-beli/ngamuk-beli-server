const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user.controller");
const auth = require("../middlewares/authentication");

// router.use(auth);
router.get("/", user_controller.user_by_id);
router.put("/update", user_controller.edit_user);
router.delete("/:id", user_controller.delete_user);

module.exports = router;
